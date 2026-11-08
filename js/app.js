const APP_VERSION='2.3 (8 Nov 2026)';
/* ===== Mesin halaman: kartu hover, navigasi bab, latihan. Jarang perlu diubah. ===== */
/* Data dibaca dari: data/glosarium.js (T), data/<matkul>.js (COURSES), data/latihan.js (P) */

const esc = s => s.replace(/\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\)/g, m => m.replace(/</g,'&lt;').replace(/>/g,'&gt;'));
/* Komponen tampilan di dalam teks bab (tulis di data/*.js):
   ⟦soal|teks⟧  ⟦teorema|teks⟧  ⟦dik|teks⟧  ⟦tanya|teks⟧  ⟦kes|teks⟧  ⟦catatan|teks⟧
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
 const lab={soal:'Soal',dik:'Diketahui',tanya:'Ditanyakan',kes:'Kesimpulan',catatan:'Catatan',teorema:'Teorema'}[t];
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

