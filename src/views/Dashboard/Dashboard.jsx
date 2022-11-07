import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useDash } from "../../hooks/useDash";

// Images
import purpleLogo from "../../assets/images/myLogo-purble.png";
// Icons
import {
  MdSpaceDashboard,
  MdDashboardCustomize,
  MdLogout,
} from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BiMenuAltLeft, BiMenu } from "react-icons/bi";
// Style
import "./dashboard.style.css";
import InfoMessage from "../../components/InfoMessage/InfoMessage";

function Dashboard() {
  // States
  const [menuOpen, setMenuOpen] = useState(true);
  const { logout } = useAuth();

  const { getAllProjects, getAllMessages } = useDash();

  useEffect(() => {
    getAllProjects();
    getAllMessages();
  }, []);
  return (
    <div id="Dashboard">
      {/* SLIDEBAR */}
      <div className={`sidebar ${menuOpen ? "" : "active"}`}>
        <div className="logo-details">
          <div className="profile-img">
            <img src={purpleLogo} alt="profile-img" />
          </div>
          <span className="logo_name">AM</span>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/admin/dashboard/overview">
              <i>
                <MdSpaceDashboard />
              </i>
              <span className="links_name">Overview</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/dashboard/create">
              <i>
                <MdDashboardCustomize />
              </i>
              <span className="links_name">Create</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/dashboard/update">
              <i>
                <FaEdit />
              </i>
              <span className="links_name">Update</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/dashboard/messages">
              <i>
                <BiMessageSquareDetail />
              </i>
              <span className="links_name">Messages</span>
            </NavLink>
          </li>
          <li className="log_out">
            <a onClick={logout}>
              <i>
                <MdLogout />
              </i>
              <span className="links_name">Log out</span>
            </a>
          </li>
        </ul>
      </div>
      <section className="home-section">
        {/* NAVBAR */}
        <nav>
          <div className="sidebar-button">
            <i>
              {menuOpen ? (
                <BiMenu onClick={() => setMenuOpen(!menuOpen)} />
              ) : (
                <BiMenuAltLeft onClick={() => setMenuOpen(!menuOpen)} />
              )}
            </i>
            {/* <span className="dashboard">Dashboard</span> */}
          </div>
        </nav>
        {/* MAIN SECTIONS */}
        <div className="home-content">
          <InfoMessage />
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
