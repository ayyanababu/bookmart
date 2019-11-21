import { takeLatest, call, put } from "redux-saga/effects";
import types from "./types";
import bookActions from "./actions";
import { booksListData } from "../../mockdata/BooksListData";

const { SEARCH_BOOK, GET_BOOKS_lIST_REQUEST } = types;
const { updateSearchBooks, getBooksSuccess } = bookActions;

function* filterBooks() {
  try {
    yield put(updateSearchBooks([]));
  } catch (e) {
    yield put(updateSearchBooks([]));
  }
}

function* getBooksFromMock() {
  try {
    yield put(getBooksSuccess(booksListData));
  } catch (e) {
    yield put(getBooksSuccess([]));
  }
}

export function* searchBooks() {
  yield takeLatest(SEARCH_BOOK, filterBooks);
}

export function* fetchBooks() {
  yield takeLatest(GET_BOOKS_lIST_REQUEST, getBooksFromMock);
}
