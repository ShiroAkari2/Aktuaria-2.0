/* Struktur folder di beranda (meniru File Explorer di laptop).
   n    = nama folder yang tampil
   kode = kode matkul, hanya diisi kalau sudah tertulis lengkap di folder aslinya
   k    = kunci matkul di data/<matkul>.js; folder yang punya k berisi bab, sisanya tampil kosong
   Menambah matkul: buat data/<matkul>.js, pasang <script>-nya di index.html, lalu isi k di salah satu folder di bawah. */
window.TREE = [
 {id:"s1", n:"Matkul S1", kids:[
  {n:"Aktuaria"}, {n:"Balance"}, {n:"Bindo"}, {n:"Biologi"}, {n:"Fisika"}, {n:"Jurnal"},
  {n:"Kimia"}, {n:"Matdas"}, {n:"PAI"}, {n:"Pancasila S1"}, {n:"PKN"}, {n:"Teori Suku Bunga"}
 ]},
 {id:"s2", n:"Matkul S2", kids:[
  {n:"Alin"}, {n:"Binggi"}, {n:"BMI"}, {n:"Matdas 2"}, {n:"PEM"}, {n:"T. inves"},
  {n:"Tepro"}, {n:"WBI"}, {n:"Wirus"}
 ]},
 {id:"s3", n:"Matkul S3", kids:[
  {n:"AKUNTANSI AKTUARIA A", kode:"23H08120102"},
  {n:"ANALISIS RUNTUN WAKTU A"},
  {n:"MANAJEMEN PORTOFOLIO A"},
  {n:"MATEMATIKA KEUANGAN A", k:"matkeu"},
  {n:"METODE STATISTIKA A", kode:"23H08120203", k:"metstat"},
  {n:"PENGANTAR DATA MINING A", kode:"23H08120602"},
  {n:"PENGANTAR EKONOMI MAKRO A"},
  {n:"PENGANTAR MATEMATIKA AKTUARIA A", k:"pma"},
  {n:"STATISTIK MATEMATIKA A", kode:"23H08120703", k:"statmat"}
 ]}
];
