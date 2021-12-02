import movieDetailedTypes from "./type";

const INITIAL_STATE = {
  movieId: "",
  movie: null,
};

const movieDetailedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case movieDetailedTypes.SHOW_MOVIE:
      return {
        ...state,
        movieId: action.payload,
      };
    case movieDetailedTypes.SHOW_MOVIE_SUCCESS:
      return {
        ...state,
        movie: action.payload,
      };
    default:
      return state;
  }
};

export default movieDetailedReducer;
