import React from "react";
import Header from "../Components/Header.jsx";
import Home from "../Components/Home.jsx";
import Footer from "../Components/Footer.jsx";
import About from "../Components/About.jsx";
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
