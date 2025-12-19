
export type Language = 'es' | 'en' | 'fr' | 'it' | 'de' | 'ja' | 'ar';

export const LANGUAGES: { code: Language; name: string; flag: string }[] = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
];

const baseEn = {
  nav: { services: "Services", audiovisual: "Audiovisual", projects: "Projects", philosophy: "Philosophy", contact: "Contact", start: "Start Project" },
  hero: { badge: "Web & AI Development", title_start: "Composing Intelligent", title_end: "Software", subtitle: "Where agility meets rhythm. AI-tuned digital experiences.", cta_primary: "Consulting", cta_secondary: "Services", dashboard_caption: "*Total clarity, zero noise." },
  dashboard: { title: "Beta Project", updated: "Updated 2 min ago", status: "Ongoing", sprints: "Sprints", budget: "Budget", progress: "Sprint Progress", no_deviation: "No deviations", activity: "Recent Activity", model_opt: "Optimized AI Model", latency: "Latency reduced by 20%", deploy: "Frontend Deploy", live: "v2.4.0 Live" },
  services: { title: "Our Service Suite", subtitle: "Modular solutions designed to scale with your business.", web: { title: "Web & App Development", desc: "Creating native and progressive digital experiences. High-impact landing pages and complex mobile apps using React and Node.js." }, ai: { title: "AI Solutions", desc: "Integrating LLMs and intelligent automation to optimize business processes. Not magic, just engineering." }, audiovisual: { title: "Audiovisual Production", desc: "Creative direction and AI-augmented narrative. Transcending the screen by combining cinema techniques with digital innovation." }, agile: { title: "Agile Consulting", desc: "Tech audits and workflow optimization using adapted Scrum methodologies." }, ui: { title: "UI/UX Design", desc: "Interfaces that don't just look good, but work perfectly. Focused on usability and accessibility." } },
  portfolio: { badge: "Developments", title: "Ideas to Life", subtitle: "We prove code.", armonix: { desc: "Interactive music suite.", cta: "Try" }, palabra: { desc: "Reading & reflection.", cta: "Visit" }, emaus: { desc: "SaaS management.", cta: "Visit" }, verso: { desc: "AI Band coordination.", cta: "Soon" } },
  philosophy: { badge: "Philosophy", title_start: "We don't just code,", title_end: "we compose.", desc: "Software with rhythm.", points: [ { title: "Certainty", desc: "Clear budgets." }, { title: "Agility", desc: "Short sprints." }, { title: "Intelligence", desc: "AI co-pilot." } ], terminal: { start: "melodia-lab start", init: "Init...", loading: "Loading IA...", budget: "Optimizing...", agility: "Agility...", done: "Done" } },
  contact: { title: "Contact", subtitle: "Tell us your idea.", name: "Name", name_ph: "Name", email: "Email", email_ph: "hello@ex.com", message: "Message", message_ph: "Project...", submit: "Send" },
  footer: { rights: "All rights reserved." }
};

export const translations = {
  es: {
    nav: { services: "Servicios", audiovisual: "Audiovisual", projects: "Proyectos", philosophy: "Filosofía", contact: "Contacto", start: "Iniciar Proyecto" },
    hero: { badge: "Desarrollo Web & IA", title_start: "Componiendo Software", title_end: "Inteligente", subtitle: "Donde la agilidad encuentra su ritmo. Creamos experiencias digitales afinadas con Inteligencia Artificial.", cta_primary: "Agendar Consultoría", cta_secondary: "Ver Servicios", dashboard_caption: "*Así gestionamos tu proyecto: claridad total, cero ruido." },
    dashboard: { title: "Proyecto Beta", updated: "Actualizado hace 2 min", status: "En Curso", sprints: "Sprints", budget: "Presupuesto", progress: "Progreso Sprint", no_deviation: "Sin desviaciones", activity: "Actividad Reciente", model_opt: "Modelo IA Optimizado", latency: "Reducción de latencia en 20%", deploy: "Frontend Deploy", live: "v2.4.0 Live" },
    services: { title: "Nuestra Suite de Servicios", subtitle: "Soluciones modulares diseñadas para escalar con tu negocio.", web: { title: "Desarrollo Web & Apps", desc: "Creamos experiencias digitales nativas y progresivas. Desde landing pages de alto impacto hasta aplicaciones móviles complejas, utilizamos React, Node.js y las últimas tecnologías." }, ai: { title: "Soluciones IA", desc: "Integramos modelos de lenguaje y automatización inteligente para optimizar tus procesos de negocio. No es magia, es ingeniería." }, audiovisual: { title: "Producción Audiovisual", desc: "Dirección creativa y narrativa aumentada con IA. Creamos historias que trascienden la pantalla, combinando técnica cinematográfica con innovación digital." }, agile: { title: "Consultoría Ágil", desc: "Auditoría tecnológica y optimización de flujos de trabajo con metodologías Scrum adaptadas a equipos pequeños." }, ui: { title: "Diseño UI/UX", desc: "Interfaces que no solo se ven bien, sino que funcionan. Nos centramos en la usabilidad y la accesibilidad para convertir visitantes en clientes." } },
    tierrita: { 
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
        music_prod_desc: "La interpretación de 'Tierra Tierrita' es liderada por la voz de Maunita, con la producción musical de Francisco Carle y las guitarras de Claudio Pérez. Una versión que honra al autor original, el cantautor Jorge Cartes Palacios (Tomé).",
        music_author_label: "Autor Original: Jorge Cartes Palacios",
        credits: { prod: "Producción", guitars: "Guitarras", voice: "Voz", record: "Sesión de Grabación" },
        gallery_title: "Arte Conceptual",
        gallery_subtitle: "Estación Lunar Víctor Jara — Chile 1972"
      }
    },
    portfolio: { badge: "Desarrollos Actuales", title: "Donde las ideas cobran vida", subtitle: "No solo hablamos de código, lo demostramos.", armonix: { desc: "Suite musical interactiva.", cta: "Probar" }, palabra: { desc: "Lectura y reflexión.", cta: "Visitar" }, emaus: { desc: "Gestión parroquial SaaS.", cta: "Visitar" }, verso: { desc: "Coordinación de bandas con IA.", cta: "Próximamente" } },
    philosophy: { badge: "Filosofía", title_start: "No solo programamos,", title_end: "componemos.", desc: "Software con ritmo.", points: [ { title: "Certeza", desc: "Presupuestos claros." }, { title: "Agilidad", desc: "Sprints cortos." }, { title: "Inteligencia", desc: "IA como copiloto." } ], terminal: { start: "melodia-lab start", init: "Init...", loading: "Loading IA...", budget: "Optimizing...", agility: "Agility...", done: "Done" } },
    contact: { title: "¿Hablamos?", subtitle: "Cuéntanos tu idea.", name: "Nombre", name_ph: "Tu nombre", email: "Email", email_ph: "hola@ejemplo.com", message: "Mensaje", message_ph: "Tu proyecto...", submit: "Enviar" },
    footer: { rights: "Todos los derechos reservados." }
  },
  en: {
    ...baseEn,
    tierrita: { 
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
        credits: { prod: "Production", guitars: "Guitarras", voice: "Voice", record: "Recording Session" },
        gallery_title: "Conceptual Art",
        gallery_subtitle: "Víctor Jara Lunar Station — Chile 1972"
      }
    }
  },
  fr: {
    ...baseEn,
    nav: { services: "Services", audiovisual: "Audiovisuel", projects: "Projets", philosophy: "Philosophie", contact: "Contact", start: "Démarrer" },
    tierrita: { 
      more: "Explorer", 
      detailed: { 
        back: "Retour", 
        hero_tag: "Première 2024", 
        hero_title: "D'Ystad à la Lune",
        lore_title: "Manuel Vera : Le Pilote de l'Unité",
        lore_desc: "Manuel Vera était le cœur de la 'Víctor Jara Lunar Station'. Après l'exil, il s'est installé en Suède (Ystad).",
        mission_title: "Mission Víctor Jara (1972)",
        mission_desc: "Inspirée par le rêve d'un Chili spatial, cette station a été conçue pour préserver la culture.",
        audiovisual_label: "Production Audiovisuelle",
        music_prod_title: "Production Musicale",
        music_prod_desc: "Interprété par Maunita, produit par Francisco Carle. Hommage à Jorge Cartes Palacios.",
        music_author_label: "Auteur Original : Jorge Cartes Palacios",
        credits: { prod: "Production", guitars: "Guitares", voice: "Voix", record: "Session d'enregistrement" },
        gallery_title: "Art Conceptuel",
        gallery_subtitle: "Station Lunaire Víctor Jara — Chili 1972"
      } 
    }
  },
  it: {
    ...baseEn,
    nav: { services: "Servizi", audiovisual: "Audiovisivo", projects: "Progetti", philosophy: "Filosofia", contact: "Contatto", start: "Inizia" },
    tierrita: { 
      more: "Esplora", 
      detailed: { 
        back: "Indietro", 
        hero_tag: "Premiere 2024", 
        hero_title: "Da Ystad alla Luna",
        lore_title: "Manuel Vera: Il Pilota dell'Unità",
        lore_desc: "Manuel Vera era il cuore della 'Stazione Lunare Víctor Jara'. Dopo l'esilio, ha ricostruito la sua vida in Svezia.",
        mission_title: "Missione Víctor Jara (1972)",
        mission_desc: "Ispirata dal sogno di un Cile spaziale, questa stazione è stata progettata per preservare la cultura.",
        audiovisual_label: "Produzione Audiovisiva",
        music_prod_title: "Produzione Musicale",
        music_prod_desc: "Interpretato da Maunita, prodotto da Francisco Carle. Omaggio a Jorge Cartes Palacios.",
        music_author_label: "Autore Originale: Jorge Cartes Palacios",
        credits: { prod: "Produzione", guitars: "Chitarre", voice: "Voce", record: "Sessione di registrazione" },
        gallery_title: "Arte Concettuale",
        gallery_subtitle: "Stazione Lunare Víctor Jara — Cile 1972"
      }
    }
  },
  de: {
    ...baseEn,
    nav: { services: "Dienste", audiovisual: "Audiovisuell", projects: "Projekte", philosophy: "Philosophie", contact: "Kontakt", start: "Starten" },
    tierrita: { 
      more: "Entdecken", 
      detailed: { 
        back: "Zurück", 
        hero_tag: "Premiere 2024", 
        hero_title: "Von Ystad zum Mond",
        lore_title: "Manuel Vera: Der Pilot der Einheit",
        lore_desc: "Manuel Vera war das Herz der 'Víctor Jara Mondstation'. Nach dem Exil lebte er in Schweden.",
        mission_title: "Víctor Jara Mission (1972)",
        mission_desc: "Inspiriert vom Traum eines weltraumfahrenden Chiles wurde diese Station entworfen.",
        audiovisual_label: "Audiovisuelle Produktion",
        music_prod_title: "Musikproduktion",
        music_prod_desc: "Gesungen von Maunita, produziert von Francisco Carle. Ehrt Jorge Cartes Palacios.",
        music_author_label: "Originalautor: Jorge Cartes Palacios",
        credits: { prod: "Produktion", guitars: "Gitarren", voice: "Stimme", record: "Aufnahmesitzung" },
        gallery_title: "Konzeptkunst",
        gallery_subtitle: "Mondstation Víctor Jara — Chile 1972"
      }
    }
  },
  ja: {
    ...baseEn,
    nav: { services: "サービス", audiovisual: "映像制作", projects: "プロジェクト", philosophy: "哲学", contact: "連絡", start: "開始" },
    tierrita: { 
      more: "探索する", 
      detailed: { 
        back: "戻る", 
        hero_tag: "2024年公開", 
        hero_title: "イースタッドから月へ",
        lore_title: "マヌエル・ヴェラ：結束のパイロット",
        lore_desc: "マヌエル・ヴェラは「ビクトル・ハラ月面基地」の中心でした。亡命後、彼はスウェーデンで生活を再建しました。",
        mission_title: "ビクトル・ハラ・ミッション (1972)",
        mission_desc: "宇宙進出というチリの夢にインスパイアされた、文化を保存するための基地。",
        audiovisual_label: "映像制作",
        music_prod_title: "音楽制作",
        music_prod_desc: "マウニータの歌唱、フランシスコ・カルレのプロデュース. ホルヘ・カルテス・パラシオスへのオマージュ。",
        music_author_label: "原作者: ホルヘ・カルテス・パラシオス",
        credits: { prod: "プロデュース", guitars: "ギター", voice: "ヴォーカル", record: "レコーディング" },
        gallery_title: "コンセプトアート",
        gallery_subtitle: "ビクトル・ハラ月面基地 — チリ 1972"
      }
    }
  },
  ar: {
    ...baseEn,
    nav: { services: "خدمات", audiovisual: "سمعي بصري", projects: "مشاريع", philosophy: "فلسفة", contact: "اتصال", start: "ابدأ" },
    tierrita: { 
      more: "استكشف", 
      detailed: { 
        back: "رجوع", 
        hero_tag: "عرض أول 2024", 
        hero_title: "من يستاد إلى القمر",
        lore_title: "مانويل فيرا: طيار الوحدة",
        lore_desc: "كان مانويل فيرا قلب محطة فيكتور جارا القمرية. بعد المنفى، أعاد بناء حياته في السويد.",
        mission_title: "مهمة فيكتور جارا (1972)",
        mission_desc: "مستوحاة من حلم تشيلي في الفضاء، صُممت هذه المحطة للحفاظ على الثقافة.",
        audiovisual_label: "الإنتاج السمعي البصري",
        music_prod_title: "الإنتاج الموسيقي",
        music_prod_desc: "أداء ماونيta، إنتاج فرانسيسكو كارل. تكريم لخورخي كارتيس بالاسيوس.",
        music_author_label: "المؤلف الأصلي: خورخي كارتيس بالاسيوس",
        credits: { prod: "إنتاج", guitars: "جيتار", voice: "صوت", record: "جلسة تسجيل" },
        gallery_title: "فن مفاهيمي",
        gallery_subtitle: "محطة فيكتور جارا القمرية — تشيلي 1972"
      }
    }
  }
};
// v2.4.4 - Fixed crash by ensuring full translation structure for all languages.
