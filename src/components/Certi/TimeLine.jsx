import React from "react";
import Card from "./Card";
// Icons
import itiIcon from "../../assets/images/icons/ITI.png";
import soloIcon from "../../assets/images/icons/sololearn.webp";
import hackerIcon from "../../assets/images/icons/hackerrankpng.png";
const udacityIcon =
  "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/null/external-udacity-a-for-profit-educational-organization-founded-by-offering-massive-open-online-courses-logo-color-tal-revivo.png";

function TimeLine() {
  return (
    <div className="timeline-main">
      <div className="timeline">
        {/* HTML / CSS => Udacity */}
        <Card
          img={udacityIcon}
          name="Web Development Challenger"
          category="HTML/CSS/Wordpress"
          link="https://media-exp1.licdn.com/dms/document/D4D2DAQEjfIW36FiqZA/profile-treasury-document-pdf-analyzed/0/1662983966540?e=1668643200&v=beta&t=zHopYu6z1GzHEOstzzrhJTCx0Ux4uRr5HbTYT8Itdn4"
        />
        {/* HTML / CSS => ITI */}
        <Card
          img={itiIcon}
          name="Front End Development"
          category="HTML/CSS"
          link="https://drive.google.com/file/d/18AaYr674-ZIL11d8bezveL_n80xtCDtU/view?usp=sharing"
        />
        {/* HackerRank => CSS */}
        <Card
          img={hackerIcon}
          name="CSS Quiz"
          category="Css"
          link="https://www.hackerrank.com/certificates/6f1e64a555bd"
        />
        {/* JavaScript */}
        <Card
          img={soloIcon}
          name="JavaScript Mastering"
          category="JavaScript"
          link="https://www.sololearn.com/certificates/CT-GRQHKKCT"
        />
        {/* React */}
        <Card
          img={udacityIcon}
          name="React Development Cross-Skilling"
          category="React JS"
          link="https://graduation.udacity.com/nd019-fwd-t4"
        />
        {/* HackerRank => React */}
        <Card
          img={hackerIcon}
          name="React JS Quiz"
          category="React JS"
          link="https://www.hackerrank.com/certificates/f4449462316b"
        />
        {/* End */}
      </div>
    </div>
  );
}

export default TimeLine;
