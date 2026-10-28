import { useState } from 'react'

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

type Service = {
  no: string
  title: string
  titleEn: string
  text: string
  textEn: string
  image: string
  scope: string
  situations: string[]
  situationsEn: string[]
  deliverables: string[]
  deliverablesEn: string[]
}

const services: Service[] = [
  {
    no: '01',
    title: 'Website & Sistem Internal',
    titleEn: 'Websites & Internal Systems',
    text: 'Website, dashboard, dan sistem operasional yang terintegrasi dengan kebutuhan bisnis.',
    textEn: 'Websites, dashboards, and operational systems integrated around your business needs.',
    image:
      'https://images.unsplash.com/photo-1547658719-da2b51169166?fit=crop&w=900&q=85',
    scope: 'WEB DEVELOPMENT · INTERNAL SYSTEMS · INTEGRATION',
    situations: ['Proses kerja masih tersebar di banyak tools', 'Data operasional sulit dipantau dalam satu tempat', 'Tim membutuhkan sistem yang sesuai alur kerja nyata'],
    situationsEn: ['Workflows are scattered across too many tools', 'Operational data is difficult to monitor in one place', 'Your team needs a system built around its real workflow'],
    deliverables: ['Website atau portal yang responsif', 'Dashboard dan sistem internal terintegrasi', 'Alur kerja, akses pengguna, dan integrasi data'],
    deliverablesEn: ['A responsive website or portal', 'Integrated dashboards and internal systems', 'Workflows, user access, and data integrations'],
  },
  {
    no: '02',
    title: 'Mobile Development',
    titleEn: 'Mobile Development',
    text: 'Aplikasi mobile yang cepat, stabil, dan menyenangkan untuk digunakan.',
    textEn: 'Fast, stable, and enjoyable mobile applications built for everyday use.',
    image:
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?fit=crop&w=900&q=85',
    scope: 'MOBILE APPS · PRODUCT DESIGN · DEVELOPMENT',
    situations: ['Pelanggan membutuhkan akses layanan dari perangkat mobile', 'Proses manual ingin dipindahkan ke aplikasi yang praktis', 'Produk digital harus tetap cepat dan mudah digunakan'],
    situationsEn: ['Customers need access to your service on mobile', 'Manual processes need to become a practical application', 'The digital product must stay fast and easy to use'],
    deliverables: ['Riset alur dan kebutuhan pengguna', 'Aplikasi mobile yang stabil dan responsif', 'Rilis, pengujian, dan dukungan pengembangan'],
    deliverablesEn: ['User research and journey mapping', 'A stable and responsive mobile application', 'Release, testing, and development support'],
  },
  {
    no: '03',
    title: 'Branding & UI/UX',
    titleEn: 'Branding & UI/UX',
    text: 'Identitas dan pengalaman digital yang konsisten, intuitif, dan mudah diingat.',
    textEn: 'Consistent, intuitive, and memorable digital identities and experiences.',
    image:
      'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?fit=crop&w=900&q=85',
    scope: 'BRAND STRATEGY · UI/UX · DESIGN SYSTEM',
    situations: ['Identitas brand belum konsisten di setiap kanal', 'Produk terasa rumit atau tidak intuitif bagi pengguna', 'Tim membutuhkan fondasi desain yang mudah dikembangkan'],
    situationsEn: ['Your brand identity is inconsistent across channels', 'The product feels complicated or unintuitive to users', 'Your team needs a scalable design foundation'],
    deliverables: ['Strategi visual dan identitas brand', 'Wireframe, prototype, dan user flow', 'UI kit dan design system yang konsisten'],
    deliverablesEn: ['Visual strategy and brand identity', 'Wireframes, prototypes, and user flows', 'A consistent UI kit and design system'],
  },
]

const additionalServices: Service[] = [
  {
    no: '04',
    title: 'Dashboard & Data',
    titleEn: 'Dashboards & Data',
    text: 'Business analysis, pemetaan kebutuhan, visualisasi data, dan dashboard interaktif untuk membantu keputusan bisnis yang lebih cepat dan terukur.',
    textEn: 'Business analysis, requirements mapping, data visualization, and interactive dashboards for faster, measurable decisions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=1200&q=85',
    scope: 'BUSINESS ANALYSIS · DATA VISUALIZATION · REPORTING',
    situations: ['Laporan bulanan masih disusun manual dari banyak sumber', 'Data sensor atau mesin belum pernah dilihat sebagai tren', 'Manajemen ingin memantau beberapa cabang atau proyek sekaligus', 'Tim pemasaran perlu melihat hasil iklan sampai ke konversi'],
    situationsEn: ['Monthly reports are still assembled manually from many sources', 'Sensor or machine data has never been viewed as a trend', 'Management needs to monitor multiple branches or projects', 'Marketing teams need to connect campaign results to conversion'],
    deliverables: ['Pipeline pengumpulan data dari database, API, atau perangkat', 'Pembersihan dan penyeragaman data', 'Dasbor dengan Grafana atau antarmuka khusus sesuai kebutuhan', 'Peringatan otomatis saat angka melewati ambang tertentu', 'Akses peran: eksekutif, operasional, dan teknis melihat yang relevan'],
    deliverablesEn: ['Data pipelines from databases, APIs, or devices', 'Data cleaning and standardization', 'Grafana dashboards or a custom interface for your needs', 'Automatic alerts when metrics cross a threshold', 'Role-based access for executives, operators, and technical teams'],
  },
  {
    no: '05',
    title: 'Pemeliharaan & Dukungan',
    titleEn: 'Maintenance & Support',
    text: 'Monitoring berkala, pembaruan sistem, perbaikan masalah, dan dukungan teknis untuk menjaga aplikasi tetap aman, stabil, dan optimal.',
    textEn: 'Regular monitoring, system updates, issue resolution, and technical support to keep your applications secure, stable, and performing well.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?fit=crop&w=1200&q=85',
    scope: 'MONITORING · MAINTENANCE · TECHNICAL SUPPORT',
    situations: ['Aplikasi sudah berjalan tetapi tidak ada tim untuk merawatnya', 'Bug dan permintaan kecil menumpuk setelah peluncuran', 'Bisnis membutuhkan partner teknis untuk menjaga sistem tetap aman'],
    situationsEn: ['The application is live but there is no team to maintain it', 'Bugs and small requests are piling up after launch', 'Your business needs a technical partner to keep systems secure'],
    deliverables: ['Monitoring performa dan kesehatan sistem', 'Pembaruan, perbaikan bug, dan backup berkala', 'Dukungan teknis dengan prioritas dan laporan yang jelas'],
    deliverablesEn: ['Performance and system health monitoring', 'Updates, bug fixes, and regular backups', 'Technical support with clear priorities and reporting'],
  },
]

const allServices = [...services, ...additionalServices]

const projects = [
  {
    name: 'Personal Portfolio Showcase',
    type: 'NEXT.JS · TYPESCRIPT · SUPABASE',
    image: '/projects/personal-portfolio.png',
    text: 'Website portfolio personal dengan pengalaman digital modern, tipografi tegas, animasi halus, dan showcase proyek yang dinamis.',
    textEn: 'A personal portfolio website with a modern digital experience, expressive typography, subtle motion, and a dynamic project showcase.',
    link: 'https://portofolio-musyaffa-alif.vercel.app/',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Supabase'],
    features: ['Responsive portfolio experience', 'Interactive 3D hero', 'Dynamic project showcase', 'Content management'],
  },
  {
    name: 'CareDesk — Helpdesk Ticketing',
    type: 'REACT · TAILWIND CSS · RECHARTS',
    image: '/projects/caredesk.png',
    text: 'Sistem helpdesk dengan tiket real-time, live chat, SLA tracking, knowledge base, dan analytics lengkap.',
    textEn: 'A helpdesk system with real-time tickets, live chat, SLA tracking, a knowledge base, and complete analytics.',
    link: 'https://review-hall-88643949.figma.site',
    technologies: ['React JS', 'Tailwind CSS', 'React Router', 'Context API', 'Recharts'],
    features: ['Multi-role access', 'Automatic SLA tracking', 'Real-time live chat', 'Analytics dashboard'],
  },
  {
    name: 'QuikPassa — Event Platform',
    type: 'REACT · TYPESCRIPT · VITE',
    image: '/projects/quikpassa.png',
    text: 'Platform tiket event terintegrasi untuk penyelenggara, petugas gate, dan pembeli dengan validasi QR real-time.',
    textEn: 'An integrated event ticketing platform for organizers, gate staff, and buyers with real-time QR validation.',
    link: 'https://emboss-lead-08282754.figma.site',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'jsPDF', 'jsQR'],
    features: ['Multi-role authentication', 'Event management', 'Real-time QR scanner', 'Super Admin dashboard'],
  },
  {
    name: 'Fixed Asset Management — PERURI',
    type: 'LARAVEL · REACT · MYSQL',
    image: '/projects/peruri.png',
    text: 'Sistem pengelolaan siklus hidup aset dengan stock opname QR, penyusutan, pelaporan, dan akses berbasis peran.',
    textEn: 'An asset lifecycle management system with QR stocktaking, depreciation, reporting, and role-based access.',
    link: '#kontak',
    technologies: ['Laravel', 'PHP', 'React.js', 'TypeScript', 'MySQL', 'QR Code'],
    features: ['Asset management', 'QR stock opname', 'Depreciation calculation', 'Role-based access'],
  },
  {
    name: 'Jakarta ISPU Classification',
    type: 'DATA SCIENCE · MACHINE LEARNING',
    image: '/projects/eriel-jakarta-ispu.png',
    text: 'Analisis data kualitas udara harian Jakarta untuk mengklasifikasikan kategori ISPU dan memahami faktor yang memengaruhi kondisi udara.',
    textEn: 'An analysis of daily Jakarta air-quality data to classify air-quality categories and understand the factors affecting conditions.',
    link: 'https://eriel-portfolio.vercel.app/projects/jakarta-ispu-classification',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'SHAP'],
    features: ['Air quality classification', 'Data preprocessing', 'Model evaluation', 'Feature interpretation'],
  },
  {
    name: 'WTA Tennis Match Analytics',
    type: 'DATA & BI · POWER BI',
    image: '/projects/eriel-wta.png',
    text: 'Eksplorasi dua dekade pertandingan tenis profesional wanita untuk menemukan pola performa pemain dan menyajikannya dalam dashboard interaktif.',
    textEn: 'An exploration of two decades of professional women\'s tennis matches to uncover player performance patterns in an interactive dashboard.',
    link: 'https://eriel-portfolio.vercel.app/projects/wta-tennis-analysis',
    technologies: ['Python', 'Pandas', 'Power BI', 'Data Visualization'],
    features: ['Match performance analysis', 'Interactive dashboard', 'Data storytelling', 'Trend exploration'],
  },
  {
    name: 'Hajj & Umrah Pilgrim Satisfaction',
    type: 'DATA ANALYTICS · MACHINE LEARNING',
    image: '/projects/eriel-hajj.png',
    text: 'Analisis faktor-faktor yang berkaitan dengan kepuasan jemaah Haji dan Umrah melalui pendekatan analitik dan machine learning.',
    textEn: 'An analysis of the factors related to Hajj and Umrah pilgrim satisfaction using analytics and machine learning.',
    link: 'https://eriel-portfolio.vercel.app/projects/hajj-pilgrim-satisfaction',
    technologies: ['Python', 'Pandas', 'XGBoost', 'Power BI'],
    features: ['Satisfaction analysis', 'Predictive modeling', 'Feature importance', 'Insight reporting'],
  },
  {
    name: 'SALA-X Hiking Registration App',
    type: 'UI/UX · WEB / IT',
    image: '/projects/eriel-sala-x.png',
    text: 'Konsep aplikasi registrasi pendakian yang memungkinkan pendaki mendaftar jalur gunung secara online dengan alur yang lebih sederhana.',
    textEn: 'A hiking registration concept that lets climbers register for mountain routes online through a simpler flow.',
    link: 'https://eriel-portfolio.vercel.app/projects/sala-x',
    technologies: ['Figma', 'UI/UX Design', 'Prototyping', 'User Flow'],
    features: ['Online registration', 'User-centered flow', 'Responsive interface', 'Interactive prototype'],
  },
  {
    name: 'RFM Customer Segmentation',
    type: 'DATA & BI · CUSTOMER ANALYTICS',
    image: '/projects/eriel-rfm.png',
    text: 'Segmentasi pelanggan berdasarkan recency, frequency, dan monetary value untuk membantu bisnis memahami perbedaan aktivitas serta nilai pelanggan.',
    textEn: 'Customer segmentation based on recency, frequency, and monetary value to help businesses understand customer activity and value.',
    link: 'https://eriel-portfolio.vercel.app/projects/rfm-customer-segmentation',
    technologies: ['Python', 'Pandas', 'Power BI', 'RFM Analysis'],
    features: ['Customer segmentation', 'RFM scoring', 'Business insights', 'Interactive dashboard'],
  },
  {
    name: 'Zomato Delivery Prediction',
    type: 'MACHINE LEARNING · PREDICTION',
    image: '/projects/eriel-zomato.jpg',
    text: 'Model prediksi waktu pengiriman makanan berdasarkan jarak, rating kurir, dan berbagai detail pesanan lainnya.',
    textEn: 'A food delivery time prediction model based on distance, courier ratings, and other order details.',
    link: 'https://eriel-portfolio.vercel.app/projects/zomato-delivery-prediction',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Machine Learning'],
    features: ['Delivery time prediction', 'Data preprocessing', 'Model evaluation', 'Analytics dashboard'],
  },
  {
    name: 'Wedding Invitation Website',
    type: 'PRIVATE · WEB / IT',
    image: '/projects/eriel-wedding.svg',
    text: 'Website undangan pernikahan untuk membantu tamu melihat detail acara dan melakukan RSVP secara online.',
    textEn: 'A wedding invitation website that helps guests view event details and RSVP online.',
    link: 'https://eriel-portfolio.vercel.app/projects/wedding-invitation',
    technologies: ['Web Development', 'Responsive Design', 'RSVP Flow'],
    features: ['Event information', 'Online RSVP', 'Responsive experience', 'Private client project'],
  },
]

const team = [
  { name: 'Musyaffa Alif', role: 'Founder & Strategist', image: '/musyaffa-alif.jpg' },
  {
    name: 'Eriel Setiawan Dewantoro',
    role: 'Co-Founder & Head of Data Analytics',
    image: '/eriel-setiawan.jpg',
  },
]

const testimonials = [
  {
    quote:
      'Astralise bukan sekadar vendor. Mereka memahami visi kami, menantang asumsi kami, dan mengubahnya menjadi produk yang jauh lebih baik dari bayangan awal.',
    quoteEn:
      'Astralise is more than a vendor. They understood our vision, challenged our assumptions, and turned them into a product far better than our first idea.',
    initials: 'RS',
    name: 'Rama Santoso',
    role: 'Product Manager, CareDesk',
  },
  {
    quote:
      'Proses kerjanya terstruktur dan sangat transparan. Setiap keputusan desain maupun teknis selalu dijelaskan dengan bahasa yang mudah dipahami.',
    quoteEn:
      'The process was structured and highly transparent. Every design and technical decision was explained in language that was easy to understand.',
    initials: 'SW',
    name: 'Sarah Wijaya',
    role: 'Event Organizer, QuikPassa',
  },
  {
    quote:
      'Alur pengelolaan aset menjadi jauh lebih rapi dan mudah dipantau. Fitur QR dan pelaporan membantu pekerjaan operasional berjalan lebih efisien.',
    quoteEn:
      'Asset management became much more organized and easier to monitor. The QR and reporting features make our operations more efficient.',
    initials: 'AP',
    name: 'Aditya Pratama',
    role: 'IT Asset Officer, PERURI',
  },
  {
    quote:
      'Portofolio yang dikembangkan mampu menyampaikan pengalaman, kemampuan, dan karya secara jelas. Hasil akhirnya terasa modern, cepat, dan nyaman dijelajahi.',
    quoteEn:
      'The portfolio communicates experience, skills, and work clearly. The final result feels modern, fast, and comfortable to explore.',
    initials: 'DN',
    name: 'Dian Nugraha',
    role: 'Project Reviewer, Personal Portfolio',
  },
  {
    quote:
      'Analisis kualitas udara disusun dengan metodologi yang jelas. Hasil klasifikasinya mudah dipahami dan membantu melihat faktor penting di balik kondisi ISPU Jakarta.',
    quoteEn:
      'The air-quality analysis uses a clear methodology. Its classification results are easy to understand and reveal the key factors behind Jakarta\'s air quality.',
    initials: 'NA',
    name: 'Nabila Azzahra',
    role: 'Research Reviewer, Jakarta ISPU Classification',
  },
  {
    quote:
      'Dashboard tenis mampu mengubah data pertandingan yang kompleks menjadi insight performa pemain yang ringkas, visual, dan mudah dieksplorasi.',
    quoteEn:
      'The tennis dashboard turns complex match data into concise, visual player-performance insights that are easy to explore.',
    initials: 'MR',
    name: 'Michael Raymond',
    role: 'Analytics Reviewer, WTA Tennis Analytics',
  },
  {
    quote:
      'Pendekatan analitiknya membantu menjelaskan faktor kepuasan jemaah secara terukur. Insight yang dihasilkan relevan untuk evaluasi layanan.',
    quoteEn:
      'The analytical approach explains the factors behind pilgrim satisfaction in measurable terms. The resulting insights are relevant for service evaluation.',
    initials: 'HF',
    name: 'Hana Fauziah',
    role: 'Data Reviewer, Hajj & Umrah Analysis',
  },
  {
    quote:
      'Alur registrasi pendakian terasa sederhana dan intuitif. Prototipe SALA-X berhasil menyatukan kebutuhan pengguna dengan tampilan yang mudah dipahami.',
    quoteEn:
      'The hiking registration flow feels simple and intuitive. The SALA-X prototype brings user needs together in an interface that is easy to understand.',
    initials: 'RA',
    name: 'Raka Aditya',
    role: 'UX Reviewer, SALA-X',
  },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false)
  const [activeService, setActiveService] = useState<Service | null>(null)
  const [allWorksOpen, setAllWorksOpen] = useState(false)
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null)
  const [language, setLanguage] = useState<'id' | 'en'>('en')
  const isEnglish = language === 'en'
  const navItems = isEnglish
    ? [
        ['Services', 'layanan'],
        ['About', 'tentang'],
        ['Portfolio', 'portofolio'],
        ['Team', 'tim'],
        ['Testimonials', 'testimoni'],
      ]
    : [
        ['Layanan', 'layanan'],
        ['Tentang', 'tentang'],
        ['Portofolio', 'portofolio'],
        ['Tim', 'tim'],
        ['Testimoni', 'testimoni'],
      ]
  const orderedProjects = [
    projects[2],
    projects[3],
    projects[8],
    projects[4],
    projects[0],
    projects[1],
    projects[5],
    projects[6],
    projects[7],
    projects[9],
    projects[10],
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Astralise Digital Solution">
          <img src="/astralise-logo.png" alt="" />
          <span>
            <b>Astralise</b>
            <small>Digital Solution</small>
          </span>
        </a>
        <button
          className="menu-button"
          aria-label={isEnglish ? 'Open menu' : 'Buka menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map(([label, target]) => (
            <a key={target} href={`#${target}`} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <div className="language-switch" aria-label={isEnglish ? 'Language selection' : 'Pilihan bahasa'}>
            <button
              className={language === 'id' ? 'active' : ''}
              onClick={() => setLanguage('id')}
              aria-pressed={language === 'id'}
            >
              ID
            </button>
            <span />
            <button
              className={language === 'en' ? 'active' : ''}
              onClick={() => setLanguage('en')}
              aria-pressed={language === 'en'}
            >
              EN
            </button>
          </div>
          <a className="nav-cta" href="#kontak" onClick={closeMenu}>
            {isEnglish ? 'Start a project' : 'Mulai proyek'} <Arrow />
          </a>
        </div>
      </nav>

      <header className="hero" id="home">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-content">
          <p className="eyebrow">
            <span /> {isEnglish ? 'LIMITLESS DIGITAL SOLUTIONS' : 'SOLUSI DIGITAL TANPA BATAS'} <i>✦</i> JAKARTA
          </p>
          <h1>
            {isEnglish ? 'Great ideas, brought to life' : 'Ide hebat, kami wujudkan'}
            <br /> {isEnglish ? 'as ' : 'menjadi '}<em>{isEnglish ? 'digital solutions.' : 'solusi digital.'}</em>
          </h1>
          <p className="hero-copy">
            {isEnglish
              ? 'Astralise provides end-to-end web, mobile, and internal system development—from planning to daily operations.'
              : 'Astralise menyediakan layanan pengembangan aplikasi web, mobile, dan sistem internal secara end-to-end—mulai dari tahap perencanaan hingga operasional harian.'}
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#kontak">
              {isEnglish ? 'Discuss your project' : 'Diskusikan proyek'} <Arrow />
            </a>
            <a className="text-link" href="#portofolio">
              {isEnglish ? 'Explore our work' : 'Lihat karya kami'} <span>↓</span>
            </a>
          </div>
        </div>
        <div className="hero-card card-one">
          <span>PROJECTS DELIVERED</span><b>10+</b>
        </div>
        <div className="hero-card card-two">
          <span>CLIENT SATISFACTION</span><b>98%</b>
        </div>
      </header>

      <section className="section services" id="layanan">
        <div className="section-head">
          <div>
            <p className="kicker">{isEnglish ? 'OUR SERVICES' : 'LAYANAN KAMI'}</p>
            <h2>{isEnglish ? <>End-to-end <em>solutions</em><br />from one team.</> : <>Solusi <em>end-to-end</em><br />dalam satu tim.</>}</h2>
          </div>
          <div className="services-menu-wrap">
            <button
              className="all-services-link"
              onClick={() => setServiceMenuOpen(true)}
            >
              {isEnglish ? 'All services' : 'Semua layanan'}
            </button>
          </div>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article
              className="service-card"
              key={service.no}
              role="button"
              tabIndex={0}
              onClick={() => setActiveService(service)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') setActiveService(service)
              }}
            >
              <div className="service-image">
                <img src={service.image} alt="" />
                <span className="service-no">{service.no}</span>
              </div>
              <div className="service-content">
                <h3>{isEnglish ? service.titleEn : service.title}</h3>
                <p>{isEnglish ? service.textEn : service.text}</p>
                <span className="service-learn-more" aria-hidden="true"><Arrow /></span>
              </div>
            </article>
          ))}
        </div>
        <div className="secondary-services" id="semua-layanan">
          {additionalServices.map((service) => (
            <button key={service.no} onClick={() => setActiveService(service)}>
              <span>{service.no}</span>
              <strong>{isEnglish ? service.titleEn : service.title}</strong>
              <Arrow />
            </button>
          ))}
        </div>
      </section>

      {serviceMenuOpen && (
        <section className="full-page services-full-page">
          <div className="full-page-bar">
            <button onClick={() => setServiceMenuOpen(false)}>← {isEnglish ? 'Back' : 'Kembali'}</button>
            <span>ASTRALISE · {isEnglish ? 'SERVICES' : 'LAYANAN'}</span>
            <button className="detail-close" onClick={() => setServiceMenuOpen(false)} aria-label={isEnglish ? 'Close' : 'Tutup'}>×</button>
          </div>
          <div className="full-page-content">
            <div className="full-page-heading">
              <p className="kicker">{isEnglish ? 'ALL SERVICES' : 'SEMUA LAYANAN'}</p>
              <h1>{isEnglish ? <>Complete digital solutions,<br /><em>from one team.</em></> : <>Solusi digital lengkap,<br /><em>dalam satu tim.</em></>}</h1>
              <p>{isEnglish ? 'From planning to maintenance, we support every stage of your digital product journey.' : 'Dari perencanaan hingga pemeliharaan, kami membantu setiap tahap perjalanan produk digital Anda.'}</p>
            </div>
            <div className="services-full-grid">
              {allServices.map((service) => (
                <article
                  key={service.no}
                  role="button"
                  tabIndex={0}
                  onClick={() => { setServiceMenuOpen(false); setActiveService(service) }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') { setServiceMenuOpen(false); setActiveService(service) }
                  }}
                >
                  <span>{service.no}</span>
                  <img src={service.image} alt="" />
                  <h2>{isEnglish ? service.titleEn : service.title}</h2>
                  <p>{isEnglish ? service.textEn : service.text}</p>
                  <small>{service.scope}</small>
                  <span className="service-detail-link">{isEnglish ? 'View service detail' : 'Lihat detail layanan'} <Arrow /></span>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeService && (
        <section className="full-page service-detail-page" role="dialog" aria-modal="true" aria-labelledby="service-detail-title">
          <div className="full-page-bar">
            <button onClick={() => setActiveService(null)}>← {isEnglish ? 'Back to services' : 'Kembali ke layanan'}</button>
            <span>ASTRALISE · {isEnglish ? 'SERVICE DETAIL' : 'DETAIL LAYANAN'}</span>
            <button className="detail-close" onClick={() => setActiveService(null)} aria-label={isEnglish ? 'Close' : 'Tutup'}>×</button>
          </div>
          <div className="service-detail-content">
            <div className="service-detail-breadcrumb">
              <span>{isEnglish ? 'Home' : 'Beranda'}</span><b>/</b><span>{isEnglish ? 'Services' : 'Layanan'}</span><b>/</b><strong>{isEnglish ? activeService.titleEn : activeService.title}</strong>
            </div>
            <div className="service-detail-hero">
              <div className="service-detail-intro">
                <p className="kicker">{isEnglish ? 'WHAT WE SOLVE' : 'YANG KAMI BANTU'}</p>
                <h1 id="service-detail-title">{isEnglish ? activeService.titleEn : activeService.title}</h1>
                <p>{isEnglish ? activeService.textEn : activeService.text}</p>
                <div className="service-detail-actions">
                  <a className="button primary" href="#kontak" onClick={() => setActiveService(null)}>{isEnglish ? 'Discuss your needs' : 'Konsultasikan kebutuhan'} <Arrow /></a>
                  <span>{activeService.scope}</span>
                </div>
              </div>
              <div className="service-detail-image"><img src={activeService.image} alt="" /></div>
            </div>
            <div className="service-detail-columns">
              <div>
                <p className="kicker">{isEnglish ? 'A GOOD FIT WHEN' : 'COCOK UNTUK'}</p>
                <h2>{isEnglish ? 'Situations we often see' : 'Situasi yang biasanya kami temui'}</h2>
                <ul className="service-situation-list">
                  {(isEnglish ? activeService.situationsEn : activeService.situations).map((item) => <li key={item}><span>✦</span>{item}</li>)}
                </ul>
              </div>
              <div>
                <p className="kicker">{isEnglish ? 'WHAT YOU GET' : 'YANG ANDA TERIMA'}</p>
                <h2>{isEnglish ? 'The work includes' : 'Isi pekerjaannya'}</h2>
                <ol className="service-deliverables-list">
                  {(isEnglish ? activeService.deliverablesEn : activeService.deliverables).map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}
                </ol>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="about" id="tentang">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1587038787166-becd08a156f7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200"
            alt={isEnglish ? 'Creative team discussing product planning' : 'Tim kreatif berdiskusi dalam sesi perencanaan produk'}
          />
          <div className="about-image-label"><span>✦</span> BUILDING WITH PURPOSE</div>
          <div className="about-badge"><b>✦</b><span>END-TO-END DIGITAL PARTNER</span></div>
        </div>
        <div className="about-copy">
          <p className="kicker">{isEnglish ? 'ABOUT ASTRALISE' : 'TENTANG ASTRALISE'}</p>
          <h2>{isEnglish ? <>We believe the best technology feels <em>human.</em></> : <>Kami percaya teknologi terbaik terasa <em>manusiawi.</em></>}</h2>
          <p>{isEnglish ? 'Astralise helps businesses grow through digital products that are thoughtful, beautiful, and easy to use.' : 'Astralise membantu bisnis tumbuh lewat pengembangan produk digital yang terencana, estetis, dan mudah digunakan.'}</p>
          <div className="about-pillars">
            <span>{isEnglish ? 'Strategy' : 'Strategi'}</span><i />
            <span>{isEnglish ? 'Design' : 'Desain'}</span><i />
            <span>{isEnglish ? 'Technology' : 'Teknologi'}</span>
          </div>
          <div className="stats">
            <div><b>10+</b><span>{isEnglish ? 'DIGITAL PROJECTS' : 'PROYEK DIGITAL'}</span></div>
            <div><b>2</b><span>{isEnglish ? 'CORE TALENTS' : 'TALENTA INTI'}</span></div>
            <div><b>5</b><span>{isEnglish ? 'CORE SERVICES' : 'LAYANAN UTAMA'}</span></div>
          </div>
          <a className="text-link dark" href="#tim">{isEnglish ? 'Meet the team' : 'Kenal lebih dekat'} <Arrow /></a>
        </div>
      </section>

      <section className="section portfolio" id="portofolio">
        <div className="section-head portfolio-head">
          <div><p className="kicker">{isEnglish ? 'SELECTED WORK' : 'KARYA PILIHAN'}</p><h2>{isEnglish ? 'Work we are proud of.' : 'Solusi yang kami banggakan.'}</h2></div>
          <button className="all-works-link" onClick={() => setAllWorksOpen(true)}>
            {isEnglish ? 'View all work' : 'Lihat semua karya'}
          </button>
        </div>
        <div className="project-grid">
          {orderedProjects.slice(0, 4).map((project, index) => (
            <article className="project" key={project.name}>
              <button className="project-visual" onClick={() => setActiveProject(project)}>
                <img src={project.image} alt={`${isEnglish ? 'Project preview' : 'Tampilan proyek'} ${project.name}`} />
                <span className="project-index">0{index + 1}</span>
              </button>
              <div className="project-meta">
                <p>{project.type}</p>
                <h3>{project.name}</h3>
                <div className="project-description">{isEnglish ? project.textEn : project.text}</div>
                <button onClick={() => setActiveProject(project)}>{isEnglish ? 'View details' : 'Lihat detail'} <Arrow /></button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {allWorksOpen && (
        <section className="full-page portfolio-full-page">
          <div className="full-page-bar">
            <button onClick={() => setAllWorksOpen(false)}>← {isEnglish ? 'Back' : 'Kembali'}</button>
            <span>ASTRALISE · PORTFOLIO</span>
            <button className="detail-close" onClick={() => setAllWorksOpen(false)} aria-label={isEnglish ? 'Close' : 'Tutup'}>×</button>
          </div>
          <div className="full-page-content">
            <div className="full-page-heading">
              <p className="kicker">FULL PORTFOLIO</p>
              <h1>Real solutions for<br /><em>real challenges.</em></h1>
              <p>A collection of digital products, internal systems, and data projects we have delivered.</p>
            </div>
            <div className="works-list">
              {orderedProjects.map((project, index) => (
                <button key={project.name} onClick={() => { setAllWorksOpen(false); setActiveProject(project) }}>
                  <span>0{index + 1}</span>
                  <img src={project.image} alt="" />
                  <div><small>{project.type}</small><strong>{project.name}</strong></div>
                  <Arrow />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeProject && (
        <div className="project-detail" role="dialog" aria-modal="true" aria-labelledby="project-detail-title">
          <div className="project-detail-bar">
            <button onClick={() => setActiveProject(null)}>← {isEnglish ? 'Back' : 'Kembali'}</button>
            <span>ASTRALISE · PROJECT DETAIL</span>
            <button className="detail-close" onClick={() => setActiveProject(null)} aria-label={isEnglish ? 'Close' : 'Tutup'}>×</button>
          </div>
          <div className="project-detail-content">
            <div className="project-detail-copy">
              <p className="kicker">PROJECT OVERVIEW</p>
              <h2 id="project-detail-title">{activeProject.name}</h2>
              <p>{isEnglish ? activeProject.textEn : activeProject.text}</p>
              <div className="detail-numbers">
                <div><b>{activeProject.technologies.length}</b><span>TECHNOLOGIES</span></div>
                <div><b>{activeProject.features.length}</b><span>KEY FEATURES</span></div>
              </div>
              <div className="tech-list">
                <small>TECHNOLOGIES USED</small>
                <div>{activeProject.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
              </div>
              {activeProject.link.startsWith('http') && (
                <a className="button primary" href={activeProject.link} target="_blank" rel="noreferrer">Live demo <Arrow /></a>
              )}
            </div>
            <div className="project-detail-visual">
              <div className="detail-image"><img src={activeProject.image} alt={`${isEnglish ? 'Preview of' : 'Tampilan'} ${activeProject.name}`} /></div>
              <div className="feature-card">
                <h3>✦ Key Features</h3>
                <ul>{activeProject.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="section team" id="tim">
        <div className="section-head">
          <div><p className="kicker">{isEnglish ? 'OUR TEAM' : 'TIM KAMI'}</p><h2>{isEnglish ? <>The people behind <em>every solution.</em></> : <>Sosok di balik <em>setiap solusi.</em></>}</h2></div>
        </div>
        <div className="team-grid">
          {team.map((person) => (
            <article className="person" key={person.name}>
              <div className="portrait"><img src={person.image} alt={`${isEnglish ? 'Portrait of' : 'Foto'} ${person.name}`} /></div>
              <h3>{person.name}</h3><p>{person.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="why-us">
        <div className="why-intro">
          <p className="kicker">{isEnglish ? 'WHY ASTRALISE' : 'MENGAPA ASTRALISE'}</p>
          <h2>{isEnglish ? 'Supporting every step, from the first idea to life after launch.' : 'Mendampingi setiap langkah, dari ide awal hingga pascapeluncuran.'}</h2>
          <a href="#tentang">{isEnglish ? 'About us' : 'Tentang kami'} <Arrow /></a>
        </div>
        <div className="why-grid">
          <article>
            <h3>{isEnglish ? 'From the problem to daily operations' : 'Terlibat dari masalah hingga operasional'}</h3>
            <p>{isEnglish ? 'We do not stop at handover. We continue caring for your system through security, bug fixes, and new features.' : 'Kami tidak berhenti di serah terima. Sistem yang sudah berjalan tetap kami rawat, dari keamanan, perbaikan bug, hingga fitur baru.'}</p>
          </article>
          <article>
            <h3>{isEnglish ? 'Experience with critical systems' : 'Berpengalaman di sistem yang kritis'}</h3>
            <p>{isEnglish ? 'We understand operational systems that demand stability, data accuracy, security, and fast response times.' : 'Kami memahami kebutuhan sistem operasional yang menuntut stabilitas, akurasi data, keamanan, dan respons yang cepat.'}</p>
          </article>
          <article>
            <h3>{isEnglish ? 'Products people actually use' : 'Membangun produk yang benar-benar dipakai'}</h3>
            <p>{isEnglish ? 'Every solution starts from real user needs so it is easy to operate and relevant to everyday work.' : 'Setiap solusi dirancang berdasarkan kebutuhan pengguna nyata agar mudah dioperasikan dan relevan untuk aktivitas sehari-hari.'}</p>
          </article>
        </div>
      </section>

      <section className="testimonial" id="testimoni">
        <div className="testimonial-head">
          <p className="kicker">{isEnglish ? 'WHAT THEY SAY' : 'APA KATA MEREKA'}</p>
          <h2>{isEnglish ? <>Trust built on <em>real results.</em></> : <>Kepercayaan yang tumbuh dari <em>hasil nyata.</em></>}</h2>
        </div>
        <div className="testimonial-marquee">
          <div className="testimonial-track">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <article key={`${testimonial.name}-${index}`} aria-hidden={index >= testimonials.length}>
                <div className="testimonial-top"><span>“</span></div>
                <blockquote>{isEnglish ? testimonial.quoteEn : testimonial.quote}</blockquote>
                <div className="quote-author">
                  <span>{testimonial.initials}</span>
                  <div><b>{testimonial.name}</b><small>{testimonial.role}</small></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" id="kontak">
        <div className="cta-orbit" />
        <span className="cta-sparkle sparkle-one">✦</span>
        <span className="cta-sparkle sparkle-two">✦</span>
        <span className="cta-sparkle sparkle-three">✦</span>
        <p className="kicker">{isEnglish ? 'LET’S COLLABORATE' : 'MARI BERKOLABORASI'}</p>
        <h2>{isEnglish ? <>Have an idea to<br />bring to life <em>together?</em></> : <>Punya ide untuk<br />diwujudkan <em>bersama?</em></>}</h2>
        <p>{isEnglish ? 'Tell us about your challenge. Let\'s find the right digital solution.' : 'Ceritakan tantangan Anda. Mari kita temukan solusi digital terbaik.'}</p>
        <div className="cta-actions">
          <a className="button light" href="mailto:astralise0@gmail.com">astralise0@gmail.com <Arrow /></a>
          <a className="button whatsapp" href="https://wa.me/6287779018470" target="_blank" rel="noreferrer">
            Chat WhatsApp <Arrow />
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <a className="brand" href="#home"><img src="/astralise-logo.png" alt="" /><span><b>Astralise</b><small>Digital Solution</small></span></a>
            <p>{isEnglish ? <>Designing digital solutions that<br />move businesses forward.</> : <>Merancang solusi digital yang<br />menggerakkan bisnis ke depan.</>}</p>
          </div>
          <div><b>{isEnglish ? 'NAVIGATION' : 'NAVIGASI'}</b><a href="#layanan">{isEnglish ? 'Services' : 'Layanan'}</a><a href="#tentang">{isEnglish ? 'About' : 'Tentang'}</a><a href="#portofolio">{isEnglish ? 'Portfolio' : 'Portofolio'}</a><a href="#tim">{isEnglish ? 'Team' : 'Tim'}</a><a href="#testimoni">{isEnglish ? 'Testimonials' : 'Testimoni'}</a></div>
          <div><b>{isEnglish ? 'SOCIAL' : 'SOSIAL'}</b><a href="https://instagram.com/astralise.id" target="_blank" rel="noreferrer">Instagram · @astralise.id</a></div>
          <div><b>{isEnglish ? 'CONTACT' : 'KONTAK'}</b><a href="mailto:astralise0@gmail.com">astralise0@gmail.com</a><a href="https://wa.me/6287779018470" target="_blank" rel="noreferrer">+62 877-7901-8470 · WhatsApp</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Astralise Digital Solution</span><span>Jakarta, Indonesia</span></div>
      </footer>
    </main>
  )
}
