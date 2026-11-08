# Catatan Aktuaria

Catatan belajar dengan istilah yang muncul saat kursor diarahkan (definisi, rumus, contoh). Tampilannya meniru folder di File Explorer: Kuliah > Matkul S1/S2/S3 > folder matkul > bab.

## Struktur
- `index.html`: kerangka halaman (address bar, panel folder, area isi, status bar)
- `css/style.css`: tampilan (bagian "File Explorer" ada di paling bawah)
- `js/app.js`: mesin hover istilah dan komponen teks bab
- `js/explorer.js`: folder, address bar, pindah bab, latihan soal
- `data/struktur.js`: daftar folder S1, S2, S3 (nama folder persis seperti di laptop)
- `data/glosarium.js`: semua istilah (`T`), dipakai bersama oleh semua matkul
- `data/matkeu.js`, `data/statmat.js`, `data/pma.js`, `data/metstat.js`: isi bab per matkul
- `data/latihan.js`: latihan soal per bab

## Alamat
`#home` = Kuliah. `#s1`, `#s2`, `#s3` = folder semester. `#matkeu` = folder matkul berisi bab. `#matkeu-1` = satu bab.
Folder yang belum ada isinya tampil kosong (`#s1-fisika`, dan seterusnya).

## Menambah folder
Tambah satu baris `{n:"Nama Folder"}` di daftar `kids` pada `data/struktur.js`. Isi `kode:"..."` kalau mau kode matkul ikut tampil.

## Mengisi folder dengan matkul
1. Salin `data/_template-matkul-baru.js` menjadi `data/namabaru.js` lalu isi.
2. Tambahkan `<script src="data/namabaru.js"></script>` di `index.html` (sebelum `data/struktur.js`).
3. Di `data/struktur.js`, tambahkan `k:"namabaru"` pada folder yang cocok. Folder itu otomatis berisi bab-babnya.

## Menambah isi
- **Istilah baru**: tambah satu baris di `data/glosarium.js`.
- **Bab baru**: tambah satu blok `{id, t, h}` di daftar `ch` pada file matkulnya. `id` harus unik.
- **Tautan istilah di teks**: tulis `[[id|kata yang tampil]]`.
- **Latihan soal**: tambah entri di `data/latihan.js` dengan kunci id bab.
- **Rumus**: tulis TeX dalam `\( ... \)` (satu baris) atau `\[ ... \]` (tampil di tengah).

"Lanjutkan belajar" di halaman Kuliah mengingat bab terakhir yang dibuka (disimpan di browser).
