/* Jadwal kuliah (tampil di paling bawah beranda). Hapus baris <script src="data/jadwal.js"> di index.html kalau tidak mau ditampilkan.
   judul = judul kartu; hari = daftar hari; tiap hari berisi daftar kelas: r = ruang, n = mata kuliah, w = jam. */
window.JADWAL = {judul:"Jadwal Matkul Shiroo", hari:[
 {h:"Senin", kelas:[
  {r:"PB 231", n:"Statistik Matematika", w:"07:30-10:00"},
  {r:"PB 231", n:"Metode Statistika", w:"10:10-12:40"},
  {r:"PB 201", n:"Analisis Runtun Waktu", w:"13:10-15:30"}
 ]},
 {h:"Selasa", kelas:[
  {r:"PBT 201", n:"Manajemen Portofolio", w:"07:30-10:00"},
  {r:"PBT 201", n:"Akuntansi Aktu", w:"10:10-12:40"}
 ]},
 {h:"Rabu", kelas:[
  {r:"PB 231", n:"Pengantar Ekonomi Makro", w:"13:10-15:30"}
 ]},
 {h:"Kamis", kelas:[
  {r:"PBT 201", n:"Pengantar Matematika Aktu", w:"07:30-10:00"},
  {r:"PBT 201", n:"Matematika Keuangan", w:"10:10-12:40"}
 ]},
 {h:"Jumat", kelas:[
  {r:"Ruang Seminar", n:"Pengantar Data Mining", w:"13:10-14:40"}
 ]}
]};
