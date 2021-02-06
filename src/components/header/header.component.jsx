import React, { useContext } from "react";
import { StepContext } from "../../StepContext";

import "./header.styles.css";

const Header = ({ start, finish }) => {
  const { step, setStep } = useContext(StepContext);

  let steps = [];

  for (let i = start; i <= finish; i++) {
    steps.push(
      <div
        key={i}
        className={`header-step ${
          step.actualStep === i && "header-step-selected"
        }`}
      >
        {i}
      </div>
    );
  }
  return (
    <div className="container header-container">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {steps.map((item) => item)}
      </div>
    </div>
  );
};

export default Header;
