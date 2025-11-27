
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
  fr: {
    nav: {
      services: "Services",
      projects: "Projets",
      philosophy: "Philosophie",
      contact: "Contact",
      start: "Démarrer"
    },
    hero: {
      badge: "Dév Web & IA",
      title_start: "Composition de Logiciels",
      title_end: "Intelligents",
      subtitle: "Où l'agilité rencontre le rythme. Nous créons des expériences numériques accordées avec l'Intelligence Artificielle.",
      cta_primary: "Réserver une Consultation",
      cta_secondary: "Voir les Services",
      dashboard_caption: "*Gestion de projet : clarté totale, zéro bruit."
    },
    dashboard: {
      title: "Projet Bêta",
      updated: "MàJ il y a 2 min",
      status: "En cours",
      sprints: "Sprints",
      budget: "Budget",
      progress: "Progression Sprint",
      no_deviation: "Sur la bonne voie",
      activity: "Activité Récente",
      model_opt: "Modèle IA Optimisé",
      latency: "Latence réduite de 20%",
      deploy: "Déploiement Frontend",
      live: "v2.4.0 En ligne"
    },
    services: {
      title: "Notre Suite de Services",
      subtitle: "Des solutions modulaires conçues pour évoluer avec votre entreprise.",
      web: {
        title: "Dév Web & App",
        desc: "Expériences numériques natives et progressives. Des landing pages à fort impact aux applications mobiles complexes."
      },
      ai: {
        title: "Solutions IA",
        desc: "Intégration de modèles de langage et automatisation intelligente pour optimiser vos processus. Ce n'est pas de la magie, c'est de l'ingénierie."
      },
      agile: {
        title: "Conseil Agile",
        desc: "Audit technique et optimisation des flux de travail avec des méthodologies Scrum adaptées aux petites équipes."
      },
      ui: {
        title: "Design UI/UX",
        desc: "Des interfaces fonctionnelles. Nous nous concentrons sur l'utilisabilité et l'accessibilité."
      }
    },
    portfolio: {
      badge: "Développements Actuels",
      title: "Où les idées prennent vie",
      subtitle: "Nous ne parlons pas seulement de code, nous le prouvons.",
      armonix: {
        desc: "Une suite musicale interactive. Armonix combine la visualisation de la théorie musicale en temps réel avec des outils comme une Groovebox.",
        cta: "Essayer Armonix"
      },
      palabra: {
        desc: "Plateforme dédiée à la lecture et à la réflexion. Conçue avec un accent sur l'accessibilité et la typographie.",
        cta: "Visiter le Site"
      }
    },
    philosophy: {
      badge: "Philosophie du Studio",
      title_start: "Nous ne codons pas seulement,",
      title_end: "nous composons.",
      desc: "Chez MelodIA La♭, nous croyons que le développement logiciel doit avoir du rythme.",
      points: [
        { title: "Certitude (Accordage)", desc: "Budgets clairs dès le début." },
        { title: "Agilité (Rythme)", desc: "Sprints courts et livrables tangibles." },
        { title: "Intelligence (Harmonie)", desc: "L'IA est notre copilote." }
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
      title: "Qui est partant ?",
      subtitle: "Racontez-nous votre idée. Nous vous répondrons avec un plan concret.",
      name: "Nom",
      name_ph: "Votre nom",
      email: "Email",
      email_ph: "bonjour@exemple.com",
      message: "Message",
      message_ph: "Décrivez brièvement votre projet...",
      submit: "Envoyer le Message"
    },
    footer: {
      rights: "Tous droits réservés."
    }
  },
  ga: {
    nav: {
      services: "Seirbhísí",
      projects: "Tionscadail",
      philosophy: "Fealsúnacht",
      contact: "Teagmháil",
      start: "Tosaigh Tionscadal"
    },
    hero: {
      badge: "Forbairt Gréasáin & AI",
      title_start: "Ag Cumadh Bogearraí",
      title_end: "Cliste",
      subtitle: "Áit a mbuaileann aclaíocht le rithim. Cruthaímid eispéiris dhigiteacha tiúnta le hIntleacht Shaorga.",
      cta_primary: "Sceidealú Comhairliúcháin",
      cta_secondary: "Féach Seirbhísí",
      dashboard_caption: "*Mar a bhainistímid do thionscadal: soiléireacht iomlán."
    },
    dashboard: {
      title: "Tionscadal Béite",
      updated: "Nuashonraithe 2 nóiméad ó shin",
      status: "Ar siúl",
      sprints: "Sprints",
      budget: "Buiséad",
      progress: "Dul chun cinn Sprint",
      no_deviation: "Ar an mbóthar ceart",
      activity: "Gníomhaíocht le déanaí",
      model_opt: "Samhail AI Optamaithe",
      latency: "Latacht laghdaithe 20%",
      deploy: "Imscaradh Frontend",
      live: "v2.4.0 Beo"
    },
    services: {
      title: "Ár Svuít Seirbhísí",
      subtitle: "Réitigh modúlach deartha chun scála le do ghnó.",
      web: {
        title: "Forbairt Gréasáin & Aipeanna",
        desc: "Cruthaímid eispéiris dhigiteacha dhúchasacha. Ó leathanaigh tuirlingthe go haipeanna móibíleacha casta."
      },
      ai: {
        title: "Réitigh AI",
        desc: "Comhtháthaímid samhlacha teanga agus uathoibriú cliste chun do phróisis ghnó a bharrfheabhsú."
      },
      agile: {
        title: "Comhairleoireacht Aclaí",
        desc: "Iniúchadh teicneolaíochta agus barrfheabhsú sreabhadh oibre le modheolaíochtaí Scrum."
      },
      ui: {
        title: "Dearadh UI/UX",
        desc: "Comhéadain a oibríonn go maith. Dírímid ar inúsáidteacht agus inrochtaineacht."
      }
    },
    portfolio: {
      badge: "Forbairtí Reatha",
      title: "Áit a dtagann smaointe chun beatha",
      subtitle: "Nílimid ag caint faoi chód amháin, cruthaímid é.",
      armonix: {
        desc: "Svuít cheoil idirghníomhach. Nascann Armonix léirshamhlú teoiric an cheoil le huirlisí cosúil le Groovebox.",
        cta: "Bain triail as Armonix"
      },
      palabra: {
        desc: "Ardán tiomnaithe don léitheoireacht agus don mhachnamh. Deartha le béim ar inrochtaineacht.",
        cta: "Tabhair cuairt ar an Láithreán"
      }
    },
    philosophy: {
      badge: "Fealsúnacht Stiúideo",
      title_start: "Ní hamháin go gcláraímid,",
      title_end: "cumaimid.",
      desc: "Ag MelodIA La♭, creidimid gur chóir go mbeadh rithim ag forbairt bogearraí.",
      points: [
        { title: "Cinnteacht (Tiúnadh)", desc: "Buiséid shoiléire ón tús." },
        { title: "Aclaíocht (Rithim)", desc: "Sprints gearra agus táirgí inláimhsithe." },
        { title: "Intleacht (Armóin)", desc: "Is é AI ár gcomh-phíolóta." }
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
      title: "Cé atá ag iarraidh?",
      subtitle: "Inis dúinn do smaoineamh. Freagróimid le plean nithiúil.",
      name: "Ainm",
      name_ph: "D'ainm",
      email: "Ríomhphost",
      email_ph: "dia_duit@sampla.com",
      message: "Teachtaireacht",
      message_ph: "Déan cur síos gairid ar do thionscadal...",
      submit: "Seol Teachtaireacht"
    },
    footer: {
      rights: "Gach ceart ar cosaint."
    }
  },
  it: {
    nav: {
      services: "Servizi",
      projects: "Progetti",
      philosophy: "Filosofia",
      contact: "Contatto",
      start: "Inizia Progetto"
    },
    hero: {
      badge: "Sviluppo Web & IA",
      title_start: "Componendo Software",
      title_end: "Intelligente",
      subtitle: "Dove l'agilità incontra il ritmo. Creiamo esperienze digitali accordate con l'Intelligenza Artificiale.",
      cta_primary: "Prenota Consulenza",
      cta_secondary: "Vedi Servizi",
      dashboard_caption: "*Come gestiamo il tuo progetto: chiarezza totale, zero rumore."
    },
    dashboard: {
      title: "Progetto Beta",
      updated: "Aggiornato 2 min fa",
      status: "In Corso",
      sprints: "Sprints",
      budget: "Budget",
      progress: "Progresso Sprint",
      no_deviation: "In linea",
      activity: "Attività Recente",
      model_opt: "Modello IA Ottimizzato",
      latency: "Latenza ridotta del 20%",
      deploy: "Frontend Deploy",
      live: "v2.4.0 Live"
    },
    services: {
      title: "La Nostra Suite di Servizi",
      subtitle: "Soluzioni modulari progettate per scalare con il tuo business.",
      web: {
        title: "Sviluppo Web & App",
        desc: "Esperienze digitali native e progressive. Dalle landing page ad alto impatto alle app mobili complesse."
      },
      ai: {
        title: "Soluzioni IA",
        desc: "Integrazione di modelli linguistici e automazione intelligente. Non è magia, è ingegneria."
      },
      agile: {
        title: "Consulenza Agile",
        desc: "Audit tecnologico e ottimizzazione dei flussi di lavoro con metodologie Scrum."
      },
      ui: {
        title: "Design UI/UX",
        desc: "Interfacce che funzionano. Ci concentriamo sull'usabilità e l'accessibilità."
      }
    },
    portfolio: {
      badge: "Sviluppi Attuali",
      title: "Dove le idee prendono vita",
      subtitle: "Non parliamo solo di codice, lo dimostriamo.",
      armonix: {
        desc: "Una suite musicale interattiva. Armonix combina la visualizzazione della teoria musicale con strumenti come una Groovebox.",
        cta: "Prova Armonix"
      },
      palabra: {
        desc: "Piattaforma dedicata alla lettura e alla riflessione. Progettata con un focus sull'accessibilità.",
        cta: "Visita il Sito"
      }
    },
    philosophy: {
      badge: "Filosofia dello Studio",
      title_start: "Non ci limitiamo a programmare,",
      title_end: "componiamo.",
      desc: "In MelodIA La♭, crediamo che lo sviluppo software debba avere ritmo.",
      points: [
        { title: "Certezza (Accordatura)", desc: "Budget chiari fin dall'inizio." },
        { title: "Agilità (Ritmo)", desc: "Sprint brevi e risultati tangibili." },
        { title: "Intelligenza (Armonia)", desc: "L'IA è il nostro copiloto." }
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
      title: "Chi si propone?",
      subtitle: "Raccontaci la tua idea. Ti risponderemo con un piano concreto.",
      name: "Nome",
      name_ph: "Il tuo nome",
      email: "Email",
      email_ph: "ciao@esempio.com",
      message: "Messaggio",
      message_ph: "Descrivi brevemente il tuo progetto...",
      submit: "Invia Messaggio"
    },
    footer: {
      rights: "Tutti i diritti riservati."
    }
  },
  de: {
    nav: {
      services: "Dienstleistungen",
      projects: "Projekte",
      philosophy: "Philosophie",
      contact: "Kontakt",
      start: "Projekt Starten"
    },
    hero: {
      badge: "Webentwicklung & KI",
      title_start: "Komposition von Intelligenter",
      title_end: "Software",
      subtitle: "Wo Agilität auf Rhythmus trifft. Wir schaffen digitale Erlebnisse, abgestimmt mit Künstlicher Intelligenz.",
      cta_primary: "Beratung Buchen",
      cta_secondary: "Dienste Ansehen",
      dashboard_caption: "*Wie wir Ihr Projekt managen: totale Klarheit, null Rauschen."
    },
    dashboard: {
      title: "Projekt Beta",
      updated: "Vor 2 Min. aktualisiert",
      status: "In Bearbeitung",
      sprints: "Sprints",
      budget: "Budget",
      progress: "Sprint-Fortschritt",
      no_deviation: "Nach Plan",
      activity: "Letzte Aktivität",
      model_opt: "KI-Modell Optimiert",
      latency: "Latenz um 20% reduziert",
      deploy: "Frontend Deploy",
      live: "v2.4.0 Live"
    },
    services: {
      title: "Unser Leistungsspektrum",
      subtitle: "Modulare Lösungen, die mit Ihrem Unternehmen wachsen.",
      web: {
        title: "Web- & App-Entwicklung",
        desc: "Native und progressive digitale Erlebnisse. Von High-Impact Landing Pages bis zu komplexen mobilen Apps."
      },
      ai: {
        title: "KI-Lösungen",
        desc: "Integration von Sprachmodellen und intelligenter Automatisierung. Keine Magie, sondern Ingenieurskunst."
      },
      agile: {
        title: "Agile Beratung",
        desc: "Technologie-Audit und Workflow-Optimierung mit Scrum-Methoden."
      },
      ui: {
        title: "UI/UX Design",
        desc: "Schnittstellen, die funktionieren. Wir konzentrieren uns auf Benutzerfreundlichkeit und Barrierefreiheit."
      }
    },
    portfolio: {
      badge: "Aktuelle Entwicklungen",
      title: "Wo Ideen lebendig werden",
      subtitle: "Wir reden nicht nur über Code, wir beweisen es.",
      armonix: {
        desc: "Eine interaktive Musik-Suite. Armonix kombiniert Musiktheorie-Visualisierung mit Tools wie einer Groovebox.",
        cta: "Armonix Testen"
      },
      palabra: {
        desc: "Plattform für Lesen und Reflexion. Entwickelt mit Fokus auf Barrierefreiheit.",
        cta: "Webseite Besuchen"
      }
    },
    philosophy: {
      badge: "Studio-Philosophie",
      title_start: "Wir programmieren nicht nur,",
      title_end: "wir komponieren.",
      desc: "Bei MelodIA La♭ glauben wir, dass Softwareentwicklung Rhythmus haben muss.",
      points: [
        { title: "Gewissheit (Stimmung)", desc: "Klare Budgets von Anfang an." },
        { title: "Agilität (Rhythmus)", desc: "Kurze Sprints und greifbare Ergebnisse." },
        { title: "Intelligenz (Harmonie)", desc: "KI ist unser Co-Pilot." }
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
      title: "Wer macht mit?",
      subtitle: "Erzählen Sie uns Ihre Idee. Wir antworten mit einem konkreten Plan.",
      name: "Name",
      name_ph: "Ihr Name",
      email: "Email",
      email_ph: "hallo@beispiel.com",
      message: "Nachricht",
      message_ph: "Beschreiben Sie kurz Ihr Projekt...",
      submit: "Nachricht Senden"
    },
    footer: {
      rights: "Alle Rechte vorbehalten."
    }
  },
  ja: {
    nav: {
      services: "サービス",
      projects: "プロジェクト",
      philosophy: "哲学",
      contact: "お問い合わせ",
      start: "プロジェクト開始"
    },
    hero: {
      badge: "Web開発 & AI",
      title_start: "インテリジェントなソフトウェアの",
      title_end: "作曲",
      subtitle: "アジリティとリズムが出会う場所。人工知能で調整されたデジタル体験を創造します。",
      cta_primary: "コンサルティング予約",
      cta_secondary: "サービスを見る",
      dashboard_caption: "*プロジェクト管理方法：完全な透明性、ノイズゼロ。"
    },
    dashboard: {
      title: "プロジェクトベータ",
      updated: "2分前に更新",
      status: "進行中",
      sprints: "スプリント",
      budget: "予算",
      progress: "スプリント進捗",
      no_deviation: "順調",
      activity: "最近のアクティビティ",
      model_opt: "AIモデル最適化",
      latency: "レイテンシ20%削減",
      deploy: "フロントエンドデプロイ",
      live: "v2.4.0 公開中"
    },
    services: {
      title: "サービススイート",
      subtitle: "ビジネスと共に拡張するように設計されたモジュール式ソリューション。",
      web: {
        title: "Web & アプリ開発",
        desc: "ネイティブおよびプログレッシブなデジタル体験。インパクトのあるランディングページから複雑なモバイルアプリまで。"
      },
      ai: {
        title: "AIソリューション",
        desc: "言語モデルとインテリジェントな自動化を統合。魔法ではなく、工学です。"
      },
      agile: {
        title: "アジャイルコンサルティング",
        desc: "小規模チームに適応したスクラム手法による技術監査とワークフローの最適化。"
      },
      ui: {
        title: "UI/UXデザイン",
        desc: "機能するインターフェース。使いやすさとアクセシビリティに焦点を当てています。"
      }
    },
    portfolio: {
      badge: "現在の開発",
      title: "アイデアが命を吹き込まれる場所",
      subtitle: "コードについて語るだけでなく、証明します。",
      armonix: {
        desc: "インタラクティブな音楽スイート。Armonixはリアルタイムの音楽理論の視覚化とGrooveboxなどのツールを組み合わせています。",
        cta: "Armonixを試す"
      },
      palabra: {
        desc: "読書と考察のためのプラットフォーム。アクセシビリティに重点を置いて設計されています。",
        cta: "ウェブサイトを見る"
      }
    },
    philosophy: {
      badge: "スタジオの哲学",
      title_start: "プログラミングだけでなく、",
      title_end: "作曲します。",
      desc: "MelodIA La♭では、ソフトウェア開発にはリズムが必要だと信じています。",
      points: [
        { title: "確実性（チューニング）", desc: "最初から明確な予算。" },
        { title: "アジリティ（リズム）", desc: "短いスプリントと具体的な成果物。" },
        { title: "インテリジェンス（ハーモニー）", desc: "AIは私たちの副操縦士です。" }
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
      title: "一緒にやりませんか？",
      subtitle: "あなたのアイデアを教えてください。具体的な計画でお答えします。",
      name: "名前",
      name_ph: "お名前",
      email: "メール",
      email_ph: "hello@example.com",
      message: "メッセージ",
      message_ph: "プロジェクトの概要を説明してください...",
      submit: "メッセージを送信"
    },
    footer: {
      rights: "無断転載を禁じます。"
    }
  },
  zh: {
    nav: {
      services: "服务",
      projects: "项目",
      philosophy: "理念",
      contact: "联系我们",
      start: "启动项目"
    },
    hero: {
      badge: "Web开发 & AI",
      title_start: "谱写智能",
      title_end: "软件",
      subtitle: "敏捷与节奏的交汇点。我们创造由人工智能调优的数字体验。",
      cta_primary: "预约咨询",
      cta_secondary: "查看服务",
      dashboard_caption: "*我们如何管理您的项目：完全透明，零噪音。"
    },
    dashboard: {
      title: "Beta 项目",
      updated: "2分钟前更新",
      status: "进行中",
      sprints: "冲刺",
      budget: "预算",
      progress: "冲刺进度",
      no_deviation: "按计划进行",
      activity: "近期活动",
      model_opt: "AI模型优化",
      latency: "延迟降低20%",
      deploy: "前端部署",
      live: "v2.4.0 在线"
    },
    services: {
      title: "我们的服务套件",
      subtitle: "旨在随您的业务扩展的模块化解决方案。",
      web: {
        title: "Web & 应用开发",
        desc: "原生和渐进式数字体验。从高影响力的落地页到复杂的移动应用。"
      },
      ai: {
        title: "AI 解决方案",
        desc: "集成语言模型和智能自动化。这不是魔法，是工程学。"
      },
      agile: {
        title: "敏捷咨询",
        desc: "适应小团队的Scrum方法论的技术审计和工作流优化。"
      },
      ui: {
        title: "UI/UX 设计",
        desc: "不仅仅好看，而且实用的界面。我们专注于可用性和无障碍性。"
      }
    },
    portfolio: {
      badge: "当前开发",
      title: "创意变为现实的地方",
      subtitle: "我们不只谈论代码，我们证明它。",
      armonix: {
        desc: "交互式音乐套件。Armonix结合了实时乐理可视化与Groovebox等工具。",
        cta: "试用 Armonix"
      },
      palabra: {
        desc: "专注于阅读和思考的平台。设计重点在于无障碍性。",
        cta: "访问网站"
      }
    },
    philosophy: {
      badge: "工作室理念",
      title_start: "我们不仅仅编程，",
      title_end: "我们谱曲。",
      desc: "在 MelodIA La♭，我们相信软件开发必须有节奏。",
      points: [
        { title: "确定性（调音）", desc: "从一开始就明确预算。" },
        { title: "敏捷性（节奏）", desc: "短冲刺和有形的交付物。" },
        { title: "智能（和谐）", desc: "AI是我们的副驾驶。" }
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
      title: "谁来加入？",
      subtitle: "告诉我们您的想法。我们将回复具体的计划。",
      name: "姓名",
      name_ph: "您的姓名",
      email: "邮箱",
      email_ph: "hello@example.com",
      message: "留言",
      message_ph: "简要描述您的项目...",
      submit: "发送留言"
    },
    footer: {
      rights: "版权所有。"
    }
  },
  ko: {
    nav: {
      services: "서비스",
      projects: "프로젝트",
      philosophy: "철학",
      contact: "연락처",
      start: "프로젝트 시작"
    },
    hero: {
      badge: "웹 개발 & AI",
      title_start: "지능형 소프트웨어를",
      title_end: "작곡하다",
      subtitle: "민첩성과 리듬이 만나는 곳. 인공지능으로 조율된 디지털 경험을 만듭니다.",
      cta_primary: "상담 예약",
      cta_secondary: "서비스 보기",
      dashboard_caption: "*프로젝트 관리 방식: 완전한 투명성, 노이즈 제로."
    },
    dashboard: {
      title: "프로젝트 베타",
      updated: "2분 전 업데이트",
      status: "진행 중",
      sprints: "스프린트",
      budget: "예산",
      progress: "스프린트 진행률",
      no_deviation: "계획대로 진행",
      activity: "최근 활동",
      model_opt: "AI 모델 최적화",
      latency: "지연 시간 20% 감소",
      deploy: "프론트엔드 배포",
      live: "v2.4.0 라이브"
    },
    services: {
      title: "서비스 스위트",
      subtitle: "비즈니스와 함께 성장하도록 설계된 모듈형 솔루션.",
      web: {
        title: "웹 & 앱 개발",
        desc: "네이티브 및 프로그레시브 디지털 경험. 고효율 랜딩 페이지부터 복잡한 모바일 앱까지."
      },
      ai: {
        title: "AI 솔루션",
        desc: "언어 모델과 지능형 자동화를 통합합니다. 마법이 아니라 공학입니다."
      },
      agile: {
        title: "애자일 컨설팅",
        desc: "소규모 팀에 맞춘 스크럼 방법론을 통한 기술 감사 및 워크플로우 최적화."
      },
      ui: {
        title: "UI/UX 디자인",
        desc: "단순히 보기 좋은 것이 아니라 작동하는 인터페이스. 사용성과 접근성에 중점을 둡니다."
      }
    },
    portfolio: {
      badge: "현재 개발 중",
      title: "아이디어가 실현되는 곳",
      subtitle: "우리는 코드에 대해 말만 하지 않고 증명합니다.",
      armonix: {
        desc: "인터랙티브 음악 스위트. Armonix는 실시간 음악 이론 시각화와 Groovebox 같은 도구를 결합합니다.",
        cta: "Armonix 체험하기"
      },
      palabra: {
        desc: "독서와 성찰을 위한 플랫폼. 접근성에 중점을 두고 설계되었습니다.",
        cta: "웹사이트 방문"
      }
    },
    philosophy: {
      badge: "스튜디오 철학",
      title_start: "우리는 단순히 코딩하지 않고,",
      title_end: "작곡합니다.",
      desc: "MelodIA La♭에서는 소프트웨어 개발에 리듬이 있어야 한다고 믿습니다.",
      points: [
        { title: "확실성 (튜닝)", desc: "처음부터 명확한 예산." },
        { title: "민첩성 (리듬)", desc: "짧은 스프린트와 가시적인 결과물." },
        { title: "지능 (화모니)", desc: "AI는 우리의 부조종사입니다." }
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
      title: "함께 하시겠습니까?",
      subtitle: "아이디어를 들려주세요. 구체적인 계획으로 답변해 드리겠습니다.",
      name: "이름",
      name_ph: "성함",
      email: "이메일",
      email_ph: "hello@example.com",
      message: "메시지",
      message_ph: "프로젝트에 대해 간략히 설명해주세요...",
      submit: "메시지 보내기"
    },
    footer: {
      rights: "All rights reserved."
    }
  },
  hi: {
    nav: {
      services: "सेवाएं",
      projects: "परियोजनाएं",
      philosophy: "दर्शन",
      contact: "संपर्क",
      start: "प्रोजेक्ट शुरू करें"
    },
    hero: {
      badge: "वेब विकास और एआई",
      title_start: "बुद्धिमान सॉफ्टवेयर की",
      title_end: "रचना",
      subtitle: "जहां फुर्ती लय से मिलती है। हम आर्टिफिशियल इंटेलिजेंस के साथ तालमेल बिठाकर डिजिटल अनुभव बनाते हैं।",
      cta_primary: "परामर्श बुक करें",
      cta_secondary: "सेवाएं देखें",
      dashboard_caption: "*हम आपकी परियोजना का प्रबंधन कैसे करते हैं: पूर्ण स्पष्टता, शून्य शोर।"
    },
    dashboard: {
      title: "प्रोजेक्ट बीटा",
      updated: "2 मिनट पहले अपडेट किया गया",
      status: "प्रगति पर",
      sprints: "स्प्रिंट्स",
      budget: "बजट",
      progress: "स्प्रिंट प्रगति",
      no_deviation: "सही रास्ते पर",
      activity: "हाल की गतिविधि",
      model_opt: "एआई मॉडल अनुकूलित",
      latency: "विलंबता 20% कम हुई",
      deploy: "फ्रंटएंड डिप्लॉय",
      live: "v2.4.0 लाइव"
    },
    services: {
      title: "हमारी सेवा सुइट",
      subtitle: "आपके व्यवसाय के साथ स्केल करने के लिए डिज़ाइन किए गए मॉड्यूलर समाधान।",
      web: {
        title: "वेब और ऐप विकास",
        desc: "मूल और प्रगतिशील डिजिटल अनुभव। उच्च प्रभाव वाले लैंडिंग पृष्ठों से लेकर जटिल मोबाइल ऐप्स तक।"
      },
      ai: {
        title: "एआई समाधान",
        desc: "हम आपकी व्यावसायिक प्रक्रियाओं को अनुकूलित करने के लिए भाषा मॉडल और बुद्धिमान स्वचालन को एकीकृत करते हैं।"
      },
      agile: {
        title: "एजाइल परामर्श",
        desc: "छोटी टीमों के लिए अनुकूलित स्क्रम कार्यप्रणाली के साथ तकनीकी ऑडिट और वर्कफ़्लो अनुकूलन।"
      },
      ui: {
        title: "यूआई/यूएक्स डिजाइन",
        desc: "इंटरफेस जो काम करते हैं। हम आगंतुकों को ग्राहकों में बदलने के लिए उपयोगिता पर ध्यान केंद्रित करते हैं।"
      }
    },
    portfolio: {
      badge: "वर्तमान विकास",
      title: "जहां विचार जीवन में आते हैं",
      subtitle: "हम केवल कोड की बात नहीं करते, हम इसे साबित करते हैं।",
      armonix: {
        desc: "एक इंटरैक्टिव संगीत सुइट। Armonix वास्तविक समय के संगीत सिद्धांत विज़ुअलाइज़ेशन को Groovebox जैसे टूल के साथ जोड़ता है।",
        cta: "Armonix आज़माएं"
      },
      palabra: {
        desc: "पढ़ने और प्रतिबिंब के लिए समर्पित मंच। पहुंच पर ध्यान देने के साथ डिज़ाइन किया गया।",
        cta: "वेबसाइट पर जाएं"
      }
    },
    philosophy: {
      badge: "स्टूडियो दर्शन",
      title_start: "हम केवल कोडिंग नहीं करते,",
      title_end: "हम रचना करते हैं।",
      desc: "MelodIA La♭ में, हमारा मानना है कि सॉफ्टवेयर विकास में लय होनी चाहिए।",
      points: [
        { title: "निश्चितता (ट्यूनिंग)", desc: "शुरुआत से स्पष्ट बजट।" },
        { title: "फुर्ती (लय)", desc: "छोटे स्प्रिंट और ठोस परिणाम।" },
        { title: "बुद्धिमत्ता (सद्भाव)", desc: "एआई हमारा सह-पायलट है।" }
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
      title: "कौन तैयार है?",
      subtitle: "हमें अपना विचार बताएं। हम एक ठोस योजना के साथ जवाब देंगे।",
      name: "नाम",
      name_ph: "आपका नाम",
      email: "ईमेल",
      email_ph: "hello@example.com",
      message: "संदेश",
      message_ph: "अपनी परियोजना का संक्षेप में वर्णन करें...",
      submit: "संदेश भेजें"
    },
    footer: {
      rights: "सर्वाधिकार सुरक्षित।"
    }
  },
  gu: {
    nav: {
      services: "સેવાઓ",
      projects: "પ્રોજેક્ટ્સ",
      philosophy: "ફિલસૂફી",
      contact: "સંપર્ક",
      start: "પ્રોજેક્ટ શરૂ કરો"
    },
    hero: {
      badge: "વેબ ડેવલપમેન્ટ અને AI",
      title_start: "બુદ્ધિશાળી સોફ્ટવેરનું",
      title_end: "સર્જન",
      subtitle: "જ્યાં ચપળતા લયને મળે છે. અમે આર્ટિફિશિયલ ઇન્ટેલિજન્સ સાથે ટ્યુન કરેલા ડિજિટલ અનુભવો બનાવીએ છીએ.",
      cta_primary: "કન્સલ્ટિંગ બુક કરો",
      cta_secondary: "સેવાઓ જુઓ",
      dashboard_caption: "*અમે તમારા પ્રોજેક્ટનું સંચાલન કેવી રીતે કરીએ છીએ: સંપૂર્ણ સ્પષ્ટતા, શૂન્ય ઘોંઘાટ."
    },
    dashboard: {
      title: "પ્રોજેક્ટ બીટા",
      updated: "2 મિનિટ પહેલા અપડેટ થયું",
      status: "પ્રગતિમાં",
      sprints: "સ્પ્રિન્ટ્સ",
      budget: "બજેટ",
      progress: "સ્પ્રિન્ટ પ્રગતિ",
      no_deviation: "યોગ્ય માર્ગ પર",
      activity: "તાજેતરની પ્રવૃત્તિ",
      model_opt: "AI મોડેલ ઓપ્ટિમાઇઝ",
      latency: "લેટન્સી 20% ઘટી",
      deploy: "ફ્રન્ટએન્ડ ડિપ્લોય",
      live: "v2.4.0 લાઈવ"
    },
    services: {
      title: "અમારી સેવા સ્યુટ",
      subtitle: "તમારા વ્યવસાય સાથે સ્કેલ કરવા માટે રચાયેલ મોડ્યુલર સોલ્યુશન્સ.",
      web: {
        title: "વેબ અને એપ ડેવલપમેન્ટ",
        desc: "નેટિવ અને પ્રોગ્રેસિવ ડિજિટલ અનુભવો. ઉચ્ચ પ્રભાવવાળા લેન્ડિંગ પૃષ્ઠોથી જટિલ મોબાઇલ એપ્લિકેશન્સ સુધી."
      },
      ai: {
        title: "AI સોલ્યુશન્સ",
        desc: "અમે તમારી વ્યવસાય પ્રક્રિયાઓને શ્રેષ્ઠ બનાવવા માટે લેંગ્વેજ મોડલ્સ અને બુદ્ધિશાળી ઓટોમેશનને એકીકૃત કરીએ છીએ."
      },
      agile: {
        title: "એજાઇલ કન્સલ્ટિંગ",
        desc: "નાની ટીમો માટે સ્ક્રમ પદ્ધતિઓ સાથે ટેક ઓડિટ અને વર્કફ્લો ઓપ્ટિમાઇઝેશન."
      },
      ui: {
        title: "UI/UX ડિઝાઇન",
        desc: "ઇન્ટરફેસ જે કામ કરે છે. અમે મુલાકાતીઓને ગ્રાહકોમાં ફેરવવા માટે ઉપયોગિતા પર ધ્યાન કેન્દ્રિત કરીએ છીએ."
      },
    },
    portfolio: {
      badge: "વર્તમાન વિકાસ",
      title: "જ્યાં વિચારો જીવંત થાય છે",
      subtitle: "અમે ફક્ત કોડ વિશે વાત નથી કરતા, અમે તેને સાબિત કરીએ છીએ.",
      armonix: {
        desc: "એક ઇન્ટરેક્ટિવ મ્યુઝિક સ્યુટ. Armonix રિયલ-ટાઇમ મ્યુઝિક થિયરી વિઝ્યુલાઇઝેશનને Groovebox જેવા સાધનો સાથે જોડે છે.",
        cta: "Armonix અજમાવો"
      },
      palabra: {
        desc: "વાંચન અને પ્રતિબિંબ માટે સમર્પિત પ્લેટફોર્મ. સુલભતા પર ધ્યાન કેન્દ્રિત કરીને રચાયેલ છે.",
        cta: "વેબસાઇટની મુલાકાત લો"
      }
    },
    philosophy: {
      badge: "સ્ટુડિયો ફિલસૂફી",
      title_start: "અમે ફક્ત કોડિંગ નથી કરતા,",
      title_end: "અમે રચના કરીએ છીએ.",
      desc: "MelodIA La♭ માં, અમે માનીએ છીએ કે સોફ્ટવેર ડેવલપમેન્ટમાં લય હોવી જોઈએ.",
      points: [
        { title: "ચોક્કસતા (ટ્યુનિંગ)", desc: "શરૂઆતથી જ સ્પષ્ટ બજેટ." },
        { title: "ચપળતા (લય)", desc: "ટૂંકા સ્પ્રિન્ટ્સ અને મૂર્ત પરિણામો." },
        { title: "બુદ્ધિ (સંવાદિતા)", desc: "AI અમારો કો-પાયલોટ છે." }
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
      title: "કોણ તૈયાર છે?",
      subtitle: "અમને તમારો વિચાર જણાવો. અમે નક્કર યોજના સાથે જવાબ આપીશું.",
      name: "નામ",
      name_ph: "તમારું નામ",
      email: "ઇમેઇલ",
      email_ph: "hello@example.com",
      message: "સંદેશ",
      message_ph: "તમારા પ્રોજેક્ટનું સંક્ષિપ્તમાં વર્ણન કરો...",
      submit: "સંદેશ મોકલો"
    },
    footer: {
      rights: "બધા હકો અમારી પાસે રાખેલા છે."
    }
  },
  ar: {
    nav: {
      services: "خدمات",
      projects: "مشاريع",
      philosophy: "فلسفتنا",
      contact: "تواصل معنا",
      start: "ابدأ مشروعك"
    },
    hero: {
      badge: "تطوير الويب والذكاء الاصطناعي",
      title_start: "تأليف برمجيات",
      title_end: "ذكية",
      subtitle: "حيث تلتقي المرونة بالإيقاع. نبتكر تجارب رقمية مضبوطة بدقة باستخدام الذكاء الاصطناعي.",
      cta_primary: "احجز استشارة",
      cta_secondary: "عرض الخدمات",
      dashboard_caption: "*كيف ندير مشروعك: وضوح تام، صفر ضجيج."
    },
    dashboard: {
      title: "المشروع التجريبي",
      updated: "تم التحديث منذ دقيقتين",
      status: "قيد التنفيذ",
      sprints: "سباقات (Sprints)",
      budget: "الميزانية",
      progress: "تقدم السباق",
      no_deviation: "على المسار الصحيح",
      activity: "النشاط الأخير",
      model_opt: "تحسين نموذج الذكاء الاصطناعي",
      latency: "انخفاض الكمون بنسبة 20%",
      deploy: "نشر الواجهة الأمامية",
      live: "v2.4.0 مباشر"
    },
    services: {
      title: "مجموعة خدماتنا",
      subtitle: "حلول معيارية مصممة لتتوسع مع نمو عملك.",
      web: {
        title: "تطوير الويب والتطبيقات",
        desc: "نبتكر تجارب رقمية أصيلة ومتطورة. من صفحات الهبوط عالية التأثير إلى تطبيقات الجوال المعقدة باستخدام React و Node.js."
      },
      ai: {
        title: "حلول الذكاء الاصطناعي",
        desc: "نوم بدمج نماذج اللغة والأتمتة الذكية لتحسين عمليات عملك. هذا ليس سحراً، إنها هندسة."
      },
      agile: {
        title: "استشارات أجايل (Agile)",
        desc: "تدقيق تقني وتحسين سير العمل باستخدام منهجيات Scrum المصممة للفرق الصغيرة."
      },
      ui: {
        title: "تصميم واجهة/تجربة المستخدم",
        desc: "واجهات لا تبدو جيدة فحسب، بل تعمل بكفاءة. نركز على قابلية الاستخدام وسهولة الوصول لتحويل الزوار إلى عملاء."
      }
    },
    portfolio: {
      badge: "تطويرات حالية",
      title: "حيث تنبض الأفكار بالحياة",
      subtitle: "نحن لا نتحدث عن البرمجة فحسب، بل نثبت ذلك. تعرف على بعض المنتجات التي نقوم ببنائها.",
      armonix: {
        desc: "مجموعة موسيقية تفاعلية للملحنين والطلاب. يجمع Armonix بين تصور نظرية الموسيقى في الوقت الفعلي وأدوات مثل Groovebox وموالف عالي الدقة.",
        cta: "جرب Armonix"
      },
      palabra: {
        desc: "منصة مخصصة للقراءة والتأمل. مصممة بتركيز على سهولة الوصول والطباعة، تقدم قراءات يومية وسير القديسين في واجهة نظيفة.",
        cta: "زيارة الموقع"
      }
    },
    philosophy: {
      badge: "فلسفة الاستوديو",
      title_start: "نحن لا نبرمج فقط،",
      title_end: "نحن نؤلف.",
      desc: "في MelodIA La♭، نؤمن بأن تطوير البرمجيات يجب أن يكون له إيقاع. نزيل الضجيج غير الضروري للتركيز على ما يهم حقاً: منتجك.",
      points: [
        { title: "اليقين (الدوزنة)", desc: "ميزانيات واضحة منذ البداية. لا مفاجآت ولا تكاليف خفية." },
        { title: "المرونة (الإيقاع)", desc: "سباقات قصيرة وتسليمات ملموسة. ترى التقدم أسبوعاً بعد أسبوع." },
        { title: "الذكاء (الانسجام)", desc: "الذكاء الاصطناعي هو مساعدنا، مما يسمح لنا بالتطوير بشكل أسرع وأفضل." }
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
      title: "من المستعد؟",
      subtitle: "أخبرنا بفكرتك. سنرد عليك بخطة ملموسة وميزانية شفافة.",
      name: "الاسم",
      name_ph: "اسمك",
      email: "البريد الإلكتروني",
      email_ph: "hello@example.com",
      message: "الرسالة",
      message_ph: "صف مشروعك باختصار...",
      submit: "إرسال الرسالة"
    },
    footer: {
      rights: "جميع الحقوق محفوظة."
    }
  }
};
