"use client"

import { useState, useEffect } from "react"
import Header from "./Header"
import Footer from "./Footer"
import styles from "../styles/Layout.module.css"

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    document.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <div className={styles.layout}>
      <Header scrolled={scrolled} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}
