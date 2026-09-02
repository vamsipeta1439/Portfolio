import React from 'react';
import { FiMail, FiLinkedin } from 'react-icons/fi';
import siteConfig from '../data/siteConfig';
import useReveal from '../hooks/useReveal';

function Contact() {
  const revealRef = useReveal();

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-inner reveal" ref={revealRef}>
          <span className="eyebrow">CONTACT</span>
          <h2 className="contact-heading">Let's build something useful.</h2>
          <p className="contact-subtext">
            Have a project, opportunity or technical problem worth discussing?
          </p>

          <div className="contact-actions">
            <a href={siteConfig.links.email} className="btn btn-primary">
              <FiMail aria-hidden="true" /> Email Me
            </a>
            <a href={siteConfig.links.linkedin} className="btn btn-secondary" target="_blank" rel="noreferrer">
              <FiLinkedin aria-hidden="true" /> LinkedIn
            </a>
            {/* <a href={siteConfig.links.github} className="btn btn-secondary" target="_blank" rel="noreferrer">
              <FiGithub aria-hidden="true" /> GitHub
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
