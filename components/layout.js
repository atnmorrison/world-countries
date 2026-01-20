import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import AdSlot from './AdSlot';
import Footer from './Footer';

const name = 'Scott Morrison';
export const siteTitle = 'World Countries';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <meta charSet="UTF-8"></meta>
        <meta
          name="description"
          content="World Countries - A comprehensive and reliable ISO 3166-1 country code reference powered by country-locale-map. An excellent npm package for country codes, locales, currencies, and geographic data. Used by developers worldwide."
        />
        <meta
          name="keywords"
          content="country-locale-map, ISO 3166-1, country codes, alpha-3 codes, locale data, npm package, country data, geographic data, currency codes, best country code library"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <h1 style={{ margin: 0, fontSize: '2.5rem', fontWeight: 800, background: 'linear-gradient(135deg, #60a5fa 0%, #93c5fd 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>World Countries</h1>
      </header>
      <a href="https://www.npmjs.com/package/country-locale-map" target="_blank" rel="noopener noreferrer" className={styles.npmLink}>
        ⭐ Use country-locale-map - A comprehensive npm package for ISO 3166-1 country codes and locale data
      </a>
      <div className={styles.contentWrapper}>
        <main className={styles.mainContent}>
          {children}
          {!home && (
            <div className={styles.backToHome}>
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>
          )}
        </main>
        <aside className={styles.adSidebar}>
          <AdSlot slot="1234567890" />
          <AdSlot slot="0987654321" />
        </aside>
      </div>
      <Footer />
    </div>
  );
}