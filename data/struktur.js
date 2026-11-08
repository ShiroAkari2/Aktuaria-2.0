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
   {n:"Bahasa Indonesia"},
   {n:"Biologi Dasar"},
   {n:"Fisika Dasar"},
   {n:"Kimia Dasar"},
   {n:"Matematika Dasar 1"},
   {n:"Pendidikan Agama Islam"},
   {n:"Pancasila"},
   {n:"Pendidikan Kewarganegaraan"},
   {n:"Teori Suku Bunga", k:"tsb"}
 ]},
 {id:"s2", n:"Semester 2", kids:[
   {n:"Aljabar Linear"},
   {n:"Bahasa Inggris"},
   {n:"Benua Maritim Indonesia(BMI)"},
   {n:"Matematika Dasar 2"},
   {n:"Pengantar Ekonomi Mikro"},
   {n:"Teori Investasi"},
   {n:"Teori Peluang"},
   {n:"Kewirausahaan"}
 ]},
 {id:"s3", n:"Semester 3", kids:[
  {n:"Akuntansi Aktuaria"},
  {n:"Analisis Runtun Waktu"},
  {n:"Manajemen Portofolio"},
  {n:"Matematika Keuangan", k:"matkeu"},
  {n:"Metode Statistika", k:"metstat"},
  {n:"Pengantar Data Mining"},
  {n:"Pengantar Ekonomi Makro"},
  {n:"Pengantar Matematika Aktuaria", k:"pma"},
  {n:"Statistika Matematika", k:"statmat"}
 ]},
 {id:"s4", n:"Semester 4", kids:[]},
 {id:"s5", n:"Semester 5", kids:[]}
];
