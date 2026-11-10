/* A lazily mounted, isolated runtime from the supplied fenghuang-jelly archive. */
(() => {
  'use strict';
  const entry=document.getElementById('open-tuojiang');
  const overlay=document.createElement('section');overlay.id='tuojiang-experience';overlay.className='tuojiang-experience';overlay.hidden=true;overlay.dataset.state='closed';
  overlay.setAttribute('role','dialog');overlay.setAttribute('aria-modal','true');overlay.setAttribute('aria-labelledby','tuojiang-title');
  overlay.innerHTML='<div class="tuojiang-frame-host" id="tuojiang-frame-host"></div><div class="tuojiang-intro"><h2 id="tuojiang-title">体验会动的沱江</h2><span class="tuojiang-intro-line" aria-hidden="true"></span><p class="tuojiang-load-status" id="tuojiang-load-status" role="status" aria-live="polite">正在铺开沱江沙盘…</p></div><div class="tuojiang-error" id="tuojiang-error" hidden><p id="tuojiang-error-text"></p><button type="button" class="tuojiang-retry" id="tuojiang-retry">重新进入</button></div><button type="button" class="tuojiang-back" id="tuojiang-back">← 返回首页</button>';
  document.body.append(overlay);
  const host=overlay.querySelector('.tuojiang-frame-host'),back=overlay.querySelector('#tuojiang-back'),status=overlay.querySelector('#tuojiang-load-status'),error=overlay.querySelector('#tuojiang-error');
  const origin=location.protocol==='file:'?'*':location.origin;
  let frame=null,ticket=0,timer=0,revealTimer=0,openedAt=0,ready=false,previous=null,lastDispose=false;
  function disposeFrame(){
    if(!frame)return;
    try{frame.contentWindow?.postMessage({type:'fenghuang:tuojiang-dispose'},origin);const app=frame.contentWindow?.__FH__?.app;app?.dispose();app?.renderer?.forceContextLoss();lastDispose=!!app;}catch(_){}
    frame.src='about:blank';frame.remove();frame=null;
  }
  function fail(message){
    if(overlay.hidden)return;clearTimeout(timer);clearTimeout(revealTimer);ready=false;overlay.dataset.state='error';status.hidden=true;
    overlay.querySelector('#tuojiang-error-text').textContent=message;error.hidden=false;disposeFrame();
  }
  function reveal(){
    if(!ready||overlay.hidden)return;
    const current=ticket;clearTimeout(revealTimer);
    revealTimer=setTimeout(()=>{if(current!==ticket||!ready||overlay.hidden)return;overlay.dataset.state='active';frame?.removeAttribute('aria-hidden');},Math.max(0,1800-(performance.now()-openedAt)));
  }
  function mount(){
    ticket++;clearTimeout(timer);clearTimeout(revealTimer);disposeFrame();ready=false;lastDispose=false;openedAt=performance.now();
    overlay.dataset.state='loading';status.hidden=false;status.textContent='正在铺开沱江沙盘…';error.hidden=true;
    const current=ticket;frame=document.createElement('iframe');frame.id='tuojiang-frame';frame.className='tuojiang-frame';frame.title='沱江互动沙盘';
    frame.setAttribute('aria-hidden','true');frame.setAttribute('sandbox','allow-scripts allow-same-origin allow-downloads');frame.setAttribute('allow','autoplay; fullscreen');
    frame.addEventListener('error',()=>{if(current===ticket)fail('沙盘暂时未能加载，请检查网络后重试，或返回首页继续游览。');});
    frame.src='tuojiang-sandbox/index.html?embedded=1';host.append(frame);
    timer=setTimeout(()=>{if(current===ticket)fail('沙盘加载时间较长，请检查网络后重试。你也可以随时返回首页。');},90000);
  }
  function open(){
    if(!overlay.hidden)return;
    previous={screen:document.body.dataset.screen,focus:document.activeElement,states:[...document.body.children].filter(e=>e!==overlay&&e instanceof HTMLElement).map(e=>({element:e,inert:e.inert}))};
    for(const state of previous.states)state.element.inert=true;
    overlay.hidden=false;document.body.classList.add('tuojiang-open');document.body.dataset.screen='tuojiang';mount();back.focus({preventScroll:true});
  }
  function close(){
    if(overlay.hidden)return;ticket++;clearTimeout(timer);clearTimeout(revealTimer);ready=false;disposeFrame();overlay.hidden=true;overlay.dataset.state='closed';
    document.body.classList.remove('tuojiang-open');document.body.dataset.screen=previous?.screen||'landing';
    for(const state of previous?.states||[])state.element.inert=state.inert;
    const focus=previous?.focus;previous=null;if(focus instanceof HTMLElement&&focus.isConnected)focus.focus({preventScroll:true});
  }
  window.addEventListener('message',e=>{
    if(!frame||e.source!==frame.contentWindow||(origin!=='*'&&e.origin!==origin)||overlay.hidden)return;
    if(e.data?.type==='fenghuang:tuojiang-ready'){ready=true;clearTimeout(timer);status.textContent='沱江已就绪';reveal();}
    else if(e.data?.type==='fenghuang:tuojiang-error')fail(e.data.reason==='webgl'?'当前浏览器未能启动这个3D沙盘，请使用支持 WebGL2 的浏览器，或返回首页继续游览。':'沙盘暂时未能加载，请检查网络后重试，或返回首页继续游览。');
    else if(e.data?.type==='fenghuang:tuojiang-close')close();
  });
  entry.addEventListener('click',e=>{e.stopPropagation();open();});back.addEventListener('click',close);
  overlay.querySelector('#tuojiang-retry').addEventListener('click',mount);
  document.addEventListener('keydown',e=>{if(!overlay.hidden&&e.key==='Escape'){e.preventDefault();close();}});
  window.addEventListener('pagehide',disposeFrame);
  window.FenghuangTuojiang=Object.freeze({open,close,getDiagnostics:()=>({state:overlay.dataset.state,ready,iframeCount:host.querySelectorAll('iframe').length,lastDispose,screen:document.body.dataset.screen})});
})();
