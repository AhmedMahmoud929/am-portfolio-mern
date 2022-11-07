import React, { useState } from "react";
import SelectInp from "../Create.Dash/SelectInp";
import { BiLinkAlt } from "react-icons/bi";
import { useDash } from "../../hooks/useDash";
import "../Create.Dash/create.style.css";
import { useEffect } from "react";

function Create() {
  // States
  const [link, setLink] = useState("");
  const [image, setImage] = useState(null);
  const [imageView, setImageView] = useState(null);
  const [imageSelected, setImageSelected] = useState(null);
  const { activeProject, uploading, setCategory, updateProject } = useDash();

  // Functions
  const handleImgView = (img) => {
    const file = new FileReader();
    file.readAsDataURL(img);
    file.onload = () => {
      setImageView(file.result);
    };
  };

  useEffect(() => {
    if (activeProject) {
      setLink(activeProject.link);
      setCategory(activeProject.category);
    }
  }, []);
  return (
    <div>
      <h1 className="main-title">Update A Project</h1>
      {!activeProject ? (
        <h2 className="info-title">Please Select A Project</h2>
      ) : (
        <form
          id="create-dash"
          className="update"
          onSubmit={(e) => {
            e.preventDefault();
            updateProject(activeProject._id, link, image);
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
              className={imageSelected ? "valid" : ""}
              id="images"
              onChange={(e) => {
                const img = e.target.files[0];
                setImage(img);
                setImageSelected(img.name);
                handleImgView(img);
              }}
            />
            <div className="file-dummy">
              <div className="success">
                <img src={imageView} alt="" />
              </div>
              <div className="def">Select a new image</div>
            </div>
          </div>

          <div className="form-group">
            <button disabled={uploading} type="submit">
              {uploading ? "Loading..." : "Update"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Create;
