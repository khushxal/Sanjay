import React from "react";
import Header from "../Components/Header";
import Home from "../Components/Home";
import Footer from "../Components/Footer";
import About from "../Components/About";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

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
