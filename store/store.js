import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    lastPetPetted: {
      breed: "none",
      position: 0,
    },
  },
  reducers: {
    pet: (state, action) => {
      // Uses Immer internally, so we can mutate state
      state.lastPetPetted = action.payload;
    },
  },
});

export const { pet } = counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice.reducer,
});
