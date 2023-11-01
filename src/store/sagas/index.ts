import { all } from "redux-saga/effects";
import { personSaga } from "./personSaga";

export function* rootSaga() {
  yield all([personSaga()]);
}
