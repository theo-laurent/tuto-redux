import { combineReducers } from "redux";

// reducers
import headerReducer from "../containers/header/reducer";
import movieDetailedReducer from "../containers/movieDetailed/reducer";
import moviePopularReducer from "../containers/moviePopular/reducer";

const rootReducer = combineReducers({
  header: headerReducer,
  movieDetailed: movieDetailedReducer,
  moviePopular: moviePopularReducer,
});

export default rootReducer;
