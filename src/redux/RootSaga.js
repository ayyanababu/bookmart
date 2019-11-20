import { fork, all } from "redux-saga/effects";
import * as booksSaga from "./bookmart/saga";

export default function* rootSaga() {
  yield all([...Object.values(booksSaga)].map(fork));
}
