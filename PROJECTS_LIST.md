# Daftar Proyek Kandidat Portofolio

Dokumen kerja untuk 13 proyek yang dipilih. Status dicek langsung dari GitHub dan HTTP response pada 2 November 2026.

## Legenda status

| Status | Arti |
|---|---|
| `SUDAH DITAMBAHKAN` | Sudah masuk `src/data/projects.ts` dan punya gambar kartu |
| `SIAP` | Gambar kartu sudah tersedia di repo, belum ditambahkan |
| `SIAP SCREENSHOT` | Demo publik aktif, tinggal ambil screenshot 16:9 |
| `BUTUH AKSES` | Demo ada tapi di balik login |
| `BUTUH GAMBAR` | Tidak ada demo publik dan tidak ada aset visual |

## Ringkasan

| Status | Jumlah | Proyek |
|---|---|---|
| `SUDAH DITAMBAHKAN` | 7 | rintis, website-itn, chordposter, zyhosinaga, horassinaga, presenface, mavenstudio |
| `BUTUH AKSES` | 2 | documents-analyzer, esocare |
| `BUTUH GAMBAR` | 4 | tasys-v3, maven-ai-studio, RSA-PVD, multimodal-mirex |

## Tabel utama

| No | Proyek | Repo | Akses | Demo | Gambar siap pakai | Kesiapan | Keterangan portofolio |
|---|---|---|---|---|---|---|---|
| 1 | TASYS v3 | `tasys-v3` | private | Tidak ada, README pakai `tasys.example.com` | Tidak ada | `BUTUH GAMBAR` | Tambahkan setelah screenshot lokal/server kampus. Prioritas 1, tapi belum bisa masuk sekarang |
| 2 | Rintis | `rintis` | private | LIVE `rintis-liard.vercel.app` | Screenshot live `rintis.webp` | `SUDAH DITAMBAHKAN` | Masuk portofolio, tanpa link repo |
| 3 | Documents Analyzer | `documents-analyzer---personal` | private | GATED `documents-analyzer-personal.vercel.app` | Hanya `Logo_Pelindo.png` | `BUTUH AKSES` | Tambahkan setelah login dan screenshot. Konfirmasi dulu branding "Pelindo" sebelum publikasi |
| 4 | Horas Sinaga | `horassinaga` | private | Tidak ada, app lokal/Android | Mockup board `horassinaga.webp` | `SUDAH DITAMBAHKAN` | Masuk portofolio, tanpa link repo dan tanpa demo |
| 5 | Website ITN | `website-itn` | private | LIVE `website-itn.vercel.app` | Screenshot live `website-itn.webp` | `SUDAH DITAMBAHKAN` | Masuk portofolio. Konfirmasi izin publikasi karena ini situs organisasi/klien |
| 6 | Maven AI Studio | `maven-ai-studio` | private | Tidak ada, aplikasi desktop Electron | Tidak ada | `BUTUH GAMBAR` | Tunda. Butuh screenshot aplikasi dari lokal |
| 7 | Maven Composer | `chordposter` | private | LIVE `chordposter.vercel.app` | Screenshot live `chordposter.webp` | `SUDAH DITAMBAHKAN` | Masuk portofolio, tanpa link repo |
| 8 | Zyho Sinaga | `zyhosinaga` | private | LIVE `zyhosinaga.vercel.app` | Screenshot live `zyhosinaga.webp` | `SUDAH DITAMBAHKAN` | Masuk portofolio. Konfirmasi izin karena ini situs klien |
| 9 | Maven Studio | `mavenstudio` | private | LIVE `mavenstudiomedan.vercel.app` | Screenshot live `mavenstudio.webp` | `SUDAH DITAMBAHKAN` | Masuk portofolio dengan URL yang benar (`mavenstudiomedan`, bukan `mavenstudio`) |
| 10 | RSA-PVD Steganography | `RSA-PVD-text-to-video-steganography` | public | Tidak ada hosted, Flask hanya lokal | `diagram.png` 578x2106 + sample input/output | `BUTUH GAMBAR` | Tunda. Butuh screenshot GUI PyQt6 atau web Flask dari lokal. Diagram bisa jadi gambar pendukung |
| 11 | EsoCare | `esocare` | public | LIVE `esocare.vercel.app`, tetapi halaman login | Tidak ada | `BUTUH AKSES` | Tunda. Demo langsung masuk halaman login, bukan dashboard. Butuh akun demo untuk screenshot |
| 12 | PresenFace | `presenface-image-classification` | public | HF Space merespons, frontend belum terkonfirmasi | `demo.webp` 800x381, screenshot UI asli | `SUDAH DITAMBAHKAN` | Masuk portofolio dengan link repo public. Demo publik belum ada |
| 13 | MIREX Music Emotion | `multimodal-mirex-classification` | public | Tidak ada web, hanya Kaggle notebook | Tidak ada | `BUTUH GAMBAR` | Tunda. Butuh screenshot output notebook (confusion matrix / metrik) dari Kaggle |

## Detail per proyek

### 1. TASYS v3
- Sistem administrasi tugas akhir Prodi Farmasi ITERA.
- Stack: React 19, Vite, TypeScript, Tailwind v4, Base UI/shadcn, TanStack Query/Table, React Router, PocketBase 0.40, Gotenberg.
- 95 commit, private.
- Punya unit test Vitest, integrasi PocketBase, typecheck, lint, build.
- Belum ada demo publik dan belum ada gambar.
- Aksi: jalankan `python dev.py` lalu screenshot, atau minta screenshot dari server produksi.

### 2. Rintis
- Asisten AI untuk UMKM, proyek IDCamp Developer Challenge.
- Stack: Next.js, Supabase, AI SDK (Google/OpenAI), shadcn/Base UI, Recharts, Playwright, Vitest.
- 28 commit, private.
- Demo aktif: https://rintis-liard.vercel.app
- Gambar: screenshot landing page, `public/img/projects/rintis.webp`.
- Status: sudah ditambahkan ke portofolio.

### 3. Documents Analyzer
- RAG untuk membaca, membandingkan, mencari referensi, dan visualisasi dokumen.
- Stack: Next.js, Supabase, Google GenAI, pdf-parse, mammoth, xlsx, Recharts, react-dropzone.
- 12 commit, private.
- Demo aktif tapi wajib login: https://documents-analyzer-personal.vercel.app
- Judul halaman saat ini "Pelindo - Documents Analyzer", perlu dikonfirmasi sebelum tampil di portofolio.
- Gambar repo: hanya `public/Logo_Pelindo.png`.
- Aksi: login, screenshot workspace, konfirmasi branding.

### 4. Horas Sinaga
- Aplikasi komunitas Marga Sinaga untuk Android dan web.
- Stack: Expo Router, React Native, TypeScript, PocketBase, Docker.
- 10 commit, private.
- Tidak ada demo publik, `horassinaga.vercel.app` 404.
- Gambar: `docs/mockup.png` 1536x1024 berisi 8 layar, dipotong ke 16:9 menjadi `public/img/projects/horassinaga.webp`.
- Status: sudah ditambahkan ke portofolio.

### 5. Website ITN
- Website "Indonesia Trans Network".
- Stack: React, Vite, React Router, Tailwind v4, GSAP, Motion, Lenis, Swiper.
- 63 commit, private.
- Demo aktif: https://website-itn.vercel.app
- Gambar: screenshot live, `public/img/projects/website-itn.webp`.
- Status: sudah ditambahkan ke portofolio.

### 6. Maven AI Studio
- Aplikasi desktop otomasi produksi lagu AI dan alur stem.
- Stack: Electron, electron-vite, React, TypeScript, Tailwind, wavesurfer.js, Python sidecar, pytest, Playwright.
- 5 commit, private.
- Tidak ada demo, tidak ada gambar sama sekali.
- Aksi: jalankan aplikasi, screenshot workspace utama dan hasil ekspor.

### 7. Maven Composer (chordposter)
- Web composer untuk membuat chord sheet dan autoplay ke keyboard PSR via Web MIDI.
- Stack: Vite, React 19, TypeScript, Tailwind v4, Zustand, Immer, Web MIDI, Supabase, Vitest (27 test).
- 41 commit, private.
- Demo aktif: https://chordposter.vercel.app
- Gambar: screenshot live, `public/img/projects/chordposter.webp`.
- Status: sudah ditambahkan ke portofolio.

### 8. Zyho Sinaga
- Portfolio musisi dengan katalog musik, video, gallery, dan studio.
- Stack: Next.js, Sanity CMS, styled-components, Motion, Lenis.
- 14 commit, private.
- Demo aktif: https://zyhosinaga.vercel.app
- Gambar: screenshot live, `public/img/projects/zyhosinaga.webp`.
- Status: sudah ditambahkan ke portofolio.

### 9. Maven Studio
- Website home recording studio di Medan.
- Stack: Next.js 16, React 19, TypeScript, App Router, Playwright, Vercel.
- 1 commit, private.
- Demo aktif: https://mavenstudiomedan.vercel.app/
- Catatan: `mavenstudio.vercel.app` adalah situs lain ("Maven Studios | Premium Production Services"), bukan project ini.
- Gambar: screenshot live, `public/img/projects/mavenstudio.webp`.
- Status: sudah ditambahkan ke portofolio.

### 10. RSA-PVD Text-to-Video Steganography
- Steganografi teks ke video dengan RSA dan Pixel Value Differencing.
- Stack: Python, OpenCV, PyCryptodome, PyQt6, Flask.
- 11 commit, public.
- Tidak ada demo hosted. Web interface hanya `http://localhost:5000`.
- Gambar repo: `diagram.png` 578x2106 (arsitektur, vertikal), `input/original_image.png`, `output/stego_image.png`.
- Aksi: jalankan `python main_gui.py` atau `python app.py`, screenshot UI. Diagram cocok untuk gambar pendukung, bukan kartu.

### 11. EsoCare
- Prediksi kanker esofagus: presence, stage, survival, recurrence, treatment response.
- Stack: Next.js, TypeScript, onnxruntime-web, model ONNX, react-hook-form, Zod, Radix.
- 24 commit, public.
- Demo aktif: https://esocare.vercel.app, tetapi yang tampil adalah halaman login dengan field `dokter`.
- Gambar repo: tidak ada.
- Aksi: siapkan akun demo, login, screenshot dashboard atau halaman periksa.

### 12. PresenFace
- Presensi mahasiswa dengan face recognition berbasis deep learning.
- Stack: Next.js 15, TypeScript, Genkit/Gemini, Firebase, backend PyTorch, Hugging Face Space.
- 7 commit, public.
- Demo: HF Space merespons, tapi frontend Vercel belum ada URL terkonfirmasi. Endpoint `/predict` timeout saat dicek.
- Gambar: `demo.webp` 800x381, screenshot UI asli, dipotong ke 16:9 menjadi `public/img/projects/presenface.webp`.
- Status: sudah ditambahkan ke portofolio dengan link repo public.

### 13. MIREX Music Emotion Classification
- Klasifikasi emosi musik multimodal (audio, lirik, MIDI).
- Stack: PyTorch, EfficientNet-B0, ResNet18, DistilBERT, BiGRU, librosa, nnAudio, Kaggle.
- 2 commit, public.
- Tidak ada web demo. Demo berupa Kaggle notebook.
- Gambar repo: tidak ada.
- Aksi: screenshot metrik atau confusion matrix dari notebook Kaggle.

## Yang belum ada gambar

Empat proyek ini belum punya aset visual sama sekali dan perlu kamu siapkan:

1. `tasys-v3`: tidak ada demo publik, tidak ada gambar.
2. `maven-ai-studio`: aplikasi desktop, tidak ada gambar.
3. `RSA-PVD-text-to-video-steganography`: hanya diagram arsitektur, tidak ada screenshot UI.
4. `multimodal-mirex-classification`: hanya notebook, tidak ada gambar.

Dua proyek menunggu akses:

5. `documents-analyzer---personal`: demo aktif tapi butuh login.
6. `esocare`: demo aktif tapi halaman login, belum ada akun demo.

## Urutan penambahan

| Gelombang | Proyek | Status |
|---|---|---|
| 1 | rintis, website-itn, chordposter, zyhosinaga, horassinaga, presenface | Selesai |
| 2 | mavenstudio | Selesai |
| 3 | documents-analyzer, esocare | Menunggu akun demo |
| 4 | tasys-v3, maven-ai-studio, RSA-PVD, multimodal-mirex | Menunggu screenshot manual |

## Catatan

- Semua screenshot kartu disimpan di `public/img/projects/<nama>.webp` dengan rasio 16:9.
- Repo private tidak diberi `githubUrl`. Isi `url` dengan demo, atau biarkan kosong dengan gambar dan deskripsi sebagai case study.
- Konfirmasi izin publikasi untuk proyek yang tampak milik klien atau organisasi: `website-itn`, `zyhosinaga`, `mavenstudio`, `documents-analyzer`.
- URL Maven Studio yang benar adalah `https://mavenstudiomedan.vercel.app/`. `mavenstudio.vercel.app` adalah situs lain.
- Urutan project: 3 teratas tetap (PMK, PPLK, Sidosari), sisanya diurutkan dari aktivitas repo terbaru. Tujuh proyek baru ada di urutan 4-10.
