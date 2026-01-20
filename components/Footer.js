import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <nav className={styles.footerNav}>
          <Link href="/privacy-policy" className={styles.footerLink}>
            Privacy Policy
          </Link>
          <Link href="/about" className={styles.footerLink}>
            About Us
          </Link>
          <Link href="/contact" className={styles.footerLink}>
            Contact Us
          </Link>
          <Link href="/terms-of-service" className={styles.footerLink}>
            Terms of Service
          </Link>
        </nav>
        <div className={styles.footerCopyright}>
          <p>&copy; {new Date().getFullYear()} World Countries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
