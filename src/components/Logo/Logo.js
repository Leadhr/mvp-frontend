import React from "react"
import "./Logo.css"

export default function Logo() {
    return(
        <div className="Logo">
            <a href="/">
            <img
              src="https://leadhr.co/wp-content/themes/leadhr/img/logo.svg"
              height="35"
              alt="logo"
            />
          </a>
        </div>
    )
}