import React, { useContext, useRef } from "react";
import Confetti from "react-canvas-confetti";

const AwesomenessContext = React.createContext({ celebrate: () => {} });

export const AwesomenessProvider = ({ children }) => {
  const confetti = useRef(null);
  const celebrate = (e) => {
    confetti.current({
      particleCount: 100,
      origin: {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      },
      spread: Math.random() * 500,
    });
  };

  return (
    <AwesomenessContext.Provider value={{ celebrate }}>
      <Confetti
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          zIndex: -1,
          top: 0,
          left: 0,
        }}
        refConfetti={(refVal) => (confetti.current = refVal)}
      />
      {children}
    </AwesomenessContext.Provider>
  );
};

export const useAwesomeness = () => useContext(AwesomenessContext);
