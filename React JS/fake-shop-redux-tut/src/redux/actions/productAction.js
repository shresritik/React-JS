import { ActionTypes } from "../constants/action-types";

export const setProduct = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProduct = (products) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: products,
  };
};
export const removeProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
export const amountProduct = (products) => {
  return {
    type: ActionTypes.AMOUNT_PRODUCT,
    payload: products,
  };
};
