import { all } from "redux-saga/effects";
import headerSaga from "../containers/header/saga";
import movieSaga from "../containers/moviePopular/saga";

export default function* rootSaga() {
  yield all([
    headerSaga(), 
    movieSaga(),
  ]);
}
