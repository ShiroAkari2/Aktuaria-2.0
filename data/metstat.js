/* Metode Statistika. Bab 1-2, 5-7 diambil dari slide dosen (materi_metstat_1-5, Pekan 9-12).
   Bab 3, 4, 8, 9, 10 belum ada file dosennya: ringkasan umum, cocokkan dengan catatan kuliahmu. */
window.COURSES = window.COURSES || {};
COURSES.metstat = {t:"Metode Statistika", desc:"Statistika deskriptif, peubah acak, sebaran contoh, selang kepercayaan, uji hipotesis, uji-t, dan ANOVA.", ch:[
 {id:"metstat-1", t:"Pengantar statistika dan konsep dasar (Pekan 1)", h:String.raw`<h2>Statistik dan statistika</h2>
<p><i>Statistika</i> adalah ilmu tentang merencanakan, mengumpulkan, menganalisis, menafsirkan, dan menyajikan data. <i>Statistik</i> (tanpa "a") adalah ukuran yang dihitung dari sampel, misalnya rata-rata gaji 20 pegawai.</p>
<h2>Populasi dan sampel</h2>
<p>Seluruh objek yang diteliti adalah [[ms_pop|populasi]]; mendata seluruhnya disebut sensus. Karena mahal, kita mengambil [[ms_pop|sampel]] yang mewakili populasi, lalu menyimpulkan populasinya. Ukuran populasi disebut [[ms_param|parameter]] (\(\mu,\sigma^2,p\)), ukuran sampel disebut statistik (\(\bar x,s^2,\hat p\)).</p>
<h2>Dua cabang statistika</h2>
<p>[[ms_deskinf|Statistika deskriptif]] meringkas dan menyajikan data (tabel, grafik, rata-rata, simpangan baku). [[ms_deskinf|Statistika inferensial]] menyimpulkan populasi dari sampel (pendugaan, uji hipotesis, regresi, ANOVA).</p>
<h2>Variabel, skala, dan jenis data</h2>
<p>[[ms_skala|Skala pengukuran]]: nominal, ordinal, interval, rasio. Data dibedakan menurut sumber (primer, sekunder), sifat (kualitatif; kuantitatif yang diskrit = hasil menghitung dan kontinu = hasil mengukur), dan waktu (time series, cross section). Teknik pengumpulan: observasi, wawancara, kuesioner, studi literatur.</p>`},
 {id:"metstat-2", t:"Statistika deskriptif (Pekan 1)", h:String.raw`<h2>Penyajian data</h2>
<p>Data dalam jumlah besar disajikan sebagai [[ms_distfrek|distribusi frekuensi]], lalu digambar sebagai histogram, poligon, ogif, atau diagram batang. Frekuensi kumulatif "kurang dari" memakai tepi atas kelas, "lebih dari" memakai tepi bawah.</p>
<h2>Ukuran pemusatan</h2>
<p>[[ms_pusat|Mean, median, dan modus]]. Median data 7, 1, 5, 8, 3, 2: urutkan menjadi 1, 2, 3, 5, 7, 8, jadi median \(=(3+5)/2=4\). Median data 1, 2, 4, 6, 9 adalah 4 (nilai tengah).</p>
<h2>Kuartil, desil, persentil</h2>
<p>[[ms_kuartil|Kuartil]] membagi data terurut menjadi 4 bagian, desil 10 bagian, persentil 100 bagian. Untuk data tunggal: \(Q_2\) adalah median, \(Q_1\) median separuh kiri, \(Q_3\) median separuh kanan.</p>
<h2>Ukuran penyebaran</h2>
<p>Rentang \(=x_{maks}-x_{min}\); rentang interkuartil \(=Q_3-Q_1\); simpangan rata-rata \(=\frac{\sum|x_i-\bar x|}{n}\); dan [[ms_ragam|ragam dan simpangan baku]] (rumus sampel memakai \(n-1\), populasi memakai \(N\)). Contoh: data 2, 4, 6, 8 memberi \(\bar x=5\) dan \(s^2=20/3\approx6{,}67\).</p>`},
 {id:"metstat-3", t:"Peubah acak diskrit dan kontinu (Pekan 2–3)", h:String.raw`<p class="hint">Bab ini belum ada file dosennya, jadi isinya ringkasan umum.</p>
<h2>Peubah acak</h2>
<p>[[rv|Peubah acak]] \(X\) memberi angka pada hasil percobaan: diskrit (hasil menghitung) atau kontinu (hasil mengukur).</p>
<h2>Diskrit</h2>
<p>Fungsi peluang \(p(x)=P(X=x)\) dengan \(p(x)\ge0\) dan \(\sum p(x)=1\). Dari sini diperoleh [[ekspek|ekspektasi]] \(E[X]=\sum xp(x)\) dan [[varian|variansi]] \(\operatorname{Var}(X)=E[X^2]-(E[X])^2\). Contoh yang penting adalah binomial:</p>
\[P(X=x)=\binom nx p^x(1-p)^{n-x},\qquad E[X]=np,\quad \operatorname{Var}(X)=np(1-p)\]
<p>Contoh \(n=5,\ p=0{,}5\): \(P(X=2)=10/32=0{,}3125\).</p>
<h2>Kontinu</h2>
<p>[[pdf|Fungsi kepadatan]] \(f(x)\ge0\) dengan \(\int f=1\), dan peluang \(P(a\le X\le b)=\int_a^bf(x)\,dx\). Untuk [[normal|distribusi normal]], bakukan dulu: \(Z=\frac{X-\mu}{\sigma}\). Contoh \(X\sim N(70,10^2)\): \(P(X>85)=P(Z>1{,}5)\approx0{,}0668\).</p>`},
 {id:"metstat-4", t:"Sebaran contoh dan teorema limit pusat (Pekan 4–5)", h:String.raw`<p class="hint">Bab ini belum ada file dosennya, jadi isinya ringkasan umum.</p>
<h2>Sebaran rata-rata contoh</h2>
<p>[[ms_sebaran|Sebaran contoh]] adalah distribusi suatu statistik dari semua sampel yang mungkin. Untuk rata-rata sampel:</p>
\[E(\bar X)=\mu,\qquad \sigma_{\bar X}=\frac{\sigma}{\sqrt n}\]
<p>Bila populasi normal, \(\bar X\) tepat normal. Bila bukan, [[clt|teorema limit pusat]] menjamin \(\bar X\) hampir normal untuk \(n\ge30\).</p>
<h2>Proporsi dan ragam</h2>
<p>Proporsi sampel \(\hat p\) punya rata-rata \(p\) dan galat baku \(\sqrt{p(1-p)/n}\). Untuk populasi normal, \(\frac{(n-1)S^2}{\sigma^2}\sim\chi^2_{n-1}\), dan bila \(\sigma\) tidak diketahui, \(\frac{\bar X-\mu}{S/\sqrt n}\sim t_{n-1}\).</p>
<p>Contoh \(\mu=50,\ \sigma=10,\ n=25\): galat baku \(=2\), jadi \(P(\bar X>52)=P(Z>1)\approx0{,}1587\).</p>`},
 {id:"metstat-5", t:"Pendugaan titik dan kriteria penduga (Pekan 6–7)", h:String.raw`<h2>Pendugaan parameter</h2>
<p>Pendugaan adalah proses memakai sampel untuk memperkirakan [[ms_param|parameter]] populasi yang tidak diketahui. Statistik yang dipakai disebut [[estimator|penduga]]. Contoh: quick count (sampel) menduga real count (parameter).</p>
<h2>Kriteria penduga yang baik</h2>
<p>[[ms_penduga|Tak bias, efisien, dan konsisten]]. Penduga yang sering dipakai: \(\bar x\) untuk \(\mu\), \(s^2\) untuk \(\sigma^2\), \(\hat p=x/n\) untuk \(p\).</p>
<h2>Penduga titik dan penduga selang</h2>
<p>Penduga titik memberi satu nilai, tetapi tidak menunjukkan seberapa dekat nilai itu dengan parameter sebenarnya. Karena itu dipakai penduga selang ([[sel|selang kepercayaan]]).</p>
<p>Contoh titik: tinggi 10 mahasiswa berjumlah 1.566 cm, jadi dugaan rata-rata \(\bar x=156{,}6\) cm. Nilai 70, 80, 75, 85, 90 memberi \(\bar x=80\). Dari 200 mahasiswa, 80 memakai paket internet lebih dari 20 GB: \(\hat p=80/200=0{,}4\).</p>`},
 {id:"metstat-6", t:"Selang kepercayaan: rata-rata dan proporsi (Pekan 6–7)", h:String.raw`<h2>Bentuk umum</h2>
<p>Selang kepercayaan \(100(1-\alpha)\%\) adalah penduga titik \(\pm\) [[ms_se|margin of error]], dan margin of error \(=\) nilai kritis \(\times\) galat baku penduga. Nilai kritis \(z\) yang sering dipakai: 90% \(\to1{,}645\), 95% \(\to1{,}96\), 99% \(\to2{,}576\).</p>
<h2>Rata-rata populasi</h2>
<p>[[ms_skmean|Selang kepercayaan bagi μ]]: pakai \(z\) bila \(\sigma\) diketahui; bila \(\sigma\) tidak diketahui pakai \(t\) dengan \(db=n-1\) untuk \(n<30\), dan \(z\) untuk \(n\ge30\).</p>
<p>Contoh: \(\sigma=2{,}5\), \(n=36\), \(\bar x=10\): \(SE=2{,}5/6\approx0{,}4167\), margin of error \(=1{,}96\times0{,}4167\approx0{,}817\), jadi \(9{,}183<\mu<10{,}817\) (slide: 9,184 sampai 10,815 karena SE dibulatkan menjadi 0,416).</p>
<h2>Proporsi populasi</h2>
<p>[[ms_skprop|Selang kepercayaan bagi proporsi p]]: \(\hat p\pm z_{\alpha/2}\sqrt{\hat p(1-\hat p)/n}\). Contoh survei pilkada: \(\hat p=0{,}72\), \(n=2000\), 90%: \(SE=0{,}01004\), margin of error \(=1{,}645\times0{,}01004=0{,}0165\), jadi \(0{,}7035<p<0{,}7365\).</p>`},
 {id:"metstat-7", t:"Selang kepercayaan: beda dua rata-rata, berpasangan, beda proporsi (Pekan 6–7)", h:String.raw`<h2>Beda dua rata-rata (sampel bebas)</h2>
<p>Penduga titik \(\bar x_1-\bar x_2\). Bila ragam diketahui pakai \(z\) dengan \(SE=\sqrt{\sigma_1^2/n_1+\sigma_2^2/n_2}\). Bila tidak diketahui dan dianggap sama, pakai [[ms_gabung|ragam gabungan]] dengan \(db=n_1+n_2-2\). Bila dianggap tidak sama, pakai \(SE=\sqrt{s_1^2/n_1+s_2^2/n_2}\) dengan db dari rumus Welch (atau pendekatan konservatif \(\min(n_1,n_2)-1\)). Untuk sampel besar (\(n_1,n_2\ge30\)), \(t\) boleh didekati \(z\).</p>
<h2>Cara membaca selang \(\mu_1-\mu_2\)</h2>
<p>Seluruhnya negatif \(\Rightarrow\mu_1<\mu_2\); seluruhnya positif \(\Rightarrow\mu_1>\mu_2\); memuat 0 \(\Rightarrow\) tidak dapat disimpulkan ada perbedaan.</p>
<p>Contoh kopi: \(SE=\sqrt{40^2/50+30^2/45}\approx7{,}2\), selisih \(-10\), selang 95% \(=(-24{,}1;\,4{,}1)\), memuat 0, jadi tidak ada perbedaan. Contoh synchronous (\(\bar x_1=62{,}8\)) dan asynchronous (\(\bar x_2=77{,}3\)), \(s_{gab}^2=135{,}7\), \(SE=4{,}253\), \(t_{0{,}05;28}=1{,}701\): selang 90% \(=(-21{,}735;\,-7{,}265)\). Selang itu seluruhnya negatif, jadi \(\mu_1<\mu_2\) (kelompok asynchronous lebih tinggi).</p>
<h2>Data berpasangan</h2>
<p>Hitung selisih \(d_i=x_{i1}-x_{i2}\), lalu pakai [[ms_pasang|selang untuk rata-rata selisih]]. Contoh Shopee dan Tokopedia (\(n=7\)): \(\bar d\approx3{,}857\), \(s_d\approx4{,}741\), \(t_{0{,}025;6}=2{,}447\), selang 95% \(=(-0{,}528;\,8{,}242)\), memuat 0, jadi tidak ada perbedaan penjualan.</p>
<h2>Beda dua proporsi</h2>
<p>Lihat [[ms_skprop|selang beda proporsi]]. Contoh Instagram: \(\hat p_1=45/60=0{,}75\), \(\hat p_2=25/50=0{,}5\), selang 95% \(=(0{,}0733;\,0{,}4267)\), seluruhnya positif, jadi \(p_1>p_2\).</p>`},
 {id:"metstat-8", t:"Pengujian hipotesis (Pekan 9–10)", h:String.raw`<p class="hint">Bab ini belum ada file dosennya, jadi isinya ringkasan umum.</p>
<h2>Gagasan</h2>
<p>[[ms_hip|Pengujian hipotesis]] menilai pernyataan tentang parameter. \(H_0\) (hipotesis nol) adalah pernyataan yang diuji, \(H_1\) alternatifnya (satu arah atau dua arah).</p>
<h2>Lima tahap</h2>
<ol><li>Rumuskan \(H_0\) dan \(H_1\).</li><li>Tetapkan taraf nyata \(\alpha\).</li><li>Pilih statistik uji dan sebarannya.</li><li>Tentukan daerah kritis (atau hitung \(p\)-value).</li><li>Hitung statistik uji dan simpulkan.</li></ol>
<h2>Galat</h2>
<p>[[tipe12|Galat tipe I]] (menolak \(H_0\) yang benar, peluangnya \(\alpha\)) dan galat tipe II (peluangnya \(\beta\)); kuasa uji \(=1-\beta\).</p>
<h2>Uji-z untuk rata-rata (\(\sigma\) diketahui)</h2>
\[Z=\frac{\bar x-\mu_0}{\sigma/\sqrt n}\]
<p>Contoh: \(\mu_0=75\), \(\bar x=78\), \(\sigma=9\), \(n=36\): \(Z=3/1{,}5=2\). Uji dua arah memberi \(p\approx0{,}0455<0{,}05\), jadi \(H_0\) ditolak.</p>`},
 {id:"metstat-9", t:"Uji-t dan perbandingan dua ragam (Pekan 10–11)", h:String.raw`<p class="hint">Bab ini belum ada file dosennya, jadi isinya ringkasan umum.</p>
<h2>Uji-t</h2>
<p>Dipakai bila \(\sigma\) tidak diketahui, terutama untuk sampel kecil dari populasi normal. [[ms_ujit|Tiga bentuknya]]: satu sampel, dua sampel bebas (ragam gabungan), dan data berpasangan.</p>
<p>Contoh (data Shopee dan Tokopedia): \(t=3{,}857/1{,}792\approx2{,}152\) dengan \(db=6\). Nilai kritis dua arah \(2{,}447\), jadi \(H_0\) tidak ditolak. Ini konsisten dengan selang kepercayaan yang memuat 0.</p>
<h2>Membandingkan dua ragam</h2>
<p>[[ms_ujif|Uji-F]] menguji \(H_0:\sigma_1^2=\sigma_2^2\) dan biasanya dilakukan sebelum memilih memakai ragam gabungan atau tidak. Contoh \(s_1^2=170{,}2\), \(s_2^2=101{,}2\): \(F=1{,}68\) dengan \(db=(14,14)\).</p>`},
 {id:"metstat-10", t:"Analisis variansi / ANOVA (Pekan 12–16)", h:String.raw`<p class="hint">Bab ini belum ada file dosennya, jadi isinya ringkasan umum.</p>
<h2>Gagasan</h2>
<p>[[ms_anova|ANOVA satu arah]] menguji \(H_0:\mu_1=\mu_2=\cdots=\mu_k\) untuk \(k>2\) kelompok sekaligus. Ini menggantikan banyak uji-t berulang yang menaikkan galat tipe I. Asumsi: sampel bebas, populasi normal, ragam sama.</p>
<h2>Tabel ANOVA</h2>
\[SST=SSB+SSW,\quad MSB=\frac{SSB}{k-1},\quad MSW=\frac{SSW}{N-k},\quad F=\frac{MSB}{MSW}\]
<p>Tolak \(H_0\) bila \(F>F_{\alpha;\,k-1,\,N-k}\).</p>
<h2>Contoh</h2>
<p>Tiga kelompok: (5, 6, 7), (7, 8, 9), (9, 10, 11). Rata-rata kelompok 6, 8, 10 dan rata-rata total 8. \(SSB=3(4+0+4)=24\), \(SSW=2+2+2=6\), \(MSB=12\), \(MSW=6/6=1\), jadi \(F=12\). Nilai kritis \(F_{0{,}05;\,2,6}=5{,}14\), sehingga \(H_0\) ditolak.</p>`},
]};
