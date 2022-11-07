import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { usePortfolio } from "../../hooks/usePortfolio";

// Images
import myResume from "../../assets/files/myResume.pdf";
import meImg from "../../assets/images/me.png";
import webImg from "../../assets/images/web-design.png";
import penTool from "../../assets/images/pen-tool.png";
import brushPen from "../../assets/images/brush-pen.png";
// Style
import "./home.style.css";
// Animation
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Home() {
  const { homeRef } = usePortfolio();
  return (
    <>
      <section id="home" ref={homeRef}>
        {/* <!-- stars --> */}
        <div id="orangeStar" className="str1"></div>
        <div id="orangeStar" className="str2"></div>
        <div id="purpleStar" className="str3"></div>
        <div id="purpleStar" className="str4"></div>
        {/* <!-- wave effect --> */}
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
        <div className="container">
          <div className="left">
            <h1 data-aos="fade-right">Hi, I'm Ahmed Mahmoud</h1>
            <h2 data-aos="fade-right">
              I'm a
              <span className="curser">
                <Typewriter
                  words={[
                    "Web Developer",
                    "UI/UX Designer",
                    "Graphic Designer",
                    "Vector Artist",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={150}
                  deleteSpeed={100}
                  delaySpeed={2000}
                />
              </span>
            </h2>

            <p data-aos="fade-right">
              High level experience in web design, development <br />
              knowladge, graphic design ,and problem solving
            </p>
            <a
              href={myResume}
              className="cv"
              data-aos="fade-right"
              download="AM's Resume.pdf"
            >
              Download CV
            </a>
          </div>

          <div className="right">
            <img src={meImg} className="me" alt="myLogo" data-aos="fade-up" />

            {/* <!-- icons --> */}
            <img src={webImg} className="web" alt="web" data-aos="fade-right" />
            <img
              src={penTool}
              className="vector"
              alt="vector"
              data-aos="fade-right"
            />
            <img
              src={brushPen}
              className="design"
              alt="design"
              data-aos="fade-left"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
