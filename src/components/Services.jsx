import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import styles from './Services.module.css'
import services from '../data/services'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.headRow}>
        <div>
          <motion.p
            className={styles.eyebrow}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            Services
          </motion.p>

          <motion.h2
            className={styles.heading}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.08 }}
          >
            Take your pick.
          </motion.h2>

          <motion.p
            className={styles.subtext}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.12 }}
          >
            A focused set of services covering everything from initial build to ongoing growth. Select any one below for a full breakdown of scope, process, and deliverables.
          </motion.p>
        </div>

        <motion.p
          className={styles.headNote}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.15 }}
        >
          Five things I do well. Tap any one to see how it works.
        </motion.p>
      </div>

      <div className={styles.list}>
        {services.map((s, i) => (
          <motion.div
            key={s.slug}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.2 + i * 0.06 }}
          >
            <Link to={`/services/${s.slug}`} className={styles.row} style={{ '--shade': s.shade }}>
              <span className={styles.rowSweep} aria-hidden="true" />

              <span className={styles.rowIndex}>{String(i + 1).padStart(2, '0')}</span>

              <span className={styles.rowIcon}>
                <s.icon size={18} strokeWidth={1.75} />
              </span>

              <span className={styles.rowTitle}>{s.title}</span>

              <span className={styles.rowTagline}>{s.tagline}</span>

              <span className={styles.rowArrow}>
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}