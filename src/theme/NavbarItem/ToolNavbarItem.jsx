import React from 'react';
import Link from '@docusaurus/Link';
import styles from './StyledNavItem.module.css';

/* Tag/label icon — represents annotation labelling */
const TagIcon = () => (
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
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

export default function ToolNavbarItem() {
  if (typeof window === 'undefined') return null;

  return (
    <Link to="/tool" className={styles.toolBtn}>
      <TagIcon />
      <span className={styles.btnLabel}>AfriAnnotate</span>
    </Link>
  );
}
