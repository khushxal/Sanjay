import React from "react";
import Header from "../components/Header.jsx";
import Home from "../components/Home.jsx";
import Footer from "../components/Footer.jsx";
import About from "../components/About.jsx";
import Experience from "../components/Experience.jsx";
import Contact from "../components/Contact.jsx";

function LandingPage() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default LandingPage;
