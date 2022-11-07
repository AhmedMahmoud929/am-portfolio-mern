import React, { createContext, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const proxy =
  "https://am-portfolio-server-9arp7em9h-ahmedmahmoud929.vercel.app";

const dashContext = createContext();

function DashState(props) {
  // States
  const Navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [infoMessage, setInfoMessage] = useState(null);
  const [allProjects, setAllProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [allMessages, setAllMessages] = useState([]);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [messagesLoading, setMessagesLoading] = useState(true);

  const { user } = useAuth();
  const config = {
    headers: {
      Authorization: `Bearer ${user}`,
    },
  };

  // Functions
  const getAllProjects = async () => {
    setProjectsLoading(true);
    setFilteredProjects([]);
    return axios
      .get(proxy + "/api/projects")
      .then((res) => {
        setAllProjects(res.data.allProjects);
        setProjectsLoading(false);
      })
      .catch((err) => console.log(err.response));
  };

  const getProjectsByCategory = (category = "") => {
    if (allProjects.length) {
      const filteredProjects = allProjects.filter(
        (proj) => proj.category === category
      );
      setFilteredProjects(filteredProjects);
      return filteredProjects;
    }
  };

  const addNewProject = (link, image) => {
    if (category && link && image) {
      setUploading(true);
      const fd = new FormData();
      fd.append("link", link);
      fd.append("category", category);
      fd.append("image", image);
      axios
        .post(proxy + "/api/dashboard", fd, config)
        .then(() => {
          getAllProjects().then(() => {
            setUploading(false);
            setCategory(null);
            Navigate("/admin/dashboard/overview");
            handleInfoMessage("Project Added Successfully", false);
            // Done successfully => make image and link empty
          });
        })
        .catch((err) => console.log(err.response));
    } else {
      handleInfoMessage("Category Required", true);
    }
  };

  const deleteProject = (id) => {
    setProjectsLoading(true);
    axios
      .delete(`${proxy}/api/dashboard/${id}`, config)
      .then((res) => {
        getAllProjects().then(() => {
          setProjectsLoading(false);
          // handleInfoMessage("Project Deleted Successfully", false);
        });
      })
      .catch((err) => console.log(err.response));
  };

  const updateProject = (id, link, image) => {
    if (category && link) {
      setUploading(true);
      const fd = new FormData();
      fd.append("link", link);
      fd.append("category", category);
      if (image) fd.append("image", image);
      axios
        .put(`${proxy}/api/dashboard/${id}`, fd, config)
        .then((res) => {
          getAllProjects().then(() => {
            setUploading(false);
            setCategory(null);
            setActiveProject(null);
            handleInfoMessage("Project Updated Successfully", false);
            Navigate("/admin/dashboard/overview");
          });
        })
        .catch((err) => console.log(err.response));
    } else handleInfoMessage("Category Required", true);
  };

  const getAllMessages = async () => {
    setMessagesLoading(true);
    return axios
      .get(proxy + "/api/messages", config)
      .then((res) => {
        setMessagesLoading(false);
        setAllMessages(res.data.allMessages);
      })
      .catch((err) => console.log(err.response));
  };

  const deleteMessage = (id) => {
    setMessagesLoading(true);
    axios
      .delete(`${proxy}/api/messages/${id}`, config)
      .then(() => {
        getAllMessages().then(() => {
          setMessagesLoading(false);
          // handleInfoMessage("Message Deleted Successfully", false);
        });
      })
      .catch((err) => console.log(err.response));
  };

  const handleInfoMessage = (payload, isError) => {
    const newInfoMessage = { payload: payload, isError: isError };
    setInfoMessage(newInfoMessage);
    setTimeout(() => setInfoMessage(null), 3000);
  };

  return (
    <dashContext.Provider
      value={{
        uploading,
        category,
        projectsLoading,
        allProjects,
        filteredProjects,
        allMessages,
        messagesLoading,
        activeProject,
        infoMessage,
        getProjectsByCategory,
        updateProject,
        deleteMessage,
        setCategory,
        addNewProject,
        getAllMessages,
        getAllProjects,
        deleteProject,
        setActiveProject,
      }}
    >
      {props.children}
    </dashContext.Provider>
  );
}

export { DashState, dashContext };
