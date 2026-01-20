import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import {getCountriesData} from '../lib/countries';
import SearchBar from '../components/SearchBar';


export async function getStaticProps() {
  const allCountries = getCountriesData();
  return {
    props: {
      allCountries,
    }
  } 
}


export default function Home({allCountries}) {
  return (
    <Layout home>
      <Head>
        <title>World Countries</title>
      </Head>
      <section className={utilStyles.headingMd}>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Countries</h2>
        <SearchBar countries={allCountries} />
      </section>

    </Layout>
  );
}