import { useState } from 'react';
import styles from './CopyButton.module.css';

export default function CopyButton({ text, label }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={styles.copyButton}
      title={`Copy ${label || text} to clipboard`}
      aria-label={`Copy ${label || text} to clipboard`}
    >
      {copied ? (
        <span className={styles.checkmark}>✓</span>
      ) : (
        <span className={styles.copyIcon}>📋</span>
      )}
      {copied && <span className={styles.copiedText}>Copied!</span>}
    </button>
  );
}
