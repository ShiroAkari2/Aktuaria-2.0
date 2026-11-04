const APP_VERSION='2.1 (3 Nov 2026)';
/* ===== Mesin halaman: kartu hover, navigasi bab, latihan. Jarang perlu diubah. ===== */
/* Data dibaca dari: data/glosarium.js (T), data/<matkul>.js (COURSES), data/latihan.js (P) */

const esc = s => s.replace(/\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\)/g, m => m.replace(/</g,'&lt;').replace(/>/g,'&gt;'));
/* Komponen tampilan di dalam teks bab (tulis di data/*.js):
   ⟦soal|teks⟧  ⟦dik|teks⟧  ⟦tanya|teks⟧  ⟦kes|teks⟧  ⟦catatan|teks⟧
   ⟦waktu|0,1,⋯,k,k+1|sorot 2-3 (boleh kosong)|titik bulat 3:1;4:1|catatan 0:teks;3:teks⟧
   ⟦langkah|nomor|judul|isi⟧   ⟦garis|batas bawah|batas atas|simbol, mis. μ₁−μ₂⟧ */
function garis(lo,hi,sim){
 lo=+lo; hi=+hi; sim=sim||'μ';
 const W=640,H=122,P=46,y=56,mn=Math.min(lo,0),mx=Math.max(hi,0),sp=(mx-mn)||1,a=mn-sp*.2,b=mx+sp*.2;
 const X=v=>(P+(v-a)/(b-a)*(W-2*P)).toFixed(1), f=v=>String(+(+v).toFixed(4)).replace('-','−').replace('.',',');
 const ps=sim.split('−'), A=ps[0], B=ps[1];
 const msg = hi<0 ? 'Selang seluruhnya negatif, jadi '+(B?A+' < '+B:sim+' < 0')
           : lo>0 ? 'Selang seluruhnya positif, jadi '+(B?A+' > '+B:sim+' > 0')
           : 'Selang memuat 0, jadi tidak dapat disimpulkan ada perbedaan';
 let s='<svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="Garis bilangan selang kepercayaan">'
  +'<line class="nl-ax" x1="'+(P-26)+'" y1="'+y+'" x2="'+(W-P+26)+'" y2="'+y+'"/>'
  +'<polygon points="'+(W-P+30)+','+y+' '+(W-P+18)+','+(y-6)+' '+(W-P+18)+','+(y+6)+'" fill="currentColor" style="color:var(--ink)"/>';
 if(lo<0) s+='<line class="nl-neg" x1="'+X(lo)+'" y1="'+y+'" x2="'+X(Math.min(hi,0))+'" y2="'+y+'"/><text class="nl-s" x="'+((+X(lo)+ +X(Math.min(hi,0)))/2).toFixed(1)+'" y="'+(y-18)+'">− − − −</text>';
 if(hi>0) s+='<line class="nl-pos" x1="'+X(Math.max(lo,0))+'" y1="'+y+'" x2="'+X(hi)+'" y2="'+y+'"/><text class="nl-s" x="'+((+X(Math.max(lo,0))+ +X(hi))/2).toFixed(1)+'" y="'+(y-18)+'">+ + + +</text>';
 s+='<line class="nl-tk" x1="'+X(0)+'" y1="'+(y-11)+'" x2="'+X(0)+'" y2="'+(y+11)+'"/><text class="nl-z" x="'+X(0)+'" y="'+(y+30)+'">0</text>'
  +'<line class="nl-tk" x1="'+X(lo)+'" y1="'+(y-8)+'" x2="'+X(lo)+'" y2="'+(y+8)+'"/><text class="nl-t" x="'+X(lo)+'" y="'+(y+50)+'">'+f(lo)+'</text>'
  +'<line class="nl-tk" x1="'+X(hi)+'" y1="'+(y-8)+'" x2="'+X(hi)+'" y2="'+(y+8)+'"/><text class="nl-t" x="'+X(hi)+'" y="'+(y+50)+'">'+f(hi)+'</text>'
  +'<text class="nl-v" x="'+(W-8)+'" y="'+(y-14)+'">'+sim+'</text></svg><div class="nl-msg">'+msg+'</div>';
 return s;
}
function waktu(ticks,bar,bub,notes){
 const T=ticks.split(','), N=T.length, pos=i=>((i+.5)/N*100).toFixed(2)+'%';
 let h='<div class="wt"><div class="wt-line"></div>';
 if(bar&&bar.trim()){ const r=bar.split('-').map(Number); h+='<div class="wt-bar" style="left:'+pos(r[0])+';width:'+((r[1]-r[0])/N*100).toFixed(2)+'%"></div>'; }
 T.forEach((t,i)=>{ h+='<span class="wt-d" style="left:'+pos(i)+'"></span><span class="wt-t" style="left:'+pos(i)+'">'+t.trim()+'</span>'; });
 (bub||'').split(';').filter(x=>x.trim()).forEach(x=>{ const k=x.indexOf(':'); h+='<span class="wt-b" style="left:'+pos(+x.slice(0,k))+'">'+x.slice(k+1)+'</span>'; });
 (notes||'').split(';').filter(x=>x.trim()).forEach(x=>{ const k=x.indexOf(':'), i=+x.slice(0,k); h+='<span class="wt-n'+(i===0?' l':i===N-1?' r':'')+'" style="left:'+pos(i)+'">'+x.slice(k+1)+'</span>'; });
 return h+'</div>';
}
const komp = s => s.replace(/⟦([\s\S]*?)⟧/g,(m,b)=>{
 const p=b.split('|'), t=p[0].trim();
 if(t==='waktu') return waktu(p[1],p[2],p[3],p.slice(4).join('|'));
 if(t==='garis') return '<div class="nl">'+garis(p[1],p[2],p[3])+'</div>';
 if(t==='langkah') return '<div class="stp"><span class="no">'+p[1]+'</span><div class="stp-b"><div class="stp-t">'+p[2]+'</div><div class="stp-c">'+p.slice(3).join('|')+'</div></div></div>';
 const lab={soal:'Soal',dik:'Diketahui',tanya:'Ditanyakan',kes:'Kesimpulan',catatan:'Catatan'}[t];
 return lab?'<div class="pbox '+t+'"><span class="tag">'+lab+'</span> '+p.slice(1).join('|')+'</div>':m;
});
const link = s => komp(esc(s)).replace(/\[\[(\w+)\|([^\]]+)\]\]/g,'<span class="term" data-t="$1">$2</span>');

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

function setMode(m){ document.body.className=m; }
function remember(id){ try{ localStorage.setItem('lastChapter',id); }catch(e){} }
function recall(){ try{ return localStorage.getItem('lastChapter'); }catch(e){ return null; } }
function setHash(h){ try{ if(location.hash!=='#'+h) history.replaceState(null,'','#'+h); }catch(e){} }

/* Lobby: halaman awal */
function showLobby(){
 setMode('lobby'); const el=document.getElementById('content');
 const last=recall(), lc=last&&flat[last];
 el.innerHTML='<div class="hero"><p class="by">By ShiroAkari</p><h1>Catatan Aktuaria</h1><p class="sub">Catatan belajar dengan definisi, rumus, dan contoh yang muncul saat kursor diarahkan ke istilah.</p>'
  +(lc?'<a class="resume" href="#'+lc.id+'">Lanjutkan belajar<span>'+lc.t+' · '+C[lc.k].t+'</span></a>':'')+'</div>'
  +'<div class="grid">'+Object.entries(C).map(([k,c])=>'<a class="ccard" href="#'+k+'"><h2>'+c.t+'</h2><p>'+(c.desc||'')+'</p><span class="meta">'+c.ch.length+' bab</span></a>').join('')+'</div>'
  +'<p class="foot">'+Object.keys(C).length+' mata kuliah · '+Object.keys(T).length+' istilah di glosarium · versi '+APP_VERSION+'</p>';
 document.title='Catatan Aktuaria'; setHash('home'); scrollTo(0,0);
}

/* Halaman satu mata kuliah: daftar bab */
function showCourse(k){
 setMode('course'); const c=C[k], el=document.getElementById('content');
 el.innerHTML='<p class="crs">Mata kuliah</p><h1>'+c.t+'</h1>'+(c.desc?'<p class="sub">'+c.desc+'</p>':'')
  +'<ol class="chlist">'+c.ch.map((x,i)=>'<li><a href="#'+x.id+'"><span class="no">'+(x.t.startsWith('Lampiran')?'•':i+1)+'</span><span class="tt">'+x.t+'</span>'+((typeof P!=='undefined'&&P[x.id])?'<span class="bd">Latihan</span>':'')+'</a></li>').join('')+'</ol>';
 document.title=c.t+' · Catatan Aktuaria'; setHash(k); scrollTo(0,0);
}

/* Halaman satu bab */
function showChapter(id){
 setMode('chapter');
 const ch=flat[id], k=ch.k;
 pick.value=k; chap.innerHTML=C[k].ch.map((x,i)=>'<option value="'+x.id+'">'+(x.t.startsWith('Lampiran')?'':'Bab '+(i+1)+': ')+x.t+'</option>').join(''); chap.value=ch.id;
 const el=document.getElementById('content');
 el.innerHTML='<p class="by">By ShiroAkari</p><a class="crs" href="#'+k+'">'+C[k].t+'</a><h1>'+ch.t+'</h1><div class="hint">Arahkan kursor ke kata bertitik-titik untuk melihat definisi dan rumusnya.</div>'+link(ch.h);
 document.title=ch.t+' · Catatan Aktuaria'; setHash(ch.id); remember(ch.id); scrollTo(0,0);
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

function show(id){
 closeFrom(0);
 if(!id||id==='home'||(!C[id]&&!flat[id])) return showLobby();
 if(C[id]) return showCourse(id);
 return showChapter(id);
}

pick.addEventListener('change',()=>show(C[pick.value].ch[0].id));
chap.addEventListener('change',()=>show(chap.value));
addEventListener('hashchange',()=>show(location.hash.slice(1)));
document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeFrom(0); });
show(location.hash.slice(1));
