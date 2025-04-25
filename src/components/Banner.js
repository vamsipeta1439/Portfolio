import React, { useState, useEffect } from 'react';

function Banner() {
  const [professionText, setProfessionText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const professions = ['Junior Software Engineer'];

  useEffect(() => {
    let currentProfessionIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;   
    
    const type = () => {
      const currentProfession = professions[currentProfessionIndex];
      
      if (isDeleting) {
        setProfessionText(currentProfession.substring(0, currentCharIndex - 1));
        currentCharIndex--;
        typingSpeed = 50;
      } else {
        setProfessionText(currentProfession.substring(0, currentCharIndex + 1));
        currentCharIndex++;
        typingSpeed = 100;
      }
      
      if (!isDeleting && currentCharIndex === currentProfession.length) {
        // Pause at the end of typing
        isDeleting = true;
        typingSpeed = 1000;
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentProfessionIndex = (currentProfessionIndex + 1) % professions.length;
        typingSpeed = 500;
      }
    };
    
    const typingInterval = setInterval(type, typingSpeed);
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="home" className="banner">
      <div className="container banner-container">
        <div className="banner-content">
          <h1>Vamshi Peta</h1>
          <h2 className={`profession ${showCursor ? 'with-cursor' : ''}`}>{professionText}</h2>
          <div className="banner-buttons">
            <a href="#contact" className="btn btn-primary">Contact Me</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>
        </div>
        <div className="banner-image">
          <img src="portfolio img1.png" alt="Profile" />
        </div>
      </div>
    </section>
  );
}

export default Banner;