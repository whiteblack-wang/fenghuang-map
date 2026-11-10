/* Lazy, cancellable scene lifecycle. One bridge geometry serves all four times. */
(() => {
  'use strict';
  const root=document.getElementById('bridge-view'),mount=document.getElementById('bridge-canvas');
  if(!root||!mount)return;
  const loading=document.getElementById('bridge-loading'),error=document.getElementById('bridge-error');
  const state={time:'dusk',stop:'bank',placeId:'hongqiao',ready:false,open:false};
  const scripts=new Map();let ctx=null,generation=0,returnFocus=null,lastStats=null;
  const clamp=(v,min,max)=>Math.min(max,Math.max(min,v));
  const profiles={
    dawn:{sky:'#9c6384',fog:'#b39794',sun:'#ffc378',sunPower:2.9,hemi:'#eac2d0',hemiPower:1.8,ambient:.35,lamps:.6,water:'#77634e',exposure:1.08,sunPos:[-30,16,28]},
    day:{sky:'#c6e5df',fog:'#bfd6cf',sun:'#fff4de',sunPower:3.1,hemi:'#d1eeec',hemiPower:2.2,ambient:.36,lamps:0,water:'#427e72',exposure:1.05,sunPos:[-24,38,24]},
    dusk:{sky:'#87809a',fog:'#9b979e',sun:'#ffcd9a',sunPower:1.8,hemi:'#bfc9de',hemiPower:1.4,ambient:.25,lamps:1.9,water:'#45625d',exposure:1.12,sunPos:[-26,19,23]},
    night:{sky:'#132d52',fog:'#263e57',sun:'#a7c9ef',sunPower:.5,hemi:'#7a9fc2',hemiPower:.70,ambient:.12,lamps:3.4,water:'#173a43',exposure:1.25,sunPos:[-20,35,20]}
  };
  const scenes=window.FenghuangExplorationScenes;
  let config=scenes.hongqiao,stops=config.stops;
  function script(url){
    if(scripts.has(url))return scripts.get(url);
    const promise=new Promise((resolve,reject)=>{
      const el=document.createElement('script');el.src=url;el.async=true;
      const timer=setTimeout(()=>fail(),15000);
      const fail=()=>{clearTimeout(timer);el.remove();scripts.delete(url);reject(new Error('场景脚本加载失败'));};
      el.onload=()=>{clearTimeout(timer);resolve();};el.onerror=fail;document.head.append(el);
    });scripts.set(url,promise);return promise;
  }
  function disposeObject(object){
    if(!object)return;const geometries=new Set(),materials=new Set(),textures=new Set();
    object.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)for(const m of Array.isArray(o.material)?o.material:[o.material])materials.add(m);});
    for(const m of materials)for(const value of Object.values(m))if(value?.isTexture)textures.add(value);
    textures.forEach(t=>t.dispose());materials.forEach(m=>m.dispose());geometries.forEach(g=>g.dispose());
  }
  function release(c){
    if(!c||c.disposed)return;c.disposed=true;cancelAnimationFrame(c.raf);c.events.abort();
    c.water.dispose();disposeObject(c.scene);for(const t of c.skyTextures.values())t.dispose();
    c.renderer.renderLists.dispose();c.renderer.dispose();c.renderer.forceContextLoss();c.renderer.domElement.remove();
  }
  function close(){
    generation++;state.open=false;state.ready=false;root.hidden=true;loading.hidden=true;error.hidden=true;
    document.body.dataset.screen='map';if(ctx){lastStats=diagnostics();release(ctx);ctx=null;}
    mount.replaceChildren();returnFocus?.focus?.({preventScroll:true});
  }
  async function open(placeId='hongqiao'){
    if(!scenes[placeId])return;
    if(state.open&&state.placeId===placeId&&error.hidden)return;
    const next=scenes[placeId];
    if(!state.open)returnFocus=document.activeElement;
    config=next;stops=next.stops;state.placeId=placeId;state.stop='bank';
    root.dataset.scene=placeId;root.setAttribute('aria-label',`${next.title}3D深入探索`);
    root.querySelector('.bridge-header h1').textContent=next.title;
    root.querySelector('.bridge-header p').textContent=next.quote;
    root.querySelector('.bridge-location>span').textContent=`${next.english} · IMMERSIVE JOURNEY`;
    root.querySelector('.time-switch').setAttribute('aria-label',`${next.title}时光切换`);
    const nav=root.querySelector('.bridge-stops'),reset=document.getElementById('bridge-reset');
    nav.replaceChildren();nav.setAttribute('aria-label',`${next.title}观察位置`);
    Object.keys(stops).forEach((key,i)=>{const b=document.createElement('button');b.dataset.stop=key;b.textContent=next.labels[i];b.setAttribute('aria-pressed','false');nav.append(b);});nav.append(reset);
    loading.textContent=`正在走近${next.title}…`;
    if(ctx){release(ctx);ctx=null;}
    const token=++generation;state.open=true;state.ready=false;
    root.hidden=false;root.tabIndex=-1;root.focus({preventScroll:true});document.body.dataset.screen='bridge';
    loading.hidden=false;error.hidden=true;root.dataset.time=state.time;
    let partial=null,model=null;
    try{
      if(!window.THREE)await script('vendor/three.min.js');
      if(!window[next.modelGlobal])await script(next.modelScript);
      if(!window.FenghuangBridgeWater)await script('bridge-water.js');
      if(token!==generation)return;
      const T=window.THREE;model=await window[next.modelGlobal].create(T);
      if(token!==generation){disposeObject(model.root);return;}
      const renderer=new T.WebGLRenderer({antialias:true,alpha:false,powerPreference:'low-power'});
      renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.outputColorSpace=T.SRGBColorSpace;
      renderer.toneMapping=T.ACESFilmicToneMapping;renderer.shadowMap.enabled=true;
      renderer.shadowMap.type=T.PCFSoftShadowMap;renderer.shadowMap.autoUpdate=false;renderer.shadowMap.needsUpdate=true;renderer.info.autoReset=false;
      const scene=new T.Scene(),camera=new T.PerspectiveCamera(45,1,.12,340);
      scene.add(model.root);scene.fog=new T.Fog('#a1b6ad',62,180);
      const hemi=new T.HemisphereLight('#ddf0e7','#4d5145',2),sun=new T.DirectionalLight('#ffedd0',3),ambient=new T.AmbientLight('#d6e0d3',.3);
      sun.position.set(-24,35,24);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);
      Object.assign(sun.shadow.camera,{left:-34,right:34,top:30,bottom:-22,near:1,far:130});
      sun.shadow.bias=-.0004;sun.shadow.normalBias=.06;sun.target.position.set(0,7,0);
      scene.add(hemi,sun,sun.target,ambient);
      const points=[];for(const [x,y,z] of next.points){
        const light=new T.PointLight('#ffaf51',0,24,1.5);light.position.set(x,y,z);scene.add(light);points.push(light);
      }
      const sky=new T.Mesh(new T.SphereGeometry(230,32,20),new T.MeshBasicMaterial({color:'#cde5df',side:T.BackSide,depthWrite:false,fog:false,toneMapped:false}));
      sky.name='photographic-sky-only';sky.renderOrder=-10;scene.add(sky);
      const water=window.FenghuangBridgeWater.create(T,renderer);scene.add(water.mesh);
      partial={config:next,placeId,T,renderer,scene,camera,model,water,hemi,sun,ambient,points,sky,skyTextures:new Map(),skyLoads:new Map(),
        events:new AbortController(),disposed:false,raf:0,frame:0,lastFrame:0,elapsed:0,frameIntervals:[],target:new T.Vector3(),
        transition:null,orbit:null,pointers:new Map(),gesture:null,quality:'standard',dpr:Math.min(devicePixelRatio,1.5)};
      if(token!==generation){release(partial);return;}
      ctx=partial;mount.replaceChildren(renderer.domElement);bind(ctx);resize();setStop(state.stop,true);setTime(state.time);
      renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();if(!ctx||ctx.disposed)return;cancelAnimationFrame(ctx.raf);state.ready=false;error.hidden=false;loading.hidden=true;},{signal:ctx.events.signal});
      state.ready=true;loading.hidden=true;loop(ctx,performance.now());
      document.getElementById('bridge-asset-note').hidden=!model.missingAssets.length;
    }catch(e){
      if(partial)release(partial);else if(model)disposeObject(model.root);
      if(token!==generation)return;ctx=null;state.ready=false;loading.hidden=true;error.hidden=false;
      document.getElementById('bridge-error-message').textContent='场景暂时无法加载。可重试，或返回地图继续漫游。';
      console.warn(`${next.title} scene unavailable:`,e.message);
    }
  }
  function framePosition(stop){
    const t=stops[stop],pos=new ctx.T.Vector3(...t.pos),look=new ctx.T.Vector3(...t.look);
    if(stop==='bank'&&ctx.model.towerBounds){
      // Fit the actual tower between the controls, including short portrait phones.
      const height=root.clientHeight,portrait=ctx.camera.aspect<1;
      const top=portrait?root.querySelector('.time-switch').getBoundingClientRect().bottom+24:65;
      const bottom=height-(portrait?(height<650?110:210):78);
      const [low,high]=ctx.model.towerBounds,focal=height/(2*Math.tan(ctx.camera.fov*Math.PI/360));
      const offset=pos.clone().sub(look),distance=Math.max(offset.length(),focal*(high[1]-low[1]+1.2)/Math.max(140,bottom-top));
      look.y=(low[1]+high[1])/2+((top+bottom)/2-height/2)*distance/focal;
      pos.copy(offset.normalize().multiplyScalar(distance).add(look));
    }else if(stop==='bank') {const factor=Math.max(1,ctx.config.bankAspect/ctx.camera.aspect);pos.sub(look).multiplyScalar(factor).add(look);}
    return {pos,look};
  }
  function syncOrbit(){
    const c=ctx;if(!c)return;const s=new c.T.Spherical().setFromVector3(c.camera.position.clone().sub(c.target));
    c.orbit={radius:s.radius,theta:s.theta,phi:s.phi,baseTheta:c.orbitBounds?.theta??s.theta,basePhi:c.orbitBounds?.phi??s.phi};
  }
  function setStop(stop,instant=false){
    if(!stops[stop])return;state.stop=stop;
    root.querySelectorAll('[data-stop]').forEach(b=>{b.classList.toggle('active',b.dataset.stop===stop);b.setAttribute('aria-pressed',String(b.dataset.stop===stop));});
    document.getElementById('bridge-location-title').textContent=stops[stop].title;
    document.getElementById('bridge-location-desc').textContent=stops[stop].desc;
    if(!ctx)return;const {pos,look}=framePosition(stop);
    const bounds=new ctx.T.Spherical().setFromVector3(pos.clone().sub(look));ctx.orbitBounds={theta:bounds.theta,phi:bounds.phi};
    if(instant||matchMedia('(prefers-reduced-motion: reduce)').matches){ctx.camera.position.copy(pos);ctx.target.copy(look);ctx.camera.lookAt(look);ctx.transition=null;syncOrbit();}
    else ctx.transition={from:ctx.camera.position.clone(),fromLook:ctx.target.clone(),to:pos,toLook:look,start:performance.now(),duration:900};
    ctx.sun.shadow.needsUpdate=true;ctx.renderer.shadowMap.needsUpdate=true;
  }
  async function setTime(time){
    if(!profiles[time])return;state.time=time;root.dataset.time=time;
    root.querySelectorAll('[data-time]').forEach(b=>{b.classList.toggle('active',b.dataset.time===time);b.setAttribute('aria-pressed',String(b.dataset.time===time));});
    const c=ctx;if(!c)return;const p=profiles[time];
    c.scene.background=new c.T.Color(p.sky);c.scene.fog.color.set(p.fog);c.scene.fog.near=time==='day'?85:95;c.scene.fog.far=230;
    c.sun.color.set(p.sun);c.sun.intensity=p.sunPower;c.sun.position.set(...p.sunPos);c.sun.shadow.needsUpdate=true;c.renderer.shadowMap.needsUpdate=true;
    c.hemi.color.set(p.hemi);c.hemi.intensity=p.hemiPower;c.ambient.intensity=p.ambient;
    c.points.forEach((l,i)=>l.intensity=p.lamps*(i<2?11:15));c.model.setLights(p.lamps);
    c.water.setTime(p.water,p.sunPower);c.renderer.toneMappingExposure=p.exposure;
    c.sky.material.color.set(p.sky);c.sky.material.map=null;c.sky.material.needsUpdate=true;
    try{
      if(!c.skyTextures.has(time)) {
        if(!c.skyLoads.has(time))c.skyLoads.set(time,new c.T.TextureLoader().loadAsync(`${c.config.skyDirectory}/sky-${time}.webp`));
        const texture=await c.skyLoads.get(time);texture.colorSpace=c.T.SRGBColorSpace;
        if(c.disposed){texture.dispose();return;}c.skyTextures.set(time,texture);
      }
      if(c===ctx&&state.time===time){c.sky.material.map=c.skyTextures.get(time);c.sky.material.color.set('#ffffff');c.sky.material.needsUpdate=true;}
    }catch(_){if(!c.disposed){c.model.missingAssets.push(`sky-${time}`);if(c===ctx)document.getElementById('bridge-asset-note').hidden=false;}}
  }
  function resize(reframe=true){
    if(!ctx)return;const width=root.clientWidth,height=root.clientHeight;
    ctx.renderer.setSize(width,height);ctx.camera.aspect=width/Math.max(height,1);ctx.camera.updateProjectionMatrix();ctx.water.resize(width,height);
    if(reframe!==false&&!ctx.gesture)setStop(state.stop,true);
  }
  function orbitApply(c){
    const o=c.orbit,s=stops[state.stop];o.radius=clamp(o.radius,s.min,s.max);
    o.theta=clamp(o.theta,o.baseTheta-s.angle,o.baseTheta+s.angle);o.phi=clamp(o.phi,o.basePhi-s.tilt,o.basePhi+s.tilt);
    c.camera.position.setFromSpherical(new c.T.Spherical(o.radius,o.phi,o.theta)).add(c.target);
    c.camera.position.y=Math.max(s.minHeight??(state.stop==='deck'?9.1:.9),c.camera.position.y);c.camera.lookAt(c.target);
  }
  function bind(c){
    const canvas=c.renderer.domElement,signal=c.events.signal;
    function restartGesture(){
      const a=[...c.pointers.values()];if(!a.length){c.gesture=null;return;}
      syncOrbit();c.gesture={points:a.map(p=>({...p})),orbit:{...c.orbit},distance:a.length===2?Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y):0};
    }
    canvas.addEventListener('pointerdown',e=>{
      if(c.pointers.size>=2)return;c.transition=null;
      c.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,startX:e.clientX,startY:e.clientY,moved:false,multi:c.pointers.size>0});
      if(c.pointers.size>1)c.pointers.forEach(p=>p.multi=true);
      canvas.setPointerCapture(e.pointerId);restartGesture();
    },{signal});
    canvas.addEventListener('pointermove',e=>{
      const p=c.pointers.get(e.pointerId);if(!p||!c.gesture)return;
      p.x=e.clientX;p.y=e.clientY;p.moved ||= Math.hypot(p.x-p.startX,p.y-p.startY)>7;
      const a=[...c.pointers.values()],g=c.gesture;
      if(a.length===2){const distance=Math.max(10,Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y));c.orbit.radius=g.orbit.radius*g.distance/distance;}
      else{c.orbit.theta=g.orbit.theta-(a[0].x-g.points[0].x)*.003;c.orbit.phi=g.orbit.phi-(a[0].y-g.points[0].y)*.002;}
      orbitApply(c);
    },{signal});
    function up(e){
      const p=c.pointers.get(e.pointerId);if(!p)return;
      if(e.type==='pointerup'&&!p.moved&&!p.multi){
        const rect=canvas.getBoundingClientRect(),ray=new c.T.Raycaster();
        ray.setFromCamera(new c.T.Vector2((e.clientX-rect.left)/rect.width*2-1,1-(e.clientY-rect.top)/rect.height*2),c.camera);
        const hits=ray.intersectObjects([c.model.root,c.water.mesh],true);
        if(hits[0]?.object===c.water.mesh)c.water.hit(hits[0].point,c.elapsed);
      }
      c.pointers.delete(e.pointerId);restartGesture();
    }
    ['pointerup','pointercancel','lostpointercapture'].forEach(type=>canvas.addEventListener(type,up,{signal}));
    canvas.addEventListener('wheel',e=>{e.preventDefault();c.transition=null;if(!c.orbit)syncOrbit();c.orbit.radius*=Math.exp(e.deltaY*.001);orbitApply(c);},{passive:false,signal});
  }
  function loop(c,now){
    if(c.disposed||c!==ctx||!state.open||!state.ready||document.hidden)return;
    c.raf=requestAnimationFrame(t=>loop(c,t));
    // Accumulate time instead of rounding every frame to the display refresh;
    // otherwise a 55 Hz browser is unnecessarily capped at 27.5 fps.
    const tick=c.lastTick?now-c.lastTick:1000/30;c.lastTick=now;
    c.frameBudget=(c.frameBudget||0)+Math.min(tick,100);
    if(c.frameBudget<1000/30)return;c.frameBudget%=1000/30;
    const delta=now-c.lastFrame;
    if(c.lastFrame&&delta<250)c.frameIntervals.push(delta);if(c.frameIntervals.length>120)c.frameIntervals.shift();
    c.lastFrame=now;c.elapsed+=Math.min(delta||33,100)/1000;
    if(c.transition){
      const m=c.transition,q=clamp((now-m.start)/m.duration,0,1),ease=q*q*(3-2*q);
      c.camera.position.lerpVectors(m.from,m.to,ease);c.target.lerpVectors(m.fromLook,m.toLook,ease);c.camera.lookAt(c.target);
      if(q===1){c.transition=null;syncOrbit();}
    }
    c.sky.position.copy(c.camera.position);c.model.update(c.elapsed);c.water.update(c.elapsed,c.camera);
    c.renderer.info.reset();if(c.frame%2===0||c.transition)c.water.renderReflection(c.scene,c.camera);
    c.renderer.render(c.scene,c.camera);c.frame++;
    if(c.frame===100&&c.frameIntervals.length>50){
      const mean=c.frameIntervals.reduce((a,b)=>a+b,0)/c.frameIntervals.length;
      if(mean>43&&c.dpr>1){c.dpr=1;c.quality='reduced-resolution';c.renderer.setPixelRatio(1);resize(false);}
    }
  }
  function diagnostics(){
    if(!ctx)return {...state,activeCanvasCount:mount.querySelectorAll('canvas').length,lastSession:lastStats};
    const c=ctx,mean=c.frameIntervals.length?c.frameIntervals.reduce((a,b)=>a+b,0)/c.frameIntervals.length:0;
    return {...state,activeCanvasCount:mount.querySelectorAll('canvas').length,archCount:c.model.archCount,storeyCount:c.model.storeyCount,faceCount:c.model.faceCount,windowOpeningCount:c.model.windowOpeningCount,levels:c.model.levels,
      instanceCount:c.model.instanceCount,geometryCount:c.renderer.info.memory.geometries,textureCount:c.renderer.info.memory.textures,
      drawCalls:c.renderer.info.render.calls,triangles:c.renderer.info.render.triangles,frames:c.frame,
      observedFps:mean?Math.round(10000/mean)/10:null,quality:c.quality,pixelRatio:c.dpr,
      camera:c.camera.position.toArray(),target:c.target.toArray(),missingAssets:[...c.model.missingAssets],
      towerScreen:c.model.towerBounds?.map(point=>{const p=new c.T.Vector3(...point).project(c.camera);return {x:(p.x+1)*root.clientWidth/2,y:(1-p.y)*root.clientHeight/2};}),
      geometryIdentity:c.model.root.uuid,waterRippleTime:c.water.uniforms.rippleStart.value};
  }
  document.getElementById('bridge-back').addEventListener('click',close);
  document.getElementById('bridge-error-back').addEventListener('click',close);
  document.getElementById('bridge-retry').addEventListener('click',()=>{if(ctx){release(ctx);ctx=null;}open(state.placeId);});
  document.getElementById('bridge-reset').addEventListener('click',()=>setStop(state.stop));
  root.querySelectorAll('[data-time]').forEach(b=>b.addEventListener('click',()=>setTime(b.dataset.time)));
  root.querySelector('.bridge-stops').addEventListener('click',e=>{const b=e.target.closest('[data-stop]');if(b)setStop(b.dataset.stop);});
  root.addEventListener('keydown',e=>{if(e.key==='Escape')close();});addEventListener('resize',resize);
  document.addEventListener('visibilitychange',()=>{if(!ctx)return;cancelAnimationFrame(ctx.raf);ctx.lastFrame=0;ctx.lastTick=0;ctx.frameBudget=0;if(!document.hidden&&state.open&&state.ready)loop(ctx,performance.now());});
  window.addEventListener('fenghuang:explore',e=>{if(!scenes[e.detail?.placeId])return;e.preventDefault();open(e.detail.placeId);});
  window.BridgeExperience=Object.freeze({open:()=>open('hongqiao'),close,setTime,setStop,getDiagnostics:diagnostics});
  window.WanmingExperience=Object.freeze({open:()=>open('wanming'),close,setTime,setStop,getDiagnostics:diagnostics});
  window.FenghuangExplorer=Object.freeze({open,close,setTime,setStop,getDiagnostics:diagnostics});
})();
