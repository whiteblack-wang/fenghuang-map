/* One capped Canvas2D loop. No WebGL, added boats or fabricated geography. */
(() => {
 'use strict';
 const map=document.getElementById('map'),camera=document.getElementById('scene-camera');
 const interactions=document.getElementById('scene-interactions'),water=document.getElementById('scene-water');
 const canvas=document.getElementById('scene-effects'),ctx=canvas.getContext('2d');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const supportsMask=typeof CSS!=='undefined'&&(CSS.supports('mask-image','url("")')||CSS.supports('-webkit-mask-image','url("")'));
 let low=!!((navigator.deviceMemory&&navigator.deviceMemory<=2)||(navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4)||navigator.connection?.saveData);
 let enabled=true,scene=null,sceneKey=null,mask=null,maskData=null,particles=[],ripples=[],glints=[],reflections=[],raf=0,last=0,frames=0,slow=0,version=0,resolution=1;
 let rippleCount=0,lanternSwings=0,gesture=null,multi=false,activePointers=new Set(),lastInput=0;
 // Water contact points beside painted hulls. Boat pixels remain on the plate.
 const wakes={spring:[[1000,701],[1204,886]],cinematic:[[970,628],[1050,751],[1330,907]],summer:[[937,659],[1153,764]],autumn:[[1045,725],[1275,896]],winter:[[1052,721],[1366,906]]};
 const atmospheres={
  spring:{warmth:.75,flow:.13,mist:.025,haze:[[420,138,270],[1120,183,150]]},
  summer:{warmth:.55,flow:.15,mist:.014,haze:[[580,111,250],[1140,158,140]]},
  autumn:{warmth:.85,flow:.12,mist:.022,haze:[[460,130,240],[1040,174,130]]},
  winter:{warmth:.38,flow:.095,mist:.028,haze:[[470,140,270],[1050,165,150]]},
  cinematic:{warmth:.9,flow:.11,mist:.023,haze:[[460,120,270],[1050,150,150]]}
 };
 const atmosphere=()=>atmospheres[sceneKey]||atmospheres.spring;
 const motion=document.createElement('button');motion.id='scene-motion-toggle';motion.type='button';motion.setAttribute('aria-pressed','true');motion.setAttribute('aria-label','暂停场景动态');motion.title='暂停场景动态';motion.innerHTML='<svg class="icon" aria-hidden="true"><use href="#i-water"/></svg>';document.querySelector('.scene-toolbar').append(motion);
 const random=(a,b)=>a+Math.random()*(b-a);
 function inside(x,y,polygon){let ok=false;for(let i=0,j=polygon.length-1;i<polygon.length;j=i++){const a=polygon[i],b=polygon[j];if((a[1]>y)!==(b[1]>y)&&x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0])ok=!ok;}return ok;}
 function isWater(x,y){if(!scene||!inside(x,y,scene.water))return false;if(!maskData)return true;const ix=Math.max(0,Math.min(319,Math.floor(x/5))),iy=Math.max(0,Math.min(199,Math.floor(y/5)));return maskData[(iy*320+ix)*4+3]>100;}
 function canRun(){return !!ctx&&!!scene&&enabled&&!reduced.matches&&!document.hidden&&document.body.dataset.screen==='map';}
 function size(){resolution=low?.45:(innerWidth>1000?.8:.6);canvas.width=Math.round(1600*resolution);canvas.height=Math.round(1000*resolution);}
 function seed(){
  particles=[];glints=[];if(!scene||!maskData)return;
  const sample=()=>{for(let n=0;n<160;n++){const x=random(500,1540),y=random(450,980);if(isWater(x,y)&&isWater(x-9,y-7)&&isWater(x+9,y+7))return {x,y};}return null;};
  const count=low?10:innerWidth>1000?24:18;
  for(let i=0;i<count;i++){const point=sample();if(point)particles.push({...point,phase:random(0,6.28),size:random(.6,1.2),speed:random(.3,.7)});}
  for(let i=0;i<(low?14:24);i++){const point=sample();if(point)glints.push({...point,phase:random(0,6.28),length:random(3,9)});}
 }
 function sync(){
  const run=canRun();document.body.classList.toggle('scene-fx-paused',!run);
  if(run&&!raf){last=0;raf=requestAnimationFrame(tick);}else if(!run){if(raf)cancelAnimationFrame(raf);raf=0;camera.style.transform='none';}
 }
 function gradient(x,y,r,color,alpha){const g=ctx.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,`rgba(${color},${alpha})`);g.addColorStop(1,`rgba(${color},0)`);ctx.fillStyle=g;ctx.fillRect(x-r,y-r,r*2,r*2);}
 function draw(now){
  if(!ctx||!scene)return;const t=now/1000;ctx.setTransform(resolution,0,0,resolution,0,0);ctx.clearRect(0,0,1600,1000);
  const mood=atmosphere();
  if(mask){
   ctx.save();ctx.lineWidth=.9;
   // Moving horizontal glints, masked to pixels of the actual turquoise river.
   for(const g of glints){const x=g.x+Math.sin(t*.11+g.phase)*3,y=g.y+Math.sin(t*.09+g.phase);if(!isWater(x,y))continue;ctx.strokeStyle=`rgba(248,235,188,${(.025+.055*(1+Math.sin(t*.45+g.phase))/2)*mood.warmth})`;ctx.beginPath();ctx.moveTo(x-g.length,y);ctx.quadraticCurveTo(x,y+.6,x+g.length,y);ctx.stroke();}
   // Short broken strips follow warm reflections already present in the source.
   for(let i=0;i<reflections.length;i++){const [x,y]=reflections[i];if(!isWater(x,y))continue;const pulse=(1+Math.sin(t*.32+i*.8))/2;ctx.fillStyle=`rgba(248,218,151,${(.018+pulse*.035)*mood.warmth})`;ctx.fillRect(x-5+Math.sin(t*.2+i)*2,y,6+pulse*9,.8);}
   for(let index=0;index<(wakes[sceneKey]||[]).length;index++){const [x,y]=wakes[sceneKey][index];for(let i=0;i<3;i++){const p=(t*mood.flow+i/3+index*.17)%1;ctx.strokeStyle=`rgba(227,245,211,${.13*Math.sin(p*Math.PI)})`;ctx.beginPath();ctx.ellipse(x+p*3,y+p*2,9+p*23,2+p*5,.06,0,Math.PI*2);ctx.stroke();}}
   ripples=ripples.filter(r=>now-r.time<1500);
   for(const r of ripples){const p=(now-r.time)/1500;for(let i=0;i<2;i++){const radius=5+p*48-i*8;if(radius<1)continue;ctx.strokeStyle=`rgba(245,239,186,${(1-p)*.65})`;ctx.lineWidth=1.5;ctx.beginPath();ctx.ellipse(r.x,r.y,radius,radius*.38,0,0,Math.PI*2);ctx.stroke();}}
   // A dim, discontinuous bridge reflection, always clipped by actual water.
   const bridge=scene.points.hongqiao;
   for(let i=0;i<9;i++){const y=bridge[1]+100+i*9,x=bridge[0]+Math.sin(t*.2+i*.8)*3;if(!isWater(x,y))continue;ctx.fillStyle=`rgba(244,212,145,${.023*mood.warmth*(1-i/11)})`;ctx.fillRect(x-(10+i*.8),y,20+i*1.6,1.2);}
   if(!low){const anchor=scene.points.tuojiang;ctx.save();ctx.translate(anchor[0]+Math.sin(t*.025)*5,anchor[1]+30);ctx.scale(1,.06);gradient(0,0,115,'231,248,229',mood.mist*.48);ctx.restore();}
   ctx.globalCompositeOperation='destination-in';ctx.drawImage(mask,0,0,1600,1000);ctx.restore();
  }
  for(const p of particles){const x=p.x+Math.sin(t*.12+p.phase)*4,y=p.y-Math.sin(t*.1*p.speed+p.phase)*6;if(!isWater(x,y))continue;const alpha=(.035+.13*(1+Math.sin(t*.45+p.phase))/2)*mood.warmth;ctx.fillStyle=`rgba(229,195,107,${alpha})`;ctx.beginPath();ctx.arc(x,y,p.size,0,Math.PI*2);ctx.fill();}
  for(const [x,y] of scene.lanterns)gradient(x,y,22,'248,198,103',(.045+.009*Math.sin(t*.5))*mood.warmth);
  const selected=window.FenghuangMap.getSelected();if(selected&&scene.points[selected]){const [x,y]=scene.points[selected];gradient(x,y,26,'241,218,150',.07);}
  if(!low)for(const [x,y,r] of mood.haze){ctx.save();ctx.translate(x+Math.sin(t*.025)*5,y);ctx.scale(1,.055);gradient(0,0,r,'242,250,229',mood.mist);ctx.restore();}
  if(now-lastInput>1800)camera.style.transform=`translate3d(${Math.sin(t*.065)*.45}px,${Math.cos(t*.06)*.25}px,0) scale(${1.00065+Math.sin(t*.07)*.00025})`;
 }
 function tick(now){raf=0;if(!canRun()){sync();return;}const interval=low?50:1000/30;if(!last||now-last>=interval){const elapsed=performance.now();if(last&&now-last>95)slow++;draw(now);frames++;last=now;if(performance.now()-elapsed>14)slow++;if(!low&&slow>=18){low=true;size();seed();}}raf=requestAnimationFrame(tick);}
 function emitRipple(x,y){if(!scene||!Number.isFinite(x)||!Number.isFinite(y)||!isWater(x,y))return false;rippleCount++;ripples.push({x,y,time:performance.now()});if(ripples.length>8)ripples.shift();if(!ctx||!canRun()){const ring=document.createElement('span');ring.className='ripple';ring.style.left=`${x}px`;ring.style.top=`${y}px`;interactions.append(ring);setTimeout(()=>ring.remove(),900);}return true;}
 function buildTargets(){
  interactions.replaceChildren();if(!scene)return;
  const candidates=[[scene.points.hongqiao[0]+20,scene.points.hongqiao[1]+145],[scene.points.tuojiang[0]-80,scene.points.tuojiang[1]+35]];
  for(const [x,y] of candidates){if(Object.values(scene.points).some(([px,py])=>Math.hypot(px-x,py-y)<100)||!isWater(x,y))continue;const button=document.createElement('button');button.type='button';button.className='water-target';button.style.left=x+'px';button.style.top=y+'px';button.setAttribute('aria-label','点击水面，观察涟漪');button.addEventListener('click',e=>{if(e.detail===0)emitRipple(x,y);});interactions.append(button);}
  for(const [x,y] of scene.lanterns){const button=document.createElement('button');button.type='button';button.className='lantern-target';button.style.left=x+'px';button.style.top=y+'px';button.setAttribute('aria-label','点击灯笼');button.addEventListener('click',e=>{e.stopPropagation();lanternSwings++;button.classList.remove('swing');void button.offsetWidth;button.classList.add('swing');});interactions.append(button);}
 }
 async function setScene(next){
  const ticket=++version;scene=next;sceneKey=next.file;mask=null;maskData=null;particles=[];ripples=[];glints=[];reflections=[];activePointers.clear();gesture=null;multi=false;water.hidden=true;
  // Remove previous-season light immediately, before awaiting the next mask.
  if(ctx){ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,canvas.width,canvas.height);}
  const asset=window.FENGHUANG_SCENE_ASSETS?.scenes[sceneKey];
  if(asset?.waterMask){const image=new Image();const success=await new Promise(resolve=>{image.onload=()=>resolve(true);image.onerror=()=>resolve(false);image.src=asset.waterMask;});if(ticket!==version)return;if(success){mask=image;water.style.maskImage=`url("${asset.waterMask}")`;water.style.webkitMaskImage=`url("${asset.waterMask}")`;water.hidden=!supportsMask;try{const probe=document.createElement('canvas');probe.width=320;probe.height=200;const pc=probe.getContext('2d');pc.drawImage(image,0,0,320,200);maskData=pc.getImageData(0,0,320,200).data;}catch(_){maskData=null;}}}
  if(ticket!==version)return;reflections=(asset?.reflections||[]).filter(([x,y])=>isWater(x,y));water.style.opacity=String(.17*atmosphere().warmth);size();seed();buildTargets();sync();
 }
 map.addEventListener('pointerdown',e=>{lastInput=performance.now();camera.style.transform='none';activePointers.add(e.pointerId);if(activePointers.size>1)multi=true;if(activePointers.size===1)gesture={id:e.pointerId,x:e.clientX,y:e.clientY};});
 map.addEventListener('pointermove',()=>{if(activePointers.size)lastInput=performance.now();});
 map.addEventListener('pointerup',e=>{if(gesture&&gesture.id===e.pointerId&&!multi&&Math.hypot(e.clientX-gesture.x,e.clientY-gesture.y)<7&&!e.target.closest('.hotspot,.lantern-target,#retry-map')){const r=camera.getBoundingClientRect();emitRipple((e.clientX-r.left)*1600/r.width,(e.clientY-r.top)*1000/r.height);}activePointers.delete(e.pointerId);if(!activePointers.size){gesture=null;multi=false;}});
 map.addEventListener('pointercancel',e=>{activePointers.delete(e.pointerId);gesture=null;if(!activePointers.size)multi=false;});
 window.addEventListener('fenghuang:water-hit',e=>{if(e.detail)emitRipple(e.detail.x,e.detail.y);});
 window.addEventListener('fenghuang:scene-changed',e=>setScene(e.detail.scene));
 window.addEventListener('fenghuang:scene-unavailable',()=>{version++;scene=null;sceneKey=null;mask=null;particles=[];interactions.replaceChildren();water.hidden=true;if(ctx)ctx.clearRect(0,0,canvas.width,canvas.height);sync();});
 const observer=new MutationObserver(sync);observer.observe(document.body,{attributes:true,attributeFilter:['data-screen']});
 document.addEventListener('visibilitychange',sync);window.addEventListener('pagehide',()=>{if(raf)cancelAnimationFrame(raf);raf=0;});window.addEventListener('pageshow',sync);
 if(reduced.addEventListener)reduced.addEventListener('change',sync);else reduced.addListener(sync);
 motion.addEventListener('click',()=>{enabled=!enabled;motion.setAttribute('aria-pressed',String(enabled));motion.setAttribute('aria-label',enabled?'暂停场景动态':'开启场景动态');motion.title=motion.getAttribute('aria-label');sync();});
 window.addEventListener('resize',()=>{size();if(scene)seed();sync();});
 size();if(document.getElementById('map-art').dataset.sceneKey){const current=window.FENGHUANG_SCENES[document.getElementById('map-art').dataset.sceneKey];if(current)setScene(current);}else sync();
 window.FenghuangSceneEffects=Object.freeze({getDiagnostics:()=>({scene:sceneKey,running:!!raf,canvasSupported:!!ctx,frames,quality:low?'low':'standard',particleCount:particles.length,particlesAnchored:particles.every(p=>isWater(p.x,p.y)),reflectionAnchors:reflections.length,seasonWarmth:atmosphere().warmth,canvas:[canvas.width,canvas.height],masked:!!mask,rippleCount,lanternSwings,wakeEmitters:(wakes[sceneKey]||[]).length,reducedMotion:reduced.matches,enabled}),emitRipple});
})();
