import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Head from '@docusaurus/Head';
import {
  IconShieldCheck,
  IconMic,
  IconCheckCircle,
  IconClipboardCheck,
  IconAward,
  IconUsers,
  IconArrowRight,
  IconFileText,
  IconLayers,
  IconImage,
  IconSparkles,
} from '@site/src/components/Icons';
import '../css/landing.css';

const FEATURES = [
  {
    icon: <IconShieldCheck size={26} />,
    title: 'Truly offline — desktop & mobile',
    text: 'Native desktop and mobile apps run a full database on-device, so you can label with zero signal. Work auto-syncs with a three-way merge when you reconnect. No lost annotations.',
    unique: true,
  },
  {
    icon: <IconMic size={26} />,
    title: 'Record speech inside the task',
    text: 'A built-in recorder with a live signal/SNR meter lets native speakers contribute voice data straight from the browser — no external app, no upload step.',
    unique: true,
  },
  {
    icon: <IconCheckCircle size={26} />,
    title: 'Automatic audio quality control',
    text: 'Every clip is scored on 11+ checks — SNR, clipping, silence, VAD, plus optional Whisper transcript match, language ID and forced alignment. Bad takes are flagged or sent back automatically.',
    unique: true,
  },
  {
    icon: <IconClipboardCheck size={26} />,
    title: 'Review & agreement built in',
    text: "Reviewer roles, a sampled review queue, and inter-annotator agreement per task — Fleiss' κ, IoU, F1 for NER, ICC for ratings — with low-agreement strategies you control.",
  },
  {
    icon: <IconAward size={26} />,
    title: 'Consent & ethics, first-class',
    text: 'Versioned consent (data use, voice release, guardian/minor, payment terms) with tamper-evident, hash-chained signatures captured before anyone annotates. Built for data sovereignty.',
    unique: true,
  },
  {
    icon: <IconUsers size={26} />,
    title: 'Built for African languages',
    text: 'Per-user language, localized UI and multi-script input — and recruit verified native speakers straight from the AfriFinder directory into your project, with consent baked in.',
  },
];

const TASKS = [
  { icon: <IconMic size={16} />, label: 'Audio recording' },
  { icon: <IconFileText size={16} />, label: 'Transcription' },
  { icon: <IconLayers size={16} />, label: 'Translation' },
  { icon: <IconSparkles size={16} />, label: 'Sentiment' },
  { icon: <IconFileText size={16} />, label: 'Named entities' },
  { icon: <IconMic size={16} />, label: 'Speech / ASR' },
  { icon: <IconSparkles size={16} />, label: 'LLM evaluation' },
  { icon: <IconClipboardCheck size={16} />, label: 'Ranking' },
  { icon: <IconImage size={16} />, label: 'Multimodal' },
];

const OLD = [
  'Desktop-only, needs a connection',
  'No built-in audio capture or QC',
  'Agreement metrics bolted on later',
  'Consent handled off-platform',
  'Latin-centric input',
  'Find annotators yourself',
];
const NEW = [
  'Offline-first desktop & mobile, auto-sync',
  'In-browser recording with automatic QC',
  'Reviewer roles + IAA (κ, IoU, F1, ICC) built in',
  'Tamper-evident consent before annotation',
  'Multi-script input and per-user language',
  'Recruit verified speakers from AfriFinder',
];

const STEPS = [
  { n: '01', title: 'Collect', text: 'Researchers and community leads publish tasks with clear scope, target language, and guidelines.' },
  { n: '02', title: 'Annotate', text: 'Annotators label on their phone — online or offline — in their native language and script.' },
  { n: '03', title: 'Validate', text: 'Reviewers check agreement and sign off, so every dataset ships with a quality trail.' },
];

export default function Tool() {
  const shot = useBaseUrl('/img/screens/label-home.png');
  const templates = useBaseUrl('/img/screens/label-template-preview.png');
  const logo = useBaseUrl('/img/brand/afriannotate-lockup.svg');
  const mark = useBaseUrl('/img/brand/afriannotate-mark.svg');
  return (
    <Layout
      title="AfriAnnotate — annotation built for African languages"
      description="Open-source, mobile-first, offline-capable annotation with built-in speech capture, quality control, agreement and consent. Built for African languages.">
      <Head>
        <body className="lp-host" />
      </Head>
      <div className="lp-page">

        {/* ============ HERO ============ */}
        <header className="lp-hero-brand">
          <div className="lp-hero-fold">
            <img className="lp-hero-bg" src={mark} alt="" aria-hidden="true" />
            <div className="lp-wrap lp-hero-center">
              <img className="lp-hero-logo lp-anim lp-d1" src={logo} alt="AfriAnnotate" />
              <div className="lp-tickframe lp-anim lp-d2">
                <span className="lp-tick lp-tick-tl" />
                <span className="lp-tick lp-tick-tr" />
                <span className="lp-tick lp-tick-bl" />
                <span className="lp-tick lp-tick-br" />
                <h1 className="lp-h1">
                  Annotation that works <em>where other tools quit.</em>
                </h1>
              </div>
              <p className="lp-lead lp-anim lp-d3">
                AfriAnnotate is the open-source, mobile-first annotation
                platform for African languages — fully offline, with built-in
                speech capture, automatic quality control, agreement, and
                consent baked in.
              </p>
              <div className="lp-cta-row lp-anim lp-d4">
                <a className="lp-btn lp-btn-primary" href="https://label.afriannotate.org" target="_blank" rel="noopener noreferrer">
                  Get started — free <IconArrowRight size={18} />
                </a>
                <a className="lp-btn lp-btn-ghost" href={useBaseUrl('/AfriPlaybook')}>
                  Read the Playbook
                </a>
              </div>
              <div className="lp-hero-stats lp-anim lp-d5">
                <div>
                  <div className="lp-stat-num">100%</div>
                  <div className="lp-stat-label">offline-capable</div>
                </div>
                <div>
                  <div className="lp-stat-num">11+</div>
                  <div className="lp-stat-label">audio QC checks</div>
                </div>
                <div>
                  <div className="lp-stat-num">Apache 2.0</div>
                  <div className="lp-stat-label">open source</div>
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
                  <span className="lp-frame-url">label.afriannotate.org</span>
                </div>
                <img src={shot} alt="AfriAnnotate running live" loading="lazy" />
              </div>
            </div>
          </div>
        </header>

        {/* ============ TRUST ============ */}
        <div className="lp-wrap">
          <div className="lp-trust">
            <span>Built on <b>Label Studio</b></span>
            <span><b>Apache-2.0</b> licensed</span>
            <span>For <b>Masakhane</b></span>
            <span><b>EthioNLP</b></span>
            <span><b>HausaNLP</b></span>
          </div>
        </div>

        {/* ============ PROBLEM ============ */}
        <section className="lp-section">
          <div className="lp-wrap">
            <span className="lp-section-kicker">The problem</span>
            <h2 className="lp-h2" style={{maxWidth: '16em'}}>
              Most annotation tools assume a desktop, a fast connection, and a{' '}
              <em>Latin keyboard.</em>
            </h2>
            <p className="lp-body">
              That leaves out the people best placed to build African language
              datasets — native speakers annotating from a phone, on mobile
              data, in scripts those tools never planned for. AfriAnnotate
              flips the defaults: mobile-first, offline-first, and multilingual
              from the ground up.
            </p>
          </div>
        </section>

        {/* ============ FEATURES ============ */}
        <section className="lp-section" style={{paddingTop: 0}}>
          <div className="lp-wrap">
            <span className="lp-section-kicker">Why AfriAnnotate</span>
            <h2 className="lp-h2">What you won&apos;t find in other tools</h2>
            <p className="lp-body">
              It started as Label Studio, then added the things African
              language data work actually needs — and that no other annotation
              tool ships out of the box.
            </p>
            <div className="lp-feature-grid">
              {FEATURES.map((f) => (
                <article key={f.title} className={`lp-feature-card${f.unique ? ' is-unique' : ''}`}>
                  <div className="lp-feature-top">
                    <span className="lp-feature-icon">{f.icon}</span>
                    {f.unique && <span className="lp-badge">Unique</span>}
                  </div>
                  <h3 className="lp-feature-h">{f.title}</h3>
                  <p className="lp-feature-p">{f.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ TEMPLATE SHOWCASE ============ */}
        <section className="lp-section" style={{paddingTop: 0}}>
          <div className="lp-wrap lp-split reverse">
            <div className="lp-split-media">
              <div className="lp-frame">
                <div className="lp-frame-bar">
                  <span className="lp-frame-dot" />
                  <span className="lp-frame-dot" />
                  <span className="lp-frame-dot" />
                  <span className="lp-frame-url">label.afriannotate.org</span>
                </div>
                <img src={templates} alt="AfriAnnotate labeling templates: NER, code-switching, ABSA, machine translation and more" loading="lazy" />
              </div>
            </div>
            <div>
              <span className="lp-split-tag">Ready-made templates</span>
              <h2 className="lp-h2" style={{marginTop: '0.8rem'}}>Annotation types made for African data</h2>
              <p className="lp-body">
                Start from a template, not a blank config — including ones you
                won&apos;t find elsewhere, like <strong style={{color: 'var(--lp-ink)'}}>Code-Switching
                (language ID per span)</strong>, aspect-based sentiment,
                machine translation, NER, and voice collection. Tweak the
                labeling config or bring your own.
              </p>
            </div>
          </div>
        </section>

        {/* ============ COMPARISON ============ */}
        <section className="lp-section" style={{paddingTop: 0}}>
          <div className="lp-wrap">
            <span className="lp-section-kicker">The difference</span>
            <h2 className="lp-h2">Other tools vs <em>AfriAnnotate</em></h2>
            <div className="lp-vs">
              <div className="lp-vs-col lp-vs-old">
                <div className="lp-vs-h">Other annotation tools</div>
                {OLD.map((t) => (
                  <div key={t} className="lp-vs-item">
                    <span className="lp-vs-mark" aria-hidden="true">✕</span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
              <div className="lp-vs-col lp-vs-new">
                <div className="lp-vs-h">AfriAnnotate</div>
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

        {/* ============ TASKS ============ */}
        <section className="lp-section" style={{paddingTop: 0}}>
          <div className="lp-wrap">
            <span className="lp-section-kicker">One app, every task</span>
            <h2 className="lp-h2">From a tweet&apos;s sentiment to a forced-aligned recording</h2>
            <div className="lp-tasks">
              {TASKS.map((t) => (
                <span key={t.label} className="lp-task">{t.icon} {t.label}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ============ STEPS ============ */}
        <section className="lp-section" style={{paddingTop: 0}}>
          <div className="lp-wrap">
            <span className="lp-section-kicker">How it works</span>
            <h2 className="lp-h2">Collect. Annotate. Validate.</h2>
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

        {/* ============ FINAL CTA ============ */}
        <section className="lp-final">
          <span className="lp-section-kicker">Free &amp; open source</span>
          <h2 className="lp-h2">Start annotating in your language today</h2>
          <p className="lp-lead">
            Open AfriAnnotate in your browser — no install needed — and start
            collecting and labelling data wherever the language is spoken.
          </p>
          <div className="lp-cta-row">
            <a className="lp-btn lp-btn-primary" href="https://label.afriannotate.org" target="_blank" rel="noopener noreferrer">
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
