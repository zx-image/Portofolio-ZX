# ZX.IMAGE - Professional Portfolio

Portofolio web interaktif dan elegan milik **M. Zexlly**. Didesain dengan standar modern UI/UX, menggabungkan animasi *cinematic*, *micro-interactions*, dan arsitektur *Progressive Web App (PWA)*.

## Fitur Unggulan
- **GSAP Scroll Animations:** Transisi *smooth* dan animasi tirai (*curtain reveal preloader*) kelas atas.
- **3D Magnetic Tilt:** Efek pantulan kaca dan kemiringan hologram interaktif pada setiap kotak Bento.
- **Spotlight Glow Effect:** Cahaya senter dinamis yang merespons pergerakan kursor di latar belakang kartu.
- **Progressive Web App (PWA):** Mendukung *Hybrid Caching* (membagi beban server dan memori klien), hemat kuota, dan dapat diinstal sebagai aplikasi di HP.
- **SEO & Open Graph Ready:** Tampilan *preview link* berupa kartu elegan (*thumbnail*, judul, deskripsi) saat tautan dibagikan di WhatsApp atau media sosial.
- **Dark/Light Theme:** Terintegrasi dengan penyimpanan lokal (*local storage*) pengguna.

## 🛠️ Teknologi yang Digunakan
- **Core:** HTML5, CSS3, Vanilla JavaScript (Tanpa Framework).
- **Animation Engine:** [GSAP (GreenSock)](https://greensock.com/gsap/) & ScrollTrigger.
- **3D Engine:** [Vanilla-tilt.js](https://micku7zu.github.io/vanilla-tilt.js/).
- **Typography & Icons:** Plus Jakarta Sans & FontAwesome.
- **Performance & PWA:** Service Worker (`sw.js`) & Web Manifest.

## 📂 Struktur Direktori
- `index.html` — Struktur kerangka utama web & Meta Tags SEO.
- `style.css` — Pengaturan gaya, tata letak *Bento Grid*, dan penyesuaian (*diet*) antarmuka *mobile*.
- `script.js` — Logika animasi GSAP, *Custom Cursor*, dan pemanggil mesin PWA.
- `manifest.json` — Konfigurasi identitas aplikasi PWA (Ikon & Warna Tema).
- `sw.js` — *Service Worker* untuk sistem *Hybrid Caching* dan performa tanpa *lag*.

## 🌐 Cara Penggunaan (Deployment)
Project ini adalah *Static Website* murni dan tidak memerlukan instalasi NPM atau proses *build*.
1. *Push* semua file ke *repository* GitHub (Private/Public).
2. Hubungkan *repository* tersebut ke platform *hosting* seperti **Vercel**, **Netlify**, atau **GitHub Pages**.
3. Web langsung mengudara, dan fitur PWA akan otomatis aktif di *server production*.

---
*Menerjemahkan ide visual menjadi realitas digital.*
**© 2026 M. Zexlly (Creator HD). All Rights Reserved.**
