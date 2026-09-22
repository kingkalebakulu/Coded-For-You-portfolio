import { motion } from 'framer-motion'
import { MessageSquare, Code2, Rocket, LifeBuoy } from 'lucide-react'
import styles from './Process.module.css'

const steps = [
  {
    icon: MessageSquare,
    title: 'We talk',
    body: 'You tell me what you need, I ask the questions that actually matter, and we agree on scope before anything gets built.',
  },
  {
    icon: Code2,
    title: 'I build',
    body: 'Hand-coded, no templates. You get regular updates so nothing shows up as a surprise at the end.',
  },
  {
    icon: Rocket,
    title: 'You launch',
    body: 'Tested, fast, and live. I handle the deploy so you can just point people to the link.',
  },
  {
    icon: LifeBuoy,
    title: 'I stick around',
    body: "Something needs a tweak a month later? I'm still reachable — not a one-and-done handoff.",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Process() {
  return (
    <section id="process" className={styles.process}>
      <div className={styles.shapeTopLeft} aria-hidden="true" />

      <motion.p
        className={styles.eyebrow}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        How I work
      </motion.p>

      <motion.h2
        className={styles.heading}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ delay: 0.1 }}
      >
        From idea to launch.
      </motion.h2>

      <div className={styles.timeline}>
        <div className={styles.line} aria-hidden="true" />

        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            className={styles.step}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.2 + i * 0.12 }}
          >
            <div className={styles.stepIcon}>
              <s.icon size={22} strokeWidth={1.75} />
            </div>
            <span className={styles.stepIndex}>{String(i + 1).padStart(2, '0')}</span>
            <h3 className={styles.stepTitle}>{s.title}</h3>
            <p className={styles.stepBody}>{s.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}