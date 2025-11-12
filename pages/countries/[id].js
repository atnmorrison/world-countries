import React from 'react';
import Layout from '../../components/layout';
import styles from '../../components/layout.module.css';
import { getAllCountryIds, getCountryData } from '../../lib/countries';
import Head from 'next/head';
import Flags from 'country-flag-icons/react/3x2';
import Script from 'next/script';



export async function getStaticProps({params}) {
    const countryData = getCountryData(params.id);


    return {
        props: {
            countryData
        },
    };
}


export async function getStaticPaths() {
  const paths = getAllCountryIds();
  return {
    paths,
    fallback: false,
  };
}





export default function Country({countryData}) {  
  
  let flag;
  if(Flags[countryData.alpha2]) {
    flag = React.createElement(Flags[countryData.alpha2]);
  } else {
    flag = <div></div>
  }

  return (
  <Layout>
     <Head>
        <title>{countryData.name}</title>
        <Script
          id="Absence-banner"
          async
          strategy="afterInteractive"
          onError={(e) => {
            console.error('Script failed to load', e);
          }}
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4608494003373704`}
          crossOrigin="anonymous"
        />
     </Head>
    <h1>{countryData.name}</h1>
    {flag}
    <h2>
        Codes
    </h2>
    <div>
        <table className={styles.codes}>
          <tr>
            <td><h3>Alpha2</h3></td>
            <td>{countryData.alpha2}</td>
          </tr>
          <tr>
            <td><h3>Alhpa3</h3></td>
            <td>{countryData.alpha3}</td>
          </tr>
          <tr>
            <td><h3>Numeric</h3></td>
            <td>{countryData.numeric}</td>
          </tr>
          <tr>
            <td><h3>Fips</h3></td>
            <td>{countryData.fips}</td>
          </tr>
          <tr>
            <td><h3>Internet</h3></td>
            <td>{countryData.fips}</td>
          </tr>
          <tr>
            <td>Latitude</td>
            <td>{countryData.latitude}</td>
          </tr>
          <tr>
            <td>Longitude</td>
            <td>{countryData.longitude}</td>
          </tr>          
        </table>
    </div>
    
    
    <h2>Locales</h2>
    <div>

    {countryData.locales.map((locale) => {
      return (<span>{locale == countryData.default_locale ? <b>{locale}</b> : locale} </span>)
    })} 

    </div>
    
    <h2>Languages</h2>
    <div>
    {countryData.languages ? countryData.languages.join(',') : '' } <br />
    </div>

    <h2>Currency</h2>
    <div>
    {countryData.currency} <br />
    </div>

    <h2>Geography</h2>
    <table className={styles.codes}>
        <tr>
            <td>Capital</td>
            <td>{countryData.capital} </td>
        </tr>
        <tr>
            <td>Region</td>
            <td>{countryData.region}</td>
        </tr>
        <tr>
            <td>Continent</td>
            <td>{countryData.continent}</td>
        </tr>
    </table>
    <h2>Alternate Names</h2>
    {countryData.alternate_names ? countryData.alternate_names.join(',') : '' }

    <h2>Emoji Codes</h2>
    <div className="emoji">{countryData.emoji}</div>
    <div className="emoji">{countryData.emojiU}</div>
  </Layout>
  );
}