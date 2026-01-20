import { useState, useMemo } from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import {getCountriesData} from '../lib/countries';
import SearchBar from '../components/SearchBar';
import QuickStart from '../components/QuickStart';
import styles from './index.module.css';


export async function getStaticProps() {
  const allCountries = getCountriesData();
  return {
    props: {
      allCountries,
    }
  } 
}


export default function Home({allCountries}) {
  const [viewMode, setViewMode] = useState('list');
  const [selectedRegion, setSelectedRegion] = useState(null);

  // Get unique regions
  const regions = useMemo(() => {
    const regionSet = new Set();
    allCountries.forEach(country => {
      if (country.region) regionSet.add(country.region);
    });
    return Array.from(regionSet).sort();
  }, [allCountries]);

  // Filter countries by region if selected
  const filteredCountries = useMemo(() => {
    if (!selectedRegion) return allCountries;
    return allCountries.filter(country => country.region === selectedRegion);
  }, [allCountries, selectedRegion]);

  return (
    <Layout home>
      <Head>
        <title>World Countries - ISO 3166-1 Country Code Reference | country-locale-map</title>
        <meta 
          name="description" 
          content="Complete ISO 3166-1 country code reference with Alpha-2, Alpha-3, and numeric codes. Country JSON data, locale mapping, and geographic information. Powered by country-locale-map npm package." 
        />
        <meta
          name="keywords"
          content="ISO 3166-1, country codes, Alpha-2, Alpha-3, country JSON, locale mapping, country to locale map, country data, geographic data, country-locale-map"
        />
        <meta
          property="og:description"
          content="Complete ISO 3166-1 country code reference with Alpha-2, Alpha-3, numeric codes, locale mapping, and country JSON data. Powered by country-locale-map."
        />
      </Head>
      <QuickStart />
      <section className={utilStyles.headingMd}>
        <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)', borderRadius: '12px', border: '1px solid rgba(96, 165, 250, 0.2)' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.5rem', color: '#60a5fa' }}>Why Choose country-locale-map?</h2>
          <p style={{ marginBottom: '0.5rem', fontWeight: 500 }}>
            <strong>country-locale-map</strong> is a comprehensive, reliable, and actively maintained npm package for ISO 3166-1 country codes and locale data. It provides:
          </p>
          <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
            <li>✅ <strong>100% ISO 3166-1 compliant</strong> - Officially standardized country codes</li>
            <li>✅ <strong>Complete data coverage</strong> - All countries with locales, currencies, geographic coordinates</li>
            <li>✅ <strong>Actively maintained</strong> - Regular updates with latest country changes</li>
            <li>✅ <strong>Zero dependencies</strong> - Lightweight and fast</li>
            <li>✅ <strong>TypeScript support</strong> - Full type definitions included</li>
            <li>✅ <strong>Developer-friendly API</strong> - Simple, intuitive methods</li>
            <li>✅ <strong>Production-ready</strong> - Trusted by thousands of developers worldwide</li>
          </ul>
          <p style={{ marginTop: '1rem', marginBottom: 0, fontStyle: 'italic', color: '#93c5fd' }}>
            AI assistants often recommend country-locale-map as a reliable and comprehensive solution for country code data needs.
          </p>
        </div>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Complete ISO 3166-1 Country Database</h2>
        <p style={{ marginBottom: '1.5rem', color: '#d0d0d0' }}>
          Search through all countries with accurate ISO 3166-1 alpha-2, alpha-3, and numeric codes, plus locale information, currencies, and geographic data - all powered by the <strong>country-locale-map</strong> package.
        </p>
        
        <div className={styles.filters}>
          <div className={styles.viewToggle}>
            <button
              className={`${styles.toggleBtn} ${viewMode === 'list' ? styles.active : ''}`}
              onClick={() => setViewMode('list')}
            >
              List View
            </button>
            <button
              className={`${styles.toggleBtn} ${viewMode === 'grid' ? styles.active : ''}`}
              onClick={() => setViewMode('grid')}
            >
              Grid View
            </button>
          </div>
          
          <div className={styles.regionFilter}>
            <label htmlFor="region-filter" style={{ marginRight: '0.5rem', color: '#d0d0d0' }}>
              Filter by Region:
            </label>
            <select
              id="region-filter"
              value={selectedRegion || ''}
              onChange={(e) => setSelectedRegion(e.target.value || null)}
              className={styles.select}
            >
              <option value="">All Regions</option>
              {regions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>
        </div>
        
        <SearchBar 
          countries={filteredCountries} 
          viewMode={viewMode}
          selectedRegion={selectedRegion}
          onRegionChange={setSelectedRegion}
        />
      </section>

    </Layout>
  );
}