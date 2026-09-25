import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Check, MessageCircle } from 'lucide-react'
import Navbar from './Navbar'
import Footer from './Footer'
import services from '../data/services'
import usePageMeta from '../hooks/usePageMeta'
import styles from './ServiceDetail.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const index = services.findIndex((s) => s.slug === slug)
  const service = services[index]

  usePageMeta(service ? service.title : null, service ? service.tagline : null)

  if (!service) {
    return <Navigate to="/" replace />
  }

  const next = services[(index + 1) % services.length]

  const isDark = service.theme === 'dark'
  const themeVars = {
    '--shade': service.shade,
    '--bg': service.bg,
    '--text-strong': isDark ? '#f1f5f9' : 'var(--navy)',
    '--text-soft': isDark ? 'rgba(226, 232, 240, 0.75)' : 'rgba(2, 13, 16, 0.68)',
    '--text-link': isDark ? 'rgba(226, 232, 240, 0.7)' : 'rgba(2, 13, 16, 0.6)',
    '--border-soft': isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(2, 13, 16, 0.1)',
    '--panel-bg': isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(255, 255, 255, 0.55)',
    '--dot-color': isDark ? 'rgba(255, 255, 255, 0.09)' : 'rgba(2, 13, 16, 0.09)',
    '--cta-text': isDark ? 'var(--navy)' : '#ffffff',
    '--glow-opacity': isDark ? '1' : '0.35',
  }

  return (
    <>
      <Navbar />
      <main>
        <section className={styles.detail} style={themeVars}>
          <div className={styles.dotGrid} aria-hidden="true" />
          <div className={styles.glow} aria-hidden="true" />

          <div className={styles.inner}>
            <motion.div initial="hidden" animate="show" variants={fadeUp}>
              <Link to="/#services" className={styles.backLink}>
                <ArrowLeft size={16} />
                <span>Back to services</span>
              </Link>
            </motion.div>

            <div className={styles.layout}>
              <div className={styles.mainCol}>
                <motion.p
                  className={styles.kicker}
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
                  transition={{ delay: 0.08 }}
                >
                  {String(index + 1).padStart(2, '0')} / Service
                </motion.p>

                <motion.div
                  className={styles.iconBadge}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.14, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <service.icon size={26} strokeWidth={1.75} />
                </motion.div>

                <motion.h1
                  className={styles.title}
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
                  transition={{ delay: 0.18 }}
                >
                  {service.title}
                </motion.h1>

                <motion.p
                  className={styles.tagline}
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
                  transition={{ delay: 0.24 }}
                >
                  {service.tagline}
                </motion.p>

                {service.detail.map((paragraph, i) => (
                  <motion.p
                    key={i}
                    className={styles.paragraph}
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    transition={{ delay: 0.3 + i * 0.06 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}

                <motion.a
                  href="https://wa.me/27849057756"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cta}
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
                  transition={{ delay: 0.42 }}
                >
                  <span>Let's talk about it</span>
                  <MessageCircle size={18} />
                </motion.a>
              </div>

              <motion.div
                className={styles.sidePanel}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={styles.sidePanelGlyph}>
                  <service.icon size={40} strokeWidth={1.25} />
                </div>

                <p className={styles.sidePanelLabel}>What's included</p>

                <ul className={styles.deliverables}>
                  {service.deliverables.map((d) => (
                    <li key={d}>
                      <span className={styles.checkIcon}>
                        <Check size={13} strokeWidth={2.5} />
                      </span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          <motion.div
            className={styles.nextRow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link to={`/services/${next.slug}`} className={styles.nextLink}>
              <span className={styles.nextLabel}>Next service</span>
              <span className={styles.nextTitle}>
                {next.title}
                <ArrowRight size={18} />
              </span>
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}