/* Struktur beranda: Semester -> Mata kuliah -> Bab (meniru folder di laptop).
   Semester  : id (dipakai di alamat, mis. #s3), n (nama yang tampil), kids (daftar mata kuliah)
   Matkul    : n    = nama yang tampil
               kode = kode matkul (opsional, tampil kecil di kartu)
               k    = kunci matkul di data/<matkul>.js. Kalau diisi, kartu bisa diklik dan membuka daftar bab.
                      Kalau kosong, kartu tampil redup dengan tulisan "Belum ada catatan".
   Menambah matkul: buat data/<matkul>.js, pasang <script>-nya di index.html dan sw.js, lalu isi k di kartu matkulnya di sini.
   Semester 4 dan 5 masih kosong: isi kids-nya kalau sudah ada matkulnya. */
window.TREE = [
 {id:"s1", n:"Semester 1", kids:[
  {n:"Aktuaria"}, {n:"Balance"}, {n:"Bindo"}, {n:"Biologi"}, {n:"Fisika"}, {n:"Jurnal"},
  {n:"Kimia"}, {n:"Matdas"}, {n:"PAI"}, {n:"Pancasila S1"}, {n:"PKN"}, {n:"Teori Suku Bunga"}
 ]},
 {id:"s2", n:"Semester 2", kids:[
  {n:"Alin"}, {n:"Binggi"}, {n:"BMI"}, {n:"Matdas 2"}, {n:"PEM"}, {n:"T. Inves"},
  {n:"Tepro"}, {n:"WBI"}, {n:"Wirus"}
 ]},
 {id:"s3", n:"Semester 3", kids:[
  {n:"Akuntansi Aktuaria", kode:"23H08120102"},
  {n:"Analisis Runtun Waktu"},
  {n:"Manajemen Portofolio"},
  {n:"Matematika Keuangan", k:"matkeu"},
  {n:"Metode Statistika", kode:"23H08120203", k:"metstat"},
  {n:"Pengantar Data Mining", kode:"23H08120602"},
  {n:"Pengantar Ekonomi Makro"},
  {n:"Pengantar Matematika Aktuaria", k:"pma"},
  {n:"Statistika Matematika", kode:"23H08120703", k:"statmat"}
 ]},
 {id:"s4", n:"Semester 4", kids:[]},
 {id:"s5", n:"Semester 5", kids:[]}
];
