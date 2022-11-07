import React, { useState } from "react";
import { usePortfolio } from "../../hooks/usePortfolio";
import {
  FaGithub,
  FaFacebookF,
  FaPhone,
  FaBehance,
  FaLinkedin,
} from "react-icons/fa";
import MessagesForm from "./MessagesForm";
import "./contact.style.css";

function Contact() {
  const [bgIcon, setBgIcon] = useState(null);
  const { contactRef } = usePortfolio();
  return (
    <>
      <section id="contact" ref={contactRef}>
        {/* BG Icon */}
        <FaLinkedin
          className={`bg-icon ${bgIcon === "linkedin" ? "vesible" : ""}`}
        />
        <FaGithub
          className={`bg-icon ${bgIcon === "github" ? "vesible" : ""}`}
        />
        <FaBehance
          className={`bg-icon ${bgIcon === "behance" ? "vesible" : ""}`}
        />
        <FaFacebookF
          className={`bg-icon ${bgIcon === "facebook" ? "vesible" : ""}`}
        />
        <FaPhone className={`bg-icon ${bgIcon === "phone" ? "vesible" : ""}`} />

        {/* Stars */}
        <div id="orangeStar" className="str1"></div>
        <div id="purpleStar" className="str2"></div>
        <div id="purpleStar" className="str3"></div>
        <div className="container">
          <div className="top">
            <h1>Contact</h1>
            <p>Lets Say Hi!</p>
          </div>
          <div className="cont">
            <div
              className="links"
              data-aos="zoom-out-right"
              data-aos-delay="100"
            >
              {/* <!-- Github --> */}
              <a
                href="https://github.com/AhmedMahmoud929"
                target="blank"
                onMouseEnter={() => setBgIcon("github")}
                onMouseLeave={() => setBgIcon(null)}
              >
                <FaGithub className="i" />
              </a>
              {/* <!-- Linkedin --> */}
              <a
                href="https://www.linkedin.com/in/ahmed-mahmoud-24b49621b/"
                target="blank"
                onMouseEnter={() => setBgIcon("linkedin")}
                onMouseLeave={() => setBgIcon(null)}
              >
                <FaLinkedin className="i" />
              </a>
              {/* <!-- Behance --> */}
              <a
                href="https://www.behance.net/ahmedmahmoud68"
                target="blank"
                onMouseEnter={() => setBgIcon("behance")}
                onMouseLeave={() => setBgIcon(null)}
              >
                <FaBehance className="i" />
              </a>

              {/* <!-- facebook --> */}
              <a
                href="https://www.facebook.com/profile.php?id=100028876007672"
                target="blank"
                onMouseEnter={() => setBgIcon("facebook")}
                onMouseLeave={() => setBgIcon(null)}
              >
                <FaFacebookF className="i" />
              </a>
              {/* <!-- phone --> */}
              <a
                href="https://wa.me/201121165769"
                target="blank"
                onMouseEnter={() => setBgIcon("phone")}
                onMouseLeave={() => setBgIcon(null)}
              >
                <FaPhone className="i" />
              </a>
            </div>

            <MessagesForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
