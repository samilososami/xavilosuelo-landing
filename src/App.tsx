import { MotionConfig, motion, useScroll, useTransform } from 'motion/react'
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

const reveal = {
  hidden: { opacity: 0.72, y: 46 },
  visible: { opacity: 1, y: 0 },
}

const revealSoft = {
  hidden: { opacity: 0.78, y: 28 },
  visible: { opacity: 1, y: 0 },
}

const sectionTransition = {
  duration: 0.78,
  ease: [0.16, 1, 0.3, 1],
} as const

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
      <motion.button
        type="button"
        whileHover={{ y: -2, scale: 1.025 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.18 }}
      >
        <span>{buttonText}</span>
        <ArrowIcon size={variant === 'final' ? 'large' : 'small'} />
      </motion.button>
    </form>
  )
}

function App() {
  const { scrollYProgress } = useScroll()
  const heroSignY = useTransform(scrollYProgress, [0, 0.16], [0, 58])
  const cactusY = useTransform(scrollYProgress, [0, 0.22], [0, -60])
  const barrelY = useTransform(scrollYProgress, [0, 0.22], [0, 48])
  const leafY = useTransform(scrollYProgress, [0.45, 0.8], [-60, 90])

  return (
    <MotionConfig reducedMotion="user">
      <main className="page-shell">
      <motion.nav
        className="site-nav"
        aria-label="Principal"
        initial={{ opacity: 1, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.38, ease: 'easeOut' }}
      >
        <a href="#inicio">Inicio</a>
        <a href="#evento">Sobre el evento</a>
        <a href="#estrellas">Estrellas</a>
        <a href="#ubicacion">Ubicación</a>
        <motion.a className="nav-cta" href="#apuntarme" whileHover={{ y: -1, scale: 1.03 }}>
          <span>Apuntarme</span>
          <ArrowIcon />
        </motion.a>
        <div className="language-select" aria-label="Idioma">
          <img src={asset('context-earth-planet.png')} alt="" aria-hidden="true" />
          <span>ES</span>
          <img src={asset('context-vector-1.svg')} alt="" aria-hidden="true" />
        </div>
      </motion.nav>

      <section id="inicio" className="hero-section">
        <motion.img
          className="decor decor-branches-left"
          src={asset('context-pngegg-91-6-7-5-4.png')}
          alt=""
          initial={{ opacity: 0, rotate: 170 }}
          animate={{ opacity: 0.96, rotate: 186 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        />
        <motion.img
          className="decor decor-branches-right"
          src={asset('context-pngegg-91-6-7-5-4.png')}
          alt=""
          initial={{ opacity: 0, scaleX: -1, rotate: 202 }}
          animate={{ opacity: 0.96, scaleX: -1, rotate: 186 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        />
        <motion.img
          className="hero-sign"
          src={asset('context-chatgpt-image-31-ene-2026.png')}
          alt=""
          style={{ y: heroSignY }}
          initial={{ opacity: 0.82, scale: 0.965 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.62, ease: 'easeOut' }}
        />
        <motion.div
          className="brand-mark"
          aria-label="We Like Country"
          initial={{ opacity: 0.88, y: 34, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.58, delay: 0.08, ease: 'easeOut' }}
        >
          <span>WE LIKE</span>
          <span>COUNTRY</span>
        </motion.div>

        <motion.div
          className="curved-slogan"
          aria-label="El mejor evento country internacional"
          initial={{ opacity: 0.9, y: 20, rotate: -7 }}
          animate={{ opacity: 1, y: 0, rotate: -4 }}
          transition={{ duration: 0.52, delay: 0.16, ease: 'easeOut' }}
        >
          <span>El mejor evento country</span>
          <strong>INTERNACIONAL</strong>
        </motion.div>

        <motion.h1 initial={{ opacity: 0.9, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.2 }}>
          ¡En BARCELONA!
        </motion.h1>
        <motion.p
          className="hero-copy"
          initial={{ opacity: 0.88, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.25 }}
        >
          Música en directo, baile, espectáculos western y auténtico espíritu country llegan a{' '}
          <strong>Barcelona</strong> en un evento <strong>internacional</strong>. Un evento único
          donde el country se vive, se baila y se siente.
        </motion.p>

        <motion.img
          className="decor decor-cactus-hero"
          src={asset('context-pngegg-78-1-2.png')}
          alt=""
          style={{ y: cactusY }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.28 }}
        />
        <motion.img
          className="decor decor-barrel-hero"
          src={asset('context-pngegg-79-1.png')}
          alt=""
          style={{ y: barrelY }}
          initial={{ opacity: 0, x: 38 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.38 }}
        />
      </section>

      <motion.section
        className="photo-mosaic"
        aria-label="Galería del evento"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-120px' }}
        transition={sectionTransition}
      >
        {heroPhotos.map((photo, index) => (
          <motion.img
            key={photo.className}
            className={photo.className}
            src={asset(photo.src)}
            alt={photo.alt}
            whileHover={{ y: -6, scale: 1.018 }}
            transition={{ duration: 0.22, delay: index * 0.03 }}
          />
        ))}
      </motion.section>

      <motion.section
        className="signup-block"
        aria-labelledby="signup-title"
        variants={revealSoft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.45 }}
        transition={sectionTransition}
      >
        <img className="decor decor-car-left" src={asset('context-pngegg-2026-02-03t180355-808-1.png')} alt="" />
        <img className="decor decor-motor-right" src={asset('context-pngegg-3-1.png')} alt="" />
        <p id="signup-title" className="eyebrow">
          Mantente informado del evento
        </p>
        <p className="signup-copy">Déjanos tu email y no te pierdas ninguna novedad</p>
        <SignupForm buttonText="Quiero estar informado" />
      </motion.section>

      <motion.section
        id="evento"
        className="about-section"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
        transition={sectionTransition}
      >
        <h2>Sobre el evento</h2>
        <p className="section-copy">
          We Like Country es una experiencia completa para amantes del country y del western. Un
          evento donde se unen la música en directo, el baile, los espectáculos y la comunidad
          country internacional.
        </p>
        <p className="eyebrow">Durante el evento podrás disfrutar de:</p>
        <div className="event-card-grid">
          {eventCards.map((card) => (
            <motion.article className="event-card" key={card.label} whileHover={{ y: -7 }}>
              <img src={asset(card.src)} alt={card.alt} />
              <p>{card.label}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="estrellas"
        className="stars-section"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        transition={sectionTransition}
      >
        <motion.img
          className="artist artist-pol"
          src={asset('context-screenshot-2-upscayl.png')}
          alt="Pol F Ryan"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        <motion.img
          className="artist artist-david"
          src={asset('context-el-gat-amb-botes-country-shop.png')}
          alt="David Villellas"
          initial={{ opacity: 0, x: 70, scaleX: -1 }}
          whileInView={{ opacity: 1, x: 0, scaleX: -1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
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

        <motion.img className="decor belt belt-left" src={asset('context-gemini-generated-image-strip.png')} alt="" />
        <motion.img className="decor belt belt-right" src={asset('context-gemini-generated-image-strip.png')} alt="" />
        <motion.img className="decor leaf-left" src={asset('context-pngegg-95-3-4.png')} alt="" style={{ y: leafY }} />
      </motion.section>

      <motion.section
        id="ubicacion"
        className="location-section"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.28 }}
        transition={sectionTransition}
      >
        <h2>¡En BARCELONA!</h2>
        <motion.div className="map-frame" whileHover={{ scale: 1.012 }}>
          <img src={asset('context-rectangle-13-map.png')} alt="Mapa de la ubicación en Barcelona" />
        </motion.div>
        <img className="decor decor-car-map" src={asset('context-pngegg-2026-02-03t180355-808-1.png')} alt="" />
      </motion.section>

      <motion.section
        id="apuntarme"
        className="final-section"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={sectionTransition}
      >
        <img className="decor final-top" src={asset('context-pngegg-2026-02-03t180349-522-1.png')} alt="" />
        <h2>¡NO TE LO PIERDAS!</h2>
        <p>Sé de los primeros en enterarte de todas las novedades de We Like Country.</p>
        <SignupForm variant="final" buttonText="Apuntarme" />
        <img className="decor final-cactus" src={asset('context-pngegg-78-1-2.png')} alt="" />
        <img className="decor final-leaf" src={asset('context-pngegg-95-3-4.png')} alt="" />
        <img className="final-beer" src={asset('context-pngegg-88-1.png')} alt="" />
      </motion.section>
    </main>
    </MotionConfig>
  )
}

export default App
