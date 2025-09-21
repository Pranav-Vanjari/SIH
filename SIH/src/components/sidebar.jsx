import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: "🏠" },
    { name: "Comments", path: "/comments", icon: "💬" },
    { name: "Reports", path: "/reports", icon: "📄" },
    { name: "Solutions", path: "/solutions", icon: "🛠️" },
    { name: "Settings", path: "/settings", icon: "⚙️" },
  ];

  const handleExport = () => {
    // Export logic here
    console.log("Exporting data...");
  };

  return (
    <div className="sidebar">
      <div className="profile">
        <div className="avatar1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="profile-info">
          <p className="name">Omkar Yeote</p>
          <p className="role">Administrator</p>
        </div>
      </div>

      <nav className="nav-links">
        <ul>
          {navItems.map((item) => (
            <li
              key={item.name}
              className={location.pathname === item.path ? "active" : ""}
            >
              <Link to={item.path}>
                <span className="icon">{item.icon}</span> {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button className="export-option" onClick={handleExport}>
          Export
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
