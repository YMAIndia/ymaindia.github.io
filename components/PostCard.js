"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "../styles/PostCard.module.css"

export default function PostCard({ post, animationDelay = 0 }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, animationDelay * 1000)

    return () => clearTimeout(timer)
  }, [animationDelay])

  // Format date
  const formattedDate = new Date(post.frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Link href={`/blog/${post.slug}`} className={`${styles.card} ${isVisible ? styles.visible : ""}`}>
      <div className={styles.imageContainer}>
        {post.frontmatter.featured_image && (
          <Image
            src={post.frontmatter.featured_image || "/placeholder.svg"}
            alt={post.frontmatter.title}
            width={600}
            height={400}
            className={styles.image}
          />
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.date}>{formattedDate}</span>
          {post.frontmatter.author && <span className={styles.author}>By {post.frontmatter.author}</span>}
        </div>
        <h3 className={styles.title}>{post.frontmatter.title}</h3>
        {post.frontmatter.excerpt && <p className={styles.excerpt}>{post.frontmatter.excerpt}</p>}
        <div className={styles.readMore}>
          Read Article
          <span className={styles.arrow}>→</span>
        </div>
      </div>
    </Link>
  )
}
