import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import { IconBookOpen, IconWrench, IconDiscord } from '@site/src/components/Icons';
import styles from '../index.module.css';

export default function HeroSection() {
  const heroPhotoUrl = useBaseUrl('/img/hero.jpg');
  return (
    <header className={clsx(styles.hero, styles.snapSection)} data-snap-section="hero" data-visible="">
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>
              <span className={styles.heroEyebrowMark} aria-hidden="true">✦</span>
              From the creators of{' '}
              <Link className={styles.heroEyebrowLink} to="#" rel="noopener noreferrer">AfriSenti</Link>
              {' '}and{' '}
              <Link className={styles.heroEyebrowLink} to="#" rel="noopener noreferrer">AfriHate</Link>
            </p>
            <Heading as="h1" className={styles.heroTitle}>
              Build African language datasets,
              {' '}
              <span className={styles.heroTitleAccent}>the right way.</span>
            </Heading>
            <p className={styles.heroTagline}>
              An open playbook and annotation platform for grassroots NLP data
              collection — designed with communities, for communities, across
              the continent.
            </p>
            <div className={styles.heroButtons}>
              <Link className={clsx('button', styles.primaryButton)} to="/AfriPlaybook/">
                <IconBookOpen size={18} /> Read the Playbook
              </Link>
              <Link className={clsx('button', styles.secondaryButton)} to="/tool">
                <IconWrench size={18} /> Explore the Tool
              </Link>
              <Link
                className={clsx('button', styles.discordButton)}
                to="https://discord.gg/ChNPHV2PPS"
              >
                <IconDiscord size={18} /> Join our Discord
              </Link>
            </div>
          </div>
          <div
            className={styles.heroPhoto}
            style={{backgroundImage: `url(${heroPhotoUrl})`}}
            aria-hidden="true"
          />
        </div>
      </div>
    </header>
  );
}
