import { takeLatest, select, put } from "redux-saga/effects";
import types from "./types";
import bookActions from "./actions";
import { booksListData } from "../../mockdata/BooksListData";

const { SEARCH_BOOK, GET_BOOKS_lIST_REQUEST } = types;
const { updateSearchBooks, getBooksSuccess, setSearchQuery } = bookActions;

const allBooks = state => state.booksState.books;

function* filterBooks(action) {
  const { payload: searchQuery } = action;
  try {
    const books = yield select(allBooks);
    yield put(setSearchQuery(searchQuery));
    if (searchQuery.length === 0) {
      yield put(updateSearchBooks([]));
    }
    const filteredBooks = books.filter(({ title }) => {
      const titleWithLowerCase = title.toLowerCase();
      return titleWithLowerCase.includes(searchQuery);
    });
    yield put(updateSearchBooks(filteredBooks));
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
