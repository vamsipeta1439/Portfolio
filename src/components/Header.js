import React, { useEffect, useState } from 'react';
import { HiOutlineBars3BottomRight } from 'react-icons/hi2';
import { IoMdClose } from 'react-icons/io';
import { FiGithub, FiLinkedin, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import siteConfig from '../data/siteConfig';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#home" className="logo" onClick={closeMenu}>
          {siteConfig.name}
        </a>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} aria-label="Primary">
          <ul>
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a
            href={siteConfig.links.github}
            className="icon-link"
            aria-label="GitHub profile"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
          <a
            href={siteConfig.links.linkedin}
            className="icon-link"
            aria-label="LinkedIn profile"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
          </a>
          <button
            type="button"
            className="icon-link theme-toggle"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>

          <button
            type="button"
            className="mobile-menu-btn"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <IoMdClose /> : <HiOutlineBars3BottomRight />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
