import types from "./types";

const { UPDATE_BOOK, SEARCH_BOOK, UPDATE_FILTERED_BOOKS } = types;

const updateBook = bookData => ({
  type: UPDATE_BOOK,
  payload: bookData
});

const searchBook = searchKey => ({
  type: SEARCH_BOOK,
  payload: searchKey
});

const updateSearchBooks = data => ({
  type: UPDATE_FILTERED_BOOKS,
  payload: data
});

export default {
  updateBook,
  searchBook,
  updateSearchBooks
};
