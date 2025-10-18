import React, { useState } from "react";
import IEALogo from "../assets/logo.png";
const capitalizeWords = (str: string) =>
  str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 85;
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsMenuOpen(false); // close menu after clicking
    }
  };

  return (
   <header className="header">
  <div className="logo">
    <img src={IEALogo} alt="IEA Logo" className="iea-logo" />
    <span className="logo-text">IEA</span>
  </div>

  {/* Desktop Nav */}
  <nav className="desktop-nav">
{["hero","about","events","pass","office bearers","contact"].map((sec) => (
  <button key={sec} onClick={() => scrollToSection(sec)}>
    {sec === "hero" ? "Home" : capitalizeWords(sec)}
  </button>
))}
  </nav>

  {/* Hamburger / Cross Icon (mobile only) */}
  <div className="hamburger" onClick={toggleMenu}>
    {isMenuOpen ? (
      <span className="cross">&times;</span>
    ) : (
      <span className="hamburger-lines">&#9776;</span>
    )}
  </div>

  {/* Mobile menu overlay */}
  <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
    {["hero","about","events","pass","office bearers","contact"].map((sec) => (
      <button key={sec} onClick={() => scrollToSection(sec)}>
        {sec === "hero" ? "Home" : capitalizeWords(sec)}
      </button>
    ))}
  </div>
</header>

  );
};

export default Header;
