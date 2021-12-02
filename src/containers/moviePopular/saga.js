import { call, put, takeEvery } from "redux-saga/effects";

//type
import movieTypes from "./type";
//action
import { getDataSuccessAction } from "./action";
//
import request from "../../utils/request";

function* getMovie() {
  const requestURL =
    "https://api.themoviedb.org/3/movie/popular?api_key=d4dfced817985d414b727774821c9678&language=fr";

  try {
    const response = yield call(request, requestURL, {
      method: "GET",
    });

    yield put(getDataSuccessAction(response.results));
  } catch (error) {
    console.log(error);
  }
}

function* movieSaga() {
  yield takeEvery(movieTypes.GET_DATA_MOVIE, getMovie);
}

export default movieSaga;
