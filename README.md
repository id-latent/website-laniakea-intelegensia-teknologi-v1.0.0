# 🤖 NamaAgency — Website AI Bot untuk UMKM

> Website landing page profesional untuk agency AI Bot yang melayani otomatisasi WhatsApp, Facebook Messenger, Telegram, Discord, E-Commerce, dan Website. Dibangun khusus untuk menarik klien UMKM Indonesia.

---

## 📋 Daftar Isi

- [Tentang Project](#tentang-project)
- [Struktur File](#struktur-file)
- [Cara Upload ke GitHub](#cara-upload-ke-github)
- [Cara Edit Konten](#cara-edit-konten)
- [Penjelasan Setiap Section](#penjelasan-setiap-section)
- [Hal yang Harus Diisi](#hal-yang-harus-diisi)
- [Rekomendasi Jika Bisnis Berkembang](#rekomendasi-jika-bisnis-berkembang)

---

## 📖 Tentang Project

Website ini adalah **landing page satu halaman (single page)** yang berfungsi sebagai CV digital dan alat pemasaran untuk bisnis AI Bot Agency. Tujuan utamanya adalah menarik calon klien UMKM agar menghubungi pemilik bisnis via WhatsApp.

**Teknologi yang digunakan:**
- HTML5 — struktur halaman
- CSS3 — tampilan dan animasi
- JavaScript (Vanilla) — interaktivitas dan animasi
- Google Fonts — tipografi (Bricolage Grotesque + Instrument Sans)
- GitHub Pages — hosting gratis

**Fitur unggulan website:**
- Loading screen animasi saat halaman dibuka
- Platform showcase interaktif (demo chat bot hidup untuk 6 platform)
- Auto-cycling platform setiap 6 detik
- Scroll animations — elemen muncul saat discroll
- Sticky WhatsApp button — selalu terlihat di semua halaman
- Responsive — nyaman di HP maupun PC
- Stats bar (khusus PC) — angka yang meyakinkan klien
- FAQ accordion — pertanyaan umum yang bisa dibuka tutup
- Tooltip di navigasi (PC)
- Nav shadow saat scroll

---

## 📁 Struktur File

```
📁 repository/
├── index.html      → Struktur & konten halaman (teks, section, tombol)
├── style.css       → Semua tampilan (warna, font, layout, animasi CSS)
├── script.js       → Semua logika (loader, animasi, platform showcase)
└── README.md       → Dokumentasi project ini
```

### Panduan singkat: file mana yang diedit?

| Mau ubah apa | File |
|---|---|
| Nama agency, teks, harga, kontak | `index.html` |
| Warna, ukuran font, jarak, layout | `style.css` |
| Kecepatan animasi, urutan platform | `script.js` |

---

## 🚀 Cara Upload ke GitHub

### Upload pertama kali:
1. Buka [github.com](https://github.com) di Samsung Internet
2. Login ke akun GitHub
3. Buka repository kamu
4. Tap **"Add file"** → **"Upload files"**
5. Pilih ketiga file: `index.html`, `style.css`, `script.js`
6. Tap **"Commit changes"**
7. Aktifkan GitHub Pages: **Settings** → **Pages** → **Branch: main** → **Save**
8. Website live di: `https://username.github.io/nama-repository`

### Update file (setelah ada revisi):
1. Buka repository di GitHub
2. Tap **"Add file"** → **"Upload files"**
3. Upload **hanya file yang berubah** (tidak perlu ketiganya)
4. Tap **"Commit changes"**
5. Tunggu 1-2 menit → perubahan otomatis tampil di website

---

## ✏️ Cara Edit Konten

### Edit via GitHub (tanpa download):
1. Buka repository → tap file yang mau diedit
2. Tap ikon **pensil ✏️** di pojok kanan atas
3. Edit teks yang diinginkan
4. Tap **"Commit changes"**

### Edit via Acode (di HP):
1. Buka Acode → buka file yang mau diedit
2. Gunakan fitur **Find & Replace** (Ctrl+H) untuk cari teks placeholder
3. Ganti dengan data asli
4. Save → upload ulang ke GitHub

### Edit via github.dev (VS Code di browser):
1. Buka URL repository
2. Ganti `github.com` → `github.dev` di URL
3. Tampil seperti VS Code — bisa edit, search, dan save langsung

---

## 📄 Penjelasan Setiap Section

### 1. Loading Screen
File: `script.js` dan `style.css`

Muncul saat halaman pertama dibuka. Menampilkan logo agency, progress bar, dan titik-titik loading. Otomatis hilang setelah font selesai dimuat (minimal 1.8 detik).

### 2. Navigasi (Nav)
File: `index.html`

Bar navigasi fixed di atas halaman. Berisi logo, link menu, dan tombol "Konsultasi Gratis" yang mengarah ke WhatsApp.

**Yang harus diisi:**
```html
<!-- Ganti link WhatsApp -->
https://wa.me/628XXXXXXXXXX
```

### 3. Hero Section
File: `index.html`

Bagian pertama yang dilihat pengunjung. Berisi judul besar, deskripsi singkat, tombol CTA, dan **Platform Showcase** — demo chat bot interaktif untuk 6 platform yang berganti otomatis.

**Platform showcase** menampilkan simulasi chat bot di:
- 💬 WhatsApp
- 💙 Facebook Messenger
- ✈️ Telegram
- 🎮 Discord
- 🛍️ E-Commerce (Shopee)
- 🌐 Website Live Chat

### 4. Stats Bar (PC only)
File: `index.html` dan `style.css`

Muncul hanya di layar PC/laptop. Menampilkan 5 angka kunci: platform didukung, waktu respon, operasional 24/7, chat bersamaan, dan custom per bisnis.

### 5. Marquee (Ticker)
File: `index.html`

Teks berjalan otomatis yang menyebutkan semua platform dan layanan. Berjalan terus menerus.

### 6. Section Masalah UMKM
File: `index.html`

4 kartu yang menyebutkan masalah umum UMKM (chat tidak terbalas, pertanyaan berulang, dll). Bertujuan agar calon klien merasa "ini persis masalah saya".

### 7. Section Layanan
File: `index.html`

6 kartu layanan utama: WhatsApp Bot, Facebook Bot, Telegram Bot, Discord Bot, E-Commerce Bot, Maintenance & Support, dan Custom AI Automation.

### 8. Section Cara Kerja
File: `index.html`

4 langkah proses: Konsultasi → Perancangan → Pengembangan → Live & Maintenance.

### 9. Section Kenapa Pilih Kami
File: `index.html`

Dua kolom: kiri berisi 4 keunggulan, kanan berisi tabel perbandingan CS Manual vs Bot AI.

### 10. Section Platform
File: `index.html`

6 kartu platform yang didukung dengan ikon dan keterangan API.

### 11. Section Harga
File: `index.html`

3 paket harga: Starter, Growth (featured), dan Custom. Semua tombol mengarah ke WhatsApp.

**Yang harus diisi:**
```html
<!-- Ganti placeholder harga -->
Rp X,X jt  →  Rp 1,5 jt (contoh)
```

### 12. FAQ
File: `index.html`

5 pertanyaan umum dengan jawaban accordion (buka tutup). Bisa ditambah pertanyaan baru sesuai kebutuhan.

### 13. CTA Section
File: `index.html`

Ajakan terakhir sebelum footer. Dua tombol: WhatsApp dan Email.

**Yang harus diisi:**
```html
mailto:email@namaagency.com  →  ganti dengan email asli
```

### 14. Footer
File: `index.html`

Nama agency, copyright, dan kota domisili.

### 15. Sticky WhatsApp Button
File: `index.html` dan `style.css`

Tombol WhatsApp yang selalu muncul di pojok kanan bawah layar. Di HP hanya tampil ikon, di PC tampil dengan teks.

---

## 📝 Hal yang Harus Diisi (Placeholder)

Cari teks berikut di `index.html` dan ganti dengan data asli:

| Placeholder | Ganti dengan |
|---|---|
| `NamaAgency` | Nama agency kamu |
| `628XXXXXXXXXX` | Nomor WA kamu (contoh: 6281234567890) |
| `email@namaagency.com` | Email kamu |
| `[Kota, Indonesia]` | Kota domisili kamu |
| `Rp X,X jt` | Harga paket yang kamu tawarkan |
| `© 2025 NamaAgency` | Ganti nama dan tahun |

---

## 🔮 Rekomendasi Jika Bisnis Berkembang

Berikut adalah roadmap pengembangan website yang disarankan berdasarkan tahap perkembangan bisnis:

---

### 📌 Tahap 1 — Bisnis Mulai Jalan (Klien Pertama)

**1. Ganti hosting ke layanan berbayar**
- Saat ini pakai GitHub Pages — cukup untuk awal
- Rekomendasi: [Vercel](https://vercel.com) atau [Netlify](https://netlify.com) — tetap gratis tapi lebih cepat dan stabil
- Kalau sudah ada dana: beli domain sendiri (contoh: `namaagency.id`) — sekitar Rp 150.000/tahun

**2. Tambahkan form kontak**
- Ganti tombol "Kirim Email" dengan form yang langsung kirim pesan
- Gunakan [Formspree](https://formspree.io) — gratis, tidak perlu backend
- Klien bisa isi nama, nomor, dan kebutuhan langsung dari website

**3. Tambahkan Google Analytics**
- Pasang tracking gratis dari Google
- Bisa tahu berapa orang yang mengunjungi website, dari mana, dan halaman mana yang paling banyak dilihat
- Sangat berguna untuk tahu apakah website efektif menarik klien

**4. Tambahkan section Testimoni**
- Setelah dapat klien pertama, minta testimoni singkat
- Tampilkan di website dengan foto/nama (dengan izin klien)
- Testimoni nyata jauh lebih meyakinkan daripada teks promosi

---

### 📌 Tahap 2 — Bisnis Stabil (5-10 Klien)

**5. Buat halaman portofolio terpisah**
- Tampilkan project bot yang pernah dibuat dengan detail
- Screenshot, nama klien (jika diizinkan), masalah yang diselesaikan, hasil yang dicapai
- Ini yang paling sering dilihat calon klien sebelum memutuskan

**6. Tambahkan Blog / Artikel**
- Tulis artikel tentang AI Bot untuk UMKM
- Contoh: "5 Alasan UMKM Butuh WhatsApp Bot", "Cara Bot Meningkatkan Penjualan"
- Artikel bagus = muncul di Google = dapat calon klien gratis (SEO)

**7. Tambahkan Live Chat nyata**
- Pasang [Tawk.to](https://tawk.to) — gratis
- Pengunjung bisa chat langsung dengan kamu dari website
- Konversi lebih tinggi karena bisa jawab pertanyaan real-time

**8. Optimasi SEO**
- Tambahkan meta description, og:image, sitemap
- Daftarkan ke Google Search Console
- Target keyword: "jasa bot WhatsApp", "bot otomatis UMKM", dll

---

### 📌 Tahap 3 — Bisnis Berkembang (Revenue Konsisten)

**9. Ganti platform ke yang lebih powerful**
- Pindah dari GitHub Pages ke hosting VPS atau platform seperti [Railway](https://railway.app)
- Bisa pasang backend untuk fitur dinamis (database, login, dashboard)

**10. Buat Client Dashboard**
- Portal khusus untuk klien melihat status bot mereka
- Laporan performa bot (jumlah pesan, response rate, dll)
- Fitur ini bisa jadi nilai jual premium yang membedakan dari kompetitor

**11. Tambahkan sistem pembayaran online**
- Integrasi Midtrans atau Xendit
- Klien bisa langsung bayar dari website tanpa transfer manual
- Lebih profesional dan menghemat waktu

**12. Hire tim atau partner**
- Pisahkan website menjadi multi-page (Home, Services, Portfolio, Blog, Contact)
- Tambahkan halaman "Tim" untuk menampilkan anggota
- Rebrand dari solo freelancer menjadi agency yang lebih besar

**13. Buat landing page terpisah per layanan**
- Contoh: `namaagency.id/whatsapp-bot`
- Setiap halaman fokus ke satu layanan dengan penjelasan sangat detail
- Lebih efektif untuk iklan berbayar (Google Ads / Meta Ads)

**14. Pasang Chatbot di website sendiri**
- Jadikan website kamu sebagai showcase sekaligus
- Bot di website kamu sendiri = bukti nyata kemampuan kamu ke calon klien

---

### 💡 Tips Tambahan

- **Konsistensi branding** — pastikan warna, font, dan tone bahasa sama di semua platform (website, WA, Instagram, dll)
- **Update harga berkala** — sesuaikan dengan pengalaman dan permintaan pasar
- **Dokumentasikan setiap project** — foto, video, atau screenshot sebelum & sesudah — ini aset berharga untuk portofolio
- **Bangun personal brand** — posting progress belajar di LinkedIn atau Twitter/X — calon klien suka dengan founder yang transparan dan terus berkembang

---

## 🛠️ Teknologi yang Direkomendasikan untuk Masa Depan

| Kebutuhan | Rekomendasi | Harga |
|---|---|---|
| Domain | Niagahoster / Rumahweb | ~Rp 150rb/tahun |
| Hosting | Vercel / Netlify | Gratis |
| Form kontak | Formspree | Gratis |
| Analytics | Google Analytics | Gratis |
| Live chat | Tawk.to | Gratis |
| Email bisnis | Zoho Mail | Gratis |
| Pembayaran | Midtrans | % per transaksi |
| Backend | Supabase + Railway | Gratis (tier dasar) |

---

## 📞 Kontak & Support

Website ini dibuat dan dikelola oleh **[Nama Kamu]**

- WhatsApp: [628XXXXXXXXXX]
- Email: [email@namaagency.com]
- GitHub: [github.com/id-latent]

---

*README ini dibuat sebagai panduan lengkap untuk mengelola dan mengembangkan website NamaAgency. Update dokumen ini setiap kali ada perubahan besar pada project.*

*Semangat membangun bisnis! 💪🚀*
