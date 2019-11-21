import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import AppReducers from "../RootReducer";
import allSagas from "../RootSaga";
import logger from "redux-logger";

const storeMiddleWares = [];

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  storeMiddleWares.push(logger);
  storeMiddleWares.push(sagaMiddleware);
  const allMiddleWares = applyMiddleware(...storeMiddleWares);
  const store = createStore(AppReducers, allMiddleWares);
  sagaMiddleware.run(allSagas);
  return { store };
};

export default configureStore;
