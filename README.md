# Catatan Aktuaria

Catatan belajar dengan istilah yang muncul saat kursor diarahkan (definisi, rumus, contoh).

## Struktur
- `index.html`: kerangka halaman (jarang diubah)
- `css/style.css`: tampilan
- `js/app.js`: mesin hover, pindah bab, latihan soal (jarang diubah)
- `data/glosarium.js`: semua istilah (`T`), dipakai bersama oleh semua matkul
- `data/matkeu.js`, `data/statmat.js`, `data/pma.js`: isi bab per matkul
- `data/latihan.js`: latihan soal per bab
- `data/struktur.js`: susunan Semester 1 sampai 5 (`TREE`) dan kelas mandiri (`STANDALONE`) yang tampil sejajar di beranda

## Menambah isi
- **Istilah baru**: tambah satu baris di `data/glosarium.js`.
- **Bab baru**: tambah satu blok `{id, t, h}` di daftar `ch` pada file matkulnya. `id` harus unik.
- **Tautan istilah di teks**: tulis `[[id|kata yang tampil]]`.
- **Latihan soal**: tambah entri di `data/latihan.js` dengan kunci id bab.
- **Rumus**: tulis TeX dalam `\( ... \)` (satu baris) atau `\[ ... \]` (tampil di tengah).

## Lobby dan navigasi
- Alamat kosong atau `#home` = lobby (kartu Semester 1 sampai 5, lalu kelas mandiri). `#s3` = kartu mata kuliah satu semester. `#kodematkul` = daftar bab satu matkul. `#kodematkul-1` = satu bab.
- Tombol "Lanjutkan belajar" di lobby mengingat bab terakhir yang dibuka (disimpan di browser).
- Teks deskripsi tiap matkul di lobby diambil dari `desc` di file `data/<matkul>.js`.

## Menambah mata kuliah baru
1. Salin `data/_template-matkul-baru.js` menjadi `data/namabaru.js` lalu isi.
2. Tambahkan `<script src="data/namabaru.js"></script>` di `index.html` (sebelum `js/app.js`) dan nama filenya di daftar `CORE` pada `sw.js`.
3. Di `data/struktur.js`, isi `k:"namabaru"` pada kartu matkul yang sesuai supaya muncul di semester yang benar. Untuk kelas mandiri, tambahkan `{n:"Nama Kelas", k:"namabaru"}` ke `window.STANDALONE` agar kartunya tampil sejajar dengan kartu semester di beranda.

## Menambah bab baru
Tambahkan satu blok `{id:"matkul-N", t:"Judul", h:String.raw\`...\`}` di daftar `ch` pada file matkulnya.

## Komponen tambahan (v2.6)
- `⟦int|teks⟧` kotak Interpretasi, `⟦bukti|teks⟧` kotak Bukti, `⟦def|teks⟧` kotak Definisi (di samping `soal`, `dik`, `tanya`, `teorema`).
- Gambar kurva (SVG) memakai kelas `.fig` dan `.pl-*` di `css/style.css`; garis waktu vertikal `.vt`; kartu dua kolom `.duo`.
- `data/statmat.js`: 9 bab (8 Sub-CPMK + peta materi terpadu); latihan tiap bab di `data/latihan.js` (kunci `statmat-1` sampai `statmat-9`); istilah baru berawalan `sm_` di `data/glosarium.js`.
