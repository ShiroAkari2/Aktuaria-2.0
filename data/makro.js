/* Pengantar Ekonomi Makro (Semester 3)
   Bab 1 Pengangguran & Hukum Okun · Bab 2 Kurva Phillips · Bab 3 Permintaan Agregat · Bab 4 Inflasi · Bab 5 Peta pembelajaran
   Sumber awal: makalah kelompok 1–4, lalu dirapikan, dihitung ulang, dan dilengkapi gambar serta latihan. */
window.COURSES = window.COURSES || {};
(function(){
/* ---------- Alat gambar SVG (warna mengikuti tema terang/gelap) ---------- */
const FT='font-family:Inter,system-ui,sans-serif';
const INK='var(--ink)',AC='var(--accent)',MU='var(--muted)',NEG='var(--neg)',AM='var(--amber)',CH='var(--chip)',LN='var(--line)',CD='var(--card)';
const t=(x,y,s,o={})=>`<text x="${x}" y="${y}" style="${FT};font-size:${o.s||13}px;font-weight:${o.w||600};fill:${o.c||INK};text-anchor:${o.a||'middle'}">${s}</text>`;
const ln=(x1,y1,x2,y2,o={})=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style="stroke:${o.c||INK};stroke-width:${o.w||2};${o.d?'stroke-dasharray:'+o.d+';':''}stroke-linecap:round"${o.m?' marker-end="url(#mk)"':''}/>`;
const dot=(x,y,c,r)=>`<circle cx="${x}" cy="${y}" r="${r||6}" style="fill:${c};stroke:${CD};stroke-width:2"/>`;
const rc=(x,y,w,h,o={})=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r==null?8:o.r}" style="fill:${o.f||CD};stroke:${o.c||AC};stroke-width:${o.w==null?2:o.w}"/>`;
const bx=(x,y,w,h,L,o={})=>rc(x,y,w,h,o)+L.map((s,i)=>t(x+w/2,y+h/2+(i-(L.length-1)/2)*(o.lh||16)+5,s,{c:o.tc,s:o.s,w:o.fw})).join('');
const pa=(d,c,w,dash)=>`<path d="${d}" style="fill:none;stroke:${c};stroke-width:${w||3};${dash?'stroke-dasharray:'+dash+';':''}stroke-linecap:round;stroke-linejoin:round"/>`;
const DEFS=`<defs><marker id="mk" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" style="fill:${AC}"/></marker></defs>`;
const fig=(w,h,inner,label,cap)=>`<div class="nl"><svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}" style="width:100%;height:auto;display:block">${DEFS}${inner}</svg>${cap?`<div class="nl-msg" style="color:${MU};font-weight:600">${cap}</div>`:''}</div>`;
const f1=v=>String(+(+v).toFixed(2)).replace('.',',');

/* ---------- Bab 1: komposisi penduduk usia kerja ---------- */
const G1=(()=>{ // Bekerja 114, Penganggur 6, Bukan AK 80 (total 200)
 const L=30,W=580,u=W/200; let x=L,s='';
 const seg=(n,c,tc,lab,sub)=>{const w=n*u,r=rc(x,70,w,56,{f:c,c:CD,w:2,r:0})+t(x+w/2,96,lab,{c:tc,s:14})+t(x+w/2,114,sub,{c:tc,s:12,w:500});x+=w;return r;};
 s+=t(320,24,'Penduduk usia kerja = 200 (ilustrasi, juta orang)',{s:15,c:AC});
 s+=seg(114,AC,'#fff','Bekerja 114','');
 s+=seg(6,NEG,'#fff','','');
 s+=seg(80,MU,'#fff','Bukan angkatan kerja 80','sekolah, mengurus rumah tangga');
 s+=t(L+114*u+3*u,62,'Penganggur 6',{c:NEG,s:13});
 s+=ln(L+114*u+3*u,66,L+114*u+3*u,70,{c:NEG,w:2});
 s+=ln(L,150,L+120*u,150,{c:AC,w:3})+ln(L,144,L,156,{c:AC})+ln(L+120*u,144,L+120*u,156,{c:AC});
 s+=t(L+60*u,174,'Angkatan kerja (AK) = 114 + 6 = 120',{c:AC,s:14});
 s+=t(170,204,'TPT = 6 ÷ 120 = 5%',{s:15})+t(470,204,'TPAK = 120 ÷ 200 = 60%',{s:15});
 return fig(640,220,s,'Komposisi penduduk usia kerja','Penganggur hanya dihitung dari angkatan kerja, bukan dari seluruh penduduk usia kerja.');
})();

/* ---------- Bab 1: bagan alir status kegiatan ---------- */
const G2=(()=>{
 let s='';
 s+=bx(200,8,240,40,['Seseorang usia kerja'],{f:CH,fw:700});
 s+=ln(320,48,320,70,{m:1});
 s+=bx(150,70,340,56,['Seminggu terakhir bekerja ≥ 1 jam,','atau punya pekerjaan tetapi sementara libur?'],{});
 s+=ln(490,98,530,98,{m:1})+t(510,90,'Ya',{c:AC,s:13});
 s+=bx(530,70,100,56,['BEKERJA'],{f:AC,tc:'#fff',fw:700,c:AC});
 s+=ln(320,126,320,160,{m:1})+t(336,148,'Tidak',{c:AC,s:13,a:'start'});
 s+=bx(150,160,340,70,['Mencari kerja, menyiapkan usaha, putus asa,','atau sudah diterima tetapi belum mulai bekerja?'],{});
 s+=ln(490,195,530,195,{m:1})+t(510,187,'Ya',{c:AC,s:13});
 s+=bx(530,160,100,70,['PENGANGGUR','TERBUKA'],{f:NEG,tc:'#fff',fw:700,c:NEG});
 s+=ln(320,230,320,262,{m:1})+t(336,252,'Tidak',{c:AC,s:13,a:'start'});
 s+=bx(150,262,340,46,['BUKAN ANGKATAN KERJA'],{f:MU,tc:'#fff',fw:700,c:MU});
 s+=pa('M640 78 L648 78 L648 212 L640 212','var(--accent)',2);
 s+=t(560,246,'Bekerja + Penganggur',{s:12,c:AC})+t(560,262,'= Angkatan kerja',{s:12,c:AC});
 s+=t(580,139,'&lt; 35 jam/minggu',{s:11,c:MU,w:500})+t(580,151,'= setengah penganggur',{s:11,c:MU,w:500});
 return fig(660,320,s,'Bagan alir menentukan status seseorang','Tidak bekerja belum tentu penganggur: yang tidak mencari kerja (pelajar, ibu rumah tangga) bukan angkatan kerja.');
})();

/* ---------- Bab 1: grafik Hukum Okun ---------- */
const G3=(()=>{
 const L=70,R=620,T=20,B=250,X=v=>L+v/8*(R-L),Y=v=>T+(2-v)/4*(B-T);
 let s='';
 for(let v=-2;v<=2;v++) s+=ln(L,Y(v),R,Y(v),{c:LN,w:1})+t(L-10,Y(v)+4,(v>0?'+':v<0?'−':'')+Math.abs(v),{a:'end',s:12,c:MU});
 for(let v=0;v<=8;v+=2) s+=t(X(v),B+22,v,{s:12,c:MU});
 s+=ln(L,T,L,B+6,{w:2})+ln(L,Y(0),R+8,Y(0),{w:2,c:MU});
 s+=ln(X(3),Y(0)-6,X(3),Y(0)+6,{w:2});
 s+=t(X(3),Y(-2)+4+10,'',{});
 s+=pa(`M${X(0)} ${Y(1.2)} L${X(8)} ${Y(-2)}`,AC,4);
 s+=ln(X(3),T,X(3),B,{c:AM,w:2,d:'6 5'})+t(X(3)+6,T+14,'g* = 3% (potensial)',{a:'start',s:12,c:AM});
 const pt=(g,du,c,lab,dx,dy,a)=>dot(X(g),Y(du),c,7)+t(X(g)+dx,Y(du)+dy,lab,{a:a||'start',s:12,c});
 s+=pt(5,-.8,AC,'g = 5%: Δu = −0,8',10,-10);
 s+=pt(3,0,AM,'g = g*: Δu = 0',-12,24,'end');
 s+=pt(1,.8,NEG,'g = 1%: Δu = +0,8',12,-8);
 s+=t((L+R)/2,B+44,'Pertumbuhan PDB riil g (%)',{s:13,c:INK});
 s+=`<text transform="translate(18 ${(T+B)/2}) rotate(-90)" style="${FT};font-size:13px;font-weight:600;fill:${INK};text-anchor:middle">Perubahan pengangguran Δu (poin %)</text>`;
 return fig(640,300,s,'Grafik Hukum Okun: Δu = −0,4 (g − 3)','Garis menurun: makin cepat ekonomi tumbuh melewati g*, makin besar penurunan pengangguran.');
})();

/* ---------- Bab 2: kurva Phillips (SRPC, LRPC, pergeseran) ---------- */
const G4=(()=>{
 const L=70,R=620,T=20,B=260,X=u=>L+(u-2)/6*(R-L),Y=p=>B-p/8*(B-T);
 let s='';
 for(let p=0;p<=8;p+=2) s+=ln(L,Y(p),R,Y(p),{c:LN,w:1})+t(L-10,Y(p)+4,p,{a:'end',s:12,c:MU});
 for(let u=2;u<=8;u++) s+=t(X(u),B+20,u,{s:12,c:MU});
 s+=ln(L,T,L,B,{w:2})+ln(L,B,R+8,B,{w:2});
 s+=ln(X(5),T,X(5),B,{c:AM,w:3})+t(X(5)+8,T+12,'LRPC (vertikal di uₙ = 5%)',{a:'start',s:12,c:AM});
 s+=pa(`M${X(2)} ${Y(4.5)} L${X(8)} ${Y(1.5)}`,AC,4)+t(X(7.3),Y(1.8)+22,'SRPC₁ (πᵉ = 3%)',{s:12,c:AC});
 s+=pa(`M${X(2)} ${Y(6.5)} L${X(8)} ${Y(3.5)}`,NEG,4,'8 6')+t(X(7.3),Y(3.8)+22,'SRPC₂ (πᵉ = 5%)',{s:12,c:NEG});
 s+=ln(X(4.92),Y(3.1),X(4.1),Y(3.45),{m:1,c:AC,w:2})+ln(X(3.95),Y(3.55),X(4.9),Y(4.9),{m:1,c:NEG,w:2});
 s+=dot(X(5),Y(3),AC,7)+t(X(5)+10,Y(3)+18,'A (5 ; 3)',{a:'start',s:12,c:AC});
 s+=dot(X(4),Y(3.5),AC,7)+t(X(4)-8,Y(3.5)-16,'B (4 ; 3,5)',{a:'end',s:12,c:AC});
 s+=dot(X(5),Y(5),NEG,7)+t(X(5)+10,Y(5)-8,'C (5 ; 5)',{a:'start',s:12,c:NEG});
 s+=t((L+R)/2,B+46,'Pengangguran u (%)',{s:13});
 s+=`<text transform="translate(18 ${(T+B)/2}) rotate(-90)" style="${FT};font-size:13px;font-weight:600;fill:${INK};text-anchor:middle">Inflasi π (%)</text>`;
 return fig(640,310,s,'Kurva Phillips jangka pendek dan jangka panjang','A → B: stimulus menurunkan u (bergerak sepanjang SRPC). B → C: ekspektasi naik, SRPC bergeser, u kembali ke uₙ dengan inflasi lebih tinggi.');
})();

/* ---------- Bab 2: data Indonesia 2021–2025 ---------- */
const G5=(()=>{
 const yrs=[2021,2022,2023,2024,2025],inf=[1.87,5.51,2.61,1.57,2.92],tpt=[6.49,5.86,5.32,4.91,4.85];
 const L=60,R=600,T=20,B=240,X=i=>L+30+i*(R-L-60)/4,Y=v=>B-v/7*(B-T);
 let s='';
 for(let v=0;v<=7;v++) s+=ln(L,Y(v),R,Y(v),{c:LN,w:1})+t(L-10,Y(v)+4,v,{a:'end',s:12,c:MU});
 yrs.forEach((y,i)=>s+=t(X(i),B+20,y,{s:12,c:MU}));
 s+=pa(inf.map((v,i)=>(i?'L':'M')+X(i)+' '+Y(v)).join(' '),AM,4)+pa(tpt.map((v,i)=>(i?'L':'M')+X(i)+' '+Y(v)).join(' '),AC,4);
 inf.forEach((v,i)=>s+=dot(X(i),Y(v),AM,6)+t(X(i),Y(v)+20,f1(v),{s:12,c:AM}));
 tpt.forEach((v,i)=>s+=dot(X(i),Y(v),AC,6)+t(X(i),Y(v)-12,f1(v),{s:12,c:AC}));
 s+=rc(330,282,16,10,{f:AM,c:AM,r:2})+t(352,291,'Inflasi tahunan (%, Desember)',{a:'start',s:12})+rc(90,282,16,10,{f:AC,c:AC,r:2})+t(112,291,'TPT Agustus (%)',{a:'start',s:12});
 return fig(640,306,s,'Inflasi dan TPT Indonesia 2021–2025','Hanya 2021→2022 dan 2024→2025 yang mirip trade-off Phillips; 2022→2024 keduanya turun bersamaan.');
})();

/* ---------- Bab 3: kurva AD, gerak vs geser ---------- */
const G6=(()=>{
 const L=70,R=600,T=20,B=250;let s='';
 s+=ln(L,T,L,B,{w:2})+ln(L,B,R+8,B,{w:2});
 s+=pa(`M120 50 L400 215`,AC,4)+t(412,225,'AD₁',{a:'start',s:14,c:AC});
 s+=pa(`M250 50 L530 215`,NEG,4,'8 6')+t(542,225,'AD₂',{a:'start',s:14,c:NEG});
 s+=dot(260,108,AC,7)+t(250,100,'A',{a:'end',c:AC,s:14});
 s+=dot(330,148,AC,7)+t(340,142,'B',{a:'start',c:AC,s:14});
 s+=ln(264,111,324,146,{m:1,c:AC,w:2});
 s+=ln(266,108,382,108,{c:AM,w:2,d:'3 5'});
 s+=dot(390,108,NEG,7)+t(404,102,'C',{a:'start',c:NEG,s:14});
 s+=ln(270,108,384,108,{m:1,c:NEG,w:3});
 s+=t(150,262+10,'Gerak A → B: harga turun',{s:12,c:AC,a:'start'});
 s+=t(330,262+10,'',{});
 s+=t(610,36,'Geser A → C:',{s:12,c:NEG,a:'end'})+t(610,52,'C, I, G, atau (X−M) berubah',{s:12,c:NEG,a:'end'});
 s+=t((L+R)/2,B+44,'Output riil Y',{s:13});
 s+=`<text transform="translate(18 ${(T+B)/2}) rotate(-90)" style="${FT};font-size:13px;font-weight:600;fill:${INK};text-anchor:middle">Tingkat harga P</text>`;
 return fig(640,300,s,'Pergerakan sepanjang kurva AD dan pergeseran kurva AD','Harga berubah: bergerak sepanjang kurva. Faktor selain harga berubah: seluruh kurva bergeser.');
})();

/* ---------- Bab 3: putaran multiplier ---------- */
const G7=(()=>{
 const n=8,v=[100];for(let i=1;i<n;i++)v.push(v[i-1]*.8);
 const L=50,R=610,T=30,B=210,bw=(R-L)/n;let s='',cum=0;
 s+=ln(L,B,R,B,{w:2});
 v.forEach((a,i)=>{cum+=a;const h=a/100*(B-T-10),x=L+i*bw+10;
  s+=rc(x,B-h,bw-20,h,{f:AC,c:AC,r:4})+t(x+(bw-20)/2,B-h-6,f1(a),{s:12,c:AC})+t(x+(bw-20)/2,B+18,'Putaran '+(i+1),{s:11,c:MU,w:500})+t(x+(bw-20)/2,B+34,'Σ '+f1(cum),{s:11,c:INK,w:600});});
 s+=t(330,16,'ΔE = 100 miliar, MPC = 0,8: tiap putaran tinggal 80% dari sebelumnya',{s:13,c:AC});
 s+=t(330,272,'Setelah putaran tak hingga: 100 ÷ (1 − 0,8) = 500 miliar',{s:14,c:NEG});
 return fig(660,288,s,'Putaran efek multiplier','Batang makin pendek (deret geometri), tetapi jumlahnya konvergen ke 500.');
})();

/* ---------- Bab 3: BI-Rate 2026 ---------- */
const G8=(()=>{
 const lab=['Jan–Apr','Mei','9 Jun','18 Jun','Jul','Agu','Sep','Okt'],v=[4.75,5.00,5.50,5.75,5.75,5.75,5.75,5.75];
 const L=60,R=610,T=24,B=220,X=i=>L+30+i*(R-L-60)/7,Y=a=>B-(a-4.5)/1.5*(B-T);
 let s='';
 [4.5,5,5.5,6].forEach(a=>s+=ln(L,Y(a),R,Y(a),{c:LN,w:1})+t(L-8,Y(a)+4,f1(a),{a:'end',s:12,c:MU}));
 lab.forEach((l,i)=>s+=t(X(i),B+20,l,{s:12,c:MU}));
 s+=pa(v.map((a,i)=>(i?'L':'M')+X(i)+' '+Y(a)).join(' '),AC,4);
 v.forEach((a,i)=>s+=dot(X(i),Y(a),AC,6)+t(X(i),Y(a)-12,(+a).toFixed(2).replace('.',','),{s:12,c:AC}));
 s+=t(330,268,'BI-Rate 2026 (%): naik 100 bps pada Mei–Juni, lalu ditahan',{s:12,c:MU,w:500});
 return fig(640,280,s,'BI-Rate sepanjang 2026','Untuk menjaga rupiah: bunga naik → biaya kredit naik → konsumsi dan investasi tertahan.');
})();

/* ---------- Bab 4: skala keparahan inflasi ---------- */
const G9=(()=>{
 const seg=[['Ringan','&lt; 10%',120,'#2e8b57'],['Sedang','10–30%',150,'#c9a227'],['Berat','30–100%',170,'#d9822b'],['Hiperinflasi','&gt; 100%',140,'#c0392b']];
 let x=30,s='';
 seg.forEach(a=>{s+=rc(x,30,a[2],70,{f:a[3],c:CD,r:0,w:2})+t(x+a[2]/2,60,a[0],{c:'#fff',s:14})+t(x+a[2]/2,82,a[1],{c:'#fff',s:13,w:500});x+=a[2];});
 s+=ln(30,120,610,120,{m:1,c:INK,w:2})+t(320,146,'Laju inflasi per tahun makin tinggi → kepercayaan pada uang makin hilang',{s:12,c:MU,w:500});
 return fig(640,160,s,'Skala keparahan inflasi','Contoh ekstrem: hiperinflasi Jerman 1923, uang dibawa dengan gerobak untuk membeli sepotong roti.');
})();

/* ---------- Bab 4: tiga laju inflasi dari IHK yang sama ---------- */
const G10=(()=>{
 const rows=[['mtm (Sep 2026 vs Agt 2026)',0.30,AM],['ytd (Sep 2026 vs Des 2025)',2.17,AC],['yoy (Sep 2026 vs Sep 2025)',3.28,NEG]];
 let s='';
 rows.forEach((r,i)=>{const y=20+i*52,w=r[1]/3.5*330;
  s+=t(20,y+22,r[0],{a:'start',s:13})+rc(250,y+4,w,28,{f:r[2],c:r[2],r:4})+t(250+w+8,y+24,(+r[1]).toFixed(2).replace('.',',')+'%',{a:'start',s:14,c:r[2]});});
 return fig(640,180,s,'Tiga laju inflasi dari IHK September 2026','IHK sama (112,31), pembanding berbeda → angka inflasi berbeda. Itulah sebabnya selalu sebut yoy, ytd, atau mtm.');
})();

/* ---------- Bab 5: lingkaran hubungan antarbab ---------- */
const G11=(()=>{
 let s='';
 const N=(x,y,L,f,tc)=>bx(x,y,170,64,L,{f:f,tc:tc,fw:700,s:13,lh:17,c:f===CD?AC:f});
 s+=N(20,20,['① Guncangan &amp; kebijakan','suku bunga, G, kurs'],CH);
 s+=N(235,20,['② Permintaan agregat','AD (Bab 3)'],AC,'#fff');
 s+=N(450,20,['③ Output &amp; gap output','Y − Y* (Bab 1 &amp; 3)'],AC,'#fff');
 s+=N(450,200,['④ Pengangguran u','Hukum Okun (Bab 1)'],NEG,'#fff');
 s+=N(235,200,['⑤ Inflasi π','Kurva Phillips (Bab 2)'],AM,'#fff');
 s+=N(20,200,['⑥ Akibat inflasi','respons BI (Bab 4)'],CH);
 s+=ln(190,52,233,52,{m:1})+ln(405,52,448,52,{m:1})+ln(535,84,535,198,{m:1});
 s+=ln(448,232,407,232,{m:1})+ln(233,232,192,232,{m:1})+ln(105,198,105,86,{m:1});
 s+=t(320,142,'Satu lingkaran sebab-akibat makroekonomi',{s:14,c:AC});
 s+=t(320,162,'(bunga naik → ② turun → ③ turun → ④ naik → ⑤ turun)',{s:12,c:MU,w:500});
 return fig(640,290,s,'Lingkaran sebab akibat makroekonomi antarbab','Hampir semua soal makro bisa dilacak dengan mengikuti panah di lingkaran ini.');
})();
window.__MK={G1,G2,G3,G4,G5,G6,G7,G8,G9,G10,G11};
})();
(function(){
const {G1,G2,G3,G4,G5,G6,G7,G8,G9,G10,G11}=window.__MK;
const CHs=[];

/* ================= BAB 1 ================= */
CHs.push({id:"makro-1", t:"Pengangguran dan Hukum Okun", h:String.raw`<p class="hint"><b>Tujuan belajar.</b> Setelah bab ini kamu bisa: (1) menentukan status seseorang: bekerja, penganggur, atau bukan angkatan kerja; (2) menghitung [[mk_tpt|TPT]] dan TPAK; (3) membedakan jenis pengangguran; (4) memakai [[mk_okun|Hukum Okun]] untuk memperkirakan perubahan pengangguran dari pertumbuhan ekonomi.</p>

<h2>0. Peta bab</h2>
<div class="proc">
<div class="pr"><b>1 · Siapa penganggur?</b>Syarat ILO dan BPS</div>
<div class="pr"><b>2 · Mengukur</b>TPT dan TPAK</div>
<div class="pr"><b>3 · Jenis</b>friksional, struktural, siklis</div>
<div class="pr"><b>4 · Ekonomi dan kerja</b>pertumbuhan dan elastisitas</div>
<div class="pr"><b>5 · Hukum Okun</b>output naik, pengangguran turun</div>
</div>

<h2>1. Siapa yang disebut penganggur?</h2>
<p>Banyak orang mengira penganggur = siapa saja yang tidak punya pekerjaan. Itu keliru. Seorang pelajar tidak bekerja, tetapi ia <b>bukan</b> penganggur karena tidak mencari kerja. Menurut ILO, seseorang disebut penganggur bila memenuhi <b>tiga syarat sekaligus</b>:</p>
<table><tr><th>No</th><th>Syarat ILO</th><th>Arti sehari-hari</th></tr>
<tr><td>1</td><td>Tanpa pekerjaan</td><td>Tidak bekerja pada periode acuan</td></tr>
<tr><td>2</td><td>Tersedia untuk bekerja</td><td>Kalau ada tawaran, siap mulai</td></tr>
<tr><td>3</td><td>Mencari pekerjaan</td><td>Aktif melamar atau mencari</td></tr></table>
<p>BPS memperluas kelompok penganggur terbuka: ikut dihitung orang yang <i>sedang menyiapkan usaha</i>, yang <i>putus asa</i> (merasa tidak mungkin mendapat kerja), dan yang <i>sudah diterima kerja tetapi belum mulai bekerja</i>.</p>
<p>Bagan alir berikut membantumu menentukan status seseorang, langkah demi langkah:</p>
${G2}
⟦def|<b>Angkatan kerja (AK)</b> = penduduk usia kerja yang bekerja atau menganggur (mencari kerja). Bekerja berarti melakukan kegiatan ekonomi minimal 1 jam berturut-turut dalam seminggu terakhir.⟧

<h2>2. Mengukur pengangguran: TPT dan TPAK</h2>
<p>Dua ukuran utama dihitung dari angkatan kerja:</p>
\[\text{AK}=\text{Bekerja}+\text{Penganggur}\qquad
\text{TPT}=\frac{\text{Penganggur}}{\text{AK}}\times100\%\qquad
\text{TPAK}=\frac{\text{AK}}{\text{Penduduk usia kerja}}\times100\%\]
<p>TPT menjawab "dari 100 orang yang aktif di pasar kerja, berapa yang menganggur?". TPAK menjawab "berapa persen penduduk usia kerja yang aktif di pasar kerja?". Perhatikan gambar contoh berikut.</p>
${G1}
⟦soal|<b>Contoh 1: TPT data nyata.</b> Pada Februari 2026 jumlah penganggur 7,24 juta orang dan angkatan kerja 154,91 juta orang. Hitung TPT.⟧
⟦dik|Penganggur = 7,24 juta; AK = 154,91 juta.⟧
⟦tanya|TPT Februari 2026.⟧
⟦langkah|1|Pakai rumus TPT|\(\text{TPT}=\dfrac{7{,}24}{154{,}91}\times100\%\)⟧
⟦langkah|2|Hitung|\(\dfrac{7{,}24}{154{,}91}=0{,}04674\ \Rightarrow\ \text{TPT}\approx4{,}67\%\)⟧
⟦int|Dari setiap 100 orang di angkatan kerja, sekitar 4 sampai 5 orang menganggur. BPS melaporkan 4,68%; selisih 0,01 poin hanya karena pembulatan angka juta. Menurut makalah, TPT turun lagi menjadi 4,65% pada Mei 2026.⟧

<h2>3. Jenis-jenis pengangguran</h2>
<p><b>Menurut penyebabnya</b>:</p>
<table><tr><th>Jenis</th><th>Penyebab</th><th>Contoh</th></tr>
<tr><td>Friksional</td><td>Butuh waktu mencocokkan pekerja dan lowongan</td><td>Lulusan baru, orang yang pindah kerja</td></tr>
<tr><td>Struktural</td><td>Keterampilan tidak cocok, atau upah di atas keseimbangan</td><td>Pabrik beralih ke mesin, upah minimum tinggi</td></tr>
<tr><td>Siklis</td><td>Ekonomi melemah (siklus bisnis)</td><td>PHK saat resesi</td></tr>
<tr><td>Musiman</td><td>Pola musim</td><td>Petani di luar masa tanam atau panen</td></tr></table>
<p><b>Menurut wujudnya</b>: <i>terbuka</i> (aktif mencari kerja, masuk TPT), <i>setengah menganggur</i> (bekerja kurang dari 35 jam seminggu), dan <i>tersembunyi</i> (kelebihan pekerja, mis. pertanian padat pekerja). Dua yang terakhir dicatat sebagai bekerja sehingga <b>tidak</b> masuk TPT.</p>
<p>Hubungan yang perlu dihafal: [[mk_un|pengangguran alamiah]] = friksional + struktural. Sisanya adalah pengangguran siklis:</p>
\[u_n=u_{\text{friksional}}+u_{\text{struktural}}\qquad u_{\text{siklis}}=u-u_n\]
<div class="duo"><div><b>\(u>u_n\)</b><br>Siklis positif: ekonomi di bawah kapasitas, ada resesi.</div><div><b>\(u&lt;u_n\)</b><br>Ekonomi "terlalu panas": pasar kerja ketat, rawan inflasi.</div></div>

<h2>4. Pertumbuhan ekonomi dan lapangan kerja</h2>
<p>Pertumbuhan ekonomi diukur dari perubahan <b>PDB riil</b> (harga konstan), bukan PDB nominal, agar kenaikan harga tidak ikut terhitung:</p>
\[g_Y=\frac{Y_t-Y_{t-1}}{Y_{t-1}}\times100\%\]
<p>Perusahaan merekrut pekerja karena ada permintaan atas barangnya (<i>permintaan turunan</i>). Namun jumlah pekerja baru hanyalah "sisa" pertumbuhan yang tidak habis diserap kenaikan produktivitas:</p>
\[g_L\approx g_Y-g_{\text{produktivitas}}\]
<p>Untuk mengukur kekuatan penyerapan dipakai [[mk_eps|elastisitas penyerapan tenaga kerja]]:</p>
\[\varepsilon=\frac{\Delta L/L}{\Delta Y/Y}\]
<table><tr><th>Nilai \(\varepsilon\)</th><th>Arti</th></tr>
<tr><td>\(\varepsilon\ge1\)</td><td>Kerja tumbuh sama cepat atau lebih cepat dari output</td></tr>
<tr><td>\(0&lt;\varepsilon&lt;1\)</td><td>Inelastis: sebagian pertumbuhan berasal dari produktivitas</td></tr>
<tr><td>\(\varepsilon\le0\)</td><td><i>Jobless growth</i>: output naik, pekerja tidak bertambah</td></tr></table>
⟦soal|<b>Contoh 2: elastisitas Indonesia (awal 2026).</b> Jumlah pekerja tumbuh 1,30% ketika PDB riil tumbuh 5,61%. Pertumbuhan angkatan kerja 1,22%. (a) Hitung \(\varepsilon\). (b) Berapa pertumbuhan ekonomi minimal agar pengangguran tidak bertambah?⟧
⟦dik|\(\Delta L/L=1{,}30\%\); \(\Delta Y/Y=5{,}61\%\); \(g_{AK}=1{,}22\%\).⟧
⟦tanya|(a) \(\varepsilon\); (b) \(g_Y\) minimum.⟧
⟦langkah|1|Hitung elastisitas|\(\varepsilon=\dfrac{1{,}30}{5{,}61}\approx0{,}232\)⟧
⟦langkah|2|Syarat pengangguran tidak naik|Pekerja baru harus minimal sebanyak tambahan angkatan kerja: \(g_L\ge g_{AK}=1{,}22\%\).⟧
⟦langkah|3|Cari pertumbuhan minimum|\(g_Y=\dfrac{g_L}{\varepsilon}=\dfrac{1{,}22}{0{,}232}\approx5{,}26\%\)⟧
⟦int|Karena \(\varepsilon\) kecil (inelastis), ekonomi harus tumbuh sekitar 5,2% sampai 5,3% hanya untuk "menahan" pengangguran agar tidak naik. Makalah menyebut sekitar 5,2%. Makin padat modal pertumbuhannya, makin besar pertumbuhan yang diperlukan.⟧
<p class="hint">Di Indonesia sekitar 59,30% pekerja masih berada di sektor informal (data makalah). TPT rendah belum tentu berarti kualitas kerja baik. Itulah mengapa pertumbuhan yang <i>inklusif</i> penting.</p>

<h2>5. Hukum Okun</h2>
<p>Arthur Okun (1962) mengamati keteraturan: ketika output tumbuh cepat, pengangguran turun; ketika output melambat, pengangguran naik. Ini <b>keteraturan empiris</b>, bukan hukum alam yang pasti.</p>
<h3>5.1 Alasan logisnya</h3>
<div class="proc">
<div class="pr"><b>Output tumbuh</b>lebih cepat dari potensial</div>
<div class="pr"><b>Perusahaan</b>butuh pekerja tambahan</div>
<div class="pr"><b>Perekrutan</b>naik</div>
<div class="pr"><b>Pengangguran</b>turun</div>
</div>
<h3>5.2 Tiga bentuk penulisan</h3>
<table><tr><th>Bentuk</th><th>Persamaan</th><th>Dipakai saat</th></tr>
<tr><td style="text-align:left">Selisih (<i>difference</i>)</td><td>\(\Delta u_t=a+b\,g_t,\ \ b&lt;0\)</td><td>Tanpa menaksir output potensial</td></tr>
<tr><td style="text-align:left">Selisih dengan pertumbuhan potensial</td><td>\(\Delta u_t=-\beta\,(g_t-g^{*})\)</td><td>Pertumbuhan potensial \(g^*\) diketahui</td></tr>
<tr><td style="text-align:left">Kesenjangan (<i>gap</i>)</td><td>\(u_t-u_n=-c\,\dfrac{Y_t-Y_t^{*}}{Y_t^{*}}\)</td><td>Output potensial \(Y^*\) diketahui</td></tr></table>
<p>Keterangan: \(\Delta u\) = perubahan pengangguran (poin persentase); \(g\) = pertumbuhan PDB riil aktual; \(g^*\) = pertumbuhan potensial; \(\beta\), \(c\) = koefisien Okun (positif, tanda minus sudah ada di rumus). Garis di bawah memperlihatkan bentuk kedua dengan \(\beta=0{,}4\) dan \(g^*=3\%\).</p>
${G3}
<p>Cara membaca: titik di sebelah kanan \(g^*\) berada di bawah sumbu (pengangguran turun); di sebelah kiri \(g^*\) berada di atas sumbu (pengangguran naik). Tepat di \(g=g^*\), pengangguran tidak berubah. Itulah arti [[mk_ygap|kesenjangan output]]: selisih output aktual dengan potensial.</p>

⟦soal|<b>Contoh 3 (dari makalah).</b> Pertumbuhan ekonomi aktual 5%, potensial 3%, koefisien Okun 0,4, pengangguran periode sebelumnya 6%. Hitung perubahan dan perkiraan pengangguran periode berikutnya.⟧
⟦dik|\(g=5\%\); \(g^*=3\%\); \(\beta=0{,}4\); \(u_{t-1}=6\%\).⟧
⟦tanya|\(\Delta u\) dan \(u_t\).⟧
⟦langkah|1|Pakai persamaan Okun|\(\Delta u=-0{,}4\,(5-3)\)⟧
⟦langkah|2|Hitung|\(\Delta u=-0{,}4\times2=-0{,}8\) poin⟧
⟦langkah|3|Perkiraan pengangguran baru|\(u_t=6\%-0{,}8=5{,}2\%\)⟧
⟦int|Karena ekonomi tumbuh 2 poin lebih cepat dari potensialnya, pengangguran turun 0,8 poin menjadi 5,2%. Ini perkiraan; pengangguran juga dipengaruhi pendidikan, teknologi, dan kebijakan.⟧

⟦soal|<b>Contoh 4: saat melambat.</b> Dengan koefisien dan \(g^*\) yang sama, ekonomi hanya tumbuh 1% dan \(u_{t-1}=5\%\). Berapa \(u_t\)? Berapa pertumbuhan yang diperlukan agar \(u\) turun 1 poin?⟧
⟦dik|\(g=1\%\); \(g^*=3\%\); \(\beta=0{,}4\); \(u_{t-1}=5\%\).⟧
⟦tanya|(a) \(u_t\); (b) \(g\) agar \(\Delta u=-1\).⟧
⟦langkah|1|(a) Hitung \(\Delta u\)|\(\Delta u=-0{,}4(1-3)=+0{,}8\) poin, sehingga \(u_t=5+0{,}8=5{,}8\%\)⟧
⟦langkah|2|(b) Balik rumus|\(-1=-0{,}4(g-3)\Rightarrow g-3=\dfrac{1}{0{,}4}=2{,}5\Rightarrow g=5{,}5\%\)⟧
⟦int|Pertumbuhan 1% berada di bawah potensial sehingga pengangguran naik 0,8 poin. Untuk menurunkan pengangguran 1 poin, ekonomi harus tumbuh 2,5 poin di atas potensialnya.⟧

<h3>5.3 Seberapa besar koefisien Okun?</h3>
<table><tr><th style="text-align:left">Temuan (Ball, Leigh, Loungani 2013)</th><th>Nilai</th></tr>
<tr><td style="text-align:left">Rata-rata 20 negara maju, versi kesenjangan</td><td>−0,40</td></tr>
<tr><td style="text-align:left">Rata-rata 20 negara maju, versi selisih</td><td>−0,33</td></tr>
<tr><td style="text-align:left">Amerika Serikat 1948–2011</td><td>−0,41</td></tr>
<tr><td style="text-align:left">Spanyol (kontrak sementara banyak)</td><td>terbesar</td></tr>
<tr><td style="text-align:left">Jepang (kerja seumur hidup)</td><td>kecil</td></tr></table>
<p><b>Aturan jempol 2:1.</b> Okun awal: output ±3% setara pengangguran ±1 poin (khusus AS tahun 1960-an). Versi yang lebih modern, kira-kira kenaikan pengangguran 1 poin berkaitan dengan output turun hampir 2% (\(c\approx0{,}4\) hingga \(0{,}5\)).</p>
⟦soal|<b>Contoh 5: versi kesenjangan.</b> Output aktual 96 triliun, output potensial 100 triliun, \(c=0{,}4\), \(u_n=5\%\). Berapa pengangguran aktual?⟧
⟦dik|\(Y=96\); \(Y^*=100\); \(c=0{,}4\); \(u_n=5\%\).⟧
⟦tanya|\(u\).⟧
⟦langkah|1|Hitung kesenjangan output|\(\dfrac{Y-Y^*}{Y^*}=\dfrac{96-100}{100}=-4\%\)⟧
⟦langkah|2|Pakai Okun|\(u-u_n=-0{,}4\times(-4)=+1{,}6\)⟧
⟦langkah|3|Hasil|\(u=5+1{,}6=6{,}6\%\)⟧
⟦int|Output 4% di bawah potensial menambah 1,6 poin pengangguran siklis. Pengangguran 6,6% berarti ada 1,6 poin yang bisa "hilang" kembali jika ekonomi pulih ke potensial.⟧

<h3>5.4 Di Indonesia: berlaku atau tidak?</h3>
<table><tr><th style="text-align:left">Studi</th><th style="text-align:left">Temuan</th></tr>
<tr><td style="text-align:left">Astari dkk. (2019), ARDL, 1992–2016</td><td style="text-align:left">Pertumbuhan PDB berpengaruh negatif dan signifikan terhadap pengangguran: Okun berlaku</td></tr>
<tr><td style="text-align:left">Melindawati dkk. (2021), model selisih, 2002–2020 (n = 19)</td><td style="text-align:left">\(b=+0{,}033\), \(p=0{,}771\), \(R^2=0{,}005\): tidak signifikan dan bertanda positif, jadi Okun tidak berlaku pada periode itu</td></tr></table>
<p>Pelajaran: Hukum Okun adalah hubungan <i>statistik</i>. Koefisiennya harus ditaksir ulang untuk tiap negara dan periode.</p>

<h2>6. Mengapa Okun tidak selalu pas?</h2>
<table><tr><th style="text-align:left">Faktor</th><th style="text-align:left">Akibat pada hubungan output dan pengangguran</th></tr>
<tr><td style="text-align:left">Penimbunan tenaga kerja (<i>labor hoarding</i>)</td><td style="text-align:left">Pekerja dipertahankan saat ekonomi melemah, sehingga pengangguran naik lebih kecil</td></tr>
<tr><td style="text-align:left">Jam kerja per pekerja</td><td style="text-align:left">Perusahaan memangkas lembur dahulu sebelum memangkas orang</td></tr>
<tr><td style="text-align:left">Produktivitas dan otomatisasi</td><td style="text-align:left">Output naik tanpa banyak pekerja baru (<i>jobless growth</i>)</td></tr>
<tr><td style="text-align:left">Sektor informal dan keluar dari angkatan kerja</td><td style="text-align:left">Orang yang kehilangan kerja beralih ke informal atau berhenti mencari, TPT tidak melonjak</td></tr>
<tr><td style="text-align:left">Jeda waktu (<i>lag</i>)</td><td style="text-align:left">Dampak pertumbuhan baru terasa setelah beberapa periode</td></tr>
<tr><td style="text-align:left">Perubahan struktur ekonomi</td><td style="text-align:left">Industri padat modal menyerap lebih sedikit pekerja per 1% pertumbuhan</td></tr></table>

<h2>7. Kaitan dengan ilmu aktuaria</h2>
<p>Perubahan pengangguran memengaruhi risiko yang dihitung aktuaris: jumlah orang yang kehilangan pekerjaan (klaim dan kebutuhan dana program seperti Jaminan Kehilangan Pekerjaan), risiko gagal bayar kredit, dan perilaku lapse polis ketika pendapatan masyarakat turun. Okun memberi cara kasar memperkirakan arah dan besar perubahan itu dari proyeksi pertumbuhan.</p>

<h2>8. Ringkasan kilat</h2>
<table><tr><th style="text-align:left">Konsep</th><th style="text-align:left">Rumus atau isi</th></tr>
<tr><td style="text-align:left">TPT</td><td>\(\text{Penganggur}\div\text{AK}\times100\%\)</td></tr>
<tr><td style="text-align:left">Pengangguran siklis</td><td>\(u-u_n\)</td></tr>
<tr><td style="text-align:left">Elastisitas penyerapan</td><td>\(\varepsilon=\dfrac{\Delta L/L}{\Delta Y/Y}\)</td></tr>
<tr><td style="text-align:left">Okun (selisih)</td><td>\(\Delta u=-\beta(g-g^*)\)</td></tr>
<tr><td style="text-align:left">Okun (kesenjangan)</td><td>\(u-u_n=-c\,\dfrac{Y-Y^*}{Y^*}\)</td></tr></table>
<p>Kerjakan <b>Latihan soal</b> di bagian bawah halaman ini.</p>`});

/* ================= BAB 2 ================= */
CHs.push({id:"makro-2", t:"Teori Inflasi Modern: Kurva Phillips", h:String.raw`<p class="hint"><b>Tujuan belajar.</b> Setelah bab ini kamu bisa: (1) menjelaskan hubungan inflasi dan pengangguran pada kurva Phillips jangka pendek ([[mk_srpc|SRPC]]) dan jangka panjang ([[mk_lrpc|LRPC]]); (2) memakai persamaan Phillips dengan [[mk_eks|ekspektasi inflasi]]; (3) menjelaskan [[mk_stag|stagflasi]], kritik Friedman, Phelps, Lucas; (4) membaca [[mk_nkpc|NKPC]] dan kebijakan moneter.</p>

<h2>1. Peta perjalanan gagasan (garis waktu)</h2>
⟦waktu|1958,1960,1967–68,1973–79,1976,1990-an+||0:1;1:2;2:3;3:4;4:5;5:6⟧
<div class="vt">
<div class="vt-i"><div class="vt-w">1958 · Phillips</div><div class="vt-t">Pengangguran rendah, upah naik cepat</div><div class="vt-d">Data Inggris 1861–1957: hubungan negatif antara pengangguran dan kenaikan upah nominal.</div></div>
<div class="vt-i"><div class="vt-w">1960 · Samuelson dan Solow</div><div class="vt-t">Upah diganti inflasi harga</div><div class="vt-d">Upah naik, biaya naik, harga naik. Kesan: inflasi dan pengangguran bisa "dipilih" seperti menu.</div></div>
<div class="vt-i"><div class="vt-w">1967–68 · Phelps dan Friedman</div><div class="vt-t">Ekspektasi inflasi diperhitungkan</div><div class="vt-d">Trade-off hanya jangka pendek. Jangka panjang, pengangguran kembali ke tingkat alamiah.</div></div>
<div class="vt-i"><div class="vt-w">1973 dan 1979 · Guncangan minyak</div><div class="vt-t">Stagflasi</div><div class="vt-d">Inflasi dan pengangguran naik bersamaan. Kurva sederhana tidak bisa menjelaskannya.</div></div>
<div class="vt-i"><div class="vt-w">1976 · Robert Lucas</div><div class="vt-t">Kritik Lucas</div><div class="vt-d">Hubungan dari data lama tidak otomatis bertahan ketika kebijakan berubah.</div></div>
<div class="vt-i"><div class="vt-w">1990-an sampai kini</div><div class="vt-t">Kurva Phillips Keynesian Baru (NKPC)</div><div class="vt-d">Harga kaku dan ekspektasi masa depan diturunkan dari perilaku perusahaan.</div></div>
</div>

<h2>2. Kurva Phillips jangka pendek (SRPC)</h2>
<p>Idenya mirip "pasar kerja yang sempit": makin sedikit pengangguran, makin sulit perusahaan mencari pekerja, sehingga upah dan harga merangkak naik.</p>
<div class="proc">
<div class="pr"><b>1 · Ekonomi tumbuh</b>permintaan naik</div>
<div class="pr"><b>2 · Pengangguran turun</b>pekerja makin langka</div>
<div class="pr"><b>3 · Upah naik</b>posisi tawar pekerja kuat</div>
<div class="pr"><b>4 · Biaya naik</b>upah menambah biaya produksi</div>
<div class="pr"><b>5 · Harga naik</b>inflasi meningkat</div>
</div>
<p>Bentuk persamaan yang dipakai dalam makalah (versi Friedman dan Phelps, diperluas dengan guncangan penawaran):</p>
\[\pi_t=\pi_t^{e}-\alpha\,(u_t-u_n)+v_t\]
<table><tr><th>Simbol</th><th style="text-align:left">Arti</th></tr>
<tr><td>\(\pi_t\)</td><td style="text-align:left">Inflasi aktual</td></tr>
<tr><td>\(\pi_t^{e}\)</td><td style="text-align:left">Ekspektasi (perkiraan) inflasi</td></tr>
<tr><td>\(\alpha\)</td><td style="text-align:left">Sensitivitas inflasi terhadap pengangguran (\(\alpha>0\))</td></tr>
<tr><td>\(u_t,\ u_n\)</td><td style="text-align:left">Pengangguran aktual dan alamiah</td></tr>
<tr><td>\(v_t\)</td><td style="text-align:left">Guncangan penawaran (harga minyak, panen gagal, dll.)</td></tr></table>
<h3>Cara membaca persamaan</h3>
<table><tr><th style="text-align:left">Kondisi</th><th style="text-align:left">Hasil</th></tr>
<tr><td style="text-align:left">\(u=u_n\) dan \(v=0\)</td><td style="text-align:left">\(\pi=\pi^e\): inflasi sama dengan perkiraan</td></tr>
<tr><td style="text-align:left">\(u&lt;u_n\)</td><td style="text-align:left">\(\pi>\pi^e\): inflasi di atas perkiraan</td></tr>
<tr><td style="text-align:left">\(u>u_n\)</td><td style="text-align:left">\(\pi&lt;\pi^e\): inflasi di bawah perkiraan</td></tr>
<tr><td style="text-align:left">\(v\) naik</td><td style="text-align:left">Inflasi naik tanpa pengangguran turun (stagflasi)</td></tr></table>
⟦soal|<b>Contoh 1.</b> Ekspektasi inflasi 3%, \(\alpha=0{,}5\), \(u_n=5\%\), tanpa guncangan. Pengangguran sedang 4%. Berapa inflasi?⟧
⟦dik|\(\pi^e=3\%\); \(\alpha=0{,}5\); \(u_n=5\%\); \(u=4\%\); \(v=0\).⟧
⟦tanya|\(\pi\).⟧
⟦langkah|1|Masukkan ke persamaan|\(\pi=3-0{,}5\,(4-5)\)⟧
⟦langkah|2|Hitung|\(\pi=3-0{,}5(-1)=3+0{,}5=3{,}5\%\)⟧
⟦int|Pengangguran 1 poin di bawah alamiah mendorong inflasi 0,5 poin di atas ekspektasi. Pengangguran rendah "dibayar" dengan inflasi lebih tinggi. Inilah trade-off jangka pendek.⟧

<h2>3. Ekspektasi inflasi: pemain kunci</h2>
<p>Pekerja dan perusahaan tidak hanya melihat inflasi hari ini, mereka menebak inflasi besok. Tebakan itu menentukan tuntutan upah dan harga jual.</p>
<table><tr><th style="text-align:left">Jenis</th><th style="text-align:left">Cara menebak</th><th style="text-align:left">Kelemahan</th></tr>
<tr><td style="text-align:left"><b>Adaptif</b></td><td style="text-align:left">Berdasarkan pengalaman masa lalu: \(\pi_t^{e}=\pi_{t-1}\)</td><td style="text-align:left">Lambat menyesuaikan, perkiraan tertinggal, muncul inersia inflasi</td></tr>
<tr><td style="text-align:left"><b>Rasional</b></td><td style="text-align:left">Memakai semua informasi: kebijakan, pengumuman bank sentral, data terbaru</td><td style="text-align:left">Menuntut pelaku ekonomi sangat terinformasi</td></tr></table>
<div class="proc">
<div class="pr"><b>Ekspektasi naik</b></div>
<div class="pr"><b>Pekerja menuntut</b>upah nominal lebih tinggi</div>
<div class="pr"><b>Biaya naik</b>tenaga kerja dan produksi</div>
<div class="pr"><b>Harga jual naik</b></div>
<div class="pr"><b>SRPC bergeser ke atas</b>1 poin ekspektasi = 1 poin geser</div>
</div>
⟦soal|<b>Contoh 2: ekspektasi adaptif (dari makalah).</b> \(u_n=5\%\), \(\alpha=0{,}5\), pemerintah menahan pengangguran di 4% terus-menerus. Ekspektasi awal \(\pi^e_1=3{,}0\%\) dan ekspektasi adaptif \(\pi^e_t=\pi_{t-1}\). Hitung inflasi tahun 1, 2, dan 3.⟧
⟦dik|\(u=4\%\); \(u_n=5\%\); \(\alpha=0{,}5\); \(\pi_1^e=3{,}0\%\).⟧
⟦tanya|\(\pi_1,\ \pi_2,\ \pi_3\).⟧
⟦langkah|1|Hitung tambahan tetap tiap tahun|\(-\alpha(u-u_n)=-0{,}5(4-5)=+0{,}5\) poin⟧
⟦langkah|2|Tahun 1|\(\pi_1=3{,}0+0{,}5=3{,}5\%\)⟧
⟦langkah|3|Tahun 2: ekspektasi menyusul|\(\pi_2^e=\pi_1=3{,}5\Rightarrow\pi_2=3{,}5+0{,}5=4{,}0\%\)⟧
⟦langkah|4|Tahun 3|\(\pi_3^e=4{,}0\Rightarrow\pi_3=4{,}5\%\)⟧
<table><tr><th>Tahun</th><th>\(u_t\)</th><th>\(\pi_t^e\)</th><th>\(\pi_t\)</th></tr>
<tr><td>1</td><td>4%</td><td>3,0%</td><td><b style="color:var(--red)">3,5%</b></td></tr>
<tr><td>2</td><td>4%</td><td>3,5%</td><td><b style="color:var(--red)">4,0%</b></td></tr>
<tr><td>3</td><td>4%</td><td>4,0%</td><td><b style="color:var(--red)">4,5%</b></td></tr></table>
⟦int|Inflasi naik 0,5 poin <b>setiap tahun</b>, bukan sekali saja. Menahan pengangguran di bawah \(u_n\) memicu inflasi yang terus dipercepat. Tabel ini contoh ilustratif, bukan data empiris.⟧

<h2>4. Kurva Phillips jangka panjang (LRPC) dan pengangguran alamiah</h2>
<p>Dalam jangka panjang, orang menyadari inflasi sebenarnya sehingga ekspektasi sama dengan kenyataan, \(\pi=\pi^e\). Masukkan ke persamaan dengan \(v=0\):</p>
\[\pi=\pi^{e}-\alpha(u-u_n)\ \Rightarrow\ \alpha(u-u_n)=0\ \Rightarrow\ u=u_n\]
<p>Artinya pengangguran selalu kembali ke [[mk_un|tingkat alamiah]] berapa pun inflasinya. LRPC adalah garis <b>vertikal</b> di \(u_n\). Satu-satunya hal yang berubah adalah level inflasinya.</p>
<table><tr><th style="text-align:left">Aspek</th><th style="text-align:left">Bergerak sepanjang kurva</th><th style="text-align:left">Kurva bergeser</th></tr>
<tr><td style="text-align:left">Penyebab</td><td style="text-align:left">Perubahan permintaan agregat</td><td style="text-align:left">Perubahan ekspektasi inflasi atau guncangan penawaran</td></tr>
<tr><td style="text-align:left">Contoh</td><td style="text-align:left">A ke B</td><td style="text-align:left">SRPC₁ ke SRPC₂</td></tr></table>
${G4}
<h3>Alur kejadian setelah stimulus</h3>
<div class="stp"><span class="no">1</span><div class="stp-b"><div class="stp-t">Permintaan naik (A → B)</div><div class="stp-c">Perusahaan butuh pekerja, pengangguran turun di bawah \(u_n\). Ekonomi bergerak sepanjang SRPC₁.</div></div></div>
<div class="stp"><span class="no">2</span><div class="stp-b"><div class="stp-t">Upah dan harga naik</div><div class="stp-c">Biaya produksi naik, perusahaan menaikkan harga, inflasi meningkat.</div></div></div>
<div class="stp"><span class="no">3</span><div class="stp-b"><div class="stp-t">Masyarakat menyadari inflasi lebih tinggi</div><div class="stp-c">Pekerja menuntut upah lebih tinggi, ekspektasi naik, SRPC bergeser ke atas.</div></div></div>
<div class="stp"><span class="no">4</span><div class="stp-b"><div class="stp-t">Kembali ke \(u_n\) (titik C)</div><div class="stp-c">Pengangguran kembali ke tingkat alamiah, tetapi inflasi tetap lebih tinggi dari semula.</div></div></div>
⟦catatan|Stimulus yang diulang tidak menjamin pengangguran lebih rendah dalam jangka panjang, tetapi menambah tekanan inflasi. Menahan pengangguran di bawah \(u_n\) memicu inflasi yang terus dipercepat (Gordon, 2018).⟧

<h2>5. Pengkritik: Friedman, Phelps, dan Lucas</h2>
<div class="duo"><div><b>Milton Friedman</b><br>Makalah <i>The Role of Monetary Policy</i> (1968). Inflasi yang bertahan berakar dari pertumbuhan uang beredar. Kebijakan moneter tidak bisa menetapkan pengangguran secara permanen. Nobel 1976.</div><div><b>Edmund Phelps</b><br>Karya 1967 tentang ekspektasi inflasi, penetapan upah, dan pencarian kerja. Sampai pada kesimpulan serupa secara terpisah. Nobel 2006.</div></div>
<p><b>Intinya.</b> Pekerja menilai upah <i>riil</i>, bukan nominal. Misalnya gaji Rp3.000.000 naik 5% ketika inflasi 5%: upah riil naik sekitar 0%, daya beli tidak berubah. Begitu pekerja sadar, mereka meminta upah nominal lebih tinggi, dan SRPC bergeser.</p>
<p><b>Kritik Lucas (1976).</b> Hubungan yang terlihat di data masa lalu belum tentu bertahan ketika pemerintah atau bank sentral mengubah kebijakan, karena masyarakat tidak diam: mereka menyesuaikan perkiraan dan perilakunya.</p>

<h2>6. Stagflasi: bukti bahwa trade-off tidak permanen</h2>
<p><b>Stagflasi</b> adalah inflasi tinggi disertai pertumbuhan lemah dan sering pengangguran tinggi. Pada 1970-an guncangan harga minyak (1973 dan 1979) menaikkan biaya produksi:</p>
<div class="proc">
<div class="pr"><b>Harga minyak naik</b></div>
<div class="pr"><b>Biaya produksi naik</b>inflasi naik</div>
<div class="pr"><b>Ekonomi tertekan</b>pengangguran naik</div>
</div>
<p>Dalam persamaan, ini suku \(v_t\) yang naik: SRPC bergeser ke atas <i>tanpa</i> pengangguran turun, jadi inflasi dan pengangguran naik bersamaan (titik A ke B pada SRPC₁ ke SRPC₂ dengan \(u_1\to u_2\)). Penyebab pastinya masih diperdebatkan, dan kebijakan moneter juga berperan.</p>
⟦soal|<b>Contoh 3: guncangan penawaran.</b> \(\pi^e=2\%\), \(\alpha=0{,}5\), \(u_n=5\%\). Mula-mula \(u=5\%\) dan \(v=0\). Lalu harga energi melonjak sehingga \(v=+1{,}5\) dan pengangguran naik ke 6%. Hitung inflasi sebelum dan sesudah.⟧
⟦dik|\(\pi^e=2\); \(\alpha=0{,}5\); \(u_n=5\).⟧
⟦tanya|\(\pi\) sebelum dan sesudah guncangan.⟧
⟦langkah|1|Sebelum|\(\pi=2-0{,}5(5-5)+0=2\%\)⟧
⟦langkah|2|Sesudah|\(\pi=2-0{,}5(6-5)+1{,}5=2-0{,}5+1{,}5=3\%\)⟧
⟦int|Pengangguran naik 1 poin, tetapi inflasi tetap <b>naik</b> dari 2% ke 3%. Pada kurva Phillips sederhana, pengangguran naik seharusnya menurunkan inflasi. Kenaikan \(v\) menjelaskan mengapa itu tidak terjadi.⟧

<h2>7. Kurva Phillips Keynesian Baru (NKPC)</h2>
<p>NKPC diturunkan dari perilaku perusahaan, bukan sekadar hubungan statistik. Kuncinya <b>kekakuan harga</b>: perusahaan tidak bisa mengubah harga setiap saat (kontrak, biaya perubahan harga, pertimbangan bisnis; model klasik Taylor 1980 dan Calvo 1983). Perusahaan yang kebagian "giliran" mengubah harga akan memasukkan ekspektasi inflasi ke depan dan tekanan biaya.</p>
\[\pi_t=\beta\,E_t[\pi_{t+1}]+\kappa\,x_t\]
<table><tr><th>Simbol</th><th style="text-align:left">Arti</th></tr>
<tr><td>\(\pi_t\)</td><td style="text-align:left">Inflasi saat ini</td></tr>
<tr><td>\(E_t[\pi_{t+1}]\)</td><td style="text-align:left">Ekspektasi inflasi periode depan (memandang ke depan)</td></tr>
<tr><td>\(\beta\)</td><td style="text-align:left">Faktor diskonto (bobot inflasi masa depan), dekat 1</td></tr>
<tr><td>\(x_t\)</td><td style="text-align:left">Kesenjangan output: output aktual dikurangi potensial, dalam persen (di model lengkap diwakili biaya marjinal riil)</td></tr>
<tr><td>\(\kappa\)</td><td style="text-align:left">Kekuatan hubungan kesenjangan output dan inflasi; makin kaku harga, makin kecil \(\kappa\)</td></tr></table>
<div class="duo"><div><b>NKPC</b><br>Ekspektasi <i>masa depan</i> dan kesenjangan output.</div><div><b>Friedman–Phelps</b><br>Ekspektasi dari <i>masa lalu</i> (adaptif) dan pengangguran.</div></div>
⟦soal|<b>Contoh 4.</b> \(\beta=0{,}99\), ekspektasi inflasi periode depan 2,5%, \(\kappa=0{,}1\), kesenjangan output +2%. Hitung inflasi.⟧
⟦dik|\(\beta=0{,}99\); \(E[\pi_{t+1}]=2{,}5\); \(\kappa=0{,}1\); \(x=2\).⟧
⟦tanya|\(\pi_t\).⟧
⟦langkah|1|Bagian ekspektasi|\(0{,}99\times2{,}5=2{,}475\)⟧
⟦langkah|2|Bagian kesenjangan output|\(0{,}1\times2=0{,}2\)⟧
⟦langkah|3|Jumlahkan|\(\pi_t=2{,}475+0{,}2=2{,}675\approx2{,}68\%\)⟧
⟦int|Output 2% di atas potensial menambah sekitar 0,2 poin pada inflasi. Karena \(\kappa\) kecil (harga kaku), reaksi inflasi terhadap kesenjangan output kecil. Ini sejalan dengan kurva Phillips yang tampak lebih datar sejak 1990-an.⟧

<h2>8. Kebijakan moneter dan biaya disinflasi</h2>
<div class="duo"><div><b>Kontraktif (pengetatan)</b><br>Bank sentral menaikkan suku bunga → bunga kredit naik → pinjaman mahal → konsumsi dan investasi melambat → permintaan agregat turun → tekanan inflasi turun.</div><div><b>Ekspansif (pelonggaran)</b><br>Bank sentral menurunkan suku bunga → pinjaman murah → konsumsi dan investasi naik → permintaan agregat naik → produksi dan lapangan kerja naik. Hati-hati: bila permintaan melebihi kapasitas, inflasi naik.</div></div>
<p>Dua catatan penting: (1) ada <b>jeda waktu</b> sebelum kebijakan terasa; (2) bunga memengaruhi arus modal dan <b>nilai tukar</b> rupiah. Pada kurva Phillips, pengetatan menggerakkan ekonomi sepanjang SRPC ke bawah-kanan (inflasi turun, pengangguran naik).</p>
<p>Biaya menurunkan inflasi diukur dengan <b>[[mk_sacr|sacrifice ratio]]</b>:</p>
\[\text{SR}=\frac{\text{kehilangan output kumulatif (\% PDB)}}{\text{penurunan inflasi (poin persentase)}}\]
<p>Bila ekspektasi inflasi terjangkar (kredibel), biaya kecil. Bila ekspektasi tinggi, menurunkan inflasi lebih mahal. Prinsipnya: inflasi tinggi <b>tidak</b> bisa ditukar dengan pengangguran lebih rendah secara permanen.</p>
⟦soal|<b>Contoh 5: biaya disinflasi (angka ilustrasi).</b> Bank sentral ingin menurunkan inflasi dari 7% ke 3% dengan sacrifice ratio 2,5. Berapa kehilangan output kumulatif? Jika Okun versi kesenjangan dengan \(c=0{,}4\), berapa tambahan pengangguran siklis kumulatif?⟧
⟦dik|Penurunan inflasi \(=7-3=4\) poin; SR \(=2{,}5\); \(c=0{,}4\).⟧
⟦tanya|Kehilangan output kumulatif dan pengangguran siklis kumulatif.⟧
⟦langkah|1|Kehilangan output|\(\text{kehilangan}=\text{SR}\times4=2{,}5\times4=10\%\) PDB tahunan (kumulatif)⟧
⟦langkah|2|Ubah ke pengangguran lewat Okun|\(0{,}4\times10=4\) poin-tahun pengangguran siklis⟧
⟦int|Contohnya 4 poin-tahun berarti pengangguran siklis bisa 2 poin selama 2 tahun. Inilah "harga" disinflasi. Angka ini hanya ilustrasi untuk berlatih menghubungkan Bab 1 dan Bab 2.⟧
<h3>Target inflasi dan Indonesia</h3>
<p>Banyak bank sentral memakai <b>target inflasi</b> yang diumumkan terbuka sebagai pedoman dan pengunci ekspektasi. Bank Indonesia menerapkan Kerangka Penargetan Inflasi (ITF) sejak 1 Juli 2005, kini versi fleksibel. Target 2026–2027 adalah <b>2,5% ± 1%</b> (rentang 1,5% sampai 3,5%), ditetapkan pemerintah bersama BI. Instrumennya: BI-Rate sebagai sinyal, pengelolaan likuiditas, stabilisasi rupiah, dan koordinasi pusat-daerah (TPIP dan TPID).</p>
<p>Menurut makalah, inflasi tahunan September 2026 adalah 3,28% dan Oktober 2026 sekitar 3,23%, masih di dalam rentang sasaran. Sepanjang 2026 BI-Rate dinaikkan dari 4,75% ke 5,75% untuk menjaga rupiah (gambar di Bab 3).</p>
<p class="hint"><b>Contoh dunia.</b> Inflasi global (proyeksi IMF) naik dari 4,7% (2021) menjadi 8,8% (2022) akibat gangguan pasokan, krisis energi dan pangan setelah invasi Rusia ke Ukraina, serta pasar kerja ketat. Bank sentral AS (The Fed) menaikkan batas atas target dana federal dari 0,50% (Maret 2022) ke 1,75% (Juni) dan 2,50% (Juli), lalu sekitar 5,25–5,5%. Inflasi AS turun dari 9,1% (Juni 2022) ke 3,0% (Juni 2024), mendekati <i>soft landing</i>. Namun gangguan pasokan tidak otomatis teratasi suku bunga, sehingga reformasi struktural tetap diperlukan.</p>

<h2>9. Kurva Phillips di Indonesia</h2>
${G5}
<table><tr><th>Tahun</th><th>Inflasi (%)</th><th>TPT (%)</th><th style="text-align:left">Perubahan dari tahun sebelumnya</th><th style="text-align:left">Sesuai Phillips?</th></tr>
<tr><td>2021</td><td>1,87</td><td>6,49</td><td style="text-align:left">–</td><td style="text-align:left">–</td></tr>
<tr><td>2022</td><td>5,51</td><td>5,86</td><td style="text-align:left">inflasi naik, TPT turun</td><td style="text-align:left">Ya</td></tr>
<tr><td>2023</td><td>2,61</td><td>5,32</td><td style="text-align:left">keduanya turun</td><td style="text-align:left">Tidak</td></tr>
<tr><td>2024</td><td>1,57</td><td>4,91</td><td style="text-align:left">keduanya turun</td><td style="text-align:left">Tidak</td></tr>
<tr><td>2025</td><td>2,92</td><td>4,85</td><td style="text-align:left">inflasi naik, TPT turun</td><td style="text-align:left">Ya</td></tr></table>
<p>Hubungannya tidak tetap, karena inflasi Indonesia juga dipengaruhi pangan, energi, kurs, biaya distribusi, dan ekspektasi, bukan hanya permintaan domestik. Analisis ini deskriptif (5 pengamatan), bukan uji ekonometrika. <span style="color:var(--muted)">(Catatan: slide makalah menulis "2022 dan 2025" dua kali; dari data, pasangan kedua yang keduanya turun adalah 2023 dan 2024.)</span></p>
<h3>Evaluasi modern</h3>
<div class="duo"><div><b>Mengapa lebih datar sejak 1990-an?</b><br>Ekspektasi inflasi semakin terjangkar: masyarakat percaya inflasi dijaga rendah dan stabil, sehingga pengangguran berubah tidak selalu diikuti inflasi yang besar.</div><div><b>Implikasi bagi Indonesia</b><br>Tetap berguna untuk membaca tekanan permintaan dan pasar kerja, tetapi lengkapi dengan kurs, harga pangan dan energi, biaya distribusi, serta ekspektasi.</div></div>

<h2>10. Ringkasan kilat</h2>
<table><tr><th style="text-align:left">Konsep</th><th style="text-align:left">Inti</th></tr>
<tr><td style="text-align:left">SRPC</td><td style="text-align:left">\(\pi=\pi^e-\alpha(u-u_n)+v\), miring turun</td></tr>
<tr><td style="text-align:left">LRPC</td><td style="text-align:left">Vertikal di \(u_n\) karena \(\pi=\pi^e\)</td></tr>
<tr><td style="text-align:left">Gerak</td><td style="text-align:left">Permintaan agregat berubah</td></tr>
<tr><td style="text-align:left">Geser</td><td style="text-align:left">Ekspektasi atau guncangan penawaran berubah</td></tr>
<tr><td style="text-align:left">NKPC</td><td style="text-align:left">\(\pi=\beta E[\pi_{+1}]+\kappa x\)</td></tr>
<tr><td style="text-align:left">Disinflasi</td><td style="text-align:left">Ada biaya output (sacrifice ratio)</td></tr></table>`});

/* ================= BAB 3 ================= */
CHs.push({id:"makro-3", t:"Konsep Permintaan Agregat: Efek Multiplier dan Lereng Negatif", h:String.raw`<p class="hint"><b>Tujuan belajar.</b> Setelah bab ini kamu bisa: (1) menghitung [[mk_ad|permintaan agregat]] dari komponennya; (2) menjelaskan tiga alasan kurva AD berlereng negatif; (3) membedakan gerak sepanjang kurva dan pergeseran kurva; (4) menghitung [[mk_k|pengganda (multiplier)]] sederhana dan dengan [[mk_bocor|kebocoran]].</p>

<h2>0. Peta bab</h2>
<div class="proc">
<div class="pr"><b>1 · Komponen AD</b>C, I, G, X−M</div>
<div class="pr"><b>2 · Lereng negatif</b>kekayaan, bunga, kurs</div>
<div class="pr"><b>3 · Gerak vs geser</b>harga atau non-harga</div>
<div class="pr"><b>4 · Multiplier</b>pengganda pengeluaran</div>
<div class="pr"><b>5 · Kebocoran</b>tabungan, pajak, impor</div>
</div>

<h2>1. Apa itu permintaan agregat?</h2>
<p>Permintaan agregat (AD) adalah total permintaan atas seluruh barang dan jasa dalam suatu perekonomian pada tingkat harga tertentu. Ada empat pembelanja:</p>
\[AD=C+I+G+(X-M)\]
<table><tr><th style="text-align:left">Komponen</th><th style="text-align:left">Siapa</th><th style="text-align:left">Contoh</th></tr>
<tr><td style="text-align:left"><b>C</b> Konsumsi</td><td style="text-align:left">Rumah tangga</td><td style="text-align:left">Makanan, transportasi, pendidikan, kesehatan</td></tr>
<tr><td style="text-align:left"><b>I</b> Investasi</td><td style="text-align:left">Perusahaan</td><td style="text-align:left">Mesin, pabrik, gedung, perumahan</td></tr>
<tr><td style="text-align:left"><b>G</b> Belanja pemerintah</td><td style="text-align:left">Negara</td><td style="text-align:left">Gaji PNS, infrastruktur, layanan publik</td></tr>
<tr><td style="text-align:left"><b>X − M</b> Ekspor neto</td><td style="text-align:left">Luar negeri dikurangi impor</td><td style="text-align:left">Ekspor minyak sawit dikurangi impor mesin</td></tr></table>
⟦soal|<b>Contoh 1 (data hipotetis, triliun rupiah).</b> \(C=600\), \(I=200\), \(G=150\), ekspor 100, impor 50. Hitung AD dan porsi tiap komponen.⟧
⟦dik|\(C=600\); \(I=200\); \(G=150\); \(X=100\); \(M=50\).⟧
⟦tanya|AD dan persentase tiap komponen.⟧
⟦langkah|1|Ekspor neto|\(X-M=100-50=50\)⟧
⟦langkah|2|Jumlahkan|\(AD=600+200+150+50=1.000\) triliun⟧
⟦langkah|3|Porsi|\(C=60\%,\ I=20\%,\ G=15\%,\ (X-M)=5\%\)⟧
<div style="display:flex;border-radius:8px;overflow:hidden;font:600 13px Inter,system-ui,sans-serif;color:#fff;margin:8px 0">
<div style="flex:60;background:var(--accent);padding:10px 4px;text-align:center">C 60%</div>
<div style="flex:20;background:#2e8b57;padding:10px 4px;text-align:center">I 20%</div>
<div style="flex:15;background:#c9a227;padding:10px 4px;text-align:center">G 15%</div>
<div style="flex:5;background:#c0392b;padding:10px 0;text-align:center">X−M</div></div>
⟦int|Konsumsi rumah tangga adalah penggerak terbesar. Bila satu komponen naik, AD cenderung naik dan mendorong pertumbuhan; bila turun, pertumbuhan dapat melambat.⟧

<h2>2. Mengapa kurva AD berlereng negatif?</h2>
<p>Kurva AD menggambar hubungan <b>tingkat harga umum (P)</b> dan <b>output riil (Y)</b> yang diminta. Ketika harga naik, output yang diminta turun, dan sebaliknya. Penyebabnya <b>bukan</b> efek substitusi seperti pada satu barang (mikro), melainkan tiga mekanisme makro:</p>
<div class="duo"><div><b>① Efek kekayaan (Pigou)</b><br>Harga turun → nilai riil uang dan tabungan naik → rumah tangga merasa lebih kaya → konsumsi naik.</div><div><b>② Efek suku bunga (Keynes)</b><br>Harga naik → butuh uang transaksi lebih banyak → bunga naik → kredit mahal → C dan I turun.</div></div>
<div class="duo"><div><b>③ Efek nilai tukar</b><br>Harga domestik turun → barang lokal lebih murah dibanding luar negeri → ekspor naik, impor turun → X−M naik.</div><div><b>Hasil akhir</b><br>Harga naik → Y yang diminta turun. Kurva AD miring dari kiri atas ke kanan bawah.</div></div>

<h3>2.1 Efek kekayaan</h3>
<p>[[mk_pigou|Efek kekayaan]] bekerja lewat kekayaan <b>riil</b>, yaitu kekayaan nominal dibagi tingkat harga:</p>
\[\frac{W}{P}\qquad P\uparrow\Rightarrow\frac{W}{P}\downarrow\qquad P\downarrow\Rightarrow\frac{W}{P}\uparrow\]
<p>Konsumsi dapat ditulis \(C=a+b\,Y_d+c\,(W/P)\), dengan \(a\) konsumsi otonom, \(b\) kecenderungan mengonsumsi dari pendapatan disposabel \(Y_d\), dan \(c\) dari kekayaan riil.</p>
<table><tr><th>Kondisi</th><th>P</th><th>W nominal</th><th>W/P</th></tr>
<tr><td style="text-align:left">Awal</td><td>100</td><td>Rp100 juta</td><td>Rp100 juta</td></tr>
<tr><td style="text-align:left">Harga naik 25%</td><td>125</td><td>Rp100 juta</td><td><b>Rp80 juta</b></td></tr>
<tr><td style="text-align:left">Harga turun 20%</td><td>80</td><td>Rp100 juta</td><td><b>Rp125 juta</b></td></tr></table>
⟦soal|<b>Contoh 2.</b> Tabungan Rp100 juta, \(c=0{,}05\). (a) Hitung kekayaan riil bila harga naik 25%. (b) Berapa perubahan konsumsi? (c) Bagaimana jika harga turun 20%?⟧
⟦dik|\(W=100\) juta; \(c=0{,}05\); \(P\) naik 25% atau turun 20%.⟧
⟦tanya|\(W/P\) baru dan \(\Delta C\).⟧
⟦langkah|1|(a) Harga naik|\(W/P=100\div1{,}25=80\) juta (turun 20 juta)⟧
⟦langkah|2|(b) Dampak ke konsumsi|\(\Delta C=0{,}05\times(-20)=-1\) juta⟧
⟦langkah|3|(c) Harga turun|\(W/P=100\div0{,}80=125\) juta (naik 25 juta), \(\Delta C=0{,}05\times25=+1{,}25\) juta⟧
⟦int|Saldo tidak berubah, tetapi daya belinya berubah. Efeknya terbatas karena hanya sebagian kecil kekayaan berupa aset nominal tetap, harga turun membebani debitur (mengimbangi untung kreditur), dan ekspektasi harga mendatang ikut memengaruhi belanja.⟧
<p class="hint">Catatan: pada contoh kehidupan nyata, harga aset tertentu (saham, rumah) naik juga membuat orang merasa kaya. Itu perubahan harga aset spesifik, bukan tingkat harga umum, sehingga menggeser kurva AD, bukan bergerak sepanjang kurvanya.</p>

<h3>2.2 Efek suku bunga</h3>
<div class="proc">
<div class="pr"><b>1</b>Tingkat harga umum naik</div>
<div class="pr"><b>2</b>Butuh uang transaksi lebih banyak, permintaan uang naik</div>
<div class="pr"><b>3</b>Uang beredar tetap, suku bunga naik</div>
<div class="pr"><b>4</b>Kredit mahal, C dan I turun</div>
<div class="pr"><b>5</b>Output yang diminta turun</div>
</div>
<p>Bunga naik menaikkan cicilan KPR, kredit motor, dan kartu kredit, sehingga rumah tangga menunda pembelian besar; perusahaan menunda investasi karena biaya pinjaman untuk mesin dan pabrik naik. Sebaliknya, bunga turun mendorong C dan I.</p>
${G8}
<p>Sepanjang 2026 tekanan terhadap rupiah membuat BI menaikkan BI-Rate bertahap dari 4,75% ke 5,75% (Mei–Juni), lalu menahannya sampai Oktober. Alasan utamanya menjaga nilai tukar, tetapi jalur ke ekonomi sama: bunga naik, biaya kredit naik. Contoh dampaknya pada KPR memakai rumus anuitas (dari Matematika Keuangan):</p>
\[A=P\cdot\frac{r}{1-(1+r)^{-n}}\qquad r=\frac{\text{bunga tahunan}}{12},\ \ n=\text{jumlah bulan}\]
⟦soal|<b>Contoh 3: cicilan KPR (angka ilustrasi).</b> Pinjaman Rp500 juta, tenor 15 tahun. Hitung cicilan bulanan bila bunga KPR 9% dan bila naik menjadi 10%.⟧
⟦dik|\(P=500\) juta; \(n=15\times12=180\) bulan; bunga 9% lalu 10%.⟧
⟦tanya|Cicilan bulanan dan selisihnya.⟧
⟦langkah|1|Bunga 9%|\(r=0{,}09/12=0{,}0075\); \(A=500\times\dfrac{0{,}0075}{1-1{,}0075^{-180}}\approx5{,}07\) juta⟧
⟦langkah|2|Bunga 10%|\(r=0{,}10/12=0{,}008333\); \(A\approx5{,}37\) juta⟧
⟦langkah|3|Selisih|\(5{,}37-5{,}07\approx0{,}30\) juta per bulan. Total bayar 15 tahun naik dari sekitar 912,8 juta menjadi sekitar 967,1 juta (selisih sekitar 54 juta)⟧
⟦int|Kenaikan bunga 1 poin menaikkan cicilan sekitar Rp300 ribu per bulan, sehingga banyak calon pembeli menunda beli rumah. Itulah konsumsi yang turun, yaitu mekanisme efek suku bunga.⟧
<p class="hint">Catatan: efek ini berlaku dengan asumsi faktor lain tetap (<i>ceteris paribus</i>), terutama jumlah uang beredar.</p>

<h3>2.3 Efek nilai tukar</h3>
<p>Perubahan nilai tukar memengaruhi harga barang ekspor dan impor. Hubungannya dengan tingkat harga: ketika harga barang dalam negeri naik relatif terhadap luar negeri, produk domestik menjadi lebih mahal dan daya saing ekspor turun.</p>
<table><tr><th style="text-align:left"></th><th>Depresiasi (rupiah melemah)</th><th>Apresiasi (rupiah menguat)</th></tr>
<tr><td style="text-align:left">Barang domestik bagi luar negeri</td><td>lebih murah</td><td>lebih mahal</td></tr>
<tr><td style="text-align:left">Ekspor cenderung</td><td>naik ↑</td><td>turun ↓</td></tr>
<tr><td style="text-align:left">Impor cenderung</td><td>turun ↓</td><td>naik ↑</td></tr>
<tr><td style="text-align:left">Ekspor neto (X−M)</td><td>naik ↑ → AD ke kanan</td><td>turun ↓ → AD ke kiri</td></tr></table>
<p>Jadi saat harga domestik turun, kurs riil melemah (barang lokal lebih kompetitif), ekspor neto naik, dan output yang diminta bertambah: satu lagi alasan lereng negatif.</p>

<h2>3. Gerak sepanjang kurva vs pergeseran kurva</h2>
${G6}
<div class="duo"><div><b>Gerak sepanjang kurva</b><br>Penyebab: <i>tingkat harga umum</i> berubah, faktor lain tetap. Pindah dari satu titik ke titik lain di kurva AD yang sama. Ketiga efek di atas menjelaskan gerak ini.</div><div><b>Pergeseran kurva</b><br>Penyebab: faktor <i>non-harga</i> berubah pada tingkat harga tetap. Seluruh kurva bergeser ke kanan (AD naik) atau ke kiri (AD turun).</div></div>
<table><tr><th style="text-align:left">Komponen</th><th style="text-align:left">AD bergeser ke kanan bila</th><th style="text-align:left">AD bergeser ke kiri bila</th></tr>
<tr><td style="text-align:left"><b>C</b></td><td style="text-align:left">Optimisme konsumen tinggi, pajak penghasilan turun, harga aset naik, kredit mudah</td><td style="text-align:left">Pesimisme, pajak naik, harga aset jatuh</td></tr>
<tr><td style="text-align:left"><b>I</b></td><td style="text-align:left">Ekspektasi untung cerah, insentif pajak investasi, teknologi baru, bunga pinjaman turun</td><td style="text-align:left">Ekspektasi suram, bunga pinjaman naik</td></tr>
<tr><td style="text-align:left"><b>G</b></td><td style="text-align:left">Kebijakan fiskal ekspansif, proyek infrastruktur, layanan dasar</td><td style="text-align:left">Pemangkasan anggaran</td></tr>
<tr><td style="text-align:left"><b>X − M</b></td><td style="text-align:left">Mitra dagang tumbuh pesat, rupiah terdepresiasi</td><td style="text-align:left">Mitra dagang melambat, rupiah menguat</td></tr></table>
<p>Aturan cepat: <b>kalau yang berubah adalah P, bergerak. Kalau yang berubah adalah C, I, G, atau X−M, bergeser.</b></p>

<h2>4. Efek multiplier</h2>
<p>Satu rupiah pengeluaran tambahan tidak berhenti di satu tangan: pengeluaran satu pihak menjadi pendapatan pihak lain, yang sebagian dibelanjakan lagi, dan seterusnya. Akibatnya pendapatan nasional berubah <b>berlipat ganda</b> dari pengeluaran awal. Ini bekerja dua arah: pengeluaran naik membuat pendapatan naik berlipat, pengeluaran turun membuatnya turun berlipat.</p>
\[\Delta Y=k\times\Delta E\]
<h3>4.1 Asumsi model sederhana</h3>
<ul><li>Ekonomi sederhana (tanpa pajak dan impor)</li><li>Ada kapasitas menganggur dan harga tetap</li><li>MPC konstan di setiap putaran</li><li>Pengeluaran awal bersifat otonom</li></ul>
<h3>4.2 Dari mana rumusnya?</h3>
<p>Misalkan \(Y=C+I+G\) dengan \(C=a+\text{MPC}\cdot Y\). Dengan \(\text{MPC}\) ([[mk_mpc|kecenderungan mengonsumsi marjinal]]) dan \(\text{MPS}\) (menabung), berlaku \(\text{MPC}+\text{MPS}=1\).</p>
⟦langkah|1|Substitusikan konsumsi|\(Y=a+\text{MPC}\cdot Y+I+G\)⟧
⟦langkah|2|Kumpulkan \(Y\)|\(Y(1-\text{MPC})=a+I+G\)⟧
⟦langkah|3|Selesaikan|\(Y=\dfrac{a+I+G}{1-\text{MPC}}\)⟧
⟦langkah|4|Ambil perubahannya|\(\Delta Y=\dfrac{1}{1-\text{MPC}}\,\Delta E\ \Rightarrow\ k=\dfrac{1}{1-\text{MPC}}=\dfrac{1}{\text{MPS}}\)⟧
<p>Dari sisi putaran, hasil yang sama muncul sebagai deret geometri: \(\Delta E\,(1+\text{MPC}+\text{MPC}^2+\cdots)=\dfrac{\Delta E}{1-\text{MPC}}\).</p>
${G7}
<table><tr><th>MPC</th><th>0,5</th><th>0,6</th><th>0,75</th><th>0,8</th><th>0,9</th></tr>
<tr><td>MPS</td><td>0,5</td><td>0,4</td><td>0,25</td><td>0,2</td><td>0,1</td></tr>
<tr><td><b>k</b></td><td>2</td><td>2,5</td><td>4</td><td>5</td><td>10</td></tr></table>
<p><b>Makin besar MPC, makin besar multiplier.</b> MPC = 0 berarti \(k=1\) (tidak ada putaran lanjutan); MPC mendekati 1 membuat \(k\) sangat besar.</p>
⟦soal|<b>Contoh 4 (dari makalah).</b> MPC suatu negara 0,8. Investasi naik Rp300 juta. Hitung angka multiplier dan perubahan pendapatan nasional.⟧
⟦dik|\(\text{MPC}=0{,}8\); \(\Delta E=300\) juta.⟧
⟦tanya|\(k\) dan \(\Delta Y\).⟧
⟦langkah|1|Angka multiplier|\(k=\dfrac{1}{1-0{,}8}=\dfrac{1}{0{,}2}=5\)⟧
⟦langkah|2|Perubahan pendapatan|\(\Delta Y=5\times300=1.500\) juta \(=\) Rp1,5 miliar⟧
⟦int|Setiap tambahan pengeluaran Rp1 meningkatkan pendapatan nasional Rp5. Rp300 juta berubah menjadi Rp1,5 miliar. Ini batas atas karena kebocoran belum dihitung.⟧
<p><b>Implikasi:</b> menjadi dasar kebijakan fiskal ekspansif (belanja infrastruktur, bantuan sosial, proyek padat karya); penerima ber-MPC tinggi (mis. keluarga berpendapatan rendah) menghasilkan efek lebih besar. Pada gambar AD, multiplier menggeser kurva ke kanan sejauh \(k\cdot\Delta E\).</p>

<h2>5. Kebocoran (leakages) dan multiplier sebenarnya</h2>
<p>Tidak semua pendapatan kembali menjadi belanja barang dan jasa domestik. Bagian yang "bocor" mengurangi efek pengganda:</p>
<div class="duo"><div><b>Tabungan</b><br>Disimpan, tidak dikonsumsi.</div><div><b>Pajak</b><br>Dibayarkan ke pemerintah, mengurangi pendapatan yang dibelanjakan.</div></div>
<div class="duo"><div><b>Impor</b><br>Belanja barang luar negeri: pengeluaran mengalir ke negara lain.</div><div><b>Kesimpulan</b><br>Makin besar kebocoran, makin kecil multiplier.</div></div>
\[k=\frac{1}{\text{MPS}+\text{MPT}+\text{MPM}}\]
<p>MPS, MPT, MPM berturut-turut adalah bagian dari tambahan pendapatan yang ditabung, dibayar sebagai pajak, dan dipakai untuk impor (<i>marginal propensity to save, tax, import</i>). Ini bentuk sederhana yang dipakai makalah; model yang lebih rinci memisahkan pajak proporsional, tetapi arah kesimpulannya sama.</p>
⟦soal|<b>Contoh 5.</b> MPS = 0,20; MPT = 0,10; MPM = 0,20. Hitung multiplier dan dampak tambahan belanja pemerintah Rp100 miliar.⟧
⟦dik|\(\text{MPS}=0{,}20\); \(\text{MPT}=0{,}10\); \(\text{MPM}=0{,}20\); \(\Delta G=100\) miliar.⟧
⟦tanya|\(k\) dan \(\Delta Y\).⟧
⟦langkah|1|Jumlah kebocoran|\(0{,}20+0{,}10+0{,}20=0{,}50\)⟧
⟦langkah|2|Multiplier|\(k=1\div0{,}50=2\)⟧
⟦langkah|3|Dampak|\(\Delta Y=2\times100=200\) miliar⟧
⟦int|Tanpa pajak dan impor, \(k\) dengan MPS = 0,2 adalah 5. Dengan semua kebocoran, \(k\) turun menjadi 2: lebih dari separuh daya ungkit hilang.⟧
<h3>Contoh di Indonesia: hilirisasi nikel di Sulawesi</h3>
<p>Pembangunan industri pengolahan nikel (kawasan Morowali) mendorong investasi, membuka lapangan kerja, dan menaikkan aktivitas ekonomi sekitar: pekerja menerima upah, pedagang dan pelaku usaha mendapat pendapatan, lalu dibelanjakan lagi. Namun sebagian bocor, misalnya ditabung atau dipakai membeli mesin dan peralatan impor. Investasi industri menciptakan efek pengganda, tetapi besarnya dampak domestik dipengaruhi kebocoran.</p>
<h3>Tambahan: pengganda pajak</h3>
<p>Pajak bekerja lewat konsumsi, bukan langsung sebagai belanja, sehingga efeknya lebih kecil dan berlawanan arah:</p>
\[k_T=-\frac{\text{MPC}}{1-\text{MPC}}\]
<p>Untuk MPC = 0,8: \(k_T=-4\). Pajak naik Rp50 miliar menurunkan pendapatan Rp200 miliar. Bila \(\Delta G=\Delta T=50\): \(+250-200=+50\), sehingga pengganda anggaran berimbang adalah 1.</p>

<h2>6. Ringkasan kilat</h2>
<table><tr><th style="text-align:left">Konsep</th><th style="text-align:left">Isi</th></tr>
<tr><td style="text-align:left">AD</td><td style="text-align:left">\(C+I+G+(X-M)\)</td></tr>
<tr><td style="text-align:left">Lereng negatif</td><td style="text-align:left">Efek kekayaan, suku bunga, nilai tukar (P berubah → gerak)</td></tr>
<tr><td style="text-align:left">Geser AD</td><td style="text-align:left">C, I, G, atau X−M berubah</td></tr>
<tr><td style="text-align:left">Multiplier</td><td style="text-align:left">\(k=\dfrac{1}{1-\text{MPC}}\); \(\Delta Y=k\Delta E\)</td></tr>
<tr><td style="text-align:left">Dengan kebocoran</td><td style="text-align:left">\(k=\dfrac{1}{\text{MPS}+\text{MPT}+\text{MPM}}\)</td></tr></table>`});

/* ================= BAB 4 ================= */
CHs.push({id:"makro-4", t:"Definisi dan Konsep Akibat Inflasi", h:String.raw`<p class="hint"><b>Tujuan belajar.</b> Setelah bab ini kamu bisa: (1) mendefinisikan [[mk_inf|inflasi]] dan membedakannya dari kenaikan harga satu barang; (2) menghitung [[mk_ihk|IHK]] dan laju inflasi; (3) mengelompokkan inflasi menurut sebab dan keparahan; (4) menjelaskan akibat bagi rumah tangga, bisnis, dan perekonomian; (5) memahami cara pengendaliannya.</p>

<h2>0. Peta bab</h2>
<div class="proc">
<div class="pr"><b>1 · Definisi</b>ciri inflasi</div>
<div class="pr"><b>2 · Mengukur</b>IHK dan laju</div>
<div class="pr"><b>3 · Jenis</b>sebab dan keparahan</div>
<div class="pr"><b>4 · Akibat</b>rumah tangga, bisnis, ekonomi</div>
<div class="pr"><b>5 · Kendali</b>moneter, fiskal, penawaran</div>
</div>

<h2>1. Definisi dan ciri inflasi</h2>
⟦def|<b>Inflasi</b> adalah kenaikan harga barang dan jasa <b>secara umum</b> dan <b>terus-menerus</b> dalam periode tertentu, sehingga kemampuan uang untuk membeli barang dan jasa menurun.⟧
<p>Perhatikan: inflasi tidak berarti semua harga naik bersamaan atau dengan persentase sama. Harga cabai bisa melonjak karena gagal panen, cuaca buruk, atau distribusi terganggu. Bila hanya cabai yang naik sementara harga lain stabil, itu <b>belum tentu inflasi umum</b>.</p>
<table><tr><th style="text-align:left">Ciri</th><th style="text-align:left">Penjelasan</th></tr>
<tr><td style="text-align:left"><b>1 · Umum</b></td><td style="text-align:left">Dilihat dari banyak barang dan jasa, bukan satu komoditas</td></tr>
<tr><td style="text-align:left"><b>2 · Terus-menerus</b></td><td style="text-align:left">Kenaikan sesaat belum tentu inflasi yang berkelanjutan</td></tr>
<tr><td style="text-align:left"><b>3 · Daya beli turun</b></td><td style="text-align:left">Dengan uang yang sama, barang yang terbeli lebih sedikit</td></tr>
<tr><td style="text-align:left"><b>4 · Tidak harus sama</b></td><td style="text-align:left">Harga sebagian barang naik lebih cepat dari yang lain</td></tr></table>
<table><tr><th style="text-align:left">Istilah</th><th style="text-align:left">Arti</th></tr>
<tr><td style="text-align:left">Inflasi</td><td style="text-align:left">Tingkat harga naik (laju positif)</td></tr>
<tr><td style="text-align:left">Disinflasi</td><td style="text-align:left">Inflasi turun, tetapi masih positif (mis. 8% → 3%): harga masih naik, hanya lebih lambat</td></tr>
<tr><td style="text-align:left">Deflasi</td><td style="text-align:left">Tingkat harga turun (laju negatif)</td></tr></table>
<h3>Hubungan dengan biaya hidup</h3>
<p>Saat harga naik, rumah tangga harus mengeluarkan lebih banyak uang hanya untuk mempertahankan konsumsi yang sama.</p>
<table><tr><th style="text-align:left">Kebutuhan</th><th>Sebelum</th><th>Sesudah</th><th>Kenaikan</th></tr>
<tr><td style="text-align:left">Makanan</td><td>Rp500.000</td><td>Rp600.000</td><td>20%</td></tr>
<tr><td style="text-align:left">Transportasi</td><td>Rp200.000</td><td>Rp250.000</td><td>25%</td></tr>
<tr><td style="text-align:left">Kebutuhan lain</td><td>Rp300.000</td><td>Rp350.000</td><td>16,7%</td></tr>
<tr><td style="text-align:left"><b>Total</b></td><td><b>Rp1.000.000</b></td><td><b>Rp1.200.000</b></td><td><b>20%</b></td></tr></table>
<p>Total naik 20%, tetapi tiap kebutuhan naik dengan persentase berbeda (ciri 4). Bila pendapatan hanya naik 10%, daya belinya turun: \(\dfrac{1{,}10}{1{,}20}-1\approx-8{,}3\%\).</p>

<h2>2. Mengukur inflasi: IHK dan laju inflasi</h2>
<p>Ribuan harga berubah tiap hari, sehingga BPS merangkumnya menjadi satu angka: <b>[[mk_ihk|Indeks Harga Konsumen (IHK)]]</b>. IHK membandingkan biaya satu "keranjang belanja" yang sama pada tahun dasar dan tahun berjalan. Isi keranjang dan bobotnya diambil dari Survei Biaya Hidup (SBH); menurut makalah mencakup 847 barang dan jasa, 11 kelompok pengeluaran, dan 150 kabupaten/kota.</p>
\[\text{IHK}=\frac{\text{biaya keranjang tahun berjalan}}{\text{biaya keranjang tahun dasar}}\times100\]
⟦soal|<b>Contoh 1 (dari makalah, angka ilustrasi).</b> Biaya keranjang tahun dasar: beras 240.000, telur 50.000, minyak 30.000, listrik 200.000, bensin 200.000, internet 80.000. Tahun berjalan: 280.000, 60.000, 35.000, 220.000, 200.000, 85.000. Hitung IHK.⟧
⟦dik|Total dasar \(=240+50+30+200+200+80=800\) ribu; total berjalan \(=280+60+35+220+200+85=880\) ribu.⟧
⟦tanya|IHK.⟧
⟦langkah|1|Bagi dua total|\(\dfrac{880.000}{800.000}=1{,}10\)⟧
⟦langkah|2|Kalikan 100|\(\text{IHK}=110\)⟧
⟦int|Keranjang yang sama kini 10% lebih mahal dibanding tahun dasar.⟧
<h3>2.1 Bobot: porsi belanja menentukan pengaruh</h3>
<p>Barang yang porsi belanjanya besar berpengaruh besar pada IHK. Sumbangan ke inflasi dihitung sebagai bobot dikalikan kenaikan harga:</p>
\[\text{sumbangan}=\text{bobot}\times\text{kenaikan harga}\]
<table><tr><th style="text-align:left">Barang</th><th>Bobot</th><th>Kenaikan harga</th><th>Sumbangan</th></tr>
<tr><td style="text-align:left">Cabai</td><td>0,5%</td><td>+50%</td><td>0,25 poin</td></tr>
<tr><td style="text-align:left">Beras</td><td>10%</td><td>+5%</td><td><b>0,50 poin</b></td></tr></table>
<p>Cabai naik sepuluh kali lebih tajam, tetapi beras menyumbang <b>dua kali lipat</b> karena porsi belanjanya jauh lebih besar.</p>
<h3>2.2 Laju inflasi</h3>
\[\text{Laju inflasi}=\frac{\text{IHK sekarang}-\text{IHK pembanding}}{\text{IHK pembanding}}\times100\%\]
⟦catatan|Contoh: IHK naik dari 110 menjadi 112,2. Laju \(=(112{,}2-110)\div110\times100\%=2\%\). Jawabannya <b>bukan 2,2%</b>: 2,2 adalah selisih <i>poin</i> IHK, bukan persen.⟧
<h3>2.3 Satu IHK, tiga angka inflasi</h3>
<p>Pilihan pembanding menentukan namanya: <b>mtm</b> (dibanding bulan sebelumnya), <b>ytd</b> (dibanding Desember tahun sebelumnya), <b>yoy</b> (dibanding bulan yang sama tahun lalu). yoy paling lazim dipakai karena bebas dari pola musiman.</p>
⟦soal|<b>Contoh 2: data September 2026 (BPS).</b> IHK: Sep 2025 = 108,74; Des 2025 = 109,92; Agt 2026 = 111,97; Sep 2026 = 112,31. Hitung inflasi yoy, ytd, dan mtm.⟧
⟦dik|IHK Sep 2026 \(=112{,}31\) dengan tiga pembanding di atas.⟧
⟦tanya|yoy, ytd, mtm.⟧
⟦langkah|1|yoy|\(\dfrac{112{,}31-108{,}74}{108{,}74}\times100\%=3{,}28\%\)⟧
⟦langkah|2|ytd|\(\dfrac{112{,}31-109{,}92}{109{,}92}\times100\%=2{,}17\%\)⟧
⟦langkah|3|mtm|\(\dfrac{112{,}31-111{,}97}{111{,}97}\times100\%=0{,}30\%\)⟧
${G10}
⟦int|Ketiganya benar, hanya pembandingnya berbeda. Saat membaca berita, perhatikan apakah angkanya yoy, ytd, atau mtm sebelum membandingkan dengan sasaran 2,5% ± 1%, karena sasaran itu berbasis tahunan.⟧
<p>Selain IHK ada <b>Deflator PDB</b> (harga semua barang dan jasa yang diproduksi di dalam negeri) dan <b>IHPB</b> (harga di tingkat pedagang besar, sinyal awal kenaikan IHK).</p>

<h2>3. Jenis-jenis inflasi</h2>
<h3>3.1 Menurut sebab</h3>
<table><tr><th style="text-align:left">Jenis</th><th style="text-align:left">Inti</th><th style="text-align:left">Penyebab</th><th style="text-align:left">Output dan pengangguran</th><th style="text-align:left">Contoh</th></tr>
<tr><td style="text-align:left"><b>Demand-pull</b></td><td style="text-align:left">Permintaan naik lebih cepat dari produksi</td><td style="text-align:left">Konsumsi naik, uang beredar naik, bunga rendah</td><td style="text-align:left">Output ↑, pengangguran ↓</td><td style="text-align:left">Harga pangan naik saat lebaran</td></tr>
<tr><td style="text-align:left"><b>Cost-push</b></td><td style="text-align:left">Biaya produksi naik, harga jual ikut naik</td><td style="text-align:left">Harga energi, upah, rupiah melemah</td><td style="text-align:left">Output ↓, pengangguran ↑</td><td style="text-align:left">Kenaikan harga BBM (September 2022)</td></tr>
<tr><td style="text-align:left"><b>Ekspektasi (bawaan)</b></td><td style="text-align:left">Orang memperkirakan harga terus naik</td><td style="text-align:left">Spiral harga-upah</td><td style="text-align:left">Bertahan sendiri</td><td style="text-align:left">Pekerja menuntut upah karena perkiraan inflasi</td></tr>
<tr><td style="text-align:left"><b>Impor</b></td><td style="text-align:left">Harga luar negeri naik atau kurs melemah</td><td style="text-align:left">Harga pasar dunia, depresiasi</td><td style="text-align:left">Langsung dan tidak langsung</td><td style="text-align:left">Ponsel, laptop, gandum</td></tr></table>
<p><b>Kaitan dengan Bab 2 dan 3.</b> Demand-pull = kurva AD <i>bergeser ke kanan</i> (gerak A → B di kurva Phillips). Cost-push = kurva penawaran agregat bergeser ke kiri: harga naik <i>dan</i> output turun, yaitu stagflasi (SRPC bergeser lewat \(v_t\)). Spiral ekspektasi menggeser SRPC naik (\(\pi^e\) naik).</p>
<div class="proc">
<div class="pr"><b>Ekspektasi harga naik</b></div>
<div class="pr"><b>Pengusaha menaikkan harga</b>pekerja menuntut upah</div>
<div class="pr"><b>Biaya produksi naik</b></div>
<div class="pr"><b>Harga naik lagi</b>kembali ke awal</div>
</div>
<p>Pada inflasi impor, dampak <b>langsung</b> terlihat pada barang konsumsi impor, dan dampak <b>tidak langsung</b> terjadi ketika bahan baku impor menaikkan biaya produksi.</p>
<h3>3.2 Menurut keparahan</h3>
${G9}
<table><tr><th style="text-align:left">Tingkat</th><th>Laju per tahun</th><th style="text-align:left">Ciri</th></tr>
<tr><td style="text-align:left">Ringan</td><td>&lt; 10%</td><td style="text-align:left">Mudah dikendalikan, daya beli terjaga</td></tr>
<tr><td style="text-align:left">Sedang</td><td>10–30%</td><td style="text-align:left">Mulai terasa, menekan yang berpenghasilan tetap</td></tr>
<tr><td style="text-align:left">Berat</td><td>30–100%</td><td style="text-align:left">Harga naik cepat, kepercayaan pada uang hilang</td></tr>
<tr><td style="text-align:left">Hiperinflasi</td><td>&gt; 100%</td><td style="text-align:left">Tak terkendali, nilai uang jatuh drastis</td></tr></table>
<p class="hint">Contoh: hiperinflasi Jerman 1923. Pemerintah mencetak Mark tanpa kendali untuk membayar utang dan reparasi Perang Dunia I; warga membawa uang tunai dengan gerobak hanya untuk membeli sepotong roti. Catatan: literatur lain kadang memakai batas hiperinflasi per bulan (misalnya sekitar 50% per bulan), jadi selalu cek definisi yang dipakai.</p>

<h2>4. Akibat inflasi</h2>
<h3>4.1 Bagi rumah tangga</h3>
<div class="duo"><div><b>Biaya hidup naik</b><br>Makanan (beras, telur, minyak goreng), perumahan (listrik, bahan bakar), transportasi, dan lainnya ikut naik di seluruh kelompok IHK.</div><div><b>Daya beli turun</b><br>Uang yang sama membeli lebih sedikit; rumah tangga mengurangi belanja, memilih barang lebih murah, atau menunda pembelian.</div></div>
<p>Daya beli nyata dari uang nominal \(M\) setelah inflasi \(\pi\) adalah \(M/(1+\pi)\).</p>
⟦soal|<b>Contoh 3.</b> Anggaran belanja bulanan Rp3.000.000 ketika harga naik 10%. Berapa belanja "setara awal" yang masih terbeli, dan berapa yang tak terbeli?⟧
⟦dik|Anggaran \(=3.000.000\); \(\pi=10\%\).⟧
⟦tanya|Nilai riil anggaran dan bagian yang hilang.⟧
⟦langkah|1|Nilai riil|\(\dfrac{3.000.000}{1{,}10}\approx2.727.273\)⟧
⟦langkah|2|Selisih|\(3.000.000-2.727.273\approx272.727\)⟧
⟦int|Anggaran yang sama hanya cukup untuk sekitar Rp2,73 juta belanja ukuran lama; sekitar Rp273 ribu "tak terbeli". Catatan: ini bukan 10% dari 3 juta (Rp300 ribu), karena yang naik adalah harganya, bukan anggarannya.⟧
<p><b>Nilai tabungan tergerus.</b> Bila inflasi lebih tinggi dari bunga tabungan, nilai riil tabungan turun. Hubungan nominal dan riil ([[mk_fisher|persamaan Fisher]]):</p>
\[1+r=\frac{1+i}{1+\pi}\quad\Rightarrow\quad r=\frac{1+i}{1+\pi}-1\approx i-\pi\]
⟦soal|<b>Contoh 4 (dari makalah, dikoreksi).</b> Tabungan Rp10.000.000 berbunga 3% per tahun saat inflasi 5%. Berapa saldo nominal dan perubahan daya beli riilnya?⟧
⟦dik|\(S=10.000.000\); \(i=3\%\); \(\pi=5\%\).⟧
⟦tanya|Saldo nominal, tingkat bunga riil, dan nilai riil saldo.⟧
⟦langkah|1|Saldo nominal|\(10.000.000\times1{,}03=10.300.000\)⟧
⟦langkah|2|Bunga riil (eksak)|\(r=\dfrac{1{,}03}{1{,}05}-1=-0{,}0190\approx-1{,}9\%\)  (pendekatan \(i-\pi=-2\%\))⟧
⟦langkah|3|Nilai riil saldo|\(\dfrac{10.300.000}{1{,}05}\approx9.809.524\) (daya beli awal Rp10.000.000)⟧
⟦int|Saldo nominal naik, tetapi daya belinya turun sekitar 1,9% (makalah menulis "±2%", yaitu pendekatan Fisher). Ketimpangan juga melebar: rumah tangga berpendapatan rendah menghabiskan porsi belanja besar untuk kebutuhan pokok, sehingga kenaikan harga lebih terasa; yang pendapatannya tidak naik mengalami penurunan daya beli lebih besar.⟧
<div class="proc">
<div class="pr"><b>Harga naik</b></div>
<div class="pr"><b>Biaya hidup meningkat</b></div>
<div class="pr"><b>Daya beli dan nilai tabungan turun</b></div>
<div class="pr"><b>Rumah tangga menunda pembelian</b></div>
</div>
<h3>4.2 Bagi bisnis</h3>
<table><tr><th style="text-align:left">Akibat</th><th style="text-align:left">Penjelasan</th></tr>
<tr><td style="text-align:left"><b>Rencana susah dibuat</b></td><td style="text-align:left">Harga bahan baku dan upah sulit diprediksi, keputusan jangka panjang ditunda</td></tr>
<tr><td style="text-align:left"><b>Untung makin tipis</b></td><td style="text-align:left">Biaya naik lebih cepat dari harga jual; usaha kecil paling terdampak</td></tr>
<tr><td style="text-align:left"><b>Biaya produksi naik</b></td><td style="text-align:left">Bahan baku, upah, energi naik. Mengubah harga terus-menerus pun berbiaya ([[mk_menu|menu cost]])</td></tr>
<tr><td style="text-align:left"><b>Ekspansi ditunda</b></td><td style="text-align:left">Bunga naik, pinjaman mahal, investasi dan rekrutmen ditahan</td></tr></table>
<h3>4.3 Bagi perekonomian</h3>
<table><tr><th style="text-align:left">Akibat</th><th style="text-align:left">Penjelasan</th></tr>
<tr><td style="text-align:left"><b>Daya beli dan tabungan turun</b></td><td style="text-align:left">Nilai uang tergerus, dana pindah ke tanah atau emas</td></tr>
<tr><td style="text-align:left"><b>Kekayaan bergeser</b></td><td style="text-align:left">Yang berutang untung; pemberi pinjaman dan berpenghasilan tetap rugi</td></tr>
<tr><td style="text-align:left"><b>Harga jadi membingungkan</b></td><td style="text-align:left">Sulit dibedakan: harga naik karena barang langka atau karena inflasi</td></tr>
<tr><td style="text-align:left"><b>Daya saing ekspor turun</b></td><td style="text-align:left">Barang jadi lebih mahal dibanding negara mitra dagang</td></tr>
<tr><td style="text-align:left"><b>Kepercayaan goyah</b></td><td style="text-align:left">Inflasi tinggi yang lama bisa memicu gejolak sosial; paling ekstrem hiperinflasi</td></tr></table>
<p><b>Efek domino:</b> harga naik → biaya hidup naik → daya beli dan tabungan turun → penjualan usaha turun → investasi terhambat.</p>

<h2>5. Pengendalian inflasi</h2>
<div class="proc">
<div class="pr"><b>1 · Deteksi</b>inflasi meningkat</div>
<div class="pr"><b>2 · Analisis sumber</b>permintaan atau penawaran?</div>
<div class="pr"><b>3 · Respon kebijakan</b>moneter atau fiskal</div>
<div class="pr"><b>4 · Pantau dan sesuaikan</b>inflasi terkendali</div>
</div>
<table><tr><th style="text-align:left">Kebijakan</th><th style="text-align:left">Alat</th></tr>
<tr><td style="text-align:left"><b>Moneter</b></td><td style="text-align:left">Naikkan suku bunga acuan, operasi pasar terbuka, naikkan giro wajib minimum, jangkar ekspektasi inflasi</td></tr>
<tr><td style="text-align:left"><b>Fiskal</b></td><td style="text-align:left">Perbaiki keseimbangan anggaran, kurangi belanja tidak prioritas, efisiensi subsidi dan kepatuhan pajak</td></tr>
<tr><td style="text-align:left"><b>Sisi penawaran</b></td><td style="text-align:left">Tambah kapasitas produksi (mesin, teknologi, infrastruktur), jaga stok pangan dan kelancaran distribusi</td></tr></table>
<p><b>Trade-off pengetatan.</b> Inflasi turun, tetapi permintaan melemah, pertumbuhan melambat, dan pengangguran dapat naik. Terlalu agresif berisiko resesi; terlalu longgar membuat inflasi bertahan. Untuk <i>cost-push</i> (gangguan pasokan), bunga kurang ampuh sehingga perlu penguatan sisi penawaran dan koordinasi pusat-daerah.</p>
<p><b>Saran dari makalah:</b> (1) koordinasi bank sentral dan pemerintah; (2) pengetatan bertahap dan komunikatif; (3) analisis sumber inflasi; (4) perkuat produksi dan ketahanan pasokan; (5) lindungi kelompok rentan.</p>

<h2>6. Ringkasan kilat</h2>
<table><tr><th style="text-align:left">Konsep</th><th style="text-align:left">Rumus atau isi</th></tr>
<tr><td style="text-align:left">IHK</td><td>\(\dfrac{\text{biaya keranjang sekarang}}{\text{biaya keranjang dasar}}\times100\)</td></tr>
<tr><td style="text-align:left">Laju inflasi</td><td>\(\dfrac{\text{IHK}_t-\text{IHK}_{t-1}}{\text{IHK}_{t-1}}\times100\%\)</td></tr>
<tr><td style="text-align:left">Sumbangan</td><td>bobot × kenaikan harga</td></tr>
<tr><td style="text-align:left">Bunga riil</td><td>\(r=\dfrac{1+i}{1+\pi}-1\approx i-\pi\)</td></tr>
<tr><td style="text-align:left">Jenis sebab</td><td style="text-align:left">Demand-pull, cost-push, ekspektasi, impor</td></tr>
<tr><td style="text-align:left">Keparahan</td><td style="text-align:left">Ringan, sedang, berat, hiperinflasi</td></tr></table>`});

/* ================= BAB 5 ================= */
CHs.push({id:"makro-5", t:"Peta Pembelajaran Terpadu Ekonomi Makro", h:String.raw`<p class="hint"><b>Bab integrasi.</b> Peta besar keempat topik. Bab ini tidak menambah materi baru, tetapi menunjukkan bagaimana Bab 1–4 saling mengait, kapan memakai alat yang mana, dan apa yang sering salah.</p>

<h2>1. Garis waktu belajar</h2>
<p>Urutan bab mengikuti pembagian materi. Urutan <b>logis</b> penelusuran sebab-akibatnya sedikit berbeda, ditunjukkan oleh angka dalam lingkaran: mulai dari permintaan agregat, ke pengangguran, ke inflasi, lalu akibat dan kebijakan.</p>
⟦waktu|Bab 1,Bab 2,Bab 3,Bab 4,Bab 5||0:2;1:3;2:1;3:4;4:5⟧
<div class="vt">
<div class="vt-i"><div class="vt-w">Bab 1 · Langkah logis ke-2</div><div class="vt-t">Pengangguran dan Hukum Okun</div><div class="vt-d">\(g,\ g^*\ \to\ \Delta u\); TPT; \(u_n\); elastisitas penyerapan.</div></div>
<div class="vt-i"><div class="vt-w">Bab 2 · Langkah logis ke-3</div><div class="vt-t">Kurva Phillips</div><div class="vt-d">\(u\ \to\ \pi\); SRPC, LRPC, ekspektasi, stagflasi, NKPC.</div></div>
<div class="vt-i"><div class="vt-w">Bab 3 · Langkah logis ke-1</div><div class="vt-t">Permintaan agregat</div><div class="vt-d">\(C+I+G+(X-M)\); lereng negatif; multiplier. Titik awal rantai.</div></div>
<div class="vt-i"><div class="vt-w">Bab 4 · Langkah logis ke-4</div><div class="vt-t">Inflasi: ukuran dan akibat</div><div class="vt-d">IHK, jenis, akibat, kebijakan pengendalian.</div></div>
<div class="vt-i"><div class="vt-w">Bab 5 · Penutup</div><div class="vt-t">Peta terpadu</div><div class="vt-d">Lingkaran sebab-akibat, pemilihan alat, rumus, kesalahan umum, soal terpadu.</div></div>
</div>

<h2>2. Lingkaran sebab-akibat makroekonomi</h2>
${G11}
<p>Cara memakainya: tentukan di titik mana suatu peristiwa masuk, lalu ikuti panah. Contohnya, <b>BI menaikkan bunga</b> masuk di ①: AD bergeser ke kiri (②, ingat efek suku bunga Bab 3), output di bawah potensial (③), pengangguran naik (④, Okun), tekanan inflasi turun (⑤, Phillips), dan akibatnya inflasi terkendali tetapi ada biaya (⑥, Bab 4).</p>

<h2>3. Peta pemilihan alat</h2>
<table><tr><th style="text-align:left">Pertanyaan</th><th style="text-align:left">Alat</th><th>Bab</th></tr>
<tr><td style="text-align:left">Siapa yang dihitung penganggur? Berapa TPT?</td><td style="text-align:left">Syarat ILO, \(\text{TPT}=\text{P}/\text{AK}\)</td><td>1</td></tr>
<tr><td style="text-align:left">Berapa perubahan pengangguran bila ekonomi tumbuh \(g\)?</td><td style="text-align:left">Okun \(\Delta u=-\beta(g-g^*)\)</td><td>1</td></tr>
<tr><td style="text-align:left">Berapa inflasi bila pengangguran \(u\)?</td><td style="text-align:left">Phillips \(\pi=\pi^e-\alpha(u-u_n)+v\)</td><td>2</td></tr>
<tr><td style="text-align:left">Apa yang terjadi pada jangka panjang?</td><td style="text-align:left">LRPC vertikal di \(u_n\)</td><td>2</td></tr>
<tr><td style="text-align:left">Inflasi dengan ekspektasi ke depan?</td><td style="text-align:left">NKPC \(\pi=\beta E\pi_{+1}+\kappa x\)</td><td>2</td></tr>
<tr><td style="text-align:left">Berapa total permintaan?</td><td style="text-align:left">\(AD=C+I+G+(X-M)\)</td><td>3</td></tr>
<tr><td style="text-align:left">Mengapa harga naik membuat Y yang diminta turun?</td><td style="text-align:left">Efek kekayaan, bunga, kurs</td><td>3</td></tr>
<tr><td style="text-align:left">Belanja Rp\(\Delta E\) menaikkan pendapatan berapa?</td><td style="text-align:left">\(\Delta Y=k\Delta E\), \(k=1/(1-\text{MPC})\) atau \(1/(\text{MPS}+\text{MPT}+\text{MPM})\)</td><td>3</td></tr>
<tr><td style="text-align:left">Berapa inflasi dari IHK?</td><td style="text-align:left">\((\text{IHK}_t-\text{IHK}_{t-1})/\text{IHK}_{t-1}\)</td><td>4</td></tr>
<tr><td style="text-align:left">Berapa daya beli tabungan setelah inflasi?</td><td style="text-align:left">\(r=(1+i)/(1+\pi)-1\)</td><td>4</td></tr></table>

<h2>4. Rumus kunci dalam satu halaman</h2>
<table><tr><th>Bab</th><th style="text-align:left">Rumus inti</th></tr>
<tr><td>1</td><td style="text-align:left">\(\text{TPT}=\dfrac{\text{Penganggur}}{\text{AK}}\times100\%\); \(\ \varepsilon=\dfrac{\Delta L/L}{\Delta Y/Y}\); \(\ \Delta u=-\beta(g-g^*)\); \(\ u-u_n=-c\,\dfrac{Y-Y^*}{Y^*}\)</td></tr>
<tr><td>2</td><td style="text-align:left">\(\pi=\pi^e-\alpha(u-u_n)+v\); \(\ \pi_t^e=\pi_{t-1}\); \(\ \pi=\beta E\pi_{+1}+\kappa x\); \(\ \text{SR}=\dfrac{\text{kehilangan output}}{\Delta\pi}\)</td></tr>
<tr><td>3</td><td style="text-align:left">\(AD=C+I+G+(X-M)\); \(\ \dfrac{W}{P}\); \(\ k=\dfrac{1}{1-\text{MPC}}\); \(\ k=\dfrac{1}{\text{MPS}+\text{MPT}+\text{MPM}}\)</td></tr>
<tr><td>4</td><td style="text-align:left">\(\text{IHK}=\dfrac{\sum\text{biaya sekarang}}{\sum\text{biaya dasar}}\times100\); \(\ r=\dfrac{1+i}{1+\pi}-1\)</td></tr></table>

<h2>5. Gerak vs geser di tiga kurva</h2>
<p>Tiga bab memakai kurva berbeda, tetapi logikanya sama: <b>variabel di sumbu</b> menyebabkan gerak; <b>variabel lain</b> menyebabkan geser.</p>
<table><tr><th style="text-align:left">Kurva</th><th style="text-align:left">Sumbu</th><th style="text-align:left">Gerak sepanjang kurva</th><th style="text-align:left">Kurva bergeser</th></tr>
<tr><td style="text-align:left">AD (Bab 3)</td><td style="text-align:left">P vs Y</td><td style="text-align:left">Tingkat harga umum berubah</td><td style="text-align:left">C, I, G, X−M berubah</td></tr>
<tr><td style="text-align:left">SRPC (Bab 2)</td><td style="text-align:left">\(\pi\) vs \(u\)</td><td style="text-align:left">Permintaan agregat berubah</td><td style="text-align:left">\(\pi^e\) atau guncangan penawaran \(v\) berubah</td></tr>
<tr><td style="text-align:left">Okun (Bab 1)</td><td style="text-align:left">\(\Delta u\) vs \(g\)</td><td style="text-align:left">Pertumbuhan aktual \(g\) berubah</td><td style="text-align:left">\(g^*\) (potensial) atau struktur pasar kerja berubah</td></tr></table>

<h2>6. Kesalahan umum</h2>
<table><tr><th style="text-align:left">Salah kaprah</th><th style="text-align:left">Yang benar</th></tr>
<tr><td style="text-align:left">Semua orang tidak bekerja = penganggur</td><td style="text-align:left">Harus mencari kerja dan siap bekerja; pelajar dan ibu rumah tangga bukan angkatan kerja</td></tr>
<tr><td style="text-align:left">TPT dihitung dari seluruh penduduk</td><td style="text-align:left">TPT dihitung dari angkatan kerja</td></tr>
<tr><td style="text-align:left">Hukum Okun pasti berlaku</td><td style="text-align:left">Hubungan statistik; koefisien berbeda antarnegara dan periode</td></tr>
<tr><td style="text-align:left">IHK naik 2,2 poin berarti inflasi 2,2%</td><td style="text-align:left">Hitung persen terhadap IHK pembanding</td></tr>
<tr><td style="text-align:left">Cabai naik 50% = inflasi 50%</td><td style="text-align:left">Sumbangan = bobot × kenaikan harga</td></tr>
<tr><td style="text-align:left">Inflasi rendah dan pengangguran rendah bisa dipertahankan lewat stimulus terus-menerus</td><td style="text-align:left">Jangka panjang LRPC vertikal; ekspektasi menyusul dan inflasi terus naik</td></tr>
<tr><td style="text-align:left">Lereng AD sama dengan kurva permintaan satu barang</td><td style="text-align:left">Alasannya efek kekayaan, bunga, dan kurs, bukan substitusi antarbarang</td></tr>
<tr><td style="text-align:left">Multiplier selalu 1/(1−MPC)</td><td style="text-align:left">Itu batas atas tanpa kebocoran, dengan harga tetap dan kapasitas menganggur</td></tr>
<tr><td style="text-align:left">Saldo bertambah berarti makin kaya</td><td style="text-align:left">Lihat bunga riil: bunga nominal dikurangi inflasi</td></tr></table>

<h2>7. Soal terpadu: dari belanja pemerintah sampai kebijakan bank sentral</h2>
⟦soal|<b>Soal terpadu.</b> Ekonomi berada pada output potensial \(Y^*=Y=10.000\) triliun, pengangguran \(u=u_n=5\%\), ekspektasi inflasi 2%. MPC = 0,8. Pemerintah menambah belanja \(\Delta G=100\) triliun. Koefisien Okun (versi kesenjangan) \(c=0{,}4\), kurva Phillips dengan \(\alpha=0{,}5\). Hitung (a) kenaikan output, (b) kesenjangan output, (c) pengangguran baru, (d) inflasi, (e) tahun berikutnya bila ekspektasi adaptif dan \(\Delta G\) dipertahankan sehingga pengangguran tetap, (f) respons BI bila sasaran 2,5% ± 1%.⟧
⟦dik|\(Y^*=10.000\); \(u_n=5\%\); \(\pi^e=2\%\); \(\text{MPC}=0{,}8\); \(\Delta G=100\); \(c=0{,}4\); \(\alpha=0{,}5\).⟧
⟦tanya|\(\Delta Y\), kesenjangan output, \(u\), \(\pi\), \(\pi_2\), respons kebijakan.⟧
⟦langkah|1|(a) Multiplier (Bab 3)|\(k=\dfrac{1}{1-0{,}8}=5\), maka \(\Delta Y=5\times100=500\) triliun⟧
⟦langkah|2|(b) Kesenjangan output|\(\dfrac{Y-Y^*}{Y^*}=\dfrac{500}{10.000}=+5\%\)⟧
⟦langkah|3|(c) Okun (Bab 1)|\(u-u_n=-0{,}4\times5=-2\) poin, jadi \(u=3\%\)⟧
⟦langkah|4|(d) Phillips (Bab 2)|\(\pi=2-0{,}5(3-5)=2+1=3\%\)⟧
⟦langkah|5|(e) Tahun berikutnya|\(\pi^e_2=3\%\Rightarrow\pi_2=3+1=4\%\) (di atas batas sasaran 3,5%)⟧
⟦langkah|6|(f) Akibat dan kebijakan (Bab 4)|Inflasi 4% melampaui rentang 1,5%–3,5%, ekspektasi mulai naik. BI akan menaikkan suku bunga: AD bergeser kiri, \(u\) naik mendekati \(u_n\), inflasi turun. Biayanya: pertumbuhan melambat.⟧
⟦int|Satu kebijakan fiskal mengalir lewat empat bab: multiplier → Okun → Phillips → kebijakan moneter. Catatan penting: multiplier 500 mengandaikan harga tetap dan kapasitas menganggur, sedangkan output 5% di atas potensial menunjukkan tekanan harga dan kebocoran, jadi dampak riil akan lebih kecil. Soal ini untuk melatih alur berpikir, bukan memprediksi angka sebenarnya.⟧

<h2>8. Daftar cek penguasaan</h2>
<p>Centang dalam hati. Kalau ada yang belum, buka bab di sampingnya.</p>
<table><tr><th style="text-align:left">Saya bisa...</th><th>Bab</th></tr>
<tr><td style="text-align:left">☐ Menentukan status bekerja, penganggur, atau bukan angkatan kerja, dan menghitung TPT dan TPAK</td><td>1</td></tr>
<tr><td style="text-align:left">☐ Memakai Okun dalam dua bentuk (selisih dan kesenjangan)</td><td>1</td></tr>
<tr><td style="text-align:left">☐ Menjelaskan mengapa SRPC miring tetapi LRPC vertikal</td><td>2</td></tr>
<tr><td style="text-align:left">☐ Menghitung inflasi dengan ekspektasi adaptif beberapa tahun</td><td>2</td></tr>
<tr><td style="text-align:left">☐ Menyebut tiga alasan lereng negatif AD dan membedakan gerak dan geser</td><td>3</td></tr>
<tr><td style="text-align:left">☐ Menghitung multiplier dengan dan tanpa kebocoran</td><td>3</td></tr>
<tr><td style="text-align:left">☐ Menghitung IHK, yoy, ytd, mtm, dan bunga riil</td><td>4</td></tr>
<tr><td style="text-align:left">☐ Menjelaskan akibat inflasi dan kebijakan pengendaliannya beserta trade-off</td><td>4</td></tr></table>

<h2>9. Catatan perbaikan dari makalah</h2>
<p>Saat menyusun, beberapa hal pada makalah disesuaikan supaya akurat:</p>
<ul>
<li><b>BI-Rate 2026.</b> Slide kelompok 2 menulis 5,25% (20 Mei). Data berita BI: 4,75% (Jan–Apr), 5,00% (Mei), 5,50% (9 Juni), 5,75% (18 Juni), ditahan Juli sampai Oktober.</li>
<li><b>Tabungan (kelompok 4).</b> Penurunan daya beli riil Rp10.000.000 berbunga 3% saat inflasi 5% adalah 1,9% (eksak), bukan tepat 2%.</li>
<li><b>Tabel 2022 dan 2025 (kelompok 2).</b> Judul kedua seharusnya 2023 dan 2024 (inflasi dan TPT sama-sama turun).</li>
<li><b>Simbol NKPC.</b> Slide memakai \(mc_t\) untuk kesenjangan output; di sini ditulis \(x_t\) agar tidak tertukar dengan biaya marjinal.</li>
<li><b>TPT Februari 2026.</b> Hitung ulang 4,67% versus BPS 4,68% (pembulatan).</li>
<li><b>Bagian analisis biaya perusahaan asuransi</b> pada makalah kelompok 1 membahas manajemen biaya, bukan Hukum Okun, sehingga tidak dimasukkan.</li></ul>`});

/* ===== daftar mata kuliah ===== */
COURSES.makro={t:"Pengantar Ekonomi Makro", desc:"Pengangguran dan Hukum Okun, kurva Phillips, permintaan agregat dan multiplier, inflasi, plus peta pembelajaran terpadu. Dilengkapi gambar, contoh berlangkah, dan latihan.", ch:CHs};
})();
