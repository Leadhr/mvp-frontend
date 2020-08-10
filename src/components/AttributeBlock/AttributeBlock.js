import React from "react";
import Attribute from "../Attribute/Attribute";

export default function AttributeBlock() {
  return (
    <div className="AttributeBlock">
      <Attribute type="stability" />
      <Attribute type="independence" />
      <Attribute type="competition" />
    </div>
  );
}
