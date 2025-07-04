"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import styles from "../styles/Hero.module.css"

export default function Hero({ title, subtitle, ctaText, ctaLink }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className={`${styles.hero} ${isVisible ? styles.visible : ""}`}>
      <div className={styles.meshGradient}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        {ctaText && ctaLink && (
          <Link href={ctaLink} className={styles.cta}>
            {ctaText}
            <span className={styles.arrow}>→</span>
          </Link>
        )}
      </div>
    </section>
  )
}
