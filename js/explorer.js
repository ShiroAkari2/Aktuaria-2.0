/* ===== Tampilan File Explorer: Kuliah > Matkul S1/S2/S3 > folder matkul > bab =====
   Data folder: data/struktur.js (TREE). Data isi: data/<matkul>.js (COURSES). Alamat: #home, #s3, #matkeu, #matkeu-1 */

const C = window.COURSES || {}, TREE = window.TREE || [];
const flat = {}; Object.entries(C).forEach(([k,c])=>c.ch.forEach(x=>flat[x.id]={...x,k}));
const $ = id => document.getElementById(id);
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const nm = f => f.n + (f.kode ? ' ['+f.kode+']' : '');

/* Peta alamat -> folder. Folder yang punya matkul bernama sama dengan kunci matkulnya, sisanya diberi id dari nama. */
const route = {};
TREE.forEach(s=>{
 route[s.id] = {type:'sem', s};
 s.kids.forEach(f=>{
  const has = f.k && C[f.k];
  f.id = has ? f.k : s.id+'-'+slug(f.n);
  route[f.id] = {type: has?'course':'empty', s, f};
 });
});

const ICON = {
 folder:'<svg class="ic" viewBox="0 0 32 32" width="24" height="24" aria-hidden="true" focusable="false"><path d="M2 8a2 2 0 0 1 2-2h7l3 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" fill="var(--folder-back)"/><path d="M2 13a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" fill="var(--folder)"/></svg>',
 file:'<svg class="ic" viewBox="0 0 32 32" width="24" height="24" aria-hidden="true" focusable="false"><path d="M8 3h11l6 6v19a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" fill="var(--card)" stroke="var(--accent)" stroke-width="1.6" stroke-linejoin="round"/><path d="M19 3v6h6" fill="none" stroke="var(--accent)" stroke-width="1.6" stroke-linejoin="round"/><path d="M11 15h10M11 19h10M11 23h6" stroke="var(--accent)" stroke-width="1.6" stroke-linecap="round"/></svg>'
};

function setMode(m){ document.body.className=m; }
function remember(id){ try{ localStorage.setItem('lastChapter',id); }catch(e){} }
function recall(){ try{ return localStorage.getItem('lastChapter'); }catch(e){ return null; } }
function setHash(h){ try{ if(location.hash!=='#'+h) history.replaceState(null,'','#'+h); }catch(e){} }

/* Jejak lokasi untuk address bar */
function trail(id){
 const t=[{t:'Kuliah',h:'home'}];
 if(!id||id==='home') return t;
 let r=route[id];
 if(r){ t.push({t:r.s.n,h:r.s.id}); if(r.f) t.push({t:r.f.n,h:r.f.id}); return t; }
 if(C[id]){ t.push({t:C[id].t,h:id}); return t; }
 const ch=flat[id]; if(!ch) return t;
 r=route[ch.k];
 if(r){ t.push({t:r.s.n,h:r.s.id},{t:r.f.n,h:r.f.id}); } else t.push({t:C[ch.k].t,h:ch.k});
 t.push({t:ch.t,h:ch.id});
 return t;
}
function bar(id){
 const t=trail(id), up=$('up'), cr=$('crumbs');
 cr.innerHTML='<ol>'+t.map((x,i)=> i<t.length-1 ? '<li><a href="#'+x.h+'">'+x.t+'</a></li>' : '<li><span aria-current="page">'+x.t+'</span></li>').join('')+'</ol>';
 cr.scrollLeft=cr.scrollWidth;
 up.disabled=t.length<2; up.dataset.to=t.length>1 ? t[t.length-2].h : '';
 $('back').disabled=history.length<2;
}
function pane(active,exact){
 const it=(id,n,cls)=>'<li class="'+cls+'"><a href="#'+id+'"'+(active===id?' class="on"':'')+(active===id&&exact?' aria-current="page"':'')+'>'+ICON.folder+'<span>'+n+'</span></a></li>';
 $('pane').innerHTML='<ul aria-label="Folder">'+it('home','Kuliah','')+TREE.map(s=>it(s.id,s.n,'sub')).join('')+'</ul>';
}
function status(n){
 $('count').textContent=n+' item';
 $('ver').textContent='By ShiroAkari · '+((typeof T!=='undefined')?Object.keys(T).length+' istilah · ':'')+'versi '+APP_VERSION;
}

/* Satu tampilan folder: judul, daftar baris, atau keadaan kosong */
function folderView(id, title, rows, opt){
 opt=opt||{};
 setMode('ex'); bar(id); pane(opt.pane||id,!opt.pane);
 $('content').innerHTML='<h1 class="ft">'+title+'</h1>'+(opt.desc?'<p class="desc">'+opt.desc+'</p>':'')+(opt.top||'')
  +(rows.length
   ? '<div class="cols" aria-hidden="true"><span>Nama</span><span>Jenis</span><span>Isi</span></div><ul class="files">'
     +rows.map(r=>'<li><a class="row" href="#'+r.h+'"><span class="nm">'+r.icon+'<span>'+r.name+'</span></span><span class="ty">'+r.type+'</span><span class="in">'+r.info+'</span></a></li>').join('')+'</ul>'
   : '<p class="empty">Folder ini kosong.</p>');
 status(rows.length);
 document.title=(id==='home'?'Kuliah':title)+' · Catatan Aktuaria'; setHash(id); scrollTo(0,0);
}

function showRoot(){
 const last=recall(), lc=last&&flat[last];
 let top='';
 if(lc){ const r=route[lc.k]; top='<a class="resume" href="#'+lc.id+'"><span class="nm">'+ICON.file+'Lanjutkan belajar</span><span class="sb">'+lc.t+' · '+(r?r.f.n:C[lc.k].t)+'</span></a>'; }
 folderView('home','Kuliah',TREE.map(s=>({h:s.id,icon:ICON.folder,name:s.n,type:'Folder',info:s.kids.length+' folder'})),{top});
}
function showSem(s){
 folderView(s.id,s.n,s.kids.map(f=>({h:f.id,icon:ICON.folder,name:nm(f),type:'Folder',info:(f.k&&C[f.k])?C[f.k].ch.length+' bab':'Kosong'})));
}
function showEmpty(f){ folderView(f.id,nm(f),[],{pane:route[f.id].s.id}); }
function showCourse(k){
 const c=C[k], r=route[k];
 folderView(k, r?nm(r.f):c.t, c.ch.map(x=>({h:x.id,icon:ICON.file,name:x.t,type:'Catatan',info:(typeof P!=='undefined'&&P[x.id])?'Latihan soal':''})),{desc:c.desc,pane:r?r.s.id:'home'});
}

/* Satu bab: isi catatan memakai lebar baca, address bar tetap di atas */
function showChapter(id){
 const ch=flat[id], k=ch.k;
 setMode('chapter'); bar(id);
 const chap=$('chap');
 chap.innerHTML=C[k].ch.map((x,i)=>'<option value="'+x.id+'">'+(x.t.startsWith('Lampiran')?'':'Bab '+(i+1)+': ')+x.t+'</option>').join(''); chap.value=ch.id;
 const el=$('content');
 el.innerHTML='<p class="by">By ShiroAkari</p><h1>'+ch.t+'</h1><div class="hint">Arahkan kursor ke kata bertitik-titik untuk melihat definisi dan rumusnya.</div>'+link(ch.h);
 document.title=ch.t+' · Catatan Aktuaria'; setHash(ch.id); remember(ch.id); scrollTo(0,0);
 if(window.MathJax&&MathJax.typesetPromise) MathJax.typesetPromise([el]);
 /* Latihan soal (jika bab ini punya di data/latihan.js) */
 const L=(typeof P!=='undefined')&&P[ch.id]; if(!L) return;
 el.insertAdjacentHTML('beforeend',
  '<button class="lat" id="latBtn" aria-expanded="false">Latihan soal ('+L.length+') ▾</button><div id="latBox" hidden>'+
  L.map((s,i)=>'<div class="lsoal"><p><b>Soal '+(i+1)+'.</b> '+link(s.q)+'</p><details><summary>Pembahasan</summary><div>'+link(s.a)+'</div></details></div>').join('')+'</div>');
 const bt=$('latBtn'), bx=$('latBox');
 bt.onclick=()=>{ bx.hidden=!bx.hidden; bt.setAttribute('aria-expanded',String(!bx.hidden)); bt.textContent='Latihan soal ('+L.length+') '+(bx.hidden?'▾':'▴'); };
 if(window.MathJax&&MathJax.typesetPromise) MathJax.typesetPromise([bx]);
}

function showError(){
 setMode('ex'); $('crumbs').innerHTML=''; $('pane').innerHTML=''; $('count').textContent=''; $('ver').textContent='';
 $('content').innerHTML='<h1 class="ft">Folder tidak terbaca</h1><p class="empty">Data folder gagal dimuat. Muat ulang halaman, atau periksa file di folder data.</p>';
}

function show(id){
 closeFrom(0);
 if(!TREE.length) return showError();
 if(!id||id==='home') return showRoot();
 const r=route[id];
 if(r){ if(r.type==='sem') return showSem(r.s); if(r.type==='course') return showCourse(id); return showEmpty(r.f); }
 if(C[id]) return showCourse(id);
 if(flat[id]) return showChapter(id);
 return showRoot();
}

$('chap').addEventListener('change',()=>show($('chap').value));
$('up').addEventListener('click',()=>{ const to=$('up').dataset.to; if(to) location.hash=to; });
$('back').addEventListener('click',()=>history.back());
addEventListener('hashchange',()=>show(location.hash.slice(1)));
document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeFrom(0); });
show(location.hash.slice(1));
