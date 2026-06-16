import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

/* Icons reused from the former Playbook navbar mega-dropdown. */
const ReadIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);
const OnlineIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
const CloneIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

/* In-playbook top menu bar. Rendered on every playbook page via the
   src/theme/DocRoot/Layout swizzle. Replaces the old navbar mega-dropdown. */
export default function PlaybookSubBar() {
  const pdfUrl = useBaseUrl('/downloads/masakhane-playbook.pdf');
  return (
    <nav className={styles.subbar} aria-label="Playbook actions">
      <div className={styles.inner}>
        <span className={styles.brand}>AfriPlaybook</span>
        <div className={styles.actions}>
          {/* You are reading the playbook → "Read online" is the active mode. */}
          <Link to="/AfriPlaybook/" className={`${styles.action} ${styles.active}`} aria-current="page">
            <ReadIcon /><span>Read online</span>
          </Link>
          <a href={pdfUrl} className={styles.action} target="_blank" rel="noopener noreferrer">
            <DownloadIcon /><span>Download PDF</span>
          </a>
          <Link to="/contribute-online" className={styles.action}>
            <OnlineIcon /><span>Edit online</span>
          </Link>
          <Link to="/contribute" className={styles.action}>
            <CloneIcon /><span>Contribute by cloning</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
