/* Matematika: materi dirangkum dan disusun dari PDF KALKMA1101BAG7_merged.pdf.
   Rentang halaman merujuk nomor halaman PDF yang diunggah. */
window.COURSES = window.COURSES || {};
COURSES.matematika = {t:"Matematika", desc:"Catatan matematika dari materi Kalkulus: fungsi, limit, turunan, integral, deret, vektor, kalkulus multivariabel, dan persamaan diferensial.", ch:[
{id:"mat-1",t:"Sistem Bilangan Real dan Fungsi",h:String.raw`
<h2>1. Sistem bilangan real</h2>
<p>Bilangan real dilengkapi operasi penjumlahan dan perkalian serta sifat aljabar. Konsep dasar yang digunakan meliputi pertaksamaan, garis bilangan, selang, dan nilai mutlak.</p>
\[\lvert x-a\rvert < r \iff a-r < x < a+r\]
<h2>2. Fungsi real</h2>
<p>Fungsi \(f:D_f\to R_f\) memasangkan setiap anggota daerah asal dengan tepat satu nilai di daerah kawan. Perhatikan daerah asal, daerah nilai, grafik, fungsi aljabar, fungsi dengan banyak aturan, dan komposisi fungsi.</p>
\[(f\circ g)(x)=f(g(x))\]
<h3>Alur membaca fungsi</h3>
<div class="flow"><div class="flow-node">Tentukan aturan fungsi</div><div class="flow-arrow">↓</div><div class="flow-node">Periksa daerah asal \(D_f\)</div><div class="flow-arrow">↓</div><div class="flow-node">Tentukan daerah nilai dan grafik</div><div class="flow-arrow">↓</div><div class="flow-node">Uji komposisi atau sifat fungsi</div></div>
<h2>Contoh</h2><div class="soal"><p><b>Soal.</b> Tentukan daerah asal \(f(x)=\sqrt{4-x^2}\).</p><p><b>Penyelesaian.</b> Syarat akar adalah \(4-x^2\geq0\), sehingga \(-2\leq x\leq2\). Jadi \(D_f=[-2,2]\).</p></div>
<p class="src">Sumber: PDF, hlm. 161–174.</p>`},
{id:"mat-2",t:"Limit dan Kekontinuan Fungsi",h:String.raw`
<h2>Konsep limit</h2><p>Limit \(f(x)\) di \(x=c\) menyatakan nilai yang didekati \(f(x)\) ketika \(x\) mendekati \(c\), tidak harus sama dengan nilai fungsi di titik tersebut.</p>
\[\lim_{x\to c}f(x)=L\]
<p>Limit kiri dan kanan harus sama agar limit dua sisi ada. Materi mencakup pembuktian epsilon-delta, sifat limit, limit trigonometri, bentuk tak tentu, serta kekontinuan.</p>
<h3>Flow pemeriksaan limit</h3><div class="flow"><div class="flow-node">Substitusi langsung</div><div class="flow-arrow">↓</div><div class="flow-node">Jika bentuk tak tentu: sederhanakan</div><div class="flow-arrow">↓</div><div class="flow-node">Periksa limit kiri dan kanan</div><div class="flow-arrow">↓</div><div class="flow-node">Gunakan teorema atau L’Hôpital bila memenuhi syarat</div></div>
<h2>Kekontinuan di titik</h2><p>Fungsi kontinu di \(c\) jika \(f(c)\) terdefinisi, \(\lim_{x\to c}f(x)\) ada, dan limit tersebut sama dengan \(f(c)\).</p>
\[\lim_{x\to c}f(x)=f(c)\]
<h2>Contoh</h2><div class="soal"><p>Untuk \(f(x)=\frac{x^2-4}{x-2}\), \(x\ne2\), faktorkan pembilang: \(f(x)=x+2\). Maka \(\lim_{x\to2}f(x)=4\).</p></div>
<p class="src">Sumber: PDF, hlm. 178–193; bentuk tak tentu dan integral tak wajar dibahas lagi pada hlm. 39–54.</p>`},
{id:"mat-3",t:"Turunan dan Diferensial",h:String.raw`
<h2>Definisi turunan</h2><p>Turunan menyatakan laju perubahan sesaat dan gradien garis singgung grafik fungsi.</p>
\[f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}\]
<p>Pokok bahasan: notasi turunan, aturan pangkat, hasil kali, hasil bagi, aturan rantai, turunan trigonometri, turunan tingkat tinggi, dan diferensial.</p>
<h3>Alur aturan rantai</h3><div class="flow"><div class="flow-node">Identifikasi fungsi luar \(f(u)\)</div><div class="flow-arrow">↓</div><div class="flow-node">Identifikasi fungsi dalam \(u=g(x)\)</div><div class="flow-arrow">↓</div><div class="flow-node">Turunkan masing-masing</div><div class="flow-arrow">↓</div><div class="flow-node">\(\frac{dy}{dx}=\frac{dy}{du}\frac{du}{dx}\)</div></div>
<h2>Diferensial dan hampiran</h2>\[dy=f'(x)\,dx\qquad \Delta y\approx dy\]
<div class="soal"><p><b>Contoh.</b> Jika \(f(x)=x^3-2x\), maka \(f'(x)=3x^2-2\). Pada \(x=2\), gradien garis singgung adalah \(10\).</p></div>
<p class="src">Sumber: PDF, hlm. 197–212.</p>`},
{id:"mat-4",t:"Aplikasi Turunan",h:String.raw`
<h2>Analisis grafik</h2><p>Turunan pertama digunakan untuk menentukan kemonotonan dan titik ekstrem. Turunan kedua digunakan untuk memeriksa kecekungan dan titik belok.</p>
\[\begin{aligned}f'(x)>0&\Rightarrow f\text{ naik}\\f'(x)<0&\Rightarrow f\text{ turun}\\f''(x)>0&\Rightarrow f\text{ cekung ke atas}\end{aligned}\]
<h3>Timeline analisis fungsi</h3>⟦waktu|1,2,3,4,5||1:1;2:1;3:1;4:1|0:Domain;1:Titik kritis;2:Uji tanda f′;3:Uji f″;4:Sketsa grafik⟧
<h2>Aplikasi</h2><p>Masalah laju terkait menghubungkan laju dua besaran. Masalah optimasi mencari nilai maksimum atau minimum dengan kendala. Materi juga mencakup teorema nilai rata-rata serta metode numerik untuk mencari akar.</p>
<h3>Metode pencarian akar</h3><div class="flow"><div class="flow-node">Tentukan \(f(x)=0\) dan selang awal</div><div class="flow-arrow">↓</div><div class="flow-node">Pilih metode: bagi dua / Newton / titik tetap</div><div class="flow-arrow">↓</div><div class="flow-node">Iterasi sampai toleransi terpenuhi</div></div>
\[x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}\quad\text{(Newton)}\]
<p class="src">Sumber: PDF, hlm. 216–231.</p>`},
{id:"mat-5",t:"Integral dan Teorema Dasar Kalkulus",h:String.raw`
<h2>Anti-turunan dan integral</h2><p>Integral tak tentu adalah keluarga anti-turunan. Integral tentu didefinisikan melalui limit jumlah Riemann dan digunakan untuk menghitung akumulasi serta luas bertanda.</p>
\[\int f(x)\,dx=F(x)+C,\quad F'(x)=f(x)\]
\[\int_a^b f(x)\,dx=F(b)-F(a)\]
<h3>Flow penyelesaian integral</h3><div class="flow"><div class="flow-node">Kenali bentuk integran</div><div class="flow-arrow">↓</div><div class="flow-node">Pilih aturan dasar / substitusi</div><div class="flow-arrow">↓</div><div class="flow-node">Gunakan batas untuk integral tentu</div><div class="flow-arrow">↓</div><div class="flow-node">Tafsirkan hasil sebagai akumulasi atau luas</div></div>
<h2>Contoh</h2><div class="soal"><p>\(\int_0^2 3x^2\,dx=[x^3]_0^2=8\).</p></div>
<p class="src">Sumber: PDF, hlm. 235–250.</p>`},
{id:"mat-6",t:"Aplikasi Integral",h:String.raw`
<h2>Luas daerah</h2><p>Jika \(f(x)\geq0\), luas daerah di bawah kurva pada \([a,b]\) adalah integral tentu. Untuk dua kurva, luas diperoleh dari integral selisih fungsi atas dan bawah.</p>
\[A=\int_a^b f(x)\,dx,\qquad A=\int_a^b(f(x)-g(x))\,dx\]
<h2>Volume benda putar</h2><p>Materi mencakup metode cakram dan cincin, serta aplikasi integral untuk pusat massa, momen, kerja, dan tekanan zat cair.</p>
\[V_{\text{cakram}}=\pi\int_a^b [R(x)]^2\,dx\]
<div class="flow"><div class="flow-node">Gambar daerah dan sumbu putar</div><div class="flow-arrow">↓</div><div class="flow-node">Tentukan jari-jari / tinggi irisan</div><div class="flow-arrow">↓</div><div class="flow-node">Susun integral volume</div><div class="flow-arrow">↓</div><div class="flow-node">Evaluasi integral dan satuan</div></div>
<p class="src">Sumber: PDF, hlm. 254–271.</p>`},
{id:"mat-7",t:"Teknik Pengintegralan",h:String.raw`
<h2>Teknik utama</h2><p>Materi membahas penggantian (substitusi), integral parsial, integral fungsi trigonometri, penggantian trigonometri, pecahan parsial, serta integral fungsi rasional dalam sinus dan kosinus.</p>
\[\int f(g(x))g'(x)\,dx=\int f(u)\,du,\quad u=g(x)\]
\[\int u\,dv=uv-\int v\,du\]
<h3>Pemilihan teknik</h3><div class="flow"><div class="flow-node">Ada fungsi dalam beserta turunannya?</div><div class="flow-arrow">↓ Ya</div><div class="flow-node">Substitusi \(u=g(x)\)</div><div class="flow-arrow">↓ Jika tidak</div><div class="flow-node">Produk dua fungsi? Coba integral parsial</div><div class="flow-arrow">↓ Jika rasional</div><div class="flow-node">Faktorkan penyebut dan gunakan pecahan parsial</div></div>
<h2>Contoh parsial</h2>\[\int xe^x\,dx=xe^x-e^x+C\]
<p class="src">Sumber: PDF, hlm. 20–35.</p>`},
{id:"mat-8",t:"Bentuk Tak Tentu dan Integral Tak Wajar",h:String.raw`
<h2>Bentuk tak tentu</h2><p>Bentuk seperti \(0/0\) dan \(\infty/\infty\) memerlukan manipulasi atau teorema yang sesuai. Aturan L’Hôpital digunakan pada kondisi yang memenuhi syarat.</p>
\[\lim_{x\to a}\frac{f(x)}{g(x)}=\lim_{x\to a}\frac{f'(x)}{g'(x)}\]
<h2>Integral tak wajar</h2><p>Integral tak wajar muncul ketika selang integrasi tak hingga atau integran tak terbatas pada selang tersebut. Nilainya didefinisikan melalui limit; integral konvergen jika limitnya berhingga.</p>
\[\int_a^\infty f(x)\,dx=\lim_{b\to\infty}\int_a^b f(x)\,dx\]
<div class="flow"><div class="flow-node">Identifikasi titik singular / batas tak hingga</div><div class="flow-arrow">↓</div><div class="flow-node">Ubah integral menjadi limit</div><div class="flow-arrow">↓</div><div class="flow-node">Hitung limit</div><div class="flow-arrow">↓</div><div class="flow-node">Putuskan konvergen atau divergen</div></div>
<p class="src">Sumber: PDF, hlm. 39–54.</p>`},
{id:"mat-9",t:"Barisan dan Deret Tak Hingga",h:String.raw`
<h2>Barisan</h2><p>Barisan adalah susunan bilangan real dengan indeks terurut. Kekonvergenan ditentukan oleh limit suku ke-\(n\).</p>
\[\lim_{n\to\infty}a_n=L\]
<h2>Deret</h2><p>Deret tak hingga \(\sum a_n\) dipelajari melalui barisan jumlah parsial. Materi meliputi uji jumlah terbatas, uji perbandingan, deret ganti tanda, deret pangkat, teorema Abel, serta deret Taylor dan Maclaurin.</p>
\[S_n=\sum_{k=1}^n a_k,\qquad \sum_{k=1}^\infty a_k=\lim_{n\to\infty}S_n\]
<h3>Alur uji deret</h3><div class="flow"><div class="flow-node">Periksa \(\lim a_n\)</div><div class="flow-arrow">↓</div><div class="flow-node">Jika bukan 0: divergen</div><div class="flow-arrow">↓ Jika 0</div><div class="flow-node">Pilih uji yang sesuai: perbandingan, rasio, akar, atau ganti tanda</div><div class="flow-arrow">↓</div><div class="flow-node">Simpulkan konvergensi</div></div>
\[\mathrm{e}^x=\sum_{n=0}^\infty\frac{x^n}{n!}\]
<p class="src">Sumber: PDF, hlm. 58–75.</p>`},
{id:"mat-10",t:"Vektor dan Fungsi Bernilai Vektor",h:String.raw`
<h2>Vektor</h2><p>Vektor memiliki besar dan arah. Operasi yang dibahas meliputi penjumlahan, perkalian skalar, panjang vektor, perkalian titik, dan perkalian silang.</p>
\[\mathbf u\cdot\mathbf v=\|\mathbf u\|\,\|\mathbf v\|\cos\theta\]
<h2>Fungsi parameter</h2><p>Kurva dapat dinyatakan dengan parameter \(x=x(t)\), \(y=y(t)\), atau vektor posisi \(\mathbf r(t)\). Turunan \(\mathbf r'(t)\) menyatakan vektor kecepatan.</p>
\[\mathbf r(t)=\langle x(t),y(t),z(t)\rangle,\quad \mathbf v(t)=\mathbf r'(t)\]
<p class="src">Sumber: PDF, hlm. 79–96.</p>`},
{id:"mat-11",t:"Kalkulus Diferensial Fungsi Dua Peubah",h:String.raw`
<h2>Fungsi dua peubah</h2><p>Fungsi \(z=f(x,y)\) dapat divisualisasikan sebagai permukaan ruang dan kurva ketinggian. Turunan parsial mengukur perubahan terhadap satu peubah dengan peubah lain tetap.</p>
\[\nabla f=\left\langle\frac{\partial f}{\partial x},\frac{\partial f}{\partial y}\right\rangle\]
<h2>Konsep penting</h2><p>Materi mencakup limit dan kontinuitas, diferensiabilitas, aturan rantai, turunan berarah, vektor gradien, bidang singgung, titik ekstrem, uji turunan parsial kedua, ekstrem mutlak, dan pengali Lagrange.</p>
\[\text{Bidang singgung: }z-z_0=f_x(x_0,y_0)(x-x_0)+f_y(x_0,y_0)(y-y_0)\]
<div class="flow"><div class="flow-node">Cari titik kritis: \(f_x=f_y=0\)</div><div class="flow-arrow">↓</div><div class="flow-node">Hitung turunan parsial kedua</div><div class="flow-arrow">↓</div><div class="flow-node">Gunakan diskriminan Hessian</div><div class="flow-arrow">↓</div><div class="flow-node">Klasifikasikan maksimum, minimum, atau pelana</div></div>
<p class="src">Sumber: PDF, hlm. 100–119.</p>`},
{id:"mat-12",t:"Integral Lipat Dua dan Aplikasinya",h:String.raw`
<h2>Integral lipat dua</h2><p>Integral lipat dua menjumlahkan nilai fungsi pada daerah bidang. Perhitungan dapat dilakukan pada daerah persegi panjang maupun daerah umum dengan batas iterasi.</p>
\[\iint_R f(x,y)\,dA\]
<p>Aplikasi yang dibahas meliputi volume, luas, dan pengubahan urutan integrasi.</p>
<h3>Urutan kerja</h3><div class="flow"><div class="flow-node">Sketsa daerah \(R\)</div><div class="flow-arrow">↓</div><div class="flow-node">Tentukan batas \(x\) dan \(y\)</div><div class="flow-arrow">↓</div><div class="flow-node">Tulis integral berulang</div><div class="flow-arrow">↓</div><div class="flow-node">Integralkan dari dalam ke luar</div></div>
<p class="src">Sumber: PDF, hlm. 123–139.</p>`},
{id:"mat-13",t:"Persamaan Diferensial Biasa Tingkat Dua",h:String.raw`
<h2>Persamaan diferensial tingkat dua</h2><p>Persamaan diferensial biasa tingkat dua memuat turunan kedua dari fungsi yang belum diketahui. Materi meliputi persamaan homogen dan tak homogen dengan koefisien konstan, persamaan karakteristik, solusi khusus, serta variasi parameter.</p>
\[y''+ay'+by=0\]
<h3>Flow penyelesaian homogen</h3><div class="flow"><div class="flow-node">Bentuk persamaan karakteristik \(r^2+ar+b=0\)</div><div class="flow-arrow">↓</div><div class="flow-node">Cari akar karakteristik</div><div class="flow-arrow">↓</div><div class="flow-node">Susun solusi sesuai jenis akar</div><div class="flow-arrow">↓</div><div class="flow-node">Gunakan syarat awal jika tersedia</div></div>
<p>Contoh akar real berbeda \(r_1,r_2\): \(y=C_1e^{r_1x}+C_2e^{r_2x}\). Aplikasi pada materi meliputi gerak harmonis sederhana dan pegas spiral.</p>
<p class="src">Sumber: PDF, hlm. 145–157.</p>`},
{id:"mat-14",t:"Fungsi Transenden dan Persamaan Diferensial Tingkat Satu",h:String.raw`
<h2>Fungsi invers</h2><p>Fungsi satu-ke-satu mempunyai invers. Grafik fungsi dan inversnya simetri terhadap garis \(y=x\). Turunan invers memenuhi:</p>
\[(f^{-1})'(y)=\frac{1}{f'(x)},\quad y=f(x)\]
<h2>Logaritma dan eksponen</h2>\[\ln x=\int_1^x\frac{dt}{t},\quad \frac{d}{dx}\ln x=\frac1x,\quad \frac{d}{dx}e^x=e^x\]
<h2>Trigonometri dan hiperbolik</h2><p>Materi mencakup invers sinus, kosinus, tangen, fungsi hiperbolik, serta turunan inversnya.</p>
<h2>Persamaan diferensial linear tingkat satu</h2>
\[y'+p(x)y=q(x)\]
<p>Faktor integrasi:</p>
\[\mu(x)=e^{\int p(x)\,dx},\qquad (\mu y)'=\mu q\]
<h3>Alur solusi</h3><div class="flow"><div class="flow-node">Ubah ke bentuk \(y'+p(x)y=q(x)\)</div><div class="flow-arrow">↓</div><div class="flow-node">Hitung faktor integrasi \(\mu(x)\)</div><div class="flow-arrow">↓</div><div class="flow-node">Integralkan \((\mu y)'=\mu q\)</div><div class="flow-arrow">↓</div><div class="flow-node">Isolasi \(y\) dan gunakan syarat awal</div></div>
<p class="src">Sumber: PDF, hlm. 1–16; persamaan diferensial logistik dan teknik integrasi pada hlm. 34–35.</p>`}
]};
