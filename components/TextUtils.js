import React from "react";

export const Title = ({ children }) => {
  return (
    <h1 className="text-center display-1 text-bold font-weight-bold pb-5">
      {children}
    </h1>
  );
};

export const CoolText = ({ children }) => (
  <span
    style={{
      textDecoration: `underline wavy hotpink`,
      background: "-webkit-linear-gradient(217deg,#004bd3, #00c0ff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    {children}
  </span>
);
