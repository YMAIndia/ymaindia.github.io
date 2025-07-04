import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Footer.module.css"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            <Link href="/">
              <Image src="/yma_logo.png" alt="YMA India Logo" width={150} height={50} />
            </Link>
            <p className={styles.tagline}>Empowering Young Medical Professionals</p>
          </div>

          <div className={styles.footerNav}>
            <div className={styles.footerNavColumn}>
              <h3>Navigation</h3>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className={styles.footerNavColumn}>
              <h3>Resources</h3>
              <ul>
                <li>
                  <Link href="/blog">Latest Articles</Link>
                </li>
                <li>
                  <a href="#">Medical Resources</a>
                </li>
                <li>
                  <a href="#">Research Opportunities</a>
                </li>
                <li>
                  <a href="#">Volunteer Programs</a>
                </li>
              </ul>
            </div>

            <div className={styles.footerNavColumn}>
              <h3>Connect</h3>
              <ul>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <a href="https://instagram.com/ymaindia" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@ymaindia.org">Email</a>
                </li>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>&copy; {currentYear} Youth Medical Association India. All rights reserved.</p>
          <div className={styles.socialIcons}>
            <a href="https://instagram.com/ymaindia" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
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
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://twitter.com/ymaindia" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
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
              href="https://linkedin.com/company/ymaindia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
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
      </div>
    </footer>
  )
}
