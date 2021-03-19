import { useEffect, useState } from "react";
import { store } from "../store/store";

export const useTrackWhoHasBeenPetted = ({ breed, position }) => {
  const [wantsPetting, setWantsPetting] = useState(false);
  useEffect(() => {
    const unsusbcribe = store.subscribe(() => {
      const {
        lastPetPetted: { breed: lastBreedPetted, position: lastPositionPetted },
      } = store.getState();
      if (
        lastBreedPetted === breed &&
        Math.abs(position - lastPositionPetted) < 2 &&
        position !== lastPositionPetted
      ) {
        setWantsPetting(true);
      } else {
        setWantsPetting(false);
      }
    });
    return unsusbcribe;
  }, []);
  return wantsPetting;
};
