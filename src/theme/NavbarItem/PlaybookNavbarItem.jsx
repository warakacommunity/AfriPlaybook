import React, { useState, useRef, useEffect } from 'react';
import Link from '@docusaurus/Link';
import styles from './StyledNavItem.module.css';

const BookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="15"
    height="15"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const ReadIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const OnlineIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const CloneIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function PlaybookNavbarItem() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const closeTimerRef = useRef(null);

  useEffect(() => {
    function handleOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  if (typeof window === 'undefined') return null;

  const close = () => setOpen(false);
  const handleEnter = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setOpen(true);
  };
  const handleLeave = () => {
    closeTimerRef.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div
      ref={wrapperRef}
      className={styles.wrapper}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        type="button"
        className={styles.playbookBtn}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        <span className={styles.btnLabel}>AfriPlaybook</span>
        <span className={styles.chevron} aria-hidden="true">{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className={`${styles.dropdown} ${styles.megaMenu}`} role="menu">
          <div className={styles.megaSection}>
            <div className={styles.megaSectionTitle}>Read the Playbook</div>
            <Link
              to="/playbook/"
              role="menuitem"
              className={styles.aboutMegaItem}
              onClick={close}
            >
              <span className={styles.aboutMegaItemIcon}><ReadIcon /></span>
              <span className={styles.aboutMegaItemText}>
                <span className={styles.aboutMegaItemTitle}>Read online</span>
                <span className={styles.aboutMegaItemDesc}>Browse the chapters in your browser.</span>
              </span>
            </Link>
            <a
              href="/AfriPlaybook/downloads/masakhane-playbook.pdf"
              role="menuitem"
              className={styles.aboutMegaItem}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
            >
              <span className={styles.aboutMegaItemIcon}><DownloadIcon /></span>
              <span className={styles.aboutMegaItemText}>
                <span className={styles.aboutMegaItemTitle}>Download PDF</span>
                <span className={styles.aboutMegaItemDesc}>Get the full playbook as a single PDF.</span>
              </span>
            </a>
          </div>

          <div className={styles.megaDivider} aria-hidden="true" />

          <div className={styles.megaSection}>
            <div className={styles.megaSectionTitle}>Contribute</div>
            <Link
              to="/contribute-online"
              role="menuitem"
              className={styles.aboutMegaItem}
              onClick={close}
            >
              <span className={styles.aboutMegaItemIcon}><OnlineIcon /></span>
              <span className={styles.aboutMegaItemText}>
                <span className={styles.aboutMegaItemTitle}>Online</span>
                <span className={styles.aboutMegaItemDesc}>Edit chapters directly in your browser, no setup.</span>
              </span>
            </Link>
            <Link
              to="/contribute"
              role="menuitem"
              className={styles.aboutMegaItem}
              onClick={close}
            >
              <span className={styles.aboutMegaItemIcon}><CloneIcon /></span>
              <span className={styles.aboutMegaItemText}>
                <span className={styles.aboutMegaItemTitle}>By Cloning</span>
                <span className={styles.aboutMegaItemDesc}>Clone the GitHub repo to work on it locally.</span>
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
