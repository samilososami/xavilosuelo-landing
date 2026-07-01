import { useState } from 'react'
import './App.css'

const asset = (name: string) => `/figma-assets/${name}`

const languageOptions = [
  { code: 'es', label: 'ES' },
  { code: 'ca', label: 'CA' },
  { code: 'fr', label: 'FR' },
  { code: 'it', label: 'IT' },
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
] as const

type Language = (typeof languageOptions)[number]['code']

const heroPhotoAssets = [
  {
    src: 'context-rectangle-7.png',
    className: 'mosaic-wide-top',
  },
  {
    src: 'context-rectangle-11.png',
    className: 'mosaic-wide-bottom',
  },
  {
    src: 'context-rectangle-8.png',
    className: 'mosaic-mid-top',
  },
  {
    src: 'context-rectangle-12.png',
    className: 'mosaic-mid-bottom',
  },
  {
    src: 'context-rectangle-10.png',
    className: 'mosaic-tall',
  },
]

const eventCardAssets = [
  {
    src: 'context-rectangle-18.png',
  },
  {
    src: 'context-rectangle-19.png',
  },
  {
    src: 'context-rectangle-20.png',
  },
]

const translations = {
  es: {
    debugLanguage: 'Selector de idioma para pruebas',
    nav: {
      label: 'Principal',
      home: 'Inicio',
      about: 'Sobre el evento',
      stars: 'Estrellas',
      location: 'Ubicación',
      cta: 'Apuntarme',
      language: 'Idioma',
    },
    hero: {
      slogan: 'El mejor evento country',
      international: 'INTERNACIONAL',
      title: '¡En BARCELONA!',
      copyStart:
        'Música en directo, baile, espectáculos western y auténtico espíritu country llegan a ',
      city: 'Barcelona',
      copyMiddle: ' en un evento ',
      internationalWord: 'internacional',
      copyEnd: '. Un evento único donde el country se vive, se baila y se siente.',
    },
    galleryAria: 'Galería del evento',
    heroPhotos: [
      'Grupo de artistas country sobre un escenario',
      'Personas bailando country line dance',
      'Grupo country bailando al aire libre',
      'Concierto country con luces cálidas',
      'Bailarines country con banderas en una sala',
    ],
    signup: {
      title: 'Mantente informado del evento',
      copy: 'Déjanos tu email y no te pierdas ninguna novedad',
      button: 'Quiero estar informado',
      email: 'Email',
    },
    about: {
      title: 'Sobre el evento',
      copy:
        'We Like Country es una experiencia completa para amantes del country y del western. Un evento donde se unen la música en directo, el baile, los espectáculos y la comunidad country internacional.',
      eyebrow: 'Durante el evento podrás disfrutar de:',
    },
    eventCards: [
      {
        alt: 'Concierto country en directo',
        label: 'Actuaciones country en directo',
      },
      {
        alt: 'Pista con personas bailando country',
        label: 'Grandes pistas para bailar country',
      },
      {
        alt: 'Decoración western con calavera y barril',
        label: 'Espectáculos y ambientación western',
      },
    ],
    stars: {
      eyebrow: '¡Estrellas del evento!',
      copy:
        'We Like Country contará con la presencia de dos referentes del country actual, artistas que harán vibrar el escenario principal con música en directo y auténtico espíritu western.',
      davidBio:
        'Coreógrafo y referente del country en nuestro país, con más de 29 años de experiencia. Ha sido uno de los grandes precursores del movimiento country aquí, impulsando su crecimiento y evolución desde sus inicios hasta hoy.',
      polBio:
        'Pol F. Ryan es una figura destacada en el mundo del country line dance. Es conocido por diseñar y coreografiar numerosas coreografías de line dance que se bailan en festivales, talleres y clases de country de todo el continente.',
    },
    location: {
      mapAlt: 'Mapa de la ubicación en Barcelona',
    },
    final: {
      title: '¡NO TE LO PIERDAS!',
      copy: 'Sé de los primeros en enterarte de todas las novedades de We Like Country.',
      button: 'Apuntarme',
    },
  },
  ca: {
    debugLanguage: "Selector d'idioma per a proves",
    nav: {
      label: 'Principal',
      home: 'Inici',
      about: "Sobre l'esdeveniment",
      stars: 'Estrelles',
      location: 'Ubicació',
      cta: "Apunta-m'hi",
      language: 'Idioma',
    },
    hero: {
      slogan: 'El millor acte country',
      international: 'INTERNACIONAL',
      title: 'A BARCELONA!',
      copyStart: 'Música en directe, ball, espectacles western i autèntic esperit country arriben a ',
      city: 'Barcelona',
      copyMiddle: ' en un esdeveniment ',
      internationalWord: 'internacional',
      copyEnd: '. Un esdeveniment únic on el country es viu, es balla i se sent.',
    },
    galleryAria: "Galeria de l'esdeveniment",
    heroPhotos: [
      "Grup d'artistes country sobre un escenari",
      'Persones ballant country line dance',
      "Grup country ballant a l'aire lliure",
      'Concert country amb llums càlides',
      'Ballarins country amb banderes en una sala',
    ],
    signup: {
      title: "Mantén-te informat de l'esdeveniment",
      copy: "Deixa'ns el teu email i no et perdis cap novetat",
      button: 'Vull estar informat',
      email: 'Email',
    },
    about: {
      title: "Sobre l'esdeveniment",
      copy:
        "We Like Country és una experiència completa per als amants del country i del western. Un esdeveniment on s'uneixen la música en directe, el ball, els espectacles i la comunitat country internacional.",
      eyebrow: "Durant l'esdeveniment podràs gaudir de:",
    },
    eventCards: [
      {
        alt: 'Concert country en directe',
        label: 'Actuacions country en directe',
      },
      {
        alt: 'Pista amb persones ballant country',
        label: 'Grans pistes per ballar country',
      },
      {
        alt: 'Decoració western amb calavera i barril',
        label: 'Espectacles i ambientació western',
      },
    ],
    stars: {
      eyebrow: "Estrelles de l'esdeveniment!",
      copy:
        "We Like Country comptarà amb la presència de dos referents del country actual, artistes que faran vibrar l'escenari principal amb música en directe i autèntic esperit western.",
      davidBio:
        "Coreògraf i referent del country al nostre país, amb més de 29 anys d'experiència. Ha estat un dels grans precursors del moviment country aquí, impulsant-ne el creixement i l'evolució des dels seus inicis fins avui.",
      polBio:
        'Pol F. Ryan és una figura destacada en el món del country line dance. És conegut per dissenyar i coreografiar nombroses coreografies de line dance que es ballen en festivals, tallers i classes de country de tot el continent.',
    },
    location: {
      mapAlt: 'Mapa de la ubicació a Barcelona',
    },
    final: {
      title: "NO T'HO PERDIS!",
      copy: 'Sigues dels primers a assabentar-te de totes les novetats de We Like Country.',
      button: "Apunta-m'hi",
    },
  },
  fr: {
    debugLanguage: 'Sélecteur de langue de test',
    nav: {
      label: 'Principal',
      home: 'Accueil',
      about: "À propos de l'événement",
      stars: 'Artistes',
      location: 'Lieu',
      cta: "M'inscrire",
      language: 'Langue',
    },
    hero: {
      slogan: 'Le meilleur show country',
      international: 'INTERNATIONAL',
      title: 'À BARCELONE !',
      copyStart:
        'Musique live, danse, spectacles western et véritable esprit country arrivent à ',
      city: 'Barcelone',
      copyMiddle: ' pour un événement ',
      internationalWord: 'international',
      copyEnd: '. Un événement unique où la country se vit, se danse et se ressent.',
    },
    galleryAria: "Galerie de l'événement",
    heroPhotos: [
      'Groupe d’artistes country sur scène',
      'Personnes dansant la country line dance',
      'Groupe country dansant en plein air',
      'Concert country aux lumières chaleureuses',
      'Danseurs country avec des drapeaux dans une salle',
    ],
    signup: {
      title: "Restez informé de l'événement",
      copy: 'Laissez-nous votre email et ne manquez aucune nouveauté',
      button: 'Je veux être informé',
      email: 'Email',
    },
    about: {
      title: "À propos de l'événement",
      copy:
        'We Like Country est une expérience complète pour les amoureux de la country et du western. Un événement où se réunissent musique live, danse, spectacles et communauté country internationale.',
      eyebrow: "Pendant l'événement, vous pourrez profiter de :",
    },
    eventCards: [
      {
        alt: 'Concert country en live',
        label: 'Concerts country en live',
      },
      {
        alt: 'Piste avec des personnes dansant la country',
        label: 'Grandes pistes pour danser la country',
      },
      {
        alt: 'Décoration western avec crâne et tonneau',
        label: 'Spectacles et ambiance western',
      },
    ],
    stars: {
      eyebrow: "Les artistes de l'événement !",
      copy:
        'We Like Country accueillera deux références de la country actuelle, des artistes qui feront vibrer la scène principale avec de la musique live et un authentique esprit western.',
      davidBio:
        "Chorégraphe et référence de la country dans notre pays, avec plus de 29 ans d'expérience. Il a été l'un des grands précurseurs du mouvement country ici, en accompagnant sa croissance et son évolution depuis ses débuts jusqu'à aujourd'hui.",
      polBio:
        'Pol F. Ryan est une figure majeure du monde de la country line dance. Il est connu pour créer et chorégraphier de nombreuses danses en ligne pratiquées dans des festivals, ateliers et cours de country dans tout le continent.',
    },
    location: {
      mapAlt: "Carte de l'emplacement à Barcelone",
    },
    final: {
      title: 'NE LE MANQUEZ PAS !',
      copy: 'Soyez parmi les premiers à découvrir toutes les nouveautés de We Like Country.',
      button: "M'inscrire",
    },
  },
  it: {
    debugLanguage: 'Selettore lingua per test',
    nav: {
      label: 'Principale',
      home: 'Inizio',
      about: "Sull'evento",
      stars: 'Artisti',
      location: 'Luogo',
      cta: 'Iscrivimi',
      language: 'Lingua',
    },
    hero: {
      slogan: 'Il miglior evento country',
      international: 'INTERNAZIONALE',
      title: 'A BARCELLONA!',
      copyStart: 'Musica dal vivo, ballo, spettacoli western e autentico spirito country arrivano a ',
      city: 'Barcellona',
      copyMiddle: ' per un evento ',
      internationalWord: 'internazionale',
      copyEnd: '. Un evento unico dove il country si vive, si balla e si sente.',
    },
    galleryAria: "Galleria dell'evento",
    heroPhotos: [
      'Gruppo di artisti country su un palco',
      'Persone che ballano country line dance',
      "Gruppo country che balla all'aperto",
      'Concerto country con luci calde',
      'Ballerini country con bandiere in una sala',
    ],
    signup: {
      title: "Rimani informato sull'evento",
      copy: 'Lasciaci la tua email e non perderti nessuna novità',
      button: 'Voglio restare informato',
      email: 'Email',
    },
    about: {
      title: "Sull'evento",
      copy:
        "We Like Country è un'esperienza completa per gli amanti del country e del western. Un evento dove si uniscono musica dal vivo, ballo, spettacoli e la comunità country internazionale.",
      eyebrow: "Durante l'evento potrai goderti:",
    },
    eventCards: [
      {
        alt: 'Concerto country dal vivo',
        label: 'Esibizioni country dal vivo',
      },
      {
        alt: 'Pista con persone che ballano country',
        label: 'Grandi piste per ballare country',
      },
      {
        alt: 'Decorazione western con teschio e barile',
        label: 'Spettacoli e atmosfera western',
      },
    ],
    stars: {
      eyebrow: "Artisti dell'evento!",
      copy:
        'We Like Country avrà la presenza di due riferimenti del country attuale, artisti che faranno vibrare il palco principale con musica dal vivo e autentico spirito western.',
      davidBio:
        "Coreografo e punto di riferimento del country nel nostro paese, con più di 29 anni di esperienza. È stato uno dei grandi precursori del movimento country qui, promuovendone la crescita e l'evoluzione dagli inizi fino a oggi.",
      polBio:
        'Pol F. Ryan è una figura di spicco nel mondo della country line dance. È conosciuto per disegnare e coreografare numerose coreografie di line dance ballate in festival, workshop e lezioni di country in tutto il continente.',
    },
    location: {
      mapAlt: 'Mappa della posizione a Barcellona',
    },
    final: {
      title: 'NON PERDERTELO!',
      copy: 'Sii tra i primi a scoprire tutte le novità di We Like Country.',
      button: 'Iscrivimi',
    },
  },
  en: {
    debugLanguage: 'Debug language selector',
    nav: {
      label: 'Main',
      home: 'Home',
      about: 'About the event',
      stars: 'Stars',
      location: 'Location',
      cta: 'Sign up',
      language: 'Language',
    },
    hero: {
      slogan: 'The best country event',
      international: 'INTERNATIONAL',
      title: 'IN BARCELONA!',
      copyStart: 'Live music, dancing, western shows and true country spirit arrive in ',
      city: 'Barcelona',
      copyMiddle: ' for an ',
      internationalWord: 'international',
      copyEnd: ' event. A unique event where country is lived, danced and felt.',
    },
    galleryAria: 'Event gallery',
    heroPhotos: [
      'Country artists on stage',
      'People dancing country line dance',
      'Country group dancing outdoors',
      'Country concert with warm lights',
      'Country dancers with flags in a hall',
    ],
    signup: {
      title: 'Stay informed about the event',
      copy: "Leave us your email and don't miss any updates",
      button: 'Keep me informed',
      email: 'Email',
    },
    about: {
      title: 'About the event',
      copy:
        'We Like Country is a complete experience for country and western lovers. An event where live music, dance, shows and the international country community come together.',
      eyebrow: 'During the event you will enjoy:',
    },
    eventCards: [
      {
        alt: 'Live country concert',
        label: 'Live country performances',
      },
      {
        alt: 'Dance floor with people dancing country',
        label: 'Large dance floors for country',
      },
      {
        alt: 'Western decoration with skull and barrel',
        label: 'Western shows and atmosphere',
      },
    ],
    stars: {
      eyebrow: 'Event stars!',
      copy:
        'We Like Country will feature two leading names in today’s country scene, artists who will make the main stage come alive with live music and authentic western spirit.',
      davidBio:
        'A choreographer and country reference in our country, with more than 29 years of experience. He has been one of the great pioneers of the country movement here, driving its growth and evolution from its beginnings to today.',
      polBio:
        'Pol F. Ryan is a standout figure in the world of country line dance. He is known for designing and choreographing many line dance routines performed at festivals, workshops and country classes across the continent.',
    },
    location: {
      mapAlt: 'Map of the Barcelona location',
    },
    final: {
      title: "DON'T MISS IT!",
      copy: 'Be among the first to hear all the latest news from We Like Country.',
      button: 'Sign up',
    },
  },
  de: {
    debugLanguage: 'Debug-Sprachauswahl',
    nav: {
      label: 'Hauptnavigation',
      home: 'Start',
      about: 'Über das Event',
      stars: 'Stars',
      location: 'Standort',
      cta: 'Anmelden',
      language: 'Sprache',
    },
    hero: {
      slogan: 'Das beste Country-Event',
      international: 'INTERNATIONAL',
      title: 'IN BARCELONA!',
      copyStart: 'Live-Musik, Tanz, Western-Shows und echter Country-Spirit kommen nach ',
      city: 'Barcelona',
      copyMiddle: ' zu einem ',
      internationalWord: 'internationalen',
      copyEnd:
        ' Event. Ein einzigartiges Event, bei dem Country gelebt, getanzt und gefühlt wird.',
    },
    galleryAria: 'Eventgalerie',
    heroPhotos: [
      'Country-Künstler auf einer Bühne',
      'Menschen beim Country Line Dance',
      'Country-Gruppe beim Tanzen im Freien',
      'Country-Konzert mit warmem Licht',
      'Country-Tänzer mit Flaggen in einem Saal',
    ],
    signup: {
      title: 'Bleib über das Event informiert',
      copy: 'Hinterlasse uns deine E-Mail und verpasse keine Neuigkeiten',
      button: 'Ich möchte informiert werden',
      email: 'E-Mail',
    },
    about: {
      title: 'Über das Event',
      copy:
        'We Like Country ist ein komplettes Erlebnis für Country- und Western-Fans. Ein Event, bei dem Live-Musik, Tanz, Shows und die internationale Country-Community zusammenkommen.',
      eyebrow: 'Während des Events kannst du erleben:',
    },
    eventCards: [
      {
        alt: 'Live-Country-Konzert',
        label: 'Live-Country-Auftritte',
      },
      {
        alt: 'Tanzfläche mit Menschen beim Country-Tanz',
        label: 'Große Tanzflächen für Country',
      },
      {
        alt: 'Western-Dekoration mit Schädel und Fass',
        label: 'Western-Shows und Atmosphäre',
      },
    ],
    stars: {
      eyebrow: 'Stars des Events!',
      copy:
        'We Like Country präsentiert zwei prägende Namen der aktuellen Country-Szene, Künstler, die die Hauptbühne mit Live-Musik und echtem Western-Spirit zum Beben bringen.',
      davidBio:
        'Choreograf und Country-Referenz in unserem Land, mit mehr als 29 Jahren Erfahrung. Er war einer der großen Wegbereiter der Country-Bewegung hier und hat ihr Wachstum und ihre Entwicklung von den Anfängen bis heute vorangetrieben.',
      polBio:
        'Pol F. Ryan ist eine herausragende Persönlichkeit in der Welt des Country Line Dance. Er ist bekannt dafür, zahlreiche Line-Dance-Choreografien zu entwerfen, die auf Festivals, Workshops und Country-Kursen auf dem ganzen Kontinent getanzt werden.',
    },
    location: {
      mapAlt: 'Karte des Standorts in Barcelona',
    },
    final: {
      title: 'NICHT VERPASSEN!',
      copy: 'Sei einer der Ersten, die alle Neuigkeiten von We Like Country erfahren.',
      button: 'Anmelden',
    },
  },
} as const

function isLanguage(value: string | null | undefined): value is Language {
  return Boolean(value && languageOptions.some((option) => option.code === value))
}

function getCurrentLanguage(): Language {
  if (typeof window !== 'undefined') {
    const queryLanguage = new URLSearchParams(window.location.search).get('lang')?.toLowerCase()

    if (isLanguage(queryLanguage)) {
      return queryLanguage
    }
  }

  if (typeof navigator !== 'undefined') {
    const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language]

    for (const browserLanguage of browserLanguages) {
      const language = browserLanguage.toLowerCase().split('-')[0]

      if (isLanguage(language)) {
        return language
      }
    }
  }

  return 'es'
}

function selectDebugLanguage(language: Language) {
  const url = new URL(window.location.href)
  url.searchParams.set('lang', language)

  if (url.toString() === window.location.href) {
    window.location.reload()
    return
  }

  window.location.assign(url.toString())
}

function ArrowIcon({ size = 'small' }: { size?: 'small' | 'large' }) {
  return (
    <img
      className={`arrow-icon arrow-icon-${size}`}
      src={asset('context-forward-button.png')}
      alt=""
      aria-hidden="true"
    />
  )
}

function SignupForm({
  variant = 'compact',
  buttonText,
  emailLabel,
}: {
  variant?: 'compact' | 'final'
  buttonText: string
  emailLabel: string
}) {
  return (
    <form className={`signup-form signup-form-${variant}`} aria-label={buttonText}>
      <input type="email" aria-label={emailLabel} />
      <button type="button">
        <span>{buttonText}</span>
        <ArrowIcon size={variant === 'final' ? 'large' : 'small'} />
      </button>
    </form>
  )
}

function App() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const currentLanguage = getCurrentLanguage()
  const t = translations[currentLanguage]
  const closeMobileMenu = () => setMobileMenuOpen(false)

  if (typeof document !== 'undefined') {
    document.documentElement.lang = currentLanguage
  }

  return (
    <main className="page-shell">
      <header className={`site-header${isMobileMenuOpen ? ' is-mobile-menu-open' : ''}`}>
        <nav className="site-nav" aria-label={t.nav.label}>
          <a className="mobile-nav-brand" href="#inicio" onClick={closeMobileMenu}>
            WE LIKE COUNTRY
          </a>
          <div className="nav-links">
            <a href="#inicio">{t.nav.home}</a>
            <a href="#evento">{t.nav.about}</a>
            <a href="#estrellas">{t.nav.stars}</a>
            <a href="#ubicacion">{t.nav.location}</a>
          </div>
          <a className="nav-cta" href="#apuntarme">
            <span>{t.nav.cta}</span>
            <ArrowIcon />
          </a>
          <button
            className="mobile-menu-toggle"
            type="button"
            aria-label="Menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
        <details className="language-select" aria-label={t.nav.language}>
          <summary className="language-trigger">
            <img src={asset('context-earth-planet.png')} alt="" aria-hidden="true" />
            <span>{currentLanguage.toUpperCase()}</span>
          </summary>
          <div className="language-menu">
            {languageOptions.map((language) => (
              <button
                className={language.code === currentLanguage ? 'is-active' : undefined}
                type="button"
                aria-pressed={language.code === currentLanguage}
                key={language.code}
                onClick={() => selectDebugLanguage(language.code)}
              >
                {language.label}
              </button>
            ))}
          </div>
        </details>
        <div className="mobile-menu-drawer" id="mobile-menu" aria-hidden={!isMobileMenuOpen}>
          <a href="#inicio" onClick={closeMobileMenu}>
            {t.nav.home}
          </a>
          <a href="#evento" onClick={closeMobileMenu}>
            {t.nav.about}
          </a>
          <a href="#estrellas" onClick={closeMobileMenu}>
            {t.nav.stars}
          </a>
          <a href="#ubicacion" onClick={closeMobileMenu}>
            {t.nav.location}
          </a>
          <a className="mobile-menu-cta" href="#apuntarme" onClick={closeMobileMenu}>
            <span>{t.nav.cta}</span>
            <ArrowIcon />
          </a>
          <div className="mobile-menu-languages" aria-label={t.nav.language}>
            {languageOptions.map((language) => (
              <button
                className={language.code === currentLanguage ? 'is-active' : undefined}
                type="button"
                aria-pressed={language.code === currentLanguage}
                key={language.code}
                onClick={() => selectDebugLanguage(language.code)}
              >
                {language.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section id="inicio" className="hero-section">
        <img
          className="decor decor-branches-left"
          src={asset('context-pngegg-91-6-7-5-4.png')}
          alt=""
        />
        <img
          className="decor decor-branches-right"
          src={asset('context-pngegg-91-6-7-5-4.png')}
          alt=""
        />
        <img className="hero-sign" src={asset('context-chatgpt-image-31-ene-2026.png')} alt="" />
        <img className="hero-sign-mobile" src={asset('tux-board.png')} alt="" />
        <img className="hero-hat-mobile" src={asset('tux-hat.png')} alt="" />
        <div className="brand-mark" aria-label="We Like Country">
          <span>WE LIKE</span>
          <span>COUNTRY</span>
        </div>

        <div className="curved-slogan" aria-label={`${t.hero.slogan} ${t.hero.international}`}>
          <span>{t.hero.slogan}</span>
          <strong>{t.hero.international}</strong>
        </div>

        <h1>{t.hero.title}</h1>
        <p className="hero-copy">
          {t.hero.copyStart}
          <strong>{t.hero.city}</strong>
          {t.hero.copyMiddle}
          <strong>{t.hero.internationalWord}</strong>
          {t.hero.copyEnd}
        </p>

        <img className="decor decor-cactus-hero" src={asset('context-pngegg-78-1-2.png')} alt="" />
        <img className="decor decor-barrel-hero" src={asset('context-pngegg-79-1.png')} alt="" />
      </section>

      <section className="photo-mosaic" aria-label={t.galleryAria}>
        {heroPhotoAssets.map((photo, index) => (
          <img
            key={photo.className}
            className={photo.className}
            src={asset(photo.src)}
            alt={t.heroPhotos[index]}
          />
        ))}
      </section>

      <section className="signup-block" aria-labelledby="signup-title">
        <img
          className="decor decor-car-left"
          src={asset('context-pngegg-2026-02-03t180355-808-1.png')}
          alt=""
        />
        <img className="decor decor-motor-right" src={asset('context-pngegg-3-1.png')} alt="" />
        <p id="signup-title" className="eyebrow">
          {t.signup.title}
        </p>
        <p className="signup-copy">{t.signup.copy}</p>
        <SignupForm buttonText={t.signup.button} emailLabel={t.signup.email} />
      </section>

      <section id="evento" className="about-section">
        <h2>{t.about.title}</h2>
        <p className="section-copy">{t.about.copy}</p>
        <p className="eyebrow">{t.about.eyebrow}</p>
        <div className="event-card-grid">
          {eventCardAssets.map((card, index) => (
            <article className="event-card" key={t.eventCards[index].label}>
              <img src={asset(card.src)} alt={t.eventCards[index].alt} />
              <p>{t.eventCards[index].label}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="estrellas" className="stars-section">
        <div className="artist-set artist-set-pol">
          <img
            className="artist artist-pol"
            src={asset('context-screenshot-2-upscayl.png')}
            alt="Pol F Ryan"
          />
        </div>
        <div className="artist-set artist-set-david">
          <img
            className="artist artist-david"
            src={asset('context-el-gat-amb-botes-country-shop.png')}
            alt="David Villellas"
          />
        </div>
        <div className="stars-copy">
          <p className="stars-eyebrow">{t.stars.eyebrow}</p>
          <h2>
            <span>Pol F Ryan</span>
            <span>David Villellas</span>
          </h2>
          <p className="section-copy">{t.stars.copy}</p>
        </div>

        <div className="mobile-stars-layout">
          <article className="mobile-artist-card mobile-artist-card-pol">
            <div className="mobile-artist-portrait">
              <img
                className="mobile-artist-image mobile-artist-image-pol"
                src={asset('context-screenshot-2-upscayl.png')}
                alt="Pol F Ryan"
              />
              <img
                className="mobile-belt mobile-belt-pol"
                src={asset('tux-belt-1.png')}
                alt=""
              />
            </div>
            <div className="mobile-artist-text mobile-artist-text-pol">
              <h3>Pol F Ryan</h3>
              <p>{t.stars.polBio}</p>
            </div>
          </article>

          <article className="mobile-artist-card mobile-artist-card-david">
            <div className="mobile-artist-portrait">
              <img
                className="mobile-artist-image mobile-artist-image-david"
                src={asset('context-el-gat-amb-botes-country-shop.png')}
                alt="David Villellas"
              />
              <img
                className="mobile-belt mobile-belt-david"
                src={asset('tux-belt-2.png')}
                alt=""
              />
            </div>
            <div className="mobile-artist-text mobile-artist-text-david">
              <h3>David Villellas</h3>
              <p>{t.stars.davidBio}</p>
            </div>
          </article>
        </div>

        <article className="artist-bio artist-bio-david">
          <h3>David Villellas</h3>
          <p>{t.stars.davidBio}</p>
        </article>

        <article className="artist-bio artist-bio-pol">
          <h3>Pol F Ryan</h3>
          <p>{t.stars.polBio}</p>
        </article>

        <img className="decor belt belt-left" src={asset('context-gemini-generated-image-strip.png')} alt="" />
        <img className="decor belt belt-right" src={asset('context-gemini-generated-image-strip.png')} alt="" />
      </section>

      <section id="ubicacion" className="location-section">
        <img className="decor leaf-left" src={asset('context-pngegg-95-3-4.png')} alt="" />
        <h2>{t.hero.title}</h2>
        <div className="map-frame">
          <img src={asset('context-rectangle-13-map.png')} alt={t.location.mapAlt} />
        </div>
        <img
          className="decor decor-car-map"
          src={asset('context-pngegg-2026-02-03t180355-808-1.png')}
          alt=""
        />
      </section>

      <section id="apuntarme" className="final-section">
        <img className="decor final-top" src={asset('context-pngegg-2026-02-03t180349-522-1.png')} alt="" />
        <h2>{t.final.title}</h2>
        <p>{t.final.copy}</p>
        <SignupForm variant="final" buttonText={t.final.button} emailLabel={t.signup.email} />
        <img className="decor final-cactus" src={asset('context-pngegg-78-1-2.png')} alt="" />
        <img className="decor final-leaf" src={asset('context-pngegg-95-3-4.png')} alt="" />
        <img className="final-beer" src={asset('context-pngegg-88-1.png')} alt="" />
      </section>
    </main>
  )
}

export default App
