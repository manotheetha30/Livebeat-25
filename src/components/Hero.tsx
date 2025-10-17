import React, { useEffect, useState } from "react";
import LiveBeatImage from "../assets/DO NOT ALTER.png"; // Canva PNG
import "./Hero.css";

const Hero: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section id="hero" className="hero-section">

      {/* Top Text */}
      <h1 className={`hero-title ${animate ? "animate" : ""}`}>
        INSTRUMENTATION ENGINEERS ASSOCIATION
      </h1>
      <h1 className={`hero-title ${animate ? "animate" : ""}`}>
        PRESENTS
      </h1>

      {/* LiveBeat PNG */}
      <img
        src={LiveBeatImage}
        alt="LiveBeat '25"
        className={`hero-livebeat-image ${animate ? "animate" : ""}`}
      />

      {/* Date */}
      <p className={`hero-date ${animate ? "animate" : ""}`}>
        25<sup>th</sup> OCTOBER
      </p>
    </section>
  );
};

export default Hero;
