import React, { useEffect, useState } from "react";
import "./App.css";
import FadingText from "./Controllers/FadingText";
import logo from "./image/programing.png";
import AboutMe from "./Controllers/AboutMe";
import Services from "./Controllers/Services";
import Contact from "./Controllers/Contact";
import Projects from "./Controllers/Projects";
function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Ajusta este valor según sea necesario
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`page-background ${isScrolled ? "scrolled" : ""}`}>
      <div className={`nav ${isScrolled ? "scrolled" : ""}`}>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="home" id="home">
        <FadingText />
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="services">
        <Services></Services>
      </div>
      <div id="projects">
        <Projects></Projects>
      </div>
      <div id="contact">
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
