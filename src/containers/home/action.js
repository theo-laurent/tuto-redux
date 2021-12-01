import HomeTypes from "./types";

export const getDataSuccessAction = (response) => ({
  type: HomeTypes.GET_DATA_SUCCESS,
  payload: response,
});

export const getDataAction = (data) => ({
  type: HomeTypes.GET_DATA,
  payload: data,
});
