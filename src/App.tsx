import './App.css'

const asset = (name: string) => `/figma-assets/${name}`

const heroPhotos = [
  {
    src: 'context-rectangle-7.png',
    alt: 'Grupo de artistas country sobre un escenario',
    className: 'mosaic-wide-top',
  },
  {
    src: 'context-rectangle-11.png',
    alt: 'Personas bailando country line dance',
    className: 'mosaic-wide-bottom',
  },
  {
    src: 'context-rectangle-8.png',
    alt: 'Grupo country bailando al aire libre',
    className: 'mosaic-mid-top',
  },
  {
    src: 'context-rectangle-12.png',
    alt: 'Concierto country con luces cálidas',
    className: 'mosaic-mid-bottom',
  },
  {
    src: 'context-rectangle-10.png',
    alt: 'Bailarines country con banderas en una sala',
    className: 'mosaic-tall',
  },
]

const eventCards = [
  {
    src: 'context-rectangle-18.png',
    alt: 'Concierto country en directo',
    label: 'Actuaciones country en directo',
  },
  {
    src: 'context-rectangle-19.png',
    alt: 'Pista con personas bailando country',
    label: 'Grandes pistas para bailar country',
  },
  {
    src: 'context-rectangle-20.png',
    alt: 'Decoración western con calavera y barril',
    label: 'Espectáculos y ambientación western',
  },
]

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
}: {
  variant?: 'compact' | 'final'
  buttonText: string
}) {
  return (
    <form className={`signup-form signup-form-${variant}`} aria-label={buttonText}>
      <input type="email" aria-label="Email" />
      <button type="button">
        <span>{buttonText}</span>
        <ArrowIcon size={variant === 'final' ? 'large' : 'small'} />
      </button>
    </form>
  )
}

function App() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <nav className="site-nav" aria-label="Principal">
          <a href="#inicio">Inicio</a>
          <a href="#evento">Sobre el evento</a>
          <a href="#estrellas">Estrellas</a>
          <a href="#ubicacion">Ubicación</a>
          <a className="nav-cta" href="#apuntarme">
            <span>Apuntarme</span>
            <ArrowIcon />
          </a>
        </nav>
        <div className="language-select" aria-label="Idioma">
          <img src={asset('context-earth-planet.png')} alt="" aria-hidden="true" />
          <span>ES</span>
          <img src={asset('context-vector-1.svg')} alt="" aria-hidden="true" />
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
        <div className="brand-mark" aria-label="We Like Country">
          <span>WE LIKE</span>
          <span>COUNTRY</span>
        </div>

        <div className="curved-slogan" aria-label="El mejor evento country internacional">
          <span>El mejor evento country</span>
          <strong>INTERNACIONAL</strong>
        </div>

        <h1>¡En BARCELONA!</h1>
        <p className="hero-copy">
          Música en directo, baile, espectáculos western y auténtico espíritu country llegan a{' '}
          <strong>Barcelona</strong> en un evento <strong>internacional</strong>. Un evento único
          donde el country se vive, se baila y se siente.
        </p>

        <img className="decor decor-cactus-hero" src={asset('context-pngegg-78-1-2.png')} alt="" />
        <img className="decor decor-barrel-hero" src={asset('context-pngegg-79-1.png')} alt="" />
      </section>

      <section className="photo-mosaic" aria-label="Galería del evento">
        {heroPhotos.map((photo) => (
          <img
            key={photo.className}
            className={photo.className}
            src={asset(photo.src)}
            alt={photo.alt}
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
          Mantente informado del evento
        </p>
        <p className="signup-copy">Déjanos tu email y no te pierdas ninguna novedad</p>
        <SignupForm buttonText="Quiero estar informado" />
      </section>

      <section id="evento" className="about-section">
        <h2>Sobre el evento</h2>
        <p className="section-copy">
          We Like Country es una experiencia completa para amantes del country y del western. Un
          evento donde se unen la música en directo, el baile, los espectáculos y la comunidad
          country internacional.
        </p>
        <p className="eyebrow">Durante el evento podrás disfrutar de:</p>
        <div className="event-card-grid">
          {eventCards.map((card) => (
            <article className="event-card" key={card.label}>
              <img src={asset(card.src)} alt={card.alt} />
              <p>{card.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="estrellas" className="stars-section">
        <img
          className="artist artist-pol"
          src={asset('context-screenshot-2-upscayl.png')}
          alt="Pol F Ryan"
        />
        <img
          className="artist artist-david"
          src={asset('context-el-gat-amb-botes-country-shop.png')}
          alt="David Villellas"
        />
        <div className="stars-copy">
          <p className="stars-eyebrow">¡Estrellas del evento!</p>
          <h2>
            <span>Pol F Ryan</span>
            <span>David Villellas</span>
          </h2>
          <p className="section-copy">
            We Like Country contará con la presencia de dos referentes del country actual, artistas
            que harán vibrar el escenario principal con música en directo y auténtico espíritu
            western.
          </p>
        </div>

        <article className="artist-bio artist-bio-david">
          <h3>David Villellas</h3>
          <p>
            Coreógrafo y referente del country en nuestro país, con más de 29 años de experiencia.
            Ha sido uno de los grandes precursores del movimiento country aquí, impulsando su
            crecimiento y evolución desde sus inicios hasta hoy.
          </p>
        </article>

        <article className="artist-bio artist-bio-pol">
          <h3>Pol F Ryan</h3>
          <p>
            Pol F. Ryan es una figura destacada en el mundo del country line dance. Es conocido por
            diseñar y coreografiar numerosas coreografías de line dance que se bailan en festivales,
            talleres y clases de country de todo el continente.
          </p>
        </article>

        <img className="decor belt belt-left" src={asset('context-gemini-generated-image-strip.png')} alt="" />
        <img className="decor belt belt-right" src={asset('context-gemini-generated-image-strip.png')} alt="" />
        <img className="decor leaf-left" src={asset('context-pngegg-95-3-4.png')} alt="" />
      </section>

      <section id="ubicacion" className="location-section">
        <h2>¡En BARCELONA!</h2>
        <div className="map-frame">
          <img src={asset('context-rectangle-13-map.png')} alt="Mapa de la ubicación en Barcelona" />
        </div>
        <img
          className="decor decor-car-map"
          src={asset('context-pngegg-2026-02-03t180355-808-1.png')}
          alt=""
        />
      </section>

      <section id="apuntarme" className="final-section">
        <img className="decor final-top" src={asset('context-pngegg-2026-02-03t180349-522-1.png')} alt="" />
        <h2>¡NO TE LO PIERDAS!</h2>
        <p>Sé de los primeros en enterarte de todas las novedades de We Like Country.</p>
        <SignupForm variant="final" buttonText="Apuntarme" />
        <img className="decor final-cactus" src={asset('context-pngegg-78-1-2.png')} alt="" />
        <img className="decor final-leaf" src={asset('context-pngegg-95-3-4.png')} alt="" />
        <img className="final-beer" src={asset('context-pngegg-88-1.png')} alt="" />
      </section>
    </main>
  )
}

export default App
