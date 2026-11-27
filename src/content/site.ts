import type { Locale } from "../lib/locale";

export const SITE_META = {
  name: "Wahabdin Sangadji",
  email: "wahabdinn@gmail.com",
  githubUrl: "https://github.com/wahabdinn1",
  githubHandle: "github.com/wahabdinn1",
  domain: "https://wahabdinn.my.id",
  domainLabel: "wahabdinn.my.id",
  appName: "Hubz Publisher",
} as const;

export type ProjectEntry = {
  index: string;
  name: string;
  summary: string;
  stack: string;
  href?: string;
  linkLabel?: string;
};

export type PlatformSpecRow = {
  platform: string;
  duration: string;
  delivery: string;
  scopes: string;
};

export type SiteContent = {
  htmlLang: string;
  meta: {
    homeTitle: string;
    homeDescription: string;
    productTitle: string;
    productDescription: string;
  };
  nav: {
    work: string;
    product: string;
    terms: string;
    privacy: string;
    emailAction: string;
    menuOpen: string;
    menuClose: string;
    skipToContent: string;
  };
  hero: {
    roles: string;
    statement: string;
    primaryCta: string;
    copyEmailLabel: string;
    copiedLabel: string;
  };
  workSection: {
    heading: string;
    intro: string;
  };
  projects: ProjectEntry[];
  specSection: {
    heading: string;
    intro: string;
    columns: {
      platform: string;
      duration: string;
      delivery: string;
      scopes: string;
    };
    legalNotePrefix: string;
    termsLabel: string;
    privacyLabel: string;
  };
  platformSpecs: PlatformSpecRow[];
  practiceSection: {
    heading: string;
    leftHeading: string;
    leftBody: string;
    rightHeading: string;
    rightBody: string;
    stackLabel: string;
    stackList: string;
    githubCta: string;
  };
  productPage: {
    backLabel: string;
    heading: string;
    subtitle: string;
    workflowHeading: string;
    workflowSteps: Array<{ step: string; title: string; detail: string }>;
    apiHeading: string;
    apiIntro: string;
    securityHeading: string;
    securityPoints: string[];
    legalHeading: string;
    legalIntro: string;
  };
  footer: {
    operatorNote: string;
    termsLabel: string;
    privacyLabel: string;
    githubLabel: string;
    backToTop: string;
  };
};

export const SITE_CONTENT: Record<Locale, SiteContent> = {
  en: {
    htmlLang: "en",
    meta: {
      homeTitle: "Wahabdin Sangadji",
      homeDescription:
        "Wahabdin Sangadji, Associate Partner Technology IAI, Admin, and Full-Stack Developer. Creator of Hubz Publisher and Hubz Video.",
      productTitle: "Hubz Publisher",
      productDescription:
        "Self-hosted short-form video publishing studio for YouTube Shorts, Facebook Reels, Instagram Reels, and TikTok Inbox Drafts.",
    },
    nav: {
      work: "Work",
      product: "Hubz Publisher",
      terms: "Terms",
      privacy: "Privacy",
      emailAction: "Email",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      skipToContent: "Skip to main content",
    },
    hero: {
      roles: "Associate Partner Technology IAI, Admin, and Full-Stack Developer",
      statement:
        "Building dependable web systems, local automation tools, and short-form video publishing workflows.",
      primaryCta: "View Hubz Publisher",
      copyEmailLabel: "Copy email",
      copiedLabel: "Email copied",
    },
    workSection: {
      heading: "Selected work",
      intro: "Two systems built and maintained for daily production.",
    },
    projects: [
      {
        index: "01",
        name: "Hubz Publisher",
        summary:
          "Self-hosted publishing studio for batch-importing video kits, scheduling uploads to YouTube Shorts, Facebook Reels, Instagram Reels, and TikTok, posting optional first comments, and syncing cross-platform metrics in local SQLite.",
        stack: "Next.js 16, TypeScript, Prisma, SQLite WAL, FFmpeg, Cloudflare Quick Tunnel",
        href: "/apps/hubz-publisher",
        linkLabel: "Read specification",
      },
      {
        index: "02",
        name: "Hubz Video",
        summary:
          "Local short-form animation production pipeline combining Remotion, Three.js scenes, Whisper word-level subtitle synchronization, loudness QC, and platform-specific publishing kits.",
        stack: "Remotion, Three.js, Python, FFmpeg, Whisper",
      },
    ],
    specSection: {
      heading: "Hubz Publisher platform envelope",
      intro:
        "Exact duration caps, delivery paths, and official API scopes used when publishing from Hubz Publisher.",
      columns: {
        platform: "Platform",
        duration: "Duration",
        delivery: "Delivery mode",
        scopes: "API scopes",
      },
      legalNotePrefix: "Official review documents for Hubz Publisher:",
      termsLabel: "Terms of Service",
      privacyLabel: "Privacy Policy",
    },
    platformSpecs: [
      {
        platform: "YouTube Shorts",
        duration: "Up to 180 s",
        delivery: "Native publishAt via 2 MiB resumable upload",
        scopes: "youtube.upload, youtube.readonly, youtube.force-ssl",
      },
      {
        platform: "Facebook Reels",
        duration: "3 s to 90 s",
        delivery: "Native scheduled_publish_time (Page Video fallback over 90 s)",
        scopes: "pages_show_list, pages_read_engagement, pages_manage_posts",
      },
      {
        platform: "Instagram Reels",
        duration: "3 s to 15 m",
        delivery: "Local worker via HMAC-signed 1080x1920 tunnel or direct rupload",
        scopes: "instagram_basic, instagram_content_publish, instagram_manage_insights",
      },
      {
        platform: "TikTok",
        duration: "Creator-defined",
        delivery: "Inbox Draft upload via Content Posting API (assisted fallback)",
        scopes: "user.info.basic, video.upload",
      },
    ],
    practiceSection: {
      heading: "Practice and stack",
      leftHeading: "Roles",
      leftBody:
        "Working as Associate Partner Technology IAI, system administrator, and full-stack developer. Day-to-day focus covers web engineering, infrastructure reliability, and practical media tooling.",
      rightHeading: "Core tools",
      rightBody:
        "Production code stays small, typed, and self-hosted where privacy matters. Most projects run on TypeScript, React, Node.js, SQLite, and Cloudflare edge hosting.",
      stackLabel: "Stack",
      stackList: "TypeScript, Next.js, React, Node.js, SQLite, Prisma, FFmpeg, Cloudflare",
      githubCta: "Inspect repositories on GitHub",
    },
    productPage: {
      backLabel: "Back to overview",
      heading: "Hubz Publisher",
      subtitle:
        "A self-hosted desktop-local publishing studio operated by Wahabdin Sangadji for scheduling original short-form videos across YouTube, Facebook, Instagram, and TikTok.",
      workflowHeading: "Publishing workflow",
      workflowSteps: [
        {
          step: "01",
          title: "Import local kits",
          detail:
            "Scans rendered MP4 files, subtitles, 9:16 covers, and metadata.md files into local storage with SHA-256 deduplication.",
        },
        {
          step: "02",
          title: "Compose per platform",
          detail:
            "Assigns separate titles, descriptions, tags, and optional first comments for YouTube, Facebook, Instagram, and TikTok before scheduling in Asia/Jakarta time.",
        },
        {
          step: "03",
          title: "Authorized API upload",
          detail:
            "The local background worker executes resumable uploads using user-authorized OAuth tokens stored with AES-256-GCM encryption.",
        },
        {
          step: "04",
          title: "Sync status and metrics",
          detail:
            "Reconciles published status and fetches views, likes, comments, reach, and saves directly from official platform APIs.",
        },
      ],
      apiHeading: "Platform integrations and OAuth scopes",
      apiIntro:
        "Hubz Publisher requests only the official OAuth permissions required for the channels enabled by the user.",
      securityHeading: "Local security architecture",
      securityPoints: [
        "Dashboard binds strictly to 127.0.0.1 behind a password-protected HttpOnly session cookie.",
        "OAuth access and refresh tokens are encrypted at rest with AES-256-GCM inside local SQLite.",
        "Optional Instagram Full HD delivery exposes only HMAC-signed, expiring media URLs on an isolated port.",
        "No user videos, captions, or OAuth tokens are sent to third-party servers outside YouTube, Meta, and TikTok APIs.",
      ],
      legalHeading: "Terms and privacy",
      legalIntro:
        "Review the governing legal documents or contact Wahabdin Sangadji directly for API verification inquiries.",
    },
    footer: {
      operatorNote: "Operated by Wahabdin Sangadji at wahabdinn.my.id",
      termsLabel: "Terms of Service",
      privacyLabel: "Privacy Policy",
      githubLabel: "GitHub",
      backToTop: "Top",
    },
  },
  id: {
    htmlLang: "id",
    meta: {
      homeTitle: "Wahabdin Sangadji",
      homeDescription:
        "Wahabdin Sangadji, Associate Partner Technology IAI, Admin, dan Full-Stack Developer. Pembuat Hubz Publisher dan Hubz Video.",
      productTitle: "Hubz Publisher",
      productDescription:
        "Studio publikasi video pendek self-hosted untuk YouTube Shorts, Facebook Reels, Instagram Reels, dan TikTok Inbox Draft.",
    },
    nav: {
      work: "Karya",
      product: "Hubz Publisher",
      terms: "Ketentuan",
      privacy: "Privasi",
      emailAction: "Email",
      menuOpen: "Buka menu",
      menuClose: "Tutup menu",
      skipToContent: "Lompat ke konten utama",
    },
    hero: {
      roles: "Associate Partner Technology IAI, Admin, dan Full-Stack Developer",
      statement:
        "Membangun sistem web yang andal, otomasi lokal, dan alur publikasi video pendek lintas platform.",
      primaryCta: "Lihat Hubz Publisher",
      copyEmailLabel: "Salin email",
      copiedLabel: "Email disalin",
    },
    workSection: {
      heading: "Karya pilihan",
      intro: "Dua sistem yang dibangun dan dipakai untuk produksi harian.",
    },
    projects: [
      {
        index: "01",
        name: "Hubz Publisher",
        summary:
          "Studio publikasi self-hosted untuk impor batch kit video, penjadwalan ke YouTube Shorts, Facebook Reels, Instagram Reels, dan TikTok, komentar pertama otomatis, serta sinkronisasi analitik di SQLite lokal.",
        stack: "Next.js 16, TypeScript, Prisma, SQLite WAL, FFmpeg, Cloudflare Quick Tunnel",
        href: "/id/apps/hubz-publisher",
        linkLabel: "Baca spesifikasi",
      },
      {
        index: "02",
        name: "Hubz Video",
        summary:
          "Pipeline produksi animasi video pendek lokal yang menggabungkan Remotion, panggung Three.js, sinkronisasi subtitle Whisper per kata, QC loudness audio, dan kit publikasi lintas platform.",
        stack: "Remotion, Three.js, Python, FFmpeg, Whisper",
      },
    ],
    specSection: {
      heading: "Spesifikasi platform Hubz Publisher",
      intro:
        "Batas durasi, metode pengiriman, dan scope API resmi yang digunakan saat publikasi dari Hubz Publisher.",
      columns: {
        platform: "Platform",
        duration: "Durasi",
        delivery: "Metode kirim",
        scopes: "Scope API",
      },
      legalNotePrefix: "Dokumen resmi peninjauan Hubz Publisher:",
      termsLabel: "Ketentuan Layanan",
      privacyLabel: "Kebijakan Privasi",
    },
    platformSpecs: [
      {
        platform: "YouTube Shorts",
        duration: "Hingga 180 dtk",
        delivery: "publishAt native via upload resumable 2 MiB",
        scopes: "youtube.upload, youtube.readonly, youtube.force-ssl",
      },
      {
        platform: "Facebook Reels",
        duration: "3 dtk hingga 90 dtk",
        delivery: "scheduled_publish_time native (fallback Page Video di atas 90 dtk)",
        scopes: "pages_show_list, pages_read_engagement, pages_manage_posts",
      },
      {
        platform: "Instagram Reels",
        duration: "3 dtk hingga 15 mnt",
        delivery: "Worker lokal via tunnel 1080x1920 bertanda tangan HMAC atau rupload",
        scopes: "instagram_basic, instagram_content_publish, instagram_manage_insights",
      },
      {
        platform: "TikTok",
        duration: "Sesuai kreator",
        delivery: "Upload Inbox Draft via Content Posting API (atau fallback manual)",
        scopes: "user.info.basic, video.upload",
      },
    ],
    practiceSection: {
      heading: "Peran dan teknologi",
      leftHeading: "Peran",
      leftBody:
        "Berperan sebagai Associate Partner Technology IAI, administrator sistem, dan full-stack developer. Fokus harian mencakup pengembangan web, keandalan infrastruktur, dan perangkat otomasi media.",
      rightHeading: "Perangkat utama",
      rightBody:
        "Kode produksi dijaga ringkas, bertipe ketat, dan berjalan lokal saat privasi menjadi prioritas. Sebagian besar proyek memakai TypeScript, React, Node.js, SQLite, dan Cloudflare.",
      stackLabel: "Stack",
      stackList: "TypeScript, Next.js, React, Node.js, SQLite, Prisma, FFmpeg, Cloudflare",
      githubCta: "Lihat repositori di GitHub",
    },
    productPage: {
      backLabel: "Kembali ke beranda",
      heading: "Hubz Publisher",
      subtitle:
        "Studio publikasi lokal self-hosted yang dioperasikan Wahabdin Sangadji untuk menjadwalkan video pendek orisinal ke YouTube, Facebook, Instagram, dan TikTok.",
      workflowHeading: "Alur publikasi",
      workflowSteps: [
        {
          step: "01",
          title: "Impor kit lokal",
          detail:
            "Memindai MP4 hasil render, subtitle, sampul 9:16, dan metadata.md ke penyimpanan lokal dengan deduplikasi SHA-256.",
        },
        {
          step: "02",
          title: "Susun metadata per platform",
          detail:
            "Mengatur judul, deskripsi, tag, dan komentar pertama opsional secara terpisah untuk YouTube, Facebook, Instagram, dan TikTok dalam jadwal WIB.",
        },
        {
          step: "03",
          title: "Upload API terotorisasi",
          detail:
            "Worker latar belakang menjalankan upload resumable menggunakan token OAuth milik pengguna yang terenkripsi AES-256-GCM.",
        },
        {
          step: "04",
          title: "Sinkronisasi status dan metrik",
          detail:
            "Menyelaraskan status terbit dan menarik angka tayangan, suka, komentar, jangkauan, serta simpan langsung dari API resmi.",
        },
      ],
      apiHeading: "Integrasi platform dan scope OAuth",
      apiIntro:
        "Hubz Publisher hanya meminta izin OAuth resmi yang diperlukan untuk kanal yang diaktifkan pengguna.",
      securityHeading: "Arsitektur keamanan lokal",
      securityPoints: [
        "Dasbor hanya berjalan di 127.0.0.1 di balik sesi cookie HttpOnly berpassword.",
        "Token akses dan refresh OAuth dienkripsi AES-256-GCM di SQLite lokal.",
        "Mode Full HD Instagram opsional hanya membuka URL media bertanda tangan HMAC dengan masa berlaku terbatas pada port terisolasi.",
        "Tidak ada video, caption, atau token OAuth yang dikirim ke server pihak ketiga di luar API resmi YouTube, Meta, dan TikTok.",
      ],
      legalHeading: "Ketentuan dan privasi",
      legalIntro:
        "Tinjau dokumen hukum resmi atau hubungi Wahabdin Sangadji langsung untuk keperluan verifikasi API.",
    },
    footer: {
      operatorNote: "Dioperasikan oleh Wahabdin Sangadji di wahabdinn.my.id",
      termsLabel: "Ketentuan Layanan",
      privacyLabel: "Kebijakan Privasi",
      githubLabel: "GitHub",
      backToTop: "Atas",
    },
  },
};
