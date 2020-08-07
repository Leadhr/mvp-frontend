import React from "react";

export default function HeadNav() {
  return (
    <ul className="nav justify-content-start HeadNav">
      <li className="nav-item">
        <a className="nav-link active" href="/">
          Company
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          Team
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          Individuals
        </a>
      </li>
    </ul>
  );
}
