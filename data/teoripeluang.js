/* Materi Teori Peluang Semester 2. Materi probabilitas dan distribusi awal dirujuk dari Hogg, McKean, Craig, Introduction to Mathematical Statistics, edisi 8, bab 1–3. */
window.COURSES = window.COURSES || {};
COURSES.teoripeluang = {t:"Teori Peluang",desc:"Konsep dasar peluang, peubah acak, distribusi, nilai harapan, dan distribusi bersama. Materi statistik inferensial lanjutan dari buku Hogg tidak dipindahkan ke kelas ini.",ch:[
{id:"tp-1",t:"Himpunan, Ruang Sampel, dan Aturan Pencacahan",h:String.raw`
<h2>Himpunan dan kejadian</h2><p>Ruang sampel \(S\) adalah himpunan semua hasil yang mungkin dari suatu percobaan. Kejadian adalah himpunan bagian dari S. Operasi himpunan meliputi gabungan, irisan, komplemen, dan selisih.</p>
\[A\cup B,\quad A\cap B,\quad A^c,\quad A\subseteq S\]
<h2>Aturan pencacahan</h2><p>Aturan perkalian menghitung banyak susunan proses bertahap. Permutasi memperhatikan urutan, sedangkan kombinasi tidak memperhatikan urutan.</p>
\[P(n,r)=\frac{n!}{(n-r)!},\qquad {n\choose r}=\frac{n!}{r!(n-r)!}\]
<div class="flow"><div class="flow-node">Apakah urutan objek diperhatikan?</div><div class="flow-arrow">↓ Ya</div><div class="flow-node">Gunakan permutasi</div><div class="flow-arrow">↓ Tidak</div><div class="flow-node">Gunakan kombinasi</div></div>
<p class="src">Rujukan: Hogg, McKean, Craig, bab 1.2–1.3, hlm. 3–22.</p>`},
{id:"tp-2",t:"Aksioma dan Sifat-Sifat Peluang",h:String.raw`
<h2>Fungsi peluang</h2><p>Peluang mengukur tingkat kemungkinan suatu kejadian. Untuk kejadian A, nilainya berada antara nol dan satu. Peluang seluruh ruang sampel adalah satu dan peluang gabungan kejadian saling lepas merupakan jumlah peluangnya.</p>
\[P(A)\ge0,\quad P(S)=1,\quad P\left(\bigcup_i A_i\right)=\sum_iP(A_i)\]
<p>Untuk dua kejadian, berlaku aturan penjumlahan umum:</p>
\[P(A\cup B)=P(A)+P(B)-P(A\cap B)\]
<h3>Alur menghitung peluang kejadian</h3><div class="flow"><div class="flow-node">Definisikan ruang sampel S dan kejadian A</div><div class="flow-arrow">↓</div><div class="flow-node">Periksa apakah hasil sama mungkin</div><div class="flow-arrow">↓</div><div class="flow-node">Pilih aturan: komplemen, penjumlahan, atau pencacahan</div><div class="flow-arrow">↓</div><div class="flow-node">Pastikan hasil berada pada [0, 1]</div></div>
<h2>Komplemen dan inklusi-eksklusi</h2>\[P(A^c)=1-P(A)\] <p>Untuk tiga kejadian, prinsip inklusi-eksklusi menambahkan peluang tunggal, mengurangi irisan berpasangan, lalu menambahkan kembali irisan tiga kejadian.</p>
<p class="src">Rujukan: Hogg, bab 1.3, hlm. 12–22.</p>`},
{id:"tp-3",t:"Peluang Bersyarat, Teorema Bayes, dan Independensi",h:String.raw`
<h2>Peluang bersyarat</h2><p>Peluang A dengan syarat B telah terjadi didefinisikan sebagai berikut, selama \(P(B)>0\):</p>
\[P(A\mid B)=\frac{P(A\cap B)}{P(B)}\]
<h2>Aturan perkalian dan hukum peluang total</h2>\[P(A\cap B)=P(A\mid B)P(B)\] <p>Jika \(B_1,\ldots,B_k\) membentuk partisi ruang sampel, maka \(P(A)=\sum_iP(A\mid B_i)P(B_i)\).</p>
<h2>Teorema Bayes</h2>\[P(B_j\mid A)=\frac{P(A\mid B_j)P(B_j)}{\sum_iP(A\mid B_i)P(B_i)}\]
<h3>Flow penggunaan Bayes</h3><div class="flow"><div class="flow-node">Tentukan beberapa penyebab B₁, …, Bₖ</div><div class="flow-arrow">↓</div><div class="flow-node">Catat peluang awal P(Bᵢ) dan peluang bukti P(A | Bᵢ)</div><div class="flow-arrow">↓</div><div class="flow-node">Hitung P(A) dengan hukum peluang total</div><div class="flow-arrow">↓</div><div class="flow-node">Perbarui peluang: P(Bⱼ | A)</div></div>
<h2>Independensi</h2><p>A dan B independen jika terjadinya salah satu tidak mengubah peluang yang lain.</p>\[P(A\cap B)=P(A)P(B)\] <p>Independensi berbeda dari kejadian saling lepas: dua kejadian saling lepas dengan peluang positif tidak independen.</p>
<p class="src">Rujukan: Hogg, bab 1.4, hlm. 23–36.</p>`},
{id:"tp-4",t:"Peubah Acak dan Distribusi Peluang",h:String.raw`
<h2>Peubah acak</h2><p>Peubah acak adalah fungsi yang memetakan setiap hasil percobaan ke bilangan real. Distribusi peluang menggambarkan peluang nilai-nilai yang mungkin.</p>
<h2>Peubah acak diskret</h2><p>Peubah acak diskret memiliki himpunan nilai yang dapat dihitung. Fungsi massa peluang (pmf) memenuhi \(p(x)\ge0\) dan jumlah seluruh peluang sama dengan satu.</p>
\[p(x)=P(X=x),\qquad \sum_xp(x)=1\]
<h2>Peubah acak kontinu</h2><p>Peubah acak kontinu dijelaskan oleh fungsi kepadatan (pdf). Peluang pada interval adalah luas di bawah kurva kepadatan; peluang tepat pada satu titik sama dengan nol.</p>
\[P(a\le X\le b)=\int_a^bf(x)\,dx,\quad f(x)\ge0,\quad\int_{-\infty}^{\infty}f(x)dx=1\]
<h3>Kenali jenis distribusi</h3><div class="flow"><div class="flow-node">Apakah nilai X berupa titik-titik yang dapat dihitung?</div><div class="flow-arrow">↓ Ya</div><div class="flow-node">Gunakan pmf dan penjumlahan</div><div class="flow-arrow">↓ Tidak</div><div class="flow-node">Gunakan pdf dan integral</div></div>
<p class="src">Rujukan: Hogg, bab 1.5–1.7, hlm. 37–59.</p>`},
{id:"tp-5",t:"Fungsi Distribusi Kumulatif dan Transformasi",h:String.raw`
<h2>Fungsi distribusi kumulatif</h2><p>Fungsi distribusi kumulatif (cdf) didefinisikan sebagai peluang peubah acak tidak melebihi x. CDF tidak menurun, kontinu dari kanan, dan memiliki limit 0 serta 1 di kedua ujung.</p>
\[F(x)=P(X\le x)\]
<p>Untuk peubah diskret, CDF diperoleh dengan menjumlahkan massa peluang hingga x. Untuk peubah kontinu, CDF adalah integral pdf.</p>
\[F(x)=\int_{-\infty}^{x}f(t)\,dt,\qquad f(x)=F'(x)\text{ (bila terdiferensialkan)}\]
<h2>Transformasi peubah acak</h2><p>Jika \(Y=g(X)\), distribusi Y ditentukan dari hubungan antara X dan Y. Pada transformasi monoton dan terdiferensialkan, kepadatan Y dapat dihitung menggunakan perubahan variabel.</p>
\[f_Y(y)=f_X(g^{-1}(y))\left|\frac{d}{dy}g^{-1}(y)\right|\]
<p class="src">Rujukan: Hogg, bab 1.6–1.7, hlm. 45–59.</p>`},
{id:"tp-6",t:"Nilai Harapan, Varians, dan Momen",h:String.raw`
<h2>Nilai harapan</h2><p>Nilai harapan adalah rata-rata teoretis berbobot peluang. Untuk peubah diskret digunakan penjumlahan; untuk peubah kontinu digunakan integral.</p>
\[E[X]=\sum_xxp(x),\qquad E[X]=\int_{-\infty}^{\infty}xf(x)\,dx\]
<p>Untuk fungsi g(X), berlaku \(E[g(X)]\) dengan mengganti nilai X pada penjumlahan atau integral. Linearitas harapan: \(E[aX+b]=aE[X]+b\).</p>
<h2>Varians dan simpangan baku</h2>\[\operatorname{Var}(X)=E[(X-\mu)^2]=E[X^2]-\mu^2\] <p>Simpangan baku adalah akar kuadrat varians. Momen ke-r adalah harapan \(E[X^r]\), jika ada.</p>
<h3>Alur menghitung ringkasan distribusi</h3><div class="flow"><div class="flow-node">Identifikasi pmf atau pdf</div><div class="flow-arrow">↓</div><div class="flow-node">Hitung μ = E[X]</div><div class="flow-arrow">↓</div><div class="flow-node">Hitung E[X²]</div><div class="flow-arrow">↓</div><div class="flow-node">Varians = E[X²] − μ²; simpangan baku = √Var(X)</div></div>
<p class="src">Rujukan: Hogg, bab 1.8–1.10, hlm. 60–84.</p>`},
{id:"tp-7",t:"Distribusi Bersama dan Korelasi",h:String.raw`
<h2>Distribusi dua peubah acak</h2><p>Distribusi bersama menggambarkan peluang dua peubah acak secara simultan. Distribusi marginal diperoleh dengan menjumlahkan atau mengintegralkan peubah lainnya.</p>
\[p_X(x)=\sum_y p_{X,Y}(x,y),\qquad f_X(x)=\int_{-\infty}^{\infty}f_{X,Y}(x,y)\,dy\]
<h2>Distribusi bersyarat dan independensi</h2>\[p_{X\mid Y}(x\mid y)=\frac{p_{X,Y}(x,y)}{p_Y(y)}\] <p>X dan Y independen jika distribusi bersama dapat difaktorkan menjadi hasil kali distribusi marginal.</p>
<h2>Kovarians dan korelasi</h2>\[\operatorname{Cov}(X,Y)=E[(X-\mu_X)(Y-\mu_Y)]\] \[\rho_{X,Y}=\frac{\operatorname{Cov}(X,Y)}{\sigma_X\sigma_Y}\] <p>Korelasi mengukur arah dan kekuatan hubungan linear, bukan hubungan sebab-akibat.</p>
<p class="src">Rujukan: Hogg, bab 2.1–2.6, hlm. 85–150.</p>`},
{id:"tp-8",t:"Distribusi Peluang Khusus",h:String.raw`
<h2>Distribusi diskret</h2><p>Distribusi binomial memodelkan banyak keberhasilan dalam n percobaan Bernoulli independen dengan peluang keberhasilan p yang tetap. Distribusi geometrik dan binomial negatif berkaitan dengan banyak percobaan hingga keberhasilan. Distribusi hipergeometrik digunakan untuk pengambilan tanpa pengembalian, sedangkan Poisson memodelkan hitungan kejadian dengan laju tertentu.</p>
\[P(X=x)=\binom nxp^x(1-p)^{n-x}\quad\text{(Binomial)}\]
\[P(X=x)=e^{-\lambda}\frac{\lambda^x}{x!}\quad\text{(Poisson)}\]
<h2>Distribusi kontinu</h2><p>Distribusi seragam, gamma, khi-kuadrat, beta, dan normal merupakan keluarga distribusi kontinu penting. Distribusi t dan F juga diperkenalkan dalam konteks distribusi khusus.</p>
\[f(x)=\frac{1}{\sqrt{2\pi}\sigma}\exp\left[-\frac{(x-\mu)^2}{2\sigma^2}\right]\quad\text{(Normal)}\]
<h3>Memilih model awal</h3><div class="flow"><div class="flow-node">Data berupa hitungan atau banyak keberhasilan?</div><div class="flow-arrow">↓ Ya</div><div class="flow-node">Pertimbangkan Binomial, Poisson, Geometrik, atau Hipergeometrik</div><div class="flow-arrow">↓ Tidak</div><div class="flow-node">Data kontinu: pertimbangkan Uniform, Normal, Gamma, atau Beta</div></div>
<p class="src">Rujukan: Hogg, bab 3, hlm. 155–224. Pemilihan distribusi harus didasarkan pada asumsi model dan konteks percobaan.</p>`}
]};
