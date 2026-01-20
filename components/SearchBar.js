import { useState } from 'react';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import styles from './SearchBar.module.css';

export default function SearchBar({ countries }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term.trim() === '') {
      setFilteredCountries(countries);
    } else {
      const filtered = countries.filter((country) => {
        const nameMatch = country.name.toLowerCase().includes(term);
        const alpha2Match = country.alpha2?.toLowerCase().includes(term);
        const alpha3Match = country.alpha3?.toLowerCase().includes(term);
        const numericMatch = country.numeric?.includes(term);
        
        return nameMatch || alpha2Match || alpha3Match || numericMatch;
      });
      setFilteredCountries(filtered);
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
        </div>
      )}
      <ul className={utilStyles.list}>
        {filteredCountries.map((country) => (
          <li className={utilStyles.listItem} key={country.alpha3}>
            <Link href={`/countries/${country.alpha3}`}>
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
