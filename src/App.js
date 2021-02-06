import React, { useState } from "react";
import "./App.css";
import Stepper from "./components/stepper/stepper.component";
import { StepContext } from "./StepContext";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";

// Steps
import ValidarDocumento from "./components/steps/step1.validar-documento";

function App() {
  const [step, setStep] = useState({
    actualStep: 1,
    start: 1,
    finish: 3,
    childrens: {
      step1: <ValidarDocumento />,
      step2: "",
      step3: "",
    },
  });
  return (
    <div className="App" style={{ padding: "50px" }}>
      <StepContext.Provider value={{ step, setStep }}>
        {/* Steper Header */}
        <Header start={step.start} finish={step.finish} />

        {/* Steps */}
        <Stepper />

        {/* Steper Footer (buttons to back-forward) */}
        <Footer />
      </StepContext.Provider>
    </div>
  );
}

export default App;
