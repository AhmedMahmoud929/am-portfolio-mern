import React, { useState } from "react";
import "./create.style.css";
import SelectInp from "./SelectInp";
import { BiLinkAlt } from "react-icons/bi";
import { useDash } from "../../hooks/useDash";

function Create() {
  // States
  const [link, setLink] = useState("");
  const [image, setImage] = useState(null);
  const [imageView, setImageView] = useState(null);
  const { uploading, addNewProject, activeProject } = useDash();

  // Functions
  const handleImgView = (img) => {
    const file = new FileReader();
    file.readAsDataURL(img);
    file.onload = () => {
      setImageView(file.result);
    };
  };

  return (
    <div>
      <h1 className="main-title">Add New Project</h1>
      {activeProject ? (
        <h2 className="info-title">Please Get Out Of Edit Mode</h2>
      ) : (
        <form
          id="create-dash"
          className="create"
          onSubmit={(e) => {
            e.preventDefault();
            if (link && image) {
              addNewProject(link, image);
            }
          }}
        >
          <div className="form-group">
            <div className="icon">
              <BiLinkAlt />
            </div>
            <input
              type="text"
              name="link"
              placeholder="URL"
              autoComplete="off"
              required="required"
              className="form-controll"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <div className="form-group select-inp">
            <SelectInp />
          </div>

          <div className="form-group file-area">
            <input
              type="file"
              name="images"
              id="images"
              required="required"
              onChange={(e) => {
                const img = e.target.files[0];
                setImage(img);
                handleImgView(img);
              }}
            />
            <div className="file-dummy">
              <div className="success">
                <img src={imageView} alt="" />
              </div>
              <div className="def">Please select an image</div>
            </div>
          </div>

          <div className="form-group">
            <button disabled={uploading} type="submit">
              {uploading ? "Loading..." : "Upload"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Create;
