import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import styles from '../index.module.css';

const SUPPORTERS = [
  {
    name: 'Masakhane African Languages Hub',
    logo: '/img/supporters/masakhane.png',
    url: 'https://www.masakhane.io/',
  },
  {
    name: 'Bayero University, Kano',
    logo: '/img/supporters/bayero.png',
    url: 'https://www.buk.edu.ng/',
  },
  {
    name: 'Bahir Dar University',
    logo: '/img/supporters/bahir-dar.png',
    url: 'https://www.bdu.edu.et/',
  },
  {
    name: 'HausaNLP',
    logo: '/img/supporters/hausanlp.svg',
    url: 'https://hausanlp.org/',
  },
  {
    name: 'EthioNLP',
    logo: '/img/supporters/EthioNLP_logo.png',
    url: 'https://ethionlp.github.io/',
  },
];

export default function SupportedBySection() {
  const {withBaseUrl} = useBaseUrlUtils();
  const track = [...SUPPORTERS, ...SUPPORTERS];
  // Resolve logo paths through baseUrl so they work under /AfriPlaybook/.
  // External absolute URLs (http/https) are passed through unchanged.
  const resolveLogo = (src) =>
    /^https?:\/\//.test(src) ? src : withBaseUrl(src);
  return (
    <div className={styles.supportedByCard} aria-label="Project supporters">
      <p className={styles.supportersLabel}>SUPPORTED BY</p>
      <div className={styles.supportersMarquee}>
        <div className={styles.supportersTrack}>
          {track.map((s, idx) => (
            <a
              key={`${s.name}-${idx}`}
              href={s.url}
              className={styles.supporterLogo}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={s.name}
              aria-hidden={idx >= SUPPORTERS.length ? 'true' : undefined}
              tabIndex={idx >= SUPPORTERS.length ? -1 : undefined}
            >
              <img
                src={resolveLogo(s.logo)}
                alt={s.name}
                loading="lazy"
                decoding="async"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
