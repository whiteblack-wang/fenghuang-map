/* Responsive controls augment existing search, filters, seasons and guide. */
(() => {
  'use strict';
  const app=document.getElementById('app'),toolbar=document.querySelector('.scene-toolbar');
  // One expandable mode control on phones; all original controls remain inside.
  const modeMenu=document.createElement('div');modeMenu.className='mode-menu';modeMenu.id='mode-options';
  toolbar.prepend(modeMenu);modeMenu.append(document.getElementById('choose-mode'),document.querySelector('.mode-switch'));
  const modeToggle=document.createElement('button');modeToggle.type='button';modeToggle.id='mode-toggle';modeToggle.textContent='探索 ▾';
  modeToggle.setAttribute('aria-label','切换全景或探索模式');modeToggle.setAttribute('aria-controls','mode-options');modeToggle.setAttribute('aria-expanded','false');toolbar.prepend(modeToggle);
  const searchToggle=document.createElement('button');
  searchToggle.id='search-toggle';searchToggle.type='button';searchToggle.className='map-search-toggle';
  searchToggle.setAttribute('aria-label','展开或收起景点搜索');searchToggle.setAttribute('aria-expanded','false');
  document.querySelector('.filters').id='place-filters';searchToggle.setAttribute('aria-controls','search place-filters');
  searchToggle.innerHTML='<svg class="icon" aria-hidden="true"><use href="#i-search"/></svg>';
  document.querySelector('.header').prepend(searchToggle);
  const seasonToggle=document.createElement('button');seasonToggle.id='season-toggle';seasonToggle.type='button';seasonToggle.textContent='春';
  seasonToggle.setAttribute('aria-label','选择古城四季');seasonToggle.setAttribute('aria-expanded','false');
  document.querySelector('.season-switch').id='season-options';seasonToggle.setAttribute('aria-controls','season-options');toolbar.append(seasonToggle);
  function searchOpen(open){app.classList.toggle('search-open',open);searchToggle.setAttribute('aria-expanded',String(open));document.getElementById('guide-companion').classList.toggle('search-obscured',open);}
  function seasonOpen(open){toolbar.classList.toggle('season-open',open);app.classList.toggle('season-menu-open',open);seasonToggle.setAttribute('aria-expanded',String(open));document.getElementById('guide-companion').classList.toggle('season-obscured',open);}
  function modeOpen(open){toolbar.classList.toggle('mode-open',open);app.classList.toggle('mode-menu-open',open);modeToggle.setAttribute('aria-expanded',String(open));document.getElementById('guide-companion').classList.toggle('mode-obscured',open);}
  function syncMode(){modeToggle.textContent=(window.FenghuangExperience.getState().mode==='panorama'?'全景':'探索')+' ▾';}
  modeToggle.addEventListener('click',()=>{const open=!toolbar.classList.contains('mode-open');searchOpen(false);seasonOpen(false);modeOpen(open);});
  modeMenu.addEventListener('click',e=>{if(e.target.closest('[data-mode],#choose-mode')){modeOpen(false);syncMode();}});
  searchToggle.addEventListener('click',()=>{const open=!app.classList.contains('search-open');seasonOpen(false);modeOpen(false);searchOpen(open);if(open)document.getElementById('search').focus({preventScroll:true});});
  seasonToggle.addEventListener('click',()=>{const open=!toolbar.classList.contains('season-open');searchOpen(false);modeOpen(false);seasonOpen(open);});
  document.querySelector('.season-switch').addEventListener('click',e=>{const target=e.target.closest('[data-season]');if(target){seasonToggle.textContent=window.FENGHUANG_SCENES[target.dataset.season].label;seasonOpen(false);}});
  document.getElementById('search-results').addEventListener('click',e=>{if(e.target.closest('.search-result'))searchOpen(false);});
  document.getElementById('search').addEventListener('keydown',e=>{if(e.key==='Enter'||e.key==='Escape')searchOpen(false);});
  document.addEventListener('pointerdown',e=>{if(!toolbar.contains(e.target)){seasonOpen(false);modeOpen(false);}if(app.classList.contains('search-open')&&!document.querySelector('.header').contains(e.target))searchOpen(false);});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){searchOpen(false);seasonOpen(false);modeOpen(false);}});
  let guideTimer;
  function introduce(){const bubble=document.getElementById('guide-bubble');bubble.hidden=false;clearTimeout(guideTimer);guideTimer=setTimeout(()=>{if(innerWidth<=680||(innerWidth<=1000&&innerHeight<=520))bubble.hidden=true;},5000);}
  window.addEventListener('fenghuang:place-selected',introduce);
  window.addEventListener('fenghuang:scene-changed',introduce);
  window.addEventListener('fenghuang:scene-changed',()=>{syncMode();seasonToggle.textContent=window.FENGHUANG_SCENES[window.FenghuangExperience.getState().season].label;});
})();
