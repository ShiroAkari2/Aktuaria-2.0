/* Materi Aljabar Linear Semester 2. Disusun berdasarkan topik buku Howard Anton (Elementary Linear Algebra) dan ringkasan Aljabar Linier Elementer berbahasa Indonesia. */
window.COURSES = window.COURSES || {};
COURSES.aljabarlinear = {t:"Aljabar Linear",desc:"Mata kuliah inti Semester 2. Materi disusun dari matriks dan sistem persamaan linear hingga ruang vektor, nilai eigen, dan transformasi linear, mengikuti cakupan Howard Anton.",ch:[
{id:"al-1",t:"Matriks, Jenis, dan Operasi Matriks",h:String.raw`
<h2>Pengertian dan notasi</h2><p>Matriks adalah susunan bilangan atau fungsi dalam baris dan kolom. Ordo matriks menyatakan banyak baris × banyak kolom. Elemen pada baris ke-i dan kolom ke-j ditulis \(a_{ij}\).</p>
\[A=[a_{ij}]_{m\times n}=\begin{bmatrix}a_{11}&\cdots&a_{1n}\\\vdots&\ddots&\vdots\\a_{m1}&\cdots&a_{mn}\end{bmatrix}\]
<h2>Jenis matriks</h2><p>Matriks baris, kolom, persegi, nol, diagonal, skalar, identitas, segitiga atas/bawah, simetris, dan antisimetri. Dua matriks sama jika ordonya sama dan setiap elemen yang seletak sama.</p>
<h2>Operasi dasar</h2><p>Penjumlahan dan pengurangan dilakukan pada elemen seletak. Perkalian skalar mengalikan setiap elemen. Perkalian \(AB\) dapat dilakukan jika banyak kolom A sama dengan banyak baris B.</p>
\[(AB)_{ij}=\sum_{k=1}^{n}a_{ik}b_{kj}\qquad (A+B)_{ij}=a_{ij}+b_{ij}\]
<div class="flow"><div class="flow-node">Periksa ordo matriks</div><div class="flow-arrow">↓</div><div class="flow-node">Penjumlahan: ordo harus sama</div><div class="flow-arrow">↓</div><div class="flow-node">Perkalian: kolom A = baris B</div><div class="flow-arrow">↓</div><div class="flow-node">Hitung elemen hasil dan periksa ordonya</div></div>
<div class="soal"><p><b>Contoh.</b> Jika \(A=\begin{bmatrix}1&2\\3&4\end{bmatrix}\) dan \(B=\begin{bmatrix}2&0\\1&-1\end{bmatrix}\), maka \(AB=\begin{bmatrix}4&-2\\10&-4\end{bmatrix}\). Perhatikan bahwa umumnya \(AB\ne BA\).</p></div>
<p class="src">Rujukan: Anton, bab 1 (sistem persamaan linear dan matriks); Aljabar Linier Elementer Indonesia, bagian Matriks, hlm. 1–12.</p>`},
{id:"al-2",t:"Sistem Persamaan Linear dan Eliminasi Gauss",h:String.raw`
<h2>Sistem persamaan linear</h2><p>Sistem persamaan linear (SPL) terdiri atas persamaan-persamaan linear dengan variabel yang sama. Sistem dapat memiliki satu solusi, tak hingga banyak solusi, atau tidak memiliki solusi.</p>
\[\begin{cases}a_{11}x_1+\cdots+a_{1n}x_n=b_1\\\vdots\\a_{m1}x_1+\cdots+a_{mn}x_n=b_m\end{cases}\quad\Longleftrightarrow\quad A\mathbf{x}=\mathbf b\]
<p>Matriks diperbesar \([A\mid\mathbf b]\) memuat koefisien dan konstanta. Operasi baris elementer: menukar dua baris, mengalikan baris dengan skalar tak nol, dan menambahkan kelipatan suatu baris ke baris lain.</p>
<h3>Alur eliminasi Gauss</h3><div class="flow"><div class="flow-node">Susun matriks diperbesar [A | b]</div><div class="flow-arrow">↓</div><div class="flow-node">Gunakan operasi baris untuk membentuk eselon baris</div><div class="flow-arrow">↓</div><div class="flow-node">Lakukan substitusi balik</div><div class="flow-arrow">↓</div><div class="flow-node">Tentukan konsistensi dan himpunan solusi</div></div>
<h2>Gauss–Jordan dan sistem homogen</h2><p>Eliminasi Gauss–Jordan meneruskan reduksi hingga bentuk eselon baris tereduksi. Sistem homogen \(A\mathbf x=\mathbf0\) selalu memiliki solusi trivial; solusi nontrivial ada jika terdapat variabel bebas.</p>
\[\left[\begin{array}{cc|c}1&2&5\\2&1&4\end{array}\right]\xrightarrow{R_2-2R_1}\left[\begin{array}{cc|c}1&2&5\\0&-3&-6\end{array}\right]\Rightarrow (x,y)=(1,2)\]
<p class="src">Rujukan: Anton, bab 1; Aljabar Linier Elementer Indonesia, bagian Eliminasi Gauss, hlm. 25–37.</p>`},
{id:"al-3",t:"Determinan dan Matriks Invers",h:String.raw`
<h2>Determinan</h2><p>Determinan adalah nilai skalar yang terkait dengan matriks persegi. Untuk matriks 2×2, determinan dihitung dengan selisih hasil kali diagonal.</p>
\[\det\begin{bmatrix}a&b\\c&d\end{bmatrix}=ad-bc\]
<p>Untuk ordo lebih tinggi, determinan dapat dihitung melalui ekspansi kofaktor atau reduksi baris. Sifat penting: pertukaran dua baris mengubah tanda determinan; mengalikan satu baris dengan k mengalikan determinan dengan k; determinan matriks segitiga adalah hasil kali elemen diagonal.</p>
<h2>Invers matriks</h2><p>Matriks persegi A invertibel jika ada \(A^{-1}\) sehingga \(AA^{-1}=A^{-1}A=I\). Matriks invertibel tepat ketika determinannya tidak nol.</p>
\[A^{-1}=\frac{1}{ad-bc}\begin{bmatrix}d&-b\\-c&a\end{bmatrix},\quad ad-bc\ne0\]
<h3>Menentukan invers dengan Gauss–Jordan</h3><div class="flow"><div class="flow-node">Bentuk matriks gabungan [A | I]</div><div class="flow-arrow">↓</div><div class="flow-node">Reduksi sisi kiri menjadi I</div><div class="flow-arrow">↓</div><div class="flow-node">Jika berhasil: sisi kanan menjadi A⁻¹</div></div>
<h2>Penerapan pada SPL dan aturan Cramer</h2>\[A\mathbf x=\mathbf b\Rightarrow\mathbf x=A^{-1}\mathbf b\] <p>Jika \(\det(A)\ne0\), solusi SPL tunggal. Aturan Cramer menyatakan \(x_i=\det(A_i)/\det(A)\), dengan \(A_i\) mengganti kolom ke-i oleh vektor konstanta.</p>
<p class="src">Rujukan: Aljabar Linier Elementer Indonesia, bagian Invers Matriks hlm. 38–48 dan Determinan hlm. 49–63; Anton, bab 2.</p>`},
{id:"al-4",t:"Vektor di Bidang dan Ruang",h:String.raw`
<h2>Vektor dan operasi</h2><p>Vektor memiliki besar dan arah. Di \(\mathbb R^2\) atau \(\mathbb R^3\), vektor dapat ditulis sebagai komponen. Operasi meliputi penjumlahan, pengurangan, perkalian skalar, dan panjang vektor.</p>
\[\mathbf u=(u_1,\ldots,u_n),\quad \|\mathbf u\|=\sqrt{u_1^2+\cdots+u_n^2}\]
<h2>Hasil kali titik dan proyeksi</h2>\[\mathbf u\cdot\mathbf v=\sum_i u_iv_i=\|\mathbf u\|\|\mathbf v\|\cos\theta\] <p>Jika hasil kali titik nol, kedua vektor ortogonal. Proyeksi v pada arah u adalah \(\operatorname{proj}_{\mathbf u}\mathbf v=\frac{\mathbf u\cdot\mathbf v}{\mathbf u\cdot\mathbf u}\mathbf u\).</p>
<h2>Hasil kali silang, garis, dan bidang</h2><p>Di \(\mathbb R^3\), hasil kali silang menghasilkan vektor yang tegak lurus terhadap kedua vektor asal. Persamaan garis dapat dinyatakan secara parametrik, sedangkan bidang ditentukan oleh vektor normal.</p>
\[\mathbf u\times\mathbf v=\begin{vmatrix}\mathbf i&\mathbf j&\mathbf k\\u_1&u_2&u_3\\v_1&v_2&v_3\end{vmatrix},\quad ax+by+cz=d\]
<div class="flow"><div class="flow-node">Tentukan komponen vektor</div><div class="flow-arrow">↓</div><div class="flow-node">Pilih operasi: titik untuk sudut/proyeksi</div><div class="flow-arrow">↓</div><div class="flow-node">Silang untuk normal atau luas di R³</div><div class="flow-arrow">↓</div><div class="flow-node">Susun persamaan garis atau bidang</div></div>
<p class="src">Rujukan: Aljabar Linier Elementer Indonesia, bagian Vektor di Bidang dan di Ruang, hlm. 13–24; Anton, bab 3.</p>`},
{id:"al-5",t:"Ruang Vektor, Subruang, Basis, dan Dimensi",h:String.raw`
<h2>Ruang vektor</h2><p>Ruang vektor adalah himpunan objek yang dapat dijumlahkan dan dikalikan skalar serta memenuhi aksioma ruang vektor. Contoh umum adalah \(\mathbb R^n\), himpunan polinom, dan ruang matriks.</p>
<h2>Kombinasi dan kebebasan linear</h2>\[\mathbf v=c_1\mathbf v_1+\cdots+c_k\mathbf v_k\] <p>Vektor-vektor bebas linear jika persamaan \(c_1\mathbf v_1+\cdots+c_k\mathbf v_k=\mathbf0\) hanya memiliki solusi semua koefisien nol. Jika ada solusi lain, vektor-vektor bergantung linear.</p>
<h2>Rentang, basis, dan dimensi</h2><p>Rentang (span) adalah semua kombinasi linear dari suatu himpunan vektor. Basis adalah himpunan yang bebas linear dan merentang ruang. Banyak vektor dalam basis disebut dimensi.</p>
<h3>Uji apakah himpunan menjadi basis</h3><div class="flow"><div class="flow-node">Susun vektor sebagai kolom matriks</div><div class="flow-arrow">↓</div><div class="flow-node">Reduksi baris dan hitung pivot (rank)</div><div class="flow-arrow">↓</div><div class="flow-node">Bebas linear jika setiap kolom pivot</div><div class="flow-arrow">↓</div><div class="flow-node">Basis jika bebas linear dan merentang ruang</div></div>
<p>Ruang baris dan ruang kolom matriks memiliki dimensi yang sama, yaitu rank matriks. Nullitas adalah dimensi ruang solusi \(A\mathbf x=\mathbf0\).</p>
\[\operatorname{rank}(A)+\operatorname{nullity}(A)=n\]
<p class="src">Rujukan: Aljabar Linier Elementer Indonesia, bagian Ruang Vektor, hlm. 64–92; Anton, bab 4–5.</p>`},
{id:"al-6",t:"Ruang Hasil Kali Dalam dan Ortonormalisasi",h:String.raw`
<h2>Hasil kali dalam</h2><p>Hasil kali dalam menggeneralisasi hasil kali titik. Dari hasil kali dalam dapat didefinisikan panjang (norma), jarak, dan sudut. Dua vektor ortogonal jika hasil kali dalamnya nol.</p>
\[\langle\mathbf u,\mathbf v\rangle=\mathbf u\cdot\mathbf v,\quad \|\mathbf u\|=\sqrt{\langle\mathbf u,\mathbf u\rangle}\]
<h2>Himpunan ortogonal dan ortonormal</h2><p>Himpunan ortogonal berisi vektor-vektor yang saling tegak lurus. Himpunan ortonormal adalah himpunan ortogonal dengan setiap vektor bernorma satu.</p>
<h3>Proses Gram–Schmidt</h3><div class="flow"><div class="flow-node">Mulai dari vektor bebas linear v₁, …, vₖ</div><div class="flow-arrow">↓</div><div class="flow-node">Kurangi komponen proyeksi pada vektor ortogonal sebelumnya</div><div class="flow-arrow">↓</div><div class="flow-node">Normalisasi setiap vektor hasil</div><div class="flow-arrow">↓</div><div class="flow-node">Diperoleh basis ortonormal</div></div>
\[\mathbf u_k=\mathbf v_k-\sum_{j=1}^{k-1}\frac{\langle\mathbf v_k,\mathbf u_j\rangle}{\langle\mathbf u_j,\mathbf u_j\rangle}\mathbf u_j,\quad \mathbf e_k=\frac{\mathbf u_k}{\|\mathbf u_k\|}\]
<p class="src">Rujukan: Aljabar Linier Elementer Indonesia, bagian Ruang Hasil Kali Dalam, hlm. 93–107; Anton, bab 6.</p>`},
{id:"al-7",t:"Nilai Eigen, Vektor Eigen, dan Diagonalisasi",h:String.raw`
<h2>Nilai dan vektor eigen</h2><p>Vektor tak nol \(\mathbf v\) disebut vektor eigen A jika transformasi oleh A hanya mengubah skala vektor tersebut: \(A\mathbf v=\lambda\mathbf v\). Skalar \(\lambda\) adalah nilai eigen.</p>
\[(A-\lambda I)\mathbf v=\mathbf0,\qquad \det(A-\lambda I)=0\]
<p>Persamaan determinan tersebut disebut persamaan karakteristik. Setelah nilai eigen ditemukan, vektor eigen diperoleh dengan menyelesaikan sistem homogen.</p>
<h2>Diagonalisasi</h2><p>Matriks A dapat didiagonalisasi jika memiliki cukup banyak vektor eigen bebas linear. Dengan P berisi vektor-vektor eigen sebagai kolom, berlaku:</p>
\[A=PDP^{-1}\]
<p>Jika A simetris real, terdapat diagonalisasi ortogonal \(A=QDQ^T\) dengan Q ortogonal.</p>
<h3>Urutan mencari diagonalisasi</h3><div class="flow"><div class="flow-node">Hitung det(A − λI) = 0</div><div class="flow-arrow">↓</div><div class="flow-node">Cari semua nilai eigen λ</div><div class="flow-arrow">↓</div><div class="flow-node">Cari basis ruang eigen untuk setiap λ</div><div class="flow-arrow">↓</div><div class="flow-node">Bentuk P dan D, lalu verifikasi A = PDP⁻¹</div></div>
<p class="src">Rujukan: Aljabar Linier Elementer Indonesia, bagian Nilai dan Vektor Eigen, hlm. 108–121; Anton, bab 7.</p>`},
{id:"al-8",t:"Transformasi Linear dan Aplikasinya",h:String.raw`
<h2>Definisi transformasi linear</h2><p>Pemetaan \(T:V\to W\) linear jika mempertahankan penjumlahan dan perkalian skalar.</p>
\[T(\mathbf u+\mathbf v)=T(\mathbf u)+T(\mathbf v),\quad T(c\mathbf u)=cT(\mathbf u)\]
<p>Transformasi linear dari \(\mathbb R^n\) ke \(\mathbb R^m\) dapat direpresentasikan oleh matriks A: \(T(\mathbf x)=A\mathbf x\).</p>
<h2>Kernel, jangkauan, rank, dan nullitas</h2><p>Kernel adalah himpunan vektor yang dipetakan ke nol. Jangkauan (range) adalah himpunan semua keluaran transformasi. Dimensi jangkauan disebut rank dan dimensi kernel disebut nullitas.</p>
\[\ker(T)=\{\mathbf x:T(\mathbf x)=\mathbf0\},\quad \operatorname{rank}(T)+\operatorname{nullity}(T)=\dim V\]
<h3>Memeriksa transformasi</h3><div class="flow"><div class="flow-node">Tentukan aturan T(x)</div><div class="flow-arrow">↓</div><div class="flow-node">Uji aditivitas dan homogenitas</div><div class="flow-arrow">↓</div><div class="flow-node">Cari matriks representasi, kernel, dan range</div><div class="flow-arrow">↓</div><div class="flow-node">Tafsirkan rank, nullitas, dan sifat satu-ke-satu/onto</div></div>
<h2>Contoh aplikasi</h2><p>Transformasi linear digunakan untuk rotasi, refleksi, proyeksi, penskalaan, perubahan koordinat, serta model jaringan dan sistem linear. Pada aktuaria, representasi matriks membantu mengolah banyak persamaan linear secara terstruktur.</p>
<p class="src">Rujukan: Aljabar Linier Elementer Indonesia, bagian Transformasi Linier, hlm. 122–167; Anton, bab 8–10.</p>`}
]};
