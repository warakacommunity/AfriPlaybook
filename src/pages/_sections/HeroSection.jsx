import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import { IconBookOpen, IconWrench } from '@site/src/components/Icons';
import styles from '../index.module.css';

export default function HeroSection() {
  const heroPhotoUrl = useBaseUrl('/img/hero.jpg');
  const haUrl = `pathname://${useBaseUrl('/ha/')}`;
  const amUrl = `pathname://${useBaseUrl('/am/')}`;
  const swUrl = `pathname://${useBaseUrl('/sw/')}`;
  const frUrl = `pathname://${useBaseUrl('/fr/')}`;
  const ptUrl = `pathname://${useBaseUrl('/pt/')}`;
  return (
    <header className={clsx(styles.hero, styles.snapSection)} data-snap-section="hero" data-visible="">
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
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
            <p className={styles.heroLangs}>
              <span className={styles.heroLangsLabel}>Read the Playbook in:</span>{' '}
              <Link className={styles.heroLangLink} to={haUrl} hrefLang="ha">Hausa</Link>
              <Link className={styles.heroLangLink} to={amUrl} hrefLang="am">Amharic</Link>
              <Link className={styles.heroLangLink} to={swUrl} hrefLang="sw">Swahili</Link>
              <Link className={styles.heroLangLink} to={frUrl} hrefLang="fr">Français</Link>
              <Link className={styles.heroLangLink} to={ptUrl} hrefLang="pt">Português</Link>
            </p>
            <div className={styles.heroButtons}>
              <Link className={clsx('button', styles.primaryButton)} to="/playbook/">
                <IconBookOpen size={18} /> Read the Playbook
              </Link>
              <Link className={clsx('button', styles.secondaryButton)} to="/tool">
                <IconWrench size={18} /> Explore the Tool
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
