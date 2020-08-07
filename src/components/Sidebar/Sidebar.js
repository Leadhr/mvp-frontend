import React from "react";
import Logo from "../Logo/Logo"
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="SideBar col-2">
      <Logo />
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="/">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link disabled"
            href="/"
            tabIndex="-1"
            aria-disabled="true"
          >
            Disabled
          </a>
        </li>
      </ul>
    </div>
  );
}
