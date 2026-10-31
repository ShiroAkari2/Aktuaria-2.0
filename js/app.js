/* ===== Mesin halaman: kartu hover, navigasi bab, latihan. Jarang perlu diubah. ===== */
/* Data dibaca dari: data/glosarium.js (T), data/<matkul>.js (COURSES), data/latihan.js (P) */

const esc = s => s.replace(/\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\)/g, m => m.replace(/</g,'&lt;').replace(/>/g,'&gt;'));
const link = s => esc(s).replace(/\[\[(\w+)\|([^\]]+)\]\]/g,'<span class="term" data-t="$1">$2</span>');

const cards = []; let timer = null, openT = null;
function closeFrom(l){ while(cards.length>l){ cards.pop().el.remove(); } }
function openCard(id, anchor, level){
  if(cards[level] && cards[level].id===id){ closeFrom(level+1); return; }
  closeFrom(level);
  const t = T[id]; if(!t) return;
  const el = document.createElement('div'); el.className='card';
  el.innerHTML = `<h3>${t.n}</h3><p>${link(t.d)}</p><div class="lbl">Rumus</div><div class="f">\\[${t.f}\\]</div>`+(t.e?`<div class="lbl">Contoh</div><div class="ex">${t.e}</div>`:'');
  document.body.appendChild(el);
  const r = anchor.getClientRects()[0] || anchor.getBoundingClientRect();
  const w = el.offsetWidth, h = el.offsetHeight;
  let x = Math.min(Math.max(8, r.left), innerWidth-w-8);
  let y = r.bottom + 6; if(y+h > innerHeight-8) y = Math.max(8, r.top-h-6);
  el.style.left = x+'px'; el.style.top = y+'px';
  const rec = {id, el, level}; cards[level] = rec;
  el.addEventListener('mouseenter', ()=>{ clearTimeout(timer); closeFrom(level+1); });
  el.addEventListener('mouseleave', schedule);
  if(window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([el]).then(()=>{
    const hh = el.offsetHeight; if(y+hh > innerHeight-8 && r.top-hh-6 > 8) el.style.top=(r.top-hh-6)+'px';
  });
}
function schedule(){ clearTimeout(timer); timer = setTimeout(()=>closeFrom(0), 300); }
document.addEventListener('mouseover', e=>{
  const term = e.target.closest('.term'); if(!term) return;
  clearTimeout(timer); clearTimeout(openT);
  const host = term.closest('.card');
  const level = host ? cards.findIndex(c=>c.el===host)+1 : 0;
  openT = setTimeout(()=>openCard(term.dataset.t, term, level), 150);
});
document.addEventListener('mouseout', e=>{
  if(e.target.closest && e.target.closest('.term')){ clearTimeout(openT); schedule(); }
});

/* ===== Navigasi mata kuliah dan bab ===== */
const C = window.COURSES;
const flat = {}; Object.entries(C).forEach(([k,c])=>c.ch.forEach(x=>flat[x.id]={...x,k}));
const pick=document.getElementById('pick'), chap=document.getElementById('chap');
pick.innerHTML=Object.entries(C).map(([k,c])=>'<option value="'+k+'">'+c.t+'</option>').join('');

function show(id){
 const ch=flat[id]||flat['matkeu-1'], k=ch.k; closeFrom(0);
 pick.value=k; chap.innerHTML=C[k].ch.map((x,i)=>'<option value="'+x.id+'">Bab '+(i+1)+': '+x.t+'</option>').join(''); chap.value=ch.id;
 const el=document.getElementById('content');
 el.innerHTML='<p class="by">By ShiroAkari</p><p class="crs">'+C[k].t+'</p><h1>'+ch.t+'</h1><div class="hint">Arahkan kursor ke kata bertitik-titik untuk melihat definisi dan rumusnya.</div>'+link(ch.h);
 document.title=ch.t+' · Catatan Aktuaria'; try{ if(location.hash!=='#'+ch.id) history.replaceState(null,'','#'+ch.id); }catch(e){} scrollTo(0,0);
 if(window.MathJax&&MathJax.typesetPromise) MathJax.typesetPromise([el]);

 /* Latihan soal (jika bab ini punya di data/latihan.js) */
 const L=(typeof P!=='undefined')&&P[ch.id]; if(!L) return;
 el.insertAdjacentHTML('beforeend',
  '<button class="lat" id="latBtn" aria-expanded="false">Latihan soal ('+L.length+') ▾</button><div id="latBox" hidden>'+
  L.map((s,i)=>'<div class="lsoal"><p><b>Soal '+(i+1)+'.</b> '+link(s.q)+'</p><details><summary>Pembahasan</summary><div>'+link(s.a)+'</div></details></div>').join('')+'</div>');
 const bt=document.getElementById('latBtn'), bx=document.getElementById('latBox');
 bt.onclick=()=>{ bx.hidden=!bx.hidden; bt.setAttribute('aria-expanded',String(!bx.hidden)); bt.textContent='Latihan soal ('+L.length+') '+(bx.hidden?'▾':'▴'); };
 if(window.MathJax&&MathJax.typesetPromise) MathJax.typesetPromise([bx]);
}

pick.addEventListener('change',()=>show(C[pick.value].ch[0].id));
chap.addEventListener('change',()=>show(chap.value));
addEventListener('hashchange',()=>show(location.hash.slice(1)));
document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeFrom(0); });
show(location.hash.slice(1));
