import types from "./types";

const { UPDATE_BOOK, UPDATE_FILTERED_BOOKS } = types;

const initialState = {
  books: [],
  filteredBooks: []
};

const goalReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case UPDATE_BOOK:
      return {
        ...state,
        books: [...state.books, payload]
      };
    case UPDATE_FILTERED_BOOKS:
      return {
        ...state,
        filteredBooks: payload
      };
    default:
      return state;
  }
};

export default goalReducer;
