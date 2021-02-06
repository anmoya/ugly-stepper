import React, { useContext } from "react";
import { StepContext } from "../../StepContext";
import Step from "../step/step.component";

const Stepper = () => {
  const { step, setStep } = useContext(StepContext);
  return (
    <>
    {step.actualStep === 1 && <Step title="Step 1" >{step['childrens'][`step${step.actualStep}`]}</Step>}
      {step.actualStep === 2 && <Step title="Step 2" />}
      {step.actualStep === 3 && <Step title="Step 3" />}
      <div>{step.actualStep}</div>
      
    </>
  );
};

export default Stepper;
