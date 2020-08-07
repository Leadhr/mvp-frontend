import React from "react";

export default function HeadNav() {
  return (
    <ul className="nav justify-content-start HeadNav">
      <li className="nav-item">
        <a className="nav-link active" href="/workstylescompany">
          Company
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/workstylesteam">
          Team
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/workstylesindividual">
          Individuals
        </a>
      </li>
    </ul>
  );
}
