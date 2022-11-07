import React from "react";
import logo from "../../assets/images/logo.png";
import "./footer.style.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="top">
          <div className="right">
            <h1>DON'T BE SHY !</h1>
            <p>
              Feel free to get in touch with me. <br />I am always open to
              discussing
              <br />
              new projects, creative ideas or
              <br />
              opportunities to be part of your visions.
            </p>
          </div>
          <img src={logo} className="logo" alt="logo" />
          <div className="left">
            <h1>Who am i ?</h1>
            <p>
              I'm a web designer, and I'm very passionate
              <br />
              and dedicated to my work, I <br />
              have acquired the skills and knowledge
              <br /> necessary to make your project a success.
            </p>
          </div>
        </div>

        <div className="bottom">2022. AhmedMahmoud. Portfolio</div>
      </footer>
    </>
  );
}

export default Footer;
