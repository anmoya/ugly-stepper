import React, { useContext } from "react";
import { StepContext } from "../../StepContext";
import ButtonGroup from "../button-group/button-group.component";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Footer = () => {
  const { step, setStep } = useContext(StepContext);
  return (
    <ButtonGroup>
      <button
        className="btn btn-success"
        onClick={() => step > 1 && setStep(step - 1)}
      >
        <FaArrowLeft />
      </button>
      <button
        className="btn btn-warning"
        onClick={() => (step < 3 ? setStep(step + 1) : null)}
      >
        <FaArrowRight />
      </button>
    </ButtonGroup>
  );
};

export default Footer;
