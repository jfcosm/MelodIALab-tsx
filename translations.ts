
export type Language = 'es' | 'en' | 'fr' | 'it' | 'de' | 'ja' | 'ar' | 'zh' | 'ko' | 'hi' | 'gu' | 'nl';

export const LANGUAGES: { code: Language; name: string; flag: string }[] = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'zh', name: '简体中文', flag: '🇨🇳' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
];

const tierritaEn = {
  badge: "Official Music Video", 
  title: "Tierra Tierrita", 
  subtitle: "A bridge between AI vanguard and the roots of Chilean Folk.", 
  story_title: "The Odyssey of Manuel Vera", 
  desc: "The 'Tierra Tierrita' music video tells the epic of a pilot in lunar exile. A MelodIA La♭ production starring José Bolados Milla.", 
  more: "Explore the Work", 
  tagline: "Generative AI, Memory & Folklore.", 
  quote: "\"It's not about space conquest; it's about returning to the earth through the stars.\"",
  detailed: {
    back: "Go Back",
    hero_tag: "2024 Premiere",
    hero_title: "From Ystad to the Moon",
    lore_title: "Manuel Vera: The Unity Pilot",
    lore_desc: "Manuel Vera was the heart of the 'Víctor Jara Lunar Station', a project started in 1972. After exile, Manuel rebuilt his life in Sweden (Ystad), merging his love for the land with sustainable biotechnology.",
    mission_title: "Víctor Jara Mission (1972)",
    mission_desc: "Inspired by the dream of a space-faring Chile, this station was designed to preserve culture. José Bolados Milla portrays the nostalgia of a man watching his homeland from the cosmos.",
    audiovisual_label: "Audiovisual Production",
    music_prod_title: "The Music Version",
    music_prod_desc: "The interpretation of 'Tierra Tierrita' is led by Maunita's voice, with music production by Francisco Carle and guitars by Claudio Pérez. A version that honors original author, Jorge Cartes Palacios (Tomé).",
    music_author_label: "Original Author: Jorge Cartes Palacios",
    credits: { prod: "Production", guitars: "Guitars", voice: "Voice", record: "Recording Session" },
    player: {
      song: "Song: \"Tierra Tierrita\".",
      voice: "Vocals: Maunita.",
      guitar_solo: "Guitar Solo: Claudio Pérez.",
      full_prod: "Keys, drums, bass, guitars, vocals and production: Francisco Carle."
    },
    gallery_title: "Conceptual Art",
    gallery_subtitle: "Víctor Jara Lunar Station — Chile 1972"
  }
};

const tierritaEs = {
  badge: "Video Clip Oficial", 
  title: "Tierra Tierrita", 
  subtitle: "Un puente entre la vanguardia de la IA y la raíz de la Nueva Canción Chilena.", 
  story_title: "La Odisea de Manuel Vera", 
  desc: "El video clip de 'Tierra Tierrita' narra la épica de un piloto en el exilio lunar. Una producción de MelodIA La♭ protagonizada por José Bolados Milla.", 
  more: "Explorar la Obra", 
  tagline: "IA Generativa, Memoria y Folclore.", 
  quote: "\"No es una conquista del espacio, es el retorno a la tierra a través de las estrellas.\"",
  detailed: {
    back: "Regresar",
    hero_tag: "Estreno 2024",
    hero_title: "De Ystad a la Luna",
    lore_title: "Manuel Vera: El Piloto de la Unidad",
    lore_desc: "Manuel Vera fue el corazón de la 'Estación Lunar Víctor Jara', un proyecto que comenzó en 1972. Tras el exilio, Manuel rehizo su vida en Suecia (Ystad), fusionando su amor por la tierra con la biotecnología sustentable.",
    mission_title: "Misión Víctor Jara (1972)",
    mission_desc: "Inspirada en el sueño de un Chile espacial, esta estación lunar fue diseñada para preservar la cultura. José Bolados Milla encarna la nostalgia del hombre que observa su patria desde el cosmos.",
    audiovisual_label: "Producción Audiovisual",
    music_prod_title: "La Versión Musical",
    music_prod_desc: "La interpretación de 'Tierra Tierrita' es liderada por la voz de Maunita, con la producción musical de Francisco Carle y las guitarras de Adobe Suite. Una versión que honra al autor original, el cantautor Jorge Cartes Palacios (Tomé).",
    music_author_label: "Autor Original: Jorge Cartes Palacios",
    credits: { prod: "Producción", guitarras: "Guitarras", voice: "Voz", record: "Sesión de Grabación" },
    player: {
      song: "Canción: \"Tierra Tierrita\".",
      voice: "Voz: Maunita.",
      guitar_solo: "Solo de guitarra: Claudio Pérez.",
      full_prod: "Teclados, batería, bajo, guitarras, voces y producción: Francisco Carle."
    },
    gallery_title: "Arte Conceptual",
    gallery_subtitle: "Estación Lunar Víctor Jara — Chile 1972"
  }
};

const baseEn = {
  nav: { services: "Services", audiovisual: "Reel", projects: "Apps", philosophy: "Vibe", contact: "Contact", start: "Work with us" },
  hero: { 
    badge: "Audiovisual Intelligence", 
    title_start: "Where Code Meets", 
    title_end: "Cinema", 
    subtitle: "20 years of TV mastery and Adobe expertise powered by AI and Software Engineering. We create content and solutions that stop the scroll.", 
    cta_primary: "Jan 2026 Reel", 
    cta_secondary: "Our Services", 
    dashboard_caption: "*Audiovisual precision, AI-speed, Software stability." 
  },
  dashboard: { title: "Production Log", updated: "Updated Jan 2026", status: "Active", sprints: "Scenes", budget: "Efficiency", progress: "Render Progress", no_deviation: "Optimized Costs", activity: "Recent Activity", model_opt: "AI-Video Enhancement", latency: "Rendering 3x Faster", deploy: "Software Updates", live: "Jan 2026 Collection" },
  services: { 
    title: "Dual Mastery: Video & Code", 
    subtitle: "Professional audiovisual production and software engineering for the modern era.", 
    web: { title: "Social Viral (People)", desc: "High-retention, viral videos for IG, TikTok, and YouTube. Impact-driven storytelling for the personal market." }, 
    ai: { title: "Corporate Video (B2B)", desc: "TV-grade production with record delivery times and disruptive costs. Fully customizable for institutions." }, 
    software: { title: "Custom Software", desc: "Our core foundation. We continue developing high-end apps, SaaS, and digital tools with modern stacks." },
    audiovisual: { title: "Adobe & AI Post-Pro", desc: "20 years of expertise in Adobe Suite. Professional color grading, upscaling, and compositing with the human touch." }, 
    agile: { title: "Digital Hybrid Lab", desc: "Merging human direction with AI tools to generate unique visual concepts and technical solutions." }, 
    ui: { title: "Interactive Design", desc: "Bringing brands to life through dynamic UI/UX and motion design that communicates and converts." } 
  },
  portfolio: { 
    badge: "Software Track", 
    title: "App Ecosystem", 
    subtitle: "Our developed apps and digital solutions.", 
    armonix: { title: "Armonix", desc: "Powerful web app focused on music education, rhythm and melody pattern generation, and understanding harmony and composition basics.", cta: "Explore" }, 
    palabra: { title: "The Daily Word", desc: "Daily spiritual meditation and reading platform with a minimalist editorial design and high focus on readability.", cta: "Visit" }, 
    emaus: { title: "Emaús", desc: "Administrative management software (SaaS) for parishes, dioceses, and chapels, specialized in workflows with certificates and sacraments.", cta: "View" }, 
    verso: { title: "Verso", desc: "Rehearsal coordination space for bands, focused on facilitating date selection and repertoire management for each session or concert.", cta: "Soon" } 
  },
  philosophy: { badge: "Why us?", title_start: "20 years of Art,", title_end: "20 years of Code.", desc: "Dominating the Adobe Suite and Software Architecture to lead the AI revolution.", points: [ { title: "Experience", desc: "TV, Music & Full-stack dev." }, { title: "Efficiency", desc: "AI-powered timelines." }, { title: "Hybrid ADN", desc: "Technical rigour meets Cinema." } ], terminal: { start: "melodia-lab --init-hybrid", init: "Init AI + Code...", loading: "Processing Lens...", budget: "Optimizing ROI...", agility: "Syncing Sound...", done: "Live" } },
  contact: { title: "Let's Talk", subtitle: "Tell us about your next viral hit, corporate film, or software project.", name: "Name", name_ph: "Full Name", email: "Email", email_ph: "director@studio.com", message: "Vision", message_ph: "Tell us your idea...", submit: "Send message" },
  footer: { 
    rights: "All rights reserved.", 
    connect_corporate: "Corporate & Tech",
    connect_visual: "Visual & Viral",
    connect: "Connect",
    nav_title: "Navigation",
    contact_title: "Contact",
    subtitle: "Audiovisual Intelligence & Software Engineering."
  },
  tierrita: tierritaEn
};

export const translations = {
  es: {
    ...baseEn,
    nav: { services: "Servicios", audiovisual: "Reel", projects: "Apps", philosophy: "Vibra", contact: "Contacto", start: "Trabajemos" },
    hero: { 
      badge: "Inteligencia Audiovisual", 
      title_start: "Donde el Código", 
      title_end: "se hace Cine", 
      subtitle: "20 años de maestría en TV y Adobe Suite impulsados por IA e Ingeniería de Software. Creamos contenido y soluciones que detienen el scroll.", 
      cta_primary: "Reel Ene 2026", 
      cta_secondary: "Ver Servicios", 
      dashboard_caption: "*Precisión técnica, velocidad de IA, solidez de software." 
    },
    dashboard: { title: "Log de Producción", updated: "Actualizado Ene 2026", status: "Activo", sprints: "Escenas", budget: "Eficiencia", progress: "Progreso Render", no_deviation: "Costos Optimizados", activity: "Actividad Reciente", model_opt: "Mejora de Video por IA", latency: "Renderizado 3x más rápido", deploy: "Actualizaciones Software", live: "Colección Ene 2026" },
    services: { 
      title: "Maestría Dual: Video y Código", 
      subtitle: "Producción audiovisual profesional e ingeniería de software para un mundo de alto impacto.", 
      web: { title: "Videos Virales (Personas)", desc: "Enfoque en mercado Personas. Videos de alta retención para IG, TikTok y YouTube. Storytelling diseñado para impactar." }, 
      ai: { title: "Video Corporativo (B2B)", desc: "Producción nivel TV con plazos récord y costos disruptivos. Total personalización para empresas e instituciones." }, 
      software: { title: "Desarrollo de Software", desc: "Nuestra base fundacional. Seguimos creando apps, SaaS y herramientas digitales con stacks de vanguardia." },
      audiovisual: { title: "Adobe y Post-Pro IA", desc: "20 años de experiencia en Adobe Suite. Corrección de color, composición y upscaling con el toque del oficio." }, 
      agile: { title: "Lab Híbrido Digital", desc: "Fusionamos dirección humana con herramientas de IA para generar conceptos visuales y soluciones técnicas únicas." }, 
      ui: { title: "Diseño Interactivo", desc: "Damos vida a tu marca mediante UI/UX dinámico y motion design que comunica y convierte." } 
    },
    portfolio: { 
      badge: "Carril Software", 
      title: "Ecosistema de Apps", 
      subtitle: "Nuestras aplicaciones y soluciones digitales desarrolladas.", 
      armonix: { title: "Armonix", desc: "Potente app web enfocada en la educación musical, generación de patrones rítmicos y melódicos y comprensión de conceptos básicos como armonía y composición musical.", cta: "Explorar" }, 
      palabra: { title: "La Palabra Diaria", desc: "Plataforma de meditación y lectura espiritual diaria con un diseño editorial minimalista y alta legibilidad.", cta: "Visitar" }, 
      emaus: { title: "Emaús", desc: "Software de gestión administrativa (SaaS) para parroquias, diócesis y capillas, especializado en flujos de trabajo con certificados y sacramentos", cta: "Ver" }, 
      verso: { title: "Verso", desc: "Espacio de coordinación en ensayos para bandas de música, con enfoque en facilitar la selección de fecha y la gestión del repertorio de cada ensayo o concierto de la banda", cta: "Próximamente" } 
    },
    philosophy: { badge: "¿Por qué nosotros?", title_start: "20 años de Arte,", title_end: "20 años de Código.", desc: "Dominando la Suite Adobe y la Arquitectura de Software para liderar la revolución de la IA.", points: [ { title: "Experiencia", desc: "TV, Música y Dev Full-stack." }, { title: "Eficiencia", desc: "Tiempos potenciados por IA." }, { title: "ADN Híbrido", desc: "Rigor técnico unido al Cine." } ], terminal: { start: "melodia-lab --init-hybrid", init: "Init AI + Code...", loading: "Procesando Lentes...", budget: "Optimizando ROI...", agility: "Sincronizando Audio...", done: "Live" } },
    contact: { title: "Conversemos", subtitle: "Cuéntanos sobre tu próximo viral, video corporativo o proyecto de software.", name: "Nombre", name_ph: "Nombre Completo", email: "Email", email_ph: "director@estudio.com", message: "Visión", message_ph: "Cuéntanos tu idea...", submit: "Envía tu mensaje" },
    footer: { 
      rights: "Todos los derechos reservados.",
      connect_corporate: "Corporativo y Tech",
      connect_visual: "Visual y Viral",
      connect: "Conectar",
      nav_title: "Navegación",
      contact_title: "Contacto",
      subtitle: "Inteligencia Audiovisual e Ingeniería de Software."
    },
    tierrita: tierritaEs
  },
  en: baseEn,
  fr: {
    ...baseEn,
    nav: { services: "Services", audiovisual: "Reel", projects: "Applications", philosophy: "Vibe", contact: "Contact", start: "Travailler avec nous" },
    hero: { ...baseEn.hero, title_end: "Cinéma", badge: "Intelligence Audiovisuelle" },
    portfolio: {
      ...baseEn.portfolio,
      armonix: { title: "Armonix", desc: "Application Web puissante axée sur l'éducation musicale, la generación de motifs et la composition." },
      palabra: { title: "La Parole Quotidienne", desc: "Plateforme de méditation et de lecture spirituelle quotidienne avec un design éditorial minimaliste." },
      emaus: { title: "Emaús", desc: "SaaS de gestion administrative pour les paroisses et diocèses, spécialisé dans les sacrements." },
      verso: { title: "Verso", desc: "Espace de coordination des répétitions pour les groupes, axé sur la gestion du répertoire." }
    },
    contact: { ...baseEn.contact, title: "Parlons", submit: "Envoyez votre message" },
    footer: { ...baseEn.footer, connect: "Connecter", nav_title: "Navigation", contact_title: "Contact", rights: "Tous droits réservés." }
  },
  it: {
    ...baseEn,
    nav: { services: "Servizi", audiovisual: "Reel", projects: "Progetti", philosophy: "Vibe", contact: "Contatto", start: "Iniziamo" },
    hero: { ...baseEn.hero, title_end: "Cinema", badge: "Intelligenza Audiovisiva" },
    portfolio: {
      ...baseEn.portfolio,
      armonix: { title: "Armonix", desc: "Potente app web per l'educazione musicale, generazione di pattern e composizione." },
      palabra: { title: "La Parola Quotidiana", desc: "Piattaforma di meditazione e lettura spirituale quotidiana con un design editoriale minimalista." },
      emaus: { title: "Emaús", desc: "SaaS gestionale per parrocchie e diocesi, specializzato in certificati e sacramenti." },
      verso: { title: "Verso", desc: "Spazio di coordinamento per le prove delle band, focalizzato sulla gestione del repertorio." }
    },
    contact: { ...baseEn.contact, title: "Parliamo", submit: "Invia il tuo messaggio" },
    footer: { ...baseEn.footer, connect: "Connetti", nav_title: "Navigazione", contact_title: "Contatto", rights: "Tutti i diritti riservati." }
  },
  de: {
    ...baseEn,
    nav: { services: "Dienste", audiovisual: "Reel", projects: "Apps", philosophy: "Vibe", contact: "Kontakt", start: "Starten" },
    hero: { ...baseEn.hero, title_end: "Kino", badge: "Audiovisuelle Intelligenz" },
    portfolio: {
      ...baseEn.portfolio,
      armonix: { title: "Armonix", desc: "Leistungsstarke Web-App für Musikerziehung, Mustergenerierung und Komposition." },
      palabra: { title: "Das tägliche Wort", desc: "Tägliche spirituelle Meditations- und Leseplattform mit minimalistischem Design." },
      emaus: { title: "Emaús", desc: "Administrative SaaS für Pfarreien und Diözesen, spezialisiert auf Sakramente." },
      verso: { title: "Verso", desc: "Koordinationsraum für Bandproben, fokussiert auf Repertoire-Management." }
    },
    contact: { ...baseEn.contact, title: "Lass uns reden", submit: "Schicke deine Nachricht" },
    footer: { ...baseEn.footer, connect: "Verbinden", nav_title: "Navigation", contact_title: "Kontakt", rights: "Alle Rechte vorbehalten." }
  },
  ja: {
    ...baseEn,
    nav: { services: "サービス", audiovisual: "リール", projects: "アプリ", philosophy: "コンセプト", contact: "連絡", start: "開始" },
    hero: { ...baseEn.hero, title_start: "コードが映画に出会う場所", title_end: "シネマ", badge: "映像の知性" },
    portfolio: {
      ...baseEn.portfolio,
      armonix: { title: "Armonix", desc: "音楽教育、パターン生成、作曲の基礎に焦点を当てた強力なウェブアプリ。" },
      palabra: { title: "今日の言葉", desc: "ミニマリストなデザインと高い可読性を備えた、毎日の精神的な瞑想と読書のためのプラットフォーム。" },
      emaus: { title: "Emaús", desc: "教区や司教区のための行政管理SaaS。証明書と秘跡に特化。" },
      verso: { title: "Verso", desc: "バンドのリハーサル調整スペース。レパートリー管理に重点。" }
    },
    contact: { ...baseEn.contact, title: "話しましょう", submit: "メッセージを送信" },
    footer: { ...baseEn.footer, connect: "つながる", nav_title: "ナビゲーション", contact_title: "お問い合わせ", rights: "全著作権所有。" }
  },
  zh: {
    ...baseEn,
    nav: { services: "服务", audiovisual: "作品集", projects: "应用", philosophy: "理念", contact: "联系", start: "合作" },
    hero: { ...baseEn.hero, title_start: "当代码遇见", title_end: "电影", badge: "视听智能" },
    portfolio: {
      ...baseEn.portfolio,
      armonix: { title: "Armonix", desc: "专注于音乐教育、节奏生成和作曲基础的强大网页应用。" },
      palabra: { title: "每日箴言", desc: "每日精神冥想和阅读平台，采用极简主义编辑设计，注重易读性。" },
      emaus: { title: "Emaús", desc: "用于教区和教区的行政管理SaaS，专注于证书和圣礼流程。" },
      verso: { title: "Verso", desc: "乐队排练协调空间，专注于曲目管理和演出安排。" }
    },
    contact: { ...baseEn.contact, title: "让我们谈谈", submit: "发送您的消息" },
    footer: { ...baseEn.footer, connect: "建立联系", nav_title: "导航", contact_title: "联系我们", rights: "版权所有。" }
  },
  ko: {
    ...baseEn,
    nav: { services: "서비스", audiovisual: "릴", projects: "앱", philosophy: "철학", contact: "문의", start: "시작하기" },
    hero: { ...baseEn.hero, title_start: "코드가 만나는 곳", title_end: "시네마", badge: "시각 지능" },
    portfolio: {
      ...baseEn.portfolio,
      armonix: { title: "Armonix", desc: "음악 교육, 패턴 생성 및 작곡 기초를 위한 강력한 웹 앱." },
      palabra: { title: "오늘의 말씀", desc: "미니멀한 디자인과 높은 가독성을 갖춘 일일 영성 명상 및 독서 플랫폼." },
      emaus: { title: "Emaús", desc: "본당 및 교구를 위한 행정 관리 SaaS. 증명서 및 성사 워크플로우 전문." },
      verso: { title: "Verso", desc: "밴드 리허설 조정 공간으로, 레퍼토리 관리 및 일정 선택에 집중함." }
    },
    contact: { ...baseEn.contact, title: "이야기합시다", submit: "메시지 보내기" },
    footer: { ...baseEn.footer, connect: "연결하기", nav_title: "탐색", contact_title: "문의처", rights: "모든 권리 보유." }
  },
  hi: {
    ...baseEn,
    nav: { services: "सेवाएं", audiovisual: "रील", projects: "ऐप्स", philosophy: "दर्शन", contact: "संपर्क", start: "जुड़ें" },
    hero: { ...baseEn.hero, title_start: "जहाँ कोड मिलता है", title_end: "सिनेमा से", badge: "दृश्य बुद्धि" },
    portfolio: {
      ...baseEn.portfolio,
      armonix: { title: "Armonix", desc: "संगीत शिक्षा, पैटर्न निर्माण और रचना पर केंद्रित शक्तिशाली वेब ऐप।" },
      palabra: { title: "दैनिक शब्द", desc: "न्यूनतम संपादकीय डिजाइन और उच्च पठनीयता के साथ दैनिक आध्यात्मिक ध्यान और पठन मंच।" },
      emaus: { title: "Emaús", desc: "पैरिश और सूबा के लिए प्रशासनिक प्रबंधन सास, प्रमाणपत्रों में विशेषज्ञ।" },
      verso: { title: "Verso", desc: "बैंड रिहर्सल समन्वय स्थान, प्रदर्शन सूची प्रबंधन पर केंद्रित।" }
    },
    contact: { ...baseEn.contact, title: "चलो बात करते हैं", submit: "अपना संदेश भेजें" },
    footer: { ...baseEn.footer, connect: "जुड़ें", nav_title: "नेविगेशन", contact_title: "संपर्क", rights: "सर्वाधिकार सुरक्षित।" }
  },
  gu: {
    ...baseEn,
    nav: { services: "સેવાઓ", audiovisual: "રીલ", projects: "એપ્સ", philosophy: "વિચારધારા", contact: "સંપર્ક", start: "સાથે કામ કરીએ" },
    hero: { ...baseEn.hero, title_start: "જ્યાં કોડ મળે છે", title_end: "સિનેમાને", badge: "શ્રાવ્ય-દ્રશ્ય બુદ્ધિ" },
    portfolio: {
      ...baseEn.portfolio,
      armonix: { title: "Armonix", desc: "સંગીત શિક્ષણ અને રચના પર ધ્યાન કેન્દ્રિત કરતી શક્તિશાળી વેબ એપ્લિકેશન." },
      palabra: { title: "દૈનિક શબ્દ", desc: "ન્યૂનતમ સંપાદકીય ડિઝાઇન અને ઉચ્ચ વાંચનક્ષમતા સાથે દૈનિક આધ્યાત્મિક ધ્યાન અને વાંચન મંચ." },
      emaus: { title: "Emaús", desc: "સંસ્થાઓ માટે વહીવટી સંચાલન SaaS, પ્રમાણપત્રોમાં નિષ્ણાત." },
      verso: { title: "Verso", desc: "બેન્ડ રિહર્સલ સંકલન સ્થાન, સંગીત યાદી સંચાલન પર કેન્દ્રિત." }
    },
    contact: { ...baseEn.contact, title: "ચાલો વાત કરીએ", submit: "તમારો સંદેશ મોકલો" },
    footer: { ...baseEn.footer, connect: "જોડાઓ", nav_title: "નેવિગેશન", contact_title: "સંપર્ક", rights: "તમામ હકો સુરક્ષિત." }
  },
  nl: {
    ...baseEn,
    nav: { services: "Diensten", audiovisual: "Reel", projects: "Apps", philosophy: "Vibe", contact: "Contact", start: "Werk met ons" },
    hero: { ...baseEn.hero, badge: "Audiovisuele Intelligentie" },
    portfolio: {
      ...baseEn.portfolio,
      armonix: { title: "Armonix", desc: "Krachtige web-app gericht op muziekeducatie, patroongeneratie en compositie." },
      palabra: { title: "Het Dagelijkse Woord", desc: "Dagelijks spiritueel meditatie- en leesplatform con un diseño editorial minimalista." },
      emaus: { title: "Emaús", desc: "Administratieve beheer-SaaS voor parochies en bisdommen, gespecialiseerd in sacramenten." },
      verso: { title: "Verso", desc: "Coördinatieruimte voor bandrepetities, gericht op repertoirebeheer." }
    },
    contact: { ...baseEn.contact, title: "Laten we praten", submit: "Stuur uw bericht" },
    footer: { ...baseEn.footer, connect: "Verbinden", nav_title: "Navigatie", contact_title: "Contact", rights: "Alle rechten voorbehouden." }
  },
  ar: {
    ...baseEn,
    nav: { services: "خدمات", audiovisual: "الريل", projects: "تطبيقات", philosophy: "رؤية", contact: "اتصال", start: "ابدأ" },
    hero: { ...baseEn.hero, title_start: "حيث يلتقي الكود", title_end: "بالسينما", badge: "الذكاء السمعي البصري" },
    portfolio: {
      ...baseEn.portfolio,
      armonix: { title: "Armonix", desc: "تطبيق ويب قوي يركز على التعليم الموسيقي وتوليد الأنماط والتأليف." },
      palabra: { title: "الكلمة اليومية", desc: "منصة للتأمل الروحي والقراءة اليومية بتصميم بسيط وتركيز عالٍ على الوضوح." },
      emaus: { title: "Emaús", desc: "برنامج SaaS للإدارة المؤسسية للأبرشيات، متخصص في الشهادات والأسرار المقدسة." },
      verso: { title: "Verso", desc: "مساحة تنسيق لبروفات الفرق الموسيقية، تركز على إدارة قائمة المقطوعات." }
    },
    contact: { ...baseEn.contact, title: "لنَتحدث", submit: "أرسل رسالتك" },
    footer: { ...baseEn.footer, connect: "اتصل", nav_title: "تصفح", contact_title: "اتصل بنا", rights: "جميع الحقوق محفوظة." }
  }
};
// v2.7.9 - UI Copy Polish: Simplified contact section title to "Conversemos" and button to "Envía tu mensaje" for a friendlier approach.
