import { combineReducers } from "redux";

// reducers
import homeReducer from "../containers/home/reducer";
import moviePopularReducer from "../containers/moviePopular/reducer";

const rootReducer = combineReducers({
  home: homeReducer,
  moviePopular: moviePopularReducer,
});

export default rootReducer;
