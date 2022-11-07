import React from "react";
// Images
import orangeBall from "../../assets/images/orangeBall.png";
import purpleBall from "../../assets/images/purpleBall.png";
// Style
import "../Login/login.style.css";

function NotFound() {
  return (
    <div id="auth" className="not-found">
      {/* Background */}
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      {/* Mian */}
      <div className="cont">
        <img src={orangeBall} alt="3d ball" className="orange-ball ball" />
        <img src={purpleBall} alt="3d ball" className="purple-ball ball" />
        <div className="content">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <h3>Please enter a valid url or go to home and get what you want</h3>

          <a href="/">
            <button>Home</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
