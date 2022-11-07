import React from "react";
import { BiLinkAlt } from "react-icons/bi";
import { TbEdit } from "react-icons/tb";
import { AiFillEye } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDash } from "../../hooks/useDash";

function ProjectRow({ proj, handleImgPreview }) {
  const { deleteProject, setActiveProject } = useDash();
  const Navigate = useNavigate();

  return (
    <>
      <li className="table-row" key={proj._id}>
        <div className="col col-1">
          <img src={proj.image} alt="project" />
        </div>
        <div className="col col-2">
          <a className="icon" href={proj.link} target="_blanked">
            <BiLinkAlt className="i" />
          </a>
        </div>
        <div className="col col-3">{proj.category}</div>
        <div className="col col-4">
          <div
            className="icon"
            onClick={() => {
              setActiveProject(proj);
              Navigate("/admin/dashboard/update");
            }}
          >
            <TbEdit className="i" />
          </div>
          <div className="icon" onClick={() => deleteProject(proj._id)}>
            <MdDelete className="i" />
          </div>
          <div className="icon" onClick={() => handleImgPreview(proj.image)}>
            <AiFillEye className="i" />
          </div>
        </div>
      </li>
    </>
  );
}

export default ProjectRow;
