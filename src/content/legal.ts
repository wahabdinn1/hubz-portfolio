import type { Locale } from "../lib/locale";

export type LegalSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LegalDocument = {
  title: string;
  metaDescription: string;
  effectiveDateLabel: string;
  effectiveDate: string;
  summary: string;
  authorityNotice?: string;
  otherDocLabel: string;
  otherDocPath: string;
  backLabel: string;
  sections: LegalSection[];
};

export type LegalBundle = {
  terms: LegalDocument;
  privacy: LegalDocument;
};

export const LEGAL_CONTENT: Record<Locale, LegalBundle> = {
  en: {
    terms: {
      title: "Terms of Service",
      metaDescription:
        "Terms of Service for wahabdinn.my.id and Hubz Publisher, operated by Wahabdin Sangadji.",
      effectiveDateLabel: "Effective date",
      effectiveDate: "November 27, 2026",
      summary:
        "These Terms of Service govern access to wahabdinn.my.id and the Hubz Publisher software operated by Wahabdin Sangadji.",
      otherDocLabel: "Read Privacy Policy",
      otherDocPath: "/privacy",
      backLabel: "Back to overview",
      sections: [
        {
          id: "scope",
          heading: "1. Scope and operator",
          paragraphs: [
            "This website (https://wahabdinn.my.id) and the Hubz Publisher application are operated by Wahabdin Sangadji. Hubz Publisher is a self-hosted publishing studio built to organize, schedule, and publish original short-form videos to accounts authorized by the operator.",
            "By accessing this website or connecting a social media account to Hubz Publisher, you agree to these Terms of Service.",
          ],
        },
        {
          id: "authorized-use",
          heading: "2. Eligibility and authorized account use",
          paragraphs: [
            "Hubz Publisher may only be connected to social media channels, pages, or creator accounts that you own or are explicitly authorized to manage. Automated spam, unauthorized scraping, impersonation, or bulk distribution of content you do not hold rights to is prohibited.",
          ],
        },
        {
          id: "third-party-terms",
          heading: "3. Third-party platform terms",
          paragraphs: [
            "When you authorize Hubz Publisher to interact with external social platforms, your use remains subject to each platform's own terms and developer policies:",
          ],
          bullets: [
            "YouTube Terms of Service and Google API Services User Data Policy for YouTube Data API v3 integrations.",
            "Meta Platform Terms and Developer Policies for Facebook Pages and Instagram Professional accounts.",
            "TikTok Terms of Service and TikTok Developer Terms of Service for Login Kit and Content Posting API integrations.",
          ],
        },
        {
          id: "content-ownership",
          heading: "4. Content ownership and responsibility",
          paragraphs: [
            "You retain full ownership of all video files, thumbnails, subtitles, titles, captions, and comments processed through Hubz Publisher. You are solely responsible for verifying copyright clearance, audio licenses, community guideline compliance, and publishing schedules before dispatching any post.",
          ],
        },
        {
          id: "disclaimer",
          heading: "5. Availability, disclaimer, and limitation of liability",
          paragraphs: [
            "This website and Hubz Publisher are provided on an as-is and as-available basis without warranties of uninterrupted availability or guaranteed distribution reach. Platform API outages, quota changes, or policy updates from YouTube, Meta, or TikTok may pause or reject uploads outside the operator's control.",
            "To the fullest extent permitted by applicable law, Wahabdin Sangadji is not liable for indirect, incidental, or consequential damages arising from scheduled upload failures, third-party API restrictions, or account enforcement actions.",
          ],
        },
        {
          id: "termination",
          heading: "6. Revocation and termination",
          paragraphs: [
            "You may stop using Hubz Publisher at any time by disconnecting your accounts in the application and revoking OAuth access in your Google Account security settings, Facebook Business Integrations settings, or TikTok Manage App Permissions settings.",
          ],
        },
        {
          id: "contact",
          heading: "7. Changes and contact",
          paragraphs: [
            "These terms may be updated as platform API integrations evolve. Material updates will be posted on https://wahabdinn.my.id/terms with a revised effective date. Questions regarding these Terms of Service or Hubz Publisher may be sent to wahabdinn@gmail.com.",
          ],
        },
      ],
    },
    privacy: {
      title: "Privacy Policy",
      metaDescription:
        "Privacy Policy for wahabdinn.my.id and Hubz Publisher, covering YouTube, Meta, and TikTok API data handling.",
      effectiveDateLabel: "Effective date",
      effectiveDate: "November 27, 2026",
      summary:
        "This Privacy Policy explains what data wahabdinn.my.id and Hubz Publisher access, how it is stored locally, and how you can revoke access or delete stored records.",
      otherDocLabel: "Read Terms of Service",
      otherDocPath: "/terms",
      backLabel: "Back to overview",
      sections: [
        {
          id: "controller",
          heading: "1. Overview and operator",
          paragraphs: [
            "wahabdinn.my.id and the Hubz Publisher application are operated by Wahabdin Sangadji (contact: wahabdinn@gmail.com). The public portfolio at https://wahabdinn.my.id is a static site that sets no advertising cookies, runs no third-party analytics trackers, and collects no personal visitor data.",
          ],
        },
        {
          id: "data-accessed",
          heading: "2. Information accessed through platform APIs",
          paragraphs: [
            "When an authorized user explicitly connects an account inside their local Hubz Publisher installation, the application accesses only the minimum data needed for the selected platform scopes:",
          ],
          bullets: [
            "YouTube Data API v3 (youtube.upload, youtube.readonly, optional youtube.force-ssl): channel title, channel ID, upload status, video statistics, and user-initiated uploads of videos, thumbnails, captions, and first comments.",
            "Meta Graph API for Facebook and Instagram (pages_show_list, pages_read_engagement, pages_manage_posts, instagram_basic, instagram_content_publish, plus optional instagram_manage_insights, pages_manage_engagement, instagram_manage_comments): connected Page and Instagram Professional IDs, display names, publishing status, post insights, and user-initiated Reels or comments.",
            "TikTok Login Kit and Content Posting API (user.info.basic, video.upload): basic profile display name, open ID, and user-initiated video draft transfers to the creator's TikTok Inbox.",
          ],
        },
        {
          id: "data-use",
          heading: "3. How information is used",
          paragraphs: [
            "Platform data is used strictly to authenticate connected channels, execute user-scheduled video and draft uploads, post user-approved first comments, reconcile remote publishing status, and display personal performance summaries inside the local dashboard.",
            "Hubz Publisher never sells, rents, or transfers platform data to advertisers, data brokers, or external AI training services. Use of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements.",
          ],
        },
        {
          id: "storage-security",
          heading: "4. Local storage and security",
          paragraphs: [
            "Hubz Publisher runs locally on the operator's own machine. OAuth access tokens and refresh tokens are encrypted at rest using AES-256-GCM before being stored in the local SQLite database and are never written to client-side code or application logs.",
            "When optional Cloudflare Quick Tunnel delivery is enabled for Full HD Instagram Reels, only the specific video or cover asset requested for upload is exposed temporarily through an HMAC-signed expiring URL on an isolated local port; the dashboard itself is never exposed publicly.",
          ],
        },
        {
          id: "retention-deletion",
          heading: "5. Retention, revocation, and data deletion",
          paragraphs: [
            "Encrypted tokens and analytics snapshots remain in the local SQLite database only while the account stays connected. Clicking Disconnect inside Hubz Publisher immediately deletes the stored encrypted token record from the local database.",
            "You can also revoke OAuth authorization directly at any time through Google Account Permissions, Facebook Business Integrations, or TikTok Settings (Security and Permissions -> Manage App Permissions). For deletion inquiries or verification questions, email wahabdinn@gmail.com.",
          ],
        },
        {
          id: "updates",
          heading: "6. Policy updates and contact",
          paragraphs: [
            "Updates to this Privacy Policy will be published at https://wahabdinn.my.id/privacy with an updated effective date. Direct all privacy inquiries to Wahabdin Sangadji at wahabdinn@gmail.com.",
          ],
        },
      ],
    },
  },
  id: {
    terms: {
      title: "Ketentuan Layanan",
      metaDescription:
        "Ketentuan Layanan untuk wahabdinn.my.id dan Hubz Publisher yang dioperasikan oleh Wahabdin Sangadji.",
      effectiveDateLabel: "Tanggal berlaku",
      effectiveDate: "27 November 2026",
      summary:
        "Ketentuan Layanan ini mengatur penggunaan situs wahabdinn.my.id dan perangkat lunak Hubz Publisher yang dioperasikan oleh Wahabdin Sangadji.",
      authorityNotice:
        "Terjemahan bahasa Indonesia ini disediakan untuk kemudahan baca. Versi bahasa Inggris di /terms merupakan dokumen hukum resmi yang berlaku untuk peninjauan API.",
      otherDocLabel: "Baca Kebijakan Privasi",
      otherDocPath: "/id/privacy",
      backLabel: "Kembali ke beranda",
      sections: [
        {
          id: "scope",
          heading: "1. Ruang lingkup dan pengelola",
          paragraphs: [
            "Situs ini (https://wahabdinn.my.id) dan aplikasi Hubz Publisher dikelola oleh Wahabdin Sangadji. Hubz Publisher adalah studio publikasi self-hosted untuk menata, menjadwalkan, dan menerbitkan video pendek orisinal ke akun yang telah diberi otorisasi oleh pengelola.",
            "Dengan mengakses situs ini atau menghubungkan akun media sosial ke Hubz Publisher, Anda menyetujui Ketentuan Layanan ini.",
          ],
        },
        {
          id: "authorized-use",
          heading: "2. Kelayakan dan penggunaan akun terotorisasi",
          paragraphs: [
            "Hubz Publisher hanya boleh dihubungkan ke kanal, halaman, atau akun kreator yang Anda miliki atau kelola secara resmi. Penggunaan untuk spam otomatis, scraping tanpa izin, penyamaran identitas, atau distribusi konten tanpa hak cipta dilarang.",
          ],
        },
        {
          id: "third-party-terms",
          heading: "3. Ketentuan platform pihak ketiga",
          paragraphs: [
            "Saat Anda memberi otorisasi agar Hubz Publisher terhubung ke platform eksternal, penggunaan Anda tetap tunduk pada ketentuan masing-masing platform:",
          ],
          bullets: [
            "YouTube Terms of Service dan Google API Services User Data Policy untuk integrasi YouTube Data API v3.",
            "Meta Platform Terms dan Developer Policies untuk Facebook Pages dan akun Instagram Professional.",
            "TikTok Terms of Service dan TikTok Developer Terms of Service untuk integrasi Login Kit dan Content Posting API.",
          ],
        },
        {
          id: "content-ownership",
          heading: "4. Kepemilikan dan tanggung jawab konten",
          paragraphs: [
            "Anda tetap memegang penuh kepemilikan atas seluruh berkas video, thumbnail, subtitle, judul, caption, dan komentar yang diproses di Hubz Publisher. Anda bertanggung jawab penuh atas izin hak cipta, lisensi audio, kepatuhan pedoman komunitas, dan jadwal publikasi sebelum konten dikirim.",
          ],
        },
        {
          id: "disclaimer",
          heading: "5. Ketersediaan, penafian, dan batasan tanggung jawab",
          paragraphs: [
            "Situs ini dan Hubz Publisher disediakan sebagaimana adanya tanpa jaminan ketersediaan tanpa henti atau jaminan jangkauan distribusi. Gangguan API, perubahan kuota, atau kebijakan dari YouTube, Meta, maupun TikTok dapat menunda atau menolak unggahan di luar kendali pengelola.",
            "Sejauh diizinkan hukum yang berlaku, Wahabdin Sangadji tidak bertanggung jawab atas kerugian tidak langsung akibat kegagalan jadwal unggah, pembatasan API pihak ketiga, atau tindakan moderasi akun platform.",
          ],
        },
        {
          id: "termination",
          heading: "6. Pencabutan akses dan penghentian",
          paragraphs: [
            "Anda dapat berhenti menggunakan Hubz Publisher kapan saja dengan menekan Disconnect di aplikasi serta mencabut akses OAuth dari pengaturan keamanan Google Account, Facebook Business Integrations, atau TikTok Manage App Permissions.",
          ],
        },
        {
          id: "contact",
          heading: "7. Perubahan dan kontak",
          paragraphs: [
            "Ketentuan ini dapat diperbarui mengikuti perkembangan integrasi API platform. Pembaruan akan dipublikasikan di https://wahabdinn.my.id/terms dengan tanggal berlaku terbaru. Pertanyaan mengenai Ketentuan Layanan atau Hubz Publisher dapat dikirim ke wahabdinn@gmail.com.",
          ],
        },
      ],
    },
    privacy: {
      title: "Kebijakan Privasi",
      metaDescription:
        "Kebijakan Privasi untuk wahabdinn.my.id dan Hubz Publisher terkait pengelolaan data API YouTube, Meta, dan TikTok.",
      effectiveDateLabel: "Tanggal berlaku",
      effectiveDate: "27 November 2026",
      summary:
        "Kebijakan Privasi ini menjelaskan data apa yang diakses oleh wahabdinn.my.id dan Hubz Publisher, cara penyimpanannya secara lokal, serta cara mencabut akses atau menghapus data.",
      authorityNotice:
        "Terjemahan bahasa Indonesia ini disediakan untuk kemudahan baca. Versi bahasa Inggris di /privacy merupakan dokumen hukum resmi yang berlaku untuk peninjauan API.",
      otherDocLabel: "Baca Ketentuan Layanan",
      otherDocPath: "/id/terms",
      backLabel: "Kembali ke beranda",
      sections: [
        {
          id: "controller",
          heading: "1. Ringkasan dan pengelola data",
          paragraphs: [
            "wahabdinn.my.id dan aplikasi Hubz Publisher dikelola oleh Wahabdin Sangadji (kontak: wahabdinn@gmail.com). Situs portofolio publik di https://wahabdinn.my.id bersifat statis tanpa cookie iklan, tanpa pelacak analitik pihak ketiga, dan tidak mengumpulkan data pribadi pengunjung.",
          ],
        },
        {
          id: "data-accessed",
          heading: "2. Informasi yang diakses melalui API platform",
          paragraphs: [
            "Saat pengguna terotorisasi menghubungkan akun pada instalasi Hubz Publisher lokalnya, aplikasi hanya mengakses data minimal sesuai scope platform yang dipilih:",
          ],
          bullets: [
            "YouTube Data API v3 (youtube.upload, youtube.readonly, opsional youtube.force-ssl): nama dan ID kanal, status unggahan, statistik video, serta unggahan video, thumbnail, subtitle, dan komentar pertama atas perintah pengguna.",
            "Meta Graph API untuk Facebook dan Instagram (pages_show_list, pages_read_engagement, pages_manage_posts, instagram_basic, instagram_content_publish, serta opsional instagram_manage_insights, pages_manage_engagement, instagram_manage_comments): ID dan nama Page serta Instagram Professional, status terbit, insight performa, dan unggahan Reels atau komentar atas perintah pengguna.",
            "TikTok Login Kit dan Content Posting API (user.info.basic, video.upload): nama tampilan profil dasar, open ID, dan pengiriman draf video ke TikTok Inbox milik kreator atas perintah pengguna.",
          ],
        },
        {
          id: "data-use",
          heading: "3. Penggunaan informasi",
          paragraphs: [
            "Data platform hanya dipakai untuk autentikasi kanal terhubung, menjalankan unggahan video dan draf sesuai jadwal pengguna, mengirim komentar pertama yang disetujui, menyelaraskan status terbit, dan menampilkan ringkasan analitik pribadi di dasbor lokal.",
            "Hubz Publisher tidak pernah menjual, menyewakan, atau membagikan data platform ke pengiklan, broker data, atau layanan pelatihan AI eksternal. Penggunaan data dari Google API mematuhi Google API Services User Data Policy termasuk ketentuan Limited Use.",
          ],
        },
        {
          id: "storage-security",
          heading: "4. Penyimpanan lokal dan keamanan",
          paragraphs: [
            "Hubz Publisher berjalan secara lokal di perangkat pengelola. Token akses dan refresh OAuth dienkripsi dengan AES-256-GCM sebelum disimpan di database SQLite lokal dan tidak pernah ditulis ke kode klien maupun log aplikasi.",
            "Saat mode Cloudflare Quick Tunnel opsional diaktifkan untuk Instagram Reels Full HD, hanya berkas video atau sampul yang sedang diunggah yang dibuka sementara lewat URL bertanda tangan HMAC dengan masa berlaku terbatas pada port lokal terisolasi; dasbor tidak pernah dibuka ke publik.",
          ],
        },
        {
          id: "retention-deletion",
          heading: "5. Retensi, pencabutan akses, dan penghapusan data",
          paragraphs: [
            "Token terenkripsi dan catatan analitik hanya tersimpan di database SQLite lokal selama akun terhubung. Menekan Disconnect di Hubz Publisher langsung menghapus token terenkripsi dari database lokal.",
            "Anda juga dapat mencabut otorisasi OAuth kapan saja melalui Google Account Permissions, Facebook Business Integrations, atau pengaturan TikTok (Manage App Permissions). Untuk pertanyaan privasi atau verifikasi, kirim email ke wahabdinn@gmail.com.",
          ],
        },
        {
          id: "updates",
          heading: "6. Pembaruan kebijakan dan kontak",
          paragraphs: [
            "Pembaruan Kebijakan Privasi akan diterbitkan di https://wahabdinn.my.id/privacy disertai tanggal berlaku baru. Seluruh pertanyaan privasi dapat dikirim kepada Wahabdin Sangadji di wahabdinn@gmail.com.",
          ],
        },
      ],
    },
  },
};
