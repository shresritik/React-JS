import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

//reducers are combined to make a single reducer
const reducers = combineReducers({
  amount: amountReducer,
});
export default reducers;
