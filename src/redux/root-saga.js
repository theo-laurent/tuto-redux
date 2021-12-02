import { all } from "redux-saga/effects";
// sagas
import headerSaga from "../containers/header/saga";
import movieSaga from "../containers/moviePopular/saga";
import movieDetailedSaga from "../containers/movieDetailed/saga";

export default function* rootSaga() {
  yield all([headerSaga(), movieSaga(), movieDetailedSaga()]);
}
