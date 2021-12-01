import movieTypes from "./type";

export const getDataAction = (data) => ({
  type: movieTypes.GET_DATA_MOVIE,
  payload: data,
});
export const getDataSuccessAction = (response) => ({
  type: movieTypes.GET_DATA_MOVIE_SUCCESS,
  payload: response,
});
