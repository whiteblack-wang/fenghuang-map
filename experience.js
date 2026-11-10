/* Experience orchestration: mode choice, seasons, ambient touch feedback and guide copy. */
(() => {
  'use strict';
  const body = document.body, app = document.getElementById('app'), welcome = document.getElementById('welcome');
  const art = document.getElementById('map-art'), world = document.getElementById('map-world');
  const loading = document.getElementById('scene-loading'), guide = document.getElementById('guide-companion');
  const bubble = document.getElementById('guide-bubble'), guideText = document.getElementById('guide-text');
  const captions = document.getElementById('season-caption');
  const data = window.FENGHUANG_DATA, scenes = window.FENGHUANG_SCENES;
  const state = {mode:'explore', season:'spring'};
  let sceneVersion = 0;
  const guideLines = {
    hongqiao:'沱江之上的风景，也是凤凰的心脏。',
    tuojiang:'沿着沱江，把两岸的风景慢慢看遍。',
    wanming:'万名塔的塔影，映着古城的悠悠时光。',
    dongmen:'穿过东门城楼，走进古城的岁月深处。',
    shencongwen:'在一方院落里，遇见文字中的湘西。'
  };
  function selectedScene(){return state.mode==='panorama'?scenes.cinematic:scenes[state.season];}
  function setBodyScreen(screen){body.dataset.screen=screen;}
  function setSceneImage(){
    const scene=selectedScene();
    loading.hidden=false;
    app.dataset.mode=state.mode;
    // Keep the complete current painting visible while the new scene downloads.
    app.setAttribute('aria-busy','true');
    const ticket=++sceneVersion;
    const asset=window.FENGHUANG_SCENE_ASSETS?.scenes[scene.file];
    const projectedWidth=1600*(window.FenghuangMap?.getView().scale||1)*Math.min(devicePixelRatio||1,2);
    const useDetail=(innerWidth>1000 || projectedWidth>1600) && !(navigator.deviceMemory && navigator.deviceMemory<=2);
    const original=`assets/scene-${scene.file}.webp`;
    const next=asset ? asset[useDetail?'detail':'standard'] : original;
    const image=new Image();
    image.onload=async()=>{
      try{await image.decode();}catch(_){}
      if(ticket!==sceneVersion)return;
      const originalFallback=next!==original&&image.src.endsWith(original);
      art.src=image.src;art.dataset.sceneKey=scene.file;art.dataset.sceneVariant=originalFallback?'original':'refined';art.alt=`凤凰古城${scene.label}艺术场景，地形与景点位置待核实`;
      art.classList.remove('scene-fade');loading.hidden=true;app.setAttribute('aria-busy','false');placeSceneTouches(scene);
      window.dispatchEvent(new CustomEvent('fenghuang:scene-changed',{detail:{key:scene.file,scene,originalFallback}}));
      if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&art.animate)art.animate([{opacity:.92},{opacity:1}],{duration:420,easing:'ease-out'});
    };
    image.onerror=()=>{if(ticket!==sceneVersion)return;if(image.src.endsWith(next)&&next!==original){image.src=original;return;}loading.hidden=true;app.setAttribute('aria-busy','false');art.classList.remove('scene-fade');art.src='assets/fenghuang-map.svg';window.dispatchEvent(new CustomEvent('fenghuang:scene-unavailable'));toast('这一季的场景暂时无法加载，已切换备用底图。');};
    image.src=next;
    captions.innerHTML=`<span>${scene.english} · ${scene.label}</span><b>${scene.title}</b>`;
  }
  function enter(mode){
    state.mode=mode;app.inert=false;welcome.classList.add('leaving');app.dataset.mode=mode;setBodyScreen('map');
    body.dataset.mode=mode;
    document.querySelectorAll('.mode-switch [data-mode]').forEach(b=>{const active=b.dataset.mode===mode;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
    setSceneImage();
    setTimeout(()=>{welcome.hidden=true;guide.hidden=false;},430);
  }
  function chooseMode(mode){enter(mode);}
  document.querySelectorAll('[data-enter-mode]').forEach(button=>button.addEventListener('click',()=>chooseMode(button.dataset.enterMode)));
  document.querySelectorAll('.mode-switch [data-mode]').forEach(button=>button.addEventListener('click',()=>{
    state.mode=button.dataset.mode;
    document.querySelectorAll('.mode-switch [data-mode]').forEach(b=>{const active=b.dataset.mode===state.mode;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
    setSceneImage();
  }));
  document.getElementById('choose-mode').addEventListener('click',()=>{welcome.hidden=false;welcome.classList.remove('leaving');app.inert=true;setBodyScreen('landing');});
  document.querySelectorAll('.season-switch button[data-season]').forEach(button=>button.addEventListener('click',()=>{
    state.season=button.dataset.season;
    document.querySelectorAll('.season-switch button[data-season]').forEach(b=>{const active=b.dataset.season===state.season;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
    if(state.mode==='explore')setSceneImage();
    else {captions.innerHTML=`<span>PANORAMA · ${scenes[state.season].label}</span><b>全景模式保留写实光影</b>`;toast('全景模式使用独立的写实光影场景。');}
  }));
  function toast(message){const old=document.querySelector('.scene-toast');old?.remove();const el=document.createElement('div');el.className='scene-toast';el.textContent=message;app.append(el);setTimeout(()=>el.remove(),2100);}
  function showGuide(id){
    if(!guideLines[id])return;
    guideText.textContent=guideLines[id];
    bubble.classList.remove('guide-pop');void bubble.offsetWidth;bubble.classList.add('guide-pop');
  }
  window.addEventListener('fenghuang:place-selected',e=>showGuide(e.detail?.placeId));
  document.getElementById('guide-close').addEventListener('click',e=>{e.stopPropagation();bubble.hidden=true;});
  document.getElementById('guide-character').addEventListener('click',()=>{
    bubble.hidden=false;const arm=document.querySelector('.guide-arm');guide.classList.remove('wave');void guide.offsetWidth;guide.classList.add('wave');
    if(window.FenghuangMap?.getSelected)showGuide(window.FenghuangMap.getSelected());else toast('你好呀，点击地图上的景点，我会为你介绍。');
  });
  function placeSceneTouches(scene){
    window.FenghuangMap?.setSceneAnchors(scene.points);
    // Scene effects own pointer feedback; old implementation is in the full backup.
  }
  function toggleFullscreen(){
    if(!document.fullscreenElement)document.documentElement.requestFullscreen?.().catch(()=>toast('当前浏览器未允许全屏。'));
    else document.exitFullscreen?.();
  }
  document.querySelectorAll('.fullscreen-button').forEach(button=>button.addEventListener('click',toggleFullscreen));
  window.addEventListener('fenghuang:map-ready',()=>{placeSceneTouches(selectedScene());showGuide('hongqiao');});
  // app.js loads before this file; call the first selected guide after the map is available.
  setTimeout(()=>{if(window.FenghuangMap)showGuide('hongqiao');},30);
  window.FenghuangExperience=Object.freeze({getState:()=>({...state}),enter,chooseMode,setSeason:(s)=>{if(scenes[s]){state.season=s;setSceneImage();}}});
})();


