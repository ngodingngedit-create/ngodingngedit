<template>
  <main class="legal-page">
    <div class="legal-hero">
      <div class="legal-hero__inner container">
        <h1 class="legal-hero__title">Kebijakan Privasi</h1>
        <p class="legal-hero__subtitle">
          Terakhir diperbarui: <strong>Mei 2026</strong> · Berlaku untuk semua layanan Ngodingngedit.com
        </p>
      </div>
    </div>

    <div class="legal-body container">
      <!-- Sidebar TOC -->
      <aside class="legal-toc">
        <p class="legal-toc__label">Daftar Isi</p>
        <nav>
          <a v-for="item in tocItems" :key="item.id" :href="`#${item.id}`" class="legal-toc__link">
            {{ item.label }}
          </a>
        </nav>
      </aside>

      <!-- Main Content -->
      <article class="legal-content">

        <section id="pendahuluan" class="legal-section">
          <h2>1. Pendahuluan</h2>
          <p>Dokumen Kebijakan Privasi ini mengatur hak, kewajiban, dan ketentuan penggunaan layanan jasa pembuatan coding, editing, desain, dan layanan digital lainnya.</p>
          <p class="legal-note">Dengan menggunakan layanan kami, klien dianggap telah membaca, memahami, dan menyetujui seluruh syarat dan ketentuan yang berlaku.</p>
        </section>

        <section id="definisi" class="legal-section">
          <h2>2. Definisi</h2>
          <p>Dalam dokumen ini:</p>
          <ul>
            <li><strong>"Kami"</strong> mengacu pada penyedia jasa.</li>
            <li><strong>"Klien"</strong> mengacu pada individu, perusahaan, atau pihak yang menggunakan layanan.</li>
            <li><strong>"Proyek"</strong> mengacu pada pekerjaan yang disepakati antara klien dan penyedia jasa.</li>
            <li><strong>"Revisi"</strong> adalah perubahan minor yang masih sesuai dengan brief awal.</li>
          </ul>
        </section>

        <section id="ruang-lingkup" class="legal-section">
          <h2>3. Ruang Lingkup Layanan</h2>
          <p>Layanan yang dapat kami sediakan meliputi:</p>
          <ul>
            <li>Pembuatan website.</li>
            <li>Pembuatan aplikasi.</li>
            <li>Pembuatan bot/script.</li>
            <li>Editing source code.</li>
            <li>Perbaikan bug/error.</li>
            <li>Editing dokumen.</li>
            <li>Editing desain.</li>
            <li>Editing video atau konten digital.</li>
            <li>Konsultasi teknis.</li>
            <li>Maintenance sesuai kesepakatan.</li>
          </ul>
          <div class="legal-callout">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            Layanan di luar kesepakatan awal dapat dikenakan biaya tambahan.
          </div>
        </section>

        <section id="pemesanan" class="legal-section">
          <h2>4. Ketentuan Pemesanan</h2>
          <ul>
            <li>Klien wajib memberikan brief dan kebutuhan proyek secara jelas.</li>
            <li>Klien bertanggung jawab atas kelengkapan data dan materi proyek.</li>
            <li>Estimasi pengerjaan dimulai setelah seluruh data diterima lengkap.</li>
            <li>Pengerjaan dimulai setelah pembayaran DP diterima.</li>
            <li>Kami berhak menolak proyek tertentu tanpa wajib memberikan alasan detail.</li>
          </ul>
        </section>

        <section id="pembayaran" class="legal-section">
          <h2>5. Harga dan Pembayaran</h2>
          <ul>
            <li>Harga proyek ditentukan berdasarkan tingkat kesulitan dan ruang lingkup pekerjaan.</li>
            <li>Pembayaran dilakukan sesuai kesepakatan.</li>
            <li>DP minimal <strong>50%</strong> sebelum pengerjaan dimulai.</li>
            <li>Pelunasan wajib dilakukan sebelum file final/full source dikirim.</li>
            <li>Keterlambatan pembayaran dapat menyebabkan penundaan pengerjaan.</li>
            <li>Semua pembayaran yang sudah masuk bersifat <strong>non-refundable</strong> kecuali terdapat kesepakatan khusus.</li>
          </ul>
        </section>

        <section id="revisi" class="legal-section">
          <h2>6. Revisi</h2>
          <ul>
            <li>Revisi diberikan sesuai jumlah yang disepakati.</li>
            <li>Revisi hanya berlaku untuk perubahan minor.</li>
            <li>Perubahan konsep besar dari brief awal dianggap proyek tambahan.</li>
            <li>Revisi tambahan di luar paket dapat dikenakan biaya tambahan.</li>
            <li>Permintaan revisi harus disampaikan dalam batas waktu yang ditentukan.</li>
          </ul>
        </section>

        <section id="waktu-pengerjaan" class="legal-section">
          <h2>7. Waktu Pengerjaan</h2>
          <ul>
            <li>Estimasi waktu pengerjaan bersifat perkiraan.</li>
            <li>Waktu pengerjaan dapat berubah tergantung tingkat kesulitan proyek.</li>
            <li>Keterlambatan akibat revisi tambahan atau keterlambatan data dari klien bukan menjadi tanggung jawab kami.</li>
            <li>Hari libur nasional atau kondisi force majeure dapat memengaruhi timeline pengerjaan.</li>
          </ul>
        </section>

        <section id="hak-klien" class="legal-section">
          <h2>8. Hak dan Kewajiban Klien</h2>
          <p><strong>Klien wajib:</strong></p>
          <ul>
            <li>Memberikan informasi proyek secara jelas.</li>
            <li>Memberikan data yang legal dan tidak melanggar hukum.</li>
            <li>Melakukan pembayaran tepat waktu.</li>
            <li>Menjaga komunikasi yang baik selama proyek berlangsung.</li>
          </ul>
          <p><strong>Klien berhak:</strong></p>
          <ul>
            <li>Mendapat update progres proyek.</li>
            <li>Mendapat hasil sesuai kesepakatan.</li>
            <li>Mengajukan revisi sesuai ketentuan.</li>
          </ul>
        </section>

        <section id="hak-penyedia" class="legal-section">
          <h2>9. Hak dan Kewajiban Penyedia Jasa</h2>
          <p><strong>Kami berhak:</strong></p>
          <ul>
            <li>Menolak proyek tertentu.</li>
            <li>Menghentikan pengerjaan jika terjadi pelanggaran ketentuan.</li>
            <li>Menggunakan hasil proyek sebagai portofolio.</li>
          </ul>
          <p><strong>Kami wajib:</strong></p>
          <ul>
            <li>Menyelesaikan proyek sesuai kesepakatan.</li>
            <li>Menjaga kerahasiaan data klien.</li>
            <li>Memberikan layanan profesional sesuai kemampuan.</li>
          </ul>
        </section>

        <section id="hak-cipta" class="legal-section">
          <h2>10. Hak Cipta dan Kepemilikan</h2>
          <ul>
            <li>Hak penggunaan hasil kerja diberikan setelah pembayaran lunas.</li>
            <li>Hak cipta aset pihak ketiga tetap mengikuti lisensi masing-masing.</li>
            <li>Kami tidak bertanggung jawab atas pelanggaran lisensi yang dilakukan klien.</li>
            <li>Klien dilarang menjual ulang atau mengklaim source tertentu yang memiliki lisensi khusus.</li>
          </ul>
        </section>

        <section id="kerahasiaan" class="legal-section">
          <h2>11. Kerahasiaan</h2>
          <ul>
            <li>Seluruh data dan file proyek klien akan dijaga kerahasiaannya.</li>
            <li>Kami tidak akan menyebarluaskan data proyek tanpa izin.</li>
            <li>Klien juga wajib menjaga kerahasiaan source atau file tertentu apabila disepakati.</li>
          </ul>
        </section>

        <section id="garansi" class="legal-section">
          <h2>12. Garansi</h2>
          <ul>
            <li>Garansi bug/error diberikan selama periode tertentu setelah proyek selesai.</li>
            <li>Garansi hanya berlaku untuk error dari pengerjaan awal.</li>
            <li>Garansi <strong>tidak berlaku</strong> apabila:</li>
          </ul>
          <ul class="legal-sub-list">
            <li>Source diubah pihak lain.</li>
            <li>Server/hosting bermasalah.</li>
            <li>Terjadi kesalahan penggunaan oleh klien.</li>
            <li>Ada perubahan sistem pihak ketiga.</li>
          </ul>
        </section>

        <section id="maintenance" class="legal-section">
          <h2>13. Maintenance dan Support</h2>
          <ul>
            <li>Maintenance hanya diberikan apabila termasuk dalam paket layanan.</li>
            <li>Support diberikan dalam jam operasional yang ditentukan.</li>
            <li>Permintaan di luar ruang lingkup support dapat dikenakan biaya tambahan.</li>
          </ul>
        </section>

        <section id="akun" class="legal-section">
          <h2>14. Penggunaan Akun dan Akses</h2>
          <p>Apabila klien memberikan akses akun:</p>
          <ul>
            <li>Akses hanya digunakan untuk kebutuhan proyek.</li>
            <li>Klien disarankan mengganti password setelah proyek selesai.</li>
            <li>Kami tidak bertanggung jawab atas kebocoran akibat kelalaian klien.</li>
          </ul>
        </section>

        <section id="larangan" class="legal-section">
          <h2>15. Larangan</h2>
          <p>Kami berhak menolak proyek yang:</p>
          <ul>
            <li>Melanggar hukum.</li>
            <li>Mengandung malware atau hacking ilegal.</li>
            <li>Digunakan untuk phishing atau penipuan.</li>
            <li>Mengandung pornografi ilegal.</li>
            <li>Melanggar hak cipta.</li>
            <li>Bertentangan dengan kebijakan platform tertentu.</li>
          </ul>
        </section>

        <section id="pembatalan" class="legal-section">
          <h2>16. Pembatalan Proyek</h2>
          <ul>
            <li>Jika proyek dibatalkan oleh klien saat pengerjaan berlangsung, DP dianggap hangus.</li>
            <li>Jika proyek telah berjalan lebih dari 50%, biaya yang sudah dibayarkan tidak dapat dikembalikan.</li>
            <li>Jika pembatalan dilakukan oleh kami, pengembalian dana dilakukan sesuai bagian pekerjaan yang belum dikerjakan.</li>
          </ul>
        </section>

        <section id="force-majeure" class="legal-section">
          <h2>17. Force Majeure</h2>
          <p>Kami tidak bertanggung jawab atas keterlambatan atau kegagalan layanan akibat:</p>
          <ul>
            <li>Bencana alam.</li>
            <li>Gangguan internet.</li>
            <li>Pemadaman listrik.</li>
            <li>Kerusakan server.</li>
            <li>Kebijakan pemerintah.</li>
            <li>Kondisi di luar kendali lainnya.</li>
          </ul>
        </section>

        <section id="batas-tanggung-jawab" class="legal-section">
          <h2>18. Batas Tanggung Jawab</h2>
          <p>Kami tidak bertanggung jawab atas:</p>
          <ul>
            <li>Kerugian bisnis tidak langsung.</li>
            <li>Kehilangan data akibat pihak ketiga.</li>
            <li>Penyalahgunaan source oleh klien.</li>
            <li>Kerusakan akibat modifikasi pihak lain.</li>
            <li>Penangguhan akun/platform pihak ketiga.</li>
          </ul>
        </section>

        <section id="perubahan-ketentuan" class="legal-section">
          <h2>19. Perubahan Ketentuan</h2>
          <p>Kebijakan Privasi ini dapat diperbarui sewaktu-waktu tanpa pemberitahuan sebelumnya. Versi terbaru akan menjadi acuan yang berlaku.</p>
        </section>

        <section id="persetujuan" class="legal-section">
          <h2>20. Persetujuan</h2>
          <p>Dengan melakukan pembayaran atau menggunakan layanan kami, klien dianggap menyetujui seluruh Kebijakan Privasi yang berlaku.</p>
        </section>

        <!-- Back Nav -->
        <div class="legal-back">
          <router-link to="/" class="legal-back__btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
            Kembali ke Beranda
          </router-link>
          <router-link to="/terms-and-conditions" class="legal-back__btn legal-back__btn--alt">
            Lihat Syarat &amp; Ketentuan →
          </router-link>
        </div>

      </article>
    </div>
  </main>
</template>

<script setup>
const tocItems = [
  { id: 'pendahuluan', label: '1. Pendahuluan' },
  { id: 'definisi', label: '2. Definisi' },
  { id: 'ruang-lingkup', label: '3. Ruang Lingkup Layanan' },
  { id: 'pemesanan', label: '4. Ketentuan Pemesanan' },
  { id: 'pembayaran', label: '5. Harga dan Pembayaran' },
  { id: 'revisi', label: '6. Revisi' },
  { id: 'waktu-pengerjaan', label: '7. Waktu Pengerjaan' },
  { id: 'hak-klien', label: '8. Hak & Kewajiban Klien' },
  { id: 'hak-penyedia', label: '9. Hak & Kewajiban Penyedia' },
  { id: 'hak-cipta', label: '10. Hak Cipta' },
  { id: 'kerahasiaan', label: '11. Kerahasiaan' },
  { id: 'garansi', label: '12. Garansi' },
  { id: 'maintenance', label: '13. Maintenance & Support' },
  { id: 'akun', label: '14. Penggunaan Akun' },
  { id: 'larangan', label: '15. Larangan' },
  { id: 'pembatalan', label: '16. Pembatalan Proyek' },
  { id: 'force-majeure', label: '17. Force Majeure' },
  { id: 'batas-tanggung-jawab', label: '18. Batas Tanggung Jawab' },
  { id: 'perubahan-ketentuan', label: '19. Perubahan Ketentuan' },
  { id: 'persetujuan', label: '20. Persetujuan' },
]
</script>

<style scoped>
/* ─── Layout ───────────────────────────────────── */
.legal-page {
  background: #f8faff;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* ─── Hero ─────────────────────────────────────── */
.legal-hero {
  background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #3b82f6 100%);
  padding: 8rem 0 4rem;
  position: relative;
  overflow: hidden;
}

.legal-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.legal-hero__inner {
  position: relative;
  text-align: center;
}

.legal-badge {
  display: inline-block;
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.3);
  color: #fff;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  padding: 0.35rem 1rem;
  border-radius: 999px;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(8px);
}

.legal-hero__title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: #fff;
  margin: 0 0 1rem;
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.legal-hero__subtitle {
  color: rgba(255,255,255,0.8);
  font-size: 1rem;
  margin: 0;
}

/* ─── Body Layout ──────────────────────────────── */
.legal-body {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 3rem;
  padding-top: 3rem;
  padding-bottom: 5rem;
  align-items: start;
}

/* ─── TOC Sidebar ──────────────────────────────── */
.legal-toc {
  position: sticky;
  top: 6rem;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(37,99,235,0.07);
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 10rem);
}

.legal-toc__label {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #94a3b8;
  margin: 0 0 1rem;
  flex-shrink: 0;
}

.legal-toc nav {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  overflow-y: auto;
  padding-right: 0.25rem;
}

.legal-toc nav::-webkit-scrollbar {
  width: 4px;
}

.legal-toc nav::-webkit-scrollbar-track {
  background: transparent;
}

.legal-toc nav::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 99px;
}

.legal-toc__link {
  font-size: 0.82rem;
  color: #64748b;
  text-decoration: none;
  padding: 0.4rem 0.75rem;
  border-radius: 8px;
  transition: all 0.2s;
  border-left: 2px solid transparent;
  line-height: 1.4;
}

.legal-toc__link:hover {
  color: #2563eb;
  background: #eff6ff;
  border-left-color: #2563eb;
}

/* ─── Content ──────────────────────────────────── */
.legal-content {
  min-width: 0;
}

.legal-section {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 2rem 2.5rem;
  margin-bottom: 1.5rem;
  transition: box-shadow 0.2s;
}

.legal-section:hover {
  box-shadow: 0 8px 30px rgba(37,99,235,0.08);
}

.legal-section h2 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1e3a8a;
  margin: 0 0 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #eff6ff;
}

.legal-section p {
  color: #475569;
  line-height: 1.8;
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
}

.legal-section p:last-child {
  margin-bottom: 0;
}

.legal-section ul {
  color: #475569;
  line-height: 1.8;
  padding-left: 1.25rem;
  margin: 0.5rem 0;
  font-size: 0.95rem;
}

.legal-section li {
  margin-bottom: 0.4rem;
}

.legal-sub-list {
  padding-left: 2.5rem !important;
  margin-top: 0.25rem !important;
}

.legal-note {
  background: #eff6ff;
  border-left: 4px solid #2563eb;
  border-radius: 0 8px 8px 0;
  padding: 0.75rem 1rem !important;
  color: #1e40af !important;
  margin-top: 0.75rem !important;
  font-size: 0.9rem !important;
}

.legal-callout {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: #fefce8;
  border: 1px solid #fde047;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  margin-top: 1rem;
  color: #854d0e;
  font-size: 0.88rem;
  font-weight: 500;
}

.legal-callout svg {
  flex-shrink: 0;
  color: #ca8a04;
}

/* ─── Contact Section ──────────────────────────── */
.legal-section--contact {
  background: linear-gradient(135deg, #eff6ff, #f0f9ff);
  border-color: #bfdbfe;
}

.legal-contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 0.5rem;
}

.legal-contact-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  background: #fff;
  border: 1px solid #dbeafe;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.legal-contact-item svg {
  color: #2563eb;
  flex-shrink: 0;
  margin-top: 0.15rem;
}

.legal-contact-item div {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.legal-contact-label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #94a3b8;
}

.legal-contact-value {
  font-size: 0.9rem;
  color: #1e3a8a;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;
}

a.legal-contact-value:hover {
  color: #2563eb;
  text-decoration: underline;
}

/* ─── Back Nav ─────────────────────────────────── */
.legal-back {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 0.5rem;
  flex-wrap: wrap;
}

.legal-back__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #fff;
  border: 1px solid #e2e8f0;
  color: #1e3a8a;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.65rem 1.25rem;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.2s;
}

.legal-back__btn:hover {
  background: #eff6ff;
  border-color: #bfdbfe;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(37,99,235,0.12);
}

.legal-back__btn--alt {
  background: #2563eb;
  border-color: #2563eb;
  color: #fff;
}

.legal-back__btn--alt:hover {
  background: #1d4ed8;
  border-color: #1d4ed8;
}

/* ─── Responsive ───────────────────────────────── */
@media (max-width: 1024px) {
  .legal-body {
    grid-template-columns: 1fr;
  }

  .legal-toc {
    position: static;
  }
}

@media (max-width: 640px) {
  .legal-hero {
    padding: 3rem 0 2.5rem;
  }

  .legal-section {
    padding: 1.5rem;
  }

  .legal-contact-grid {
    grid-template-columns: 1fr;
  }

  .legal-back {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }

  .legal-back__btn {
    justify-content: center;
  }
}
</style>
