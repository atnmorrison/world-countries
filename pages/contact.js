import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import styles from './contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from World Countries');
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    window.location.href = `mailto:atnmorrison@gmail.com?subject=${subject}&body=${body}`;
    setStatus('Opening your email client...');
  };

  return (
    <Layout>
      <Head>
        <title>Contact Us - World Countries</title>
        <meta 
          name="description" 
          content="Contact World Countries - Get in touch with questions, feedback, or suggestions about our country code resources." 
        />
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>Contact Us</h1>
        <div className={utilStyles.headingMd}>
          <p>
            We'd love to hear from you! Whether you have questions, suggestions, or need assistance, 
            please feel free to reach out to us using the form below or via email.
          </p>

          <div className={styles.contactContainer}>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={styles.formTextarea}
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>

              {status && <p className={styles.status}>{status}</p>}
            </form>

            <div className={styles.contactInfo}>
              <h2>Alternative Contact Methods</h2>
              <p>
                You can also reach us directly via email:
              </p>
              <p>
                <a href="mailto:atnmorrison@gmail.com" className={styles.emailLink}>
                  atnmorrison@gmail.com
                </a>
              </p>
              
              <h3>What to Include</h3>
              <p>When contacting us, please include:</p>
              <ul>
                <li>Your name and contact information</li>
                <li>A clear description of your question or issue</li>
                <li>Any relevant country codes or data you're referring to</li>
                <li>Screenshots or examples, if applicable</li>
              </ul>

              <p className={styles.responseTime}>
                We typically respond within 2-3 business days.
              </p>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
