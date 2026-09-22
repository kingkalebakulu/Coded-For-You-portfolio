import { motion } from 'framer-motion'
import styles from './AboutMe.module.css'
import workPhoto2 from '../assets/work-2.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function AboutMe() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.shapeTopLeft} aria-hidden="true" />
      <div className={styles.shapeBottomRight} aria-hidden="true" />
      <motion.div
        className={styles.frameCol}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className={styles.imageFrame}>
          <img
            src={workPhoto2}
            alt="Moody nighttime desk workspace"
            className={styles.frameImg}
          />
        </div>
      </motion.div>

      <motion.div
        className={styles.copyCol}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.15 }}
      >
        <p className={styles.eyebrow}>About</p>
        <h2 className={styles.heading}>Started coding at 15. Still just as obsessed.</h2>
        <p className={styles.body}>
          I&#8217;m Kaleb Akulu, 18. Built my first website at 14 because I
          didn&#8217;t want to pay someone else to do it — turned out I
          liked building more than I liked saving the money. By 16 I was
          taking on real client work between classes, learning fast,
          breaking things faster, and fixing them faster than that. No
          bootcamp, no degree — just thousands of hours, a refusal to ship
          anything half-finished, and an eye for detail most people twice
          my age don&#8217;t bother with. I run this like a real business:
          clear communication, real deadlines, work I&#8217;d put my own
          name on without flinching. Still early in my career — that&#8217;s
          exactly why you get someone hungry enough to actually earn it.
        </p>
      </motion.div>
    </section>
  )
}