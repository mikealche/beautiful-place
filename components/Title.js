import React from "react";

export default function Title({ children }) {
  return (
    <h1 className="text-center display-1 text-bold font-weight-bold">
      {children}
    </h1>
  );
}
