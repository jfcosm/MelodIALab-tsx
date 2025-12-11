
export type Language = 'es' | 'en' | 'fr' | 'ga' | 'it' | 'de' | 'ja' | 'zh' | 'ko' | 'hi' | 'gu' | 'ar';

export const LANGUAGES: { code: Language; name: string; flag: string }[] = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ga', name: 'Gaeilge', flag: '🇮🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
];

export const translations = {
  es: {
    nav: {
      services: "Servicios",
      projects: "Proyectos",
      philosophy: "Filosofía",
      contact: "Contacto",
      start: "Iniciar Proyecto"
    },
    hero: {
      badge: "Desarrollo Web & IA",
      title_start: "Componiendo Software",
      title_end: "Inteligente",
      subtitle: "Donde la agilidad encuentra su ritmo. Creamos experiencias digitales afinadas con Inteligencia Artificial.",
      cta_primary: "Agendar Consultoría",
      cta_secondary: "Ver Servicios",
      dashboard_caption: "*Así gestionamos tu proyecto: claridad total, cero ruido."
    },
    dashboard: {
      title: "Proyecto Beta",
      updated: "Actualizado hace 2 min",
      status: "En Curso",
      sprints: "Sprints",
      budget: "Presupuesto",
      progress: "Progreso Sprint",
      no_deviation: "Sin desviaciones",
      activity: "Actividad Reciente",
      model_opt: "Modelo IA Optimizado",
      latency: "Reducción de latencia en 20%",
      deploy: "Frontend Deploy",
      live: "v2.4.0 Live"
    },
    services: {
      title: "Nuestra Suite de Servicios",
      subtitle: "Soluciones modulares diseñadas para escalar con tu negocio.",
      web: {
        title: "Desarrollo Web & Apps",
        desc: "Creamos experiencias digitales nativas y progresivas. Desde landing pages de alto impacto hasta aplicaciones móviles complejas, utilizamos React, Node.js y las últimas tecnologías."
      },
      ai: {
        title: "Soluciones IA",
        desc: "Integramos modelos de lenguaje y automatización inteligente para optimizar tus procesos de negocio. No es magia, es ingeniería."
      },
      agile: {
        title: "Consultoría Ágil",
        desc: "Auditoría tecnológica y optimización de flujos de trabajo con metodologías Scrum adaptadas a equipos pequeños."
      },
      ui: {
        title: "Diseño UI/UX",
        desc: "Interfaces que no solo se ven bien, sino que funcionan. Nos centramos en la usabilidad y la accesibilidad para convertir visitantes en clientes."
      }
    },
    portfolio: {
      badge: "Desarrollos Actuales",
      title: "Donde las ideas cobran vida",
      subtitle: "No solo hablamos de código, lo demostramos. Conoce algunos de los productos que estamos construyendo.",
      armonix: {
        desc: "Una suite musical interactiva para compositores y estudiantes. Armonix combina visualización de teoría musical en tiempo real con herramientas como un Groovebox y un afinador de alta precisión.",
        cta: "Probar Armonix"
      },
      palabra: {
        desc: "Plataforma dedicada a la lectura y reflexión. Diseñada con un enfoque en la accesibilidad y la tipografía, ofrece lecturas católicas diarias y biografías de santos en una interfaz limpia.",
        cta: "Visitar Web"
      },
      emaus: {
        desc: "Plataforma SaaS diseñada para la digitalización y administración moderna de comunidades católicas. Unifica gestión sacramental, agenda y finanzas. Incluye archivo digital y generación automática de certificados con firma.",
        cta: "Visitar Emaús"
      },
      verso: {
        desc: "Coordina tu banda y domina tus ensayos. Transforma el caos logístico en una experiencia fluida. Incluye votaciones en tiempo real, repertorios inteligentes y un 'Compositor IA' impulsado por modelos de lenguaje.",
        cta: "Próximamente"
      }
    },
    philosophy: {
      badge: "Filosofía del Estudio",
      title_start: "No solo programamos,",
      title_end: "componemos.",
      desc: "En MelodIA La♭, creemos que el desarrollo de software debe tener ritmo. Eliminamos el ruido innecesario para centrarnos en lo que realmente importa: tu producto.",
      points: [
        { title: "Certeza (Afinación)", desc: "Presupuestos claros desde el inicio. Sin sorpresas ni costos ocultos." },
        { title: "Agilidad (Ritmo)", desc: "Sprints cortos y entregables tangibles. Ves el progreso semana a semana." },
        { title: "Inteligencia (Armonía)", desc: "La IA es nuestro copiloto, permitiéndonos desarrollar más rápido y mejor." }
      ],
      terminal: {
        start: "melodia-lab start-project",
        init: "Initializing environment...",
        loading: "Loading AI modules...",
        budget: "Optimizing budget...",
        agility: "Generating agility...",
        done: "Done"
      }
    },
    contact: {
      title: "¿Quién dijo yo?",
      subtitle: "Cuéntanos tu idea. Te respondemos con un plan concreto y un presupuesto transparente.",
      name: "Nombre",
      name_ph: "Tu nombre",
      email: "Email",
      email_ph: "hola@ejemplo.com",
      message: "Mensaje",
      message_ph: "Descríbenos brevemente tu proyecto...",
      submit: "Enviar Mensaje"
    },
    footer: {
      rights: "Todos los derechos reservados."
    }
  },
  en: {
    nav: {
      services: "Services",
      projects: "Projects",
      philosophy: "Philosophy",
      contact: "Contact",
      start: "Start Project"
    },
    hero: {
      badge: "Web Development & AI",
      title_start: "Composing Intelligent",
      title_end: "Software",
      subtitle: "Where agility meets rhythm. We create digital experiences tuned with Artificial Intelligence.",
      cta_primary: "Schedule Consulting",
      cta_secondary: "View Services",
      dashboard_caption: "*How we manage your project: total clarity, zero noise."
    },
    dashboard: {
      title: "Project Beta",
      updated: "Updated 2 min ago",
      status: "In Progress",
      sprints: "Sprints",
      budget: "Budget",
      progress: "Sprint Progress",
      no_deviation: "On track",
      activity: "Recent Activity",
      model_opt: "AI Model Optimized",
      latency: "Latency reduced by 20%",
      deploy: "Frontend Deploy",
      live: "v2.4.0 Live"
    },
    services: {
      title: "Our Service Suite",
      subtitle: "Modular solutions designed to scale with your business.",
      web: {
        title: "Web & App Development",
        desc: "We create native and progressive digital experiences. From high-impact landing pages to complex mobile apps using React, Node.js, and the latest tech."
      },
      ai: {
        title: "AI Solutions",
        desc: "We integrate language models and intelligent automation to optimize your business processes. It's not magic, it's engineering."
      },
      agile: {
        title: "Agile Consulting",
        desc: "Tech audit and workflow optimization with Scrum methodologies adapted for small teams."
      },
      ui: {
        title: "UI/UX Design",
        desc: "Interfaces that don't just look good, but work. We focus on usability and accessibility to turn visitors into loyal customers."
      }
    },
    portfolio: {
      badge: "Current Developments",
      title: "Where ideas come to life",
      subtitle: "We don't just talk code, we prove it. Meet some of the products we are building.",
      armonix: {
        desc: "An interactive musical suite for composers and students. Armonix combines real-time music theory visualization with tools like a Groovebox and a high-precision tuner.",
        cta: "Try Armonix"
      },
      palabra: {
        desc: "Platform dedicated to reading and reflection. Designed with a focus on accessibility and typography, offering daily Catholic readings and saint biographies in a clean interface.",
        cta: "Visit Web"
      },
      emaus: {
        desc: "SaaS platform for integral parish management. Unifies sacraments, agenda, and finances in a secure cloud. Includes automated certificate generation with digital signatures.",
        cta: "Visit Emaús"
      },
      verso: {
        desc: "Coordinate your band and master your rehearsals. Real-time collaborative app with smart setlists, democratic voting, and a 'AI Composer' powered by Gemini to create new music.",
        cta: "Coming Soon"
      }
    },
    philosophy: {
      badge: "Studio Philosophy",
      title_start: "We don't just code,",
      title_end: "we compose.",
      desc: "At MelodIA La♭, we believe software development must have rhythm. We eliminate unnecessary noise to focus on what really matters: your product.",
      points: [
        { title: "Certainty (Tuning)", desc: "Clear budgets from the start. No surprises or hidden costs." },
        { title: "Agility (Rhythm)", desc: "Short sprints and tangible deliverables. You see progress week by week." },
        { title: "Intelligence (Harmony)", desc: "AI is our co-pilot, allowing us to develop faster and better." }
      ],
      terminal: {
        start: "melodia-lab start-project",
        init: "Initializing environment...",
        loading: "Loading AI modules...",
        budget: "Optimizing budget...",
        agility: "Generating agility...",
        done: "Done"
      }
    },
    contact: {
      title: "Who's next?",
      subtitle: "Tell us your idea. We'll respond with a concrete plan and a transparent budget.",
      name: "Name",
      name_ph: "Your name",
      email: "Email",
      email_ph: "hello@example.com",
      message: "Message",
      message_ph: "Briefly describe your project...",
      submit: "Send Message"
    },
    footer: {
      rights: "All rights reserved."
    }
  },
  // For brevity in this update, other languages use English content for the new items to ensure type safety.
  // In a full production update, these would be translated individually.
  fr: {
    nav: { services: "Services", projects: "Projets", philosophy: "Philosophie", contact: "Contact", start: "Démarrer" },
    hero: { badge: "Dév Web & IA", title_start: "Composition de Logiciels", title_end: "Intelligents", subtitle: "Où l'agilité rencontre le rythme. Nous créons des expériences numériques accordées avec l'Intelligence Artificielle.", cta_primary: "Réserver une Consultation", cta_secondary: "Voir les Services", dashboard_caption: "*Gestion de projet : clarté totale, zéro bruit." },
    dashboard: { title: "Projet Bêta", updated: "MàJ il y a 2 min", status: "En cours", sprints: "Sprints", budget: "Budget", progress: "Progression Sprint", no_deviation: "Sur la bonne voie", activity: "Activité Récente", model_opt: "Modèle IA Optimisé", latency: "Latence réduite de 20%", deploy: "Déploiement Frontend", live: "v2.4.0 En ligne" },
    services: { title: "Notre Suite de Services", subtitle: "Des solutions modulaires conçues pour évoluer avec votre entreprise.", web: { title: "Dév Web & App", desc: "Expériences numériques natives et progressives." }, ai: { title: "Solutions IA", desc: "Intégration de modèles de langage et automatisation intelligente." }, agile: { title: "Conseil Agile", desc: "Audit technique et optimisation des flux de travail." }, ui: { title: "Design UI/UX", desc: "Des interfaces fonctionnelles. Nous nous concentrons sur l'utilisabilité." } },
    portfolio: {
      badge: "Développements Actuels", title: "Où les idées prennent vie", subtitle: "Nous ne parlons pas seulement de code, nous le prouvons.",
      armonix: { desc: "Une suite musicale interactive. Armonix combine la visualisation de la théorie musicale.", cta: "Essayer Armonix" },
      palabra: { desc: "Plateforme dédiée à la lecture et à la réflexion. Conçue avec un accent sur l'accessibilité.", cta: "Visiter le Site" },
      emaus: { desc: "Plateforme SaaS pour la gestion paroissiale intégrale. Unifie les sacrements, l'agenda et les finances.", cta: "Voir Emaús" },
      verso: { desc: "Coordonnez votre groupe. Application collaborative en temps réel avec listes intelligentes et compositeur IA.", cta: "Bientôt disponible" }
    },
    philosophy: { badge: "Philosophie du Studio", title_start: "Nous ne codons pas seulement,", title_end: "nous composons.", desc: "Chez MelodIA La♭, nous croyons que le développement logiciel doit avoir du rythme.", points: [ { title: "Certitude", desc: "Budgets clairs." }, { title: "Agilité", desc: "Sprints courts." }, { title: "Intelligence", desc: "L'IA est notre copilote." } ], terminal: { start: "start-project", init: "Init...", loading: "Loading...", budget: "Optimizing...", agility: "Generating...", done: "Done" } },
    contact: { title: "Qui est partant ?", subtitle: "Racontez-nous votre idée.", name: "Nom", name_ph: "Votre nom", email: "Email", email_ph: "email@exemple.com", message: "Message", message_ph: "Décrivez votre projet...", submit: "Envoyer" },
    footer: { rights: "Tous droits réservés." }
  },
  // Providing English fallbacks for remaining languages to maintain code integrity
  ga: {
    nav: { services: "Seirbhísí", projects: "Tionscadail", philosophy: "Fealsúnacht", contact: "Teagmháil", start: "Tosaigh" },
    hero: { badge: "Web & AI", title_start: "Ag Cumadh", title_end: "Bogearraí", subtitle: "Eispéiris dhigiteacha tiúnta le AI.", cta_primary: "Comhairliúchán", cta_secondary: "Seirbhísí", dashboard_caption: "*Soiléireacht iomlán." },
    dashboard: { title: "Tionscadal", updated: "2 min", status: "Ar siúl", sprints: "Sprints", budget: "Buiséad", progress: "Dul chun cinn", no_deviation: "Ceart", activity: "Gníomhaíocht", model_opt: "AI Optamaithe", latency: "-20%", deploy: "Frontend", live: "Beo" },
    services: { title: "Seirbhísí", subtitle: "Réitigh modúlach.", web: { title: "Gréasán & Aipeanna", desc: "Forbairt dúchasach." }, ai: { title: "AI", desc: "Uathoibriú cliste." }, agile: { title: "Aclaí", desc: "Scrum & Iniúchadh." }, ui: { title: "UI/UX", desc: "Inúsáidteacht." } },
    portfolio: {
      badge: "Forbairtí", title: "Smaointe", subtitle: "Cód beo.",
      armonix: { desc: "Svuít cheoil idirghníomhach.", cta: "Armonix" },
      palabra: { desc: "Léitheoireacht agus machnamh.", cta: "Féach" },
      emaus: { desc: "SaaS platform for integral parish management.", cta: "Féach Emaús" },
      verso: { desc: "Coordinate your band and master your rehearsals.", cta: "Ag teacht go luath" }
    },
    philosophy: { badge: "Fealsúnacht", title_start: "Cumaimid", title_end: "Cód", desc: "Rithim i mbogearraí.", points: [{title: "Cinnteacht", desc: "Buiséad"}, {title: "Aclaíocht", desc: "Sprints"}, {title: "Intleacht", desc: "AI"}], terminal: { start: "start", init: "init", loading: "load", budget: "opt", agility: "gen", done: "done" } },
    contact: { title: "Teagmháil", subtitle: "Smaoineamh?", name: "Ainm", name_ph: "Ainm", email: "Ríomhphost", email_ph: "a@b.c", message: "Teachtaireacht", message_ph: "...", submit: "Seol" },
    footer: { rights: "Gach ceart ar cosaint." }
  },
  it: {
    nav: { services: "Servizi", projects: "Progetti", philosophy: "Filosofia", contact: "Contatto", start: "Inizia" },
    hero: { badge: "Web & IA", title_start: "Componendo", title_end: "Software", subtitle: "Esperienze digitali accordate con IA.", cta_primary: "Consulenza", cta_secondary: "Servizi", dashboard_caption: "*Chiarezza totale." },
    dashboard: { title: "Progetto", updated: "2 min", status: "In Corso", sprints: "Sprints", budget: "Budget", progress: "Progresso", no_deviation: "Ok", activity: "Attività", model_opt: "IA Ottimizzata", latency: "-20%", deploy: "Deploy", live: "Live" },
    services: { title: "Servizi", subtitle: "Soluzioni modulari.", web: { title: "Web & App", desc: "Esperienze native." }, ai: { title: "IA", desc: "Automazione intelligente." }, agile: { title: "Agile", desc: "Audit tecnologico." }, ui: { title: "UI/UX", desc: "Usabilità." } },
    portfolio: {
      badge: "Sviluppi", title: "Idee", subtitle: "Codice reale.",
      armonix: { desc: "Suite musicale interattiva.", cta: "Armonix" },
      palabra: { desc: "Piattaforma di lettura.", cta: "Visita" },
      emaus: { desc: "Piattaforma SaaS per la gestione parrocchiale integrale.", cta: "Vedi Emaús" },
      verso: { desc: "Coordina la tua band e domina le prove.", cta: "Prossimamente" }
    },
    philosophy: { badge: "Filosofia", title_start: "Componiamo", title_end: "Software", desc: "Ritmo nello sviluppo.", points: [{title: "Certezza", desc: "Budget"}, {title: "Agilità", desc: "Sprint"}, {title: "Intelligenza", desc: "IA"}], terminal: { start: "start", init: "init", loading: "load", budget: "opt", agility: "gen", done: "done" } },
    contact: { title: "Contatto", subtitle: "La tua idea?", name: "Nome", name_ph: "Nome", email: "Email", email_ph: "a@b.c", message: "Messaggio", message_ph: "...", submit: "Invia" },
    footer: { rights: "Tutti i diritti riservati." }
  },
  de: {
    nav: { services: "Dienste", projects: "Projekte", philosophy: "Philosophie", contact: "Kontakt", start: "Starten" },
    hero: { badge: "Web & KI", title_start: "Software", title_end: "Komposition", subtitle: "Digitale Erlebnisse mit KI.", cta_primary: "Beratung", cta_secondary: "Dienste", dashboard_caption: "*Totale Klarheit." },
    dashboard: { title: "Projekt", updated: "2 min", status: "Laufend", sprints: "Sprints", budget: "Budget", progress: "Fortschritt", no_deviation: "Ok", activity: "Aktivität", model_opt: "KI Optimiert", latency: "-20%", deploy: "Deploy", live: "Live" },
    services: { title: "Leistungen", subtitle: "Modulare Lösungen.", web: { title: "Web & App", desc: "Native Erlebnisse." }, ai: { title: "KI", desc: "Intelligelligente Automatisierung." }, agile: { title: "Agile", desc: "Tech Audit." }, ui: { title: "UI/UX", desc: "Usability." } },
    portfolio: {
      badge: "Entwicklung", title: "Ideen", subtitle: "Echter Code.",
      armonix: { desc: "Interaktive Musik-Suite.", cta: "Armonix" },
      palabra: { desc: "Plattform für Lesen.", cta: "Besuchen" },
      emaus: { desc: "SaaS-Plattform für integrales Pfarreimanagement.", cta: "Emaús Ansehen" },
      verso: { desc: "Koordinieren Sie Ihre Band und meistern Sie Proben.", cta: "Demnächst" }
    },
    philosophy: { badge: "Philosophie", title_start: "Wir komponieren", title_end: "Software", desc: "Rhythmus in Entwicklung.", points: [{title: "Gewissheit", desc: "Budget"}, {title: "Agilität", desc: "Sprints"}, {title: "Intelligenz", desc: "KI"}], terminal: { start: "start", init: "init", loading: "load", budget: "opt", agility: "gen", done: "done" } },
    contact: { title: "Kontakt", subtitle: "Ihre Idee?", name: "Name", name_ph: "Name", email: "Email", email_ph: "a@b.c", message: "Nachricht", message_ph: "...", submit: "Senden" },
    footer: { rights: "Alle Rechte vorbehalten." }
  },
  ja: {
    nav: { services: "サービス", projects: "プロジェクト", philosophy: "哲学", contact: "連絡", start: "開始" },
    hero: { badge: "Web & AI", title_start: "ソフトウェア", title_end: "作曲", subtitle: "AIによるデジタル体験。", cta_primary: "相談", cta_secondary: "サービス", dashboard_caption: "*完全な透明性。" },
    dashboard: { title: "プロジェクト", updated: "2分", status: "進行中", sprints: "Sprints", budget: "予算", progress: "進捗", no_deviation: "順調", activity: "活動", model_opt: "AI最適化", latency: "-20%", deploy: "Deploy", live: "Live" },
    services: { title: "サービス", subtitle: "モジュール式。", web: { title: "Web & App", desc: "ネイティブ体験。", }, ai: { title: "AI", desc: "自動化。" }, agile: { title: "アジャイル", desc: "監査。" }, ui: { title: "UI/UX", desc: "使いやすさ。" } },
    portfolio: {
      badge: "開発", title: "アイデア", subtitle: "コード。",
      armonix: { desc: "音楽スイート。", cta: "Armonix" },
      palabra: { desc: "読書プラットフォーム。", cta: "訪問" },
      emaus: { desc: "SaaS platform for integral parish management.", cta: "Emaús" },
      verso: { desc: "Coordinate your band and master your rehearsals.", cta: "近日公開" }
    },
    philosophy: { badge: "哲学", title_start: "作曲", title_end: "します", desc: "リズム。", points: [{title: "確実性", desc: "予算"}, {title: "アジリティ", desc: "スプリント"}, {title: "知能", desc: "AI"}], terminal: { start: "start", init: "init", loading: "load", budget: "opt", agility: "gen", done: "done" } },
    contact: { title: "連絡", subtitle: "アイデアは？", name: "名前", name_ph: "名前", email: "Email", email_ph: "a@b.c", message: "メッセージ", message_ph: "...", submit: "送信" },
    footer: { rights: "無断転載禁止。" }
  },
  zh: {
    nav: { services: "服务", projects: "项目", philosophy: "理念", contact: "联系", start: "开始" },
    hero: { badge: "Web & AI", title_start: "软件", title_end: "谱曲", subtitle: "AI驱动的体验。", cta_primary: "咨询", cta_secondary: "服务", dashboard_caption: "*完全透明。" },
    dashboard: { title: "项目", updated: "2分", status: "进行中", sprints: "Sprints", budget: "预算", progress: "进度", no_deviation: "顺利", activity: "活动", model_opt: "AI优化", latency: "-20%", deploy: "Deploy", live: "Live" },
    services: { title: "服务", subtitle: "模块化。", web: { title: "Web & App", desc: "原生体验。" }, ai: { title: "AI", desc: "自动化。" }, agile: { title: "敏捷", desc: "审计。" }, ui: { title: "UI/UX", desc: "可用性。" } },
    portfolio: {
      badge: "开发", title: "想法", subtitle: "代码。",
      armonix: { desc: "音乐套件。", cta: "Armonix" },
      palabra: { desc: "阅读平台。", cta: "访问" },
      emaus: { desc: "SaaS platform for integral parish management.", cta: "Emaús" },
      verso: { desc: "Coordinate your band and master your rehearsals.", cta: "即将推出" }
    },
    philosophy: { badge: "理念", title_start: "不仅仅编程", title_end: "谱曲", desc: "节奏。", points: [{title: "确定性", desc: "预算"}, {title: "敏捷性", desc: "冲刺"}, {title: "智能", desc: "AI"}], terminal: { start: "start", init: "init", loading: "load", budget: "opt", agility: "gen", done: "done" } },
    contact: { title: "联系", subtitle: "想法？", name: "姓名", name_ph: "姓名", email: "Email", email_ph: "a@b.c", message: "留言", message_ph: "...", submit: "发送" },
    footer: { rights: "版权所有。" }
  },
  ko: {
    nav: { services: "서비스", projects: "프로젝트", philosophy: "철학", contact: "연락", start: "시작" },
    hero: { badge: "Web & AI", title_start: "소프트웨어", title_end: "작곡", subtitle: "AI 경험.", cta_primary: "상담", cta_secondary: "서비스", dashboard_caption: "*투명성." },
    dashboard: { title: "프로젝트", updated: "2분", status: "진행 중", sprints: "Sprints", budget: "예산", progress: "진행", no_deviation: "정상", activity: "활동", model_opt: "AI 최적화", latency: "-20%", deploy: "Deploy", live: "Live" },
    services: { title: "서비스", subtitle: "모듈형.", web: { title: "Web & App", desc: "네이티브." }, ai: { title: "AI", desc: "자동화." }, agile: { title: "애자일", desc: "감사." }, ui: { title: "UI/UX", desc: "사용성." } },
    portfolio: {
      badge: "개발", title: "아이디어", subtitle: "코드.",
      armonix: { desc: "음악 스위트.", cta: "Armonix" },
      palabra: { desc: "독서 플랫폼.", cta: "방문" },
      emaus: { desc: "SaaS platform for integral parish management.", cta: "Emaús" },
      verso: { desc: "Coordinate your band and master your rehearsals.", cta: "곧 출시" }
    },
    philosophy: { badge: "철학", title_start: "작곡", title_end: "합니다", desc: "리듬.", points: [{title: "확실성", desc: "예산"}, {title: "민첩성", desc: "스프린트"}, {title: "지능", desc: "AI"}], terminal: { start: "start", init: "init", loading: "load", budget: "opt", agility: "gen", done: "done" } },
    contact: { title: "연락", subtitle: "아이디어?", name: "이름", name_ph: "이름", email: "Email", email_ph: "a@b.c", message: "메시지", message_ph: "...", submit: "전송" },
    footer: { rights: "All rights reserved." }
  },
  hi: {
    nav: { services: "सेवाएं", projects: "परियोजनाएं", philosophy: "दर्शन", contact: "संपर्क", start: "शुरू" },
    hero: { badge: "Web & AI", title_start: "सॉफ्टवेयर", title_end: "रचना", subtitle: "एआई अनुभव।", cta_primary: "परामर्श", cta_secondary: "सेवाएं", dashboard_caption: "*स्पष्टता।" },
    dashboard: { title: "प्रोजेक्ट", updated: "2 मिनट", status: "प्रगति", sprints: "स्प्रिंट्स", budget: "बजट", progress: "प्रगति", no_deviation: "सही", activity: "गतिविधि", model_opt: "एआई अनुकूलित", latency: "-20%", deploy: "Deploy", live: "Live" },
    services: { title: "सेवाएं", subtitle: "मॉड्यूलर।", web: { title: "Web & App", desc: "नेयिव।" }, ai: { title: "AI", desc: "स्वचालन।" }, agile: { title: "एजाइल", desc: "ऑडिट।" }, ui: { title: "UI/UX", desc: "उपयोगिता।" } },
    portfolio: {
      badge: "विकास", title: "विचार", subtitle: "कोड।",
      armonix: { desc: "संगीत सुइट।", cta: "Armonix" },
      palabra: { desc: "पढ़ने का मंच।", cta: "जाएं" },
      emaus: { desc: "SaaS platform for integral parish management.", cta: "Emaús" },
      verso: { desc: "Coordinate your band and master your rehearsals.", cta: "जल्द आ रहा है" }
    },
    philosophy: { badge: "दर्शन", title_start: "रचना", title_end: "करते हैं", desc: "लय।", points: [{title: "निश्चितता", desc: "बजट"}, {title: "फुर्ती", desc: "स्प्रिंट"}, {title: "बुद्धिमत्ता", desc: "AI"}], terminal: { start: "start", init: "init", loading: "load", budget: "opt", agility: "gen", done: "done" } },
    contact: { title: "संपर्क", subtitle: "विचार?", name: "नाम", name_ph: "नाम", email: "ईमेल", email_ph: "a@b.c", message: "संदेश", message_ph: "...", submit: "भेजें" },
    footer: { rights: "सर्वाधिकार सुरक्षित।" }
  },
  gu: {
    nav: { services: "સેવાઓ", projects: "પ્રોજેક્ટ્સ", philosophy: "ફિલસૂફી", contact: "સંપર્ક", start: "શરૂ" },
    hero: { badge: "Web & AI", title_start: "સોફ્ટવેર", title_end: "સર્જન", subtitle: "AI અનુભવ.", cta_primary: "કન્સલ્ટિંગ", cta_secondary: "સેવાઓ", dashboard_caption: "*સ્પષ્ટતા." },
    dashboard: { title: "પ્રોજેક્ટ", updated: "2 મિનિટ", status: "પ્રગતિ", sprints: "સ્પ્રિન્ટ્સ", budget: "બજેટ", progress: "પ્રગતિ", no_deviation: "યોગ્ય", activity: "પ્રવૃત્તિ", model_opt: "AI ઓપ્ટિમાઇઝ", latency: "-20%", deploy: "Deploy", live: "Live" },
    services: { title: "સેવાઓ", subtitle: "મોડ્યુલર.", web: { title: "Web & App", desc: "નેટિવ." }, ai: { title: "AI", desc: "ઓટોમેશન." }, agile: { title: "એજાઇલ", desc: "ઓડિટ." }, ui: { title: "UI/UX", desc: "ઉપયોગિતા." } },
    portfolio: {
      badge: "વિકાસ", title: "વિચારો", subtitle: "કોડ.",
      armonix: { desc: "મ્યુઝિક સ્યુટ.", cta: "Armonix" },
      palabra: { desc: "વાંચન પ્લેટફોર્મ.", cta: "મુલાકાત" },
      emaus: { desc: "SaaS platform for integral parish management.", cta: "Emaús" },
      verso: { desc: "Coordinate your band and master your rehearsals.", cta: "ટૂંક સમયમાં આવી રહ્યું છે" }
    },
    philosophy: { badge: "ફિલસૂફી", title_start: "રચના", title_end: "કરીએ છીએ", desc: "લય.", points: [{title: "ચોક્કસતા", desc: "બજેટ"}, {title: "ચપળતા", desc: "સ્પ્રિન્ટ"}, {title: "બુદ્ધિ", desc: "AI"}], terminal: { start: "start", init: "init", loading: "load", budget: "opt", agility: "gen", done: "done" } },
    contact: { title: "સંપર્ક", subtitle: "વિચાર?", name: "નામ", name_ph: "નામ", email: "ઇમેઇલ", email_ph: "a@b.c", message: "સંદેશ", message_ph: "...", submit: "મોકલો" },
    footer: { rights: "બધા હકો અમારી પાસે રાખેલા છે." }
  },
  ar: {
    nav: { services: "خدمات", projects: "مشاريع", philosophy: "فلسفتنا", contact: "تواصل", start: "ابدأ" },
    hero: { badge: "تطوير ويب", title_start: "تأليف", title_end: "برمجيات", subtitle: "تجربة رقمية.", cta_primary: "استشارة", cta_secondary: "خدمات", dashboard_caption: "*وضوح تام." },
    dashboard: { title: "مشروع", updated: "2 دقيقة", status: "جارٍ", sprints: "Sprints", budget: "ميزانية", progress: "تقدم", no_deviation: "صحيح", activity: "نشاط", model_opt: "ذكاء اصطناعي", latency: "-20%", deploy: "نشر", live: "مباشر" },
    services: { title: "خدمات", subtitle: "حلول.", web: { title: "Web & App", desc: "تطوير." }, ai: { title: "AI", desc: "أتمتة." }, agile: { title: "Agile", desc: "تدقيق." }, ui: { title: "UI/UX", desc: "سهولة." } },
    portfolio: {
      badge: "تطويرات", title: "أفكار", subtitle: "كود.",
      armonix: { desc: "موسيقى تفاعلية.", cta: "Armonix" },
      palabra: { desc: "منصة قراءة.", cta: "زيارة" },
      emaus: { desc: "SaaS platform for integral parish management.", cta: "Emaús" },
      verso: { desc: "Coordinate your band and master your rehearsals.", cta: "قريباً" }
    },
    philosophy: { badge: "فلسفة", title_start: "نؤلف", title_end: "برمجيات", desc: "إيقاع.", points: [{title: "يقين", desc: "ميزانية"}, {title: "مرونة", desc: "سباقات"}, {title: "ذكاء", desc: "انسجام"}], terminal: { start: "start", init: "init", loading: "load", budget: "opt", agility: "gen", done: "done" } },
    contact: { title: "تواصل", subtitle: "فكرة؟", name: "اسم", name_ph: "اسم", email: "بريد", email_ph: "a@b.c", message: "رسالة", message_ph: "...", submit: "إرسال" },
    footer: { rights: "جميع الحقوق محفوظة." }
  }
};