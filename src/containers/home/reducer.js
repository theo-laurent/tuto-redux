import HomeTypes from "./types";

const INITIAL_STATE = {
  data: "",
};

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HomeTypes.GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case HomeTypes.GET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
