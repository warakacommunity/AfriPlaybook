import clsx from 'clsx';
import Heading from '@theme/Heading';
import {
  IconBookOpen,
  IconUsers,
  IconArrowRight,
  IconSparkles,
  IconRocket,
} from '@site/src/components/Icons';
import styles from '../index.module.css';

const GET_INVOLVED = [
  {
    icon: IconBookOpen,
    title: 'Write a chapter',
    body: 'Fill a gap in the Playbook — propose a chapter, write it, open a PR.',
    href: 'https://github.com/warakacommunity/AfriPlaybook/blob/main/README.md#how-to-contribute-a-chapter',
  },
  {
    icon: IconSparkles,
    title: 'Translate a page',
    body: 'Adapt an existing chapter into Hausa, Amharic, Swahili, French, or Portuguese.',
    href: 'https://github.com/warakacommunity/AfriPlaybook/blob/main/README.md#how-to-translate',
  },
  {
    icon: IconUsers,
    title: 'Join Discord',
    body: 'Discuss approaches, share your work, and meet other contributors.',
    href: 'https://discord.gg/ChNPHV2PPS',
  },
  {
    icon: IconRocket,
    title: 'Star on GitHub',
    body: 'Help the project gain visibility — every star widens its reach.',
    href: 'https://github.com/warakacommunity/AfriPlaybook',
  },
];

export default function GetInvolvedSection() {
  return (
    <section className={clsx(styles.section, styles.snapSection)} data-snap-section="join">
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Help build the Playbook
          </Heading>
          <p className={styles.sectionLead}>
            We welcome researchers, practitioners, students, and language
            experts. Pick whichever fits — every contribution counts.
          </p>
        </div>
        <div className={styles.getInvolvedGrid}>
          {GET_INVOLVED.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                className={styles.getInvolvedCard}>
                <div className={styles.getInvolvedIcon}>
                  <Icon size={22} />
                </div>
                <h3 className={styles.getInvolvedTitle}>{item.title}</h3>
                <p className={styles.getInvolvedBody}>{item.body}</p>
                <span className={styles.getInvolvedArrow}>
                  <IconArrowRight size={16} />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
