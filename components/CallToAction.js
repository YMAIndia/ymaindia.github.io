"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import styles from "../styles/CallToAction.module.css"

export default function CallToAction({ title, description, buttonText, buttonLink }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(document.querySelector(`.${styles.cta}`))

    return () => observer.disconnect()
  }, [])

  return (
    <section className={`${styles.cta} ${isVisible ? styles.visible : ""}`}>
      <div className={styles.meshGradient}></div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <Link href={buttonLink} className={styles.button}>
          {buttonText}
          <span className={styles.arrow}>→</span>
        </Link>
      </div>
    </section>
  )
}
