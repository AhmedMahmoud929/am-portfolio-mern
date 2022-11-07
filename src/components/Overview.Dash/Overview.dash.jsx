import React, { useState } from "react";
import { useDash } from "../../hooks/useDash";

import { RiCloseFill } from "react-icons/ri";
import Loader from "../Loader/Loader";
import FilterInput from "./FilterInput";
import "./overview.style.css";
import ProjectRow from "./ProjectRow";

function Overview() {
  const [previewImage, setPreviewImage] = useState(null);
  const [vesible, setVesible] = useState(false);
  const { allProjects, projectsLoading, filteredProjects } = useDash();

  const handleImgPreview = (image) => {
    setPreviewImage(image);
    setVesible(true);
  };

  return (
    <>
      <div id="project-preview" className={`${vesible ? "vesible" : ""}`}>
        <div className="exit-icon">
          <RiCloseFill
            onClick={() => {
              setVesible(false);
              setTimeout(() => setPreviewImage(null), 1000);
            }}
          />
        </div>
        {previewImage && (
          <div className="image">
            <img src={previewImage} alt="" />
          </div>
        )}
      </div>
      <div id="overview-dash">
        <h1 className="main-title">Overview of Projects</h1>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Image</div>
            <div className="col col-2">URL</div>
            <div className="col col-3">Category</div>
            <div className="col col-4">Controll</div>
          </li>

          <div className="filter-input">
            <FilterInput />
          </div>

          {/* Start Projects */}
          <ul className="projects-rows">
            {projectsLoading ? (
              <Loader />
            ) : filteredProjects.length ? (
              filteredProjects.map((proj, ix) => (
                <ProjectRow
                  key={proj._id}
                  proj={proj}
                  handleImgPreview={handleImgPreview}
                />
              ))
            ) : // All Projects
            allProjects.length ? (
              allProjects.map((proj, ix) => (
                <ProjectRow
                  key={proj._id}
                  proj={proj}
                  handleImgPreview={handleImgPreview}
                />
              ))
            ) : (
              <h2 className="info-title" style={{ marginTop: "10px" }}>
                Does not Projects Exist
              </h2>
            )}
          </ul>
          {/* End Projects */}
        </ul>
      </div>
    </>
  );
}

export default Overview;
