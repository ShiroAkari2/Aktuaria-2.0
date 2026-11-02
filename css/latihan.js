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
