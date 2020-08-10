import React from "react";

export default function Attribute(props) {
  if (props.type === "stability") {
    return (
      <div className="Attribute">
        <h1>Stability</h1>
        <p>
          Your organization tends to be more focused on stability and
          conservation in the face of change. They tend to value steadiness and
          durability. Highly results-oriented environments where productivity
          and winning shape the culture.
        </p>
      </div>
    );
  } else if (props.type === "independence") {
    return (
      <div className="Attribute">
        <h1>Independence</h1>
        <p>
          Your organization tends to be more focused on tasks, being
          independent, accomplishing goals, and taking action.
        </p>
      </div>
    );
  } else if (props.type === "competition") {
    return (
      <div className="Attribute">
        <h1>Competition</h1>
        <p>
          Individuals who are primarily interested in competitiveness and
          productivity.
        </p>
      </div>
    );
  } else {
    return null;
  }
}
