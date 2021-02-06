import React from "react";

const ButtonGroup = ({ children }) => {
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      {children}
    </div>
  );
};

export default ButtonGroup;
