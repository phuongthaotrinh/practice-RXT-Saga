import { PayloadAction } from "@reduxjs/toolkit";
import { takeEvery } from "redux-saga/effects";

export function* log(action: PayloadAction) {
  console.log("log action", action);
}
export default function* counterSaga() {
  console.log("counterSaga");
  yield takeEvery("*", log);
}
