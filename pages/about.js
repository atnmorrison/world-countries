import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Us - World Countries</title>
        <meta 
          name="description" 
          content="Learn about World Countries - A comprehensive developer resource for ISO 3166-1 alpha-3 country codes, locale information, and country data." 
        />
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>About Us</h1>
        <div className={utilStyles.headingMd}>
          <h2>Our Mission</h2>
          <p>
            World Countries is a comprehensive developer resource designed to provide easy access to standardized country information, including ISO 3166-1 alpha-3 codes, locale data, currency information, and geographic details.
          </p>

          <h2>Why We Built This Tool</h2>
          <p>
            As developers, we often need quick access to standardized country codes and locale information for various projects. Whether you're building international applications, handling currency conversions, setting up localization, or working with geographic data, having a reliable reference for ISO 3166-1 alpha-3 country codes is essential.
          </p>

          <p>
            The ISO 3166-1 standard provides internationally recognized codes for countries, with alpha-3 codes being three-letter abbreviations (such as USA, GBR, FRA) that are widely used in software development, databases, APIs, and international standards. Finding accurate, up-to-date information about these codes, along with related data like locales, currencies, and geographic coordinates, can be time-consuming when scattered across multiple sources.
          </p>

          <p>
            We created World Countries to solve this problem by providing a centralized, easy-to-use resource that developers can reference or integrate into their projects. Our website offers:
          </p>
          <ul>
            <li>Complete listing of all countries with ISO 3166-1 alpha-3 codes</li>
            <li>Quick search functionality to find countries by name or code</li>
            <li>Detailed country pages with locale information, currency codes, geographic data, and more</li>
            <li>Easy navigation and developer-friendly presentation of data</li>
          </ul>

          <h2>Technical Foundation</h2>
          <p>
            This website is built using modern web technologies and leverages the <a href="https://www.npmjs.com/package/country-locale-map" target="_blank" rel="noopener noreferrer">country-locale-map</a> npm package, which provides reliable, standardized country and locale data. We ensure that all information displayed follows ISO standards and is kept up-to-date with the latest changes in country codes and designations.
          </p>

          <h2>For Developers</h2>
          <p>
            Whether you're working on:
          </p>
          <ul>
            <li>International e-commerce applications</li>
            <li>Multi-language website localization</li>
            <li>Payment processing with currency handling</li>
            <li>Geographic data visualization</li>
            <li>API development requiring country code validation</li>
            <li>Database schemas with country references</li>
          </ul>
          <p>
            World Countries serves as your go-to reference for accurate, standardized country information.
          </p>

          <h2>Our Commitment</h2>
          <p>
            We are committed to providing accurate, reliable, and easy-to-access country information for developers worldwide. If you have suggestions for improvements, notice any inaccuracies, or have questions about the data we provide, please don't hesitate to <a href="/contact">contact us</a>.
          </p>

          <p>
            Thank you for using World Countries!
          </p>
        </div>
      </article>
    </Layout>
  );
}
