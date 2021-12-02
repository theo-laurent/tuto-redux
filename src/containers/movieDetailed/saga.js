import { call, put, takeEvery } from "redux-saga/effects";

//type
import movieDetailedTypes from "./type";
//action
import { findMovieSuccessAction } from "./actions";
//
import request from "../../utils/request";

function* findMovie({ payload }) {
  const requestURL = `https://api.themoviedb.org/3/movie/${payload}?api_key=d4dfced817985d414b727774821c9678&language=fr`;

  try {
    const response = yield call(request, requestURL, {
      method: "GET",
    });

    yield put(findMovieSuccessAction(response));
    
  } catch (error) {
    console.log(error);
  }
}

function* movieDetailedSaga() {
  yield takeEvery(movieDetailedTypes.SHOW_MOVIE, findMovie);
}

export default movieDetailedSaga;
