import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

//It is a store having all the reducers from the combinedReducers, initial state and applying a middleware
export const store = createStore(reducers, {}, applyMiddleware(thunk));
