import { call, put, takeEvery } from "redux-saga/effects";

//type
import headerTypes from "./type";
//action
import { searchMovieActionSuccess } from "./action";
//
import request from "../../utils/request";

function* searchMovie(action) {
  const searchMovie = action.payload
  const requestURL = `https://api.themoviedb.org/3/search/movie?api_key=d4dfced817985d414b727774821c9678&query=${searchMovie}&language=fr`;

  try {
    const response = yield call(request, requestURL, {
      method: "GET",
    });
    yield put(searchMovieActionSuccess(response.results));
  } catch (error) {
    console.log(error);
  }
}

function* headerSaga() {
  yield takeEvery(headerTypes.SEARCH_MOVIE, searchMovie);
}

export default headerSaga;
