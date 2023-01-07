import { all } from "redux-saga/effects";
import counterSaga from "../features/counter/counterSaga";

function* helloSaga() {
  console.log("hello saga");
}

export default function* rootSaga() {
  console.log("roootSata");
  yield all([helloSaga(), counterSaga()])
}
