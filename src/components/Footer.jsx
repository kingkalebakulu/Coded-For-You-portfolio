import { motion } from 'framer-motion'
import { Mail, MessageCircle, ArrowUpRight } from 'lucide-react'
import styles from './Footer.module.css'
import brandLogo from '../assets/logo.png'

const navLinks = [
  { label: 'Home', href: '/#hero' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Process', href: '/#process' },
  { label: 'Contact', href: '/#contact' },
]

const socialLinks = [
  { label: 'Email', href: 'mailto:codedfouryou@gmail.com', icon: Mail, external: false, accent: '#ef4444' },
  { label: 'WhatsApp', href: 'https://wa.me/27849057756', icon: MessageCircle, external: true, accent: '#25d366' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Footer() {
  return (
    <motion.footer
      className={styles.footer}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.top}>
        <a href="/#hero" className={styles.brand}>
          <img src={brandLogo} alt="" className={styles.brandLogo} />
          <span>CODED FOR YOU</span>
        </a>

        <a
          href="https://wa.me/27849057756"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaLink}
        >
          <span>Start a project</span>
          <ArrowUpRight size={16} />
        </a>
      </div>

      <div className={styles.divider} />

      <div className={styles.bottom}>
        <nav className={styles.navLinks}>
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className={styles.navLink}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className={styles.socials}>
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.external ? '_blank' : undefined}
              rel={s.external ? 'noopener noreferrer' : undefined}
              aria-label={s.label}
              className={styles.socialIcon}
              style={{ '--accent': s.accent }}
            >
              <s.icon size={18} strokeWidth={1.75} />
            </a>
          ))}
        </div>
      </div>

      <p className={styles.copyright}>
        © {new Date().getFullYear()} Coded For You. Built by Kaleb Akulu.
      </p>
    </motion.footer>
  )
}