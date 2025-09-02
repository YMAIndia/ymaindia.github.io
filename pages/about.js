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

  const TEAM = [
    { role: "President", name: "Isha Agarwal", image: "/ia.png" },
    { role: "Vice President", name: "Advita Mahajan", image: "/am.png" },
    { role: "Director of Outreach", name: "Nishtha Hamne", image: null },
    { role: "Event Coordinator", name: "Yash Mittal", image: null },
    { role: "Event Coordinator", name: "Avanish Sule", image: null },
    { role: "Event Coordinator", name: "Janhavi Popat", image: null },
    { role: "Director of Content", name: "Avni Kulkarni", image: null },
    { role: "Social Media", name: "Vidyanshi Mittal", image: "/vm.png" },
    { role: "Social Media", name: "Arrooh Karnani", image: null },
  ]

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
            <h2>Our Core Values</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
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
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3>Passion</h3>
                <p>
                  We believe change begins with genuine care. At YMA India, our members are driven by a passion for healthcare, 
                  for closing gaps in awareness, and for creating opportunities where young people can lead impactful initiatives in their communities.
                </p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
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
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3>Perceive</h3>
                <p>
                  We train ourselves to see the bigger picture and the finer details—whether it's understanding pressing health issues, 
                  recognizing barriers in access, or noticing untapped potential in youth-led solutions.
                </p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
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
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <h3>Pursue</h3>
                <p>
                  Awareness alone is not enough. YMA India turns perception into action—pursuing solutions through outreach, 
                  education, volunteering, and collaborations with medical professionals.
                </p>
              </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.animateOnScroll}`}>
            <h2>Our Programs</h2>
            <div className={styles.programsGrid}>
              <div className={styles.programCard}>
                <div className={styles.programIcon}>
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
                <h3>Digital Learning Platform</h3>
                <p>
                  Online resources, including webinars, case studies, and informative articles, are accessible to members nationwide.
                </p>
              </div>
              <div className={styles.programCard}>
                <div className={styles.programIcon}>
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
                <h3>Mentorship Programs</h3>
                <p>
                  Student-Professional and Peer Mentorship programs connecting students with experienced healthcare professionals and peers.
                </p>
              </div>
              <div className={styles.programCard}>
                <div className={styles.programIcon}>
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
                <p>
                  Health Education Campaigns, Medical Camps, and School Health Programs serving underserved communities.
                </p>
              </div>
              <div className={styles.programCard}>
                <div className={styles.programIcon}>
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
                <h3>Research Support</h3>
                <p>
                  Research Training workshops and seminars on research methodology, statistical analysis, and scientific writing.
                </p>
              </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.impactSection} ${styles.animateOnScroll}`}>
            <h2>Our Impact</h2>
            <div className={styles.impactStats}>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Students & Professionals Reached</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>3</span>
                <span className={styles.statLabel}>Community Volunteer Programs</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>25</span>
                <span className={styles.statLabel}>Partner Institutions</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>₹21K+</span>
                <span className={styles.statLabel}>Funds Raised</span>
              </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.teamSection} ${styles.animateOnScroll}`}>
            <h2>Our Team</h2>
            <div className={styles.teamGrid}>
              {TEAM.map((member, idx) => (
                <div className={styles.teamCard} key={idx}>
                  <div className={styles.teamImageWrapper}>
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className={styles.teamImage}
                        width={120}
                        height={120}
                        style={{ borderRadius: "50%", objectFit: "cover", width: 120, height: 120 }}
                      />
                    ) : (
                      <div 
                        className={styles.teamImage}
                        style={{ 
                          borderRadius: "50%", 
                          width: 120, 
                          height: 120, 
                          background: "var(--background-alt)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "2rem",
                          fontWeight: "bold",
                          color: "var(--primary)"
                        }}
                      >
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>
                  <div className={styles.teamRole}>{member.role}</div>
                  <div className={styles.teamName}>{member.name}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <CallToAction
          title="Join Our Mission"
          description="Become part of YMA India and help shape the future of healthcare in our country."
          buttonText="Get Involved"
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
