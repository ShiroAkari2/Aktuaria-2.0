/* Matematika Keuangan: satu objek per bab. Tambah bab baru = tambah satu blok {id, t, h} di daftar ch. */
window.COURSES = window.COURSES || {};
COURSES.matkeu = {t:"Matematika Keuangan", desc:"Bunga dan anuitas, amortisasi pinjaman, sinking fund, obligasi, dan asset-liability matching.", ch:[
 {id:"matkeu-1", t:"Bunga dan anuitas", h:String.raw`<h2>Nilai uang terhadap waktu</h2>
<p>Satu rupiah hari ini lebih berharga daripada satu rupiah tahun depan karena uang bisa berbunga. Ada [[sederhana|bunga sederhana]] dan [[majemuk|bunga majemuk]]; ukuran per periodenya adalah [[bunga|suku bunga efektif]]. Pembayaran masa depan diubah menjadi [[pv|nilai sekarang]] memakai [[v|faktor diskonto]].</p>
<h2>Anuitas</h2>
<p>[[anuitas|Anuitas]] adalah rangkaian pembayaran berkala. Pembayaran di akhir periode disebut [[pasti|anuitas pasti]], di awal periode disebut [[awal|anuitas awal]], dan yang tak berujung disebut [[perpet|perpetuitas]].</p>
<h2>Contoh soal dan pembahasan</h2>
<div class="soal"><p><b>Soal.</b> Cicilan Rp1.000.000 dibayar tiap akhir tahun selama 10 tahun, \(i=5\%\) efektif.</p>
<p><b>Diketahui:</b> \(R=1.000.000\), \(n=10\), \(i=5\%\).</p>
<p><b>Ditanyakan:</b> Nilai sekarang cicilan.</p>
<p><b>Penyelesaian:</b> \(PV=R\,a_{\overline{10}|}=R\frac{1-1{,}05^{-10}}{0{,}05}=1.000.000\times7{,}7217\approx\) Rp7.721.735.</p>
<p><b>Interpretasi:</b> Sepuluh pembayaran Rp1.000.000 (total Rp10.000.000) setara dengan Rp7.721.735 hari ini, karena pembayaran yang lebih lambat dinilai lebih kecil.</p></div>`},
 {id:"matkeu-a1", t:"Anuitas pada sembarang waktu (Pekan 1–2)", h:String.raw`<h2>Review</h2>
<p>Notasi dasar: \(a_{\overline{n}|}=\frac{1-v^n}{i}\), \(s_{\overline{n}|}=\frac{(1+i)^n-1}{i}\), \(\ddot a_{\overline{n}|}=\frac{1-v^n}{d}\), \(\ddot s_{\overline{n}|}=\frac{(1+i)^n-1}{d}\). Dua hubungan:</p>
\[\text{Tipe I: }\ddot a=(1+i)a,\ \ddot s=(1+i)s\qquad\text{Tipe II: }\ddot a_{\overline{n}|}=1+a_{\overline{n-1}|},\ \ddot s_{\overline{n}|}=s_{\overline{n+1}|}-1\]
<p>Contoh: \(500\,a_{\overline{40}|4{,}5\%}=500(18{,}4016)=9.200{,}80\) untuk $500 tiap semester selama 20 tahun pada 9% convertible semiannually. Untuk dana \(1000\) yang ditarik tiap kuartal selama 10 tahun pada 8% quarterly: \(R=1000/a_{\overline{40}|2\%}=1000/27{,}3555\approx 36{,}56\).</p>
<h2>Tiga kasus nilai pada sembarang waktu</h2>
<p><b>Kasus 1: sebelum pembayaran pertama</b> (anuitas [[ditunda|ditunda]] \(m\) periode):</p>
\[v^m a_{\overline{n}|}=a_{\overline{m+n}|}-a_{\overline{m}|},\qquad v^m\ddot a_{\overline{n}|}=\ddot a_{\overline{m+n}|}-\ddot a_{\overline{m}|}\]
<p>Contoh: kupon Rp1.000.000 tiap akhir tahun selama 6 tahun, mulai akhir tahun ke-4, \(i=7\%\): \(10^6\,v^3a_{\overline{6}|}\approx\) Rp3.890.916.</p>
<p><b>Kasus 2: setelah pembayaran terakhir</b> (nilai akumulasi \(m\) periode kemudian):</p>
\[s_{\overline{n}|}(1+i)^m=s_{\overline{n+m}|}-s_{\overline{m}|}=a_{\overline{n}|}(1+i)^{n+m}\]
<p>Contoh: setor Rp5.000.000 di awal tiap tahun selama 5 tahun pada 8%, lalu dibiarkan 3 tahun: \(5\cdot10^6\,\ddot s_{\overline{5}|}(1{,}08)^3\approx\) Rp39.907.229. Setor Rp4.000.000 di akhir tiap tahun, 5 tahun, 9%, ditambah 4 tahun: \(4\cdot10^6\,s_{\overline{5}|}(1{,}09)^4\approx\) Rp33.791.630.</p>
<p><b>Kasus 3: di antara pembayaran pertama dan terakhir</b> (nilai pada waktu \(m<n\)):</p>
\[a_{\overline{n}|}(1+i)^m\ \text{atau}\ s_{\overline{n}|}v^{n-m};\qquad \ddot a_{\overline{n}|}(1+i)^m\ \text{atau}\ \ddot s_{\overline{n}|}v^{n-m}\]
<p>Contoh: Rp2.000.000 tiap akhir tahun selama 10 tahun, \(i=6\%\), nilai pada akhir tahun ke-6: \(2\cdot10^6\,s_{\overline{10}|}v^4\approx\) Rp20.880.848.</p>
<h2>Contoh soal dan pembahasan</h2>
<div class="soal"><p><b>Soal.</b> Rp2.000.000 dibayar tiap akhir tahun selama 10 tahun, \(i=6\%\). Berapa nilai akumulasinya pada akhir tahun ke-6?</p>
<p><b>Diketahui:</b> \(R=2.000.000\), \(n=10\), \(i=6\%\), \(m=6\) (kasus 3).</p>
<p><b>Ditanyakan:</b> Nilai pada waktu \(t=6\).</p>
<p><b>Penyelesaian:</b> \(2\cdot10^6\,s_{\overline{10}|}v^{4}=2\cdot10^6(13{,}1808)(0{,}79209)\approx\) Rp20.880.848.</p>
<p><b>Interpretasi:</b> Semua pembayaran bila "dipindahkan" ke akhir tahun ke-6 bernilai Rp20,88 juta; pembayaran sebelum tahun 6 diakumulasi, sesudahnya didiskon.</p></div>`},
 {id:"matkeu-a2", t:"Anuitas lanjutan: waktu, suku bunga, bunga berubah (Pekan 3)", h:String.raw`<h2>Jangka waktu tidak diketahui</h2>
<p>Dari \(a_{\overline{t}|}=g\): \(t=\dfrac{\ln(1-ig)}{-\ln(1+i)}\). Contoh \(i=6\%\), \(g=4{,}499\): \(t\approx5{,}3996\), jadi 5 pembayaran reguler dan 1 pembayaran tidak reguler. Tulis \(t=n+k\), \(0<k<1\). Pembayaran tidak reguler dapat berupa [[balon|balloon, drop, atau tepat di n+k]]:</p>
\[PV=a_{\overline{n}|}+v^nX_1=a_{\overline{n}|}+v^{n+k}X_2=a_{\overline{n}|}+v^{n+1}X_3\]
<p>Contoh: deposit 1.000, penarikan 100 per tahun, \(i=5\%\). \(a_{\overline{t}|}=10\Rightarrow t\approx14{,}2067\), \(n=14\), \(a_{\overline{14}|}=9{,}8986\). Sisa \(=1000-989{,}86=10{,}14\). Balloon \(X_1=10{,}14(1{,}05)^{14}\approx20{,}07\); tepat di \(t\): \(X_2\approx20{,}27\); drop \(X_3\approx21{,}07\).</p>
<h2>Suku bunga tidak diketahui</h2>
<p>Selesaikan \(a_{\overline{n}|i}=g\) dengan kalkulator keuangan (N = n, PMT = −1, PV = g, hitung I) atau [[aprox|aproksimasi]]:</p>
\[i\approx\frac{2(n-g)}{g(n+1)}\quad(a),\qquad i\approx\frac{2(g-n)}{g(n-1)}\quad(s)\]
<p>Contoh eksak: \(a_{\overline{2}|i}=1{,}75\Rightarrow v+v^2=1{,}75\Rightarrow v=\frac{-1+\sqrt8}{2}\approx0{,}9142\Rightarrow i\approx9{,}38\%\). Aproksimasi memberi 9,52%.</p>
<h2>Bunga berubah tiap periode</h2>
<p>Misalkan \(i_k\) adalah bunga periode ke-\(k\), \(v_k=(1+i_k)^{-1}\). Dua pendekatan: [[portf|portfolio rate method]] dan [[ycm|yield curve method]].</p>
\[a_{\overline{n}|}=\sum_{j=1}^{n}\prod_{k=1}^{j}v_k\ \ (\text{portfolio}),\qquad a_{\overline{n}|}=\sum_{k=1}^{n}v_k^{\,k}\ \ (\text{yield curve})\]
<p>Untuk nilai akumulasi, \(\ddot s_{\overline{n}|}=\sum_{j=1}^{n}\prod_{k=1}^{j}(1+i_{n-k+1})\) (portfolio) dan \(\ddot s_{\overline{n}|}=\sum_{k=1}^{n}(1+i_{n-k+1})^k\) (yield curve).</p>
<p>Contoh: \(i_t=6\%+0{,}2\%(t-1)\), \(t=1,\dots,5\). Yield curve: \(a_{\overline{5}|}\approx4{,}1543\). Portfolio: \(a_{\overline{5}|}\approx4{,}1831\).</p>
<h2>Contoh soal dan pembahasan</h2>
<div class="soal"><p><b>Soal.</b> Deposit 1.000 dipakai untuk penarikan 100 tiap akhir tahun selama mungkin, \(i=5\%\). Tentukan banyak penarikan reguler dan penarikan terakhir bila dibayar bersama penarikan reguler terakhir (balloon).</p>
<p><b>Diketahui:</b> \(PV=1000\), \(R=100\), \(i=5\%\).</p>
<p><b>Ditanyakan:</b> \(n\) dan besar \(X_1\).</p>
<p><b>Penyelesaian:</b> \(a_{\overline{t}|}=10\Rightarrow t=\frac{\ln 2}{\ln1{,}05}\approx14{,}2067\), \(n=14\), \(a_{\overline{14}|}=9{,}8986\). \(X_1=(1000-100\cdot9{,}8986)(1{,}05)^{14}\approx20{,}07\).</p>
<p><b>Interpretasi:</b> Ada 14 penarikan 100 penuh; penarikan ke-14 ditambah 20,07 (menjadi 120,07) menghabiskan dana.</p></div>`},
 {id:"matkeu-a3", t:"Periode pembayaran berbeda dengan konversi bunga (Pekan 4–6)", h:String.raw`<h2>Pendekatan numerik</h2>
<p>Dua langkah: (1) ubah suku bunga ke periode yang sama dengan pembayaran, \(1+i=(1+j)^m\); (2) hitung dengan rumus anuitas biasa. Cara ini berlaku umum, termasuk bila waktu atau suku bunga tidak diketahui.</p>
<p>Contoh: pinjaman Rp30.000.000, cicilan akhir kuartal selama 5 tahun, 12% convertible annually. \(j=1{,}12^{1/4}-1\approx2{,}8737\%\), \(R=30\cdot10^6/a_{\overline{20}|j}\approx\) Rp1.993.005. Contoh lain: $3000, cicilan kuartalan 5 tahun, 10% convertible semiannually: \(j=1{,}05^{1/2}-1\), \(R\approx191{,}89\).</p>
<p>Contoh tabungan: $100 di awal tiap kuartal selama 2 tahun, lalu $200 selama 2 tahun, 12% convertible monthly. \(j=1{,}01^3-1=3{,}0301\%\), nilai akhir tahun ke-4 \(=100\,\ddot s_{\overline{16}|j}+100\,\ddot s_{\overline{8}|j}\approx2.998{,}86\).</p>
<h2>Pendekatan aljabar: pembayaran lebih jarang</h2>
<p>[[frek|Dengan]] \(k\) periode bunga per pembayaran, \(n=mk\), \(m\) pembayaran 1:</p>
\[PV_{\text{imm}}=\frac{a_{\overline{n}|}}{s_{\overline{k}|}},\quad FV_{\text{imm}}=\frac{s_{\overline{n}|}}{s_{\overline{k}|}};\qquad PV_{\text{due}}=\frac{a_{\overline{n}|}}{a_{\overline{k}|}},\quad FV_{\text{due}}=\frac{s_{\overline{n}|}}{a_{\overline{k}|}}\]
<p>Perpetuitas: immediate \(\dfrac1{i\,s_{\overline{k}|}}\), due \(\dfrac1{i\,a_{\overline{k}|}}\).</p>
<h2>Pendekatan aljabar: pembayaran lebih sering (anuitas m-thly)</h2>
<p>Pembayaran \(1/m\) sebanyak \(mn\) kali, \(1+i=(1+j)^m\):</p>
\[a^{(m)}_{\overline{n}|}=\frac{1-v^n}{i^{(m)}}=\frac{i}{i^{(m)}}a_{\overline{n}|},\quad s^{(m)}_{\overline{n}|}=\frac{i}{i^{(m)}}s_{\overline{n}|},\quad \ddot a^{(m)}_{\overline{n}|}=\frac{d}{d^{(m)}}\ddot a_{\overline{n}|},\quad \ddot s^{(m)}_{\overline{n}|}=\frac{d}{d^{(m)}}\ddot s_{\overline{n}|}\]
\[a^{(m)}_{\overline{\infty}|}=\frac1{i^{(m)}},\qquad \ddot a^{(m)}_{\overline{\infty}|}=\frac1{d^{(m)}}\]
<h2>Contoh soal dan pembahasan</h2>
<div class="soal"><p><b>Soal.</b> Pinjaman Rp30.000.000 dilunasi dengan cicilan akhir kuartal selama 5 tahun, bunga 12% convertible annually.</p>
<p><b>Diketahui:</b> \(L=30.000.000\), 20 kuartal, \(i=12\%\) per tahun.</p>
<p><b>Ditanyakan:</b> Besar cicilan per kuartal.</p>
<p><b>Penyelesaian:</b> \(j=1{,}12^{1/4}-1\approx2{,}8737\%\). \(R=\frac{30\cdot10^6}{a_{\overline{20}|j}}\approx\) Rp1.993.005.</p>
<p><b>Interpretasi:</b> Peminjam membayar sekitar Rp1,99 juta per kuartal; total Rp39,86 juta selama 5 tahun.</p></div>`},
 {id:"matkeu-a4", t:"Anuitas dengan pembayaran bervariasi (Pekan 7)", h:String.raw`<h2>Progresi aritmetika</h2>
<p>Pembayaran akhir periode: \(P,\ P+Q,\ \dots,\ P+(n-1)Q\) (syarat \(P+(n-1)Q>0\)). Mengalikan dengan \((1+i)\) lalu mengurangkan menyisakan deret geometri:</p>
\[PV=P\,a_{\overline{n}|}+Q\,\frac{a_{\overline{n}|}-nv^n}{i},\qquad AV=P\,s_{\overline{n}|}+Q\,\frac{s_{\overline{n}|}-n}{i}\]
<p>Kasus khusus \(P=Q=1\), anuitas [[ia|meningkat]], dan \(P=n,Q=-1\), anuitas [[da|menurun]]:</p>
\[(Ia)_{\overline{n}|}=\frac{\ddot a_{\overline{n}|}-nv^n}{i},\quad (Is)_{\overline{n}|}=\frac{\ddot s_{\overline{n}|}-n}{i},\quad (Da)_{\overline{n}|}=\frac{n-a_{\overline{n}|}}{i},\quad (Ds)_{\overline{n}|}=\frac{n(1+i)^n-s_{\overline{n}|}}{i}\]
<p>Intuisi: \((Ia)_{\overline{n}|}=a_{\overline{n}|}+v\,a_{\overline{n-1}|}+\dots+v^{n-1}a_{\overline{1}|}\) (tumpukan anuitas ditunda), dan \((Da)_{\overline{n}|}=a_{\overline{n}|}+a_{\overline{n-1}|}+\dots+a_{\overline{1}|}\). Identitas penting: \((Ia)_{\overline{n}|}+(Da)_{\overline{n}|}=(n+1)\,a_{\overline{n}|}\).</p>
<p>Penyesuaian: anuitas awal \(\times(1+i)\) (atau ganti \(i\) dengan \(d\)); ditunda \(m\) periode \(\times v^m\); nilai akhir \(\times(1+i)^n\); beda \(Q\neq1\): kalikan skala, misalnya \(2,4,\dots,2n\) bernilai \(2(Ia)_{\overline{n}|}\).</p>
<p>Contoh \(i=5\%\), \(n=5\): \((Ia)=\frac{4{,}5460-3{,}9176}{0{,}05}\approx12{,}5664\), \((Da)=\frac{5-4{,}3295}{0{,}05}\approx13{,}4105\).</p>
<h2>Progresi geometri</h2>
<p>Pembayaran \(1,(1+k),\dots,(1+k)^{n-1}\). Untuk [[geo|anuitas geometri]]:</p>
\[PV=\frac{1-\left(\frac{1+k}{1+i}\right)^n}{i-k},\qquad k=i:\ PV=nv,\qquad PV=\frac{a_{\overline{n}|j}}{1+k},\ j=\frac{i-k}{1+k}\]
<p>Contoh \(k=2\%\), \(i=5\%\), \(n=10\): \(PV\approx8{,}3881\).</p>
<h2>Perpetuitas bervariasi</h2>
<p>Limit \(n\to\infty\): \((Ia)_{\overline{\infty}|}=\dfrac1{id}\) (versi awal \(1/d^2\)); geometri \(\dfrac1{i-k}\) bila \(k<i\); anuitas menurun tidak mempunyai perpetuitas.</p>
<h2>Contoh soal dan pembahasan</h2>
<div class="soal"><p><b>Soal.</b> Pembayaran akhir tahun selama 5 tahun: 1.000, 1.100, 1.200, 1.300, 1.400, dengan \(i=5\%\).</p>
<p><b>Diketahui:</b> \(P=1000\), \(Q=100\), \(n=5\), \(i=5\%\).</p>
<p><b>Ditanyakan:</b> Nilai sekarang.</p>
<p><b>Penyelesaian:</b> \(PV=Pa_{\overline{5}|}+Q\frac{a_{\overline{5}|}-5v^5}{i}=1000(4{,}3295)+100\frac{4{,}3295-3{,}9176}{0{,}05}\approx5.153{,}17\).</p>
<p><b>Interpretasi:</b> Rangkaian yang naik 100 per tahun bernilai 5.153,17 hari ini; bagian "naik" menyumbang 823,69.</p></div>`},
 {id:"matkeu-2", t:"Amortisasi pinjaman (Pekan 9–10)", h:String.raw`<h2>Pembayaran dan saldo</h2>
<p>Pinjaman \(L\) dilunasi dengan \(n\) pembayaran sama \(R\) di akhir periode. Lewat [[amort|amortisasi]], \(L=R\,a_{\overline{n}|}\) sehingga \(R=L/a_{\overline{n}|}\). [[saldo|Saldo pinjaman]] setelah pembayaran ke-\(t\):</p>
\[B_t^{p}=R\,a_{\overline{n-t}|}\quad(\text{prospektif}),\qquad B_t^{r}=L(1+i)^t-R\,s_{\overline{t}|}\quad(\text{retrospektif})\]
<h2>Bunga dan pokok</h2>
<p>Tiap pembayaran dipecah oleh [[bgpokok|bunga dan pokok]]:</p>
\[I_t=iB_{t-1}=R(1-v^{n-t+1}),\qquad P_t=R\,v^{n-t+1},\qquad \sum P_t=L\]
<h2>Contoh jadwal</h2>
<p>\(L=1.000.000\), \(n=3\), \(i=10\%\), sehingga \(R\approx 402.115\).</p>
<table><tr><th>t</th><th>Bayar</th><th>Bunga</th><th>Pokok</th><th>Saldo</th></tr>
<tr><td>0</td><td></td><td></td><td></td><td>1.000.000</td></tr>
<tr><td>1</td><td>402.115</td><td>100.000</td><td>302.115</td><td>697.885</td></tr>
<tr><td>2</td><td>402.115</td><td>69.789</td><td>332.326</td><td>365.559</td></tr>
<tr><td>3</td><td>402.115</td><td>36.556</td><td>365.559</td><td>0</td></tr></table>
<h2>Mencari jangka waktu, suku bunga, dan periode</h2>
<p><b>Jangka waktu:</b> dari \(L=R\,a_{\overline{n}|}\) diperoleh \(n=-\dfrac{\ln(1-iL/R)}{\ln(1+i)}\). Jika \(n\) tidak bulat, ada pembayaran terakhir yang lebih kecil (<i>drop payment</i>) atau lebih besar (<i>balloon</i>) satu periode setelah pembayaran penuh terakhir.</p>
<p><b>Suku bunga:</b> selesaikan \(a_{\overline{n}|i}=L/R\) dengan interpolasi linier atau Newton–Raphson.</p>
<p><b>Periode pembayaran:</b> bila dibayar \(m\) kali setahun, pakai \(i^{(m)}/m\) per periode dan \(n\to mn\). Pokok pinjaman dapat dicari dari \(L=R\,a_{\overline{n}|}\) bila \(R,n,i\) diketahui, dan sisa pinjaman dari rumus [[saldo|saldo]] di atas.</p>
<h2>Contoh soal dan pembahasan</h2>
<div class="soal"><p><b>Soal.</b> Pinjaman Rp1.000.000 dilunasi dengan 3 pembayaran tahunan sama, \(i=10\%\). Tentukan pembayaran serta bunga dan pokok pada pembayaran kedua.</p>
<p><b>Diketahui:</b> \(L=1.000.000\), \(n=3\), \(i=10\%\).</p>
<p><b>Ditanyakan:</b> \(R\), \(I_2\), \(P_2\).</p>
<p><b>Penyelesaian:</b> \(R=L/a_{\overline{3}|}=1.000.000/2{,}4869\approx402.115\). \(B_1=697.885\), \(I_2=0{,}1\times697.885=69.789\), \(P_2=402.115-69.789=332.326\).</p>
<p><b>Interpretasi:</b> Pada pembayaran kedua, 17,4% dipakai untuk bunga dan sisanya mengurangi pokok; bagian pokok naik tiap periode.</p></div>`},
 {id:"matkeu-3", t:"Sinking fund (Pekan 11–12)", h:String.raw`<h2>Gagasan</h2>
<p>Pada metode [[sf|sinking fund]], pokok \(L\) tidak dicicil. Peminjam membayar bunga \(iL\) tiap periode kepada pemberi pinjaman dan menyetor \(D\) ke dana yang berbunga \(j\), sehingga dana di akhir sama dengan \(L\):</p>
\[D\,s_{\overline{n}|j}=L\ \Rightarrow\ D=\frac{L}{s_{\overline{n}|j}},\qquad \text{total per periode}=iL+\frac{L}{s_{\overline{n}|j}}\]
<p>Jika \(j=i\), total sama dengan \(L/a_{\overline{n}|i}\), yaitu hasil amortisasi. Jika \(j<i\), total lebih besar.</p>
<h2>Saldo dan bunga neto</h2>
<p>Dana: \(SF_t=D\,s_{\overline{t}|j}\). [[sfsaldo|Pinjaman neto]] \(B_t=L-SF_t\) dan bunga neto \(iL-jSF_{t-1}\).</p>
<h2>Contoh</h2>
<p>\(L=1.000.000\), \(n=3\), \(i=10\%\), \(j=8\%\): \(s_{\overline{3}|8\%}=3{,}2464\), \(D\approx 308.034\), total \(\approx 408.034\) (bandingkan 402.115 pada amortisasi).</p>
<table><tr><th>t</th><th>Setoran</th><th>Bunga dana</th><th>Dana</th><th>Pinjaman neto</th></tr>
<tr><td>1</td><td>308.034</td><td>0</td><td>308.034</td><td>691.966</td></tr>
<tr><td>2</td><td>308.034</td><td>24.643</td><td>640.711</td><td>359.289</td></tr>
<tr><td>3</td><td>308.034</td><td>51.257</td><td>1.000.002</td><td>≈ 0</td></tr></table>
<h2>Mencari besaran yang tidak diketahui</h2>
<p><b>Suku bunga efektif peminjam</b> \(i'\): selesaikan \(L\,a_{\overline{n}|i'}=iL+D\), yaitu pembayaran total yang diperlakukan sebagai anuitas. Selalu \(i'>i\) bila \(j<i\).</p>
<p><b>Jangka waktu:</b> dari \(D\,s_{\overline{n}|j}=L\) diperoleh \(n=\dfrac{\ln(1+jL/D)}{\ln(1+j)}\). <b>Besar pembayaran</b> dan <b>pokok</b> dari rumus \(D\) di atas. Bila periode pembayaran berbeda dengan periode bunga dana, ubah ke suku bunga per periode pembayaran lebih dulu.</p>
<h2>Contoh soal dan pembahasan</h2>
<div class="soal"><p><b>Soal.</b> Pinjaman Rp1.000.000, 3 tahun, bunga 10% dibayar tiap tahun, pokok dilunasi lewat sinking fund yang berbunga 8%.</p>
<p><b>Diketahui:</b> \(L=1.000.000\), \(n=3\), \(i=10\%\), \(j=8\%\).</p>
<p><b>Ditanyakan:</b> Total pembayaran per tahun dan pinjaman neto di akhir tahun ke-2.</p>
<p><b>Penyelesaian:</b> \(D=L/s_{\overline{3}|8\%}=1.000.000/3{,}2464\approx308.034\); total \(=100.000+308.034=408.034\). \(SF_2=308.034\,s_{\overline{2}|8\%}=640.711\); neto \(=359.289\).</p>
<p><b>Interpretasi:</b> Total Rp408.034 lebih besar dari Rp402.115 pada amortisasi karena dana hanya berbunga 8% < 10%.</p></div>`},
 {id:"matkeu-4", t:"Harga dan nilai buku obligasi (Pekan 13–14)", h:String.raw`<h2>Harga obligasi</h2>
<p>[[obl|Obligasi]] bernominal \(F\) membayar [[kupon|kupon]] \(Fr\) tiap periode dan [[tebus|nilai tebus]] \(C\) di akhir periode ke-\(n\). Pada imbal hasil \(i\):</p>
\[P=Fr\,a_{\overline{n}|}+C\,v^n=C+(Fr-Ci)\,a_{\overline{n}|}\]
<p>Bila \(g=Fr/C>i\) harga memiliki [[agio|premi]] (\(P>C\)); bila \(g<i\) ada [[disc|diskon]] (\(P<C\)). Cara cepat: [[makeham|rumus Makeham]] \(P=K+\frac gi(C-K)\), \(K=Cv^n\).</p>
<h2>Nilai buku dan amortisasi</h2>
<p>[[bookv|Nilai buku]] \(BV_t=Fr\,a_{\overline{n-t}|}+Cv^{n-t}\). Periode ke-\(t\): bunga \(=i\,BV_{t-1}\), dan</p>
\[\text{amortisasi premi}=Fr-iBV_{t-1}=(Fr-Ci)\,v^{n-t+1}\]
<p>Untuk diskon, selisihnya negatif: \(iBV_{t-1}-Fr=(Ci-Fr)v^{n-t+1}\) disebut akumulasi diskon dan nilai buku naik menuju \(C\).</p>
<h2>Contoh</h2>
<p>\(F=C=1.000\), \(r=6\%\), \(n=3\), \(i=5\%\): \(P=863{,}84+163{,}39=1.027{,}23\).</p>
<table><tr><th>t</th><th>Kupon</th><th>Bunga</th><th>Amortisasi premi</th><th>Nilai buku</th></tr>
<tr><td>0</td><td></td><td></td><td></td><td>1.027,23</td></tr>
<tr><td>1</td><td>60</td><td>51,36</td><td>8,64</td><td>1.018,59</td></tr>
<tr><td>2</td><td>60</td><td>50,93</td><td>9,07</td><td>1.009,52</td></tr>
<tr><td>3</td><td>60</td><td>50,48</td><td>9,52</td><td>1.000,00</td></tr></table>
<p>Dengan \(i=7\%\) obligasi yang sama berharga \(\approx 973{,}76\) (diskon 26,24). Nilai tebus dan nominal dapat dicari dari rumus harga bila \(P,r,n,i\) diketahui.</p>
<h2>Contoh soal dan pembahasan</h2>
<div class="soal"><p><b>Soal.</b> Obligasi nominal dan tebus 1.000, kupon 6% tahunan, jatuh tempo 3 tahun, imbal hasil 5%.</p>
<p><b>Diketahui:</b> \(F=C=1000\), \(r=6\%\), \(n=3\), \(i=5\%\).</p>
<p><b>Ditanyakan:</b> Harga, premi, dan nilai buku setelah tahun pertama.</p>
<p><b>Penyelesaian:</b> \(P=60a_{\overline{3}|}+1000v^3=163{,}39+863{,}84=1.027{,}23\); premi \(=27{,}23\). \(BV_1=1.027{,}23(1{,}05)-60=1.018{,}59\).</p>
<p><b>Interpretasi:</b> Karena kupon (6%) di atas imbal hasil (5%), harga di atas par; premi diamortisasi 8,64 pada tahun pertama dan nilai buku turun ke 1.000 di jatuh tempo.</p></div>`},
 {id:"matkeu-5", t:"Kupon, jangka waktu, dan kurva imbal hasil (Pekan 15)", h:String.raw`<h2>Mencari kupon dan jangka waktu</h2>
<p>Dari harga \(P\) yang diketahui:</p>
\[Fr=\frac{P-Cv^n}{a_{\overline{n}|}},\qquad v^n=1-i\,\frac{P-C}{Fr-Ci}\ \Rightarrow\ n=-\frac{\ln v^n}{\ln(1+i)}\]
<p>Imbal hasil \(i\) ([[ytm|yield to maturity]]) dari harga dicari dengan interpolasi atau Newton. Untuk obligasi yang dapat dipanggil sebelum jatuh tempo, hitung harga pada setiap tanggal panggil dan ambil yang terendah bila ada premi, atau tanggal jatuh tempo bila ada diskon.</p>
<h2>Suku bunga spot dan forward</h2>
<p>[[spot|Suku bunga spot]] \(s_t\) mendiskontokan arus kas pada waktu \(t\), sehingga \(P=\sum_t CF_t(1+s_t)^{-t}\). [[fwd|Suku bunga forward]]:</p>
\[(1+s_n)^n=(1+s_{n-1})^{n-1}(1+f_{n-1,n})\]
<p>Contoh: \(s_1=4\%\), \(s_2=5\%\) memberi \(f_{1,2}=1{,}05^2/1{,}04-1\approx 6{,}01\%\).</p>
<h2>Membuat kurva imbal hasil</h2>
<p>[[kurva|Kurva imbal hasil]] dibuat dengan <i>bootstrapping</i>: mulai dari obligasi satu tahun untuk \(s_1\), lalu tiap obligasi berikutnya memberi satu \(s_n\) baru.</p>
\[1+s_n=\left(\frac{Fr+C}{P-Fr\sum_{k=1}^{n-1}(1+s_k)^{-k}}\right)^{1/n}\]
<p>Contoh: obligasi 2 tahun, \(F=C=100\), \(r=6\%\), \(P=101{,}9143\), \(s_1=4\%\). Nilai sekarang kupon pertama \(=6/1{,}04=5{,}7692\), sisa \(=96{,}1451\), maka \(1+s_2=(106/96{,}1451)^{1/2}=1{,}05\) dan \(s_2=5\%\). Titik \((1;4\%)\), \((2;5\%)\) membentuk kurva yang menaik.</p>
<h2>Contoh soal dan pembahasan</h2>
<div class="soal"><p><b>Soal.</b> Obligasi 2 tahun, nominal = tebus 100, kupon 6, harga 101,9143. Suku bunga spot 1 tahun \(s_1=4\%\).</p>
<p><b>Diketahui:</b> \(F=C=100\), \(Fr=6\), \(P=101{,}9143\), \(s_1=4\%\).</p>
<p><b>Ditanyakan:</b> \(s_2\) dan forward \(f_{1,2}\).</p>
<p><b>Penyelesaian:</b> \(P-\frac{6}{1{,}04}=96{,}1451\). \(1+s_2=\sqrt{106/96{,}1451}=1{,}05\Rightarrow s_2=5\%\). \(f_{1,2}=\frac{1{,}05^2}{1{,}04}-1\approx6{,}01\%\).</p>
<p><b>Interpretasi:</b> Kurva imbal hasil menaik (4% ke 5%); pasar mengimplikasikan bunga 6,01% untuk tahun kedua.</p></div>`},
 {id:"matkeu-6", t:"Strategi asset-liability matching (ALM)", h:String.raw`<h2>Pengertian</h2>
<p>[[alm|ALM]] adalah pengelolaan aset dan liabilitas secara terpadu agar klaim dan manfaat polis selalu dapat dibayar. Saat suku bunga turun, hasil reinvestasi menurun, tetapi nilai aset yang masih dipegang naik dan mengimbanginya.</p>
<h2>Cash flow matching</h2>
<p>[[cfm|Cash flow matching]]: arus kas aset disusun persis sama dengan arus kas liabilitas. Paling mudah dipahami, tetapi jarang dapat dipenuhi penuh karena obligasi yang tersedia terbatas.</p>
<h2>Duration matching dan imunisasi Redington</h2>
<p>Durasi portofolio obligasi disamakan dengan durasi liabilitas sehingga nilai aset mengikuti nilai liabilitas. Dengan [[dur|durasi]] \(D=\frac{\sum t\,v^tCF_t}{P}\) dan [[konv|konveksitas]] \(C=\frac{\sum t(t+1)v^{t+2}CF_t}{P}\), perubahan harga dihampiri \(\frac{\Delta P}{P}\approx-\frac{D}{1+i}\Delta i+\frac12C\Delta i^2\). [[redington|Syarat Redington]]:</p>
\[PV_A=PV_L,\qquad D_A=D_L,\qquad C_A>C_L\]
<h2>Diversifikasi investasi</h2>
<p><b>Asuransi jiwa:</b> liabilitas bersifat nominal, didukung portofolio yang didominasi obligasi. <b>Asuransi umum:</b> liabilitas sensitif inflasi, cocok dengan saham dan obligasi jangka panjang. <b>Multi-liabilitas:</b> sebaran durasi aset harus lebih lebar dari durasi liabilitas.</p>
<h2>Mitigasi risiko</h2>
<p>Durasi saja tidak cukup bila kurva imbal hasil bergeser tidak paralel. Maka: kendalikan konveksitas portofolio aset, pantau [[dgap|duration gap]] secara berkala, dan gunakan ukuran yang lebih lengkap seperti partial duration (sensitivitas terhadap titik tertentu pada kurva imbal hasil).</p>
<h2>Contoh soal dan pembahasan</h2>
<div class="soal"><p><b>Soal.</b> Liabilitas Rp1.000 jatuh tempo 4 tahun lagi, \(i=5\%\). Aset berupa zero-coupon 2 tahun dan 6 tahun. Susun portofolio duration matching, uji syarat Redington, lalu bandingkan nilai aset dan liabilitas bila bunga naik ke 6% atau turun ke 4%.</p>
<p><b>Diketahui:</b> \(L=1000\) di \(t=4\), \(i=5\%\), aset zero-coupon \(t=2\) dan \(t=6\).</p>
<p><b>Ditanyakan:</b> Bobot aset, syarat Redington, dan surplus pada \(i=6\%\) dan \(i=4\%\).</p>
<p><b>Penyelesaian:</b> \(PV_L=1000/1{,}05^4=822,70\), \(D_L=4\). Bobot nilai sekarang \(w\) pada 2 tahun: \(2w+6(1-w)=4\Rightarrow w=0{,}5\). Nilai tebus: 2 tahun \(=453,51\), 6 tahun \(=551,25\). Konveksitas: \(C_L=20/1{,}05^2=18,14\), \(C_A=\frac{0{,}5(6)+0{,}5(42)}{1{,}05^2}=21,77\gt C_L\). Bunga 6%: \(PV_A=792,24\), \(PV_L=792,09\). Bunga 4%: \(PV_A=854,96\), \(PV_L=854,80\).</p>
<p><b>Interpretasi:</b> Ketiga syarat Redington terpenuhi, dan surplus aset terhadap liabilitas tetap positif ketika bunga naik maupun turun. Jika konveksitas aset lebih kecil dari liabilitas, surplus bisa negatif.</p></div>`},
]};
