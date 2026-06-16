import React from 'react';
import Link from '@docusaurus/Link';
import styles from './StyledNavItem.module.css';

// Simple navbar link to the playbook. The former mega-dropdown actions
// (Read online / Download PDF / Contribute online / Clone) now live in the
// in-playbook top bar — see src/components/PlaybookSubBar.
export default function PlaybookNavbarItem() {
  if (typeof window === 'undefined') return null;

  return (
    <Link to="/AfriPlaybook/" className={styles.playbookBtn}>
      <span className={styles.btnLabel}>AfriPlaybook</span>
    </Link>
  );
}
