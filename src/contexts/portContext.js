import React, { createContext, useRef, useState } from "react";
import axios from "axios";

const portContext = createContext();
const proxy =
  "https://am-portfolio-server-9arp7em9h-ahmedmahmoud929.vercel.app";

function PortState(props) {
  // States
  const [homeLoading, setHomeLoading] = useState(true);
  const [activeSec, setActiveSec] = useState([]);

  const [allProjects, setAllProjects] = useState([]);
  const [webProjects, setWebProjects] = useState([]);
  const [designProjects, setDesignProjects] = useState([]);
  const [vectorProjects, setVectorProjects] = useState([]);

  const [activeProject, setActiveProject] = useState(null);
  const [activeProjectVesible, setActiveProjectVesible] = useState(false);

  // Refs
  const homeRef = useRef();
  const aboutRef = useRef();
  const servicesRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();

  // Funcitons
  const activeSecHandler = (category = "") => {
    setHomeLoading(true);
    switch (category) {
      case "all":
        setActiveSec(allProjects);
        setHomeLoading(false);
        break;
      case "web":
        setActiveSec(webProjects);
        setHomeLoading(false);
        break;
      case "design":
        setActiveSec(designProjects);
        setHomeLoading(false);
        break;
      case "vector":
        setActiveSec(vectorProjects);
        setHomeLoading(false);
        break;
      default:
        setActiveSec(allProjects);
        setHomeLoading(false);
    }
  };

  const getHomeProjects = async () => {
    // Enable loading
    setHomeLoading(true);

    return axios.get(proxy + "/api/projects").then((res) => {
      const all = res.data.allProjects;
      const web = all.filter((p) => p.category === "Web Design");
      const vector = all.filter((p) => p.category === "Vector Art");
      const design = all.filter((p) => p.category === "Graphic Design");

      // Set Projects
      const shuffled = [];
      for (
        let i = 0;
        i < Math.max(web.length, vector.length, design.length);
        i += 5
      ) {
        shuffled.push(...web.slice(i, i + 5));
        shuffled.push(...design.slice(i, i + 5));
        shuffled.push(...vector.slice(i, i + 5));
      }
      setActiveSec(shuffled);
      setAllProjects(shuffled);
      setWebProjects(web);
      setDesignProjects(design);
      setVectorProjects(vector);

      // Desable loading
      setHomeLoading(false);
    });
  };

  const scrollHandler = (section = "") => {
    const sections = {
      home: homeRef,
      about: aboutRef,
      services: servicesRef,
      portfolio: portfolioRef,
      contact: contactRef,
    };
    sections[section].current.scrollIntoView();
  };

  const addNewMessage = async (fullName, email, message) => {
    return axios
      .post(proxy + "/api/messages", { fullName, email, message })
      .catch((err) => console.log(err));
  };

  return (
    <portContext.Provider
      value={{
        allProjects,
        webProjects,
        designProjects,
        vectorProjects,
        activeSec,
        activeProject,
        homeLoading,
        activeProjectVesible,
        homeRef,
        aboutRef,
        servicesRef,
        portfolioRef,
        contactRef,
        scrollHandler,
        addNewMessage,
        setActiveProjectVesible,
        setActiveProject,
        activeSecHandler,
        getHomeProjects,
      }}
    >
      {props.children}
    </portContext.Provider>
  );
}

export { PortState, portContext };
