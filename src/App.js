import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import Books from "./containers/Books";
import configureStore from "./redux/store/store";

const App = () => {
  const storeObject = configureStore();
  const { store } = storeObject;

  return (
    <div className="App">
      <Provider store={store}>
        <Books />
      </Provider>
    </div>
  );
};

export default App;
