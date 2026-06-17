import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Head from '@docusaurus/Head';
import {
  IconUsers,
  IconCheckCircle,
  IconArrowRight,
  IconShieldCheck,
  IconSparkles,
} from '@site/src/components/Icons';
import '../css/landing.css';

const MODULES = [
  {
    icon: <IconCheckCircle size={26} />,
    tag: 'Opportunities',
    title: 'Find work, mentors & collaborators',
    text: 'A live board of asks from the community — annotation work, mentorship, co-author slots, and project staffing in African languages.',
    points: [
      'Researchers, labs and NGOs post real opportunities; you raise your hand in your language.',
      'Find a mentor, join a paper, or pick up annotation work and turn it into experience.',
      'Opportunities link straight into AfriAnnotate, so labelling starts with one click.',
    ],
  },
  {
    icon: <IconUsers size={26} />,
    tag: 'Directory',
    title: 'Expert & collaborator directory',
    text: 'Discoverable profiles of students, practitioners and experts in African AI/NLP — searchable by what they actually do.',
    points: [
      'Filter by language, NLP domain (MT, ASR, sentiment, TTS, NER) and region to find collaborators.',
      'Verified via ORCID, GitHub and institutional email — no anonymous accounts.',
      'Earn community endorsements that build a portable, trusted reputation.',
    ],
  },
];

const OLD = [
  'Generic, global, anonymous',
  'No reputation that travels',
  'One-off micro-tasks only',
  'No mentors or collaborators',
  'Disconnected from your tooling',
];
const NEW = [
  'African languages first',
  'Verified profiles + community endorsements',
  'Work, mentorship and collaboration',
  'Find mentors, co-authors and project teams',
  'Wired straight into AfriAnnotate projects',
];

const STEPS = [
  { n: '01', title: 'Build your profile', text: 'Register, declare the languages you speak and the domains you work in, and get verified via ORCID, GitHub or institutional email.' },
  { n: '02', title: 'Get endorsed', text: 'Language Leads and peers vouch for your work, building a reputation that travels with you across the community.' },
  { n: '03', title: 'Get matched', text: 'Pick up annotation work, find mentors and collaborators, and jump straight into AfriAnnotate projects.' },
];

export default function AfriFinder() {
  const asks = useBaseUrl('/img/screens/finder-asks.png');
  const people = useBaseUrl('/img/screens/finder-people.png');
  const logo = useBaseUrl('/img/brand/afrifinder-lockup.svg');
  const mark = useBaseUrl('/img/brand/afrifinder-mark.svg');
  return (
    <Layout
      title="AfriFinder — find verified annotators & African NLP experts"
      description="A marketplace for annotation jobs and a directory of African NLP researchers and linguists — verified by the communities who speak the language.">
      <Head>
        <body className="lp-host" />
      </Head>
      <div className="lp-page">

        {/* ============ HERO ============ */}
        <header className="lp-hero-brand">
          <div className="lp-hero-fold">
            <img className="lp-hero-bg" src={mark} alt="" aria-hidden="true" />
            <div className="lp-wrap lp-hero-center">
              <img className="lp-hero-logo lp-anim lp-d1" src={logo} alt="AfriFinder" />
              <div className="lp-tickframe lp-anim lp-d2">
                <span className="lp-tick lp-tick-tl" />
                <span className="lp-tick lp-tick-tr" />
                <span className="lp-tick lp-tick-bl" />
                <span className="lp-tick lp-tick-br" />
                <h1 className="lp-h1">
                  Find the people who <em>actually speak the language.</em>
                </h1>
              </div>
              <p className="lp-lead lp-anim lp-d3">
                Get discovered for annotation work, find mentors and
                collaborators, and build a verified reputation in African NLP —
                endorsed by the communities who speak the language, and wired
                straight into AfriAnnotate projects.
              </p>
              <div className="lp-cta-row lp-anim lp-d4">
                <a className="lp-btn lp-btn-primary" href="https://finder.afriannotate.org" target="_blank" rel="noopener noreferrer">
                  Get started — free <IconArrowRight size={18} />
                </a>
                <a className="lp-btn lp-btn-ghost" href="https://finder.afriannotate.org/asks" target="_blank" rel="noopener noreferrer">
                  Browse open asks
                </a>
              </div>
              <div className="lp-hero-stats lp-anim lp-d5">
                <div>
                  <div className="lp-stat-num">Verified</div>
                  <div className="lp-stat-label">by Language Leads</div>
                </div>
                <div>
                  <div className="lp-stat-num">Endorsed</div>
                  <div className="lp-stat-label">by the community</div>
                </div>
                <div>
                  <div className="lp-stat-num">Connected</div>
                  <div className="lp-stat-label">to AfriAnnotate</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lp-wrap">
            <div className="lp-hero-shot">
              <div className="lp-frame">
                <div className="lp-frame-bar">
                  <span className="lp-frame-dot" />
                  <span className="lp-frame-dot" />
                  <span className="lp-frame-dot" />
                  <span className="lp-frame-url">finder.afriannotate.org/asks</span>
                </div>
                <img src={asks} alt="AfriFinder asks board with real community postings" loading="lazy" />
              </div>
            </div>
          </div>
        </header>

        {/* ============ TRUST ============ */}
        <div className="lp-wrap">
          <div className="lp-trust">
            <span><b>ORCID</b> · GitHub · institutional verification</span>
            <span>Community <b>endorsements</b></span>
            <span>Per-language <b>Language Leads</b></span>
          </div>
        </div>

        {/* ============ PROBLEM ============ */}
        <section className="lp-section">
          <div className="lp-wrap">
            <span className="lp-section-kicker">The problem</span>
            <h2 className="lp-h2" style={{maxWidth: '15em'}}>
              African NLP hits the same two walls — <em>again and again.</em>
            </h2>
            <p className="lp-body">
              Finding verified, quality annotators for a specific language, and
              finding the right researcher or linguist to collaborate with.
              Today that happens over Twitter, WhatsApp groups and word of mouth
              — slow, opaque, and impossible to scale. AfriFinder is one place
              to do both, with people who actually speak the language vouching
              for who is qualified.
            </p>
          </div>
        </section>

        {/* ============ MODULES ============ */}
        <section className="lp-section" style={{paddingTop: 0}}>
          <div className="lp-wrap">
            <span className="lp-section-kicker">Two sides, one community</span>
            <h2 className="lp-h2">Opportunities <em>and</em> a directory</h2>
            <div className="lp-feature-grid" style={{gridTemplateColumns: '1fr 1fr'}}>
              {MODULES.map((m) => (
                <article key={m.title} className="lp-feature-card is-unique">
                  <div className="lp-feature-top">
                    <span className="lp-feature-icon">{m.icon}</span>
                    <span className="lp-badge">{m.tag}</span>
                  </div>
                  <h3 className="lp-feature-h">{m.title}</h3>
                  <p className="lp-feature-p" style={{marginBottom: '1rem'}}>{m.text}</p>
                  <ul className="lp-feature-p" style={{margin: 0, paddingLeft: '1.1rem'}}>
                    {m.points.map((p) => (
                      <li key={p} style={{marginBottom: '0.5rem'}}>{p}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ DIRECTORY SHOWCASE ============ */}
        <section className="lp-section" style={{paddingTop: 0}}>
          <div className="lp-wrap lp-split">
            <div className="lp-split-media">
              <div className="lp-frame">
                <div className="lp-frame-bar">
                  <span className="lp-frame-dot" />
                  <span className="lp-frame-dot" />
                  <span className="lp-frame-dot" />
                  <span className="lp-frame-url">finder.afriannotate.org</span>
                </div>
                <img src={people} alt="AfriFinder verified people directory with language and domain filters" loading="lazy" />
              </div>
            </div>
            <div>
              <span className="lp-split-tag">The directory</span>
              <h2 className="lp-h2" style={{marginTop: '0.8rem'}}>Search by language, domain, and region</h2>
              <p className="lp-body">
                A verified directory of students, practitioners and experts in
                African AI and NLP. Filter by the languages people speak, the
                NLP domains they work in, and the endorsements they&apos;ve
                earned — then reach out to collaborate.
              </p>
              <div className="lp-cta-row">
                <a className="lp-btn lp-btn-ghost" href="https://finder.afriannotate.org" target="_blank" rel="noopener noreferrer">
                  Explore the directory <IconArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ STEPS ============ */}
        <section className="lp-section" style={{paddingTop: 0}}>
          <div className="lp-wrap">
            <span className="lp-section-kicker">How it works</span>
            <h2 className="lp-h2">Join. Get endorsed. Get matched.</h2>
            <div className="lp-steps">
              {STEPS.map((s) => (
                <div key={s.n} className="lp-step">
                  <div className="lp-step-n">{s.n}</div>
                  <h3 className="lp-step-h">{s.title}</h3>
                  <p className="lp-step-p">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ COMPARISON ============ */}
        <section className="lp-section" style={{paddingTop: 0}}>
          <div className="lp-wrap">
            <span className="lp-section-kicker">The difference</span>
            <h2 className="lp-h2">MTurk vs <em>AfriFinder</em></h2>
            <div className="lp-vs">
              <div className="lp-vs-col lp-vs-old">
                <div className="lp-vs-h">MTurk</div>
                {OLD.map((t) => (
                  <div key={t} className="lp-vs-item">
                    <span className="lp-vs-mark" aria-hidden="true">✕</span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
              <div className="lp-vs-col lp-vs-new">
                <div className="lp-vs-h">AfriFinder</div>
                {NEW.map((t) => (
                  <div key={t} className="lp-vs-item">
                    <span className="lp-vs-mark"><IconCheckCircle size={18} /></span>
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ FINAL CTA ============ */}
        <section className="lp-final">
          <span className="lp-section-kicker">Community-owned</span>
          <h2 className="lp-h2">Get discovered. Find your people.</h2>
          <p className="lp-lead">
            Build a verified profile, pick up work, find mentors and
            collaborators — or lead a language as a trusted community voice.
          </p>
          <div className="lp-cta-row">
            <a className="lp-btn lp-btn-primary" href="https://finder.afriannotate.org" target="_blank" rel="noopener noreferrer">
              Get started — free <IconArrowRight size={18} />
            </a>
            <a className="lp-btn lp-btn-ghost" href="https://discord.gg/ChNPHV2PPS" target="_blank" rel="noopener noreferrer">
              Join the Discord
            </a>
          </div>
        </section>

      </div>
    </Layout>
  );
}
