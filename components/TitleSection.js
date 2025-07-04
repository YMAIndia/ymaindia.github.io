"use client";

import { useState, useEffect } from "react";
import styles from "../styles/Hero.module.css";

export default function TitleSection({ title, subtitle }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`${styles.hero} ${isVisible ? styles.visible : ""}`} style={{ width: "100vw", marginLeft: 0 }}>
      <div className={styles.meshGradient}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  );
} 