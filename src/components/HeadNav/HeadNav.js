import React from "react";
import Tab from "../Tab/Tab";

export default function HeadNav() {
  return (
    <ul className="nav justify-content-start HeadNav">
      <li className="nav-item">
        <a className="nav-link active" href="#">
          Company
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Team
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Individuals
        </a>
      </li>
    </ul>
  );
}
