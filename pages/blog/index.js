"use client"

import { useState, useEffect } from "react"
import Head from "next/head"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { sortByDate } from "../../utils"
import PostCard from "../../components/PostCard"
import PageHeader from "../../components/PageHeader"
import styles from "../../styles/Blog.module.css"
import TitleSection from "../../components/TitleSection"

export default function BlogPage({ posts }) {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTags, setActiveTags] = useState([])
  const [filteredPosts, setFilteredPosts] = useState(posts)

  // Extract all unique tags
  const allTags = [...new Set(posts.flatMap((post) => post.frontmatter.tags || []))]

  useEffect(() => {
    setIsVisible(true)

    // Filter posts based on active tags
    if (activeTags.length === 0) {
      setFilteredPosts(posts)
    } else {
      setFilteredPosts(
        posts.filter((post) => post.frontmatter.tags && post.frontmatter.tags.some((tag) => activeTags.includes(tag))),
      )
    }
  }, [activeTags, posts])

  const toggleTag = (tag) => {
    setActiveTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  return (
    <>
      <TitleSection title="Blog" subtitle="Latest news, stories, and updates from YMA India" />
      <div className={styles.container}>
        <Head>
          <title>Blog | YMA India</title>
          <meta name="description" content="Latest articles and insights from Youth Medical Association India" />
        </Head>

        <PageHeader title="Our Blog" subtitle="Insights, stories, and knowledge from the YMA India community" />

        {allTags.length > 0 && (
          <div className={styles.tagsContainer}>
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`${styles.tagButton} ${activeTags.includes(tag) ? styles.activeTag : ""}`}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        <div className={`${styles.postsGrid} ${isVisible ? styles.visible : ""}`}>
          {filteredPosts.map((post, index) => (
            <PostCard key={index} post={post} animationDelay={index * 0.1} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className={styles.noResults}>
            <p>No posts found with the selected tags.</p>
            <button className={styles.resetButton} onClick={() => setActiveTags([])}>
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </>
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
      frontmatter: {
        ...frontmatter,
        date: frontmatter.date.toString(),
      },
    };
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}
