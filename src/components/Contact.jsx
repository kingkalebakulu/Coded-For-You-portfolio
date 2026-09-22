import { motion } from 'framer-motion'
import { MessageCircle, Mail } from 'lucide-react'
import styles from './Contact.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.gridLines} aria-hidden="true" />

      <motion.div
        className={styles.glow}
        aria-hidden="true"
        animate={{ x: [0, 24, 0], y: [0, -18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={styles.glowSecondary}
        aria-hidden="true"
        animate={{ x: [0, -20, 0], y: [0, 16, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.p
        className={styles.eyebrow}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        Contact
      </motion.p>

      <motion.div
        className={styles.bubble}
        initial={{ opacity: 0, scale: 0.8, y: 24, rotate: -2 }}
        whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ type: 'spring', stiffness: 180, damping: 16 }}
      >
        <motion.div
          className={styles.bubbleBreathe}
          animate={{ scale: [1, 1.012, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
        <motion.h2
          className={styles.heading}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1 }}
        >
          Let's build something worth shipping.
        </motion.h2>

        <motion.p
          className={styles.subtext}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.18 }}
        >
          Tell me what you're trying to build. I'll reply fast with next steps.
        </motion.p>

        <motion.div
          className={styles.ctaRow}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.28 }}
        >
          <a
            href="https://wa.me/27849057756"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryCta}
          >
            <span>WhatsApp me</span>
            <MessageCircle size={18} />
          </a>

          <a href="mailto:codedfouryou@gmail.com" className={styles.secondaryCta}>
            <span>Email me</span>
            <Mail size={16} />
          </a>
        </motion.div>

        </motion.div>

        <span className={styles.bubbleTail} aria-hidden="true" />
        <span className={styles.bubbleDot1} aria-hidden="true" />
        <span className={styles.bubbleDot2} aria-hidden="true" />
      </motion.div>
    </section>
  )
}