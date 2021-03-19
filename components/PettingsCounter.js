import React from "react";
import { useAwesomeness } from "../contexts/Awesomeness";
import { useStickyState } from "../lib/stickyState";

export default function PettingsCounter({ url, children }) {
  const [timesPetted, setTimesPetted] = useStickyState(url, 0);
  const { celebrate } = useAwesomeness();
  const handlePet = (e) => {
    setTimesPetted(timesPetted + 1);
    celebrate(e);
  };

  return (
    <div onClick={handlePet}>
      {children}
      <div className="pt-3">
        <p className="font-weight-bold lead">
          Petted {timesPetted} {timesPetted !== 1 ? "times" : "time"} 🤚
        </p>
      </div>
    </div>
  );
}
