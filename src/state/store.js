import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import orderbook from "./reducers/orderbook";
import ticker from "./reducers/ticker";
import trades from "./reducers/trades";

const reducers = combineReducers({
  orderbook,
  ticker,
  trades,
});

const store = createStore(reducers, undefined, applyMiddleware(thunk));

export default store;
