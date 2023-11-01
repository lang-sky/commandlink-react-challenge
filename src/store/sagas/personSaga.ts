import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest, all } from "redux-saga/effects";
import { setPersonAction } from "store/reducers/personReducer";
import { SET_PERSON } from "store/types";
import { Person } from "types";

function* setPerson(action: PayloadAction<Person>) {
  yield put(setPersonAction(action.payload));
}

export function* personSaga() {
  yield all([takeLatest(SET_PERSON, setPerson)]);
}
