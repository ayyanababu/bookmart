import { combineReducers } from "redux";
import books from "./bookmart/reducer";

const reducers = combineReducers({
  booksState: books
});

export default reducers;
