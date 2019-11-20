import { combineReducers } from "redux";
import books from "./bookmart/reducer";

const reducers = combineReducers({
  books
});

export default reducers;
