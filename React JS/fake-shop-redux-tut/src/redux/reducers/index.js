import { combineReducers } from "redux";
import {
  amountReducer,
  productReducer,
  selectedProductReducer,
} from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  amount: amountReducer,
});
export default reducers;
