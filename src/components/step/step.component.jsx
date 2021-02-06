import React from "react";
import Container from "../container/container.component";

const Step = ({ title, children }) => {
  return (
    <Container>
      <h4>{title}</h4>
      {children}
    </Container>
  );
};

export default Step;
