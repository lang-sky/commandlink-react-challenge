import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Person } from "types";

export interface PersonState {
  data: Person;
}

const initialState: PersonState = {
  data: {},
};

export const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    setPersonAction: (state, action: PayloadAction<Person>) => {
      state.data = action.payload;
    },
  },
});

export const { setPersonAction } = personSlice.actions;

export const personReducer = personSlice.reducer;
