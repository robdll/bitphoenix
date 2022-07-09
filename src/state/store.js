import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import orderbook from "./reducers/orderbook";

const reducers = combineReducers({
  orderbook,
});

const store = createStore(reducers, undefined, applyMiddleware(thunk));

export default store;
