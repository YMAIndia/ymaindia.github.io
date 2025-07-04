import styles from "../styles/PageHeader.module.css"

export default function PageHeader({ title, subtitle }) {
  return (
    <div className={styles.pageHeader}>
      <div className={styles.meshGradient}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </div>
  )
}
