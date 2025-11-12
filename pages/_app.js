import Script from 'next/script';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Script
                strategy="afterInteractive"
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4608494003373704"
                crossOrigin="anonymous"
            />
            <Component {...pageProps} />
        </>
    );
}