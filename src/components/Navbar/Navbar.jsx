import React from "react";
import { useState } from "react";
import { usePortfolio } from "../../hooks/usePortfolio";
import {
  FaGithubSquare,
  FaFacebookSquare,
  FaPhoneSquare,
  FaBehanceSquare,
  FaLinkedin,
  FaEnvelopeSquare,
} from "react-icons/fa";
import "./navbar.style.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const { scrollHandler } = usePortfolio();

  const linkHandler = (link) => {
    setNavOpen(false);
    setActiveLink(link);
  };

  return (
    <>
      <nav id="mainNav">
        <div className="container">
          <Link to="/">
            <img
              src={require("../../assets/images/logo.png")}
              alt="website_logo"
              className="logo"
            />
          </Link>
          <div id="menu">
            <span
              id="link1"
              className={activeLink === "home" ? "active" : ""}
              onClick={() => {
                linkHandler("home");
                scrollHandler("home");
              }}
            >
              Home
            </span>

            <span
              id="link2"
              className={activeLink === "about" ? "active" : ""}
              onClick={() => {
                linkHandler("about");
                scrollHandler("about");
              }}
            >
              About
            </span>
            <span
              id="link3"
              className={activeLink === "services" ? "active" : ""}
              onClick={() => {
                linkHandler("services");
                scrollHandler("services");
              }}
            >
              Services
            </span>
            <span
              id="link4"
              className={activeLink === "portfolio" ? "active" : ""}
              onClick={() => {
                linkHandler("portfolio");
                scrollHandler("portfolio");
              }}
            >
              Portfolio
            </span>
          </div>

          <span
            id="cntct"
            className={`contact ${activeLink === "contact" ? "active" : ""}`}
            onClick={() => {
              linkHandler("contact");
              scrollHandler("contact");
            }}
          >
            Contact
          </span>

          {/* <!-- mobile icon --> */}
          <div
            id="menuIcon"
            className={navOpen ? "active" : ""}
            onClick={() => setNavOpen(!navOpen)}
          >
            <div className="up"></div>
            <div className="middle"></div>
            <div className="bottom"></div>
          </div>
        </div>
      </nav>
      <section id="navPhone" className={navOpen ? "active" : ""}>
        <div id="menu">
          <span
            id="link1Phone"
            className={activeLink === "home" ? "active" : ""}
            onClick={() => {
              linkHandler("home");
              scrollHandler("home");
            }}
          >
            Home
          </span>
          <span
            id="link2Phone"
            className={activeLink === "about" ? "active" : ""}
            onClick={() => {
              linkHandler("about");
              scrollHandler("about");
            }}
          >
            About
          </span>
          <span
            id="link3Phone"
            className={activeLink === "services" ? "active" : ""}
            onClick={() => {
              linkHandler("services");
              scrollHandler("services");
            }}
          >
            Services
          </span>
          <span
            id="link4Phone"
            className={activeLink === "portfolio" ? "active" : ""}
            onClick={() => {
              linkHandler("portfolio");
              scrollHandler("portfolio");
            }}
          >
            Portflio
          </span>
        </div>
        <div className="icons">
          <div className="row">
            <a href="https://wa.me/201121165769" target="blank">
              <FaPhoneSquare className="icon" />
            </a>
            <a href="https://github.com/AhmedMahmoud929" target="blank">
              <FaGithubSquare className="icon" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100028876007672"
              target="blank"
            >
              <FaFacebookSquare className="icon" />
            </a>
          </div>
          <div className="row">
            <a
              href="https://www.linkedin.com/in/ahmed-mahmoud-24b49621b/"
              target="blank"
            >
              <FaLinkedin className="icon" />
            </a>
            <a href="https://www.behance.net/ahmedmahmoud68" target="blank">
              <FaBehanceSquare className="icon" />
            </a>
            <a href="#contact">
              <FaEnvelopeSquare className="icon" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
