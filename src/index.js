import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducer from "./reducers";
import { Provider } from "react-redux";
import "./styles/reset.css";
import "./styles/layout.css";
import "./styles/style.css";
import "./components/common/commonStyle.css"

import App from "./App";

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
