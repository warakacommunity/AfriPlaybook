import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from '../index.module.css';

export default function FeaturePlaybook() {
  return (
    <section className={clsx(styles.section, styles.altSection, styles.featureRow, styles.snapSection)} data-snap-section="playbook">
      <div className={clsx('container', styles.featureGrid)}>
        <div className={styles.featureCopy}>
          <Heading as="h2" className={styles.blogTeaserHeading}>
            Masakhane Playbook
          </Heading>
          <p className={styles.featureLead}>
            A practical guide to dataset creation, written with the
            communities who use it — from task formulation and label schema
            design to consent forms, inter-annotator agreement, and
            sustainability. Every chapter is built around real low-resource
            language scenarios.
          </p>
          <ul className={styles.featureList}>
            <li>Step-by-step guidelines, video demos, and quality checklists</li>
            <li>Voice, text, speech–text alignment, and translation chapters</li>
            <li>Templates for consent, licensing, and governance toolkits</li>
            <li>Translated into 5 African languages with community review</li>
          </ul>
        </div>
        <div className={styles.featureVisual}>
          <div className={styles.mockBrowser} aria-hidden="true">
            <div className={styles.mockBar}>
              <span /><span /><span />
              <div className={styles.mockUrl}>
                masakhane-playbook / annotation-design
              </div>
            </div>
            <div className={styles.mockBody}>
              <div className={styles.mockSidebar}>
                <span className={styles.mockSidebarItem}>
                  <span className={styles.mockSidebarNum}>1</span>Introduction
                </span>
                <span className={styles.mockSidebarItem}>
                  <span className={styles.mockSidebarNum}>2</span>Data Collection
                </span>
                <span
                  className={clsx(
                    styles.mockSidebarItem,
                    styles.mockSidebarActive,
                  )}>
                  <span className={styles.mockSidebarNum}>3</span>Annotation Design
                </span>
                <span className={styles.mockSidebarItem}>
                  <span className={styles.mockSidebarNum}>4</span>Data Quality
                </span>
                <span className={styles.mockSidebarItem}>
                  <span className={styles.mockSidebarNum}>5</span>Modality Tasks
                </span>
                <span className={styles.mockSidebarItem}>
                  <span className={styles.mockSidebarNum}>6</span>Governance
                </span>
              </div>
              <div className={styles.mockContent}>
                <span className={styles.mockEyebrow}>Chapter 3</span>
                <h3 className={styles.mockH1}>
                  Annotation Design &amp; Workforce
                </h3>
                <p className={styles.mockPara}>
                  Inter-annotator agreement measures how consistently different
                  annotators produce the same labels — a critical signal for
                  guideline clarity.
                </p>
                <h4 className={styles.mockH2}>3.2 Cohen's kappa</h4>
                <div className={styles.mockFormula}>
                  κ = (P<sub>o</sub> − P<sub>e</sub>) / (1 − P<sub>e</sub>)
                </div>
                <div className={styles.mockCallout}>
                  <span className={styles.mockCalloutLabel}>TIP</span>
                  <p className={styles.mockCalloutText}>
                    Pilot with 50–100 items first to refine guidelines before
                    scaling annotation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
