import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import {getCountriesData} from '../lib/countries';


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
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Countries</h2>
        <ul className={utilStyles.list}>
          {allCountries.map((country) => ( 
            <li className={utilStyles.listItem} key={country.alpha3}>
              <Link href={`/countries/${country.alpha3}`}>
              {country.name}
              </Link>

            </li>
          ))}
        </ul>
      </section>

    </Layout>
  );
}