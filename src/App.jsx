import React, { useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

const App = () => {
  const bannerRef = useRef(null);

  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  const scrollToBanner = () => {
    bannerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      {/* Header Section */}
      <header className="header-section">
        <Navbar />
        <Hero />
      </header>

      {/* Banner Section */}
      <main>
        <section id="banner" ref={bannerRef} className="banner-section">
          <Banner />
        </section>
      </main>

      {/* Footer Section */}
     
    </div>
  );
};

export default App;
