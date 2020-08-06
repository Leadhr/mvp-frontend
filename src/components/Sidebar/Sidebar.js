import React from "react";
import Logo from "../Logo/Logo"
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="SideBar col-2">
      <Logo />
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active" href="/">
            Active
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">
            Link
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">
            Link
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link disabled"
            href="/"
            tabindex="-1"
            aria-disabled="true"
          >
            Disabled
          </a>
        </li>
      </ul>
    </div>
  );
}
