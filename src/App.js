import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Banner from './components/Banner';
import SelectedWork from './components/SelectedWork';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Philosophy from './components/Philosophy';
import About from './components/About';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/base.css';
import './styles/styles.css';

function App() {
  return (
    <ThemeProvider>
      <a href="#home" className="skip-link">
        Skip to content
      </a>
      <div className="App">
        <Header />
        <main>
          <Banner />
          <SelectedWork />
          <Experience />
          <Skills />
          <Philosophy />
          <About />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
