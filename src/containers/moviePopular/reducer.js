import movieTypes from "./type";

const INITIAL_STATE = {
  movies: "",
  autres: ""
};

const moviePopularReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case movieTypes.GET_DATA_MOVIE_SUCCESS:
      return {
        ...state,
        movies: action.payload,
      };
    case movieTypes.GET_DATA_MOVIE:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};

export default moviePopularReducer;
