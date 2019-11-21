import types from "./types";

const {
  UPDATE_BOOK,
  UPDATE_FILTERED_BOOKS,
  GET_BOOKS_lIST_SUCCESS,
  SEARCH_QUERY
} = types;

const initialState = {
  books: [],
  filteredBooks: [],
  searchString: ""
};

const goalReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case UPDATE_BOOK:
      return {
        ...state,
        books: payload
      };
    case UPDATE_FILTERED_BOOKS:
      return {
        ...state,
        filteredBooks: payload
      };
    case GET_BOOKS_lIST_SUCCESS:
      return {
        ...state,
        books: [...payload]
      };
    case SEARCH_QUERY:
      return {
        ...state,
        searchString: payload
      };
    default:
      return state;
  }
};

export default goalReducer;
