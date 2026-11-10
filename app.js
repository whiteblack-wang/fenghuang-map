/* Phoenix map module. No external runtime or network is needed. */
(() => {
  'use strict';
  const data = window.FENGHUANG_DATA;
  const viewport = document.getElementById('map');
  const world = document.getElementById('map-world');
  const art = document.getElementById('map-art');
  const state = { x: 0, y: 0, scale: 1, filter: 'all', search: '', selected: null };
  let sceneAnchors = {};
  const pointFor = place => sceneAnchors[place.id] || [place.x,place.y];
  let frame = null;
  const pointers = new Map();
  let gesture = null;
  let suppressClickUntil = 0;
  const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

  function constrain() {
    const w = viewport.clientWidth, h = viewport.clientHeight;
    const bw = data.width * state.scale, bh = data.height * state.scale;
    state.x = bw < w ? (w - bw) / 2 : clamp(state.x, w - bw - 90, 90);
    state.y = bh < h ? (h - bh) / 2 : clamp(state.y, h - bh - 90, 90);
  }

  function paint() {
    frame = null;
    world.style.transform = `translate(${state.x}px,${state.y}px) scale(${state.scale})`;
    world.style.setProperty('--inverse-scale', String(1 / state.scale));
    document.getElementById('zoom-in').disabled = state.scale >= 2.4;
    document.getElementById('zoom-out').disabled = state.scale <= .32;
    window.dispatchEvent(new CustomEvent('fenghuang:view-changed',{detail:{x:state.x,y:state.y,scale:state.scale}}));
  }
  function render() {
    if (frame === null) frame = requestAnimationFrame(paint);
  }
  function resetView() {
    pointers.clear(); gesture = null; viewport.classList.remove('dragging');
    const w = viewport.clientWidth, h = viewport.clientHeight;
    state.scale = Math.min(2.4,Math.max(.32,w/data.width,h/data.height));
    // Fill the viewport around the original river/bridge center; retain free pan.
    state.x = w*.5 - data.initialCenter.x*state.scale;
    state.y = h*.5 - data.initialCenter.y*state.scale;
    constrain();
    render();
  }
  function zoomAt(factor, ax = viewport.clientWidth / 2, ay = viewport.clientHeight * .48) {
    const old = state.scale;
    const next = clamp(old * factor, .32, 2.4);
    state.x = ax - (ax - state.x) * next / old;
    state.y = ay - (ay - state.y) * next / old;
    state.scale = next;
    constrain();
    render();
  }
  function startGesture() {
    const pts = [...pointers.values()];
    if (pts.length >= 2) {
      const [a, b] = pts;
      const cx = (a.x + b.x) / 2, cy = (a.y + b.y) / 2;
      gesture = {type: 'pinch', distance: Math.max(1, Math.hypot(a.x-b.x,a.y-b.y)), cx, cy, x: state.x, y: state.y, scale: state.scale};
      suppressClickUntil = performance.now() + 400;
    } else if (pts.length === 1) {
      gesture = {type: 'drag', px: pts[0].x, py: pts[0].y, x: state.x, y: state.y};
    } else gesture = null;
  }
  viewport.addEventListener('pointerdown', e => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    if (e.target.closest('#retry-map')) return;
    pointers.set(e.pointerId, {x: e.clientX, y: e.clientY});
    const capture = e.target.closest('.hotspot,.lantern-target,.water-target') || viewport;
    capture.setPointerCapture(e.pointerId);
    startGesture();
  });
  viewport.addEventListener('pointermove', e => {
    if (!pointers.has(e.pointerId) || !gesture) return;
    pointers.set(e.pointerId, {x: e.clientX, y: e.clientY});
    const pts = [...pointers.values()];
    if (gesture.type === 'pinch' && pts.length >= 2) {
      const [a,b] = pts;
      const cx = (a.x+b.x)/2, cy = (a.y+b.y)/2;
      const scale = clamp(gesture.scale * Math.hypot(a.x-b.x,a.y-b.y) / gesture.distance, .32, 2.4);
      state.x = cx - (gesture.cx - gesture.x) * scale / gesture.scale;
      state.y = cy - (gesture.cy - gesture.y) * scale / gesture.scale;
      state.scale = scale;
      suppressClickUntil = performance.now() + 400;
    } else if (gesture.type === 'drag') {
      const dx = e.clientX - gesture.px, dy = e.clientY - gesture.py;
      if (Math.hypot(dx,dy) < 5) return;
      state.x = gesture.x + dx;
      state.y = gesture.y + dy;
      suppressClickUntil = performance.now() + 400;
    }
    viewport.classList.add('dragging');
    constrain();
    render();
  });
  function endPointer(e) {
    if (!pointers.has(e.pointerId)) return;
    const pinching = gesture?.type === 'pinch';
    pointers.delete(e.pointerId);
    if (pinching) suppressClickUntil = performance.now() + 400;
    startGesture();
    if (!pointers.size) viewport.classList.remove('dragging');
  }
  for (const event of ['pointerup','pointercancel','lostpointercapture']) viewport.addEventListener(event, endPointer);
  viewport.addEventListener('click', e => {
    if (e.detail !== 0 && performance.now() < suppressClickUntil) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }, true);
  viewport.addEventListener('wheel', e => {
    e.preventDefault();
    zoomAt(Math.exp(-clamp(e.deltaY,-120,120)*.002),e.clientX,e.clientY);
  }, {passive:false});
  viewport.addEventListener('keydown', e => {
    if (e.target.closest('.hotspot')) return;
    const moves = {ArrowLeft:[55,0],ArrowRight:[-55,0],ArrowUp:[0,55],ArrowDown:[0,-55]};
    if (moves[e.key]) {
      e.preventDefault();
      state.x += moves[e.key][0]; state.y += moves[e.key][1]; constrain(); render();
    } else if (e.key === '+' || e.key === '=') {e.preventDefault(); zoomAt(1.23);}
    else if (e.key === '-') {e.preventDefault(); zoomAt(1/1.23);}
    else if (e.key === 'Home') {e.preventDefault(); resetView();}
  });
  // Some mobile browsers suppress synthesized clicks immediately after a map gesture.
  // Activate controls on touch release and deduplicate the following native click.
  function bindControl(id, action) {
    const button = document.getElementById(id);
    let down = null, lastTouch = -Infinity;
    button.addEventListener('pointerdown', e => {
      if (e.pointerType === 'touch') down = {id:e.pointerId,x:e.clientX,y:e.clientY};
    });
    button.addEventListener('pointercancel', () => {down=null;});
    button.addEventListener('pointerup', e => {
      if (e.pointerType !== 'touch' || !down || down.id !== e.pointerId) return;
      const moved = Math.hypot(e.clientX-down.x,e.clientY-down.y);
      down=null;
      if (moved>12 || button.disabled) return;
      lastTouch=performance.now();action();
    });
    button.addEventListener('click', e => {
      if (e.detail !== 0 && performance.now()-lastTouch<650) {e.preventDefault();return;}
      action();
    });
  }
  bindControl('zoom-in', () => zoomAt(1.23));
  bindControl('zoom-out', () => zoomAt(1/1.23));
  bindControl('reset', resetView);
  bindControl('locate', resetView);

  // Points and descriptions belong to the map module; no routing or other pages are created.
  const hotspots = document.getElementById('hotspots');
  const card = document.getElementById('place-card');
  const prompt = document.getElementById('explore-prompt');
  const search = document.getElementById('search');
  const results = document.getElementById('search-results');
  const details = document.getElementById('details');
  const toastEl = document.getElementById('toast');
  const markers = new Map();
  let toastTimer;
  function icon(name) {return `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;}
  function toast(message) {
    clearTimeout(toastTimer);
    toastEl.textContent = message;
    toastEl.hidden = false;
    toastTimer = setTimeout(() => {toastEl.hidden = true;}, 3600);
  }
  for (const place of data.places) {
    const marker = document.createElement('button');
    marker.type = 'button';
    marker.className = `hotspot${place.id === 'wanming' ? ' label-left' : ''}`;
    marker.dataset.place = place.id;
    marker.style.left = `${place.x}px`;
    marker.style.top = `${place.y}px`;
    marker.setAttribute('aria-label', `查看${place.name}介绍，示意位置待核实`);
    marker.setAttribute('aria-pressed', 'false');
    marker.innerHTML = `<span class="pin-icon">${icon(place.icon)}</span><span class="pin-label">${place.name}</span>`;
    marker.addEventListener('click', () => selectPlace(place.id));
    hotspots.append(marker);
    markers.set(place.id, marker);
  }
  const englishNames = {hongqiao:'HONGQIAO BRIDGE',tuojiang:'TUOJIANG RIVER',wanming:'WANMING PAGODA',dongmen:'EAST GATE TOWER',shencongwen:'SHEN CONGWEN’S FORMER RESIDENCE'};
  function imageFallback(img) {
    img.addEventListener('error', () => {
      img.src = 'assets/fenghuang-map.svg';
      img.alt = '凤凰古城示意底图（景点图片暂不可用）';
    }, {once:true});
  }
  function closeCard() {
    if (state.selected) {
      markers.get(state.selected).classList.remove('selected');
      markers.get(state.selected).setAttribute('aria-pressed','false');
    }
    state.selected = null;
    card.hidden = true;
    prompt.hidden = false;
    document.getElementById('app').classList.remove('has-card');
    hotspots.classList.remove('has-selection');
  }
  function focusPlace(place) {
    const [x,y]=pointFor(place);
    state.x = viewport.clientWidth * .55 - x * state.scale;
    state.y = viewport.clientHeight * .47 - y * state.scale;
    constrain(); render();
  }
  function selectPlace(id, options = {}) {
    const place = data.places.find(p => p.id === id);
    if (!place) return false;
    if (state.selected) {
      markers.get(state.selected).classList.remove('selected');
      markers.get(state.selected).setAttribute('aria-pressed','false');
    }
    state.selected = place.id;
    hotspots.classList.add('has-selection');
    markers.get(id).classList.add('selected');
    markers.get(id).setAttribute('aria-pressed','true');
    card.innerHTML = `<div class="card-visual"><img src="${place.image}" alt="${place.name}建筑示意，非实景照片" width="480" height="280"><span class="image-tag">${place.id === 'tuojiang' ? '河岸' : '建筑'}示意 · 非实景</span><span class="card-index">0${data.places.indexOf(place)+1} / 05 · FENGHUANG</span></div><button class="close-card" aria-label="收起景点介绍">${icon('close')}</button><div class="card-body"><div class="card-heading"><div><h2>${place.name}</h2><p class="card-english">${englishNames[place.id]}</p></div><span class="category-tag">${place.categoryLabel}</span></div><p class="card-description">${place.description}</p><div class="card-actions"><button class="detail-button" id="view-details">查看详情 ${icon('arrow')}</button>${place.explore ? `<button class="explore-button" id="explore-${place.id}">深入探索<small>3D · 进入场景</small></button>` : ''}</div><div class="card-foot"><span>${icon('pin')}古城漫游 · 位置待核实</span><span>停下来，看见凤凰</span></div></div>`;
    imageFallback(card.querySelector('img'));
    card.querySelector('.close-card').addEventListener('click', () => {closeCard(); viewport.focus({preventScroll:true});});
    card.querySelector('#view-details').addEventListener('click', () => openDetails(place));
    if (place.explore) card.querySelector(`#explore-${place.id}`).addEventListener('click', () => {
      const event = new CustomEvent('fenghuang:explore', {cancelable:true,detail:{placeId:place.id,sceneId:`${place.id}-local-3d`,source:'map',version:1}});
      if (window.dispatchEvent(event)) toast(`${place.name}局部 3D 场景暂时无法打开，请稍后重试。`);
    });
    card.hidden = false;
    prompt.hidden = true;
    document.getElementById('app').classList.add('has-card');
    if (options.focus) focusPlace(place);
    window.dispatchEvent(new CustomEvent('fenghuang:place-selected',{detail:{placeId:place.id,place,source:'map'}}));
    return true;
  }
  function openDetails(place) {
    document.getElementById('detail-content').innerHTML = `<img class="detail-image" src="${place.image}" alt="${place.name}建筑示意，非实景照片" width="480" height="280"><div class="detail-copy"><p class="eyebrow">凤凰古城 / ${place.categoryLabel} / 建筑示意</p><h2 id="detail-title">${place.name}</h2><p class="card-english">${englishNames[place.id]}</p><p class="detail-quote">${place.description}</p><h3>文化与故事</h3><p>${place.detail}</p>${place.explore ? `<button class="detail-button detail-explore" id="detail-explore">深入探索 · ${place.name} ${icon('arrow')}</button>` : ''}<p class="detail-notice">当前为视觉原型。地形、建筑及景点位置均为示意，尚待地理资料校正，不用于导航。开放时间、票务等信息待核实。</p></div>`;
    imageFallback(details.querySelector('img'));
    const explore=details.querySelector('#detail-explore');
    if(explore)explore.addEventListener('click',()=>{closeDetails();const event=new CustomEvent('fenghuang:explore',{cancelable:true,detail:{placeId:place.id,sceneId:`${place.id}-local-3d`,source:'map',version:1}});if(window.dispatchEvent(event))toast(`${place.name}局部 3D 场景暂时无法打开，请稍后重试。`);});
    if (typeof details.showModal === 'function') details.showModal();
    else {details.setAttribute('open',''); details.classList.add('dialog-fallback');}
  }
  function closeDetails() {
    if (typeof details.close === 'function') details.close();
    else {details.removeAttribute('open'); details.classList.remove('dialog-fallback');}
  }
  document.getElementById('close-details').addEventListener('click', closeDetails);
  details.addEventListener('click', e => {
    if (e.target !== details) return;
    const box = details.getBoundingClientRect();
    if (e.clientX < box.left || e.clientX > box.right || e.clientY < box.top || e.clientY > box.bottom) closeDetails();
  });
  viewport.addEventListener('click', e => {
    if (!e.target.closest('.hotspot') && !e.target.closest('#retry-map')) closeCard();
    results.hidden = true;
    search.blur();
  });
  function matches() {
    return data.places.filter(p => (state.filter === 'all' || p.category === state.filter) && (!state.search || p.name.includes(state.search)));
  }
  function updateFilter() {
    const visible = matches();
    const ids = new Set(visible.map(p => p.id));
    for (const [id, marker] of markers) marker.hidden = !ids.has(id);
    if (state.selected && !ids.has(state.selected)) closeCard();
    results.replaceChildren();
    if (!state.search) {results.hidden = true; return;}
    results.hidden = false;
    if (!visible.length) {
      const empty = document.createElement('p');
      empty.className = 'no-results';
      empty.textContent = '当前分类下未找到景点。可切换“全部”或尝试虹桥、沱江、万名塔、东门、沈从文。';
      results.append(empty);
    }
    for (const place of visible) {
      const result = document.createElement('button');
      result.className = 'search-result';
      const title = document.createElement('span'); title.textContent = place.name;
      const cat = document.createElement('small'); cat.textContent = place.categoryLabel;
      result.append(title,cat);
      result.addEventListener('click', () => {selectPlace(place.id,{focus:true});results.hidden=true;search.blur();});
      results.append(result);
    }
  }
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    state.filter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(b => {const active=b===button; b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
    updateFilter();
  }));
  search.addEventListener('input', () => {state.search = search.value.trim();updateFilter();});
  search.addEventListener('focus', () => {if(state.search)updateFilter();});
  search.addEventListener('keydown', e => {
    if (e.key === 'Enter' && matches().length) {selectPlace(matches()[0].id,{focus:true});results.hidden=true;search.blur();}
    if (e.key === 'Escape') {search.value='';state.search='';updateFilter();search.blur();}
  });
  prompt.addEventListener('click', () => {
    const place = matches()[0];
    if (place) selectPlace(place.id,{focus:true});
    else toast('当前没有匹配的景点，请清空搜索或切换分类。');
  });
  document.querySelectorAll('[data-pending]').forEach(button => button.addEventListener('click', () => toast(`${button.dataset.pending}模块尚未开放，本阶段仅提供地图漫游。`)));
  document.getElementById('nav-map').addEventListener('click', () => {resetView();results.hidden=true;});
  document.addEventListener('keydown', e => {if(e.key==='Escape' && !details.open){closeCard();results.hidden=true;}});
  function handleMapError() {
    if (!art.src.includes('.svg')) {art.src='assets/fenghuang-map.svg';return;}
    art.hidden = true;
    document.getElementById('map-fallback').hidden = false;
  }
  art.addEventListener('error', handleMapError);
  document.getElementById('retry-map').addEventListener('click', () => {
    art.hidden = false;
    art.src = `assets/fenghuang-map.webp?retry=${Date.now()}`;
  });
  art.addEventListener('load', () => {
    art.hidden = false;
    document.getElementById('map-fallback').hidden = true;
  });
  // A cached or immediately blocked image can fail before the deferred script starts.
  if (art.complete && !art.naturalWidth) handleMapError();
  let resizeTimer;
  let lastViewport = {width:viewport.clientWidth,height:viewport.clientHeight};
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const width=viewport.clientWidth,height=viewport.clientHeight;
      if (Math.abs(width-lastViewport.width)>2) resetView();
      else {
        // Keyboard/address-bar height changes should preserve the explored area and zoom.
        state.y+=(height-lastViewport.height)*.48;
        constrain();render();
      }
      lastViewport={width,height};
    }, 100);
  });
  window.FenghuangMap = Object.freeze({version:1,reset:resetView,zoom:zoomAt,getView:() => ({x:state.x,y:state.y,scale:state.scale}),getSelected:()=>state.selected,
  setSceneAnchors:(points)=>{
    if(!points||data.places.some(p=>!Array.isArray(points[p.id])||points[p.id].length!==2||!points[p.id].every(Number.isFinite)))return false;
    sceneAnchors=Object.fromEntries(data.places.map(p=>[p.id,[...points[p.id]]]));
    for(const place of data.places){const [x,y]=pointFor(place);const marker=markers.get(place.id);marker.style.left=`${x}px`;marker.style.top=`${y}px`;marker.dataset.u=x/data.width;marker.dataset.v=y/data.height;}
    return true;
  },
  getPlaceAnchor:id=>{const place=data.places.find(p=>p.id===id);if(!place)return null;const [x,y]=pointFor(place);return {x,y,u:x/data.width,v:y/data.height};},
  closeCard,
  focusPlace:id=>{const place=data.places.find(p=>p.id===id);if(!place)return false;focusPlace(place);return true;},openPlace:(id) => {
    if (!data.places.some(p => p.id === id)) return false;
    state.filter='all';state.search='';search.value='';
    document.querySelectorAll('[data-filter]').forEach(b => {const active=b.dataset.filter==='all';b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
    updateFilter();
    return selectPlace(id,{focus:true});
  }});
  resetView();
  selectPlace('hongqiao');
})();



