import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function TermsOfService() {
  return (
    <Layout>
      <Head>
        <title>Terms of Service - World Countries</title>
        <meta 
          name="description" 
          content="Terms of Service for World Countries - Read our terms and conditions for using our country code reference website." 
        />
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>Terms of Service</h1>
        <div className={utilStyles.headingMd}>
          <p><strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using the World Countries website ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, then you may not access the Service.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily access and use the World Countries website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>modify or copy the materials</li>
            <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
            <li>attempt to decompile or reverse engineer any software contained on the World Countries website</li>
            <li>remove any copyright or other proprietary notations from the materials</li>
            <li>transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>
          <p>
            This license shall automatically terminate if you violate any of these restrictions and may be terminated by World Countries at any time.
          </p>

          <h2>3. Intellectual Property Rights</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of World Countries and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
          </p>

          <h2>4. User Accounts</h2>
          <p>
            When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
          </p>

          <h2>5. Acceptable Use</h2>
          <p>
            You agree not to use the Service:
          </p>
          <ul>
            <li>In any way that violates any applicable national or international law or regulation</li>
            <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
            <li>To impersonate or attempt to impersonate the company, a company employee, another user, or any other person or entity</li>
            <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
            <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service</li>
          </ul>

          <h2>6. Disclaimer</h2>
          <p>
            The information on this Service is provided on an "as is" basis. To the fullest extent permitted by law, World Countries excludes all representations, warranties, conditions, and terms relating to our website and the use of this website.
          </p>
          <p>
            While we strive to provide accurate and up-to-date information, we make no warranties or representations regarding the accuracy, completeness, or reliability of any information on the Service. Country codes and related data may change, and we do not guarantee that all information is current at all times.
          </p>

          <h2>7. Limitations</h2>
          <p>
            In no event shall World Countries or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on World Countries' website, even if World Countries or a World Countries authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>

          <h2>8. Accuracy of Materials</h2>
          <p>
            The materials appearing on the World Countries website could include technical, typographical, or photographic errors. World Countries does not warrant that any of the materials on its website are accurate, complete, or current. World Countries may make changes to the materials contained on its website at any time without notice.
          </p>

          <h2>9. Links</h2>
          <p>
            World Countries has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by World Countries of the site. Use of any such linked website is at the user's own risk.
          </p>

          <h2>10. Modifications</h2>
          <p>
            World Countries may revise these Terms of Service at any time without notice. By using this Service, you are agreeing to be bound by the then current version of these Terms of Service.
          </p>

          <h2>11. Third-Party Services</h2>
          <p>
            Our Service may contain links to third-party websites or services that are not owned or controlled by World Countries. World Countries has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
          </p>
          <p>
            We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit, including:
          </p>
          <ul>
            <li>Google AdSense and its related services</li>
            <li>Third-party analytics providers</li>
            <li>Other external service providers</li>
          </ul>

          <h2>12. Advertising</h2>
          <p>
            The Service may display advertisements from third parties, including but not limited to Google AdSense. We are not responsible for the content of these advertisements or the actions of advertisers. Your interactions with advertisers are solely between you and the advertiser.
          </p>

          <h2>13. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless World Countries and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of your use and access of the Service, or a breach of these Terms.
          </p>

          <h2>14. Termination</h2>
          <p>
            We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
          </p>

          <h2>15. Governing Law</h2>
          <p>
            These Terms shall be interpreted and governed by the laws of the jurisdiction in which World Countries operates, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
          </p>

          <h2>16. Severability</h2>
          <p>
            If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
          </p>

          <h2>17. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>

          <h2>18. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us through our <a href="/contact">Contact Us</a> page.
          </p>

          <p>
            By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
          </p>
        </div>
      </article>
    </Layout>
  );
}
