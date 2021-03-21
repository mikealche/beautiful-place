import React from "react";

export const Title = ({ children }) => {
  return (
    <h1 className="text-center display-1 pb-5" style={{ fontWeight: "900" }}>
      {children}
    </h1>
  );
};

export const CoolText = ({ children }) => (
  <span
    style={{
      textDecoration: `underline wavy hotpink`,
      background: "-webkit-linear-gradient(217deg,#004bd3, #00c0ff,purple)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: "900",
    }}
  >
    {children}
  </span>
);
