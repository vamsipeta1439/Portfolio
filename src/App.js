import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
// import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';
import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Education />
      <Experience />
      <Projects />
      {/* <CaseStudies /> */}
      <Footer />
    </div>
  );
}

export default App;