import React from "react";
import Loader from "../Loader/Loader";
import eyeIcon from "../../assets/images/69-eye-outline.apng";
import { usePortfolio } from "../../hooks/usePortfolio";

function Project({ proj }) {
  const { setActiveProject, setActiveProjectVesible } = usePortfolio();
  return (
    <div className="box" data-aos="flip-left">
      <span
        onClick={() => {
          setActiveProject(proj);
          setActiveProjectVesible(true);
        }}
      >
        <div className="loading">
          <Loader />
        </div>
        <div className="shadow"></div>
        <img src={proj.image} alt="the work" className="image" />
        <div className="category">{proj.category}</div>

        <img className="lordIcon" src={eyeIcon} alt="" />
      </span>
      <a href={proj.link} target="blank">
        {" "}
        <img
          src={require("../../assets/images/link.png")}
          className="link"
          alt="link"
        />
      </a>
    </div>
  );
}

export default Project;
