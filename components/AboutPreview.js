"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "../styles/AboutPreview.module.css"

export default function AboutPreview() {
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

    observer.observe(document.querySelector(`.${styles.aboutPreview}`))

    return () => observer.disconnect()
  }, [])

  return (
    <section className={`${styles.aboutPreview} ${isVisible ? styles.visible : ""}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>About YMA India</h2>
          <div className={styles.divider}></div>
          <p className={styles.text}>
            The Youth Medical Association India is a dynamic community of young medical professionals, students, and
            enthusiasts dedicated to advancing healthcare education, research, and outreach across India.
          </p>
          <p className={styles.text}>
            Our mission is to bridge the gap between medical education and practical healthcare challenges, preparing
            the next generation of healthcare leaders to address India's unique medical needs.
          </p>
          <Link href="/about" className={styles.learnMore}>
            Learn More About Us
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.glassMorphCard}>
            <Image
              src="/yma_team.png"
              alt="YMA India Team"
              width={600}
              height={400}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
