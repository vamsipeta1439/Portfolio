import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';
import siteConfig from '../data/siteConfig';
import useReveal from '../hooks/useReveal';

function Banner() {
  const revealRef = useReveal();

  return (
    <section id="home" className="hero">
      <div className="container hero-container reveal" ref={revealRef}>
        <span className="mono hero-tag">AI_AUTOMATION · FULL_STACK · ENTERPRISE</span>

        <h1 className="hero-heading">{siteConfig.heroHeading}</h1>

        <p className="hero-subtext">{siteConfig.heroSubtext}</p>

        <p className="hero-role">
          {siteConfig.role} <span className="hero-role-at">@</span> {siteConfig.companyShort}
        </p>

        <div className="hero-actions">
          <a href="#work" className="btn btn-primary">
            View My Work <FiArrowRight aria-hidden="true" />
          </a>
          {/* <a
            href={siteConfig.links.github}
            className="btn btn-secondary"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub aria-hidden="true" /> GitHub
          </a> */}
          <a
            href={siteConfig.links.linkedin}
            className="btn btn-secondary"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin aria-hidden="true" /> LinkedIn
          </a>
          <a href="#contact" className="btn btn-secondary">
            <FiMail aria-hidden="true" /> Contact
          </a>
        </div>

        <div className="hero-metrics">
          {siteConfig.impactMetrics.map((metric) => (
            <div className="hero-metric" key={metric.label}>
              <span className="hero-metric-value">{metric.value}</span>
              <span className="hero-metric-label">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Banner;
