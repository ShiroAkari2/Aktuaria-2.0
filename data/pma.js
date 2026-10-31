/* Pengantar Matematika Aktuaria: satu objek per bab. Tambah bab baru = tambah satu blok {id, t, h} di daftar ch. */
window.COURSES = window.COURSES || {};
COURSES.pma = {t:"Pengantar Matematika Aktuaria", desc:"Suku bunga, tabel mortalitas, asuransi jiwa, anuitas hidup, dan premi manfaat.", ch:[
 {id:"pma-n1", t:"Suku bunga (Pekan 1)", h:String.raw`<h2>Ukuran suku bunga</h2>
<p>Suku bunga efektif \(i\), faktor diskonto \(v=\frac1{1+i}\), diskonto \(d=iv\), serta [[nominal|bunga nominal dan force of interest]]:</p>
\[1+i=\Big(1+\frac{i^{(m)}}{m}\Big)^m=\Big(1-\frac{d^{(m)}}{m}\Big)^{-m}=e^{\delta}=v^{-1}=(1-d)^{-1}\]
<p>Bila \(\delta_t\) berubah menurut waktu, faktor akumulasi \(A(t)=\exp\!\big(\int_0^t\delta_s\,ds\big)\). Untuk \(m\ge2\) berlaku \(d\lt d^{(m)}\lt\delta\lt i^{(m)}\lt i\).</p><h2>Contoh soal dan pembahasan</h2>
<div class="soal"><p><b>Soal.</b> Suku bunga nominal \(i^{(4)}=8\%\). Hitung \(i\), \(d\), dan \(\delta\).</p>
<p><b>Diketahui:</b> \(i^{(4)}=0{,}08\), \(m=4\).</p>
<p><b>Ditanyakan:</b> \(i\), \(d\), \(\delta\).</p>
<p><b>Penyelesaian:</b> \(i=(1+0{,}02)^4-1=0{,}082432\). \(d=\frac i{1+i}=0{,}076155\). \(\delta=\ln1{,}082432=0{,}079211\).</p>
<p><b>Interpretasi:</b> Bunga yang dikonversi tiap kuartal setara dengan 8,2432% per tahun efektif; urutan (dltdeltalt i) terpenuhi.</p></div>`},
 {id:"pma-n2", t:"Anuitas awal, akhir, dan kontinu (Pekan 2)", h:String.raw`<h2>Anuitas pasti</h2>
<p>Pembayaran 1 per tahun selama \(n\) tahun: [[awal|anuitas awal]], [[pasti|anuitas akhir]], kontinu, dan \(m\) kali setahun.</p>
\[\ddot a_{\overline n|}=\frac{1-v^n}{d},\quad a_{\overline n|}=\frac{1-v^n}{i},\quad \bar a_{\overline n|}=\int_0^nv^t\,dt=\frac{1-v^n}{\delta},\quad \ddot a^{(m)}_{\overline n|}=\frac{1-v^n}{d^{(m)}}\]
<p>Karena \(d\lt\delta\lt i\): \(a_{\overline n|}\lt\bar a_{\overline n|}\lt\ddot a_{\overline n|}\). Hubungan: \(\ddot a_{\overline n|}=(1+i)a_{\overline n|}=1+a_{\overline{n-1}|}\). Perpetuitas: \(\frac1i\), \(\frac1\delta\), \(\frac1d\).</p><h2>Contoh soal dan pembahasan</h2>
<div class="soal"><p><b>Soal.</b> Hitung \(\ddot a_{\overline{10}|}\), \(a_{\overline{10}|}\), dan \(\bar a_{\overline{10}|}\) pada \(i=5\%\).</p>
<p><b>Diketahui:</b> \(i=5\%\), \(n=10\), \(v^{10}=0{,}6139\).</p>
<p><b>Ditanyakan:</b> Tiga nilai anuitas.</p>
<p><b>Penyelesaian:</b> \(a=\frac{1-0{,}6139}{0{,}05}=7{,}7217\). \(\ddot a=1{,}05a=8{,}1078\). \(\delta=0{,}04879\), \(\bar a=\frac{0{,}3861}{0{,}04879}=7{,}9132\).</p>
<p><b>Interpretasi:</b> Anuitas awal paling besar karena tiap pembayaran lebih cepat setahun; anuitas kontinu berada di antara kedua yang lain.</p></div>`},
 {id:"pma-n3", t:"Fungsi survival, curtate lifetime, laju kematian (Pekan 3–4)", h:String.raw`<h2>Fungsi survival</h2>
<p>[[surv|\(s(x)=P(X\gt x)\)]] dan \({}_tp_x=\frac{s(x+t)}{s(x)}\), \({}_tq_x=1-{}_tp_x\), \({}_{u|t}q_x={}_up_x-{}_{u+t}p_x\).</p>
<h2>Sisa hidup</h2>
<p>[[tx|\(T_x\)]] adalah sisa hidup kontinu dengan fungsi distribusi \({}_tq_x\) dan kepadatan \({}_tp_x\,\mu_{x+t}\). Curtate: \(K_x=\lfloor T_x\rfloor\), \(P(K_x=k)={}_kp_x\,q_{x+k}\).</p>
<h2>Laju kematian</h2>
<p>[[mu|\(\mu_x\)]] \(=-\frac{d}{dx}\ln s(x)\), sehingga \({}_tp_x=\exp\!\big(-\int_0^t\mu_{x+u}du\big)\). [[ex|Harapan hidup]]: \(\mathring e_x=\int_0^\infty{}_tp_x\,dt\), \(e_x=\sum_{k\ge1}{}_kp_x\), dan \(\mathring e_x\approx e_x+\tfrac12\).</p><h2>Contoh soal dan pembahasan</h2>
<div class="soal"><p><b>Soal.</b> Usia kematian berdistribusi seragam \(s(x)=1-x/100\). Untuk \(x=40\) hitung \({}_{10}p_{40}\), \(\mu_{40}\), \(\mathring e_{40}\), dan \(P(K_{40}=9)\).</p>
<p><b>Diketahui:</b> \(s(x)=1-x/100\), \(0\le x\le100\).</p>
<p><b>Ditanyakan:</b> \({}_{10}p_{40}\), \(\mu_{40}\), \(\mathring e_{40}\), \(P(K_{40}=9)\).</p>
<p><b>Penyelesaian:</b> \({}_{10}p_{40}=\frac{s(50)}{s(40)}=\frac{0{,}5}{0{,}6}=0{,}8333\). \(\mu_x=\frac{1/100}{1-x/100}=\frac1{100-x}\Rightarrow\mu_{40}=\frac1{60}\). \(\mathring e_{40}=\int_0^{60}(1-\tfrac t{60})dt=30\). \(P(K_{40}=9)=\frac1{60}\) (tiap tahun penuh sama mungkin).</p>
<p><b>Interpretasi:</b> Dengan peluang 83,3% orang usia 40 hidup 10 tahun lagi; harapan sisa hidupnya 30 tahun (tepat setengah dari 60).</p></div>`},
 {id:"pma-1", t:"Tabel mortalitas (Pekan 5)", h:String.raw`<h2>Unsur tabel mortalitas</h2>
<p>[[mort|Tabel mortalitas]] memuat \(\ell_x=\ell_0\,s(x)\) (banyak yang hidup di usia \(x\)) dan \(d_x=\ell_x-\ell_{x+1}\). Hubungannya dengan fungsi survival:</p>
\[{}_tp_x=\frac{\ell_{x+t}}{\ell_x},\quad q_x=\frac{d_x}{\ell_x},\quad {}_{k|}q_x=\frac{d_{x+k}}{\ell_x},\quad e_x=\sum_{k=1}^{\infty}\frac{\ell_{x+k}}{\ell_x}\]
<p>Lihat [[tpx|peluang hidup]], [[qx|peluang meninggal]], dan [[kdq|peluang meninggal tertunda]]. Jumlah orang yang masih hidup di usia \(x+t\) dari kelompok usia \(x\) adalah \(\ell_x\,{}_tp_x\).</p>
<h2>Contoh soal dan pembahasan</h2>
<div class="soal"><p><b>Soal.</b> Tabel mortalitas: \(\ell_{60}=90.000\), \(\ell_{65}=85.000\). Hitung peluang seseorang berusia 60 hidup sampai 65 dan meninggal sebelum 65.</p>
<p><b>Diketahui:</b> \(\ell_{60}\), \(\ell_{65}\).</p>
<p><b>Ditanyakan:</b> \({}_5p_{60}\) dan \({}_5q_{60}\).</p>
<p><b>Penyelesaian:</b> \({}_5p_{60}=\frac{85.000}{90.000}=0{,}9444\); \({}_5q_{60}=1-0{,}9444=0{,}0556\).</p>
<p><b>Interpretasi:</b> Sekitar 94,4% orang berusia 60 diharapkan hidup 5 tahun lagi dan 5,6% meninggal.</p></div>`},
 {id:"pma-n5", t:"Rumus rekursif dan usia fractional (Pekan 6)", h:String.raw`<h2>Rekursi</h2>
<p>Satu langkah ke depan: \(\ell_{x+1}=\ell_x-d_x\), \({}_{n}p_x=p_x\,{}_{n-1}p_{x+1}\), dan untuk asuransi dan anuitas ([[rekursi|rekursi]]):</p>
\[A_x=v\,q_x+v\,p_x\,A_{x+1},\qquad \ddot a_x=1+v\,p_x\,\ddot a_{x+1},\qquad {}_nE_x=v\,p_x\,{}_{n-1}E_{x+1}\]
<h2>Usia fractional</h2>
<p>Untuk \(0\le s\le1\), [[frac|tiga asumsi]]:</p>
\[\text{UDD: }{}_sq_x=s\,q_x,\ \mu_{x+s}=\frac{q_x}{1-s\,q_x};\qquad \text{CFM: }{}_sp_x=p_x^{\,s},\ \mu_{x+s}=-\ln p_x;\qquad \text{Balducci: }{}_{1-s}q_{x+s}=(1-s)q_x\]<h2>Contoh soal dan pembahasan</h2>
<div class="soal"><p><b>Soal.</b> Diketahui \(q_x=0{,}1\). Hitung \({}_{0{,}5}q_x\) dengan UDD, CFM, dan Balducci. Lalu hitung \(A_x\) bila \(A_{x+1}=0{,}3\), \(i=5\%\).</p>
<p><b>Diketahui:</b> \(q_x=0{,}1\), \(s=0{,}5\), \(A_{x+1}=0{,}3\), \(i=5\%\).</p>
<p><b>Ditanyakan:</b> \({}_{0{,}5}q_x\) (tiga asumsi) dan \(A_x\).</p>
<p><b>Penyelesaian:</b> UDD: \(0{,}5(0{,}1)=0{,}05\). CFM: \(1-0{,}9^{0{,}5}=0{,}0513\). Balducci: \({}_{0{,}5}p_x=\frac{0{,}9}{1-0{,}5(0{,}1)}=0{,}9474\), jadi \({}_{0{,}5}q_x=0{,}0526\). Rekursi: \(A_x=\frac{0{,}1+0{,}9(0{,}3)}{1{,}05}=0{,}3524\).</p>
<p><b>Interpretasi:</b> Ketiga asumsi hanya berbeda tipis; UDD terkecil dan Balducci terbesar untuk setengah tahun pertama.</p></div>`},
 {id:"pma-2", t:"Asuransi jiwa waktu diskrit (Pekan 7–8)", h:String.raw`<p>Santunan dibayar di akhir tahun kematian. [[pvrv|Z]] adalah nilai sekarang manfaat; kematian di tahun ke-\(k+1\) berarti \(K_x=k\) dan dibayar di waktu \(k+1\).</p>
<h2>Berjangka ([[term|term]])</h2>
\[Z=\begin{cases}v^{K_x+1},&K_x=0,\dots,n-1\\0,&K_x\ge n\end{cases}\qquad A^1_{x:\overline n|}=\sum_{k=0}^{n-1}v^{k+1}\,{}_{k|}q_x\]
<h2>Seumur hidup</h2>
\[Z=v^{K_x+1},\qquad A_x=\sum_{k=0}^{\infty}v^{k+1}\,{}_{k|}q_x\]
<p>Bila ada usia batas \(\omega\), ganti \(\infty\) dengan \(\omega-x-1\), karena \({}_tp_x=0\) untuk \(t\ge\omega-x\). Lihat [[asuransi|asuransi seumur hidup]].</p>
<h2>[[pe|Pure endowment]]</h2>
\[Z=\begin{cases}0,&T_x<n\\v^n,&T_x\ge n\end{cases}\qquad {}_nE_x=A_{x:\overline n|}^{\ 1}=v^n\,{}_np_x\]
<h2>[[endow|Endowment]]</h2>
\[Z=v^{\min(K_x+1,\,n)},\qquad A_{x:\overline n|}=A^1_{x:\overline n|}+{}_nE_x\]
<h2>[[tunda|Seumur hidup tunda]]</h2>
\[{}_{n|}A_x=\sum_{k=n}^{\infty}v^{k+1}\,{}_{k|}q_x=v^n\,{}_np_x\,A_{x+n}\]
<h2>Contoh soal dan pembahasan</h2>
<div class="soal"><p><b>Soal.</b> Asuransi berjangka 2 tahun, manfaat 1.000 di akhir tahun kematian, \(q_x=0{,}01\), \(q_{x+1}=0{,}02\), \(i=5\%\).</p>
<p><b>Diketahui:</b> \(q_x=0{,}01\), \(q_{x+1}=0{,}02\), \(i=5\%\), \(b=1000\).</p>
<p><b>Ditanyakan:</b> Premi tunggal bersih \(1000A^1_{x:\overline{2}|}\).</p>
<p><b>Penyelesaian:</b> \(A^1_{x:\overline{2}|}=vq_x+v^2p_xq_{x+1}=\frac{0{,}01}{1{,}05}+\frac{0{,}99(0{,}02)}{1{,}1025}=0{,}027483\). Premi \(=27{,}48\).</p>
<p><b>Interpretasi:</b> Premi tunggal bersih Rp27,48 per Rp1.000 manfaat; premi nyata lebih besar karena biaya dan laba.</p></div>`},
 {id:"pma-n7", t:"Asuransi jiwa waktu kontinu (Pekan 9–10)", h:String.raw`<h2>Manfaat saat meninggal</h2>
<p>Manfaat 1 dibayar saat kematian, \(Z=v^{T_x}\) ([[kontinu|santunan saat meninggal]]):</p>
\[\bar A_x=\int_0^\infty v^t\,{}_tp_x\,\mu_{x+t}\,dt,\qquad \bar A^1_{x:\overline n|}=\int_0^nv^t\,{}_tp_x\,\mu_{x+t}\,dt,\qquad {}_{m|}\bar A_x=v^m{}_mp_x\bar A_{x+m}\]
<p>[[pe|Pure endowment]] sama dengan kasus diskrit: \({}_nE_x=v^n\,{}_np_x\). Endowment: \(\bar A_{x:\overline n|}=\bar A^1_{x:\overline n|}+{}_nE_x\).</p>
<h2>Momen dan variansi</h2>
<p>[[mom2|Momen kedua]] memakai \(2\delta\): \({}^2\bar A_x=\bar A_x\) dengan \(\delta\to2\delta\). Maka \(\operatorname{Var}(Z)={}^2\bar A_x-\bar A_x^2\).</p>
<h2>Laju kematian konstan</h2>
<p>Bila \(\mu\) konstan: \(\bar A_x=\frac{\mu}{\mu+\delta}\), \({}^2\bar A_x=\frac{\mu}{\mu+2\delta}\), \(\bar A^1_{x:\overline n|}=\frac{\mu}{\mu+\delta}\big(1-e^{-(\mu+\delta)n}\big)\).</p><h2>Contoh soal dan pembahasan</h2>
<div class="soal"><p><b>Soal.</b> Laju kematian konstan \(\mu=0{,}04\) dan \(\delta=0{,}06\). Hitung \(\bar A_x\), \(\operatorname{Var}(Z)\), \(\bar A^1_{x:\overline{10}|}\), dan \(\bar A_{x:\overline{10}|}\).</p>
<p><b>Diketahui:</b> \(\mu=0{,}04\), \(\delta=0{,}06\), \(n=10\).</p>
<p><b>Ditanyakan:</b> \(\bar A_x\), \(\operatorname{Var}(Z)\), \(\bar A^1_{x:\overline{10}|}\), \(\bar A_{x:\overline{10}|}\).</p>
<p><b>Penyelesaian:</b> \(\bar A_x=\frac{0{,}04}{0{,}10}=0{,}4\). \({}^2\bar A_x=\frac{0{,}04}{0{,}16}=0{,}25\), \(\operatorname{Var}(Z)=0{,}25-0{,}16=0{,}09\). \(\bar A^1_{x:\overline{10}|}=0{,}4(1-e^{-1})=0{,}2528\). \({}_{10}E_x=e^{-1}=0{,}3679\), endowment \(=0{,}6207\).</p>
<p><b>Interpretasi:</b> Santunan seumur hidup bernilai 0,4 per satuan manfaat saat ini; peluang hidup 10 tahun 36,8% menyumbang bagian endowment yang terbesar.</p></div>`},
 {id:"pma-3", t:"Hubungan asuransi diskrit dan kontinu (Pekan 11)", h:String.raw`<h2>Momen kedua dan variansi</h2>
<p>[[mom2|Momen kedua]] dihitung seperti rata-rata tetapi dengan \(v^2\) di dalam jumlahan. Setara dengan mengganti \(\delta\) menjadi \(2\delta\), atau \(i\) menjadi \((1+i)^2-1\).</p>
\[{}^2A^1_{x:\overline n|}=\sum_{k=0}^{n-1}v^{2(k+1)}{}_{k|}q_x,\quad {}_n^2E_x=v^{2n}{}_np_x,\quad {}^2A_{x:\overline n|}={}^2A^1_{x:\overline n|}+v^{2n}{}_np_x\]
\[\operatorname{Var}(Z)={}^2A-(A)^2\]
<h2>Dibayar 1/m tahunan</h2>
<p>[[mthly|Santunan 1/m tahunan]] dengan \(v^{(k+1)/m}\) dan peluang tertunda \({}_{k/m|1/m}q_x\).</p>
<h2>Menghubungkan Ā, A, dan A(m)</h2>
<p>Dengan [[udd|UDD]]: \(\bar A_x\approx\frac i\delta A_x\) dan \(\bar A_{x:\overline n|}\approx\frac i\delta A^1_{x:\overline n|}+v^n{}_np_x\). Dengan [[claims|percepatan klaim]]: \(A^{(m)}_x\approx(1+i)^{\frac{m-1}{2m}}A_x\), \(\bar A_x\approx(1+i)^{1/2}A_x\).</p>
<h2>Contoh soal</h2>
<p><b>Term 2 tahun, manfaat 10, usia 40.</b> \(q_{40}=0{,}1\), \(q_{41}=0{,}2\), \(i=5\%\). \(Z=10v\) dengan peluang 0,1; \(Z=10v^2\) dengan peluang 0,9·0,2 = 0,18; selain itu 0.</p>
\[E[Z]=10(0{,}1v+0{,}18v^2)\approx2{,}585,\quad E[Z^2]=100(0{,}1v^2+0{,}18v^4)\approx23{,}879\]
\[\operatorname{Var}(Z)\approx23{,}879-2{,}585^2\approx17{,}20\]
<p><b>\(\ell_x=\sqrt{144-x}\), \(i=6\%\), hitung \(1000A^1_{50:\overline3|}\).</b> Dengan \(d_x=\ell_x-\ell_{x+1}\):</p>
\[1000\sum_{k=0}^{2}v^{k+1}\frac{d_{50+k}}{\ell_{50}}\approx14{,}3\ \ (\text{pilihan B})\]
<h2>Contoh soal dan pembahasan</h2>
<div class="soal"><p><b>Soal.</b> Dengan UDD dan \(i=5\%\), diketahui \(A_x=0{,}4\). Hitung \(\bar A_x\).</p>
<p><b>Diketahui:</b> \(A_x=0{,}4\), \(i=5\%\), UDD.</p>
<p><b>Ditanyakan:</b> \(\bar A_x\).</p>
<p><b>Penyelesaian:</b> \(\delta=\ln1{,}05=0{,}04879\); \(\bar A_x=\frac{i}{\delta}A_x=1{,}02479(0{,}4)=0{,}4099\).</p>
<p><b>Interpretasi:</b> Pembayaran saat meninggal sedikit lebih mahal (0,4099) daripada akhir tahun kematian (0,4).</p></div>`},
 {id:"pma-4", t:"Anuitas hidup: diskrit, kontinu, m kali (Pekan 12–13)", h:String.raw`<h2>Review: anuitas pasti</h2>
<p>[[acm|Anuitas pasti]] 1 per tahun selama n tahun, di awal atau di akhir periode, tahunan, m kali setahun, atau kontinu:</p>
\[\ddot a_{\overline n|}=\tfrac{1-v^n}{d},\quad a_{\overline n|}=\tfrac{1-v^n}{i},\quad \ddot a^{(m)}_{\overline n|}=\tfrac{1-v^n}{d^{(m)}},\quad a^{(m)}_{\overline n|}=\tfrac{1-v^n}{i^{(m)}},\quad \bar a_{\overline n|}=\tfrac{1-v^n}{\delta}\]
<h2>Anuitas hidup seumur hidup</h2>
<p>[[hidup|Anuitas hidup]] awal: \(Y=\ddot a_{\overline{K_x+1}|}=\dfrac{1-v^{K_x+1}}{d}\), dengan \(E[Y]=\ddot a_x\). Dua pendekatan:</p>
\[\text{agregat: }\ddot a_x=\sum_{k=0}^{\infty}\ddot a_{\overline{k+1}|}\,{}_{k|}q_x\qquad \text{pembayaran berjalan: }\ddot a_x=\sum_{k=0}^{\infty}v^k\,{}_kp_x\]
\[\operatorname{Var}(Y)=\frac{{}^2A_x-A_x^2}{d^2}\]
<h2>Anuitas berjangka dan tunda</h2>
<p>[[aterm|Anuitas berjangka]]: \(Y=\ddot a_{\overline{\min(K_x+1,n)}|}\), dengan variansi \(\frac1{d^2}({}^2A_{x:\overline n|}-A_{x:\overline n|}^2)\). [[adefer|Anuitas tunda]] mulai membayar pada waktu m.</p>
<h2>Anuitas hidup kontinu</h2>
<p>[[akon|Anuitas kontinu]]: \(\bar a_x=\int_0^\infty v^t\,{}_tp_x\,dt=\frac{1-\bar A_x}{\delta}\) dan \(\bar a_{x:\overline n|}=\frac{1-\bar A_{x:\overline n|}}{\delta}\), dengan \(\operatorname{Var}(\bar Y)=\frac{{}^2\bar A_x-\bar A_x^2}{\delta^2}\). Laju kematian konstan \(\mu=0{,}04\), \(\delta=0{,}06\): \(\bar a_x=\frac1{\mu+\delta}=10=\frac{1-0{,}4}{0{,}06}\).</p>
<h2>Anuitas hidup m kali setahun</h2>
\[\ddot a^{(m)}_x=\sum_{k\ge0}\tfrac1m v^{k/m}\,{}_{k/m}p_x\approx\alpha(m)\ddot a_x-\beta(m),\quad \alpha(m)=\frac{i\,d}{i^{(m)}d^{(m)}},\ \ \beta(m)=\frac{i-i^{(m)}}{i^{(m)}d^{(m)}}\]
<p>Aproksimasi Woolhouse: \(\ddot a^{(m)}_x\approx\ddot a_x-\frac{m-1}{2m}\) dan \(\bar a_x\approx\ddot a_x-\frac12\). Contoh \(\ddot a_x=15\), \(m=12\): \(\ddot a^{(12)}_x\approx15-\frac{11}{24}=14{,}5417\).</p>
<h2>Contoh soal</h2>
<p><b>\(\ddot a_{60:\overline3|}\)</b> dengan \(q_{60}=0{,}11\), \(q_{61}=0{,}13\), \(i=4\%\):</p>
\[\ddot a_{60:\overline3|}=1+\frac{0{,}89}{1{,}04}+\frac{0{,}89\cdot0{,}87}{1{,}04^2}\approx2{,}5717\]
<p><b>Diketahui \({}_{20}E_x=0{,}35\), \({}_{20}q_x=0{,}3\), \(A^1_{x:\overline{20}|}=0{,}2\); cari \(\ddot a_{x:\overline{20}|}\).</b> Karena \({}_{20}p_x=0{,}7\), \(v^{20}=0{,}35/0{,}7=0{,}5\), jadi \(d=1-0{,}5^{1/20}\approx0{,}03406\). \(A_{x:\overline{20}|}=0{,}2+0{,}35=0{,}55\), sehingga:</p>
\[\ddot a_{x:\overline{20}|}=\frac{1-0{,}55}{d}\approx13{,}21\]
<h2>Contoh soal dan pembahasan</h2>
<div class="soal"><p><b>Soal.</b> Pensiun Rp1.000.000 dibayar di awal tahun selama hidup, maksimum 2 tahun, \(q_x=0{,}01\), \(i=5\%\).</p>
<p><b>Diketahui:</b> \(p_x=0{,}99\), \(i=5\%\), \(n=2\).</p>
<p><b>Ditanyakan:</b> Nilai sekarang aktuaria.</p>
<p><b>Penyelesaian:</b> \(\ddot a_{x:\overline{2}|}=1+vp_x=1+\frac{0{,}99}{1{,}05}=1{,}9429\). Nilai \(=1.942.857\).</p>
<p><b>Interpretasi:</b> Nilainya sedikit di bawah 2 juta karena pembayaran kedua hanya terjadi bila peserta hidup dan didiskon.</p></div>`},
 {id:"pma-n10", t:"Premi manfaat: waktu diskrit (Pekan 14)", h:String.raw`<h2>Kerugian dan prinsip ekivalensi</h2>
<p>Peserta usia \(x\) membayar premi \(P\) di awal tiap tahun selama hidup (atau selama masa bayar). [[lossL|Kerugian]] saat polis dibuat dan [[pek|prinsip ekivalensi]]:</p>
\[L=Z-P\,\ddot a_{\overline{K_x+1}|},\qquad E[L]=0\ \Rightarrow\ P=\frac{E[Z]}{\ddot a_x}\]
<h2>Premi bersih tahunan</h2>
\[P_x=\frac{A_x}{\ddot a_x}=\frac1{\ddot a_x}-d,\quad P^1_{x:\overline n|}=\frac{A^1_{x:\overline n|}}{\ddot a_{x:\overline n|}},\quad P_{x:\overline n|}=\frac{A_{x:\overline n|}}{\ddot a_{x:\overline n|}},\quad {}_hP_x=\frac{A_x}{\ddot a_{x:\overline h|}}\]
<p>Premi pure endowment \(=\frac{{}_nE_x}{\ddot a_{x:\overline n|}}\). Premi bersih dengan manfaat \(b\) adalah \(bP\).</p>
<h2>Variansi kerugian</h2>
<p>Karena \(\ddot a_{\overline{K+1}|}=\frac{1-Z}{d}\), \(L=Z(1+\frac Pd)-\frac Pd\) dan \(\operatorname{Var}(L)=(1+\frac Pd)^2\operatorname{Var}(Z)\). Untuk premi bersih, \(1+\frac Pd=\frac1{d\,\ddot a}\), jadi \(\operatorname{Var}(L)=\dfrac{{}^2A-A^2}{(d\,\ddot a)^2}\). Contoh: \(A_x=0{,}2857\), \(\ddot a_x=15\), \({}^2A_x=0{,}1\), \(i=5\%\): \(\operatorname{Var}(L)=\frac{0{,}1-0{,}0816}{(0{,}7143)^2}\approx0{,}036\).</p><h2>Contoh soal dan pembahasan</h2>
<div class="soal"><p><b>Soal.</b> Asuransi berjangka 2 tahun, manfaat 1.000, \(q_x=0{,}01\), \(q_{x+1}=0{,}02\), \(i=5\%\), premi tahunan dibayar di awal tahun selama 2 tahun. Hitung premi bersih.</p>
<p><b>Diketahui:</b> \(A^1_{x:\overline{2}|}=0{,}027483\) (bab asuransi diskrit), \(p_x=0{,}99\).</p>
<p><b>Ditanyakan:</b> \(1000\,P^1_{x:\overline{2}|}\).</p>
<p><b>Penyelesaian:</b> \(\ddot a_{x:\overline{2}|}=1+\frac{0{,}99}{1{,}05}=1{,}9429\). \(P^1_{x:\overline{2}|}=\frac{0{,}027483}{1{,}9429}=0{,}014146\). Untuk manfaat 1.000: \(14{,}15\).</p>
<p><b>Interpretasi:</b> Premi bersih Rp14,15 per tahun per Rp1.000 manfaat; premi di awal tahun kedua dibayar hanya bila peserta hidup.</p></div>`},
 {id:"pma-n11", t:"Premi manfaat: waktu kontinu (Pekan 15)", h:String.raw`<h2>Fully continuous</h2>
<p>[[pkon|Premi kontinu]] dengan laju \(\bar P\) per tahun dan manfaat saat meninggal:</p>
\[\bar L=v^{T_x}-\bar P\,\bar a_{\overline{T_x}|},\qquad \bar P(\bar A_x)=\frac{\bar A_x}{\bar a_x}=\frac1{\bar a_x}-\delta,\qquad \bar P(\bar A_{x:\overline n|})=\frac{\bar A_{x:\overline n|}}{\bar a_{x:\overline n|}}\]
\[\operatorname{Var}(\bar L)=\Big(1+\frac{\bar P}{\delta}\Big)^2\operatorname{Var}(Z)=\frac{{}^2\bar A_x-\bar A_x^2}{(\delta\,\bar a_x)^2}\]
<h2>Semicontinuous dan m kali setahun</h2>
<p>Manfaat saat meninggal, premi tahunan di awal tahun: \(P(\bar A_x)=\frac{\bar A_x}{\ddot a_x}\approx\frac i\delta P_x\) (UDD). Premi \(m\) kali setahun: \(P^{(m)}(A_x)=\frac{A_x}{\ddot a^{(m)}_x}\), dengan \(P^{(m)}/m\) dibayar tiap \(1/m\) tahun.</p><h2>Contoh soal dan pembahasan</h2>
<div class="soal"><p><b>Soal.</b> Laju kematian konstan \(\mu=0{,}04\), \(\delta=0{,}06\). Hitung laju premi kontinu \(\bar P(\bar A_x)\) dan \(\operatorname{Var}(\bar L)\).</p>
<p><b>Diketahui:</b> \(\bar A_x=0{,}4\), \(\bar a_x=10\), \({}^2\bar A_x=0{,}25\).</p>
<p><b>Ditanyakan:</b> \(\bar P(\bar A_x)\) dan \(\operatorname{Var}(\bar L)\).</p>
<p><b>Penyelesaian:</b> \(\bar P=\frac{0{,}4}{10}=0{,}04\). \(\operatorname{Var}(\bar L)=\frac{0{,}25-0{,}16}{(0{,}06\times10)^2}=\frac{0{,}09}{0{,}36}=0{,}25\).</p>
<p><b>Interpretasi:</b> Pada laju kematian konstan, laju premi sama dengan (mu) (0,04 per tahun per satuan manfaat), terlepas dari (delta).</p></div>`},
 {id:"pma-5", t:"Lampiran: cheatsheet notasi asuransi jiwa", h:String.raw`<p>Arahkan kursor ke nama produk atau konsep; rumus dan penjelasan langsung muncul. Manfaat 1 satuan; \(x\) umur, \(n\) jangka waktu, \(m\) masa tunda, \(v=1/(1+i)\), \(d=iv\).</p>
<h2>Jenis asuransi</h2>
<ul><li>[[wl|Seumur hidup (whole life)]]</li><li>[[term|Berjangka (term)]]</li><li>[[pe|Dwiguna murni (pure endowment)]]</li><li>[[endow|Dwiguna (endowment)]]</li><li>[[tunda|Ditunda (deferred)]]</li><li>[[naik|Manfaat naik atau turun]]</li></ul>
<h2>Waktu dan distribusi pembayaran</h2>
<ul><li>[[kontinu|Dibayar saat meninggal (kontinu)]]</li><li>[[udd|Asumsi UDD]]</li><li>[[mthly|Dibayar 1/m tahunan]]</li><li>[[mom2|Momen kedua]]</li></ul>
<h2>Anuitas, premi, dan cadangan</h2>
<ul><li>[[hidup|Anuitas hidup]]</li><li>[[aterm|Anuitas berjangka]]</li><li>[[adefer|Anuitas ditunda]]</li><li>[[joint|Joint life]]</li><li>[[premi|Premi bersih]]</li><li>[[rekursi|Rekursi]]</li><li>[[cadangan|Cadangan]]</li></ul>
<h2>Contoh soal dan pembahasan</h2>
<div class="soal"><p><b>Soal.</b> Pada \(i=5\%\), \(\ddot a_x=15\). Tentukan \(A_x\) dan premi bersih tahunan seumur hidup \(P_x\).</p>
<p><b>Diketahui:</b> \(i=5\%\), \(\ddot a_x=15\).</p>
<p><b>Ditanyakan:</b> \(A_x\), \(P_x\).</p>
<p><b>Penyelesaian:</b> \(d=0{,}05/1{,}05=0{,}047619\). \(A_x=1-d\ddot a_x=1-0{,}7143=0{,}2857\). \(P_x=A_x/\ddot a_x=0{,}019048\).</p>
<p><b>Interpretasi:</b> Premi tahunan sekitar 1,9% dari manfaat.</p></div>`},
 {id:"pma-6", t:"Lampiran: joint life, manfaat berubah, cadangan", h:String.raw`<h2>Beberapa jiwa</h2>
<p>[[joint|Joint life dan last survivor]] untuk dua jiwa \(x\) dan \(y\).</p>
<h2>Manfaat berubah</h2>
<p>[[naik|Manfaat naik atau turun]] memakai notasi \((IA)\) dan \((DA)\). Rekursi: \((IA)_x=vq_x+vp_x[(IA)_{x+1}+A_{x+1}]\).</p>
<h2>Cadangan</h2>
<p>[[cadangan|Cadangan]] prospektif = nilai sekarang manfaat mendatang dikurangi nilai sekarang premi mendatang.</p>
<h2>Contoh soal dan pembahasan</h2>
<div class="soal"><p><b>Soal.</b> Lanjutan: \(P_x=0{,}019048\) dan setelah \(t\) tahun \(\ddot a_{x+t}=14\) (\(i=5\%\)). Hitung cadangan prospektif.</p>
<p><b>Diketahui:</b> \(P=0{,}019048\), \(\ddot a_{x+t}=14\), \(d=0{,}047619\).</p>
<p><b>Ditanyakan:</b> \({}_tV\).</p>
<p><b>Penyelesaian:</b> \(A_{x+t}=1-14(0{,}047619)=0{,}3333\). \({}_tV=A_{x+t}-P\ddot a_{x+t}=0{,}3333-0{,}2667=0{,}0667\).</p>
<p><b>Interpretasi:</b> Perusahaan harus menyimpan 6,67% manfaat per polis; sama dengan \(1-\ddot a_{x+t}/\ddot a_x\).</p></div>`},
]};
