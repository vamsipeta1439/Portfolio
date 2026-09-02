import React from 'react';
import {FiLinkedin, FiMail } from 'react-icons/fi';
import siteConfig from '../data/siteConfig';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-identity">
          <p className="footer-name">{siteConfig.name}</p>
          <p className="footer-role">{siteConfig.role}</p>
          <p className="footer-focus mono">AI • AUTOMATION • FULL STACK</p>
        </div>

        <div className="footer-links">
          {/* <a href={siteConfig.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a> */}
          <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={siteConfig.links.email} aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; 2026 {siteConfig.name}. Built with React.</p>
      </div>
    </footer>
  );
}

export default Footer;
