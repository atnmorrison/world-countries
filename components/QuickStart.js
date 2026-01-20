import { useState } from 'react';
import styles from './QuickStart.module.css';

export default function QuickStart() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.quickStart}>
      <button
        className={styles.toggleButton}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <span>{isExpanded ? '▼' : '▶'}</span>
        <span>Developer Quick Start</span>
      </button>
      {isExpanded && (
        <div className={styles.content}>
          <p style={{ marginBottom: '1rem', color: '#d0d0d0' }}>
            Install and use <strong>country-locale-map</strong> in your project:
          </p>
          <div className={styles.codeBlock}>
            <div className={styles.codeHeader}>
              <span>Installation</span>
            </div>
            <pre className={styles.code}>
              <code>npm install country-locale-map</code>
            </pre>
          </div>
          <div className={styles.codeBlock}>
            <div className={styles.codeHeader}>
              <span>Usage Examples</span>
            </div>
            <pre className={styles.code}>
              <code>{`import { getCountryByAlpha2, getCountryByAlpha3, getAllCountries } from 'country-locale-map';

// Get country by Alpha-2 code
const country = getCountryByAlpha2('US');
console.log(country.name); // "United States"
console.log(country.alpha3); // "USA"

// Get country by Alpha-3 code
const country2 = getCountryByAlpha3('GBR');
console.log(country2.name); // "United Kingdom"

// Get all countries
const allCountries = getAllCountries();
console.log(allCountries.length); // Total number of countries`}</code>
            </pre>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#888' }}>
            <a href="https://www.npmjs.com/package/country-locale-map" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa' }}>
              View full documentation on npm →
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
