import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu, ArrowUpRight } from 'lucide-react'
import styles from './Navbar.module.css'

// Imports your local asset brand logo icon
import brandLogo from '../assets/logo.png'

// Shared nav links — same set on desktop and mobile
const navLinks = [
  { label: 'Home', href: '/#hero' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Process', href: '/#process' },
  { label: 'Contact', href: '/#contact' },
]

// Splits the brand name so each word can be hovered independently
const BrandName = ({ text }) => {
  const words = text.split(' ')
  return (
    <span>
      {words.map((word, i) => (
        <span key={i} className={styles.logoWord}>
          {word}
          {i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </span>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* WRAPPER NAVIGATION CONTAINER */}
      <nav className={`${styles.navWrapper} ${scrolled ? styles.scrolled : ''}`}>
        
        {/* DESKTOP FLOATING PILL DOCK (Visible on Desktop) */}
        <motion.div 
          className={styles.desktopPillDock}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logo & Brand Name */}
          <a href="/#hero" className={styles.logoWrapper}>
            <motion.img
              src={brandLogo}
              alt="Studio Logo"
              className={styles.logoImg}
              whileHover={{ scale: 1.08, rotate: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            />
            <span className={styles.logoText}><b><BrandName text="CODED FOR YOU" /></b></span>
          </a>

          {/* Precision Vertical Divider Line */}
          <div className={styles.verticalDivider}></div>

          {/* Expanded Inline Navigation Menu Links */}
          <div className={styles.desktopInlineLinks} onMouseLeave={() => setHoveredLink(null)}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.inlineLink}
                onMouseEnter={() => setHoveredLink(link.label)}
              >
                {hoveredLink === link.label && (
                  <motion.span
                    layoutId="navHoverPill"
                    className={styles.hoverPill}
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className={styles.linkLabel}>{link.label}</span>
              </a>
            ))}
          </div>

          {/* High-Contrast WhatsApp Action Pill Button */}
          <motion.a
            href="https://wa.me/27849057756"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.pillCtaBtn}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            Let's build
          </motion.a>
        </motion.div>

        {/* MINI FLOATING PILL DOCK (Visible on Mobile) */}
        <div className={styles.mobileHeaderPill}>
          <a href="/#hero" className={styles.logoWrapper} onClick={() => setOpen(false)}>
            <motion.img
              src={brandLogo}
              alt="Studio Logo"
              className={styles.logoImg}
              whileTap={{ scale: 1.1, rotate: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            />
            <span className={styles.logoText}><b><BrandName text="CODED FOR YOU" /></b></span>
          </a>

          {/* Mobile Burger/Close Toggle */}
          <motion.button
            className={styles.burgerBtn}
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.88 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? 'close' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'flex' }}
              >
                {open ? <X size={20} color="#00f5d4" /> : <Menu size={20} color="#ffffff" />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* MOBILE FULLSCREEN DRAWER OVERLAY */}
      <AnimatePresence>
        {open && (
          <>
          <motion.div
            className={styles.scrim}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
          />
          <motion.div
            className={styles.overlayMenu}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className={styles.menuLinks}>
              {navLinks.map((l, i) => (
                <motion.a 
                  key={l.label} 
                  href={l.href} 
                  className={styles.menuLink}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 24 }} 
                  animate={{ opacity: 1, x: 0 }}
                  whileTap={{ scale: 0.97, x: 6 }}
                  transition={{ delay: 0.12 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className={styles.linkIndex}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.linkLabelMobile}>{l.label}</span>
                </motion.a>
              ))}
            </nav>

            <motion.a
              href="https://wa.me/27849057756"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.menuCta}
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              whileTap={{ scale: 0.96 }}
              transition={{ delay: 0.12 + navLinks.length * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <span>Let's build</span>
              <ArrowUpRight size={18} />
            </motion.a>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}