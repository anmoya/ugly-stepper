import React from "react";
import "./container.styles.css";

const Container = ({ children }) => {
  return <div className="container step">{children}</div>;
};

export default Container;
