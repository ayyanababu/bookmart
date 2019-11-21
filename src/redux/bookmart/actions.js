import types from "./types";

const {
  UPDATE_BOOK,
  SEARCH_BOOK,
  UPDATE_FILTERED_BOOKS,
  GET_BOOKS_lIST_SUCCESS,
  GET_BOOKS_lIST_REQUEST
} = types;

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

const getBooks = () => ({
  type: GET_BOOKS_lIST_REQUEST
});

const getBooksSuccess = data => ({
  type: GET_BOOKS_lIST_SUCCESS,
  payload: data
});

export default {
  updateBook,
  searchBook,
  updateSearchBooks,
  getBooks,
  getBooksSuccess
};
