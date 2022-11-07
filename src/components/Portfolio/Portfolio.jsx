import React, { useState } from "react";
import Project from "./Project";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import { usePortfolio } from "../../hooks/usePortfolio";
import ActiveProject from "../ActiveProject/ActiveProject";
import "./portfolio.style.css";

function Portfolio() {
  const [activeLink, setActiveLink] = useState("all");
  const { homeLoading, activeSec, activeSecHandler, portfolioRef } =
    usePortfolio();

  const setActiveLinkHandler = (link = "") => {
    setActiveLink(link);
    activeSecHandler(link);
  };

  // useEffect(() => {
  //   const acLink = localStorage.getItem("activeLink");
  //   if (acLink && !homeLoading) {
  //     setActiveLink(acLink);
  //     activeSecHandler(acLink);
  //   }
  // }, []);
  return (
    <>
      <section id="portflio" ref={portfolioRef}>
        <ActiveProject />

        <div id="orangeStar" className="str1"></div>
        <div id="orangeStar" className="str2"></div>
        <div id="purpleStar" className="str3"></div>
        <div id="purpleStar" className="str4"></div>
        <div className="container">
          <div className="top">
            <div className="left">
              <h1>Portfolio</h1>
              <p>
                Here you can see some of my completed
                <br />
                work in various fields ... enjoy
              </p>
            </div>
            <div className="right">
              <span
                id="all"
                onClick={() => {
                  setActiveLinkHandler("all");
                }}
                className={`${activeLink === "all" ? "active" : ""}`}
              >
                All
              </span>
              <span
                id="web"
                onClick={() => {
                  setActiveLinkHandler("web");
                }}
                className={`${activeLink === "web" ? "active" : ""}`}
              >
                Web Design
              </span>
              <span
                id="graphic"
                onClick={() => {
                  setActiveLinkHandler("design");
                }}
                className={`${activeLink === "design" ? "active" : ""}`}
              >
                Graphic Design
              </span>
              <span
                id="vector"
                onClick={() => {
                  setActiveLinkHandler("vector");
                }}
                className={`${activeLink === "vector" ? "active" : ""}`}
              >
                Vector Art
              </span>
            </div>
          </div>
          <div id="allWork">
            <div id="DesSec">
              <div className="row">
                {homeLoading ? (
                  <Loader />
                ) : (
                  activeSec.slice(0, 15).map((proj) => {
                    return proj && <Project key={proj._id} proj={proj} />;
                  })
                )}
              </div>
            </div>
          </div>

          <Link className="btn" to="/portfolio" target="blank">
            View More
          </Link>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
