import { all } from "redux-saga/effects";

import movieSaga from "../containers/moviePopular/saga";

export default function* rootSaga() {
  yield all([
    movieSaga()
  ]);
}
