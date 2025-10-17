// src/App.tsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pass from "./components/Pass";
import Events from "./components/Events";
import OfficeBearers from "./components/OfficeBearers";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";


const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About/>
      <Pass />
      <Events />
      <OfficeBearers />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
