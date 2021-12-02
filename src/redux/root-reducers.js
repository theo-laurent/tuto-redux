import { combineReducers } from "redux";

// reducers
import headerReducer from "../containers/header/reducer";

import moviePopularReducer from "../containers/moviePopular/reducer";

const rootReducer = combineReducers({
  header: headerReducer,
  moviePopular: moviePopularReducer,
});

export default rootReducer;
