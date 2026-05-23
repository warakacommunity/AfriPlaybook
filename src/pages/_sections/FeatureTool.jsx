import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from '../index.module.css';

export default function FeatureTool() {
  return (
    <section className={clsx(styles.section, styles.featureRow, styles.showcaseSection, styles.snapSection)} data-snap-section="tool">
      <div className={clsx('container', styles.featureGrid, styles.featureGridReverse)}>
        <div className={styles.featureCopy}>
          <Heading as="h2" className={styles.blogTeaserHeading}>
            AfriAnnotate
          </Heading>
          <p className={styles.featureLead}>
            An open, mobile-first, Progressive Web App for grassroots data
            collection — built for the realities of African contexts: patchy
            connectivity, multiple scripts, and community-led annotation
            workflows.
          </p>
          <ul className={styles.featureList}>
            <li>Offline-first capture with background synchronization</li>
            <li>Speech, text, ranking, and multimodal annotation support</li>
            <li>Inter-annotator agreement (Fleiss' κ, Krippendorff's α) dashboards</li>
            <li>African-language localization and virtual keyboards</li>
            <li>Apache 2.0 licensed with a clear contributor agreement</li>
          </ul>
        </div>
        <div className={styles.featureVisual}>
          <div className={styles.toolLifecycle}>
            <div className={styles.lifecycleStages} aria-hidden="true">
              <span className={styles.lifecycleStage}>
                <span className={styles.lifecycleStageNum}>1</span> Collect
              </span>
              <span className={styles.lifecycleConnector} />
              <span
                className={clsx(
                  styles.lifecycleStage,
                  styles.lifecycleStageActive,
                )}>
                <span className={styles.lifecycleStageNum}>2</span> Annotate
              </span>
              <span className={styles.lifecycleConnector} />
              <span className={styles.lifecycleStage}>
                <span className={styles.lifecycleStageNum}>3</span> Validate
              </span>
            </div>

            <div className={styles.mockStack} aria-hidden="true">
            {/* Back card — LLM Evaluation (Amharic) */}
            <div className={clsx(styles.mockPhone, styles.mockPhoneBack)}>
              <div className={styles.mockPhoneNotch} />
              <div className={styles.mockPhoneScreen}>
                <div className={styles.mockPhoneHeader}>
                  <div className={styles.mockPhoneBrand}>
                    <span className={styles.mockPhoneLogo}>𝓐</span>
                    <span className={styles.mockPhoneTitle}>AfriAnnotate</span>
                  </div>
                  <span className={styles.mockPhoneLangBadge}>AM</span>
                </div>
                <div className={styles.mockPhoneMeta}>
                  <span className={styles.mockMetaLabel}>
                    <span className={styles.mockMetaDot} /> LLM Evaluation
                  </span>
                  <span className={styles.mockMetaProgress}>12 / 300</span>
                </div>
                <div className={styles.mockChatBubble}>
                  <span className={styles.mockChatRole}>Prompt</span>
                  <p className={styles.mockChatText} lang="am">
                    ስለ ኢትዮጵያ በአማርኛ ጻፍ።
                  </p>
                </div>
                <div
                  className={clsx(
                    styles.mockChatBubble,
                    styles.mockChatBubbleModel,
                  )}>
                  <span className={styles.mockChatRole}>Model · gpt-4</span>
                  <p className={styles.mockChatText} lang="am">
                    ኢትዮጵያ በምስራቅ አፍሪካ የምትገኝ ጥንታዊ ሀገር ናት።
                  </p>
                </div>
                <div className={styles.mockSentimentLabel}>Quality</div>
                <div className={styles.mockChips}>
                  <span className={clsx(styles.mockChip, styles.mockChipActive)}>
                    <span className={styles.mockChipCheck}>✓</span> Accurate
                  </span>
                  <span className={styles.mockChip}>Fluent</span>
                  <span className={styles.mockChip}>Safe</span>
                </div>
                <div className={styles.mockStars}>
                  <span className={styles.mockStarFilled}>★</span>
                  <span className={styles.mockStarFilled}>★</span>
                  <span className={styles.mockStarFilled}>★</span>
                  <span className={styles.mockStarFilled}>★</span>
                  <span className={styles.mockStarEmpty}>★</span>
                  <span className={styles.mockStarsLabel}>4 / 5</span>
                </div>
              </div>
            </div>

            {/* Middle card — Named Entity Annotation (Swahili) */}
            <div className={clsx(styles.mockPhone, styles.mockPhoneMid)}>
              <div className={styles.mockPhoneNotch} />
              <div className={styles.mockPhoneScreen}>
                <div className={styles.mockPhoneHeader}>
                  <div className={styles.mockPhoneBrand}>
                    <span className={styles.mockPhoneLogo}>𝓐</span>
                    <span className={styles.mockPhoneTitle}>AfriAnnotate</span>
                  </div>
                  <span className={styles.mockPhoneLangBadge}>SW</span>
                </div>
                <div className={styles.mockPhoneMeta}>
                  <span className={styles.mockMetaLabel}>
                    <span className={styles.mockMetaDot} /> Named Entity Annotation
                  </span>
                  <span className={styles.mockMetaProgress}>132 / 500</span>
                </div>
                <div className={styles.mockNerCard}>
                  <p className={styles.mockNerText} lang="sw">
                    Rais{' '}
                    <mark className={clsx(styles.mockNerTag, styles.mockNerPer)}>
                      Samia Suluhu Hassan
                      <span className={styles.mockNerTagLabel}>PER</span>
                    </mark>{' '}
                    aliongea katika{' '}
                    <mark className={clsx(styles.mockNerTag, styles.mockNerLoc)}>
                      Dodoma
                      <span className={styles.mockNerTagLabel}>LOC</span>
                    </mark>
                    .
                  </p>
                </div>
                <div className={styles.mockSentimentLabel}>Entity type</div>
                <div className={styles.mockChips}>
                  <span className={clsx(styles.mockChip, styles.mockChipActive)}>
                    <span className={styles.mockChipCheck}>✓</span> Person
                  </span>
                  <span className={styles.mockChip}>Location</span>
                  <span className={styles.mockChip}>Org</span>
                  <span className={styles.mockChip}>Date</span>
                </div>
              </div>
            </div>

            {/* Front card — AfriSenti sentiment (Hausa) */}
            <div className={clsx(styles.mockPhone, styles.mockPhoneFront)}>
              <div className={styles.mockPhoneNotch} />
              <div className={styles.mockPhoneScreen}>
                <div className={styles.mockPhoneHeader}>
                  <div className={styles.mockPhoneBrand}>
                    <span className={styles.mockPhoneLogo}>𝓐</span>
                    <span className={styles.mockPhoneTitle}>AfriAnnotate</span>
                  </div>
                  <span className={styles.mockPhoneLangBadge}>HA</span>
                </div>

                <div className={styles.mockPhoneMeta}>
                  <span className={styles.mockMetaLabel}>
                    <span className={styles.mockMetaDot} /> Sentiment Annotation
                  </span>
                  <span className={styles.mockMetaProgress}>47 / 500</span>
                </div>

                <article className={styles.mockTweetCard}>
                  <header className={styles.mockTweetHeader}>
                    <span className={styles.mockTweetAvatar}>A</span>
                    <span className={styles.mockTweetHandle}>@aiAfrika</span>
                    <span className={styles.mockTweetTime}>· 2h</span>
                  </header>
                  <p className={styles.mockTweetText} lang="ha">
                    Wannan littafin yana da matukar amfani! Ina ba da shawara
                    ga kowa ya karanta.
                  </p>
                  <p className={styles.mockTweetGloss}>
                    "This book is genuinely useful — I recommend it to everyone."
                  </p>
                </article>

                <div className={styles.mockSentimentLabel}>Sentiment</div>
                <div className={styles.mockChips}>
                  <span className={clsx(styles.mockChip, styles.mockChipActive)}>
                    <span className={styles.mockChipCheck}>✓</span> positive
                  </span>
                  <span className={styles.mockChip}>neutral</span>
                  <span className={styles.mockChip}>negative</span>
                </div>

                <div className={styles.mockBottomBar}>
                  <span className={styles.mockSkip}>Skip</span>
                  <span className={styles.mockSubmit}>Submit →</span>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
