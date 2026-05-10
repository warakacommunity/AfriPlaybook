import clsx from 'clsx';
import {usePluginData} from '@docusaurus/useGlobalData';
import Heading from '@theme/Heading';
import { IconUsers } from '@site/src/components/Icons';
import styles from '../index.module.css';

export default function ContributorsSection() {
  const data = usePluginData('github-contributors');
  const contributors = data?.contributors ?? [];

  if (contributors.length === 0) return null;

  return (
    <section className={clsx(styles.section, styles.altSection)}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Thanks to our Contributors
          </Heading>
          <p className={styles.sectionLead}>
            The Playbook is built by a growing community of researchers,
            students, and language experts. If you've contributed code,
            content, or review — thank you.
          </p>
        </div>
        <div className={styles.contributorsGrid}>
          {contributors.map((c) => (
            <a
              key={c.login}
              href={c.htmlUrl}
              target="_blank"
              rel="noreferrer noopener"
              className={styles.contributorCard}
              title={`${c.login} — ${c.contributions} contribution${
                c.contributions === 1 ? '' : 's'
              }`}>
              <img
                src={c.avatarUrl}
                alt=""
                className={styles.contributorAvatar}
                loading="lazy"
                decoding="async"
              />
              <span className={styles.contributorLogin}>@{c.login}</span>
            </a>
          ))}
        </div>
        <div className={styles.contributorsCtaWrap}>
          <a
            href="https://discord.gg/ChNPHV2PPS"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.contributorsCta}>
            <IconUsers size={18} /> Join the community
          </a>
        </div>
      </div>
    </section>
  );
}
