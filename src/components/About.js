import React from 'react';
import siteConfig from '../data/siteConfig';
import Certification from './Certification';
import CurrentlyExploring from './CurrentlyExploring';
import useReveal from '../hooks/useReveal';

function About() {
  const revealRef = useReveal();

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header reveal" ref={revealRef}>
          <span className="eyebrow">ABOUT</span>
          <h2 className="section-heading">About</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-lede">{siteConfig.about}</p>
            <p>{siteConfig.aboutBody}</p>
          </div>

          <div className="about-side">
            <Certification />
            <CurrentlyExploring />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
