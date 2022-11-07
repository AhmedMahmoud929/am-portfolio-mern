import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Portfolio from "../../components/Portfolio/Portfolio";
import Certi from "../../components/Certi/Certi";
import { usePortfolio } from "../../hooks/usePortfolio";

function Main() {
  const { getHomeProjects } = usePortfolio();

  // Effects
  useEffect(() => {
    getHomeProjects();
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Certi />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default Main;
