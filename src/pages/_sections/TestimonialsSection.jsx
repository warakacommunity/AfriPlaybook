import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from '../index.module.css';

const TESTIMONIALS = [
  {
    quote:
      'The Playbook is exactly the practical, reproducible guide that African NLP has needed — a real reference, not a brochure.',
    name: 'Prof. Vukosi Marivate',
    role: 'Co-founder, Masakhane',
    org: 'University of Pretoria',
    initials: 'VM',
    color: '#4a7059',
    // Best-guess GitHub avatar — verify the handle is right and swap if not.
    image: 'https://github.com/vukosim.png',
  },
  {
    quote:
      'Pairing the Playbook with the Tool turns annotation theory into reproducible practice — that combination is what makes it useful in the field.',
    name: 'Dr. David Adelani',
    role: 'NLP Researcher, Masakhane',
    org: 'University College London',
    initials: 'DA',
    color: '#5d6e8a',
    image: 'https://github.com/dadelani.png',
  },
  {
    quote:
      'Documenting low-resource language work has long been ad-hoc — a shared playbook gives our teams a common vocabulary and saves a lot of guesswork.',
    name: 'Lilian Wanzare',
    role: 'NLP Researcher',
    org: 'Maseno University',
    initials: 'LW',
    color: '#5b7a8a',
    // Illustrated placeholder — replace with a real photo once permission is given.
    image: 'https://api.dicebear.com/9.x/personas/svg?seed=lilian-wanzare',
  },
  {
    quote:
      'Open guidance like this lowers the barrier for builders across the continent to ship language-first AI products responsibly.',
    name: 'Pelonomi Moiloa',
    role: 'Co-founder & CEO',
    org: 'Lelapa AI',
    initials: 'PM',
    color: '#7a5b8a',
    image: 'https://api.dicebear.com/9.x/personas/svg?seed=pelonomi-moiloa',
  },
  {
    quote:
      'Open infrastructure for African languages is finally catching up with the rest of the field. This is a major milestone for the community.',
    name: 'Grema',
    role: 'AI Researcher',
    org: 'Microsoft',
    initials: 'GR',
    color: '#5d8a72',
    image: 'https://api.dicebear.com/9.x/personas/svg?seed=grema-microsoft',
  },
  {
    quote:
      'A community-built standard for low-resource annotation. Long overdue and well executed — the kind of resource teams will reach for daily.',
    name: 'Aishwarya',
    role: 'Research, Language Technologies',
    org: 'Google',
    initials: 'AI',
    color: '#8a6b4a',
    image: 'https://api.dicebear.com/9.x/personas/svg?seed=aishwarya-google',
  },
  {
    quote:
      'For multilingual annotation across Bantu languages, this is the resource I wish we had had years ago — clear, applicable, and honest about trade-offs.',
    name: 'Peter Nabende',
    role: 'NLP Researcher',
    org: 'Makerere University',
    initials: 'PN',
    color: '#6e8a5b',
    image: 'https://api.dicebear.com/9.x/personas/svg?seed=peter-nabende',
  },
  {
    quote:
      'The combination of methodological rigor and African-context grounding makes this stand out from generic NLP guides — a long-overdue reference.',
    name: 'Prof. Muhammad Abdul-Mageed',
    role: 'NLP Lab Lead',
    org: 'University of British Columbia',
    initials: 'MA',
    color: '#8a5b6b',
    image: 'https://api.dicebear.com/9.x/personas/svg?seed=muhammad-abdul-mageed',
  },
];

export default function TestimonialsSection() {
  return (
    <section className={clsx(styles.testimonialsSection, styles.snapSection)} data-snap-section="testimonials">
      <div className="container">
        <div className={styles.testimonialsHeader}>
          <Heading as="h2" className={styles.testimonialsHeading}>
            From the Community
          </Heading>
        </div>
        <div className={styles.testimonialsGrid}>
          {TESTIMONIALS.map((t) => (
            <article className={styles.testimonialCard} key={t.name}>
              <p className={styles.testimonialQuote}>{t.quote}</p>
              <div className={styles.testimonialAuthor}>
                {t.image ? (
                  <img
                    src={t.image}
                    alt=""
                    className={styles.testimonialAvatar}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <span
                    className={styles.testimonialAvatar}
                    style={{background: t.color}}
                    aria-hidden="true">
                    {t.initials}
                  </span>
                )}
                <div className={styles.testimonialAuthorMeta}>
                  <span className={styles.testimonialName}>{t.name}</span>
                  <span className={styles.testimonialRole}>
                    {t.role} · {t.org}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
