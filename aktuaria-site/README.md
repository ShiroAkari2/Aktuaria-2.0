# Catatan Aktuaria

Catatan belajar dengan istilah yang muncul saat kursor diarahkan (definisi, rumus, contoh).

## Struktur
- `index.html`: kerangka halaman (jarang diubah)
- `css/style.css`: tampilan
- `js/app.js`: mesin hover, pindah bab, latihan soal (jarang diubah)
- `data/glosarium.js`: semua istilah (`T`), dipakai bersama oleh semua matkul
- `data/matkeu.js`, `data/statmat.js`, `data/pma.js`: isi bab per matkul
- `data/latihan.js`: latihan soal per bab

## Menambah isi
- **Istilah baru**: tambah satu baris di `data/glosarium.js`.
- **Bab baru**: tambah satu blok `{id, t, h}` di daftar `ch` pada file matkulnya. `id` harus unik.
- **Tautan istilah di teks**: tulis `[[id|kata yang tampil]]`.
- **Latihan soal**: tambah entri di `data/latihan.js` dengan kunci id bab.
- **Rumus**: tulis TeX dalam `\( ... \)` (satu baris) atau `\[ ... \]` (tampil di tengah).

## Lobby dan navigasi
- Alamat kosong atau `#home` = lobby. `#kodematkul` = daftar bab satu matkul. `#kodematkul-1` = satu bab.
- Tombol "Lanjutkan belajar" di lobby mengingat bab terakhir yang dibuka (disimpan di browser).
- Teks deskripsi tiap matkul di lobby diambil dari `desc` di file `data/<matkul>.js`.

## Menambah mata kuliah baru
1. Salin `data/_template-matkul-baru.js` menjadi `data/namabaru.js` lalu isi.
2. Tambahkan `<script src="data/namabaru.js"></script>` di `index.html` (sebelum `js/app.js`).

## Menambah bab baru
Tambahkan satu blok `{id:"matkul-N", t:"Judul", h:String.raw\`...\`}` di daftar `ch` pada file matkulnya.
