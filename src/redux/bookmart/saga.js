import { takeLatest, select, put } from "redux-saga/effects";
import types from "./types";
import bookActions from "./actions";
import { booksListData } from "../../mockdata/BooksListData";

const { SEARCH_BOOK, GET_BOOKS_lIST_REQUEST, REQ_UPDATE_BOOK } = types;
const {
  updateSearchBooks,
  getBooksSuccess,
  setSearchQuery,
  updateBook
} = bookActions;

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

function* updateBookInList(action) {
  const { payload } = action;
  const { book, type } = payload;
  try {
    const books = yield select(allBooks);
    let newBooks = books;
    if (type === "edit") {
      const allBooksWithoutSelected = books.filter(({ id }) => {
        const { id: updatedBookId } = book;
        return id !== updatedBookId;
      });
      newBooks = [book, ...allBooksWithoutSelected];
    } else {
      newBooks = [book, ...books];
    }
    yield put(updateBook(newBooks));
    yield put(setSearchQuery(""));
    yield put(updateSearchBooks([]));
  } catch (e) {
    const books = yield select(allBooks);
    yield put(updateBook(books));
  }
}

export function* searchBooks() {
  yield takeLatest(SEARCH_BOOK, filterBooks);
}

export function* fetchBooks() {
  yield takeLatest(GET_BOOKS_lIST_REQUEST, getBooksFromMock);
}

export function* reqForUpdateBook() {
  yield takeLatest(REQ_UPDATE_BOOK, updateBookInList);
}
