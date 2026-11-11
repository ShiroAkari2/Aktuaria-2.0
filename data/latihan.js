/* Latihan soal per bab. Kuncinya = id bab. q = soal, a = pembahasan (boleh memakai [[id|teks]]). */
const P = {
 "statmat-1":[
  {q:String.raw`Tinggi mahasiswa berdistribusi \(N(\mu=100,\ \sigma=15)\). Sampel acak \(n=36\). Hitung \(P(\bar X>103)\).`,
   a:String.raw`<p><b>Diketahui:</b> \(\mu=100\), \(\sigma=15\), \(n=36\). <b>Ditanyakan:</b> \(P(\bar X>103)\).</p>
<p><b>Penyelesaian:</b> \(\bar X\sim N(100,\ 15^2/36)\), galat baku \(=15/6=2{,}5\). \(z=\dfrac{103-100}{2{,}5}=1{,}2\). \(P(Z>1{,}2)=1-0{,}8849=0{,}1151\).</p>
<p><b>Interpretasi:</b> Rata-rata sampel 36 orang melebihi 103 hanya sekitar 11,5% dari waktu.</p>`},
  {q:String.raw`Populasi normal dengan \(\sigma=10\). Berapa ukuran sampel minimum agar \(P(\lvert\bar X-\mu\rvert<2)\ge0{,}95\)?`,
   a:String.raw`<p><b>Penyelesaian:</b> \(\bar X\sim N(\mu,100/n)\). \(P(\lvert\bar X-\mu\rvert<2)=P\!\left(\lvert Z\rvert<\dfrac{2\sqrt n}{10}\right)\ge0{,}95\iff\dfrac{2\sqrt n}{10}\ge1{,}96\iff\sqrt n\ge9{,}8\iff n\ge96{,}04\).</p>
<p><b>Interpretasi:</b> Dibutuhkan \(n=97\). Menggandakan ketelitian (selisih 1) membutuhkan \(n\) empat kali lebih besar.</p>`},
  {q:String.raw`Sampel \(n=10\) dari populasi normal dengan \(\sigma^2=18\). Tentukan \(c\) sehingga \(P(S^2<c)=0{,}05\). (Tabel: \(\chi^2_{0{,}95;9}=3{,}325\).)`,
   a:String.raw`<p>\(\dfrac{9S^2}{18}=\dfrac{S^2}{2}\sim\chi^2(9)\). \(P(S^2<c)=P\!\left(\chi^2(9)<\dfrac c2\right)=0{,}05\Rightarrow\dfrac c2=3{,}325\Rightarrow c=6{,}65\).</p>
<p><b>Interpretasi:</b> Hanya 5% sampel berukuran 10 memiliki variansi di bawah 6,65 bila \(\sigma^2=18\).</p>`},
  {q:String.raw`Sampel \(n=16\) dari \(N(20,\sigma^2)\) dengan \(\sigma^2\) tak diketahui. Tentukan \(c\) sehingga \(P(\bar X>20+c\,S)=0{,}05\). (\(t_{0{,}05;15}=1{,}753\).)`,
   a:String.raw`<p>\(T=\dfrac{\bar X-20}{S/4}\sim t(15)\). \(P(\bar X-20>cS)=P(T>4c)=0{,}05\Rightarrow4c=1{,}753\Rightarrow c=0{,}438\).</p>`},
  {q:String.raw`Lima komponen independen berumur eksponensial dengan laju 1 (mean 1). Sistem gagal saat komponen pertama gagal. Tentukan distribusi \(Y_1=\min X_i\) dan \(P(Y_1>0{,}5)\) untuk \(n=4\).`,
   a:String.raw`<p>Dengan \(F(y)=1-e^{-y}\): \(P(Y_1>y)=[1-F(y)]^n=e^{-ny}\), jadi \(Y_1\sim\)Eksponensial dengan laju \(n\) (mean \(1/n\)). Untuk \(n=4\): \(P(Y_1>0{,}5)=e^{-2}=0{,}1353\).</p>
<p><b>Interpretasi:</b> Makin banyak komponen, makin cepat kegagalan pertama (mean \(1/4\) satuan waktu).</p>`},
  {q:String.raw`Dua sampel bebas dari populasi normal dengan variansi sama: \(n_1=10\), \(s_1^2=4\); \(n_2=12\), \(s_2^2=6\). Hitung \(s_p^2\) dan galat baku \(\bar X_1-\bar X_2\) yang ditaksir, serta db statistik-\(t\).`,
   a:String.raw`<p>\(s_p^2=\dfrac{9(4)+11(6)}{20}=5{,}1\). Galat baku \(=s_p\sqrt{\tfrac1{10}+\tfrac1{12}}=2{,}258\times0{,}4282=0{,}967\). db \(=n_1+n_2-2=20\).</p>`},
 ],
 "statmat-2":[
  {q:String.raw`Seratus dadu dilempar dan dijumlah. Hampiri \(P(S>370)\).`,
   a:String.raw`<p><b>Diketahui:</b> satu dadu \(\mu=3{,}5\), \(\sigma^2=35/12\). <b>Ditanyakan:</b> \(P(S>370)\).</p>
<p><b>Penyelesaian:</b> \(S\approx N(350,\ 291{,}67)\), \(\sigma_S=17{,}08\). Karena \(S\) bulat, \(P(S\ge371)\approx P(Y>370{,}5)\); \(z=\dfrac{20{,}5}{17{,}08}=1{,}20\); \(P(Z>1{,}20)=0{,}1151\).</p>
<p><b>Interpretasi:</b> Jumlah 100 dadu melebihi 370 dengan peluang sekitar 11,5%.</p>`},
  {q:String.raw`\(X\sim\text{Poisson}(25)\). Hampiri \(P(X\le20)\) dengan koreksi kontinuitas.`,
   a:String.raw`<p>\(X\approx N(25,25)\), \(\sigma=5\). \(P(X\le20)\approx P(Y<20{,}5)\); \(z=\dfrac{20{,}5-25}{5}=-0{,}9\); \(P(Z<-0{,}9)=0{,}1841\). (Nilai eksak 0,1855.)</p>`},
  {q:String.raw`Berapa pelemparan koin seimbang (\(p=0{,}5\)) agar \(P(\lvert\hat p-p\rvert<0{,}05)\ge0{,}95\)? Hitung dengan CLT dan dengan Chebyshev, lalu bandingkan.`,
   a:String.raw`<p><b>CLT:</b> \(\hat p\approx N\!\left(p,\dfrac{p(1-p)}n\right)\); butuh \(1{,}96\sqrt{\dfrac{0{,}25}{n}}\le0{,}05\Rightarrow n\ge\dfrac{1{,}96^2(0{,}25)}{0{,}05^2}=384{,}16\), jadi \(n=385\).</p>
<p><b>Chebyshev:</b> \(P(\lvert\hat p-p\rvert\ge0{,}05)\le\dfrac{0{,}25}{n(0{,}05)^2}\le0{,}05\Rightarrow n\ge2000\).</p>
<p><b>Interpretasi:</b> Chebyshev menjamin tanpa asumsi, tetapi membutuhkan sampel sekitar lima kali lebih besar daripada CLT.</p>`},
  {q:String.raw`Waktu layanan nasabah memiliki mean 10 menit dan simpangan baku 4 menit. Untuk 64 nasabah, hitung peluang rata-rata waktu layanan melebihi 11 menit.`,
   a:String.raw`<p>\(\bar X\approx N(10,\ 16/64)\), galat baku \(=0{,}5\). \(z=\dfrac{11-10}{0{,}5}=2\); \(P(Z>2)=0{,}0228\).</p>
<p><b>Interpretasi:</b> Hanya 2,3% peluang rata-rata 64 nasabah melebihi 11 menit, walaupun waktu layanan individu sering melebihi itu.</p>`},
  {q:String.raw`Buktikan dengan Chebyshev bahwa untuk \(X_i\sim\text{Bernoulli}(p)\): \(P(\lvert\hat p_n-p\rvert\ge\varepsilon)\le\dfrac1{4n\varepsilon^2}\).`,
   a:String.raw`<p>\(E(\hat p_n)=p\), \(\mathrm{Var}(\hat p_n)=\dfrac{p(1-p)}n\). Chebyshev: \(P(\lvert\hat p_n-p\rvert\ge\varepsilon)\le\dfrac{p(1-p)}{n\varepsilon^2}\). Karena \(p(1-p)\le\tfrac14\) untuk semua \(p\in[0,1]\) (maksimum di \(p=\tfrac12\)), batasnya \(\le\dfrac1{4n\varepsilon^2}\to0\). \(\blacksquare\)</p>`},
 ],
 "statmat-3":[
  {q:String.raw`\(X_i\) iid dengan mean \(\mu\). Mengapa \(\bar X_n^{\,2}\xrightarrow{P}\mu^2\)?`,
   a:String.raw`<p>WLLN: \(\bar X_n\xrightarrow{P}\mu\). Fungsi \(g(x)=x^2\) kontinu, sehingga menurut teorema pemetaan kontinu \(g(\bar X_n)\xrightarrow{P}g(\mu)=\mu^2\).</p>`},
  {q:String.raw`\(X_i\sim\text{Exp}\) (mean 1) iid dan \(Y_n=\min X_i\). Tunjukkan \(Y_n\xrightarrow{P}0\), dan cari limit distribusi \(nY_n\).`,
   a:String.raw`<p>\(P(Y_n>y)=e^{-ny}\), jadi untuk \(\varepsilon>0\): \(P(\lvert Y_n\rvert\ge\varepsilon)=e^{-n\varepsilon}\to0\). Maka \(Y_n\xrightarrow{P}0\).</p>
<p>Untuk \(nY_n\): \(P(nY_n>t)=P(Y_n>t/n)=e^{-n(t/n)}=e^{-t}\) untuk setiap \(n\). Jadi \(nY_n\sim\text{Exp}(1)\) tepat, maka \(nY_n\xrightarrow{D}\text{Exp}(1)\).</p>`},
  {q:String.raw`Misal \(X_n=n\) dengan peluang \(1/n\) dan \(X_n=0\) dengan peluang \(1-1/n\). Tunjukkan \(X_n\xrightarrow{P}0\) tetapi tidak konvergen dalam rata-rata kuadrat.`,
   a:String.raw`<p>Untuk \(0<\varepsilon<n\): \(P(\lvert X_n\rvert\ge\varepsilon)=P(X_n=n)=1/n\to0\), jadi \(X_n\xrightarrow{P}0\).</p>
<p>Tetapi \(E(X_n^2)=n^2\cdot\dfrac1n=n\to\infty\), bukan 0. Jadi \(X_n\not\xrightarrow{L^2}0\).</p>
<p><b>Interpretasi:</b> Konvergen dalam peluang tidak menjamin konvergen dalam rata-rata kuadrat; nilai ekstrem yang langka tetapi besar dapat merusak momen.</p>`},
  {q:String.raw`\(X_i\) iid dengan \(p=0{,}3\) Bernoulli, \(n=100\). Gunakan metode delta untuk hampiran simpangan baku \(\hat p(1-\hat p)\).`,
   a:String.raw`<p>\(\sqrt n(\hat p-p)\xrightarrow{D}N(0,p(1-p))\). Dengan \(g(p)=p(1-p)\), \(g'(p)=1-2p=0{,}4\) pada \(p=0{,}3\).</p>
<p>Variansi hampiran \(g(\hat p)\approx\dfrac{[g'(p)]^2\,p(1-p)}{n}=\dfrac{0{,}16\times0{,}21}{100}=0{,}000336\); simpangan baku \(=0{,}0183\).</p>
<p><b>Interpretasi:</b> \(\hat p(1-\hat p)\) berfluktuasi sekitar \(0{,}21\pm0{,}018\).</p>`},
  {q:String.raw`Mengapa \(t(n-1)\) dan \(N(0,1)\) hampir sama untuk \(n\) besar? Jelaskan dengan Slutsky.`,
   a:String.raw`<p>\(T_n=\dfrac{\bar X-\mu}{\sigma/\sqrt n}\cdot\dfrac{\sigma}{S}\). Faktor pertama \(\xrightarrow{D}N(0,1)\) (CLT); faktor kedua \(\xrightarrow{P}1\) karena \(S^2\xrightarrow{P}\sigma^2\). Slutsky: hasil kalinya \(\xrightarrow{D}N(0,1)\). Jadi ketidakpastian dari menaksir \(\sigma\) menghilang bila \(n\) besar.</p>`},
 ],
 "statmat-4":[
  {q:String.raw`Sampel 2, 3, 5 dari \(f(x;\theta)=\theta e^{-\theta x}\), \(x>0\) (laju \(\theta\)). Cari MLE \(\theta\) dan MLE \(P(X>4)\).`,
   a:String.raw`<p><b>Diketahui:</b> \(n=3\), \(\sum x_i=10\). \(\ell=n\ln\theta-\theta\sum x_i\).</p>
<p><b>Penyelesaian:</b> \(\ell'=\dfrac n\theta-\sum x_i=0\Rightarrow\hat\theta=\dfrac{n}{\sum x_i}=\dfrac{3}{10}=0{,}3\). \(P(X>4)=e^{-4\theta}\); invariansi: \(e^{-4(0{,}3)}=e^{-1{,}2}=0{,}3012\).</p>
<p><b>Interpretasi:</b> Laju kejadian diperkirakan 0,3 per satuan waktu, dan sekitar 30% peluang masa tunggu melebihi 4.</p>`},
  {q:String.raw`Sampel 0,5; 0,25; 0,8; 0,4 dari \(f(x;\theta)=\theta x^{\theta-1}\), \(0<x<1\). Cari penaksir momen dan MLE \(\theta\).`,
   a:String.raw`<p><b>Momen:</b> \(E(X)=\dfrac{\theta}{\theta+1}\). Samakan dengan \(\bar x=0{,}4875\): \(\hat\theta_{MOM}=\dfrac{\bar x}{1-\bar x}=\dfrac{0{,}4875}{0{,}5125}=0{,}951\).</p>
<p><b>MLE:</b> \(\ell=n\ln\theta+(\theta-1)\sum\ln x_i\); \(\ell'=\dfrac n\theta+\sum\ln x_i=0\Rightarrow\hat\theta=-\dfrac{n}{\sum\ln x_i}\). \(\sum\ln x_i=-3{,}219\), maka \(\hat\theta_{MLE}=\dfrac{4}{3{,}219}=1{,}243\).</p>
<p><b>Interpretasi:</b> Dua metode memberi taksiran berbeda (0,95 vs 1,24) pada sampel sekecil ini. MLE memakai seluruh bentuk pdf sehingga umumnya lebih efisien.</p>`},
  {q:String.raw`Tunjukkan MLE \(\hat\sigma^2=\dfrac1n\sum(X_i-\bar X)^2\) pada normal bias, dan hitung bias serta penaksir takbiasnya.`,
   a:String.raw`<p>Dari Bab 1: \(E\sum(X_i-\bar X)^2=(n-1)\sigma^2\). Jadi \(E(\hat\sigma^2)=\dfrac{n-1}{n}\sigma^2\), bias \(=-\dfrac{\sigma^2}{n}\). Penaksir takbias: \(\dfrac{n}{n-1}\hat\sigma^2=S^2\).</p>
<p><b>Interpretasi:</b> MLE cenderung meremehkan variansi (bias \(\to0\) saat \(n\to\infty\), jadi tetap konsisten).</p>`},
  {q:String.raw`\(n=4\) percobaan Bernoulli menghasilkan 3 sukses. Prior Beta(1, 1) (seragam). Cari penaksir Bayes dengan kerugian kuadrat dan bandingkan dengan MLE.`,
   a:String.raw`<p>Posterior Beta\((1+3,\ 1+4-3)=\) Beta\((4,2)\). \(\delta^*=\dfrac{4}{6}=0{,}667\). MLE \(=3/4=0{,}75\).</p>
<p><b>Interpretasi:</b> Prior seragam menarik taksiran ke 0,5 (shrinkage), dari 0,75 menjadi 0,667; efeknya besar karena \(n\) kecil.</p>`},
  {q:String.raw`Pada \(N(\mu,\sigma^2)\) bandingkan MSE \(S^2\) dengan MSE \(\hat\sigma^2_{MLE}\) untuk \(n=10\). Gunakan \(\mathrm{Var}(S^2)=\dfrac{2\sigma^4}{n-1}\).`,
   a:String.raw`<p>\(\mathrm{MSE}(S^2)=\mathrm{Var}(S^2)=\dfrac{2\sigma^4}{9}=0{,}2222\sigma^4\) (takbias).</p>
<p>\(\hat\sigma^2=\dfrac{n-1}{n}S^2\): \(\mathrm{Var}=\left(\dfrac{n-1}{n}\right)^2\dfrac{2\sigma^4}{n-1}=\dfrac{2(n-1)}{n^2}\sigma^4\), bias\(^2=\dfrac{\sigma^4}{n^2}\). \(\mathrm{MSE}=\dfrac{2n-1}{n^2}\sigma^4=0{,}19\sigma^4\).</p>
<p><b>Interpretasi:</b> Penaksir yang bias (MLE) justru memiliki MSE lebih kecil (0,19 vs 0,222). Takbias tidak otomatis terbaik dalam arti MSE.</p>`},
 ],
 "statmat-5":[
  {q:String.raw`Tunjukkan \(Y=\sum X_i\) cukup bagi \(\theta\) pada Bernoulli(\(\theta\)) lewat faktorisasi Neyman.`,
   a:String.raw`<p>\(\prod\theta^{x_i}(1-\theta)^{1-x_i}=\theta^{\sum x_i}(1-\theta)^{n-\sum x_i}\cdot1\). Maka \(k_1(\sum x_i;\theta)=\theta^{\sum x_i}(1-\theta)^{n-\sum x_i}\) dan \(k_2\equiv1\) bebas \(\theta\). Jadi \(\sum X_i\) cukup. \(\blacksquare\)</p>`},
  {q:String.raw`\(X_i\) eksponensial dengan mean \(\theta\). Cari UMVUE bagi \(\theta\) dan variansinya; hitung untuk data 2, 5, 2.`,
   a:String.raw`<p>Kelas eksponensial dengan \(K(x)=x\) (\(p=-1/\theta\)), maka \(\sum X_i\) cukup lengkap. \(E(\bar X)=\theta\) dan \(\bar X\) fungsi \(\sum X_i\): \(\bar X\) UMVUE. \(\mathrm{Var}(\bar X)=\theta^2/n\).</p>
<p>Data 2, 5, 2: \(\bar x=3\). <b>Interpretasi:</b> taksiran rata-rata umur 3 dengan galat baku sekitar \(\theta/\sqrt3\).</p>`},
  {q:String.raw`\(X_i\sim U(0,\theta)\), \(Y=\max X_i\). Buktikan \(Y\) lengkap dan cari UMVUE \(\theta\). Hitung untuk \(n=5\), \(y=8\).`,
   a:String.raw`<p>Pdf \(Y\): \(g(y)=ny^{n-1}/\theta^n\). Misal \(E\,u(Y)=0\) untuk semua \(\theta\): \(\int_0^\theta u(y)ny^{n-1}\theta^{-n}dy=0\Rightarrow\int_0^\theta u(y)y^{n-1}dy=0\). Turunkan terhadap \(\theta\): \(u(\theta)\theta^{n-1}=0\Rightarrow u\equiv0\). Jadi \(Y\) lengkap (dan cukup lewat Neyman).</p>
<p>\(E(Y)=\dfrac{n}{n+1}\theta\), maka \(\varphi(Y)=\dfrac{n+1}{n}Y\) takbias, jadi UMVUE. Untuk \(n=5\), \(y=8\): \(\dfrac65(8)=9{,}6\).</p>
<p><b>Interpretasi:</b> Maksimum sampel (8) pasti di bawah \(\theta\); koreksi \(\frac{n+1}n\) menaikkannya menjadi 9,6.</p>`},
  {q:String.raw`\(X_i\sim N(\mu,\theta)\) dengan \(\mu\) diketahui, \(\theta=\sigma^2\). Cari UMVUE \(\sigma^2\); hitung untuk \(\mu=0\) dan data 1, \(-2\), 2, \(-1\).`,
   a:String.raw`<p>\(f=\exp\!\big[-\tfrac1{2\theta}(x-\mu)^2-\tfrac12\ln(2\pi\theta)\big]\): kelas eksponensial dengan \(K(x)=(x-\mu)^2\). Jadi \(\sum(X_i-\mu)^2\) cukup lengkap. \(E(X_i-\mu)^2=\theta\) sehingga \(\dfrac1n\sum(X_i-\mu)^2\) takbias: UMVUE.</p>
<p>Data: \(\sum x_i^2=1+4+4+1=10\); UMVUE \(=10/4=2{,}5\).</p>`},
  {q:String.raw`Pada Poisson(\(\theta\)), \(Y_2=X_1\) takbias bagi \(\theta\). Gunakan Rao–Blackwell dengan \(Y_1=\sum X_i\) dan bandingkan variansi.`,
   a:String.raw`<p>Karena \(X_i\) iid, \(E(X_1\mid Y_1)=E(X_2\mid Y_1)=\cdots\) dan jumlahnya \(=Y_1\), jadi \(\varphi(Y_1)=Y_1/n=\bar X\).</p>
<p>\(\mathrm{Var}(X_1)=\theta\) vs \(\mathrm{Var}(\bar X)=\theta/n\): variansi turun \(n\) kali.</p>`},
 ],
 "statmat-6":[
  {q:String.raw`Sampel \(n=36\) dari populasi dengan \(\sigma=12\) memberi \(\bar x=100\). Buat selang 95% untuk \(\mu\).`,
   a:String.raw`<p>\(\sigma\) diketahui: \(100\pm1{,}96\times\dfrac{12}{6}=100\pm3{,}92=(96{,}08;\ 103{,}92)\).</p>
<p><b>Interpretasi:</b> Dengan keyakinan 95%, \(\mu\) berada antara 96,08 dan 103,92.</p>`},
  {q:String.raw`Survei A: \(\hat p_1=0{,}55\), \(n_1=200\). Survei B: \(\hat p_2=0{,}45\), \(n_2=250\). Buat selang 95% untuk \(p_1-p_2\).`,
   a:String.raw`<p>Beda \(=0{,}10\). Galat baku \(=\sqrt{\dfrac{0{,}55(0{,}45)}{200}+\dfrac{0{,}45(0{,}55)}{250}}=\sqrt{0{,}0022275}=0{,}0472\). Margin \(=1{,}96\times0{,}0472=0{,}0925\). Selang: \((0{,}0075;\ 0{,}1925)\).</p>
<p><b>Interpretasi:</b> Selang seluruhnya positif, jadi ada bukti \(p_1>p_2\) pada tingkat 95%, walau batas bawahnya sangat dekat dengan 0.</p>`},
  {q:String.raw`Sampel \(n=9\) (normal): \(\bar x=12{,}4\), \(s=3\). Buat selang 95% untuk \(\mu\). (\(t_{0{,}025;8}=2{,}306\).)`,
   a:String.raw`<p>Galat baku \(=3/3=1\). Selang: \(12{,}4\pm2{,}306=(10{,}09;\ 14{,}71)\).</p>`},
  {q:String.raw`Sampel \(n=21\) dari populasi normal memberi \(s^2=9\). Buat selang 90% untuk \(\sigma^2\). (\(\chi^2_{0{,}05;20}=31{,}410\), \(\chi^2_{0{,}95;20}=10{,}851\).)`,
   a:String.raw`<p>\((n-1)s^2=180\). Selang: \(\left(\dfrac{180}{31{,}410},\ \dfrac{180}{10{,}851}\right)=(5{,}73;\ 16{,}59)\).</p>
<p><b>Interpretasi:</b> Variansi diperkirakan antara 5,73 dan 16,59; \(s^2=9\) bukan titik tengah selang (selang \(\chi^2\) tidak simetris).</p>`},
  {q:String.raw`Berapa responden agar margin 95% untuk proporsi tidak lebih dari 0,03 (tanpa informasi awal tentang \(p\))? Jelaskan arti "keyakinan 95%".`,
   a:String.raw`<p>\(p=0{,}5\) (kasus terburuk): \(n\ge\dfrac{1{,}96^2(0{,}25)}{0{,}03^2}=1067{,}1\), jadi \(n=1068\).</p>
<p>"Keyakinan 95%" berarti prosedur pembentukan selang menangkap \(p\) pada 95% dari sampel yang mungkin; bukan peluang 95% bahwa \(p\) berada dalam selang tertentu yang sudah dihitung.</p>`},
 ],
 "statmat-7":[
  {q:String.raw`\(X_i\sim\text{Poisson}(\theta)\), \(n\) pengamatan. Uji \(H_0:\theta=2\) lawan \(H_1:\theta=3\). Tunjukkan daerah kritis terbaik berbentuk \(\sum x_i\ge c\).`,
   a:String.raw`<p>\(\dfrac{L(2)}{L(3)}=\dfrac{2^{\sum x_i}e^{-2n}}{3^{\sum x_i}e^{-3n}}=\left(\dfrac23\right)^{\sum x_i}e^{n}\). Karena \(2/3<1\), rasio menurun terhadap \(\sum x_i\); \(\le k\) ekuivalen dengan \(\sum x_i\ge c\). \(c\) ditentukan dari \(P(\sum X_i\ge c;\theta=2)\approx\alpha\), dengan \(\sum X_i\sim\text{Poisson}(2n)\).</p>`},
  {q:String.raw`\(X\sim N(\theta,9)\), \(n=36\). Uji \(H_0:\theta=5\) lawan \(H_1:\theta=6\) dengan daerah kritis \(\bar x\ge5{,}5\). Hitung \(\alpha\), \(\beta\), dan kuasa.`,
   a:String.raw`<p>Galat baku \(=3/6=0{,}5\). \(\alpha=P(\bar X\ge5{,}5;5)=P(Z\ge1)=0{,}1587\). Kuasa \(=P(\bar X\ge5{,}5;6)=P(Z\ge-1)=0{,}8413\); \(\beta=0{,}1587\).</p>
<p><b>Interpretasi:</b> Titik potong tepat di tengah kedua mean sehingga kedua galat sama (15,9%). Menggeser \(c\) ke kanan menurunkan \(\alpha\) tetapi menaikkan \(\beta\).</p>`},
  {q:String.raw`Pada Contoh 2 Bab 7 (\(N(\theta,4)\), \(n=16\), \(H_0:\theta=10\)), bila \(c\) diganti menjadi 11, berapa \(\alpha\) dan kuasa di \(\theta=11\)?`,
   a:String.raw`<p>\(\alpha=P(\bar X\ge11;10)=P(Z\ge\tfrac{1}{0{,}5})=P(Z\ge2)=0{,}0228\). Kuasa di \(\theta=11\): \(P(\bar X\ge11;11)=0{,}5\).</p>
<p><b>Interpretasi:</b> \(\alpha\) turun dari 0,05 menjadi 0,0228, tetapi kuasa turun dari 0,64 menjadi 0,50: trade-off antara kedua galat.</p>`},
  {q:String.raw`Uji dua arah \(H_0:\mu=50\) memberi statistik \(z=2{,}3\). Hitung p-value dan putuskan pada \(\alpha=0{,}05\) dan \(\alpha=0{,}01\).`,
   a:String.raw`<p>p-value \(=2P(Z\ge2{,}3)=2(1-0{,}9893)=0{,}0214\). Pada \(\alpha=0{,}05\): tolak \(H_0\). Pada \(\alpha=0{,}01\): gagal tolak (\(0{,}0214>0{,}01\)).</p>
<p><b>Interpretasi:</b> Keputusan bergantung pada \(\alpha\) yang ditetapkan lebih dulu; p-value 0,0214 menyatakan bukti sedang.</p>`},
  {q:String.raw`\(\sigma=10\). Berapa \(n\) agar uji satu arah \(H_0:\mu=\mu_0\) lawan \(H_1:\mu=\mu_0+3\) berukuran \(\alpha=0{,}05\) memiliki kuasa 80%?`,
   a:String.raw`<p>\(z_{0{,}05}=1{,}645\), \(z_{0{,}20}=0{,}8416\). \(n=\left(\dfrac{(1{,}645+0{,}8416)(10)}{3}\right)^2=8{,}289^2=68{,}7\Rightarrow n=69\).</p>`},
 ],
 "statmat-8":[
  {q:String.raw`Persilangan kacang (Mendel) memberi 315, 101, 108, 32 untuk empat fenotipe (total 556). Ujilah \(H_0\): rasio 9:3:3:1 pada \(\alpha=0{,}05\). (\(\chi^2_{0{,}05;3}=7{,}815\).)`,
   a:String.raw`<p><b>Harapan:</b> \(556\times\tfrac{9}{16}=312{,}75\); \(104{,}25\); \(104{,}25\); \(34{,}75\).</p>
<p>\(Q=\dfrac{2{,}25^2}{312{,}75}+\dfrac{3{,}25^2}{104{,}25}+\dfrac{3{,}75^2}{104{,}25}+\dfrac{2{,}75^2}{34{,}75}=0{,}016+0{,}101+0{,}135+0{,}218=0{,}470\); db \(=3\).</p>
<p><b>Interpretasi:</b> \(0{,}470<7{,}815\) (p-value 0,93): data sangat cocok dengan rasio 9:3:3:1.</p>`},
  {q:String.raw`Survei 200 orang: pilihan produk (A atau B) dan tingkat kepuasan (puas, netral, tidak puas). A: 40, 30, 30. B: 60, 30, 10. Ujilah kebebasan pada \(\alpha=0{,}05\). (\(\chi^2_{0{,}05;2}=5{,}991\).)`,
   a:String.raw`<p>Total baris 100 dan 100; total kolom 100, 60, 40. Harapan: baris A dan B sama: 50, 30, 20.</p>
<p>\(Q=\dfrac{(40-50)^2}{50}+\dfrac{0}{30}+\dfrac{(30-20)^2}{20}+\dfrac{(60-50)^2}{50}+\dfrac{0}{30}+\dfrac{(10-20)^2}{20}=2+0+5+2+0+5=14\); db \(=(2-1)(3-1)=2\).</p>
<p><b>Interpretasi:</b> \(14>5{,}991\) (p-value 0,0009): tolak \(H_0\). Kepuasan bergantung pada produk; pengguna B lebih banyak yang puas (60%) dan lebih sedikit yang tidak puas (10%).</p>`},
  {q:String.raw`\(X\sim N(\theta,\sigma^2)\), \(\sigma=6\), \(n=36\). Tentukan daerah kritis UMP untuk \(H_0:\theta=50\) lawan \(H_1:\theta<50\) pada \(\alpha=0{,}05\).`,
   a:String.raw`<p>Galat baku \(=6/6=1\). Daerah kritis NP untuk \(\theta''<50\) selalu \(\bar x\le c\), \(c=50-1{,}645(1)=48{,}355\), tidak bergantung pada \(\theta''\): maka UMP untuk \(H_1:\theta<50\).</p>`},
  {q:String.raw`\(X_i\) eksponensial dengan mean \(\theta\). LRT untuk \(H_0:\theta=\theta_0\): tunjukkan \(-2\ln\Lambda=2n\left[\dfrac{\bar x}{\theta_0}-1-\ln\dfrac{\bar x}{\theta_0}\right]\). Hitung untuk \(n=10\), \(\bar x=1{,}5\), \(\theta_0=1\).`,
   a:String.raw`<p>\(L(\theta)=\theta^{-n}e^{-n\bar x/\theta}\). \(\max L=L(\bar x)=\bar x^{-n}e^{-n}\), \(L(\theta_0)=\theta_0^{-n}e^{-n\bar x/\theta_0}\). \(\Lambda=\left(\dfrac{\bar x}{\theta_0}\right)^ne^{\,n-n\bar x/\theta_0}\), jadi \(-2\ln\Lambda=-2n\left[\ln\dfrac{\bar x}{\theta_0}+1-\dfrac{\bar x}{\theta_0}\right]\), sesuai rumus.</p>
<p>Angka: \(2(10)[1{,}5-1-\ln1{,}5]=20(0{,}5-0{,}4055)=1{,}89<3{,}841\): gagal menolak \(H_0\) (p-value \(\approx0{,}17\)).</p>`},
  {q:String.raw`Tiga kelompok normal dengan mean \(\mu_1,\mu_2,\mu_3\) dan variansi sama. Untuk menguji \(H_0:\mu_1=\mu_2=\mu_3\), berapa derajat bebas limit \(-2\ln\Lambda\) menurut Wilks?`,
   a:String.raw`<p>Parameter mean pada \(\Omega\): 3 bebas; pada \(\omega\) (semua sama): 1. \(r=3-1=2\), jadi \(-2\ln\Lambda\dot\sim\chi^2(2)\).</p>`},
 ],
 "statmat-9":[
  {q:String.raw`Sampel \(n=25\) dari populasi normal, \(\sigma\) tidak diketahui. Anda ingin rentang nilai \(\mu\) yang masuk akal. Metode apa dan berapa dbnya?`,
   a:String.raw`<p>Tujuan: selang (Bab 6). Parameter \(\mu\), \(\sigma\) tidak diketahui, populasi normal: selang \(t\), \(\bar x\pm t_{\alpha/2;24}\,s/\sqrt{25}\) dengan db \(=24\).</p>`},
  {q:String.raw`Anda diminta menunjukkan bahwa penaksir \(\hat\theta_n\) konsisten, dengan \(E(\hat\theta_n)=\theta+1/n\) dan \(\mathrm{Var}(\hat\theta_n)=2/n\). Alat apa yang dipakai?`,
   a:String.raw`<p>Bab 3: \(\mathrm{MSE}=\mathrm{Var}+\text{bias}^2=\dfrac2n+\dfrac1{n^2}\to0\), maka \(\hat\theta_n\xrightarrow{P}\theta\) (Markov atau Chebyshev pada \((\hat\theta_n-\theta)^2\)). Penaksir ini bias tetapi konsisten.</p>`},
  {q:String.raw`Klaim iid, bentuk distribusi tidak diketahui, \(n=100\), \(\mu=5\), \(\sigma=10\). Anda diminta \(P(\bar X>7)\). Alat apa dan berapa hasilnya?`,
   a:String.raw`<p>Bab 2: CLT. \(\bar X\approx N(5,\ 1)\); \(z=\dfrac{7-5}{1}=2\); \(P(Z>2)=0{,}0228\).</p>`},
  {q:String.raw`Anda ingin mencari penaksir takbias variansi minimum bagi \(\lambda\) pada Poisson(\(\lambda\)). Tuliskan tiga langkahnya.`,
   a:String.raw`<p>Bab 5: (1) Poisson ada di kelas eksponensial dengan \(K(x)=x\), jadi \(Y=\sum X_i\) cukup lengkap. (2) \(E(\bar X)=\lambda\) dengan \(\bar X=Y/n\) fungsi \(Y\). (3) Lehmann–Scheffé: \(\bar X\) adalah UMVUE bagi \(\lambda\), dengan variansi \(\lambda/n\).</p>`},
 ],
 "metstat-6":[
  {q:String.raw`Sebuah sekolah mengambil sampel 64 siswa dan memperoleh rata-rata nilai matematika 75. Simpangan baku populasi 8. Tentukan selang kepercayaan 95% bagi rata-rata nilai seluruh siswa.`,
   a:String.raw`⟦dik|\(n=64,\ \bar x=75,\ \sigma=8\)\(\Rightarrow\) \(\sigma\) diketahui, pakai \(z\); \(z_{0{,}025}=1{,}96\).⟧⟦langkah|1|Penduga titik|\(\bar x=75\)⟧⟦langkah|2|Standard error|\(SE=8/\sqrt{64}=1\)⟧⟦langkah|3|Margin of error|\(MoE=1{,}96\times1=1{,}96\)⟧⟦langkah|4|Selang|\(73{,}04<\mu<76{,}96\)⟧`},
  {q:String.raw`Dari 16 mahasiswa, rata-rata waktu belajar 5 jam per hari dengan simpangan baku sampel 2 jam. Populasi normal. Tentukan selang kepercayaan 95% bagi rata-rata waktu belajar.`,
   a:String.raw`⟦dik|\(n=16,\ \bar x=5,\ s=2\). \(\sigma\) tidak diketahui dan \(n<30\)\(\Rightarrow\) pakai \(t\), \(db=15\), \(t_{0{,}025;\,15}=2{,}131\).⟧⟦langkah|1|Penduga titik|\(\bar x=5\)⟧⟦langkah|2|Standard error|\(SE=2/\sqrt{16}=0{,}5\)⟧⟦langkah|3|Margin of error|\(MoE=2{,}131\times0{,}5=1{,}0655\)⟧⟦langkah|4|Selang|\(3{,}934<\mu<6{,}066\)⟧`},
 ],
 "metstat-7":[
  {q:String.raw`Tugas 1. Dua kelas dengan metode berbeda: Kelas A (n = 25, rata-rata 78, s = 10) dan Kelas B (n = 25, rata-rata 72, s = 8). Tentukan selang kepercayaan 95% bagi beda dua rata-rata populasi. Sampel independen, ragam tidak diketahui dan tidak diasumsikan sama.`,
   a:String.raw`⟦dik|\(n_1=n_2=25,\ \bar x_1=78,\ \bar x_2=72,\ s_1=10,\ s_2=8\). Ragam tidak sama\(\Rightarrow\) pakai rumus ketiga, \(db=n-1=24\), \(t_{0{,}025;\,24}=2{,}064\).⟧⟦langkah|1|Penduga titik|\(\bar x_1-\bar x_2=78-72=6\)⟧⟦langkah|2|Standard error|\[SE=\sqrt{\frac{10^2}{25}+\frac{8^2}{25}}=\sqrt{4+2{,}56}=2{,}561\]⟧⟦langkah|3|Margin of error|\(MoE=2{,}064\times2{,}561=5{,}286\)⟧⟦langkah|4|Selang|\(0{,}714<\mu_1-\mu_2<11{,}286\)⟧⟦garis|0.714|11.286|μ₁−μ₂⟧⟦kes|Selang seluruhnya positif, jadi \(\mu_1>\mu_2\): rata-rata Kelas A lebih tinggi.⟧⟦catatan|Dengan db Welch (sekitar 45,8; \(t=2{,}013\)) selangnya \((0{,}84;\,11{,}16)\), kesimpulannya sama.⟧`},
  {q:String.raw`Tugas 2. Kelompok 1: n = 36, rata-rata 80, s = 6. Kelompok 2: n = 36, rata-rata 75, s = 8. Tentukan selang kepercayaan 95% bagi beda dua rata-rata populasi.`,
   a:String.raw`⟦dik|\(n_1=n_2=36\ (\ge30)\)\(\Rightarrow\) \(t\) didekati \(z\), \(z_{0{,}025}=1{,}96\).⟧⟦langkah|1|Penduga titik|\(\bar x_1-\bar x_2=80-75=5\)⟧⟦langkah|2|Standard error|\[SE=\sqrt{\frac{6^2}{36}+\frac{8^2}{36}}=\sqrt{1+1{,}778}=1{,}667\]⟧⟦langkah|3|Margin of error|\(MoE=1{,}96\times1{,}667=3{,}267\)⟧⟦langkah|4|Selang|\(1{,}733<\mu_1-\mu_2<8{,}267\)⟧⟦garis|1.733|8.267|μ₁−μ₂⟧⟦kes|Selang seluruhnya positif, jadi \(\mu_1>\mu_2\).⟧`},
 ],
 "metstat-9":[
  {q:String.raw`Dari 400 orang yang diwawancarai, 240 menggunakan sabun merek tertentu. Tentukan selang kepercayaan 90% bagi proporsi populasi pengguna.`,
   a:String.raw`⟦langkah|1|Penduga titik|\(\hat p=240/400=0{,}6\)⟧⟦langkah|2|Standard error|\(SE=\sqrt{0{,}6\times0{,}4/400}=0{,}0245\)⟧⟦langkah|3|Margin of error|\(MoE=1{,}645\times0{,}0245=0{,}0403\)⟧⟦langkah|4|Selang|\(0{,}5597<p<0{,}6403\)⟧`},
  {q:String.raw`Dari 100 mahasiswa laki-laki, 80 puas terhadap fasilitas kampus; dari 120 mahasiswa perempuan, 84 puas. Tentukan selang kepercayaan 95% bagi beda proporsi kepuasan laki-laki dan perempuan.`,
   a:String.raw`⟦langkah|1|Penduga titik|\(\hat p_1=0{,}8,\ \hat p_2=84/120=0{,}7,\ \hat p_1-\hat p_2=0{,}10\)⟧⟦langkah|2|Standard error|\[SE=\sqrt{\frac{0{,}8(0{,}2)}{100}+\frac{0{,}7(0{,}3)}{120}}=\sqrt{0{,}00335}=0{,}0579\]⟧⟦langkah|3|Margin of error|\(MoE=1{,}96\times0{,}0579=0{,}1134\)⟧⟦langkah|4|Selang|\(-0{,}0134<p_1-p_2<0{,}2134\)⟧⟦garis|-0.0134|0.2134|p₁−p₂⟧⟦kes|Selang memuat 0, jadi tidak dapat disimpulkan ada perbedaan kepuasan laki-laki dan perempuan.⟧`},
  {q:String.raw`Tugas 1. Dari 200 mahasiswa yang dipilih acak, 150 puas terhadap fasilitas kampus. Tentukan selang kepercayaan 95% bagi proporsi seluruh mahasiswa yang puas.`,
   a:String.raw`⟦langkah|1|Penduga titik|\(\hat p=150/200=0{,}75\)⟧⟦langkah|2|Standard error|\(SE=\sqrt{0{,}75\times0{,}25/200}=0{,}0306\)⟧⟦langkah|3|Margin of error|\(MoE=1{,}96\times0{,}0306=0{,}0600\)⟧⟦langkah|4|Selang|\(0{,}690<p<0{,}810\)⟧`},
  {q:String.raw`Tugas 2. Aplikasi belanja A: 150 dari 200 pengguna puas. Aplikasi B: 120 dari 180 pengguna puas. Tentukan selang kepercayaan 90% bagi beda dua proporsi.`,
   a:String.raw`⟦langkah|1|Penduga titik|\(\hat p_A=0{,}75,\ \hat p_B=120/180=0{,}6667,\ \hat p_A-\hat p_B=0{,}0833\)⟧⟦langkah|2|Standard error|\[SE=\sqrt{\frac{0{,}75(0{,}25)}{200}+\frac{0{,}6667(0{,}3333)}{180}}=0{,}0466\]⟧⟦langkah|3|Margin of error|\(MoE=1{,}645\times0{,}0466=0{,}0767\)⟧⟦langkah|4|Selang|\(0{,}0067<p_A-p_B<0{,}1600\)⟧⟦garis|0.0067|0.16|p_A−p_B⟧⟦kes|Selang seluruhnya positif, jadi \(p_A>p_B\): proporsi pengguna yang puas pada aplikasi A lebih besar.⟧`},
 ],
};
