import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWA from "./components/FloatingWA";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Pricing />
      <Team />
      <Testimonial />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWA />
    </div>
  );
}

export default App;
