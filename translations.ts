
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
    credits: { prod: "Producción", guitars: "Guitarras", voice: "Voz", record: "Sesión de Grabación" },
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
  portfolio: { badge: "Software Track", title: "App Ecosystem", subtitle: "Our developed apps and digital solutions.", armonix: { desc: "Interactive Audiovisual Suite.", cta: "Explore" }, palabra: { desc: "Visual Daily Reflection.", cta: "Visit" }, emaus: { desc: "Institutional Platform.", cta: "View" }, verso: { desc: "Music & AI Fusion.", cta: "Soon" } },
  philosophy: { badge: "Why us?", title_start: "20 years of Art,", title_end: "20 years of Code.", desc: "Dominating the Adobe Suite and Software Architecture to lead the AI revolution.", points: [ { title: "Experience", desc: "TV, Music & Full-stack dev." }, { title: "Efficiency", desc: "AI-powered timelines." }, { title: "Hybrid ADN", desc: "Technical rigour meets Cinema." } ], terminal: { start: "melodia-lab --init-hybrid", init: "Init AI + Code...", loading: "Processing Lens...", budget: "Optimizing ROI...", agility: "Syncing Sound...", done: "Live" } },
  contact: { title: "Let's Create", subtitle: "Tell us about your next viral hit, corporate film, or software project.", name: "Name", name_ph: "Full Name", email: "Email", email_ph: "director@studio.com", message: "Vision", message_ph: "Tell us your idea...", submit: "Send Vision" },
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
    portfolio: { badge: "Carril Software", title: "Ecosistema de Apps", subtitle: "Nuestras aplicaciones y soluciones digitales desarrolladas.", armonix: { desc: "Suite audiovisual interactiva.", cta: "Explorar" }, palabra: { desc: "Reflexión visual diaria.", cta: "Visitar" }, emaus: { desc: "Plataforma Institucional.", cta: "Ver" }, verso: { desc: "Fusión Música e IA.", cta: "Próximamente" } },
    philosophy: { badge: "¿Por qué nosotros?", title_start: "20 años de Arte,", title_end: "20 años de Código.", desc: "Dominando la Suite Adobe y la Arquitectura de Software para liderar la revolución de la IA.", points: [ { title: "Experiencia", desc: "TV, Música y Dev Full-stack." }, { title: "Eficiencia", desc: "Tiempos potenciados por IA." }, { title: "ADN Híbrido", desc: "Rigor técnico unido al Cine." } ], terminal: { start: "melodia-lab --init-hybrid", init: "Init AI + Code...", loading: "Procesando Lentes...", budget: "Optimizando ROI...", agility: "Sincronizando Audio...", done: "Live" } },
    contact: { title: "Creemos Juntos", subtitle: "Cuéntanos sobre tu próximo viral, video corporativo o proyecto de software.", name: "Nombre", name_ph: "Nombre Completo", email: "Email", email_ph: "director@estudio.com", message: "Visión", message_ph: "Cuéntanos tu idea...", submit: "Enviar Visión" },
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
    footer: { ...baseEn.footer, connect: "Connecter", nav_title: "Navigation", contact_title: "Contact", rights: "Tous droits réservés." }
  },
  it: {
    ...baseEn,
    nav: { services: "Servizi", audiovisual: "Reel", projects: "Progetti", philosophy: "Vibe", contact: "Contatto", start: "Iniziamo" },
    hero: { ...baseEn.hero, title_end: "Cinema", badge: "Intelligenza Audiovisiva" },
    footer: { ...baseEn.footer, connect: "Connetti", nav_title: "Navigazione", contact_title: "Contatto", rights: "Tutti i diritti riservati." }
  },
  de: {
    ...baseEn,
    nav: { services: "Dienste", audiovisual: "Reel", projects: "Apps", philosophy: "Vibe", contact: "Kontakt", start: "Starten" },
    hero: { ...baseEn.hero, title_end: "Kino", badge: "Audiovisuelle Intelligenz" },
    footer: { ...baseEn.footer, connect: "Verbinden", nav_title: "Navigation", contact_title: "Kontakt", rights: "Alle Rechte vorbehalten." }
  },
  ja: {
    ...baseEn,
    nav: { services: "サービス", audiovisual: "リール", projects: "アプリ", philosophy: "コンセプト", contact: "連絡", start: "開始" },
    hero: { ...baseEn.hero, title_start: "コードが映画に出会う場所", title_end: "シネマ", badge: "映像の知性" },
    footer: { ...baseEn.footer, connect: "つながる", nav_title: "ナビゲーション", contact_title: "お問い合わせ", rights: "全著作権所有。" }
  },
  zh: {
    ...baseEn,
    nav: { services: "服务", audiovisual: "作品集", projects: "应用", philosophy: "理念", contact: "联系", start: "合作" },
    hero: { ...baseEn.hero, title_start: "当代码遇见", title_end: "电影", badge: "视听智能", subtitle: "20年电视制作与Adobe经验，由人工智能与软件工程赋能。我们打造令人驻足的内容与方案。" },
    dashboard: { ...baseEn.dashboard, title: "制作日志", status: "活跃", progress: "渲染进度", updated: "2026年1月更新", sprints: "场景", budget: "效率" },
    services: {
      ...baseEn.services,
      title: "双重精通：视频与代码",
      web: { title: "社交爆款 (个人)", desc: "针对IG、TikTok和YouTube的高留存爆款视频。由影响力驱动的个人市场叙事。" },
      ai: { title: "企业视频 (B2B)", desc: "电视级制作，创纪录的交付时间与颠覆性的成本。为机构量身定制。" },
      software: { title: "定制软件", desc: "我们的核心基石。我们持续使用现代技术栈开发高端应用、SaaS及数字工具。" }
    },
    footer: { ...baseEn.footer, connect: "建立联系", nav_title: "导航", contact_title: "联系我们", rights: "版权所有。" },
    tierrita: { ...tierritaEn, title: "Tierra Tierrita", badge: "官方音乐视频", more: "探索作品" }
  },
  ko: {
    ...baseEn,
    nav: { services: "서비스", audiovisual: "릴", projects: "앱", philosophy: "철학", contact: "문의", start: "시작하기" },
    hero: { ...baseEn.hero, title_start: "코드가 만나는 곳", title_end: "시네마", badge: "시각 지능", subtitle: "20년의 TV 제작 및 Adobe 전문 기술이 AI와 소프트웨어 공학을 만났습니다. 우리는 스크롤을 멈추게 하는 콘텐츠와 솔루션을 만듭니다." },
    dashboard: { ...baseEn.dashboard, title: "제작 로그", status: "활성", progress: "렌더링 진행", updated: "2026년 1월 업데이트", sprints: "장면", budget: "효율성" },
    services: {
      ...baseEn.services,
      title: "이중 마스터리: 비디오 및 코드",
      web: { title: "소셜 바이럴 (개인)", desc: "IG, TikTok, YouTube를 위한 높은 유지율의 바이럴 비디오. 개인 시장을 위한 영향력 중심의 스토리텔링." },
      ai: { title: "기업 비디오 (B2B)", desc: "기록적인 납기와 혁신적인 비용의 TV급 제작. 기관을 위한 완전한 맞춤형 서비스." },
      software: { title: "맞춤형 소프트웨어", desc: "우리의 핵심 토대. 최신 스택으로 하이엔드 앱, SaaS 및 디지털 도구를 지속적으로 개발합니다." }
    },
    footer: { ...baseEn.footer, connect: "연결하기", nav_title: "탐색", contact_title: "문의처", rights: "모든 권리 보유." },
    tierrita: { ...tierritaEn, title: "Tierra Tierrita", badge: "공식 뮤직 비디오", more: "작품 탐색" }
  },
  hi: {
    ...baseEn,
    nav: { services: "सेवाएं", audiovisual: "रील", projects: "ऐप्स", philosophy: "दर्शन", contact: "संपर्क", start: "जुड़ें" },
    hero: { ...baseEn.hero, title_start: "जहाँ कोड मिलता है", title_end: "सिनेमा से", badge: "दृश्य बुद्धि", subtitle: "20 साल का टीवी मास्टर और एडोब विशेषज्ञता, एआई और सॉफ्टवेयर इंजीनियरिंग द्वारा संचालित। हम ऐसी सामग्री और समाधान बनाते हैं जो स्क्रॉल को रोक देते हैं।" },
    dashboard: { ...baseEn.dashboard, title: "उत्पादन लॉग", status: "सक्रिय", progress: "रेंडर प्रगति", updated: "जनवरी 2026 को अपडेट किया गया" },
    services: {
      ...baseEn.services,
      title: "दोहरी विशेषज्ञता: वीडियो और कोड",
      web: { title: "सोशल वायरल (व्यक्तिगत)", desc: "आईजी, टिकटॉक और यूट्यूब के लिए उच्च-प्रतिधारण, वायरल वीडियो। व्यक्तिगत बाजार के लिए प्रभाव-संचालित कहानी।" }
    },
    footer: { ...baseEn.footer, connect: "जुड़ें", nav_title: "नेविगेशन", contact_title: "संपर्क", rights: "सर्वाधिकार सुरक्षित।" },
    tierrita: { ...tierritaEn, title: "Tierra Tierrita", badge: "आधिकारिक संगीत वीडियो", more: "कार्य का अन्वेषण करें" }
  },
  gu: {
    ...baseEn,
    nav: { services: "સેવાઓ", audiovisual: "રીલ", projects: "એપ્સ", philosophy: "વિચારધારા", contact: "સંપર્ક", start: "સાથે કામ કરીએ" },
    hero: { ...baseEn.hero, title_start: "જ્યાં કોડ મળે છે", title_end: "સિનેમાને", badge: "શ્રાવ્ય-દ્રશ્ય બુદ્ધિ", subtitle: "20 વર્ષની ટીવી માસ્ટરી અને એડોબ નિપુણતા, AI અને સોફ્ટવેર એન્જિનિયરિંગ દ્વારા સંચાલિત. અમે એવી સામગ્રી અને ઉકેલો બનાવીએ છીએ જે સ્ક્રોલને અટકાવે છે." },
    dashboard: { ...baseEn.dashboard, title: "ઉત્પાદન લોગ", status: "સક્રિય", progress: "રેન્ડર પ્રગતિ" },
    services: {
      ...baseEn.services,
      title: "બેવડી નિપુણતા: વિડિઓ અને કોડ",
      web: { title: "સોશિયલ વાયરલ (વ્યક્તિગત)", desc: "IG, TikTok અને YouTube માટે ઉચ્ચ-ધારણા, વાયરલ વિડિઓઝ. વ્યક્તિગત બજાર માટે પ્રભાવ-સંચાલિત વાર્તા કહેવા." }
    },
    footer: { ...baseEn.footer, connect: "જોડાઓ", nav_title: "નેવિગેશન", contact_title: "સંપર્ક", rights: "તમામ હકો સુરક્ષિત." },
    tierrita: { ...tierritaEn, title: "Tierra Tierrita", badge: "સત્તાવાર સંગીત વિડિઓ", more: "કાર્યનું અન્વેષણ કરો" }
  },
  nl: {
    ...baseEn,
    nav: { services: "Diensten", audiovisual: "Reel", projects: "Apps", philosophy: "Vibe", contact: "Contact", start: "Werk met ons" },
    hero: { 
      badge: "Audiovisuele Intelligentie", 
      title_start: "Waar Code en", 
      title_end: "Cinema Samenkomen", 
      subtitle: "20 jaar TV-meesterschap en Adobe-expertise aangedreven door AI en Software Engineering. Wij creëren content en oplossingen die de scroll doen stoppen.",
      cta_primary: "Jan 2026 Reel",
      cta_secondary: "Onze Diensten",
      dashboard_caption: "*Audiovisuele precisie, AI-snelheid, Software stabiliteit."
    },
    dashboard: { 
      title: "Productielogboek", 
      updated: "Bijgewerkt jan 2026", 
      status: "Actief", 
      sprints: "Scènes", 
      budget: "Efficiëntie", 
      progress: "Render Voortgang", 
      no_deviation: "Geoptimaliseerde Kosten", 
      activity: "Recente Activiteit", 
      model_opt: "AI-Video Verbetering", 
      latency: "Rendering 3x Sneller", 
      deploy: "Software Updates", 
      live: "Jan 2026 Collectie" 
    },
    services: { 
      title: "Duo-meesterschap: Video & Code", 
      subtitle: "Professionele audiovisuele productie en software engineering voor het moderne tijdperk.", 
      web: { title: "Social Viral (Mensen)", desc: "Video's met hoge retentie voor IG, TikTok en YouTube. Impact-gestuurde storytelling voor de persoonlijke markt." }, 
      ai: { title: "Zakelijke Video (B2B)", desc: "Productie op TV-niveau met record-levertijden en disruptieve kosten. Volledig aanpasbaar voor instellingen." }, 
      software: { title: "Maatwerk Software", desc: "Onze kernbasis. Wij blijven hoogwaardige apps, SaaS en digitale tools ontwikkelen met moderne stacks." },
      audiovisual: { title: "Adobe & AI Post-Pro", desc: "20 jaar expertise in Adobe Suite. Professionele kleurcorrectie, upscaling en compositing met een menselijke touch." }, 
      agile: { title: "Digitaal Hybride Lab", desc: "Het samenvoegen van menselijke regie met AI-tools om unieke visuele concepten en technische oplossingen te genereren." }, 
      ui: { title: "Interactief Ontwerp", desc: "Merken tot leven brengen via dynamische UI/UX en motion design dat communiceert en converteert." } 
    },
    portfolio: { 
      badge: "Software Track", 
      title: "App Ecosysteem", 
      subtitle: "Onze ontwikkelde apps en digitale oplossingen.", 
      armonix: { desc: "Interactieve Audiovisuele Suite.", cta: "Ontdekken" }, 
      palabra: { desc: "Visuele Dagelijkse Reflectie.", cta: "Bezoeken" }, 
      emaus: { desc: "Institutioneel Platform.", cta: "Bekijken" }, 
      verso: { desc: "Muziek & AI Fusie.", cta: "Binnenkort" } 
    },
    philosophy: { 
      badge: "Waarom wij?", 
      title_start: "20 jaar Kunst,", 
      title_end: "20 jaar Code.", 
      desc: "Het domineren van de Adobe Suite en Software Architectuur om de AI-revolutie te leiden.", 
      points: [ 
        { title: "Ervaring", desc: "TV, Muziek & Full-stack dev." }, 
        { title: "Efficiëntie", desc: "Tijdlijnen aangedreven door AI." }, 
        { title: "Hybride ADN", desc: "Technische discipline ontmoet Cinema." } 
      ], 
      terminal: { start: "melodia-lab --init-hybrid", init: "Init AI + Code...", loading: "Lenzen Verwerken...", budget: "ROI Optimaliseren...", agility: "Geluid Synchroniseren...", done: "Live" } 
    },
    contact: { 
      title: "Laten we Creëren", 
      subtitle: "Vertel ons over je volgende virale hit, bedrijfsfilm of softwareproject.", 
      name: "Naam", 
      name_ph: "Volledige Naam", 
      email: "E-mail", 
      email_ph: "director@studio.com", 
      message: "Visie", 
      message_ph: "Vertel ons je idee...", 
      submit: "Visie Verzenden" 
    },
    footer: { 
      rights: "Alle rechten voorbehouden.", 
      connect_corporate: "Zakelijk & Tech",
      connect_visual: "Visueel & Viral",
      connect: "Verbinden",
      nav_title: "Navigatie",
      contact_title: "Contact",
      subtitle: "Audiovisuele Intelligentie & Software Engineering."
    },
    tierrita: {
      ...tierritaEn,
      badge: "Officiële Muziekvideo",
      title: "Tierra Tierrita",
      subtitle: "Een brug tussen AI-voorhoede en de wortels van Chileense Folk.",
      story_title: "De Odyssee van Manuel Vera",
      desc: "De 'Tierra Tierrita' muziekvideo vertelt de epos van een piloot in maan-ballingschap. Een MelodIA La♭ productie met José Bolados Milla.",
      more: "Ontdek het Werk",
      detailed: {
        ...tierritaEn.detailed,
        back: "Ga Terug",
        hero_tag: "2024 Première",
        hero_title: "Van Ystad naar de Maan",
        lore_title: "Manuel Vera: De Piloot van de Eenheid",
        credits: { prod: "Productie", guitars: "Gitaren", voice: "Stem", record: "Opnamesessie" }
      }
    }
  },
  ar: {
    ...baseEn,
    nav: { services: "خدمات", audiovisual: "الريل", projects: "تطبيقات", philosophy: "رؤية", contact: "اتصال", start: "ابدأ" },
    hero: { ...baseEn.hero, title_start: "حيث يلتقي الكود", title_end: "بالسينما", badge: "الذكاء السمعي البصري" },
    footer: { ...baseEn.footer, connect: "اتصل", nav_title: "تصفح", contact_title: "اتصل بنا", rights: "جميع الحقوق محفوظة." }
  }
};
// v2.7.0 - Native Precision: Fixed Dutch localization leaks and enhanced ZH/KO/HI/GU coverage.
