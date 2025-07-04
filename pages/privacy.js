"use client"

import { useState, useEffect } from "react"
import Head from "next/head"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { marked } from "marked"
import TitleSection from "../components/TitleSection"
import styles from "../styles/Privacy.module.css"

export default function PrivacyPage({ content }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <TitleSection title="Privacy Policy" subtitle="How we handle your information" />
      <div className={styles.container}>
        <Head>
          <title>Privacy Policy | YMA India</title>
          <meta name="description" content="Privacy Policy for Youth Medical Association India" />
        </Head>

        <div className={`${styles.contentWrapper} ${isVisible ? styles.visible : ""}`}>
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: marked(content) }} />
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const markdownWithMeta = fs.readFileSync(path.join("content/pages", "privacy.md"), "utf-8")

  const { content } = matter(markdownWithMeta)

  return {
    props: {
      content,
    },
  }
}
