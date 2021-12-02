import movieDetailedTypes from "./type";

export const findMovieAction = (data) => ({
  type: movieDetailedTypes.SHOW_MOVIE,
  payload: data,
});

export const findMovieSuccessAction = (data) => ({
  type: movieDetailedTypes.SHOW_MOVIE_SUCCESS,
  payload: data,
});
