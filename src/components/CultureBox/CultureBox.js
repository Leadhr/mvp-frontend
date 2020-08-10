import React from "react";
import CultureIntended from "../CultureIntended/CultureIntended";
import CultureActual from "../CultureActual/CultureActual";


export default function CultureBox() {
    return (
        <div className="CultureBox">
            <CultureIntended />
            <CultureActual />
        </div>
    )
}