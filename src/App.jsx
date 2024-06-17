import './App.css'
import { useRef, useState, useEffect } from 'react'
import Home from './sections/Home/Home'
import MyWork from './sections/MyWork/MyWork'
import Resume from './sections/Resume/Resume'
import Header from './component/Header/Header'
import MyPortfolio from './sections/MyPortfolio/MyPortfolio'
import AboutSection from './sections/AboutSection/AboutSection'
import ContactSection from './sections/ContactSection/ContactSection'

function App() {
  // useEffect(() => {
  //   const smoothScroll = () => {
  //     const links = document.querySelectorAll('nav a');
  //     links.forEach(link => {
  //       link.addEventListener('click', function (e) {
  //         e.preventDefault();

  //         const targetId = this.getAttribute('href').substring(1);
  //         const targetElement = document.getElementById(targetId);

  //         if (targetElement) {
  //           targetElement.scrollIntoView({
  //             behavior: 'smooth'
  //           });
  //         }
  //       });
  //     });
  //   };

  //   smoothScroll();
  //   return () => {
  //     const links = document.querySelectorAll('nav a');
  //     links.forEach(link => {
  //       link.removeEventListener('click', smoothScroll);
  //     });
  //   };
  // }, []);

  return (
    <>
      <Header />
      <Home />
      <MyWork />
      <MyPortfolio />
      <Resume />
      <AboutSection />
      <ContactSection />
    </>
  )
}

export default App
