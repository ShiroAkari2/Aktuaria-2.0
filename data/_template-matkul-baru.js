/* TEMPLATE: salin file ini, ganti namanya (mis. data/riskteori.js), lalu:
   1) ganti "kodematkul" di bawah dengan kode singkat tanpa spasi/strip (mis. riskteori)
   2) isi t (nama), desc (deskripsi singkat di lobby), dan bab-babnya
   3) tambahkan satu baris <script src="data/riskteori.js"></script> di index.html,
      di bawah baris data/pma.js. Lobby dan kotak pilihan akan terisi otomatis.
   File yang berawalan _ ini tidak dimuat oleh index.html, jadi aman dibiarkan. */
window.COURSES = window.COURSES || {};
COURSES.kodematkul = {t:"Nama Mata Kuliah", desc:"Deskripsi singkat yang tampil di lobby.", ch:[
 {id:"kodematkul-1", t:"Judul bab 1 (Pekan 1)", h:String.raw`<h2>Subjudul</h2>
<p>Paragraf biasa. Istilah dari glosarium: [[bunga|suku bunga efektif]]. Rumus satu baris: \(a^2+b^2=c^2\).</p>
\[\sum_{k=1}^{n} k=\frac{n(n+1)}{2}\]`},
 {id:"kodematkul-2", t:"Judul bab 2 (Pekan 2)", h:String.raw`<h2>...</h2>`},
]};
