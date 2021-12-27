import React from 'react';
import './Portfolio.css';
import Navbar from '../Components/Navbar/Navbar';
import Skills from '../Components/Portfolio/Skills';
import HeaderPortfolio from '../Components/Portfolio/HeaderPortfolio';
import About from '../Components/Portfolio/AboutmePortfolio';
import Footer from '../Components/Portfolio/FooterPortfolio';
import Header from '../Components/Header/Header';
function Portfolio() {
  return (
    <div> 
      <Navbar />
      <Header />
      <HeaderPortfolio />
      <About /> 
      <Skills />
      <Footer />
    </div> 
  );
}

export default Portfolio;