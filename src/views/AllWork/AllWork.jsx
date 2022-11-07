import React, { useState, useEffect } from "react";
import { usePortfolio } from "../../hooks/usePortfolio";
import Project from "../../components/Portfolio/Project";
import Loader from "../../components/Loader/Loader";
import ActiveProject from "../../components/ActiveProject/ActiveProject";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import CodeCard from "../../components/CodeCard/CodeCard";
// import Pagination from "../../components/Pagination/Pagination";
// Images
import logo from "../../assets/images/logo.png";
// Style
import "./allWork.style.css";

function AllWork() {
  const [activeLink, setActiveLink] = useState("all");
  const { homeLoading, getHomeProjects, activeSec, activeSecHandler } =
    usePortfolio();

  const [title, setTitle] = useState("Don't Flip It");
  //   const [firstIndex, setFirstIndex] = useState(0);
  //   const [lastIndex, setLastIndex] = useState(15);

  useEffect(() => {
    getHomeProjects();
  }, []);

  //   const currentPageHandler = (page) => {
  //     //     const pagesCount = Math.ceil(activeSec.length / 20);

  //     if (page === "prev") {
  //       if (firstIndex > 0) {
  //         setFirstIndex((prev) => prev - 15);
  //         setLastIndex((prev) => prev - 15);
  //       }
  //     } else if (page === "next") {
  //       if (lastIndex < activeSec.length) {
  //         setFirstIndex((prev) => prev + 15);
  //         setLastIndex((prev) => prev + 15);
  //       }
  //     } else {
  //       setFirstIndex(page * 15 - 15); // 3*20-20 = 40
  //       setLastIndex(page * 15); // 3*20 = 60
  //     }
  //   };

  return (
    <>
      {/* <!-- ==============  NAVBAR  ============== --> */}
      <nav id="mainNav">
        <div className="container">
          <a href="/">
            <img src={logo} alt="website_logo" className="logo" />
          </a>

          <a className="contact" href="#contact">
            Contact
          </a>
        </div>
      </nav>
      {/* <!-- ==============  PORTFLIO  ============== --> */}
      <section id="portflio" className="all">
        <ActiveProject />

        <div id="orangeStar" className="str1"></div>
        <div id="orangeStar" className="str2"></div>
        <div id="purpleStar" className="str3"></div>
        <div id="purpleStar" className="str4"></div>
        <div className="container">
          {/* Top */}
          <div className="top">
            <div className="left">
              <h1>Portfolio</h1>
            </div>
            <div className="right">
              <span
                id="all"
                onClick={() => {
                  activeSecHandler("all");
                  setActiveLink("all");
                }}
                className={`${activeLink === "all" ? "active" : ""}`}
              >
                All
              </span>
              <span
                id="web"
                onClick={() => {
                  activeSecHandler("web");
                  setActiveLink("web");
                }}
                className={`${activeLink === "web" ? "active" : ""}`}
              >
                Web Design
              </span>
              <span
                id="graphic"
                onClick={() => {
                  activeSecHandler("design");
                  setActiveLink("design");
                }}
                className={`${activeLink === "design" ? "active" : ""}`}
              >
                Graphic Design
              </span>
              <span
                id="vector"
                onClick={() => {
                  activeSecHandler("vector");
                  setActiveLink("vector");
                }}
                className={`${activeLink === "vector" ? "active" : ""}`}
              >
                Vector Art
              </span>
            </div>
          </div>
          {/* Bottom */}
          <div id="allWork">
            <div className="row">
              {homeLoading ? (
                <Loader />
              ) : (
                activeSec.map((proj) => {
                  return proj && <Project key={proj._id} proj={proj} />;
                })
              )}
              {/* <div>
                  <Pagination
                    pagesCount={Math.ceil(activeSec.length / 15)}
                    setCurrentPage={currentPageHandler}
                  />
                </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ==============  CARD  ============== --> */}
      <div id="port-card">
        <h1>{title}</h1>
        <div
          onMouseEnter={() => setTitle("Hay! .. I See You")}
          onMouseLeave={() => {
            setTitle("Good Boy");
            setTimeout(() => setTitle("Don't Flip It"), 2000);
          }}
        >
          <CodeCard />
        </div>
      </div>
      {/* <!-- ==============  CONTACT  ============== --> */}
      <Contact />
      {/* <!-- ==============  FOOTER  ============== --> */}
      <Footer />
    </>
  );
}

export default AllWork;
