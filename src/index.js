import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";

// components
import Home from "./containers/home";
import MovieContainer from "./containers/moviePopular";

// store
import configStore from "./redux/store";

const { store } = configStore();

ReactDOM.render(
  <Provider store={store}>
    <Home />
    <MovieContainer />
  </Provider>,
  document.getElementById("root")
);
