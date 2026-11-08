/* Teori Suku Bunga (Semester 1): satu objek per bab. Bahan: presentasi Kelompok 1 sampai 6.
   Tambah bab baru = tambah satu blok {id, t, h} di daftar ch. */
window.COURSES = window.COURSES || {};
COURSES.tsb = {t:"Teori Suku Bunga", desc:"Anuitas akhir dan awal, nilai pada sembarang waktu, penerapan, perpetuitas, periode bayar dan bunga berbeda, pembayaran bervariasi, dan anuitas kontinu.", ch:[

{id:"tsb-1", t:"Anuitas: nilai sekarang dan nilai akumulasi (Kelompok 1)", h:String.raw`<h2>Apa itu anuitas?</h2>
<p>[[anuitas|Anuitas]] adalah serangkaian pembayaran atau penerimaan tetap yang dilakukan secara berkala dalam jangka waktu tertentu. Dasar perhitungannya adalah [[bunga|suku bunga efektif]] \(i\) dan [[v|faktor diskonto]] \(v=\frac{1}{1+i}\).</p>
<h3>Jenis anuitas</h3>
<div class="treewrap"><div class="tree"><div class="tr-node root">Anuitas</div><div class="tr-kids">
<div class="tr-kid"><div class="tr-node cond">Annuity certain<small><br>jangka waktu pasti</small></div><div class="tr-kids">
<div class="tr-kid"><div class="tr-node ok">Anuitas akhir (immediate)<br>dibayar di akhir periode</div></div>
<div class="tr-kid"><div class="tr-node ok">Anuitas awal (due)<br>dibayar di awal periode</div></div></div></div>
<div class="tr-kid"><div class="tr-node cond">Contingent annuity<small><br>bergantung kejadian, mis. anuitas hidup</small></div></div>
<div class="tr-kid"><div class="tr-node cond">Perpetuitas<small><br>berlangsung tanpa batas waktu</small></div></div>
</div></div></div>
<h2>Nilai sekarang anuitas akhir \(a_{\overline{n}|}\)</h2>
<p>Pembayaran 1 dilakukan di waktu \(1,2,\dots,n\). Setiap pembayaran didiskontokan kembali ke waktu 0, lalu dijumlahkan.</p>
⟦waktu|0,1,2,3,⋯,n−1,n||1:1;2:1;3:1;5:1;6:1|2:Nilai sekarang \(a_{\overline n|}\): tiap pembayaran ditarik mundur ke waktu 0⟧
⟦langkah|1|Jumlahkan nilai sekarang tiap pembayaran|\(a_{\overline n|}=v+v^2+v^3+\cdots+v^n\)⟧
⟦langkah|2|Pakai jumlah deret geometri|\(a_{\overline n|}=v\,\dfrac{1-v^n}{1-v}\)⟧
⟦langkah|3|Gunakan \(1-v=iv\)|\(a_{\overline n|}=v\,\dfrac{1-v^n}{iv}=\dfrac{1-v^n}{i}\)⟧
\[a_{\overline{n}|}=\frac{1-v^n}{i},\qquad PV=R\,a_{\overline{n}|}\]
<h2>Nilai akumulasi anuitas akhir \(s_{\overline{n}|}\)</h2>
<p>Setiap pembayaran dibungakan maju sampai waktu \(n\). Pembayaran pertama berbunga \(n-1\) periode, pembayaran terakhir tidak berbunga.</p>
⟦waktu|0,1,2,3,⋯,n−1,n||1:1;2:1;3:1;5:1;6:1|2:Nilai akumulasi \(s_{\overline n|}\): tiap pembayaran dibungakan maju ke waktu \(n\)⟧
\[s_{\overline n|}=1+(1+i)+\cdots+(1+i)^{n-1}=\frac{(1+i)^n-1}{(1+i)-1}=\frac{(1+i)^n-1}{i},\qquad AV=R\,s_{\overline{n}|}\]
<h2>Hubungan nilai sekarang dan nilai akumulasi</h2>
<p>Nilai akumulasi sama dengan nilai sekarang yang dibungakan sebanyak \(n\) periode:</p>
\[s_{\overline n|}=a_{\overline n|}(1+i)^n,\qquad a_{\overline n|}=s_{\overline n|}\,v^n\]
<div class="treewrap"><div class="tree"><div class="tr-node root">\(a_{\overline n|}=R\dfrac{1-v^n}{i}\)<br>nilai sekarang</div><div class="tr-kids">
<div class="tr-kid"><div class="tr-node cond">dibungakan \(n\) periode<br>\(\times(1+i)^n\)</div><div class="tr-kids"><div class="tr-kid"><div class="tr-node ok">\(s_{\overline n|}=R\dfrac{(1+i)^n-1}{i}\)<br>nilai akumulasi</div></div></div></div>
</div></div></div>
<h2>Contoh soal</h2>
<div class="soal"><p><b>Soal 1 (nilai sekarang).</b> Pak Andi mencicil rumah dengan anuitas: Rp800.000 di akhir tiap kuartal selama 15 tahun. Bunga 8% per tahun, convertible quarterly. Berapa nilai sekarang seluruh cicilan?</p>
<p><b>Diketahui:</b> \(R=800.000\); \(i=\frac{8\%}{4}=0{,}02\); \(n=15\times4=60\).</p>
<p><b>Penyelesaian:</b> \(PV=R\,a_{\overline{60}|}=800.000\,\dfrac{1-1{,}02^{-60}}{0{,}02}=800.000\times34{,}76088668\approx\) <b>Rp27.808.709,34</b>.</p></div>
<div class="soal"><p><b>Soal 2 (nilai akumulasi).</b> Fani menabung Rp1.000 di akhir tiap bulan selama 3 tahun dengan bunga 12% convertible monthly. Berapa nilai akumulasinya?</p>
<p><b>Diketahui:</b> \(R=1.000\); \(i=\frac{12\%}{12}=0{,}01\); \(n=36\).</p>
<p><b>Penyelesaian:</b> \(AV=1.000\,s_{\overline{36}|}=1.000\,\dfrac{1{,}01^{36}-1}{0{,}01}\approx\) <b>Rp43.076,88</b>.</p></div>
<div class="soal"><p><b>Soal 3 (dari nilai sekarang ke nilai akumulasi).</b> Nilai sekarang anuitas Andi Rp3.000.000, bunga efektif 10%, masa investasi 4 tahun. Berapa nilai akumulasinya di akhir tahun ke-4?</p>
<p><b>Penyelesaian:</b> \(AV=PV(1+i)^n=3.000.000\,(1{,}1)^4=\) <b>Rp4.392.300</b>.</p></div>
⟦catatan|Tiga langkah menghitung anuitas: (1) ubah suku bunga ke periode yang sama dengan pembayaran, (2) hitung \(n\) dalam periode itu, (3) pilih \(a_{\overline n|}\) atau \(s_{\overline n|}\) sesuai kebutuhan (sekarang atau akumulasi).⟧`},

{id:"tsb-2", t:"Anuitas awal dan nilai pada sembarang waktu (Kelompok 2)", h:String.raw`<h2>Anuitas awal (annuity-due)</h2>
<p>[[awal|Anuitas awal]] adalah anuitas yang pembayarannya dilakukan di awal setiap periode, yaitu di waktu \(0,1,\dots,n-1\). Ada dua nilai yang dicari: nilai sekarang \(\ddot a_{\overline n|}\) dan nilai akumulasi \(\ddot s_{\overline n|}\).</p>
⟦waktu|0,1,2,⋯,n−2,n−1,n||0:1;1:1;2:1;4:1;5:1|0:Panah ke waktu 0: nilai sekarang \(\ddot a_{\overline n|}\);3:Panah ke waktu \(n\): nilai akumulasi \(\ddot s_{\overline n|}\)⟧
<h3>Nilai sekarang</h3>
\[\ddot a_{\overline n|}=1+v+v^2+\cdots+v^{n-1}=\frac{1-v^n}{1-v}=\frac{1-v^n}{iv}=\frac{1-v^n}{d}\]
<p>Bentuk lain yang dipakai di slide: \(PV_{due}=\Big[\dfrac{1-(1+i)^{-(n-1)}}{i}+1\Big]A\). Artinya, pembayaran pertama (di waktu 0) bernilai penuh, sisanya \(n-1\) pembayaran dihitung sebagai anuitas akhir.</p>
<h3>Nilai akumulasi</h3>
\[\ddot s_{\overline n|}=(1+i)+(1+i)^2+\cdots+(1+i)^n=(1+i)\frac{(1+i)^n-1}{i}=\frac{(1+i)^n-1}{d}\]
<h2>Hubungan anuitas akhir dan anuitas awal</h2>
⟦waktu|0,1,2,⋯,n−1,n,n+1||1:1;2:1;4:1;5:1|0:\(a_{\overline n|}\) di waktu 0 dan \(\ddot a_{\overline n|}\) di waktu 1;6:\(s_{\overline n|}\) di waktu \(n\) dan \(\ddot s_{\overline n|}\) di waktu \(n+1\)⟧
<p>Pembayaran anuitas awal datang satu periode lebih cepat daripada anuitas akhir, jadi nilainya lebih besar sebesar faktor \((1+i)\):</p>
\[\ddot a_{\overline n|}=a_{\overline n|}(1+i),\qquad \ddot s_{\overline n|}=s_{\overline n|}(1+i)\]
\[\ddot a_{\overline n|}=1+a_{\overline{n-1}|},\qquad \ddot s_{\overline n|}=s_{\overline{n+1}|}-1\]
<h3>Contoh</h3>
<div class="soal"><p><b>Soal 1 (nilai sekarang anuitas awal).</b> Paman Kathy menjanjikan $1.000 per bulan, mulai hari ini, pembayaran terakhir 6 bulan dari sekarang. Bunga 6% per tahun. Berapa nilai sekarangnya?</p>
<p><b>Diketahui:</b> \(A=1.000\); pembayaran di bulan \(0,1,\dots,6\) sehingga \(n=7\); \(i=\frac{6\%}{12}=0{,}005\).</p>
<p><b>Penyelesaian:</b> \(PV=\Big[\dfrac{1-1{,}005^{-6}}{0{,}005}+1\Big]1.000=(5{,}8963844+1)\,1.000\approx\) <b>$6.896,38</b>.</p></div>
<div class="soal"><p><b>Soal 2 (nilai akumulasi anuitas awal).</b> Anuitas awal membayar $1.000 di awal tiap tahun selama 10 tahun, bunga efektif 5%. Berapa nilai akumulasinya di akhir tahun ke-10?</p>
<p><b>Penyelesaian:</b> \(\ddot s_{\overline{10}|}=1{,}05\times\dfrac{1{,}05^{10}-1}{0{,}05}=1{,}05\times12{,}5779=13{,}2068\). Nilai total \(=1.000\times13{,}2068\approx\) <b>$13.206,79</b>.</p>
⟦catatan|Di slide tertulis $13.206,80 karena pembulatan 13,2068. Dengan angka tak dibulatkan hasilnya $13.206,79.⟧</div>
<h2>Nilai sebelum pembayaran pertama (anuitas ditunda)</h2>
<p>[[ditunda|Anuitas ditunda]] adalah anuitas yang pembayarannya baru mulai setelah \(m\) periode. Nilai sekarangnya dihitung seperti anuitas biasa, lalu didiskontokan lagi untuk masa tunggu:</p>
\[PV=v^m\,a_{\overline n|}\qquad(m=\text{masa tunda},\ n=\text{jumlah pembayaran})\]
⟦waktu|0,1,2,3,4,5,6,7||3:1;4:1;5:1;6:1;7:1|1:Masa tunda \(m=2\) bulan;6:5 pembayaran, bulan ke-3 sampai ke-7⟧
<div class="soal"><p><b>Soal.</b> Nasabah seharusnya mencicil Rp1.000.000 per bulan selama 5 bulan, tetapi ditunda 2 bulan. Bunga 10% per bulan.</p>
<p><b>Penyelesaian:</b> \(PV=v^2a_{\overline5|}=(1{,}1)^{-2}\times\dfrac{1-1{,}1^{-5}}{0{,}1}=0{,}8264\times3{,}7908=3{,}1329\). Jadi \(PV\approx\) <b>Rp3.132.882</b>.</p>
⟦catatan|Di slide hasilnya tertulis 3.132 (dalam jutaan rupiah, dengan pembulatan faktor).⟧</div>
<h2>Nilai di antara pembayaran pertama dan terakhir</h2>
<p>Bila ada \(n\) pembayaran dan nilainya dihitung tepat setelah pembayaran ke-\(k\), pisahkan menjadi pembayaran yang sudah lewat (diakumulasi) dan yang belum (didiskonto):</p>
\[\text{nilai}=s_{\overline{k}|}+a_{\overline{n-k}|}\]
⟦waktu|0,1,2,3,4,5,6,7||1:1;2:1;3:1;4:1;5:1;6:1;7:1|2:Sudah dibayar: \(s_{\overline 4|}\);6:Belum dibayar: \(a_{\overline 3|}\)⟧
<div class="soal"><p><b>Soal.</b> Petani membeli mesin pakan Rp15.000.000 dengan cicilan Rp2.000.000 di akhir tiap tahun selama 10 tahun, bunga 8% per tahun. Berapa nilai seluruh pembayaran (yang sudah dan yang tersisa) tepat setelah pembayaran ke-8?</p>
<p><b>Penyelesaian:</b> \(s_{\overline8|}=\dfrac{1{,}08^8-1}{0{,}08}=10{,}6366\); \(a_{\overline2|}=\dfrac{1-1{,}08^{-2}}{0{,}08}=1{,}7833\). Nilai \(=2.000.000\,(10{,}6366+1{,}7833)=2.000.000\times12{,}4199\approx\) <b>Rp24.839.784,75</b>.</p>
⟦catatan|Di slide hasil akhir tertulis Rp29.839.784,75. Itu salah ketik: \(2.000.000\times12{,}41989237=24.839.784{,}75\).⟧</div>
<h2>Nilai akumulasi lebih dari satu periode setelah pembayaran terakhir</h2>
<p>Nilai akumulasi saat pembayaran terakhir \(S_n\) dibungakan lagi selama \(m\) periode:</p>
\[S=S_n(1+i)^m\]
⟦waktu|0,1,2,3,4,5,6,7||1:1;2:1;3:1;4:1;5:1|5:Pembayaran terakhir;7:Nilai akumulasi dihitung di sini (2 periode setelahnya)⟧
<div class="soal"><p><b>Soal.</b> Anuitas Rp1.000.000 di akhir tiap tahun selama 5 tahun, bunga 6%. Hitung nilai akumulasi di akhir tahun ke-7.</p>
<p><b>Penyelesaian:</b> (1) \(S_5=1.000.000\,s_{\overline5|}=5.637.092{,}96\). (2) \(S=5.637.092{,}96\,(1{,}06)^2=\) <b>Rp6.333.837,65</b>.</p></div>
⟦kes|Anuitas awal selalu lebih besar daripada anuitas akhir dengan \(n\), \(i\), dan \(R\) yang sama, tepatnya \((1+i)\) kali lipat. Masa tunda memperkecil nilai sekarang (\(\times v^m\)), sedangkan waktu tambahan setelah pembayaran terakhir memperbesar nilai akumulasi (\(\times(1+i)^m\)).⟧`},

{id:"tsb-3", t:"Penerapan anuitas (Kelompok 3)", h:String.raw`<h2>Anuitas dalam keuangan sehari-hari</h2>
<p>Hampir semua cicilan, tabungan rutin, dan iuran memakai dua pertanyaan yang sama: berapa nilai sekarang (pinjaman) atau berapa nilai akumulasi (tabungan)? Bila yang dicari besar pembayaran \(R\), balik rumusnya.</p>
<div class="treewrap"><div class="tree"><div class="tr-node root">Apa yang diketahui dan dicari?</div><div class="tr-kids">
<div class="tr-kid"><div class="tr-node cond">Pokok pinjaman \(P\) diketahui<small><br>KPR, pinjaman pendidikan, leasing</small></div><div class="tr-kids"><div class="tr-kid"><div class="tr-node ok">Angsuran \(R=\dfrac{P}{a_{\overline n|}}\)</div></div></div></div>
<div class="tr-kid"><div class="tr-node cond">Setoran \(R\) diketahui<small><br>tabungan berkala, iuran pensiun</small></div><div class="tr-kids"><div class="tr-kid"><div class="tr-node ok">Dana terkumpul \(FV=R\,s_{\overline n|}\)</div></div></div></div>
<div class="tr-kid"><div class="tr-node cond">Premi tunai diketahui, dibayar mencicil<small><br>asuransi</small></div><div class="tr-kids"><div class="tr-kid"><div class="tr-node ok">Angsuran awal bulan \(R=\dfrac{P}{\ddot a_{\overline n|}}\)</div></div></div></div>
</div></div></div>
<h2>1. KPR (Kredit Pemilikan Rumah)</h2>
<p>Pembeli membayar uang muka, sisanya dicicil dalam jangka tertentu (umumnya 5 sampai 20 tahun) bersama bunga. Cicilan memakai \(P=R\,a_{\overline n|}\).</p>
<div class="soal"><p><b>Soal.</b> Pak Budi mengajukan KPR tenor 15 tahun untuk rumah Rp300 juta. Bunga 10% per tahun, dibayar di akhir tahun. Berapa cicilan per tahun?</p>
<p><b>Diketahui:</b> \(P=300.000.000\), \(n=15\), \(i=10\%\).</p>
<p><b>Penyelesaian:</b> \(R=\dfrac{P}{a_{\overline{15}|}}=\dfrac{300.000.000}{7{,}60608}\approx\) <b>Rp39.442.133</b> per tahun.</p></div>
<h2>2. Tabungan atau investasi berkala</h2>
<p>Menyisihkan uang rutin untuk tujuan seperti dana darurat, rumah, atau pendidikan. Nilai akumulasinya \(FV=A\,s_{\overline n|}\), dengan \(A\) setoran per periode.</p>
<div class="soal"><p><b>Soal.</b> Andi menabung Rp1.000.000 tiap bulan selama 2 tahun, bunga 6% per tahun convertible monthly. Berapa uang yang terkumpul?</p>
<p><b>Diketahui:</b> \(A=1.000.000\), \(i=\frac{6\%}{12}=0{,}005\), \(n=24\).</p>
<p><b>Penyelesaian:</b> \(FV=1.000.000\times\dfrac{1{,}005^{24}-1}{0{,}005}=1.000.000\times25{,}4320\approx\) <b>Rp25.431.955</b>.</p></div>
<h2>3. Pembayaran pinjaman pendidikan</h2>
<p>Pinjaman dilunasi dengan angsuran tetap: \(P=R\,a_{\overline n|}\), sehingga \(R=P/a_{\overline n|}\).</p>
<div class="soal"><p><b>Soal.</b> Rina meminjam Rp10.000.000 untuk kuliah, dilunasi 3 tahun dengan bunga tetap 9% per tahun, sistem anuitas tahunan. Berapa angsuran per tahun?</p>
<p><b>Penyelesaian:</b> \(a_{\overline3|}=\dfrac{1-1{,}09^{-3}}{0{,}09}=2{,}531295\). \(R=\dfrac{10.000.000}{2{,}531295}\approx\) <b>Rp3.950.548</b>.</p></div>
<p>Angsuran tetap, tetapi porsi bunga dan porsi pokok berubah tiap tahun. Tabel amortisasi pinjaman Rina:</p>
<table><tr><th>Tahun</th><th>Angsuran</th><th>Bunga (9% saldo)</th><th>Pokok</th><th>Saldo akhir</th></tr>
<tr><td>1</td><td>3.950.547,57</td><td>900.000,00</td><td>3.050.547,57</td><td>6.949.452,43</td></tr>
<tr><td>2</td><td>3.950.547,57</td><td>625.450,72</td><td>3.325.096,85</td><td>3.624.355,57</td></tr>
<tr><td>3</td><td>3.950.547,57</td><td>326.192,00</td><td>3.624.355,57</td><td>0</td></tr></table>
<h2>4. Iuran dana pensiun</h2>
<p>Iuran rutin selama masa kerja dibungakan sampai pensiun: \(FV=A\,s_{\overline t|}\).</p>
<div class="soal"><p><b>Soal.</b> Karyawan membayar iuran Rp500.000 tiap akhir bulan selama 20 tahun, bunga 6% per tahun. Berapa dana saat pensiun?</p>
<p><b>Diketahui:</b> \(A=500.000\), \(n=240\), \(i=\frac{6\%}{12}=0{,}005\).</p>
<p><b>Penyelesaian:</b> \(FV=500.000\times\dfrac{1{,}005^{240}-1}{0{,}005}=500.000\times462{,}0409\approx\) <b>Rp231.020.448</b>.</p></div>
<h2>5. Asuransi dan premi</h2>
<p>Asuransi adalah perjanjian: nasabah membayar premi, perusahaan menanggung kerugian finansial akibat risiko. Dua klasifikasi utama: <b>asuransi jiwa</b> (risiko kematian, sakit) dan <b>asuransi umum</b> (kerusakan harta benda dan risiko lain). Bila premi dibayar mencicil di awal bulan, pakai anuitas awal.</p>
<div class="soal"><p><b>Soal.</b> Pak Rahmat membeli asuransi mobil All Risk 1 tahun, premi total Rp6.000.000, dibayar dengan 12 angsuran di awal tiap bulan, bunga 1% per bulan. Berapa angsuran per bulan?</p>
<p><b>Penyelesaian:</b> Premi total diperlakukan sebagai nilai sekarang: \(6.000.000=R\,\ddot a_{\overline{12}|}\). \(\ddot a_{\overline{12}|}=1{,}01\times a_{\overline{12}|}=1{,}01\times11{,}25508=11{,}36763\). \(R=\dfrac{6.000.000}{11{,}36763}\approx\) <b>Rp527.815</b>.</p>
⟦catatan|Soal di slide tidak mencantumkan pertanyaan. Di sini diasumsikan yang dicari adalah angsuran bulanan dan Rp6.000.000 adalah premi bila dibayar tunai.⟧</div>
<h2>6. Pembayaran sewa (leasing)</h2>
<p>Angsuran tetap sepanjang kontrak, tetapi komposisinya berubah: awalnya porsi bunga besar dan pokok kecil, menjelang akhir porsi pokok membesar. Rumus angsuran:</p>
\[A=P\,\frac{i(1+i)^n}{(1+i)^n-1}=\frac{P}{a_{\overline n|}}\]
<div class="soal"><p><b>Soal.</b> Bayu membeli mobil Rp300.000.000 lewat leasing, uang muka Rp60.000.000, sisa Rp240.000.000 selama 36 bulan, bunga efektif 1% per bulan. Berapa angsuran tetap per bulan?</p>
<p><b>Penyelesaian:</b> \(A=\dfrac{240.000.000\times0{,}01\times1{,}01^{36}}{1{,}01^{36}-1}=\dfrac{240.000.000}{30{,}1075}\approx\) <b>Rp7.971.434</b> per bulan. Bulan pertama: bunga Rp2.400.000 dan pokok Rp5.571.434.</p></div>
⟦kes|Semua penerapan memakai satu pola: \(PV=R\,a_{\overline n|}\) untuk pinjaman dan \(FV=R\,s_{\overline n|}\) untuk tabungan. Yang berbeda hanya apa yang diketahui dan apa yang dicari.⟧`},

{id:"tsb-4", t:"Perpetuitas (Kelompok 4)", h:String.raw`<h2>Apa itu perpetuitas?</h2>
<p>[[perpet|Perpetuitas]] adalah aliran pembayaran atau penerimaan tetap yang berlangsung selamanya (tidak berakhir). Contohnya beasiswa abadi (penerimaan): Jason menanam Rp1.000.000 pada bunga 10% per tahun dan mengambil bunganya, Rp100.000 per tahun, tanpa mengurangi pokok. Contoh lain donasi abadi (pembayaran): yayasan menanam Rp500.000.000 pada bunga 10% sehingga bisa menyumbang Rp50.000.000 setiap tahun selamanya.</p>
<div class="treewrap"><div class="tree"><div class="tr-node root">Perpetuitas</div><div class="tr-kids">
<div class="tr-kid"><div class="tr-node cond">Tetap</div><div class="tr-kids">
<div class="tr-kid"><div class="tr-node ok">Akhir periode: \(\dfrac{K}{i}\)</div></div>
<div class="tr-kid"><div class="tr-node ok">Awal periode: \(K\dfrac{1+i}{i}=\dfrac{K}{d}\)</div></div>
<div class="tr-kid"><div class="tr-node ok">Ditunda \(m\): \(v^m\times\) (rumus di atas)</div></div></div></div>
<div class="tr-kid"><div class="tr-node cond">Bertumbuh geometrik</div><div class="tr-kids"><div class="tr-kid"><div class="tr-node ok">\(\dfrac{K}{i-g}\), syarat \(g&lt;i\)</div></div></div></div>
<div class="tr-kid"><div class="tr-node cond">Berubah aritmetika</div><div class="tr-kids">
<div class="tr-kid"><div class="tr-node ok">Naik: \(\dfrac{P}{i}+\dfrac{Q}{i^2}\)</div></div>
<div class="tr-kid"><div class="tr-node ok">Turun: \(\dfrac{P}{i}-\dfrac{Q}{i^2}\)</div></div></div></div>
</div></div></div>
<h2>Perpetuitas akhir (perpetuity-immediate)</h2>
<p>Pembayaran di akhir tiap periode, selamanya; pembayaran pertama satu periode dari sekarang.</p>
⟦waktu|0,1,2,3,4,⋯||1:K;2:K;3:K;4:K|5:berlangsung selamanya⟧
⟦langkah|1|Jumlahkan nilai sekarang tiap pembayaran \(K=1\)|\(a_{\infty}=v+v^2+v^3+\cdots\)⟧
⟦langkah|2|Deret geometri tak hingga \(S=\dfrac{a_1}{1-r}\)|\(a_{\infty}=\dfrac{v}{1-v}=\dfrac{\frac1{1+i}}{1-\frac1{1+i}}=\dfrac{1}{(1+i)-1}\)⟧
⟦langkah|3|Hasil|\(a_{\infty}=\dfrac1i\), sehingga \(PV=\dfrac{K}{i}\)⟧
<div class="soal"><p><b>Soal.</b> Seseorang menerima Rp2.000.000 tiap tahun selamanya, bunga 10%. Berapa nilai sekarangnya?</p>
<p><b>Penyelesaian:</b> \(PV=\dfrac{2.000.000}{0{,}1}=\) <b>Rp20.000.000</b>.</p></div>
<h2>Perpetuitas awal (perpetuity-due)</h2>
<p>Pembayaran di awal tiap periode; pembayaran pertama segera (sekarang).</p>
⟦waktu|0,1,2,3,4,⋯||0:K;1:K;2:K;3:K;4:K|5:berlangsung selamanya⟧
\[\ddot a_\infty=1+v+v^2+\cdots=\frac{1}{1-v}=\frac1d=\frac{1+i}{i}=(1+i)\,a_\infty,\qquad PV=K\,\frac{1+i}{i}\]
<div class="soal"><p><b>Soal.</b> Pensiunan menerima Rp1.500.000 di awal tiap bulan selamanya, bunga 12% per tahun, dibungakan bulanan (\(i=1\%\) per bulan).</p>
<p><b>Penyelesaian:</b> \(PV=1.500.000\times\dfrac{1{,}01}{0{,}01}=1.500.000\times101=\) <b>Rp151.500.000</b>.</p></div>
<h2>Perpetuitas bertumbuh</h2>
<p>[[gperp|Perpetuitas bertumbuh]] membayar di akhir tiap periode, dan jumlahnya naik dengan tingkat \(g\) yang konstan. Cocok untuk menilai aset yang pendapatannya ikut inflasi atau pertumbuhan bisnis.</p>
\[PV=\sum_{n=1}^{\infty}\frac{K(1+g)^{n-1}}{(1+i)^n}=\frac{K}{i-g},\qquad g&lt;i\]
<p>Tingkat \(g\) bisa berasal dari ketetapan manajemen, atau dari rasio retensi dan [[roe|ROE]]:</p>
⟦langkah|1|Rasio retensi|\(b=1-d\) (\(d\) = rasio dividen)⟧
⟦langkah|2|Return on equity|\(ROE=\dfrac{\text{Net income}}{\text{Total equity}}\)⟧
⟦langkah|3|Tingkat pertumbuhan|\(g=b\cdot ROE\)⟧
<div class="soal"><p><b>Soal.</b> Perusahaan membagi bonus mulai tahun ini $1.000 (\(K_0\)), naik konstan sesuai pertumbuhan perusahaan, bunga 22%. Net income $100.000, dividen 40%, total ekuitas $500.000. Berapa nilai bonus saat ini?</p>
<p><b>Penyelesaian:</b> \(b=1-0{,}4=0{,}6\); \(ROE=\frac{100.000}{500.000}=0{,}2\); \(g=0{,}6\times0{,}2=0{,}12\). \(K_1=1.000(1{,}12)=1.120\). \(PV=\dfrac{1.120}{0{,}22-0{,}12}=\) <b>$11.200</b>.</p>
⟦catatan|Di slide tertulis "b = 40% = 0,6". Yang benar: dividen \(d=40\%\), sehingga retensi \(b=60\%=0{,}6\).⟧</div>
<h2>Perpetuitas tertunda</h2>
<p>Pembayaran pertama baru dimulai setelah masa tunda \(m\) periode: ordinary \(PV=v^m\dfrac{K}{i}\), due \(PV=v^m\dfrac{K}{d}\).</p>
⟦waktu|0,1,⋯,9,10,11,12,⋯||4:K;5:K;6:K|2:masa tunda \(m=9\)⟧
<div class="soal"><p><b>Soal 1 (ordinary).</b> Investasi membayar $200 per tahun selamanya, pembayaran pertama di akhir tahun ke-10, imbal hasil 8%. Berapa nilai sekarangnya?</p>
<p><b>Penyelesaian:</b> \(m=9\). \(PV=v^9\dfrac{200}{0{,}08}=0{,}500249\times2.500=\) <b>$1.250,62</b> (pilihan a, $1.250).</p></div>
<div class="soal"><p><b>Soal 2 (due).</b> Perusahaan membayar $10.000 per tahun selamanya, mulai 5 tahun dari sekarang, pembayaran pertama di awal tahun ke-5, bunga 8%. Berapa nilai sekarangnya?</p>
<p><b>Penyelesaian:</b> \(m=4\); \(d=\frac{0{,}08}{1{,}08}=0{,}074074\). \(PV=v^4\dfrac{10.000}{d}=0{,}735030\times135.000\approx\) <b>$99.229,03</b>.</p></div>
<h2>Perpetuitas berubah secara aritmetika</h2>
<p>Pembayaran pertama \(P\), lalu berubah sebesar \(Q\) tiap periode. Turunannya memakai \(\lim_{n\to\infty}(Ia)_{\overline n|}\); suku \(nv^n\) menuju 0.</p>
<svg viewBox="0 0 640 200" role="img" aria-label="Pembayaran naik dan turun secara aritmetika"><text x="150" y="20" style="fill:var(--ink);font:700 14px Inter,system-ui,sans-serif;text-anchor:middle">Naik: P, P+Q, P+2Q, …</text><text x="480" y="20" style="fill:var(--ink);font:700 14px Inter,system-ui,sans-serif;text-anchor:middle">Turun: P, P−Q, P−2Q, …</text>
<line x1="30" y1="170" x2="290" y2="170" style="stroke:var(--muted);stroke-width:2"/><line x1="350" y1="170" x2="610" y2="170" style="stroke:var(--muted);stroke-width:2"/>
<rect x="45" y="130" width="34" height="40" style="fill:var(--accent)"/><rect x="95" y="110" width="34" height="60" style="fill:var(--accent)"/><rect x="145" y="90" width="34" height="80" style="fill:var(--accent)"/><rect x="195" y="70" width="34" height="100" style="fill:var(--accent)"/><rect x="245" y="50" width="34" height="120" style="fill:var(--accent)"/>
<rect x="365" y="50" width="34" height="120" style="fill:var(--red)"/><rect x="415" y="70" width="34" height="100" style="fill:var(--red)"/><rect x="465" y="90" width="34" height="80" style="fill:var(--red)"/><rect x="515" y="110" width="34" height="60" style="fill:var(--red)"/><rect x="565" y="130" width="34" height="40" style="fill:var(--red)"/>
<text x="62" y="190" style="fill:var(--muted);font:600 13px Inter,system-ui,sans-serif;text-anchor:middle">1</text><text x="112" y="190" style="fill:var(--muted);font:600 13px Inter,system-ui,sans-serif;text-anchor:middle">2</text><text x="162" y="190" style="fill:var(--muted);font:600 13px Inter,system-ui,sans-serif;text-anchor:middle">3</text><text x="212" y="190" style="fill:var(--muted);font:600 13px Inter,system-ui,sans-serif;text-anchor:middle">4</text><text x="262" y="190" style="fill:var(--muted);font:600 13px Inter,system-ui,sans-serif;text-anchor:middle">5</text>
<text x="382" y="190" style="fill:var(--muted);font:600 13px Inter,system-ui,sans-serif;text-anchor:middle">1</text><text x="432" y="190" style="fill:var(--muted);font:600 13px Inter,system-ui,sans-serif;text-anchor:middle">2</text><text x="482" y="190" style="fill:var(--muted);font:600 13px Inter,system-ui,sans-serif;text-anchor:middle">3</text><text x="532" y="190" style="fill:var(--muted);font:600 13px Inter,system-ui,sans-serif;text-anchor:middle">4</text><text x="582" y="190" style="fill:var(--muted);font:600 13px Inter,system-ui,sans-serif;text-anchor:middle">5</text></svg>
<table><tr><th>Kasus</th><th>Rumus nilai sekarang</th></tr>
<tr><td>Akhir, naik</td><td>\(\dfrac{P}{i}+\dfrac{Q}{i^2}\)</td></tr>
<tr><td>Awal, naik</td><td>\(\Big(\dfrac{P}{i}+\dfrac{Q}{i^2}\Big)(1+i)\)</td></tr>
<tr><td>Akhir, turun</td><td>\(\dfrac{P}{i}-\dfrac{Q}{i^2}\)</td></tr>
<tr><td>Awal, turun</td><td>\(\Big(\dfrac{P}{i}-\dfrac{Q}{i^2}\Big)(1+i)\)</td></tr></table>
<div class="soal"><p><b>Soal 1 (akhir, naik).</b> Perpetuitas akhir membayar Rp1 juta tahun pertama, lalu naik Rp2 juta tiap tahun (1, 3, 5, … juta). Bunga 5%.</p>
<p><b>Penyelesaian:</b> \(PV=\dfrac{1.000.000}{0{,}05}+\dfrac{2.000.000}{0{,}05^2}=20.000.000+800.000.000=\) <b>Rp820.000.000</b>.</p></div>
<div class="soal"><p><b>Soal 2 (awal, naik).</b> Beasiswa abadi: Rp2.000.000 di awal tahun pertama, naik Rp150.000 tiap tahun, bunga 8%. Berapa dana abadi yang harus disediakan?</p>
<p><b>Penyelesaian:</b> \(PV=\Big(\dfrac{2.000.000}{0{,}08}+\dfrac{150.000}{0{,}0064}\Big)(1{,}08)=(25.000.000+23.437.500)(1{,}08)=\) <b>Rp52.312.500</b>.</p></div>
<div class="soal"><p><b>Soal 3 (akhir, turun).</b> Royalti buku $15.000 di akhir tahun pertama, turun $500 tiap tahun, bunga 10%.</p>
<p><b>Penyelesaian:</b> \(PV=\dfrac{15.000}{0{,}1}-\dfrac{500}{0{,}01}=150.000-50.000=\) <b>$100.000</b>.</p></div>
<div class="soal"><p><b>Soal 4 (awal, turun).</b> Dana abadi air bersih: $10.000 di awal tahun pertama, turun $250 tiap tahun, bunga 5%.</p>
<p><b>Penyelesaian:</b> \(PV=\Big(\dfrac{10.000}{0{,}05}-\dfrac{250}{0{,}0025}\Big)(1{,}05)=(200.000-100.000)(1{,}05)=\) <b>$105.000</b>.</p></div>
⟦catatan|Rumus perpetuitas turun adalah hasil matematis dari deret tak hingga. Pada kenyataannya pembayaran yang terus turun akan menjadi negatif (pada Soal 3 setelah tahun ke-30), jadi model ini hanya masuk akal bila penurunan dihentikan di nol.⟧
<h2>Anuitas dengan waktu tidak diketahui</h2>
<p>Bila jumlah periode \(n\) tidak diketahui, ubah rumus menjadi logaritma.</p>
\[PV=K\,a_{\overline n|}\ \Rightarrow\ n=\frac{-\log\!\big(1-\frac{PV\cdot i}{K}\big)}{\log(1+i)},\qquad FV=K\,s_{\overline n|}\ \Rightarrow\ n=\frac{\log\!\big(\frac{FV\cdot i}{K}+1\big)}{\log(1+i)}\]
<div class="soal"><p><b>Soal 1 (PV).</b> Dana pensiun bernilai sekarang Rp150.000.000, Pak Budi menerima Rp2.000.000 per bulan, bunga 0,8% per bulan. Berapa lama dana cukup?</p>
<p><b>Penyelesaian:</b> \(n=\dfrac{-\log(1-0{,}6)}{\log1{,}008}=\dfrac{0{,}39794}{0{,}0034605}\approx115\) bulan, yaitu 9 tahun 7 bulan.</p></div>
<div class="soal"><p><b>Soal 2 (FV).</b> Dea menabung Rp2.000.000 di akhir tiap bulan, bunga 10% per tahun (\(i=\frac{10\%}{12}\) per bulan), target Rp25.000.000.</p>
<p><b>Penyelesaian:</b> \(n=\dfrac{\log(25.000.000\times0{,}008333/2.000.000+1)}{\log1{,}008333}=\dfrac{\log1{,}1042}{\log1{,}008333}\approx11{,}94\), dibulatkan <b>12 bulan</b>.</p></div>
⟦catatan|Syarat Soal 1: \(\frac{PV\cdot i}{K}<1\). Bila \(PV\cdot i\ge K\), bunga saja sudah cukup membayar \(K\) dan dana tidak pernah habis (perpetuitas).⟧
⟦kes|Perpetuitas awal selalu lebih bernilai daripada perpetuitas akhir (faktor \(1+i\)). Aliran kas yang naik tiap periode bernilai lebih tinggi daripada yang tetap, yang turun bernilai lebih rendah. Syarat \(g&lt;i\) wajib untuk perpetuitas bertumbuh.⟧`},

{id:"tsb-5", t:"Periode bayar ≠ periode bunga, dan pembayaran bervariasi (Kelompok 5)", h:String.raw`<h2>Periode pembayaran berbeda dari periode konversi bunga</h2>
<p>Sampai sekarang periode pembayaran sama dengan periode bunga. Bila berbeda, ada dua cara: ubah suku bunga ke periode pembayaran (\((1+j)^{m}=1+i\)), atau gunakan rumus khusus di bawah. Lihat [[frek|periode bayar ≠ periode konversi]].</p>
<div class="treewrap"><div class="tree"><div class="tr-node root">Bandingkan periode bayar dan periode bunga</div><div class="tr-kids">
<div class="tr-kid"><div class="tr-node cond">Bayar lebih jarang<small><br>mis. bayar tahunan, bunga bulanan</small></div><div class="tr-kids">
<div class="tr-kid"><div class="tr-node ok">Akhir: \(R\dfrac{a_{\overline n|}}{s_{\overline k|}}\)</div></div>
<div class="tr-kid"><div class="tr-node ok">Awal: \(R\dfrac{a_{\overline n|}}{a_{\overline k|}}\)</div></div></div></div>
<div class="tr-kid"><div class="tr-node cond">Bayar lebih sering<small><br>mis. bayar bulanan, bunga tahunan</small></div><div class="tr-kids">
<div class="tr-kid"><div class="tr-node ok">Akhir: \(a_{\overline n|}^{(m)}=\dfrac{1-v^n}{i^{(m)}}\)</div></div>
<div class="tr-kid"><div class="tr-node ok">Awal: \(\ddot a_{\overline n|}^{(m)}=\dfrac{1-v^n}{d^{(m)}}\)</div></div></div></div>
</div></div></div>
<h2>Pembayaran lebih jarang daripada konversi bunga</h2>
<p>Notasi: \(k\) = jumlah periode konversi bunga dalam satu periode pembayaran; \(n\) = total periode konversi selama anuitas; jumlah pembayaran \(=n/k\); \(i\) = suku bunga per periode konversi.</p>
⟦waktu|0,1,2,3,4,5,6,7,8||4:R;8:R|4:\(k=4\) periode bunga per pembayaran;8:pembayaran di akhir tiap \(k\) periode⟧
<h3>Anuitas akhir (immediate)</h3>
<p>Pembayaran \(R\) di waktu \(k,2k,\dots,n\). Jumlahkan deret geometri dengan rasio \(v^k\):</p>
\[PV=R\big(v^k+v^{2k}+\cdots+v^{n}\big)=R\,\frac{v^k(1-v^n)}{1-v^k}=R\,\frac{a_{\overline n|}}{s_{\overline k|}},\qquad AV=R\,\frac{s_{\overline n|}}{s_{\overline k|}}\]
<h3>Anuitas awal (due)</h3>
<p>Pembayaran \(R\) di waktu \(0,k,2k,\dots,n-k\):</p>
\[PV=R\big(1+v^k+\cdots+v^{n-k}\big)=R\,\frac{a_{\overline n|}}{a_{\overline k|}},\qquad AV_n=R\,\frac{s_{\overline n|}}{a_{\overline k|}}\]
<p>Nilai akumulasi di waktu \(n\) ini jatuh \(k\) periode setelah pembayaran terakhir.</p>
⟦catatan|Di slide Kelompok 5 bagian "analisis", anuitas immediate diberi label "anuitas awal" dan annuity-due diberi label "anuitas akhir". Itu tertukar. Immediate = akhir periode, due = awal periode.⟧
<div class="soal"><p><b>Soal 1.</b> Akumulasi 18 tahun setelah pembayaran pertama: 8 pembayaran Rp2.000 sekali tiap akhir dua tahun, bunga 7% convertible semiannually.</p>
<p><b>Diketahui:</b> \(k=4\) semester per pembayaran, \(n=32\) semester, \(i=3{,}5\%\).</p>
<p><b>Penyelesaian:</b> Pembayaran jatuh di tahun 2, 4, …, 16. Nilai di tahun 16: \(2.000\,\dfrac{s_{\overline{32}|}}{s_{\overline4|}}=2.000\,\dfrac{57{,}3345}{4{,}2149}\approx27.205{,}35\). Nilai di tahun 18 (4 semester kemudian): \(27.205{,}35\times1{,}035^4\approx\) <b>31.219</b>.</p>
⟦catatan|Soal tidak menyebut kapan pembayaran pertama. Di sini diasumsikan akhir tahun ke-2, sehingga 18 tahun setelah pembayaran pertama diartikan akhir tahun ke-18 (4 semester setelah pembayaran terakhir). Hasil bisa berbeda bila pembayaran pertama diasumsikan di waktu 0.⟧</div>
<h2>Pembayaran lebih sering daripada konversi bunga</h2>
<p>Dibayar \(m\) kali per periode bunga, masing-masing \(\frac1m\). Dengan \(i^{(m)}=m\big[(1+i)^{1/m}-1\big]\) dan \(d^{(m)}=m\big[1-v^{1/m}\big]\):</p>
\[a_{\overline n|}^{(m)}=\frac{1-v^n}{i^{(m)}},\quad s_{\overline n|}^{(m)}=\frac{(1+i)^n-1}{i^{(m)}},\quad \ddot a_{\overline n|}^{(m)}=\frac{1-v^n}{d^{(m)}},\quad \ddot s_{\overline n|}^{(m)}=\frac{(1+i)^n-1}{d^{(m)}}\]
<p>Perpetuitas: \(a_\infty^{(m)}=\dfrac1{i^{(m)}}\) dan \(\ddot a_\infty^{(m)}=\dfrac1{d^{(m)}}\).</p>
<div class="soal"><p><b>Soal 1 (tabungan bulanan).</b> Menabung Rp500.000 tiap akhir bulan selama 2 tahun, bunga nominal 6% dikonversi semesteran (\(m=2\)). Nilai akumulasi di akhir tahun ke-2?</p>
<p><b>Penyelesaian:</b> Bunga per semester 3%, jadi bunga bulanan \(j=1{,}03^{1/6}-1=0{,}493862\%\). \(AV=500.000\,s_{\overline{24}|j}=500.000\times\dfrac{1{,}03^{4}-1}{0{,}00493862}\approx\) <b>Rp12.706.865</b>.</p></div>
<div class="soal"><p><b>Soal 2 (PV).</b> Investor menerima Rp1.000.000 tiap akhir 6 bulan selama 4 tahun, bunga 10% per tahun dikonversi tahunan.</p>
<p><b>Penyelesaian:</b> Total Rp2.000.000 per tahun: \(PV=2.000.000\,a_{\overline4|}^{(2)}=2.000.000\times\dfrac{1-1{,}1^{-4}}{2(1{,}1^{1/2}-1)}=2.000.000\times3{,}24722\approx\) <b>Rp6.494.448</b>.</p></div>
<h2>Pembayaran bervariasi: deret aritmetika</h2>
<p>Ada 4 kasus menurut perubahan pembayaran dan waktunya:</p>
<table><tr><th></th><th>Dibayar di akhir periode</th><th>Dibayar di awal periode</th></tr>
<tr><td>Naik tiap periode</td><td>akhir meningkat</td><td>awal meningkat</td></tr>
<tr><td>Turun tiap periode</td><td>akhir menurun</td><td>awal menurun</td></tr></table>
<svg viewBox="0 0 640 170" role="img" aria-label="Arus kas naik dan turun"><line x1="30" y1="140" x2="610" y2="140" style="stroke:var(--muted);stroke-width:2"/>
<rect x="60" y="100" width="40" height="40" style="fill:var(--accent)"/><rect x="130" y="80" width="40" height="60" style="fill:var(--accent)"/><rect x="200" y="60" width="40" height="80" style="fill:var(--accent)"/><text x="170" y="30" style="fill:var(--ink);font:700 14px Inter,system-ui,sans-serif;text-anchor:middle">Increasing: P, P+Q, P+2Q</text>
<rect x="380" y="40" width="40" height="100" style="fill:var(--red)"/><rect x="450" y="60" width="40" height="80" style="fill:var(--red)"/><rect x="520" y="80" width="40" height="60" style="fill:var(--red)"/><text x="470" y="30" style="fill:var(--ink);font:700 14px Inter,system-ui,sans-serif;text-anchor:middle">Decreasing: P, P−Q, P−2Q</text></svg>
<h3>Umum: pembayaran pertama \(P\), perubahan \(Q\) tiap periode</h3>
\[PV=P\,a_{\overline n|}+Q\,\frac{a_{\overline n|}-nv^n}{i}\ \text{(naik)},\qquad PV=P\,a_{\overline n|}-Q\,\frac{a_{\overline n|}-nv^n}{i}\ \text{(turun)}\]
<p>Untuk anuitas awal, kalikan dengan \((1+i)\). Nilai akumulasi: \(AV=PV\,(1+i)^n\).</p>
<h3>Kasus khusus: pembayaran 1, 2, 3, …</h3>
\[(Ia)_{\overline n|}=\frac{\ddot a_{\overline n|}-nv^n}{i},\qquad (Da)_{\overline n|}=\frac{n-a_{\overline n|}}{i}\]
<div class="soal"><p><b>Soal.</b> Pembayaran 1, 2, 3 di akhir tahun ke-1, 2, 3 dengan bunga 5%. Berapa nilai sekarangnya?</p>
<p><b>Penyelesaian:</b> \((Ia)_{\overline3|}=\dfrac{1{,}05\times2{,}723248-3(1{,}05)^{-3}}{0{,}05}\approx5{,}3580\). Cek langsung: \(\frac1{1{,}05}+\frac2{1{,}05^2}+\frac3{1{,}05^3}=0{,}9524+1{,}8141+2{,}5915=5{,}3580\).</p></div>
<h2>Pembayaran bervariasi: deret geometri</h2>
<p>Pembayaran pertama \(P\) di akhir periode 1, lalu naik dengan faktor \((1+k)\) tiap periode (\(P,P(1+k),P(1+k)^2,\dots\)).</p>
\[PV=P\,\frac{1-\big(\frac{1+k}{1+i}\big)^{n}}{i-k}\ (k\ne i),\qquad PV=\frac{nP}{1+i}\ (k=i),\qquad AV=PV(1+i)^n\]
<p>Anuitas awal (jatuh tempo): kalikan dengan \((1+i)\). Perpetuitas akhir: \(PV=\dfrac{P}{i-k}\) dengan syarat \(k&lt;i\) (bila \(k\ge i\), nilainya divergen).</p>
⟦catatan|Di bab ini \(k\) dipakai untuk tingkat pertumbuhan (deret geometri) dan untuk jumlah periode konversi per pembayaran (bagian "lebih jarang"). Di bab Perpetuitas, tingkat pertumbuhan ditulis \(g\).⟧
<div class="soal"><p><b>Soal 1 (akhir).</b> Investor membayar di akhir tiap tahun selama 10 tahun: Rp5.000.000 di tahun pertama, naik 4% tiap tahun. Bunga efektif 7%. Hitung PV dan AV di akhir tahun ke-10.</p>
<p><b>Penyelesaian:</b> \(PV=5.000.000\,\dfrac{1-(1{,}04/1{,}07)^{10}}{0{,}07-0{,}04}\approx\) <b>Rp41.253.144</b>. \(AV=PV\,(1{,}07)^{10}\approx\) <b>Rp81.151.179</b>.</p></div>
<div class="soal"><p><b>Soal 2 (awal).</b> Karyawan menyetor Rp8.000.000 di awal tiap tahun selama 20 tahun, bunga 6%.</p>
<p><b>Penyelesaian:</b> \(PV=8.000.000\,\ddot a_{\overline{20}|}\approx\) <b>Rp97.264.932</b>; \(AV=8.000.000\,\ddot s_{\overline{20}|}\approx\) <b>Rp311.941.813</b>.</p></div>
<div class="soal"><p><b>Soal 3 (perpetuitas).</b> Sumbangan abadi: Rp100.000 di akhir tahun 1, naik 2% per tahun, bunga 5%.</p>
<p><b>Penyelesaian:</b> \(PV=\dfrac{100.000}{0{,}05-0{,}02}\approx\) <b>Rp3.333.333</b>.</p></div>
⟦kes|Kunci bab ini: samakan dulu periode bunga dan periode bayar (hitung \(k\) atau \(m\)), lalu pakai pola deret geometri. Untuk pembayaran bervariasi, pisahkan bagian tetap \(P\,a_{\overline n|}\) dan bagian perubahan \(Q\,\dfrac{a_{\overline n|}-nv^n}{i}\).⟧`},

{id:"tsb-6", t:"Anuitas kontinu dan variasi umum (Kelompok 6)", h:String.raw`<h2>Anuitas kontinu</h2>
<p>[[akont|Anuitas kontinu]] adalah model teoretis: pembayaran mengalir terus-menerus pada setiap saat, bukan di titik-titik diskret. \(X\) adalah laju pembayaran per satuan waktu (konstan), bukan jumlah yang menumpuk. Bunga juga dihitung kontinu dengan [[nominal|force of interest]] \(\delta\).</p>
<svg viewBox="0 0 640 200" role="img" aria-label="Aliran pembayaran kontinu sepanjang waktu"><rect x="60" y="60" width="480" height="100" style="fill:var(--chip);stroke:var(--accent);stroke-width:2"/>
<line x1="40" y1="160" x2="590" y2="160" style="stroke:var(--ink);stroke-width:2"/><line x1="60" y1="40" x2="60" y2="170" style="stroke:var(--ink);stroke-width:2"/>
<text x="60" y="185" style="fill:var(--ink);font:600 14px Inter,system-ui,sans-serif;text-anchor:middle">0</text><text x="540" y="185" style="fill:var(--ink);font:600 14px Inter,system-ui,sans-serif;text-anchor:middle">n</text>
<text x="50" y="112" style="fill:var(--accent);font:700 15px Inter,system-ui,sans-serif;text-anchor:end">X</text>
<text x="300" y="116" style="fill:var(--ink);font:700 15px Inter,system-ui,sans-serif;text-anchor:middle">luas = total yang mengalir = Xn (belum didiskonto)</text></svg>
<h3>Nilai sekarang</h3>
<p>Aliran kecil \(X\,dt\) pada waktu \(t\) didiskonto dengan \(e^{-\delta t}\), lalu dijumlahkan dengan integral:</p>
\[\bar a_{\overline n|}=\int_0^n e^{-\delta t}\,dt=\frac{1-e^{-\delta n}}{\delta}=\frac{1-v^n}{\delta},\qquad PV=X\,\bar a_{\overline n|}\]
<div class="soal"><p><b>Soal.</b> Donasi rumah sakit mengalir kontinu Rp75.000.000 per tahun selama 6 tahun, \(\delta=7\%\). Nilai kini?</p>
<p><b>Penyelesaian:</b> \(PV=75.000.000\times\dfrac{1-e^{-0{,}42}}{0{,}07}=75.000.000\times4{,}89933\approx\) <b>Rp367.449.836</b>.</p></div>
<h3>Nilai akumulasi</h3>
\[\bar s_{\overline n|}=\int_0^n e^{\delta(n-t)}\,dt=\frac{e^{\delta n}-1}{\delta}=\frac{(1+i)^n-1}{\delta},\qquad AV=X\,\bar s_{\overline n|}\]
<p>Hubungan dengan anuitas diskret: \(\bar a_{\overline n|}=\dfrac{i}{\delta}\,a_{\overline n|}\) dan \(\bar s_{\overline n|}=\dfrac{i}{\delta}\,s_{\overline n|}\).</p>
<div class="soal"><p><b>Soal.</b> Perusahaan menyisihkan dana kontinu Rp5.000.000 per tahun selama 8 tahun, bunga efektif 6%. Nilai akumulasi di akhir tahun ke-8?</p>
<p><b>Penyelesaian:</b> \(\delta=\ln1{,}06=0{,}0582689\). \(AV=5.000.000\times\dfrac{1{,}06^{8}-1}{0{,}0582689}=5.000.000\times10{,}1914\approx\) <b>Rp50.957.543</b>.</p></div>
<h2>Variasi anuitas yang lebih umum</h2>
<p>Masalah utamanya: periode pembayaran tidak sama dengan periode konversi bunga. Dua kondisi: pembayaran lebih jarang, atau lebih sering. Rumusnya sama dengan bab sebelumnya (Kelompok 5).</p>
<h3>Pembayaran lebih jarang</h3>
\[PV=A\,\frac{a_{\overline n|}}{s_{\overline k|}}\qquad(k=\text{periode bunga per pembayaran})\]
<div class="soal"><p><b>Soal.</b> Perusahaan harus membayar pokok Rp40.000.000 tiap akhir tahun selama 5 tahun (total Rp200.000.000), bunga dihitung bulanan dengan nominal 12% (\(i=1\%\) per bulan). Hitung nilai sekarang seluruh pembayaran.</p>
<p><b>Diketahui:</b> \(A=\frac{200.000.000}{5}=40.000.000\), \(n=60\), \(k=12\), \(i=0{,}01\).</p>
<p><b>Penyelesaian:</b> \(PV=40.000.000\times\dfrac{a_{\overline{60}|}}{s_{\overline{12}|}}=40.000.000\times\dfrac{44{,}9550}{12{,}6825}\approx\) <b>Rp141.786.013</b>.</p>
⟦catatan|Nilai ini lebih kecil dari pinjaman Rp200.000.000 karena slide hanya menghitung PV dari pembayaran pokok. Pinjaman sebenarnya akan memuat pula bunga.⟧</div>
<h3>Pembayaran lebih sering</h3>
<p>Contoh: cicilan bulanan dengan bunga efektif tahunan. Yang penting adalah cara kenaikan pembayaran.</p>
<div class="treewrap"><div class="tree"><div class="tr-node root">Pembayaran bertambah, lebih sering dari periode bunga</div><div class="tr-kids">
<div class="tr-kid"><div class="tr-node cond">Naik antar periode<small><br>tetap dalam satu tahun, naik tahun berikutnya</small></div><div class="tr-kids"><div class="tr-kid"><div class="tr-node ok">\(PV=P\dfrac{i}{i^{(m)}}(Ia)_{\overline n|}\)</div></div></div></div>
<div class="tr-kid"><div class="tr-node cond">Naik tiap pembayaran<small><br>bulan 1 bayar 1, bulan 2 bayar 2, ...</small></div><div class="tr-kids"><div class="tr-kid"><div class="tr-node ok">\(PV=\dfrac{\ddot a_{\overline n|}^{(m)}-nv^n}{i^{(m)}}\times m^2\)<br>\(=(Ia)_{\overline{nm}|j}\), \(j=(1+i)^{1/m}-1\)</div></div></div></div>
</div></div></div>
<div class="soal"><p><b>Soal 1 (naik antar periode).</b> Ethan menabung 10 tahun: tahun 1 Rp100.000 per bulan, naik Rp100.000 per bulan tiap tahun. Bunga efektif 6%. Nilai sekarang?</p>
<p><b>Diketahui:</b> \(P=1.200.000\) (total tahun 1), \(i=6\%\), \(n=10\), \(m=12\), \(i^{(12)}=0{,}0584106\).</p>
<p><b>Penyelesaian:</b> \(PV=1.200.000\times\dfrac{0{,}06}{0{,}0584106}\times(Ia)_{\overline{10}|}\approx\) <b>Rp45.561.818</b>.</p></div>
<div class="soal"><p><b>Soal 2 (naik tiap pembayaran).</b> Pembayaran bulanan 5 tahun, bulan ke-\(t\) membayar \(t\) unit (1, 2, …, 60), bunga efektif 6% per tahun.</p>
<p><b>Penyelesaian:</b> Bunga bulanan \(j=1{,}06^{1/12}-1=0{,}486755\%\), \(PV=(Ia)_{\overline{60}|j}\approx\) <b>1.508,17</b>.</p>
⟦catatan|Slide memakai \(i^{(12)}=\frac{0{,}06}{12}=0{,}005\) padahal soal menyebut efektif tahunan 6%. Dengan \(j=0{,}005\) hasilnya 1.500,37. Itu benar hanya bila 6% adalah nominal convertible monthly.⟧</div>
<h2>Anuitas yang berubah secara kontinu</h2>
<p>Laju pembayaran pada waktu \(t\) adalah \(f(t)\), yang berubah seiring waktu dan mengalir kontinu:</p>
\[PV=\int_0^n f(t)\,v^t\,dt=\int_0^n f(t)\,e^{-\delta t}\,dt\]
<p>Kasus khusus laju naik linear \(f(t)=t\):</p>
\[(\bar I\bar a)_{\overline n|}=\int_0^n t\,e^{-\delta t}\,dt=\frac{\bar a_{\overline n|}-nv^n}{\delta}\]
<div class="soal"><p><b>Soal 1.</b> Mesin menghasilkan keuntungan bersih \(f(t)=500t\) per tahun, selama 10 tahun, \(\delta=0{,}06\). Nilai sekarang?</p>
<p><b>Penyelesaian:</b> \(PV=500\,\dfrac{\bar a_{\overline{10}|}-10e^{-0{,}6}}{0{,}06}=500\times\dfrac{7{,}51981-5{,}48812}{0{,}06}=500\times33{,}8612\approx\) <b>16.930,75</b>.</p></div>
<h3>Laju tumbuh eksponensial \(f(t)=Re^{gt}\)</h3>
\[PV=\int_0^n Re^{gt}e^{-\delta t}\,dt=R\,\frac{1-e^{-(\delta-g)n}}{\delta-g}\]
<div class="soal"><p><b>Soal 2.</b> Proyek membayar kontinu dengan laju awal \(R=100\) juta per tahun di \(t=0\), tumbuh \(g=3\%\) per tahun, selama \(n=5\) tahun, \(\delta=5\%\).</p>
<p><b>Penyelesaian:</b> \(PV=100\times\dfrac{1-e^{-0{,}02\times5}}{0{,}02}=100\times\dfrac{1-e^{-0{,}1}}{0{,}02}\approx\) <b>475,81 juta rupiah</b>.</p></div>
⟦kes|Anuitas kontinu adalah batas dari anuitas dengan pembayaran sangat sering (\(m\to\infty\)), sehingga \(i^{(m)}\to\delta\). Untuk laju \(f(t)\) yang berubah, kuncinya satu integral: kalikan \(f(t)\) dengan faktor diskonto \(e^{-\delta t}\) lalu integralkan dari 0 sampai \(n\).⟧`},

{id:"tsb-7", t:"Ringkasan dan peta memilih rumus", h:String.raw`<h2>Peta memilih rumus</h2>
<p>Mulailah dari jenis aliran pembayaran, lalu ikuti cabangnya sampai rumus nilai sekarang (atau akumulasi).</p>
<div class="treewrap"><div class="tree"><div class="tr-node root">Aliran pembayaran</div><div class="tr-kids">
<div class="tr-kid"><div class="tr-node cond">Tetap, \(n\) periode, periode bayar = periode bunga</div><div class="tr-kids">
<div class="tr-kid"><div class="tr-node ok">Akhir: \(R\,a_{\overline n|}\), \(R\,s_{\overline n|}\)</div></div>
<div class="tr-kid"><div class="tr-node ok">Awal: \(R\,\ddot a_{\overline n|}\), \(R\,\ddot s_{\overline n|}\)</div></div>
<div class="tr-kid"><div class="tr-node ok">Ditunda \(m\): \(v^m a_{\overline n|}\)</div></div>
<div class="tr-kid"><div class="tr-node ok">Setelah selesai \(m\): \(s_{\overline n|}(1+i)^m\)</div></div></div></div>
<div class="tr-kid"><div class="tr-node cond">Periode bayar ≠ periode bunga</div><div class="tr-kids">
<div class="tr-kid"><div class="tr-node ok">Lebih jarang: \(R\,a_{\overline n|}/s_{\overline k|}\)</div></div>
<div class="tr-kid"><div class="tr-node ok">Lebih sering: \(a^{(m)}_{\overline n|}\), \(i^{(m)}\)</div></div></div></div>
<div class="tr-kid"><div class="tr-node cond">Selamanya</div><div class="tr-kids">
<div class="tr-kid"><div class="tr-node ok">\(K/i\) (akhir), \(K/d\) (awal)</div></div>
<div class="tr-kid"><div class="tr-node ok">Bertumbuh \(g\): \(K/(i-g)\)</div></div></div></div>
<div class="tr-kid"><div class="tr-node cond">Berubah tiap periode</div><div class="tr-kids">
<div class="tr-kid"><div class="tr-node ok">Aritmetika: \(Pa_{\overline n|}\pm Q\frac{a_{\overline n|}-nv^n}{i}\)</div></div>
<div class="tr-kid"><div class="tr-node ok">Geometrik: \(P\frac{1-((1+k)/(1+i))^n}{i-k}\)</div></div></div></div>
<div class="tr-kid"><div class="tr-node cond">Mengalir kontinu</div><div class="tr-kids">
<div class="tr-kid"><div class="tr-node ok">Tetap: \(X\bar a_{\overline n|}=X\frac{1-e^{-\delta n}}{\delta}\)</div></div>
<div class="tr-kid"><div class="tr-node ok">Berubah: \(\int_0^n f(t)e^{-\delta t}dt\)</div></div></div></div>
</div></div></div>
<h2>Tabel ringkasan</h2>
<table><tr><th>Jenis</th><th>Nilai sekarang</th><th>Nilai akumulasi</th></tr>
<tr><td>Anuitas akhir</td><td>\(\dfrac{1-v^n}{i}\)</td><td>\(\dfrac{(1+i)^n-1}{i}\)</td></tr>
<tr><td>Anuitas awal</td><td>\(\dfrac{1-v^n}{d}\)</td><td>\(\dfrac{(1+i)^n-1}{d}\)</td></tr>
<tr><td>Ditunda \(m\)</td><td>\(v^m a_{\overline n|}\)</td><td>\(s_{\overline n|}(1+i)^m\) (setelah \(m\))</td></tr>
<tr><td>Perpetuitas akhir / awal</td><td>\(\dfrac1i\) / \(\dfrac1d\)</td><td>tidak ada</td></tr>
<tr><td>Perpetuitas bertumbuh</td><td>\(\dfrac{K}{i-g}\)</td><td>tidak ada</td></tr>
<tr><td>Kontinu</td><td>\(\dfrac{1-v^n}{\delta}\)</td><td>\(\dfrac{(1+i)^n-1}{\delta}\)</td></tr></table>
<h2>Hubungan antar-rumus</h2>
\[\ddot a_{\overline n|}=(1+i)a_{\overline n|}=1+a_{\overline{n-1}|},\qquad s_{\overline n|}=(1+i)^n a_{\overline n|},\qquad \bar a_{\overline n|}=\frac{i}{\delta}a_{\overline n|},\qquad a_\infty=\lim_{n\to\infty}a_{\overline n|}=\frac1i\]
⟦catatan|Urutan kerja yang aman: (1) gambar garis waktu, (2) tentukan akhir atau awal periode, (3) samakan periode bunga dan periode bayar, (4) pilih rumus, (5) periksa apakah hasil masuk akal (anuitas awal harus lebih besar dari anuitas akhir, nilai sekarang harus lebih kecil dari total pembayaran).⟧`}
]};
