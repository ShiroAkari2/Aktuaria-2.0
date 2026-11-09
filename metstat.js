/* Metode Statistika. Bab 1-2, 5-7 diambil dari slide dosen (materi_metstat_1-5, Pekan 9-12).
   Bab 3, 4, 8, 9, 10 belum ada file dosennya: ringkasan umum, cocokkan dengan catatan kuliahmu. */
window.COURSES = window.COURSES || {};
COURSES.metstat = {t:"Metode Statistika", desc:"Statistika deskriptif, peubah acak, pendugaan, selang kepercayaan, uji hipotesis, uji-t, dan ANOVA.", ch:[
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
<p>Rentang \(=x_{maks}-x_{min}\); rentang interkuartil \(=Q_3-Q_1\); simpangan rata-rata \(=\frac{\sum|x_i-\bar x|}{n}\); dan [[ms_ragam|ragam dan simpangan baku]] (rumus sampel memakai \(n-1\), populasi memakai \(N\)). Contoh: data 2, 4, 6, 8 memberi \(\bar x=5\) dan \(s^2=20/3\approx6{,}67\).</p>
<h2>Contoh: data berkelompok</h2>
<p>Nilai 40 mahasiswa disajikan sebagai [[ms_distfrek|distribusi frekuensi]]. Tepi kelas \(=\) batas bawah \(-0{,}5\) dan batas atas \(+0{,}5\); lebar kelas \(c=10\).</p>
<table><tr><th>Kelas</th><th>Tepi kelas</th><th>Titik tengah \(m\)</th><th>\(f\)</th><th>\(F\) kumulatif</th><th>\(f\cdot m\)</th></tr><tr><td>40–49</td><td>39,5–49,5</td><td>44,5</td><td>2</td><td>2</td><td>89</td></tr><tr><td>50–59</td><td>49,5–59,5</td><td>54,5</td><td>4</td><td>6</td><td>218</td></tr><tr><td>60–69</td><td>59,5–69,5</td><td>64,5</td><td>6</td><td>12</td><td>387</td></tr><tr><td>70–79</td><td>69,5–79,5</td><td>74,5</td><td>15</td><td>27</td><td>1.117,5</td></tr><tr><td>80–89</td><td>79,5–89,5</td><td>84,5</td><td>9</td><td>36</td><td>760,5</td></tr><tr><td>90–99</td><td>89,5–99,5</td><td>94,5</td><td>4</td><td>40</td><td>378</td></tr><tr><th colspan="3">Jumlah</th><th>40</th><th></th><th>2.950</th></tr></table>
⟦langkah|1|Mean|\[\bar x=\frac{\sum f\,m}{\sum f}=\frac{2950}{40}=73{,}75\]⟧
⟦langkah|2|Median|Letak \(n/2=20\) jatuh di kelas 70–79 (\(L=69{,}5\), \(F=12\), \(f=15\)).\[Me=69{,}5+\frac{20-12}{15}\times10=74{,}83\]⟧
⟦langkah|3|Modus|Kelas modus 70–79: \(d_1=15-6=9\), \(d_2=15-9=6\).\[Mo=69{,}5+\frac{9}{9+6}\times10=75{,}5\]⟧
⟦langkah|4|Kuartil|\(Q_1\): letak 10, kelas 60–69 (\(L=59{,}5,\ F=6,\ f=6\)). \(Q_3\): letak 30, kelas 80–89 (\(L=79{,}5,\ F=27,\ f=9\)).\[Q_1=59{,}5+\frac{10-6}{6}\times10=66{,}17,\qquad Q_3=79{,}5+\frac{30-27}{9}\times10=82{,}83\]⟧
`},
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
 {id:"metstat-6", t:"Selang kepercayaan: rata-rata populasi (Pekan 11)", h:String.raw`<h2>Bentuk umum</h2>
<p><span class="boxf">Penduga titik ± Margin of Error</span></p>
<p>Selang kepercayaan \((1-\alpha)100\%\) dibangun dari penduga titik dan [[ms_se|margin of error]]. Margin of error \(=\) nilai kritis \(\times\) galat baku. Nilai kritis \(z\) yang paling sering dipakai:</p>
<table><tr><th>Tingkat kepercayaan</th><th>90%</th><th>95%</th><th>99%</th></tr><tr><th>\(z_{\alpha/2}\)</th><td>1,645</td><td>1,96</td><td>2,576</td></tr></table>
<h2>Memilih rumus untuk \(\mu\)</h2>
<div class="treewrap"><div class="tree"><div class="tr-node root">Selang kepercayaan \((1-\alpha)100\%\) bagi \(\mu\)</div><div class="tr-kids">
<div class="tr-kid"><div class="tr-node cond">\(\sigma\) diketahui</div><div class="tr-kids"><div class="tr-kid"><div class="tr-node">\(\displaystyle \bar x\pm z_{\alpha/2}\,\frac{\sigma}{\sqrt n}\)</div></div></div></div>
<div class="tr-kid"><div class="tr-node cond">\(\sigma\) tidak diketahui</div><div class="tr-kids">
<div class="tr-kid lab"><span class="tr-lab red">\(n<30\)</span><div class="tr-node">\(\displaystyle \bar x\pm t_{\alpha/2;\,db}\,\frac{s}{\sqrt n}\)<br>\(db=n-1\)</div></div>
<div class="tr-kid lab"><span class="tr-lab red">\(n\ge30\)</span><div class="tr-node">\(\displaystyle \bar x\pm z_{\alpha/2}\,\frac{s}{\sqrt n}\)</div></div>
</div></div></div></div></div>
<p>Lihat juga [[ms_skmean|selang kepercayaan rata-rata]].</p>
<h2>Contoh: \(\sigma\) diketahui</h2>
⟦soal|Dari sampel \(n=36\) diperoleh \(\bar x=10\). Simpangan baku populasi \(\sigma=2{,}5\). Buat selang kepercayaan 95% bagi \(\mu\).⟧
⟦dik|\(n=36\), \(\bar x=10\), \(\sigma=2{,}5\). SK 95% \(\Rightarrow 1-\alpha=0{,}95\Rightarrow\alpha=0{,}05\).⟧
⟦tanya|SK 95% bagi \(\mu\) dan simpulkan.⟧
⟦langkah|1|Menentukan penduga titik|\(\bar x=10\)⟧
⟦langkah|2|Menentukan standard error|\[SE(\bar x)=\frac{\sigma}{\sqrt n}=\frac{2{,}5}{\sqrt{36}}=\frac{2{,}5}{6}=0{,}4167\]⟧
⟦langkah|3|Menentukan margin of error|\[MoE=z_{0{,}025}\cdot SE=1{,}96\times0{,}4167=0{,}817\]⟧
⟦langkah|4|Menentukan selang kepercayaan|\[BB=10-0{,}817=9{,}183,\qquad BA=10+0{,}817=10{,}817\]\[9{,}183<\mu<10{,}817\]⟧
⟦kes|Dengan tingkat kepercayaan 95%, rata-rata populasi berada di antara 9,183 dan 10,817. (Slide membulatkan SE menjadi 0,416, sehingga hasilnya 9,184 sampai 10,815.)⟧`},
 {id:"metstat-7", t:"Selang kepercayaan: beda dua rata-rata (Pekan 11)", h:String.raw`<h2>Dua sampel saling bebas</h2>
<p>Dua populasi \(\mu_1\) dan \(\mu_2\), masing-masing diambil sampel sendiri. Penduga titik bagi \(\mu_1-\mu_2\) adalah \(\bar x_1-\bar x_2\). Contoh pertanyaan: apakah ada perbedaan rata-rata waktu bermedia sosial antara laki-laki dan perempuan?</p>
<p><span class="boxf">\(\bar x_1-\bar x_2\) ± Margin of Error</span></p>
<h2>Memilih rumus</h2>
<div class="treewrap"><div class="tree"><div class="tr-node root">Selang kepercayaan \((1-\alpha)100\%\) bagi \(\mu_1-\mu_2\)</div><div class="tr-kids">
<div class="tr-kid"><div class="tr-node cond">Ragam diketahui</div><div class="tr-kids"><div class="tr-kid"><div class="tr-node">\(\displaystyle (\bar x_1-\bar x_2)\pm z_{\alpha/2}\sqrt{\frac{\sigma_1^2}{n_1}+\frac{\sigma_2^2}{n_2}}\)</div></div></div></div>
<div class="tr-kid"><div class="tr-node cond">Ragam tidak diketahui</div><div class="tr-kids">
<div class="tr-kid lab"><span class="tr-lab red">\(\sigma_1^2=\sigma_2^2\)</span><div class="tr-node">\(\displaystyle (\bar x_1-\bar x_2)\pm t_{\alpha/2;\,db}\sqrt{s_{gab}^2\Big(\frac1{n_1}+\frac1{n_2}\Big)}\)<br>\(db=n_1+n_2-2\)</div></div>
<div class="tr-kid lab"><span class="tr-lab red">\(\sigma_1^2\ne\sigma_2^2\)</span><div class="tr-node">\(\displaystyle (\bar x_1-\bar x_2)\pm t_{\alpha/2;\,db}\sqrt{\frac{s_1^2}{n_1}+\frac{s_2^2}{n_2}}\)<br>\(db=n-1\) (versi slide)</div></div>
</div></div></div></div></div>
<p>Ragam gabungan: \(\displaystyle s_{gab}^2=\frac{(n_1-1)s_1^2+(n_2-1)s_2^2}{n_1+n_2-2}\) ([[ms_gabung|lihat definisi]]).</p>
⟦catatan|Bila sampel besar (\(n_1\ge30\) dan \(n_2\ge30\)), \(t\) boleh didekati dengan \(z\) dan ragam populasi diduga dengan ragam sampel. Bila sampel kecil (\(n<30\)), tetap pakai \(t\).⟧
<h2>Cara membaca selang \(\mu_1-\mu_2\)</h2>
<p>Lihat posisi selang terhadap angka 0.</p>
⟦garis|-8|5|μ₁−μ₂⟧
⟦garis|-12|-3|μ₁−μ₂⟧
⟦garis|3|12|μ₁−μ₂⟧
<h2>Contoh 1: ragam diketahui</h2>
⟦soal|Peneliti ingin tahu apakah ada perbedaan rata-rata konsumsi kopi harian laki-laki dan perempuan di daerah A. Sampel 50 laki-laki dan 45 perempuan; simpangan baku populasi 40 dan 30 gram/hari; rata-rata 750 dan 760 gram/hari. Buat selang kepercayaan 95% bagi selisih rata-rata.⟧
⟦dik|\(n_1=50,\ n_2=45,\ \sigma_1=40,\ \sigma_2=30,\ \bar x_1=750,\ \bar x_2=760\). \(1-\alpha=0{,}95\Rightarrow\alpha=0{,}05\).⟧
⟦langkah|1|Penduga titik|\(\bar x_1-\bar x_2=750-760=-10\)⟧
⟦langkah|2|Standard error|\[SE=\sqrt{\frac{40^2}{50}+\frac{30^2}{45}}=\sqrt{32+20}\approx7{,}2\]⟧
⟦langkah|3|Margin of error|\[MoE=z_{0{,}025}\cdot SE=1{,}96\times7{,}2=14{,}112\]⟧
⟦langkah|4|Selang kepercayaan|\[BB=-10-14{,}112=-24{,}112,\qquad BA=-10+14{,}112=4{,}112\]\[-24{,}112<\mu_1-\mu_2<4{,}112\]⟧
⟦garis|-24.112|4.112|μ₁−μ₂⟧
⟦kes|Selang memuat 0 (negatif dan positif), jadi tidak dapat disimpulkan. Tidak ada perbedaan rata-rata kebutuhan kopi harian antara laki-laki dan perempuan.⟧
<h2>Contoh 2: ragam tidak diketahui tetapi sama</h2>
⟦soal|Efektivitas dua metode belajar online: synchronous (streaming) dan asynchronous (video), masing-masing 15 mahasiswa. Buat selang kepercayaan 90% bagi beda rata-rata nilai tes. Apakah synchronous lebih efektif? (Asumsi ragam kedua populasi sama.)⟧
<table><tr><th>Synchronous</th><td>53</td><td>75</td><td>55</td><td>65</td><td>55</td><td>62</td><td>61</td><td>46</td><td>56</td><td>85</td><td>40</td><td>87</td><td>68</td><td>70</td><td>64</td></tr><tr><th>Asynchronous</th><td>61</td><td>90</td><td>70</td><td>89</td><td>89</td><td>69</td><td>67</td><td>84</td><td>86</td><td>85</td><td>72</td><td>69</td><td>69</td><td>72</td><td>88</td></tr></table>
⟦dik|\(n_1=n_2=15\), \(\bar x_1=62{,}8\), \(\bar x_2=77{,}3\), \(s_1^2=170{,}2\), \(s_2^2=101{,}2\). \(1-\alpha=0{,}90\Rightarrow\alpha=0{,}1\).⟧
⟦langkah|1|Penduga titik|\(\bar x_1-\bar x_2=62{,}8-77{,}3=-14{,}5\)⟧
⟦langkah|2|Ragam gabungan dan standard error|\[s_{gab}^2=\frac{(15-1)(170{,}2)+(15-1)(101{,}2)}{15+15-2}=\frac{2382{,}8+1416{,}8}{28}=135{,}7\]\[SE=\sqrt{135{,}7\Big(\tfrac1{15}+\tfrac1{15}\Big)}=\sqrt{18{,}093}=4{,}253\]⟧
⟦langkah|3|Margin of error|\[MoE=t_{0{,}05;\,28}\cdot SE=1{,}701\times4{,}253=7{,}235\]⟧
⟦langkah|4|Selang kepercayaan|\[BB=-14{,}5-7{,}235=-21{,}735,\qquad BA=-14{,}5+7{,}235=-7{,}265\]\[-21{,}735<\mu_1-\mu_2<-7{,}265\]⟧
⟦garis|-21.735|-7.265|μ₁−μ₂⟧
⟦kes|Selang seluruhnya negatif, jadi \(\mu_1<\mu_2\): rata-rata nilai metode asynchronous lebih tinggi daripada synchronous.⟧
⟦catatan|Di slide dosen, langkah 4 ditulis \(BB=7{,}265\) dan \(BA=21{,}735\) (positif), dengan kesimpulan "synchronous lebih efektif". Dari hitungan di atas, \(-14{,}5\mp7{,}235\) menghasilkan selang negatif, sehingga arah kesimpulannya terbalik. Konfirmasi ke dosen.⟧`},
 {id:"metstat-8", t:"Selang kepercayaan: data berpasangan (Pekan 11)", h:String.raw`<h2>Data berpasangan</h2>
<p>[[ms_pasang|Data berpasangan]] diperoleh dari dua perlakuan berbeda pada objek atau sampel yang sama. Hitung selisih tiap pasangan, lalu perlakukan sebagai satu sampel.</p>
<table><tr><th>Pasangan</th><th>Sampel 1 \((x_1)\)</th><th>Sampel 2 \((x_2)\)</th><th>\(d=x_1-x_2\)</th></tr><tr><td>1</td><td>\(x_{11}\)</td><td>\(x_{12}\)</td><td>\(x_{11}-x_{12}\)</td></tr><tr><td>⋮</td><td>⋮</td><td>⋮</td><td>⋮</td></tr><tr><td>\(n\)</td><td>\(x_{n1}\)</td><td>\(x_{n2}\)</td><td>\(x_{n1}-x_{n2}\)</td></tr></table>
\[d_i=x_{i1}-x_{i2},\qquad \bar d=\frac{\sum d_i}{n},\qquad s_d=\sqrt{\frac{\sum(d_i-\bar d)^2}{n-1}}\]
<p><span class="boxf">\(\mu_d\approx\bar d\pm t_{\alpha/2;\,db}\,\dfrac{s_d}{\sqrt n}\)</span>, dengan \(db=n-1\)</p>
<h2>Contoh: penjualan tas di Shopee dan Tokopedia</h2>
⟦soal|Tentukan selang kepercayaan 95% bagi rata-rata selisih penjualan tas di Shopee dan Tokopedia. Dapatkah disimpulkan di marketplace mana penjualan lebih laris?⟧
<table><tr><th>Penjual</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th></tr><tr><th>Shopee</th><td>18</td><td>10</td><td>20</td><td>14</td><td>6</td><td>5</td><td>14</td></tr><tr><th>Tokopedia</th><td>8</td><td>9</td><td>10</td><td>11</td><td>8</td><td>5</td><td>9</td></tr><tr><th>Selisih \(d_i\)</th><td>10</td><td>1</td><td>10</td><td>3</td><td>−2</td><td>0</td><td>5</td></tr></table>
⟦dik|\(n=7\), \(\sum d_i=27\). \(1-\alpha=0{,}95\Rightarrow\alpha=0{,}05\).⟧
⟦langkah|1|Penduga titik|\[\bar d=\frac{27}{7}=3{,}857\]⟧
⟦langkah|2|Standard error|\[s_d=\sqrt{\frac{(10-3{,}857)^2+(1-3{,}857)^2+\cdots+(5-3{,}857)^2}{7-1}}=4{,}741\]\[SE(\bar d)=\frac{s_d}{\sqrt n}=\frac{4{,}741}{\sqrt7}=1{,}792\]⟧
⟦langkah|3|Margin of error|\[MoE=t_{0{,}025;\,6}\cdot SE=2{,}447\times1{,}792=4{,}385\]⟧
⟦langkah|4|Selang kepercayaan|\[BB=3{,}857-4{,}385=-0{,}528,\qquad BA=3{,}857+4{,}385=8{,}242\]\[-0{,}528<\mu_d<8{,}242\]⟧
⟦garis|-0.528|8.242|μ_d⟧
⟦kes|Selang memuat 0, jadi tidak dapat disimpulkan marketplace mana yang lebih laris.⟧
⟦catatan|Di slide tertulis \(s_d=4{,}471\), tetapi hitungan yang benar adalah 4,741 (SE 1,792 di slide sudah konsisten dengan 4,741), jadi hasil akhirnya sama.⟧`},
 {id:"metstat-9", t:"Selang kepercayaan: proporsi dan beda dua proporsi (Pekan 12)", h:String.raw`<h2>Proporsi populasi</h2>
<p>Proporsi sampel \(\hat p\) adalah penduga tak bias bagi proporsi populasi \(p\):</p>
\[\hat p=\frac xn,\qquad x=\text{banyak kejadian sukses},\ n=\text{ukuran sampel}\]
<p><span class="boxf">\(p\approx\hat p\pm z_{\alpha/2}\sqrt{\dfrac{\hat p(1-\hat p)}{n}}\)</span></p>
<h3>Contoh: survei pilkada</h3>
⟦soal|Survei 2.000 orang: 72% meminta pilkada 2020 ditunda. Tentukan selang kepercayaan 90% bagi proporsi masyarakat yang setuju ditunda.⟧
⟦dik|\(\hat p=0{,}72\), \(n=2000\). \(1-\alpha=0{,}90\Rightarrow\alpha=0{,}1\).⟧
⟦langkah|1|Penduga titik|\(\hat p=0{,}72\)⟧
⟦langkah|2|Standard error|\[SE=\sqrt{\frac{0{,}72(1-0{,}72)}{2000}}=0{,}01004\]⟧
⟦langkah|3|Margin of error|\[MoE=z_{0{,}05}\cdot SE=1{,}645\times0{,}01004=0{,}016516\]⟧
⟦langkah|4|Selang kepercayaan|\[0{,}70348<p<0{,}7365\]⟧
⟦kes|Persentase masyarakat yang setuju pilkada sebaiknya ditunda berkisar antara 70,35% dan 73,65% (kepercayaan 90%).⟧
<h2>Beda dua proporsi</h2>
<p>Penduga titik \(\hat p_1=x_1/n_1\) dan \(\hat p_2=x_2/n_2\), sehingga penduga bagi \(p_1-p_2\) adalah \(\hat p_1-\hat p_2\). Lihat juga [[ms_skprop|selang kepercayaan proporsi]].</p>
<p><span class="boxf">\(\hat p_1-\hat p_2\pm z_{\alpha/2}\sqrt{\dfrac{\hat p_1(1-\hat p_1)}{n_1}+\dfrac{\hat p_2(1-\hat p_2)}{n_2}}\)</span></p>
<h3>Contoh: pengguna Instagram</h3>
⟦soal|Dari 60 responden usia muda, 45 menggunakan Instagram; dari 50 responden usia tua, 25 menggunakan. Tentukan penduga titik bagi proporsi kedua kelompok, selang kepercayaan 95% bagi bedanya, dan kesimpulannya.⟧
⟦dik|\(n_1=60,\ x_1=45,\ n_2=50,\ x_2=25\).⟧
⟦langkah|1|Penduga titik|\[\hat p_1=\frac{45}{60}=0{,}75,\quad \hat p_2=\frac{25}{50}=0{,}5,\quad \hat p_1-\hat p_2=0{,}25\]⟧
⟦langkah|2|Standard error|\[SE=\sqrt{\frac{0{,}75(0{,}25)}{60}+\frac{0{,}25(0{,}75)}{50}}=0{,}0902\]⟧
⟦langkah|3|Margin of error|\[MoE=z_{0{,}025}\cdot SE=1{,}96\times0{,}0902=0{,}1767\]⟧
⟦langkah|4|Selang kepercayaan|\[BB=0{,}25-0{,}1767=0{,}0733,\qquad BA=0{,}25+0{,}1767=0{,}4267\]\[0{,}0733<p_1-p_2<0{,}4267\]⟧
⟦garis|0.0733|0.4267|p₁−p₂⟧
⟦kes|Selang seluruhnya positif, jadi \(p_1>p_2\): pengguna Instagram dari golongan usia muda lebih banyak daripada usia tua.⟧`},
 {id:"metstat-10", t:"Pengujian hipotesis (Pekan 9–10)", h:String.raw`<p class="hint">Bab ini belum ada file dosennya, jadi isinya ringkasan umum.</p>
<h2>Gagasan</h2>
<p>[[ms_hip|Pengujian hipotesis]] menilai pernyataan tentang parameter. \(H_0\) (hipotesis nol) adalah pernyataan yang diuji, \(H_1\) alternatifnya (satu arah atau dua arah).</p>
<h2>Lima tahap</h2>
<div class="proc"><div class="pr"><b>1</b>Rumuskan \(H_0\) dan \(H_1\)</div><div class="pr"><b>2</b>Tetapkan taraf nyata \(\alpha\)</div><div class="pr"><b>3</b>Pilih statistik uji dan sebarannya</div><div class="pr"><b>4</b>Tentukan daerah kritis atau hitung \(p\)-value</div><div class="pr"><b>5</b>Hitung statistik uji dan simpulkan</div></div>
<h3>Aturan keputusan</h3>
<div class="treewrap"><div class="tree"><div class="tr-node root">Bandingkan \(p\)-value dengan \(\alpha\)</div><div class="tr-kids">
<div class="tr-kid lab"><span class="tr-lab red">\(p<\alpha\)</span><div class="tr-node no">Tolak \(H_0\)<br><small>ada bukti cukup untuk \(H_1\)</small></div></div>
<div class="tr-kid lab"><span class="tr-lab red">\(p\ge\alpha\)</span><div class="tr-node ok">Gagal menolak \(H_0\)<br><small>bukti belum cukup</small></div></div>
</div></div></div>

<h2>Galat</h2>
<p>[[tipe12|Galat tipe I]] (menolak \(H_0\) yang benar, peluangnya \(\alpha\)) dan galat tipe II (peluangnya \(\beta\)); kuasa uji \(=1-\beta\).</p>
<h2>Uji-z untuk rata-rata (\(\sigma\) diketahui)</h2>
\[Z=\frac{\bar x-\mu_0}{\sigma/\sqrt n}\]
<p>Contoh: \(\mu_0=75\), \(\bar x=78\), \(\sigma=9\), \(n=36\): \(Z=3/1{,}5=2\). Uji dua arah memberi \(p\approx0{,}0455<0{,}05\), jadi \(H_0\) ditolak.</p>`},
 {id:"metstat-11", t:"Uji-t dan perbandingan dua ragam (Pekan 10–11)", h:String.raw`<p class="hint">Bab ini belum ada file dosennya, jadi isinya ringkasan umum.</p>
<h2>Uji-t</h2>
<p>Dipakai bila \(\sigma\) tidak diketahui, terutama untuk sampel kecil dari populasi normal. [[ms_ujit|Tiga bentuknya]]: satu sampel, dua sampel bebas (ragam gabungan), dan data berpasangan.</p>
<p>Contoh (data Shopee dan Tokopedia): \(t=3{,}857/1{,}792\approx2{,}152\) dengan \(db=6\). Nilai kritis dua arah \(2{,}447\), jadi \(H_0\) tidak ditolak. Ini konsisten dengan selang kepercayaan yang memuat 0.</p>
<h2>Membandingkan dua ragam</h2>
<p>[[ms_ujif|Uji-F]] menguji \(H_0:\sigma_1^2=\sigma_2^2\) dan biasanya dilakukan sebelum memilih memakai ragam gabungan atau tidak. Contoh \(s_1^2=170{,}2\), \(s_2^2=101{,}2\): \(F=1{,}68\) dengan \(db=(14,14)\).</p>`},
 {id:"metstat-12", t:"Analisis variansi / ANOVA (Pekan 12–16)", h:String.raw`<p class="hint">Bab ini belum ada file dosennya, jadi isinya ringkasan umum.</p>
<h2>Gagasan</h2>
<p>[[ms_anova|ANOVA satu arah]] menguji \(H_0:\mu_1=\mu_2=\cdots=\mu_k\) untuk \(k>2\) kelompok sekaligus. Ini menggantikan banyak uji-t berulang yang menaikkan galat tipe I. Asumsi: sampel bebas, populasi normal, ragam sama.</p>
<h2>Tabel ANOVA</h2>
\[SST=SSB+SSW,\quad MSB=\frac{SSB}{k-1},\quad MSW=\frac{SSW}{N-k},\quad F=\frac{MSB}{MSW}\]
<p>Tolak \(H_0\) bila \(F>F_{\alpha;\,k-1,\,N-k}\).</p>
<h3>Bentuk tabel ANOVA</h3>
<table><tr><th>Sumber variasi</th><th>Jumlah kuadrat</th><th>db</th><th>Kuadrat tengah</th><th>\(F\)</th></tr><tr><td>Antar kelompok</td><td>\(SSB\)</td><td>\(k-1\)</td><td>\(MSB=\frac{SSB}{k-1}\)</td><td>\(\frac{MSB}{MSW}\)</td></tr><tr><td>Dalam kelompok</td><td>\(SSW\)</td><td>\(N-k\)</td><td>\(MSW=\frac{SSW}{N-k}\)</td><td></td></tr><tr><td>Total</td><td>\(SST\)</td><td>\(N-1\)</td><td></td><td></td></tr></table>

<h2>Contoh</h2>
<p>Tiga kelompok: (5, 6, 7), (7, 8, 9), (9, 10, 11). Rata-rata kelompok 6, 8, 10 dan rata-rata total 8. \(SSB=3(4+0+4)=24\), \(SSW=2+2+2=6\), \(MSB=12\), \(MSW=6/6=1\), jadi \(F=12\). Nilai kritis \(F_{0{,}05;\,2,6}=5{,}14\), sehingga \(H_0\) ditolak.</p>
<table><tr><th>Sumber variasi</th><th>JK</th><th>db</th><th>KT</th><th>\(F\)</th></tr><tr><td>Antar kelompok</td><td>24</td><td>2</td><td>12</td><td>12</td></tr><tr><td>Dalam kelompok</td><td>6</td><td>6</td><td>1</td><td></td></tr><tr><td>Total</td><td>30</td><td>8</td><td></td><td></td></tr></table>
⟦kes|\(F=12>F_{0{,}05;\,2,6}=5{,}14\), jadi \(H_0\) ditolak: ada paling sedikit satu rata-rata kelompok yang berbeda.⟧
`},
,
 {id:"metstat-13",t:"Panduan tabel Z: distribusi normal standar (Pekan 11–12)",h:String.raw`
<h2>Standarisasi ke skor Z</h2><p>Untuk pengamatan \(X\), ubah menjadi skor baku \(Z=(X-\mu)/\sigma\). Tabel yang disertakan memiliki dua format: luas dari \(-\infty\) sampai \(z\), dan luas dari 0 sampai \(z\). Selalu periksa judul tabel.</p>
<h2>Alur membaca tabel</h2><div class="proc"><div class="pr"><b>1</b>Hitung skor baku \(z\)</div><div class="pr"><b>2</b>Tentukan area yang diminta: kiri, kanan, atau di antara dua nilai</div><div class="pr"><b>3</b>Cari baris untuk satu angka desimal pertama dan kolom desimal kedua</div><div class="pr"><b>4</b>Gunakan simetri kurva bila nilai z negatif</div><div class="pr"><b>5</b>Konversikan luas sesuai pertanyaan</div></div>
<h2>Contoh dari tabel yang diunggah</h2><ul><li>\(P(Z&lt;-0{,}54)=0{,}2946\) pada tabel luas kumulatif kiri.</li><li>\(P(0&lt;Z&lt;0{,}54)=0{,}2054\) pada tabel luas dari 0 ke z.</li></ul>
<h2>Rumus konversi</h2><table><tr><th>Area</th><th>Rumus</th></tr><tr><td>Kiri</td><td>\(P(Z&lt;z)=\Phi(z)\)</td></tr><tr><td>Kanan</td><td>\(P(Z&gt;z)=1-\Phi(z)\)</td></tr><tr><td>Di antara a dan b</td><td>\(\Phi(b)-\Phi(a)\)</td></tr><tr><td>Simetri</td><td>\(\Phi(-z)=1-\Phi(z)\)</td></tr></table>
<h2>Flowchart area peluang</h2><div class="treewrap"><div class="tree"><div class="tr-node root">Area peluang yang dicari?</div><div class="tr-kids"><div class="tr-kid"><div class="tr-node cond">Kiri dari z</div><div class="tr-kids"><div class="tr-kid"><div class="tr-node">\(\Phi(z)\)</div></div></div></div><div class="tr-kid"><div class="tr-node cond">Kanan dari z</div><div class="tr-kids"><div class="tr-kid"><div class="tr-node">\(1-\Phi(z)\)</div></div></div></div><div class="tr-kid"><div class="tr-node cond">Antara a dan b</div><div class="tr-kids"><div class="tr-kid"><div class="tr-node">\(\Phi(b)-\Phi(a)\)</div></div></div></div></div></div></div>
<h2>Catatan referensi tabel Z</h2><p>Gunakan tabel Z yang diberikan pada perkuliahan. Tabel sumber memiliki format luas kumulatif dari sisi kiri dan luas antara 0 sampai z; pastikan membaca judul tabel sebelum mengambil nilai.</p><p class="hint">Halaman 1 memuat luas dari \(-\infty\) sampai z; halaman 2 memuat luas dari 0 sampai z.</p>`},
 {id:"metstat-14",t:"Panduan tabel t: distribusi t-Student (Pekan 11–12)",h:String.raw`
<h2>Kapan menggunakan distribusi t?</h2><p>Dalam slide selang kepercayaan, distribusi t digunakan ketika simpangan baku populasi tidak diketahui, terutama untuk sampel kecil. Nilai kritis bergantung pada derajat bebas dan luas peluang pada ekor.</p>\[t_{\alpha/2;\,db},\qquad db=n-1\]
<p>Untuk dua sampel bebas dengan ragam sama, slide menggunakan \(db=n_1+n_2-2\). Untuk ragam tidak sama, slide Pekan 11 menuliskan \(db=n-1\); ikuti ketentuan yang diberikan dosen.</p>
<h2>Cara membaca tabel t</h2><div class="proc"><div class="pr"><b>1</b>Tentukan derajat bebas (db)</div><div class="pr"><b>2</b>Tentukan tingkat kepercayaan</div><div class="pr"><b>3</b>Untuk selang dua sisi, gunakan \(\alpha/2\) pada tiap ujung</div><div class="pr"><b>4</b>Cari baris db dan kolom probabilitas</div><div class="pr"><b>5</b>Gunakan nilai kritis pada margin of error</div></div>
<h2>Contoh pembacaan</h2><ul><li>SK 95%, \(db=6\): kolom dua ujung 0,050 (atau satu ujung 0,025) memberi \(t=2{,}44691\).</li><li>SK 90%, \(db=28\): kolom dua ujung 0,100 (atau satu ujung 0,050) memberi \(t\approx1{,}701\).</li></ul>
<h2>Catatan judul kolom</h2><p>Tabel menampilkan probabilitas satu ujung dan dua ujung. Probabilitas lebih kecil adalah luas satu ujung; probabilitas lebih besar adalah luas kedua ujung.</p>
<h2>Rumus dalam selang rata-rata</h2>\[\bar x\pm t_{\alpha/2;\,db}\frac{s}{\sqrt n}\]<p>Misalnya \(n=7\), maka \(db=6\). Untuk SK 95%, gunakan \(t_{0{,}025;6}=2{,}44691\).</p>
<h2>Catatan referensi tabel t</h2><p>Pilih baris derajat bebas dan kolom probabilitas yang sesuai. Pada tabel sumber, probabilitas satu ujung dan dua ujung ditampilkan terpisah.</p>`},
 {id:"metstat-15",t:"Peta belajar dan pemilihan rumus selang kepercayaan (Pekan 11–12)",h:String.raw`
<h2>Timeline pembelajaran</h2><p>Mulai dari pendugaan satu parameter, lanjut ke perbandingan dua kelompok, lalu pelajari cara memilih nilai kritis dari tabel Z atau t.</p>⟦waktu|Rata-rata satu populasi, beda dua rata-rata, data berpasangan, proporsi satu populasi, beda dua proporsi, tabel Z dan t|0-6||0:Parameter dan sampel;2:Dua kelompok;3:Pasangan;5:Proporsi;6:Tabel nilai kritis⟧
<h2>Flowchart memilih prosedur</h2><div class="treewrap"><div class="tree"><div class="tr-node root">Parameter apa yang diduga?</div><div class="tr-kids">
<div class="tr-kid"><div class="tr-node cond">Satu rata-rata \(\mu\)</div><div class="tr-kids"><div class="tr-kid"><div class="tr-node">\(\sigma\) diketahui → Z<br>\(\sigma\) tidak diketahui → t untuk sampel kecil; slide menyebut pendekatan Z untuk \(n\ge30\)</div></div></div></div>
<div class="tr-kid"><div class="tr-node cond">Beda rata-rata</div><div class="tr-kids"><div class="tr-kid"><div class="tr-node">Berpasangan → hitung selisih \(d_i\), gunakan t<br>Bebas → periksa ragam diketahui/sama/tidak sama</div></div></div></div>
<div class="tr-kid"><div class="tr-node cond">Satu proporsi atau beda dua proporsi</div><div class="tr-kids"><div class="tr-kid"><div class="tr-node">Gunakan penduga proporsi dan nilai kritis Z</div></div></div></div>
</div></div></div>
<h2>Checklist perhitungan</h2><ul><li>Identifikasi parameter: \(\mu\), \(\mu_1-\mu_2\), \(p\), atau \(p_1-p_2\).</li><li>Pastikan sampel bebas atau berpasangan.</li><li>Catat apakah simpangan baku populasi diketahui dan asumsi ragam.</li><li>Tentukan tingkat kepercayaan dan \(\alpha\).</li><li>Pilih tabel Z atau t serta derajat bebas jika menggunakan t.</li><li>Hitung penduga titik, standard error, margin of error, batas bawah, dan batas atas.</li><li>Untuk beda parameter, periksa apakah selang memuat nol.</li></ul>
<h2>Rumus inti</h2>\[\text{Selang}=\text{Penduga titik}\pm\text{Margin of Error}\]\[\text{MoE}=\text{Nilai kritis}\times\text{Standard Error}\]
<h2>Sumber pembahasan</h2><p>Bab ini disusun berdasarkan topik dan contoh yang terdapat pada materi kuliah Pekan 11 dan Pekan 12 yang diunggah.</p><p class="hint">Isi bab ini merangkum alur dari slide Selang Kepercayaan Pekan 11 dan Selang Kepercayaan 2 Pekan 12. Tabel Z dan t tersedia sebagai lampiran PDF.</p>`}

]};
