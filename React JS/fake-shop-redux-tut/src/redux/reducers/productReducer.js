import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [], //products will be an array of objects
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload }; //payload will be object
    default:
      return state;
  }
};
export const amountReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case ActionTypes.AMOUNT_PRODUCT:
      return Math.ceil(state + payload); //payload will be object
    default:
      return state;
  }
};
export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload }; //payload will be object
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {}; //payload will be object
    default:
      return state;
  }
};
