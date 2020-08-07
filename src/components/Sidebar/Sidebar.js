import React from "react";
import Logo from "../Logo/Logo";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="SideBar col-2">
      <Logo />
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="/">
            Culture
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true" href="/">
            Work-styles:
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/workstylescompany">
            -Company
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/workstylesindividual">
            -Individual
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/workstylesteam">
            -Team
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/reference">
            For Reference
          </a>
        </li>
      </ul>
    </div>
  );
}
