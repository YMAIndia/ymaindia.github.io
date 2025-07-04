"use client"

import { useState, useEffect } from "react"
import Head from "next/head"
import Image from "next/image"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { marked } from "marked"
import TitleSection from "../components/TitleSection"
import CallToAction from "../components/CallToAction"
import styles from "../styles/About.module.css"

export default function AboutPage({ content }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    // Add intersection observer for content sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(`.${styles.animateOnScroll}`).forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <TitleSection title="About YMA India" subtitle="Empowering the next generation of healthcare leaders" />
      <div className={styles.container}>
        <Head>
          <title>About Us | YMA India</title>
          <meta
            name="description"
            content="Learn about the Youth Medical Association India, our mission, vision, and impact"
          />
        </Head>

        <div className={`${styles.contentWrapper} ${isVisible ? styles.visible : ""}`}>
          <div
            className={`${styles.content} ${styles.animateOnScroll}`}
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          />

          <section className={`${styles.section} ${styles.animateOnScroll}`}>
            <h2>Our Mission</h2>
            <div className={styles.missionContent}>
              <div className={styles.missionText}>
                <p>
                  The Youth Medical Association India is dedicated to empowering young medical professionals through
                  education, mentorship, and community service opportunities.
                </p>
                <p>
                  We strive to bridge the gap between medical education and practical healthcare challenges, preparing the
                  next generation of healthcare leaders to address India's unique medical needs.
                </p>
              </div>
              <div className={styles.missionImageContainer}>
                <div className={styles.glassMorphCard}>
                  <Image
                    src="/yma_team.png"
                    alt="YMA India Mission"
                    width={600}
                    height={400}
                    className={styles.missionImage}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.animateOnScroll}`}>
            <h2>Key Initiatives</h2>
            <div className={styles.initiativesGrid}>
              <div className={styles.initiativeCard}>
                <div className={styles.initiativeIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <h3>Medical Education</h3>
                <p>
                  Workshops, seminars, and training programs designed to supplement formal medical education with
                  practical skills.
                </p>
              </div>
              <div className={styles.initiativeCard}>
                <div className={styles.initiativeIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3>Mentorship Program</h3>
                <p>
                  Connecting medical students with experienced professionals for guidance, advice, and career development.
                </p>
              </div>
              <div className={styles.initiativeCard}>
                <div className={styles.initiativeIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <h3>Community Outreach</h3>
                <p>Medical camps, health awareness campaigns, and volunteer opportunities in underserved communities.</p>
              </div>
              <div className={styles.initiativeCard}>
                <div className={styles.initiativeIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>
                <h3>Research Opportunities</h3>
                <p>Supporting young researchers through grants, collaborations, and publication assistance.</p>
              </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.impactSection} ${styles.animateOnScroll}`}>
            <h2>Our Impact</h2>
            <div className={styles.impactStats}>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>5000+</span>
                <span className={styles.statLabel}>Students Reached</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>200+</span>
                <span className={styles.statLabel}>Medical Camps</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Partner Institutions</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>20+</span>
                <span className={styles.statLabel}>Research Publications</span>
              </div>
            </div>
          </section>
        </div>

        <CallToAction
          title="Join Our Mission"
          description="Become part of YMA India and help shape the future of healthcare in our country."
          buttonText="Volunteer With Us"
          buttonLink="/contact"
        />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const markdownWithMeta = fs.readFileSync(path.join("content/pages", "about.md"), "utf-8")

  const { content } = matter(markdownWithMeta)

  return {
    props: {
      content,
    },
  }
}
