import React from "react";
import { useAwesomeness } from "../contexts/Awesomeness";
import { useStickyState } from "../lib/stickyState";
import { useTrackWhoHasBeenPetted } from "../lib/trackWhoHasBeenPetted";
import { pet, store } from "../store/store";

export default function PettingsCounter({ url, children, breed, position }) {
  const { celebrate } = useAwesomeness();
  const [timesPetted, setTimesPetted] = useStickyState(url, 0); // Uses localstorage
  const wantsPetting = useTrackWhoHasBeenPetted({ breed, position }); // Uses redux

  const handlePet = (e) => {
    setTimesPetted(timesPetted + 1); // Simple localstorage state
    store.dispatch(pet({ breed, position })); // Redux
    celebrate(e); // React Context
  };

  return (
    <div onClick={handlePet} style={{ cursor: "pointer" }}>
      {children}
      <div className="pt-3">
        <p className="font-weight-bold lead">
          Petted {timesPetted} {timesPetted !== 1 ? "times" : "time"} 🤚
        </p>
        <p style={{ fontSize: 20 }}>
          {wantsPetting ? "Pet me now!!!! 🐶" : ""}
        </p>
      </div>
    </div>
  );
}
