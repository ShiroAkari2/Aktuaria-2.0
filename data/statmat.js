/* Statistika Matematika: satu objek per bab. Tambah bab baru = tambah satu blok {id, t, h} di daftar ch. */
window.COURSES = window.COURSES || {};
COURSES.statmat = {t:"Statistika Matematika", desc:"Distribusi sampel dan CLT, penaksiran (momen, MLE, Bayesian), statistik cukup, selang kepercayaan, dan uji hipotesis.", ch:[
 {id:"statmat-c1", t:"Teorema limit pusat dan hampiran normal (Pekan 3–4)", h:String.raw`<h2>Teorema limit pusat</h2>
<p>Misalkan \(X_1,\dots,X_n\) iid dengan mean \(\mu\) dan varians \(\sigma^2\). Menurut [[clt|CLT]], untuk \(n\) besar:</p>
\[Z_n=\frac{\bar X_n-\mu}{\sigma/\sqrt n}=\frac1{\sqrt n}\sum_{i=1}^n Y_i\ \xrightarrow{D}\ N(0,1),\qquad Y_i=\frac{X_i-\mu}{\sigma}\]
<p>Bentuk distribusi populasi tidak berpengaruh. Sketsa bukti dengan [[mgf|m.g.f.]]: \(E(Y_i)=0\), \(\mathrm{Var}(Y_i)=1\), sehingga deret Taylor memberi \(M_Y(t)\approx1+\frac{t^2}{2}\). Maka \(M_{Z_n}(t)=[M_Y(t/\sqrt n)]^n\approx\left[1+\frac{t^2}{2n}\right]^n\to e^{t^2/2}\), yaitu m.g.f. \(N(0,1)\). Keunikan m.g.f. menyimpulkan \(Z_n\xrightarrow{D}N(0,1)\).</p>
<h2>Hampiran normal untuk binomial</h2>
<p>Bila \(X\sim\text{Bin}(n,p)\) dengan \(np\ge5\) dan \(n(1-p)\ge5\), pakai \(\mu=np\), \(\sigma^2=np(1-p)\) dan [[kkon|koreksi kontinuitas]]: \(P(X\le k)\to k+0{,}5\), \(P(X\ge k)\to k-0{,}5\), \(P(X=k)\to(k-0{,}5,\,k+0{,}5)\).</p>
<h2>Selang kepercayaan sampel besar</h2>
\[\bar x\pm z_{\alpha/2}\frac{s}{\sqrt n},\qquad \hat p\pm z_{\alpha/2}\sqrt{\frac{\hat p(1-\hat p)}{n}}\ \ (n\hat p,\,n(1-\hat p)\ge10)\]
<p>Penggantian \(\sigma\) dengan \(s\) dan \(p\) dengan \(\hat p\) dibenarkan oleh [[slutsky|teorema Slutsky]]. Lihat juga [[wlln|hukum bilangan besar]] pada bab berikutnya.</p>
<h2>Contoh soal dan pembahasan</h2>
<div class="soal"><p><b>Soal.</b> Populasi memiliki \(\mu=50\) dan \(\sigma^2=144\). Sampel acak \(n=36\). Berapa \(P(46<\bar X<54)\)?</p>
<p><b>Diketahui:</b> \(\mu=50\), \(\sigma=12\), \(n=36\).</p>
<p><b>Ditanyakan:</b> \(P(46<\bar X<54)\).</p>
<p><b>Penyelesaian:</b> \(Z=\frac{\bar X-50}{12/6}\): \(z_1=-2\), \(z_2=2\). \(P(-2<Z<2)=0{,}9772-0{,}0228=0{,}9544\).</p>
<p><b>Interpretasi:</b> Dengan peluang sekitar 95,44% rata-rata sampel jatuh dalam 4 satuan dari rata-rata populasi.</p></div>`},
 {id:"statmat-c2", t:"Jenis kekonvergenan (Pekan 5)", h:String.raw`<h2>Konvergen dalam peluang</h2>
<p>\(X_n\xrightarrow{P}X\) ([[konvp|dalam peluang]]) bila \(P(|X_n-X|\ge\varepsilon)\to0\) untuk setiap \(\varepsilon>0\).</p>
<h2>Hukum bilangan besar lemah</h2>
<p>Untuk iid dengan mean \(\mu\), varians \(\sigma^2\): \(E(\bar X_n)=\mu\), \(\mathrm{Var}(\bar X_n)=\sigma^2/n\). Ketaksamaan Chebyshev memberi \(P(|\bar X_n-\mu|\ge\varepsilon)\le\frac{\sigma^2}{n\varepsilon^2}\to0\), jadi \(\bar X_n\xrightarrow{P}\mu\) ([[wlln|WLLN]]).</p>
<h2>Konsistensi penaksir</h2>
<p>\(\hat\theta_n\) konsisten bila \(\hat\theta_n\xrightarrow{P}\theta\). Syarat cukup: \(E(\hat\theta_n)\to\theta\) dan \(\mathrm{Var}(\hat\theta_n)\to0\).</p>
<h2>Konvergen dalam distribusi</h2>
<p>\(X_n\xrightarrow{D}X\) ([[konvd|dalam distribusi]]) bila \(F_n(x)\to F(x)\) di setiap titik kontinu \(F\). Konvergen dalam peluang memastikan konvergen dalam distribusi, tetapi tidak sebaliknya (kecuali limitnya konstanta).</p>
<h2>Teorema pendukung</h2>
<p><b>Continuous mapping:</b> \(g\) kontinu dan \(X_n\xrightarrow{D}X\) maka \(g(X_n)\xrightarrow{D}g(X)\). <b>[[slutsky|Slutsky]]:</b> \(X_n\xrightarrow{D}X\), \(Y_n\xrightarrow{P}c\) maka \(X_n+Y_n\to X+c\), \(X_nY_n\to cX\). <b>[[delta|Metode delta]]:</b> \(\sqrt n(\hat\theta-\theta)\xrightarrow{D}N(0,\sigma^2)\) maka \(\sqrt n(g(\hat\theta)-g(\theta))\xrightarrow{D}N(0,[g\prime(\theta)]^2\sigma^2)\).</p>
<h2>Contoh soal dan pembahasan</h2>
<div class="soal"><p><b>Soal.</b> \(X_i\) iid dengan mean 10 dan varians 4, \(n=100\). Beri batas atas \(P(|\bar X-10|\ge0{,}5)\).</p>
<p><b>Diketahui:</b> \(\mu=10\), \(\sigma^2=4\), \(n=100\), \(\varepsilon=0{,}5\).</p>
<p><b>Ditanyakan:</b> Batas atas peluang penyimpangan.</p>
<p><b>Penyelesaian:</b> Chebyshev: \(\frac{\sigma^2}{n\varepsilon^2}=\frac{4}{100(0{,}25)}=0{,}16\).</p>
<p><b>Interpretasi:</b> Peluang rata-rata menyimpang 0,5 atau lebih tidak lebih dari 16%; bila \(n\) diperbesar batas ini menuju 0 (WLLN).</p></div>`},
 {id:"statmat-m", t:"Metode momen (Pekan 6–8)", h:String.raw`<h2>Momen populasi dan momen sampel</h2>
<p>Momen populasi ke-\(k\): \(\mu'_k=E(X^k)\). Momen sampel: \(m'_k=\frac1n\sum_{i=1}^nX_i^k\), dengan \(m'_1=\bar X\). Ingat \(\mathrm{Var}(X)=\mu'_2-(\mu'_1)^2\) dan \(m'_2\ne\bar X^2\).</p>
<h2>Prinsip</h2>
<p>[[mom|Metode momen]] menyamakan \(m'_j=\mu'_j\), \(j=1,\dots,p\), untuk \(p\) parameter yang tidak diketahui, lalu menyelesaikan persamaannya. Metode ini sederhana tetapi tidak selalu seefisien [[mle|MLE]].</p>
<h2>Contoh 1: Uniform(0, θ)</h2>
<p>\(E(X)=\int_0^\theta x\frac1\theta dx=\frac\theta2\). Samakan \(\bar X=\theta/2\), sehingga \(\hat\theta_{MOM}=2\bar X\).</p>
<h2>Contoh 2: Normal(μ, σ²)</h2>
<p>\(\mu'_1=\mu\), \(\mu'_2=\sigma^2+\mu^2\). Maka \(\hat\mu=\bar X\) dan \(\hat\sigma^2=m'_2-\bar X^2=\frac1n\sum(X_i-\bar X)^2\).</p>
<h2>Contoh soal dan pembahasan</h2>
<div class="soal"><p><b>Soal.</b> Data dari Uniform(0, θ): 2, 4, 5, 7. Taksir θ dengan metode momen.</p>
<p><b>Diketahui:</b> \(n=4\), data 2, 4, 5, 7.</p>
<p><b>Ditanyakan:</b> \(\hat\theta_{MOM}\).</p>
<p><b>Penyelesaian:</b> \(\bar x=18/4=4{,}5\). \(\hat\theta=2\bar x=9\).</p>
<p><b>Interpretasi:</b> Taksiran 9 masuk akal karena melebihi pengamatan terbesar (7).</p></div>`},
 {id:"statmat-1", t:"Penaksiran titik dan MLE", h:String.raw`<h2>Penaksiran titik</h2>
<p>Misalkan \(X_1,\dots,X_n\) sampel acak yang fungsi kepadatannya bergantung pada parameter \(\theta\in\Omega\) yang tidak diketahui. Menaksir \(\theta\) dengan sebuah [[statistik|statistik]] disebut penaksiran titik. Penaksir yang baik, antara lain, [[takbias|takbias]]. Sebagai pembuka, [[mom|metode momen]] menaksir lewat momen sampel.</p>
<h2>Penaksir kemungkinan maksimum</h2>
<p>[[mle|MLE]] memilih \(\hat\theta\) yang memaksimumkan [[likelihood|fungsi likelihood]]. Biasanya lebih mudah memaksimumkan log-likelihood \(\ell(\theta)=\ln L(\theta)\) lewat \(\partial\ell/\partial\theta=0\).</p>
<h2>Contoh 1: Bernoulli</h2>
<p>Untuk \(f(x)=\theta^x(1-\theta)^{1-x}\), \(x=0,1\):</p>
\[L=\theta^{\sum x_i}(1-\theta)^{n-\sum x_i},\qquad \ell=\textstyle\sum x_i\ln\theta+(n-\sum x_i)\ln(1-\theta)\]
\[\frac{\partial\ell}{\partial\theta}=\frac{\sum x_i}{\theta}-\frac{n-\sum x_i}{1-\theta}=0\ \Rightarrow\ \hat\theta=\bar X\]
<h2>Contoh 2: Normal \(N(\theta,1)\)</h2>
\[\ell=-\tfrac n2\ln 2\pi-\tfrac12\textstyle\sum (x_i-\theta)^2,\qquad \frac{\partial\ell}{\partial\theta}=\sum(x_i-\theta)=0\ \Rightarrow\ \hat\theta=\bar X\]
<h2>Sifat invariansi</h2>
<p>Jika \(\hat\theta\) adalah MLE \(\theta\) dan \(\eta=g(\theta)\), maka MLE \(\eta\) adalah \(g(\hat\theta)\).</p>
<h2>Contoh soal dan pembahasan</h2>
<div class="soal"><p><b>Soal.</b> Sampel dari eksponensial \(f(x;\theta)=\frac1\theta e^{-x/\theta}\): 3, 5, 4. Taksir \(\theta\) dan \(P(X>2)\).</p>
<p><b>Diketahui:</b> \(n=3\), \(\sum x_i=12\).</p>
<p><b>Ditanyakan:</b> MLE \(\theta\) dan MLE \(P(X>2)\).</p>
<p><b>Penyelesaian:</b> \(\ell=-n\ln\theta-\frac1\theta\sum x_i\); \(\partial\ell/\partial\theta=0\Rightarrow\hat\theta=\bar x=4\). \(P(X>2)=e^{-2/\theta}\), invariansi: \(e^{-2/4}=0{,}6065\).</p>
<p><b>Interpretasi:</b> Rata-rata umur diperkirakan 4, dan peluang melebihi 2 diperkirakan 60,65%.</p></div>`},
 {id:"statmat-3", t:"Estimasi Bayesian", h:String.raw`<h2>Klasik vs Bayesian</h2>
<p>Pada MOM dan MLE, \(\theta\) adalah konstanta tak diketahui. Pada pendekatan Bayesian, \(\theta\) adalah peubah acak \(\Theta\) dengan [[prior|prior]] \(h(\theta)\). Setelah data \(x\) diamati, keyakinan diperbarui menjadi [[posterior|posterior]]:</p>
\[k(\theta\mid x)\propto L(x\mid\theta)\,h(\theta)\]
<h2>Fungsi kerugian dan penaksir Bayes</h2>
<p>Dengan [[loss|fungsi kerugian]], [[bayes|penaksir Bayes]] meminimumkan risiko posterior. Kerugian kuadratik \((\theta-\delta)^2\) memberi \(\delta^*=E(\theta\mid x)\), karena \(\partial/\partial\delta\,E[(\theta-\delta)^2]=-2E[\theta-\delta]=0\). Kerugian mutlak \(|\theta-\delta|\) memberi median posterior.</p>
<h2>Contoh: Binomial–Beta</h2>
<p>Dengan [[konjugat|prior konjugat]] Beta, posteriornya \(\text{Beta}(x+\alpha,\,n-x+\beta)\), sehingga:</p>
\[\delta^*(x)=\frac{x+\alpha}{n+\alpha+\beta}\]
<p>Ini rata-rata terbobot MLE dan rata-rata prior ([[shrink|shrinkage]]). Untuk \(n=10\), \(x=7\), prior Beta(2,2): \(\delta^*=9/14\approx0{,}643\), sedangkan MLE \(=0{,}7\).</p>
<h2>Catatan</h2>
<p>Bayesian fleksibel saat sampel kecil, tetapi hasilnya bergantung pada pilihan prior yang bersifat subjektif.</p>
<h2>Contoh soal dan pembahasan</h2>
<div class="soal"><p><b>Soal.</b> Dari \(n=10\) percobaan diperoleh \(x=7\) sukses; prior Beta(2,2). Taksir \(\theta\) dengan kerugian kuadratik.</p>
<p><b>Diketahui:</b> \(n=10\), \(x=7\), \(\alpha=\beta=2\).</p>
<p><b>Ditanyakan:</b> Penaksir Bayes.</p>
<p><b>Penyelesaian:</b> Posterior Beta(\(x+\alpha,n-x+\beta\)) = Beta(9, 5). \(\delta^*=\frac{9}{14}\approx0{,}643\).</p>
<p><b>Interpretasi:</b> Taksiran 0,643 ditarik dari MLE 0,7 ke arah prior 0,5 (shrinkage).</p></div>`},
 {id:"statmat-2", t:"Statistik cukup", h:String.raw`<h2>Gagasan</h2>
<p>[[suff|Statistik cukup]] merangkum seluruh informasi sampel tentang \(\theta\). Untuk Bernoulli, \(Y=\sum X_i\sim\text{Bin}(n,\theta)\) dan peluang sampel bersyaratnya:</p>
\[P(X_1=x_1,\dots,X_n=x_n\mid Y=y)=\frac{\theta^{y}(1-\theta)^{n-y}}{\binom ny\theta^{y}(1-\theta)^{n-y}}=\frac1{\binom ny}\]
<p>Hasilnya bebas dari \(\theta\), jadi \(Y\) cukup.</p>
<h2>Lewat definisi: Gamma(2, θ)</h2>
<p>Dengan [[mgf|m.g.f.]], \(M_Y(t)=(1-\theta t)^{-2n}\), sehingga \(Y=\sum X_i\sim\text{Gamma}(2n,\theta)\). Rasio kepadatan bersama terhadap kepadatan \(Y\) adalah \(\dfrac{\Gamma(2n)}{\Gamma(2)^n}\dfrac{x_1\cdots x_n}{(x_1+\cdots+x_n)^{2n-1}}\), bebas dari \(\theta\).</p>
<h2>Lewat faktorisasi</h2>
<p>[[neyman|Teorema Neyman]] lebih praktis. Untuk \(f(x)=\theta x^{\theta-1}\), \(0<x<1\):</p>
\[\prod f(x_i)=\underbrace{\theta^n\Big(\prod x_i\Big)^{\theta}}_{k_1}\cdot\underbrace{\frac1{\prod x_i}}_{k_2}\ \Rightarrow\ \prod X_i\text{ cukup untuk }\theta\]
<h2>Latihan: Poisson</h2>
<p>\(Y=\sum X_i\sim\text{Poisson}(n\theta)\) (lewat m.g.f. \(e^{n\theta(e^t-1)}\)). Rasionya:</p>
\[\frac{\prod \theta^{x_i}e^{-\theta}/x_i!}{(n\theta)^ye^{-n\theta}/y!}=\frac{y!}{n^y\,x_1!\cdots x_n!}\]
<p>Bebas dari \(\theta\), jadi \(\sum X_i\) cukup. Lewat Neyman: \(\theta^{\sum x}e^{-n\theta}\cdot\dfrac1{\prod x_i!}\).</p>
<h2>Contoh soal dan pembahasan</h2>
<div class="soal"><p><b>Soal.</b> Sampel Poisson(θ): 2, 3, 1, 4. Tunjukkan \(\sum X_i\) statistik cukup dan taksir \(\theta\).</p>
<p><b>Diketahui:</b> \(n=4\), \(\sum x_i=10\).</p>
<p><b>Ditanyakan:</b> Statistik cukup dan taksiran.</p>
<p><b>Penyelesaian:</b> \(Y=\sum X_i\sim\text{Poisson}(n\theta)\) dan rasio kepadatan \(\frac{y!}{n^y\prod x_i!}\) bebas \(\theta\), jadi \(Y\) cukup. \(\hat\theta=Y/n=2{,}5\).</p>
<p><b>Interpretasi:</b> Cukup mengetahui jumlah 10; urutan data tidak menambah informasi tentang \(\theta\).</p></div>`},
 {id:"statmat-4", t:"Statistik cukup lengkap dan UMVUE (Pekan 9–10)", h:String.raw`<h2>Statistik lengkap</h2>
<p>Statistik \(Y\) disebut [[lengkap|lengkap]] bagi \(\theta\) bila \(E[u(Y)]=0\) untuk <b>semua</b> \(\theta\in\Omega\) hanya mungkin terjadi jika \(u(Y)=0\) dengan peluang 1. Membuktikannya dari definisi biasanya sulit, jadi dipakai jalan pintas lewat kelas eksponensial.</p>
<h2>Kelas eksponensial (kasus regular)</h2>
<p>Agar masuk [[keleksp|kelas eksponensial]], pdf atau pmf harus berbentuk:</p>
<p><span class="boxf">\(f(x;\theta)=\exp\big[p(\theta)K(x)+H(x)+q(\theta)\big]\)</span></p>
<table><tr><th>No</th><th>Syarat</th></tr>
<tr><td>1</td><td>Support (himpunan \(x\) dengan \(f>0\)) tidak bergantung pada \(\theta\)</td></tr>
<tr><td>2</td><td>\(p(\theta)\) fungsi kontinu dan tidak konstan (nontrivial) dari \(\theta\in\Omega\)</td></tr>
<tr><td>3</td><td>Kasus kontinu: \(K'(x)\ne0\) dan \(H(x)\) kontinu pada support.<br>Kasus diskrit: \(K(x)\) tidak konstan pada support</td></tr></table>
⟦teorema|Jika \(X_1,\dots,X_n\) sampel acak dari keluarga ini, maka \(Y_1=\sum_{i=1}^{n}K(X_i)\) adalah statistik cukup dan lengkap untuk \(\theta\).⟧
<h2>Contoh 1: Normal \(N(\theta,\sigma^2)\), \(\sigma^2\) diketahui</h2>
⟦langkah|1|Tulis pdf dalam bentuk eksponensial|\[f(x;\theta)=\frac1{\sigma\sqrt{2\pi}}\exp\Big[-\frac{(x-\theta)^2}{2\sigma^2}\Big]=\exp\Big[\frac{\theta}{\sigma^2}\,x-\frac{x^2}{2\sigma^2}-\frac{\theta^2}{2\sigma^2}-\ln(\sigma\sqrt{2\pi})\Big]\]Trik: \(a=\exp(\ln a)\) untuk memasukkan \(\frac1{\sigma\sqrt{2\pi}}\) ke eksponen.⟧
⟦langkah|2|Kenali komponennya|\[p(\theta)=\frac{\theta}{\sigma^2},\quad K(x)=x,\quad H(x)=-\frac{x^2}{2\sigma^2}-\ln(\sigma\sqrt{2\pi}),\quad q(\theta)=-\frac{\theta^2}{2\sigma^2}\]⟧
⟦langkah|3|Periksa syarat|Support \((-\infty,\infty)\) tidak memuat \(\theta\); \(p(\theta)=\theta/\sigma^2\) kontinu dan tidak konstan; \(K'(x)=1\ne0\) dan \(H(x)\) kontinu.⟧
⟦langkah|4|Simpulkan|\[Y_1=\sum K(X_i)=\sum X_i=X_1+\cdots+X_n=n\bar X\]adalah statistik cukup lengkap bagi \(\theta\).⟧
<h2>Contoh 2: Poisson dengan parameter \(\theta\), \(0<\theta<\infty\)</h2>
⟦langkah|1|Bentuk eksponensial|\[f(x;\theta)=\frac{\theta^x e^{-\theta}}{x!}=\exp\big[(\ln\theta)\,x-\ln(x!)-\theta\big],\quad x=0,1,2,\dots\]⟧
⟦langkah|2|Komponen dan syarat|\(p(\theta)=\ln\theta\), \(K(x)=x\), \(H(x)=-\ln(x!)\), \(q(\theta)=-\theta\). Support \(\{0,1,2,\dots\}\) bebas dari \(\theta\); \(\ln\theta\) kontinu dan tidak konstan pada \(0<\theta<\infty\); \(K(x)=x\) tidak konstan.⟧
⟦langkah|3|Simpulkan|\(Y_1=\sum_{i=1}^{n}X_i\) adalah statistik cukup lengkap bagi \(\theta\).⟧
<h2>Penaksir takbias variansi minimum yang tunggal</h2>
<p>[[umvue|Teorema Lehmann–Scheffé]]: bila \(Y\) statistik cukup lengkap dan \(\varphi(Y)\) takbias untuk \(\theta\), maka \(\varphi(Y)\) adalah penaksir takbias variansi minimum (UMVUE) yang <b>tunggal</b>.</p>
⟦kes|Pada kedua contoh, \(E[\bar X]=\theta\) dan \(\bar X=Y_1/n\) adalah fungsi dari \(Y_1\). Jadi \(\bar X\) adalah UMVUE bagi \(\theta\) (normal dan Poisson).⟧
⟦catatan|Cek tambahan untuk Poisson: \(\operatorname{Var}(\bar X)=\theta/n\), sama dengan batas bawah Rao–Cramér. Bila syarat 1 gagal, misalnya \(U(0,\theta)\) yang supportnya \((0,\theta)\) bergantung pada \(\theta\), teorema kelas eksponensial tidak boleh dipakai.⟧`},
 {id:"statmat-6", t:"Selang kepercayaan (Pekan 11–12)", h:String.raw`<h2>Gagasan</h2>
<p>[[sel|Selang kepercayaan]] \(100(1-\alpha)\%\) dibangun dari [[pivot|pivot]]. Tafsirannya: bila prosedur diulang, \(100(1-\alpha)\%\) selang yang terbentuk memuat parameter. Parameter tetap; selanglah yang acak.</p>
<h2>Mean</h2>
\[\sigma\text{ diketahui: }\bar x\pm z_{\alpha/2}\frac{\sigma}{\sqrt n},\qquad \sigma\text{ tak diketahui: }\bar x\pm t_{\alpha/2,\,n-1}\frac{s}{\sqrt n}\]
<h2>Selisih dua mean (variansi sama, sampel bebas)</h2>
\[(\bar x_1-\bar x_2)\pm t_{\alpha/2,\,n_1+n_2-2}\,s_p\sqrt{\tfrac1{n_1}+\tfrac1{n_2}},\qquad s_p^2=\frac{(n_1-1)s_1^2+(n_2-1)s_2^2}{n_1+n_2-2}\]
<h2>Proporsi dan selisih proporsi</h2>
\[\hat p\pm z_{\alpha/2}\sqrt{\tfrac{\hat p(1-\hat p)}{n}},\qquad (\hat p_1-\hat p_2)\pm z_{\alpha/2}\sqrt{\tfrac{\hat p_1(1-\hat p_1)}{n_1}+\tfrac{\hat p_2(1-\hat p_2)}{n_2}}\]
<h2>Variansi dan rasio dua variansi</h2>
\[\left(\frac{(n-1)s^2}{\chi^2_{\alpha/2,\,n-1}},\ \frac{(n-1)s^2}{\chi^2_{1-\alpha/2,\,n-1}}\right),\qquad \left(\frac{s_1^2/s_2^2}{F_{\alpha/2,\,n_1-1,\,n_2-1}},\ \frac{s_1^2}{s_2^2}F_{\alpha/2,\,n_2-1,\,n_1-1}\right)\]
<p>Notasi \(\chi^2_{\alpha,\nu}\) dan \(F_{\alpha,\nu_1,\nu_2}\) adalah titik dengan luas \(\alpha\) di ekor kanan.</p>
<h2>Contoh soal dan pembahasan</h2>
<div class="soal"><p><b>Soal.</b> Sampel \(n=16\) dari populasi normal: \(\bar x=50\), \(s=8\). Buat selang 95% untuk \(\mu\).</p>
<p><b>Diketahui:</b> \(n=16\), \(\bar x=50\), \(s=8\), \(t_{0{,}025;15}=2{,}131\).</p>
<p><b>Ditanyakan:</b> Selang kepercayaan 95% untuk \(\mu\).</p>
<p><b>Penyelesaian:</b> Galat baku \(=8/4=2\); margin \(=2{,}131\times2=4{,}262\). Selang: \(50\pm4{,}262=(45{,}74;\ 54{,}26)\).</p>
<p><b>Interpretasi:</b> Dengan keyakinan 95%, rata-rata populasi berada antara 45,74 dan 54,26.</p></div>`},
 {id:"statmat-7", t:"Uji hipotesis dan daerah kritis terbaik (Pekan 13–14)", h:String.raw`<h2>Kerangka uji</h2>
<p>Hipotesis nol \(H_0\) diuji lawan \(H_1\) memakai daerah kritis \(C\): tolak \(H_0\) bila \((X_1,\dots,X_n)\in C\). Dua kesalahan ([[tipe12|galat tipe I dan II]]): \(\alpha=P(C;H_0)\), \(\beta=1-P(C;H_1)\), dan kuasa \(=1-\beta\). Hipotesis sederhana menentukan distribusi sepenuhnya; majemuk tidak.</p>
<h2>Daerah kritis terbaik</h2>
<p>Di antara semua daerah kritis berukuran \(\alpha\), yang terbaik memaksimumkan kuasa. Untuk \(H_0:\theta=\theta'\) lawan \(H_1:\theta=\theta''\), [[np|lemma Neyman–Pearson]] memberi \(C\) dengan \(\dfrac{L(\theta')}{L(\theta'')}\le k\) dan \(P(C;\theta')=\alpha\).</p>
<h2>Contoh: Normal \(N(\theta,1)\)</h2>
<p>\(H_0:\theta=0\) lawan \(H_1:\theta=1\). Rasionya \(\dfrac{L(0)}{L(1)}=\exp\!\big(-\sum x_i+\tfrac n2\big)\le k\iff\bar x\ge c\). Untuk \(n=25\), \(\alpha=0{,}05\): \(c=1{,}645/5=0{,}329\). Kuasa di \(\theta=1\): \(P(\bar X\ge0{,}329)=P(Z\ge-3{,}355)\approx0{,}9996\).</p>
<h2>Uji UMP</h2>
<p>Bila \(H_1\) majemuk dan daerah kritisnya sama untuk setiap \(\theta''\), uji tersebut [[ump|UMP]]. Untuk \(H_0:\theta=\theta_0\) lawan \(H_1:\theta>\theta_0\) pada \(N(\theta,\sigma^2)\): tolak bila \(\bar X\ge\theta_0+z_\alpha\sigma/\sqrt n\).</p>
<h2>Contoh soal dan pembahasan</h2>
<div class="soal"><p><b>Soal.</b> \(X\sim N(\theta,\,4)\), \(n=16\). Uji \(H_0:\theta=10\) lawan \(H_1:\theta>10\) pada \(\alpha=0{,}05\). Tentukan daerah kritis dan kuasa di \(\theta=11\).</p>
<p><b>Diketahui:</b> \(\sigma=2\), \(n=16\), \(\theta_0=10\), \(z_{0{,}05}=1{,}645\).</p>
<p><b>Ditanyakan:</b> \(c\) dan kuasa pada \(\theta=11\).</p>
<p><b>Penyelesaian:</b> \(c=10+1{,}645\cdot\frac{2}{4}=10{,}8225\). Kuasa \(=P(\bar X\ge10{,}8225\mid\theta=11)=P\big(Z\ge\frac{10{,}8225-11}{0{,}5}\big)=P(Z\ge-0{,}355)\approx0{,}6387\).</p>
<p><b>Interpretasi:</b> Tolak \(H_0\) bila \(\bar x\ge10{,}8225\). Bila \(\theta\) sebenarnya 11, uji ini mendeteksinya dengan peluang sekitar 64%.</p></div>`},
 {id:"statmat-8", t:"Uji chi-kuadrat dan rasio likelihood (Pekan 15–16)", h:String.raw`<h2>Uji chi-kuadrat Pearson</h2>
<p>[[chi2|Statistik Pearson]] \(Q=\sum\frac{(O_j-E_j)^2}{E_j}\) berdistribusi hampiran \(\chi^2\). Uji kecocokan: db \(=k-1-r\), \(r\) parameter yang ditaksir. Uji kebebasan tabel \(r\times c\): \(E_{ij}=\frac{\text{total baris}\times\text{total kolom}}{N}\), db \(=(r-1)(c-1)\). Syarat umum: \(E_j\ge5\). Tolak \(H_0\) bila \(Q>\chi^2_{\alpha,\text{db}}\).</p>
<h2>Uji rasio likelihood</h2>
<p>[[lrt|LRT]]: \(\Lambda=\dfrac{\max_{\omega}L}{\max_{\Omega}L}\in(0,1]\); tolak \(H_0\) bila \(\Lambda\le k\). Untuk sampel besar \(-2\ln\Lambda\dot\sim\chi^2_r\). Pada \(N(\theta,1)\) dengan \(H_0:\theta=\theta_0\): \(\hat\theta=\bar X\), \(\Lambda=\exp\!\big(-\tfrac n2(\bar x-\theta_0)^2\big)\), jadi \(-2\ln\Lambda=n(\bar x-\theta_0)^2=Z^2\sim\chi^2_1\) (eksak).</p>
<h2>Contoh soal dan pembahasan</h2>
<div class="soal"><p><b>Soal.</b> Dadu dilempar 60 kali; frekuensi mata 1 sampai 6: 8, 12, 9, 11, 10, 10. Ujilah apakah dadu adil pada \(\alpha=0{,}05\) (\(\chi^2_{0{,}05;5}=11{,}07\)).</p>
<p><b>Diketahui:</b> \(n=60\), \(E_j=10\), \(k=6\), tidak ada parameter ditaksir.</p>
<p><b>Ditanyakan:</b> Keputusan uji.</p>
<p><b>Penyelesaian:</b> \(Q=\frac{4+4+1+1+0+0}{10}=1{,}0\), db \(=5\). Karena \(1{,}0<11{,}07\), \(H_0\) tidak ditolak.</p>
<p><b>Interpretasi:</b> Tidak ada bukti dadu tidak adil; penyimpangan frekuensi masih wajar akibat peluang.</p></div>`},
]};
