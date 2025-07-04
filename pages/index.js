"use client"

import { useState, useEffect } from "react"
import Head from "next/head"
import Link from "next/link"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { sortByDate } from "../utils"
import Hero from "../components/Hero"
import PostCard from "../components/PostCard"
import AboutPreview from "../components/AboutPreview"
import CallToAction from "../components/CallToAction"
import styles from "../styles/Home.module.css"

export default function Home({ posts }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>YMA India - Youth Medical Association</title>
        <meta name="description" content="Youth Medical Association India - Empowering young medical professionals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero
        title="Empowering Young Medical Professionals."
        subtitle="Join the Youth Medical Association India in our mission to support and develop the next generation of healthcare leaders"
        ctaText="Read Our Blog"
        ctaLink="/blog"
      />

      <AboutPreview />

      <section className={`${styles.recentPosts} ${isVisible ? styles.visible : ""}`}>
        <div className={styles.sectionHeader}>
          <h2>Latest Articles</h2>
          <div className={styles.headerLine}></div>
        </div>

        <div className={styles.postsGrid}>
          {posts.map((post, index) => (
            <PostCard key={index} post={post} animationDelay={index * 0.1} />
          ))}
        </div>

        <div className={styles.viewAllWrapper}>
          <Link href="/blog" className={styles.viewAllLink}>
            View All Blog Posts
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </section>

      <CallToAction
        title="Ready to Make a Difference?"
        description="Join YMA India and be part of a community dedicated to advancing healthcare through youth empowerment."
        buttonText="Get Involved"
        buttonLink="/contact"
      />
    </div>
  )
}

export async function getStaticProps() {
  // Get files from the posts directory
  const files = fs.readdirSync(path.join("content/posts"))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "")

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join("content/posts", filename), "utf-8")

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate).slice(0, 4),
    },
  }
}
