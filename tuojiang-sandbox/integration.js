/* Small same-origin host bridge; the supplied sandbox implementation is intact. */
(() => {
  'use strict';
  if(window.parent===window)return;
  document.documentElement.dataset.embedded='true';
  const origin=location.protocol==='file:'?'*':location.origin;
  let reported=false,stopped=false;
  const send=(type,extra={})=>window.parent.postMessage({type,...extra},origin);
  function dispose(){
    if(stopped)return;stopped=true;clearInterval(poll);
    try{window.__FH__?.app?.dispose();window.__FH__?.app?.renderer?.forceContextLoss();}catch(_){}
  }
  const poll=setInterval(()=>{
    if(stopped||reported)return;
    if(window.__FH_READY_AT__&&window.__FH__){reported=true;clearInterval(poll);send('fenghuang:tuojiang-ready');}
    else if(document.querySelector('#loader .loader-inner')&&!document.querySelector('#loaderPct')){reported=true;clearInterval(poll);send('fenghuang:tuojiang-error',{reason:'webgl'});}
  },100);
  window.addEventListener('error',e=>{
    if(reported||stopped)return;
    if(e.target instanceof HTMLScriptElement||e.target instanceof HTMLLinkElement){reported=true;clearInterval(poll);send('fenghuang:tuojiang-error',{reason:'network'});}
  },true);
  window.addEventListener('message',e=>{if(e.source===parent&&(origin==='*'||e.origin===origin)&&e.data?.type==='fenghuang:tuojiang-dispose')dispose();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();send('fenghuang:tuojiang-close');}});
  window.addEventListener('pagehide',dispose);
})();
