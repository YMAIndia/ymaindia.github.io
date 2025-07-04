"use client"

import { useState, useEffect } from "react"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { marked } from "marked"
import styles from "../../styles/BlogPost.module.css"

export default function PostPage({
  frontmatter: { title, date, author, featured_image, excerpt, tags },
  content,
  slug,
}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    // Add intersection observer for content sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Making visible:", entry.target);
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
  }, [content])

  // Format date
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className={`${styles.container} ${isVisible ? styles.visible : ""}`}>
      <Head>
        <title>{title} | YMA India Blog</title>
        <meta name="description" content={excerpt} />
      </Head>

      <article className={styles.post}>
        <div className={styles.postHeader}>
          <Link href="/blog" className={styles.backLink}>
            ← Back to Blog
          </Link>

          <h1 className={styles.title}>{title}</h1>

          <div className={styles.meta}>
            <span className={styles.author}>By {author}</span>
            <span className={styles.date}>{formattedDate}</span>
          </div>

          {tags && tags.length > 0 && (
            <div className={styles.tags}>
              {tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {featured_image && (
          <div className={`${styles.featuredImageContainer} ${styles.animateOnScroll}`}>
            <Image
              src={featured_image || "/placeholder.svg"}
              alt={title}
              width={1200}
              height={630}
              className={styles.featuredImage}
            />
          </div>
        )}

        <div
          className={`${styles.content} ${styles.animateOnScroll}`}
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        />

        <div className={`${styles.shareSection} ${styles.animateOnScroll}`}>
          <h3>Share this article</h3>
          <div className={styles.shareButtons}>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(`https://yourdomain.com/blog/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.shareButton}
              aria-label="Share on Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://yourdomain.com/blog/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.shareButton}
              aria-label="Share on Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://yourdomain.com/blog/${slug}`)}&title=${encodeURIComponent(title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.shareButton}
              aria-label="Share on LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </article>
    </div>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("content/posts"))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join("content/posts", slug + ".md"), "utf-8")

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  }
}
