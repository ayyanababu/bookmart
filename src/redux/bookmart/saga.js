import { takeLatest, call, put } from "redux-saga/effects";
import types from "./types";
import bookActions from "./actions";

const { SEARCH_BOOK } = types;
const { updateSearchBooks } = bookActions;

function* filterBooks() {
  try {
    yield put(updateSearchBooks([]));
  } catch (e) {
    yield put(updateSearchBooks([]));
  }
}
export function* searchBooks() {
  yield takeLatest(SEARCH_BOOK, filterBooks);
}
