import headerTypes from "./type";

const INITIAL_STATE = {
  searchMovie: "",
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case headerTypes.SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        searchMovie: action.payload,
      };
    case headerTypes.SEARCH_MOVIE:
      return {
        ...state,
        searchMovie: action.payload,
      };
    default:
      return state;
  }
};

export default headerReducer;
