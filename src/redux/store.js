import { createStore, applyMiddleware, compose } from "redux";
// import logger from "redux-logger";

// saga racine
import rootSaga from "./root-saga";
// rooter racine
import rootReducer from "./root-reducers";
// middlewae saga
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const middlewares = [sagaMiddleware /*{logger}*/];

const enhancers = composeEnhancers(applyMiddleware(...middlewares));

export default (initialState = {}) => {
  let store = createStore(rootReducer, initialState, enhancers);
  sagaMiddleware.run(rootSaga);
  return { store };
};
