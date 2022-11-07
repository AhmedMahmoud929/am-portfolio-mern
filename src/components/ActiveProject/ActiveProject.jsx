import React from "react";
import { usePortfolio } from "../../hooks/usePortfolio";
import { RiCloseFill } from "react-icons/ri";
import linkIcon from "../../assets/images/link.png";
import "./activeProject.style.css";


function ActiveProject() {
  const { activeProject, activeProjectVesible, setActiveProjectVesible } =
    usePortfolio();

  return (
    <>
      <div
        id="active-project"
        className={`${activeProjectVesible ? "vesible" : ""}`}
      >
        <RiCloseFill
          className="icon"
          onClick={() => {
            setActiveProjectVesible(false);
          }}
        />
        {activeProject && (
          <span className="image">
            <img src={activeProject.image} alt="" />
          </span>
        )}
        <a
          className="link"
          href={activeProject ? activeProject.link : ""}
          target="blank"
        >
          <img src={linkIcon} alt="link" />
        </a>
      </div>
    </>
  );
}

export default ActiveProject;
