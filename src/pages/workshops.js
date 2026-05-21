import clsx from 'clsx';
import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import { WORKSHOPS } from '@site/src/data/workshops';

const STATUS = {
  upcoming: { label: 'Upcoming', color: '#059669', bg: 'rgba(5,150,105,0.1)' },
  planned:  { label: 'Planned',  color: '#2e86c1', bg: 'rgba(46,134,193,0.1)' },
  past:     { label: 'Past',     color: '#6b7280', bg: 'rgba(107,114,128,0.1)' },
};

const TYPE_COLOR = {
  'Workshop and Exhibition': '#7c3aed',
  Exhibition: '#7c3aed',
  Internal:   '#d97706',
  Demo:       '#0891b2',
  Community:  '#059669',
};

const FILTERS = ['All', 'Upcoming', 'Planned', 'Past'];

function StatusBadge({ status }) {
  const s = STATUS[status];
  return (
    <span style={{
      display: 'inline-block', padding: '0.2em 0.7em', borderRadius: 99,
      fontSize: '0.72rem', fontWeight: 700, background: s.bg, color: s.color,
      letterSpacing: '0.02em', textTransform: 'uppercase',
    }}>{s.label}</span>
  );
}

function TypeBadge({ type }) {
  const color = TYPE_COLOR[type] || '#6b7280';
  return (
    <span style={{
      display: 'inline-block', padding: '0.2em 0.7em', borderRadius: 4,
      fontSize: '0.72rem', fontWeight: 600, background: `${color}18`, color,
      letterSpacing: '0.02em',
    }}>{type}</span>
  );
}

function WorkshopCard({ w }) {
  return (
    <article style={{
      border: '1.5px solid var(--ifm-color-emphasis-200)',
      borderRadius: 12,
      padding: '1.25rem 1.4rem',
      background: 'var(--ifm-background-color)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      transition: 'border-color 0.15s, box-shadow 0.15s',
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--ifm-color-primary)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--ifm-color-emphasis-200)'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <StatusBadge status={w.status} />
        <TypeBadge type={w.type} />
      </div>

      <Heading as="h3" style={{ fontSize: '1.05rem', margin: 0 }}>{w.title}</Heading>
      <p style={{ fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-600)', margin: 0 }}>
        {w.subtitle}
      </p>

      <div style={{ display: 'flex', gap: '1.2rem', fontSize: '0.82rem', color: 'var(--ifm-color-emphasis-500)', flexWrap: 'wrap' }}>
        <span>📅 {w.date}</span>
        <span>📍 {w.venue}</span>
        <span>⏱ {w.duration}</span>
      </div>

      <p style={{ fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-700)', margin: '0.25rem 0 0', lineHeight: 1.55 }}>
        {w.description.length > 160 ? w.description.slice(0, 160) + '…' : w.description}
      </p>

      <div style={{ marginTop: '0.5rem' }}>
        <Link
          to={`/workshops/${w.id}`}
          className={clsx('button', styles.secondaryButton)}
          style={{ fontSize: '0.85rem' }}
        >
          View details →
        </Link>
      </div>
    </article>
  );
}

export default function Workshops() {
  const [filter, setFilter] = useState('All');

  const visible = WORKSHOPS.filter(
    w => filter === 'All' || w.status === filter.toLowerCase()
  );

  return (
    <Layout
      title="Workshops"
      description="Upcoming and past workshops on the AfricaNLP Playbook and Annotation Tool."
    >
      <section className={clsx(styles.section, styles.cfcSection, styles.cfcPageSection)}>
        <div className="container">

          <Link to="/" className={styles.cfcBackLink}>← Back to home</Link>

          {/* ── Hero ── */}
          <div className={styles.cfcHeader} style={{ marginBottom: '2rem' }}>
            <div>
              <span className={styles.sectionEyebrow}>Events &amp; Workshops</span>
              <Heading as="h1" className={styles.sectionTitle}>Workshops</Heading>
              <p className={styles.cfcLead}>
                We host and participate in workshops, demos, and community sessions focused on
                African NLP data creation, the AfricaNLP Playbook, and the annotation platform.
                Click any workshop to see the full agenda and details.
              </p>
            </div>
          </div>

          {/* ── Filter tabs ── */}
          <div style={{
            display: 'flex', gap: 0,
            borderBottom: '2px solid var(--ifm-color-emphasis-200)',
            marginBottom: '1.75rem', overflowX: 'auto',
          }}>
            {FILTERS.map(f => {
              const count = f === 'All'
                ? WORKSHOPS.length
                : WORKSHOPS.filter(w => w.status === f.toLowerCase()).length;
              const active = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  style={{
                    padding: '0.55rem 1.1rem',
                    border: 'none',
                    borderBottom: `3px solid ${active ? 'var(--ifm-color-primary)' : 'transparent'}`,
                    marginBottom: '-2px',
                    background: 'none',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    fontFamily: 'inherit',
                    color: active ? 'var(--ifm-color-primary)' : 'var(--ifm-color-emphasis-600)',
                    transition: 'color 0.15s, border-color 0.15s',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  {f}
                  <span style={{
                    marginLeft: '0.4em', fontSize: '0.75em',
                    background: 'var(--ifm-color-emphasis-200)',
                    borderRadius: 99, padding: '0.1em 0.5em',
                    color: 'var(--ifm-color-emphasis-700)',
                  }}>{count}</span>
                </button>
              );
            })}
          </div>

          {/* ── Workshop cards grid ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1rem',
            marginBottom: '3rem',
          }}>
            {visible.length === 0 && (
              <p style={{ color: 'var(--ifm-color-emphasis-500)', textAlign: 'center', padding: '2rem 0', gridColumn: '1/-1' }}>
                No workshops in this category yet.
              </p>
            )}
            {visible.map(w => <WorkshopCard key={w.id} w={w} />)}
          </div>

          {/* ── CTA ── */}
          <div className={styles.cfcActions} style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contribute-online" className={clsx('button', styles.primaryButton)}>
              Contribute to the Playbook
            </Link>
            <Link to="/about" className={clsx('button', styles.secondaryButton)}>
              About the project
            </Link>
          </div>

        </div>
      </section>
    </Layout>
  );
}
