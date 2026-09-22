import { useMemo, useRef } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import styles from './Hero.module.css'

// All three sourced from free stock photo sites — none of these is the
// About-section photo anymore, per request. work-2.png (About's photo)
// is left completely untouched in AboutMe.jsx.
const workPhoto1 =
  'https://images.unsplash.com/photo-1754548930550-be9fa88874f4?auto=format&fit=crop&w=900&q=80'
const workPhoto2 =
  'https://images.stockcake.com/public/d/b/5/db516642-add5-45c0-9c0e-820996d2fe32_large/coder-in-darkness-stockcake.jpg'
const workPhoto3 =
  'https://images.stockcake.com/public/a/7/5/a75992bb-621a-498c-999a-2e3b6d9b7b11_large/futuristic-digital-waves-stockcake.jpg'

const headlineLines = [
  [
    { text: 'Coded', accent: 'cyan' },
    { text: 'for', accent: null },
    { text: 'you.', accent: 'silver' },
  ],
  [
    { text: 'Built', accent: 'silver' },
    { text: 'to', accent: null },
    { text: 'break', accent: null },
    { text: 'through.', accent: 'cyan' },
  ],
]

const lineVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
}

const stackCards = [
  { src: workPhoto1, alt: 'Moody multi-monitor coding workspace at night', rotate: -20, x: -130, y: 18, z: 1 },
  { src: workPhoto2, alt: 'Coder working in a dark, moody environment', rotate: 0, x: 0, y: -10, z: 3 },
  { src: workPhoto3, alt: 'Futuristic digital waves in navy, cyan, and purple', rotate: 20, x: 130, y: 18, z: 2 },
]

const accentClass = {
  cyan: styles.accentCyan,
  silver: styles.accentSilver,
}

function generateBubbles() {
  const general = Array.from({ length: 20 }).map((_, i) => ({
    id: `g${i}`,
    left: Math.random() * 100,
    size: 14 + Math.random() * 40,
    duration: 10 + Math.random() * 10,
    delay: -(Math.random() * 20),
    drift: (Math.random() - 0.5) * 70,
    cyan: Math.random() > 0.78,
  }))
  const cluster = Array.from({ length: 12 }).map((_, i) => ({
    id: `c${i}`,
    left: Math.random() * 52,
    size: 10 + Math.random() * 26,
    duration: 8 + Math.random() * 8,
    delay: -(Math.random() * 16),
    drift: (Math.random() - 0.5) * 50,
    cyan: Math.random() > 0.7,
  }))
  return [...general, ...cluster]
}

export default function Hero() {
  const heroRef = useRef(null)
  const bubbles = useMemo(generateBubbles, [])

  const handlePointerMove = (e) => {
    const el = heroRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    el.style.setProperty('--mx', `${x}%`)
    el.style.setProperty('--my', `${y}%`)
  }

  return (
    <section
      id="hero"
      ref={heroRef}
      className={styles.hero}
      onPointerMove={handlePointerMove}
    >
      <div className={styles.ambientGlow} aria-hidden="true" />

      <div className={styles.bubbleField} aria-hidden="true">
        {bubbles.map((b) => (
          <motion.span
            key={b.id}
            className={`${styles.bubble} ${b.cyan ? styles.bubbleCyan : ''}`}
            style={{ left: `${b.left}%`, width: b.size, height: b.size }}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: '-135vh', opacity: [0, 0.85, 0.85, 0], x: [0, b.drift, 0] }}
            transition={{ duration: b.duration, delay: b.delay, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>

      <div className={styles.heroInner}>
        <div className={styles.copyCol}>
          <h1 className={styles.headline}>
            {headlineLines.map((words, i) => (
              <span key={i} className={styles.lineMask}>
                <motion.span
                  className={styles.line}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={lineVariants}
                >
                  {words.map((word, wi) => (
                    <span
                      key={wi}
                      className={word.accent ? accentClass[word.accent] : undefined}
                    >
                      {word.text}
                      {wi < words.length - 1 ? ' ' : ''}
                    </span>
                  ))}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className={styles.subtext}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Need a website — or something in that neighborhood? Send a
            message and let's figure out what you actually need.
          </motion.p>

          <motion.a
            href="https://wa.me/27849057756"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryCta}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.64, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <span>WhatsApp me</span>
            <MessageCircle size={18} />
          </motion.a>
        </div>

        <motion.div
          className={styles.stackCol}
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {stackCards.map((card, i) => (
            <motion.div
              key={i}
              className={styles.imageCard}
              style={{
                rotate: card.rotate,
                x: card.x,
                y: card.y,
                zIndex: card.z,
              }}
              whileHover={{ rotate: 0, scale: 1.06, zIndex: 10 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              <img src={card.src} alt={card.alt} className={styles.cardImg} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}