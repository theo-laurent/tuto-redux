import headerTypes from "./type";

export const searchMovieAction = (data) => ({
  type: headerTypes.SEARCH_MOVIE,
  payload: data,
});
export const searchMovieActionSuccess = (response) => ({
  type: headerTypes.SEARCH_MOVIE_SUCCESS,
  payload: response,
});
