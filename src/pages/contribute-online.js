import clsx from 'clsx';
import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

/* ── Inline icons (Lucide-style, stroke-based) ───────────── */
const IconKey = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="7.5" cy="15.5" r="5.5" />
    <path d="M21 2l-9.6 9.6" />
    <path d="M15.5 7.5l3 3L22 7l-3-3" />
  </svg>
);

const IconEdit = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
  </svg>
);

const IconLayers = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const IconUpload = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

const IconGlobe = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const IconSend = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

/* ── Feature overview cards ──────────────────────────────── */
const FEATURES = [
  {
    Icon: IconKey,
    title: 'Authenticate',
    body: 'Connect your GitHub account in seconds — via popup, device flow, or a personal access token. No local setup required.',
  },
  {
    Icon: IconEdit,
    title: 'Edit content',
    body: 'Open any existing Playbook page and make changes using a full rich-text editor with headings, lists, links, images, and video.',
  },
  {
    Icon: IconLayers,
    title: 'Manage structure',
    body: 'Add new sections, pages, and subsections directly in the tree view. Rename, reorder, or delete items without touching the filesystem.',
  },
  {
    Icon: IconUpload,
    title: 'Upload documents',
    body: 'Import PDF, Word (.docx), or Markdown files. The tool extracts text and images automatically and places them in the right location.',
  },
  {
    Icon: IconGlobe,
    title: 'Translate',
    body: 'Translate any page into Hausa, Amharic, Swahili, French, or Portuguese — auto-translated first, then refined in a side-by-side editor.',
  },
  {
    Icon: IconSend,
    title: 'Submit a PR',
    body: 'All changes are staged locally, then submitted as a single Pull Request on GitHub. No direct commits to main — everything goes through review.',
  },
];

export default function ContributeOnline() {
  return (
    <Layout
      title="Contribute Online"
      description="Step-by-step guide to contributing to the Masakhane Playbook directly in your browser — no local setup required."
    >
      <section className={clsx(styles.section, styles.cfcSection, styles.cfcPageSection)}>
        <div className="container">

          <Link to="/" className={styles.cfcBackLink}>← Back to home</Link>

          {/* ── Hero ─────────────────────────────────────────── */}
          <div className={styles.cfcHeader}>
            <div>
              <span className={styles.sectionEyebrow}>Online contribution</span>
              <Heading as="h1" className={styles.sectionTitle}>
                Contribute directly in your browser
              </Heading>
              <p className={styles.cfcLead}>
                No Git, no terminal, no local setup. Authenticate with GitHub,
                use the built-in editor to add or improve content, and submit
                your changes as a Pull Request — all without leaving the page.
              </p>
            </div>
            <div className={styles.cfcActions}>
              <a
                href="#launch"
                className={clsx('button', styles.primaryButton)}
              >
                Start Contributing Online
              </a>
              <Link
                to="/contribute"
                className={clsx('button', styles.secondaryButton)}
              >
                Prefer cloning? See GitHub guide
              </Link>
            </div>
          </div>

          {/* ── Feature overview cards ────────────────────────── */}
          <div className={styles.cfcSubhead}>
            <Heading as="h2" className={styles.cfcSubheadTitle}>
              What you can do
            </Heading>
            <p className={styles.cfcSubheadLead}>
              The online editor covers the full contribution lifecycle — from
              authentication through editing, uploading, translating, and
              submitting.
            </p>
          </div>

          <div className={styles.expectationGrid}>
            {FEATURES.map(({ Icon, title, body }) => (
              <article key={title} className={styles.expectationCard}>
                <div className={styles.expectationIcon}>
                  <Icon />
                </div>
                <h3 className={styles.expectationTitle}>{title}</h3>
                <p className={styles.expectationBody}>{body}</p>
              </article>
            ))}
          </div>

          {/* Detailed step sections will be added in subsequent commits */}

        </div>
      </section>
    </Layout>
  );
}
