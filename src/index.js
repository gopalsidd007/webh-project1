import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import ReduxStore from "./Components/Redux/Store/ReduxStore";

ReactDOM.render(
  <Provider store={ReduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
