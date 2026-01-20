import { useState, useMemo } from 'react';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import styles from './SearchBar.module.css';

// Simple fuzzy match scoring function
function fuzzyMatch(query, text) {
  const queryLower = query.toLowerCase();
  const textLower = text.toLowerCase();
  
  // Exact match
  if (textLower.includes(queryLower)) return { score: 100, isFuzzy: false };
  
  // Fuzzy match: check if most characters appear in order
  let queryIndex = 0;
  for (let i = 0; i < textLower.length && queryIndex < queryLower.length; i++) {
    if (textLower[i] === queryLower[queryIndex]) {
      queryIndex++;
    }
  }
  
  if (queryIndex === queryLower.length) {
    // Calculate similarity score
    const similarity = (queryLower.length / textLower.length) * 100;
    return { score: similarity, isFuzzy: true };
  }
  
  // Check for common typos (simple version)
  const commonTypos = {
    'america': ['america', 'amercia', 'merica'],
    'united states': ['united states', 'united stetes', 'usa'],
    'united kingdom': ['united kingdom', 'united kindom', 'uk', 'gb'],
  };
  
  for (const [correct, variants] of Object.entries(commonTypos)) {
    if (variants.some(v => textLower.includes(v) && queryLower.includes(variants.find(vi => vi !== correct) || ''))) {
      return { score: 70, isFuzzy: true };
    }
  }
  
  return { score: 0, isFuzzy: false };
}

export default function SearchBar({ countries, viewMode = 'list', selectedRegion = null, onRegionChange }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [fuzzyMatches, setFuzzyMatches] = useState(new Set());

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term.trim() === '') {
      setFilteredCountries(countries);
      setFuzzyMatches(new Set());
    } else {
      const results = countries.map((country) => {
        const nameMatch = fuzzyMatch(term, country.name);
        const alpha2Match = country.alpha2?.toLowerCase().includes(term) ? { score: 100, isFuzzy: false } : { score: 0, isFuzzy: false };
        const alpha3Match = country.alpha3?.toLowerCase().includes(term) ? { score: 100, isFuzzy: false } : { score: 0, isFuzzy: false };
        const numericMatch = country.numeric?.includes(term) ? { score: 100, isFuzzy: false } : { score: 0, isFuzzy: false };
        
        // Check alternate names
        const altNameMatch = country.alternate_names?.some(alt => {
          const match = fuzzyMatch(term, alt);
          return match.score > 0;
        }) ? { score: 80, isFuzzy: true } : { score: 0, isFuzzy: false };
        
        const bestMatch = [nameMatch, alpha2Match, alpha3Match, numericMatch, altNameMatch].reduce((best, current) => 
          current.score > best.score ? current : best
        );
        
        return { country, match: bestMatch };
      }).filter(result => result.match.score > 0);
      
      // Sort by match score
      results.sort((a, b) => b.match.score - a.match.score);
      
      const filtered = results.map(r => r.country);
      const fuzzy = new Set(results.filter(r => r.match.isFuzzy).map(r => r.country.alpha3));
      
      setFilteredCountries(filtered);
      setFuzzyMatches(fuzzy);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search countries by name, ISO code (e.g., USA, US), or numeric code..."
        value={searchTerm}
        onChange={handleSearch}
        className={styles.searchInput}
        aria-label="Search countries"
      />
      {searchTerm && (
        <div className={styles.resultsCount}>
          {filteredCountries.length} {filteredCountries.length === 1 ? 'country' : 'countries'} found
          {fuzzyMatches.size > 0 && (
            <span className={styles.fuzzyBadge}>
              {fuzzyMatches.size} fuzzy match{fuzzyMatches.size > 1 ? 'es' : ''}
            </span>
          )}
        </div>
      )}
      {viewMode === 'list' ? (
        <ul className={utilStyles.list}>
          {filteredCountries.map((country) => (
            <li className={utilStyles.listItem} key={country.alpha3}>
              <Link href={`/countries/${country.alpha3}`}>
                {country.name}
              </Link>
              {fuzzyMatches.has(country.alpha3) && (
                <span className={styles.fuzzyIndicator} title="Matched via fuzzy search">✨ Fuzzy</span>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.gridView}>
          {filteredCountries.map((country) => (
            <Link href={`/countries/${country.alpha3}`} key={country.alpha3} className={styles.gridItem}>
              <div className={styles.gridCard}>
                <div className={styles.gridFlag}>
                  {country.emoji}
                </div>
                <div className={styles.gridName}>{country.name}</div>
                <div className={styles.gridCodes}>
                  <span className={styles.gridCode}>{country.alpha2}</span>
                  <span className={styles.gridCode}>{country.alpha3}</span>
                </div>
                {fuzzyMatches.has(country.alpha3) && (
                  <span className={styles.fuzzyIndicator}>✨ Fuzzy</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
