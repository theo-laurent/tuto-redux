import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles/index.css";

// components
import HeaderContainer from "./containers/header";
import MovieDetailedContainer from "./containers/movieDetailed";
import ShowMovieSearchContainer from "./containers/showMovieSearch";
import MovieContainer from "./containers/moviePopular";

// store
import configStore from "./redux/store";

const { store } = configStore();

ReactDOM.render(
  <Provider store={store}>
    <HeaderContainer />
    <MovieDetailedContainer />
    <ShowMovieSearchContainer />
    <MovieContainer />
  </Provider>,
  document.getElementById("root")
);
