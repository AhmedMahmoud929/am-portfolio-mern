import React from "react";
import TimeLine from "./TimeLine";
import "./certi.style.css";

function Certi() {
  return (
    <div id="certi">
      <div className="container">
        <div className="top">
          <h1>Certifecates</h1>
          <p>
            Self-education is, I firmly believe,
            <br />
            the only kind of education there is.
          </p>
        </div>
        <TimeLine />
      </div>
    </div>
  );
}

export default Certi;
