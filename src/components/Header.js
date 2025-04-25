import React, { useState } from 'react';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">Portfolio</div>
        <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
            <li><a href="#education" onClick={() => setIsMobileMenuOpen(false)}>Education</a></li>
            <li><a href="#experience" onClick={() => setIsMobileMenuOpen(false)}>Experience</a></li>
            <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a></li>
            <li><a href="#case-studies" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</a></li>
            <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
        <div className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;