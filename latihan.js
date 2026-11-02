/* Latihan soal per bab. Kuncinya = id bab. q = soal, a = pembahasan (boleh memakai [[id|teks]]). */
const P = {
 "statmat-2":[
  {q:String.raw`\(X_1,\dots,X_n\) sampel dari \(N(\theta,\sigma^2)\), \(\sigma^2\) diketahui. Tunjukkan \(Y=\sum X_i\) statistik cukup untuk \(\theta\).`,
   a:String.raw`<p>Lewat faktorisasi [[neyman|Neyman]]. Karena \(\sum(x_i-\theta)^2=\sum x_i^2-2\theta\sum x_i+n\theta^2\):</p>
\[\prod f(x_i;\theta)=\underbrace{\exp\!\Big(\frac{\theta\sum x_i-n\theta^2/2}{\sigma^2}\Big)}_{k_1(\sum x_i;\theta)}\cdot\underbrace{(2\pi\sigma^2)^{-n/2}\exp\!\Big(-\frac{\sum x_i^2}{2\sigma^2}\Big)}_{k_2(x_1,\dots,x_n)}\]
<p>\(k_2\) tidak memuat \(\theta\), jadi \(\sum X_i\) cukup. Akibatnya \(\bar X\) juga cukup.</p>`},
  {q:String.raw`\(X_1,\dots,X_n\) sampel dari Uniform\((0,\theta)\). Tunjukkan \(Y=\max X_i\) statistik cukup untuk \(\theta\).`,
   a:String.raw`<p>\(\prod f(x_i;\theta)=\theta^{-n}\,\mathbf 1\{\max x_i<\theta\}\cdot\mathbf 1\{\min x_i>0\}\). Faktor pertama bergantung pada data hanya lewat \(\max x_i\) (= \(k_1\)), faktor kedua bebas \(\theta\) (= \(k_2\)). Maka \(\max X_i\) cukup.</p>`},
 ],
 "statmat-6":[
  {q:String.raw`Survei \(n=200\) pemilih: 60 mendukung program. Buat selang 95% untuk proporsi pendukung.`,
   a:String.raw`<p>\(\hat p=60/200=0{,}3\). Galat baku \(=\sqrt{0{,}3\cdot0{,}7/200}=0{,}0324\). Margin \(=1{,}96\times0{,}0324=0{,}0635\). Selang: \((0{,}2365;\ 0{,}3635)\).</p><p>Interpretasi: proporsi pendukung populasi diperkirakan 23,7% sampai 36,4% dengan keyakinan 95%.</p>`},
  {q:String.raw`Sampel \(n=10\) dari populasi normal memberi \(s^2=16\). Buat selang 95% untuk \(\sigma^2\). (\(\chi^2_{0{,}025;9}=19{,}023\), \(\chi^2_{0{,}975;9}=2{,}700\))`,
   a:String.raw`<p>\((n-1)s^2=9\times16=144\). Batas bawah \(=144/19{,}023=7{,}57\); batas atas \(=144/2{,}700=53{,}33\). Selang: \((7{,}57;\ 53{,}33)\).</p><p>Interpretasi: selang variansi lebar karena \(n\) kecil dan distribusi \(\chi^2\) tidak simetris.</p>`},
 ],
 "statmat-7":[
  {q:String.raw`Pada contoh \(N(\theta,1)\), \(H_0:\theta=0\) lawan \(H_1:\theta=1\), \(n=25\), \(\alpha=0{,}05\). Hitung \(\beta\).`,
   a:String.raw`<p>Daerah kritis \(\bar X\ge0{,}329\). \(\beta=P(\bar X<0{,}329\mid\theta=1)=P(Z<-3{,}355)\approx0{,}0004\), sehingga kuasa \(\approx0{,}9996\).</p>`},
 ],
 "statmat-8":[
  {q:String.raw`Sampel \(n=25\) dari \(N(\theta,1)\) memberi \(\bar x=0{,}5\). Uji \(H_0:\theta=0\) dengan LRT pada \(\alpha=0{,}05\) (\(\chi^2_{0{,}05;1}=3{,}84\)).`,
   a:String.raw`<p>\(-2\ln\Lambda=n(\bar x-\theta_0)^2=25(0{,}5)^2=6{,}25\). Karena \(6{,}25>3{,}84\), tolak \(H_0\). Setara dengan uji \(z\): \(z=0{,}5\times5=2{,}5\), \(z^2=6{,}25\).</p>`},
 ],
 "metstat-6":[
  {q:String.raw`Sebuah sekolah mengambil sampel 64 siswa dan memperoleh rata-rata nilai matematika 75. Simpangan baku populasi 8. Tentukan selang kepercayaan 95% bagi rata-rata nilai seluruh siswa.`,
   a:String.raw`\(\sigma\) diketahui, pakai \(z\). \(SE=8/\sqrt{64}=1\), \(MoE=1{,}96\times1=1{,}96\). Selang: \(73{,}04<\mu<76{,}96\).`},
  {q:String.raw`Dari 16 mahasiswa, rata-rata waktu belajar 5 jam per hari dengan simpangan baku sampel 2 jam. Populasi normal. Tentukan selang kepercayaan 95% bagi rata-rata waktu belajar.`,
   a:String.raw`\(\sigma\) tidak diketahui dan \(n=16<30\), pakai \(t\) dengan \(db=15\), \(t_{0{,}025;15}=2{,}131\). \(SE=2/4=0{,}5\), \(MoE=2{,}131\times0{,}5=1{,}0655\). Selang: \(3{,}934<\mu<6{,}066\).`},
  {q:String.raw`Dari 400 orang yang diwawancarai, 240 menggunakan sabun merek tertentu. Tentukan selang kepercayaan 90% bagi proporsi populasi pengguna.`,
   a:String.raw`\(\hat p=240/400=0{,}6\), \(SE=\sqrt{0{,}6\times0{,}4/400}\approx0{,}0245\), \(z_{0{,}05}=1{,}645\), \(MoE\approx0{,}0403\). Selang: \(0{,}5597<p<0{,}6403\).`},
 ],
};
