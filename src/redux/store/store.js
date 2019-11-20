import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import AppReducers from "../RootReducer";
import allSagas from "../RootSaga";

const storeMiddleWares = [];

const configureStore = () => {
  // Saga MiddleWare
  const sagaMiddleware = createSagaMiddleware();

  storeMiddleWares.push(sagaMiddleware);

  // Apply all middleWares to Redux Store
  const allMiddleWares = applyMiddleware(...storeMiddleWares);

  // creating a store with reducers and middleWares
  const store = createStore(AppReducers, allMiddleWares);

  // Running all Worker Sagas
  sagaMiddleware.run(allSagas);

  return { store };
};

export default configureStore;
