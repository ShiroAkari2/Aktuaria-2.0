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

## Aplikasi (PWA)
- `manifest.json` (nama, warna, ikon), `sw.js` (penyimpan offline), dan folder `icons/` membuat halaman ini bisa di-install.
- Chrome/Edge laptop: klik ikon install di kanan bilah alamat. Android: menu ⋮ → Instal aplikasi / Tambahkan ke layar utama. iPhone: Safari → Bagikan → Tambah ke Layar Utama.
- Update isi: cukup unggah ke GitHub. Aplikasi memuat versi terbaru saat dibuka dengan internet.
- Hanya jika ada masalah simpanan lama: ubah angka `VER` di `sw.js` (mis. aktuaria-v2).

## Komponen tampilan di teks bab
Tulis di dalam teks bab (data/*.js) atau pembahasan latihan:
- `⟦soal|teks⟧`, `⟦dik|teks⟧` (Diketahui), `⟦tanya|teks⟧`, `⟦kes|teks⟧` (Kesimpulan), `⟦catatan|teks⟧`
- `⟦langkah|1|Judul langkah|isi dengan rumus⟧` (lingkaran bernomor)
- `⟦garis|-24.112|4.112|μ₁−μ₂⟧` (garis bilangan selang kepercayaan; angka pakai titik, simbol pakai tanda minus − )
- `<span class="boxf">rumus</span>` (kotak rumus), `<div class="flow">…</div>` (alur memilih rumus, lihat bab 7 Metode Statistika)
