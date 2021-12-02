import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles/index.css";

// components
import HeaderContainer from "./containers/header";
import ShowMovieSearchContainer from "./containers/showMovieSearch";
import MovieContainer from "./containers/moviePopular";

// store
import configStore from "./redux/store";

const { store } = configStore();

ReactDOM.render(
  <Provider store={store}>
    <HeaderContainer />
    <ShowMovieSearchContainer />
    <MovieContainer />
  </Provider>,
  document.getElementById("root")
);
