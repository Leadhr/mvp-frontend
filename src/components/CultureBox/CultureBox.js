import React from "react";
import CultureIntended from "../CultureIntended/CultureIntended";
import CultureActual from "../CultureActual/CultureActual";


export default function CultureBox() {
    return (
        <div className="CultureBox">
            <p>im culture box</p>
            <CultureIntended />
            <CultureActual />
        </div>
    )
}