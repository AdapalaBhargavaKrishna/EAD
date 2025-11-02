import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App.jsx";

const reducer = (state = { globalCount: 0 }, action) => {
  switch (action.type) {
    case "INC":
      return { globalCount: state.globalCount + 1 };
    case "DEC":
      return { globalCount: state.globalCount - 1 };
    case "RESET":
      return { globalCount: 0 };
    default:
      return state;
  }
};

const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);