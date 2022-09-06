import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App";

// import { createRoot } from "react-dom/client";
import { setupStore } from "./app/store";
import { Provider } from "react-redux";

const store = setupStore();

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
