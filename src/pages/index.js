import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import HeroSection from './_sections/HeroSection';
import SupportedBySection from './_sections/SupportedBySection';
import FeaturePlaybook from './_sections/FeaturePlaybook';
import FeatureTool from './_sections/FeatureTool';
import BlogTeaserSection from './_sections/BlogTeaserSection';
import TestimonialsSection from './_sections/TestimonialsSection';
import GetInvolvedSection from './_sections/GetInvolvedSection';
import ContributorsSection from './_sections/ContributorsSection';

/* ============================================================
   SLIDE NAVIGATION
   ============================================================ */
const SLIDES = [
  { id: 'hero',         label: 'Home' },
  { id: 'playbook',     label: 'The Playbook' },
  { id: 'tool',         label: 'The Tool' },
  { id: 'testimonials', label: 'Researchers say' },
  { id: 'blog',         label: 'From the Blog' },
  { id: 'join',         label: 'Get Involved' },
];

function SlideDots({ activeId }) {
  const activeIndex = SLIDES.findIndex((s) => s.id === activeId);
  const scrollTo = (id) => {
    document
      .querySelector(`[data-snap-section="${id}"]`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <nav className={styles.slideDotsNav} aria-label="Page sections">
      {SLIDES.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          className={clsx(styles.slideDot, activeId === id && styles.slideDotActive)}
          onClick={() => scrollTo(id)}
          aria-label={`Go to ${label}`}
          title={label}
        />
      ))}
      <div className={styles.slideCounter}>
        <span key={activeId} className={styles.slideCounterNum}>
          {String(activeIndex + 1).padStart(2, '0')}
        </span>
        <span className={styles.slideCounterTotal}>
          /{String(SLIDES.length).padStart(2, '0')}
        </span>
      </div>
    </nav>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const [activeSlide, setActiveSlide] = useState('hero');
  const [transitioning, setTransitioning] = useState(false);
  const transitionTimer = useRef(null);

  const activeIndex = SLIDES.findIndex((s) => s.id === activeSlide);
  const progress = ((activeIndex + 1) / SLIDES.length) * 100;

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add('homeSnapScroll');
    return () => html.classList.remove('homeSnapScroll');
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setTransitioning(true);
      clearTimeout(transitionTimer.current);
      transitionTimer.current = setTimeout(() => setTransitioning(false), 700);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(transitionTimer.current);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('[data-snap-section]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', '');
            setActiveSlide(entry.target.dataset.snapSection);
          }
        });
      },
      { threshold: 0.2 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <Layout
      title={`${siteConfig.title} — ${siteConfig.tagline}`}
      description="A community-driven playbook and open annotation infrastructure for African language data.">
      {/* flash overlay */}
      <div
        className={clsx(styles.slideOverlay, transitioning && styles.slideOverlayActive)}
        aria-hidden="true"
      />
      <HeroSection />
      <main>
        <FeaturePlaybook />
        <FeatureTool />
        <TestimonialsSection />
        <BlogTeaserSection />
        <GetInvolvedSection />
        <ContributorsSection />
      </main>
      <SupportedBySection />
      <SlideDots activeId={activeSlide} />
    </Layout>
  );
}
