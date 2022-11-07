import React from "react";
import { usePortfolio } from "../../hooks/usePortfolio";
// Images
import purpleBall from "../../assets/images/purpleBall.png";
import webLap from "../../assets/images/webLap.png";
import orangeBall from "../../assets/images/orangeBall.png";
import uiLap from "../../assets/images/uiLap.png";
import designLab from "../../assets/images/designLap.png";

// Style
import "./services.style.css";

function Services() {
  const { servicesRef, scrollHandler } = usePortfolio();
  return (
    <>
      <section id="services" ref={servicesRef}>
        {/* <!-- stars --> */}
        <div id="orangeStar" className="str1"></div>
        <div id="orangeStar" className="str2"></div>
        <div id="purpleStar" className="str4"></div>
        <div id="purpleStar" className="str5"></div>
        {/* <!--  --> */}
        <div className="container">
          <h1 className="title">Services</h1>

          <div className="servs">
            {/* <!-- web --> */}
            <div className="ser">
              <div className="main">
                {/* <!-- ball image --> */}
                <img
                  id="ball1"
                  src={purpleBall}
                  alt="3dBall"
                  data-aos="fade-left"
                />
                {/* <!-- laptop image --> */}
                <div className="bg" data-aos="fade-up">
                  <img className="lap" src={webLap} alt="laptop" />
                </div>
                {/* <!-- label --> */}
                <div className="label" data-aos="fade-right">
                  <h1>Web design</h1>
                  <p>
                    I can program the front end of your site with the highest
                    efficiency using the latest technologies
                  </p>
                  <div className="btns">
                    <span
                      onClick={() => {
                        scrollHandler("contact");
                      }}
                    >
                      Contact
                    </span>
                    <span
                      onClick={() => {
                        scrollHandler("portfolio");
                      }}
                    >
                      See projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- ui / ux --> */}
            <div className="ser">
              <div className="main">
                {/* <!-- ball image --> */}
                <img
                  id="ball2"
                  src={orangeBall}
                  alt="3dBall"
                  data-aos="fade-right"
                />
                {/* <!-- laptop image --> */}
                <div className="bg" data-aos="fade-up">
                  <img className="lap" src={uiLap} alt="laptop" />
                </div>
                {/* <!-- label --> */}
                <div className="label" id="label2" data-aos="fade-left">
                  <h1>UI / UX</h1>
                  <p>
                    I will design an attractive user interface for your
                    application or website
                  </p>
                  <div className="btns">
                    <span
                      onClick={() => {
                        scrollHandler("contact");
                      }}
                    >
                      Contact
                    </span>
                    <span
                      onClick={() => {
                        scrollHandler("portfolio");
                      }}
                    >
                      See projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- design --> */}
            <div className="ser">
              <div className="main">
                {/* <!-- ball image --> */}
                <img
                  id="ball3"
                  src={purpleBall}
                  alt="3dBall"
                  data-aos="fade-left"
                />
                {/* <!-- laptop image --> */}
                <div className="bg" data-aos="fade-up">
                  <img className="lap" src={designLab} alt="laptop" />
                </div>
                {/* <!-- label --> */}
                <div className="label" id="label3" data-aos="fade-right">
                  <h1>Graphic design</h1>
                  <p>
                    I have a lot of experience in the field of graphic design (
                    social media - logos - vector art )
                  </p>
                  <div className="btns">
                    <span
                      onClick={() => {
                        scrollHandler("contact");
                      }}
                    >
                      Contact
                    </span>
                    <span
                      onClick={() => {
                        scrollHandler("portfolio");
                      }}
                    >
                      See projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
