/* Regional source crops share the original 1600x1000 art coordinate space. */
(() => {
  'use strict';
  const host=document.getElementById('scene-depth');
  const occlusion=document.getElementById('scene-occlusion');
  const map=document.getElementById('map');
  const art=document.getElementById('map-art');
  let key=null, token=0, frame=0, offset={x:0,y:0};
  let loaded=0, missing=[], layers=[], dragging=false, origin=null;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  function paint(){
    frame=0;
    for(const layer of layers){
      // Region masks move less than one scene pixel: no floating architecture.
      const x=reduced.matches?0:offset.x*layer.depth*.9;
      const y=reduced.matches?0:offset.y*layer.depth*.5;
      layer.element.style.transform=`translate3d(${x}px,${y}px,0)`;
    }
  }
  function requestPaint(){if(!frame)frame=requestAnimationFrame(paint);}
  function clear(){token++;host.replaceChildren();occlusion.replaceChildren();layers=[];loaded=0;missing=[];offset={x:0,y:0};requestPaint();}
  async function setScene(sceneKey,originalFallback=false){
    clear();key=sceneKey;const ticket=token;
    if(originalFallback)return;
    const assets=window.FENGHUANG_SCENE_ASSETS?.scenes[sceneKey];
    if(!assets)return;
    const prepared=await Promise.all((assets.layers||[]).map(async spec=>{
      const img=new Image();img.alt='';img.decoding='async';img.draggable=false;
      const good=await new Promise(resolve=>{img.onload=()=>resolve(true);img.onerror=()=>resolve(false);img.src=spec.file;});
      if(ticket!==token)return null;
      if(!good){missing.push(spec.kind);return;}
      const [x,y,w,h]=spec.bounds;
      img.className=`scene-region layer-${spec.kind}`;img.dataset.layer=spec.kind;
      Object.assign(img.style,{left:`${x}px`,top:`${y}px`,width:`${w}px`,height:`${h}px`});
      img.dataset.role=spec.role||'depth';
      return {element:img,depth:spec.role==='occlusion'?0:spec.depth,role:spec.role||'depth'};
    }));
    if(ticket!==token)return;
    // Append in manifest order, never in asynchronous image-completion order.
    for(const item of prepared.filter(Boolean)){
      (item.role==='occlusion'?occlusion:host).append(item.element);layers.push(item);loaded++;
    }
    requestPaint();
  }
  map.addEventListener('pointerdown',e=>{dragging=true;origin={x:e.clientX,y:e.clientY};});
  map.addEventListener('pointermove',e=>{
    if(document.body.dataset.screen!=='map')return;
    if(e.pointerType==='touch'&&!dragging)return;
    const box=map.getBoundingClientRect();
    offset={x:Math.max(-1,Math.min(1,dragging?(e.clientX-origin.x)/90:(e.clientX-box.left-box.width/2)/box.width)),y:Math.max(-1,Math.min(1,dragging?(e.clientY-origin.y)/90:(e.clientY-box.top-box.height/2)/box.height))};
    requestPaint();
  });
  function settle(){dragging=false;origin=null;offset={x:0,y:0};requestPaint();}
  for(const type of ['pointerup','pointercancel','pointerleave'])map.addEventListener(type,settle);
  window.addEventListener('fenghuang:scene-changed',e=>setScene(e.detail.key,e.detail.originalFallback));
  window.addEventListener('fenghuang:scene-unavailable',()=>{clear();key=null;});
  art.addEventListener('error',()=>{clear();key=null;});
  if(art.dataset.sceneKey)setScene(art.dataset.sceneKey);
  window.FenghuangSceneLayers=Object.freeze({getDiagnostics:()=>({key,loaded,missing:[...missing],layerCount:layers.length,occlusionCount:layers.filter(l=>l.role==='occlusion').length,space:[1600,1000],offset:{...offset}}),setScene});
})();
