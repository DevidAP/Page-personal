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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`page-background ${isScrolled ? "scrolled" : ""}`}>
      <div className={`nav ${isScrolled ? "scrolled" : ""}`}>
        <div className="menu-toggle" onClick={toggleMenu}>
          &#9776; {/* Icono de menú hamburguesa */}
        </div>
        <nav>
          <ul className={menuOpen ? "show" : ""}>
            <li>
              <a href="#home" onClick={toggleMenu}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>About</a>
            </li>
            <li>
              <a href="#services" onClick={toggleMenu}>Services</a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>Projects</a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Asegúrate de que la imagen solo aparece aquí */}
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
        <Services />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
