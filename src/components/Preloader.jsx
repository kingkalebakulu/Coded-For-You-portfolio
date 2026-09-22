import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Preloader.module.css'
import brandLogo from '../assets/logo.png'

const word = 'CODED FOR YOU'

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fixed duration rather than tied to window 'load' — keeps the
    // experience consistent regardless of connection speed, and avoids
    // a jarring instant-skip on fast networks.
    const timer = setTimeout(() => setLoading(false), 1900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className={styles.preloader}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
        >
          <motion.div
            className={styles.inner}
            exit={{ scale: 0.94, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          >
            <motion.img
              src={brandLogo}
              alt=""
              className={styles.logo}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            />

            <h1 className={styles.word} aria-label={word}>
              {word.split('').map((char, i) => (
                <motion.span
                  key={i}
                  className={styles.char}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + i * 0.035, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </h1>

            <div className={styles.barTrack}>
              <motion.div
                className={styles.barFill}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
