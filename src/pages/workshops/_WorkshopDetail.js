import clsx from 'clsx';
import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from '../index.module.css';

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

function Badge({ label, color, bg }) {
  return (
    <span style={{
      display: 'inline-block', padding: '0.25em 0.85em', borderRadius: 99,
      fontSize: '0.8rem', fontWeight: 700, background: bg, color,
      letterSpacing: '0.04em', textTransform: 'uppercase',
    }}>{label}</span>
  );
}

export default function WorkshopDetail({ workshop: w }) {
  const s = STATUS[w.status];
  const typeColor = TYPE_COLOR[w.type] || '#6b7280';

  return (
    <Layout title={w.title} description={w.subtitle}>
      <section className={clsx(styles.section, styles.cfcSection, styles.cfcPageSection)}>
        <div className="container">

          <Link to="/workshops" className={styles.cfcBackLink}>← Back to Workshops</Link>

          {/* ── Hero ── */}
          <div style={{
            marginBottom: '2.5rem',
            padding: '2.5rem 2rem',
            background: 'linear-gradient(135deg, #1e4976 0%, #2e86c1 60%, #5dade2 100%)',
            borderRadius: 16,
            color: '#fff',
          }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.1rem' }}>
              <Badge label={w.type} color="#fff" bg={`${typeColor}55`} />
            </div>
            <Heading as="h1" style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              lineHeight: 1.15, margin: '0 0 0.5rem',
              color: '#fff', fontWeight: 800, letterSpacing: '-0.02em',
            }}>
              {w.title}
            </Heading>
            <p style={{
              fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
              fontWeight: 500, color: 'rgba(255,255,255,0.88)',
              margin: '0 0 1.5rem', lineHeight: 1.4,
            }}>
              {w.subtitle}
            </p>
            <div style={{
              display: 'flex', gap: '1.25rem', flexWrap: 'wrap',
              padding: '0.7rem 1.1rem',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: 8, fontSize: '1rem',
              color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem',
              backdropFilter: 'blur(4px)',
            }}>
              <span>📅 {w.date}</span>
              <span>📍 {w.venue}{w.location && w.location !== w.venue ? ` — ${w.location}` : ''}</span>
              <span>⏱ {w.duration}</span>
            </div>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.78)', margin: 0 }}>
              {w.description}
            </p>
          </div>

          {/* ── Agenda ── */}
          <div style={{ marginBottom: '3rem', border: '1px solid var(--ifm-color-emphasis-200)', borderRadius: 10, overflow: 'hidden' }}>
            <div style={{
              padding: '0.7rem 1.1rem',
              background: 'linear-gradient(135deg, #1a5276 0%, #2e86c1 100%)',
              fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.08em', color: '#fff',
            }}>Agenda · {w.duration}</div>
            <div style={{ padding: '1.5rem 1.5rem 0.75rem' }}>
              {w.agenda.map((a, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', paddingBottom: i < w.agenda.length - 1 ? '1.5rem' : 0, position: 'relative' }}>
                  {i < w.agenda.length - 1 && (
                    <div style={{
                      position: 'absolute', left: '18px', top: '36px', bottom: 0, width: '2px',
                      background: 'var(--ifm-color-emphasis-200)',
                    }} />
                  )}
                  <div style={{
                    flexShrink: 0, width: '36px', height: '36px', borderRadius: '50%',
                    background: 'var(--ifm-color-primary)', color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontSize: '0.85rem', position: 'relative', zIndex: 1,
                  }}>{i + 1}</div>
                  <div style={{ paddingTop: '0.35rem' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6em', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                      <strong style={{ fontSize: '1.05rem', color: 'var(--ifm-font-color-base)' }}>{a.title}</strong>
                      <span style={{
                        fontSize: '0.82rem', fontWeight: 600, color: 'var(--ifm-font-color-base)',
                        background: 'var(--ifm-color-emphasis-200)', borderRadius: 99,
                        padding: '0.05em 0.6em',
                      }}>{a.time}</span>
                    </div>
                    {a.detail && (
                      <p style={{ fontSize: '0.975rem', color: 'var(--ifm-font-color-base)', margin: 0, lineHeight: 1.65 }}>
                        {a.detail}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Objectives + Outcomes ── */}
          {(w.objectives?.length > 0 || w.outcomes?.length > 0) && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.25rem', marginBottom: '1.5rem',
            }}>
              {w.objectives?.length > 0 && (
                <div style={{ border: '1px solid var(--ifm-color-emphasis-200)', borderRadius: 10, overflow: 'hidden' }}>
                  <div style={{
                    padding: '0.7rem 1.1rem', background: 'var(--ifm-color-primary)',
                    fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase',
                    letterSpacing: '0.08em', color: '#fff',
                  }}>Objectives</div>
                  <div style={{ padding: '1rem 1.1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {w.objectives.map((o, i) => (
                      <div key={i} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                        <span style={{
                          flexShrink: 0, width: '20px', height: '20px', borderRadius: '50%',
                          background: 'rgba(26,82,118,0.1)', color: 'var(--ifm-color-primary)',
                          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '0.7rem', fontWeight: 800, marginTop: '0.15rem',
                        }}>{i + 1}</span>
                        <span style={{ fontSize: '0.95rem', color: 'var(--ifm-font-color-base)', lineHeight: 1.55 }}>{o}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {w.outcomes?.length > 0 && (
                <div style={{ border: '1px solid rgba(5,150,105,0.25)', borderRadius: 10, overflow: 'hidden' }}>
                  <div style={{
                    padding: '0.7rem 1.1rem', background: '#059669',
                    fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase',
                    letterSpacing: '0.08em', color: '#fff',
                  }}>Expected Outcomes</div>
                  <div style={{ padding: '1rem 1.1rem', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {w.outcomes.map((o, i) => (
                      <div key={i} style={{
                        display: 'flex', gap: '0.55rem', alignItems: 'flex-start',
                        padding: '0.35rem 0.55rem', borderRadius: 6,
                        background: i % 2 === 0 ? 'rgba(5,150,105,0.06)' : 'transparent',
                      }}>
                        <span style={{ color: '#059669', flexShrink: 0, fontWeight: 700, fontSize: '0.9rem', marginTop: '0.1rem' }}>✓</span>
                        <span style={{ fontSize: '0.95rem', color: 'var(--ifm-font-color-base)', lineHeight: 1.55 }}>{o}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── Audience + Organizing Team ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.25rem', marginBottom: '2.5rem',
          }}>
            <div style={{ border: '1px solid var(--ifm-color-emphasis-200)', borderRadius: 10, overflow: 'hidden' }}>
              <div style={{
                padding: '0.7rem 1.1rem', background: 'var(--ifm-color-primary)',
                fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.08em', color: '#fff',
              }}>Who Should Attend</div>
              <div style={{ padding: '1rem 1.1rem', display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {w.audience.map((a, i) => (
                  <span key={i} style={{
                    display: 'inline-block', padding: '0.3em 0.8em',
                    borderRadius: 99, fontSize: '0.9rem',
                    background: 'var(--ifm-background-color)',
                    color: 'var(--ifm-font-color-base)',
                    border: '1px solid var(--ifm-color-emphasis-300)',
                  }}>{a}</span>
                ))}
              </div>
            </div>

            {w.organizers?.length > 0 && (
              <div style={{ border: '1px solid rgba(5,150,105,0.25)', borderRadius: 10, overflow: 'hidden' }}>
                <div style={{
                  padding: '0.7rem 1.1rem', background: '#059669',
                  fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase',
                  letterSpacing: '0.08em', color: '#fff',
                }}>Organizing Team</div>
                <div style={{ padding: '1rem 1.1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {w.organizers.map(({ name, affil }, i) => {
                    const initials = name.split(' ').filter(Boolean).map(n => n[0]).slice(0, 2).join('');
                    const hue = (i * 53 + 200) % 360;
                    return (
                      <div key={i} style={{ display: 'flex', gap: '0.7rem', alignItems: 'center' }}>
                        <div style={{
                          flexShrink: 0, width: '34px', height: '34px', borderRadius: '50%',
                          background: `hsl(${hue},55%,88%)`, color: `hsl(${hue},55%,28%)`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '0.72rem', fontWeight: 800,
                        }}>{initials}</div>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--ifm-font-color-base)', lineHeight: 1.2 }}>{name}</div>
                          {affil && <div style={{ fontSize: '0.82rem', color: 'var(--ifm-color-emphasis-700)' }}>{affil}</div>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* ── CTAs ── */}
          <div className={styles.cfcActions} style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/workshops" className={clsx('button', styles.secondaryButton)}>← All Workshops</Link>
            <Link to="/contribute-online" className={clsx('button', styles.primaryButton)}>Contribute to the Playbook</Link>
          </div>

        </div>
      </section>
    </Layout>
  );
}
