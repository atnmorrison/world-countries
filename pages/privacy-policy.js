import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy - World Countries</title>
        <meta 
          name="description" 
          content="Privacy Policy for World Countries - Learn about how we collect, use, and protect your data, including information about cookies and Google AdSense." 
        />
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>Privacy Policy</h1>
        <div className={utilStyles.headingMd}>
          <p><strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <h2>Introduction</h2>
          <p>
            Welcome to World Countries. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>

          <h2>Information We Collect</h2>
          <h3>Personal Data</h3>
          <p>
            We do not directly collect personal information from visitors to our website. We are a static informational site that provides country data and codes.
          </p>

          <h3>Automatically Collected Information</h3>
          <p>
            When you visit our website, certain information about your device and browsing activity may be automatically collected, including:
          </p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring website addresses</li>
            <li>Pages viewed and time spent on pages</li>
            <li>Date and time of access</li>
          </ul>

          <h2>Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device.
          </p>
          
          <h3>Types of Cookies We Use</h3>
          <ul>
            <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable core functionality such as navigation and access to secure areas.</li>
            <li><strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
            <li><strong>Advertising Cookies:</strong> These cookies are used to deliver advertisements relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.</li>
          </ul>

          <h2>Google AdSense and DART Cookie</h2>
          <p>
            We use Google AdSense to display advertisements on our website. Google AdSense is a service provided by Google Inc. that delivers advertisements and uses cookies to serve ads based on a user's prior visits to this website or other websites.
          </p>
          
          <p>
            <strong>Google's use of the DART cookie</strong> enables it to serve ads to our users based on their visit to our site and other sites on the Internet. Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy at the following URL: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a>
          </p>

          <p>
            Google AdSense uses cookies to:
          </p>
          <ul>
            <li>Serve ads based on a user's prior visits to this website</li>
            <li>Help advertisers reach users based on their interests</li>
            <li>Measure the effectiveness of ads</li>
            <li>Limit the number of times a user sees an ad</li>
          </ul>

          <p>
            You can learn more about how Google uses data when you use our site by visiting: <a href="https://policies.google.com/privacy/partners" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy/partners</a>
          </p>

          <h2>Data Collection</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. The information we collect is used solely for the following purposes:
          </p>
          <ul>
            <li>To improve our website and user experience</li>
            <li>To understand how visitors use our site through analytics</li>
            <li>To display relevant advertisements through Google AdSense</li>
            <li>To ensure the security and proper functioning of our website</li>
          </ul>

          <h2>Third-Party Services</h2>
          <p>
            Our website uses third-party services that may collect information about you:
          </p>
          <ul>
            <li><strong>Google AdSense:</strong> For advertising services. Please review Google's Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
            <li><strong>Analytics Services:</strong> We may use analytics services to understand website usage patterns.</li>
          </ul>

          <h2>Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Access any personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt out of cookie tracking through your browser settings</li>
            <li>Opt out of personalized advertising through Google's Ad Settings: <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">https://adssettings.google.com</a></li>
          </ul>

          <h2>Managing Cookies</h2>
          <p>
            Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or to alert you when cookies are being sent. However, if you disable cookies, some features of our website may not function properly.
          </p>
          <p>
            For more information on how to manage cookies, visit:
          </p>
          <ul>
            <li><a href="https://www.allaboutcookies.org/manage-cookies/" target="_blank" rel="noopener noreferrer">All About Cookies</a></li>
            <li>Your browser's help documentation</li>
          </ul>

          <h2>Children's Privacy</h2>
          <p>
            Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this page.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us through our <a href="/contact">Contact Us</a> page.
          </p>
        </div>
      </article>
    </Layout>
  );
}
