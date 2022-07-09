import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import orderbook from "./reducers/orderbook";
import ticker from "./reducers/ticker";

const reducers = combineReducers({
  orderbook,
  ticker,
});

const store = createStore(reducers, undefined, applyMiddleware(thunk));

export default store;
