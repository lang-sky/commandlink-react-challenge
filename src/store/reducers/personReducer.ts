import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PersonState {
  [key: string]: string | undefined;
}

const initialState: PersonState = {};

export const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    setPersonAction: (state, action: PayloadAction<PersonState>) => {
      state = action.payload;
    },
  },
});

export const { setPersonAction } = personSlice.actions;

export const personReducer = personSlice.reducer;
