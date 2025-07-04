"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Header.module.css"

export default function Header({ scrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${mounted ? styles.mounted : ""}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <Image src="/yma_logo.png" alt="YMA India Logo" width={60} height={60} />
        </Link>

        <button
          className={`${styles.menuButton} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={styles.menuIcon}></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/blog" className={styles.navLink} onClick={closeMenu}>
                Blog
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about" className={styles.navLink} onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/team" className={styles.navLink} onClick={closeMenu}>
                Team
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact" className={styles.navLink} onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
