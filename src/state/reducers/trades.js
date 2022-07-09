import { INIT_TRADES, UPDATE_TRADES } from "../actions";

const initialState = {
  trades: [],
};

const trades = (state = initialState, action) => {
  switch (action.type) {
    case INIT_TRADES: {
      return {
        ...state,
        trades: [...action.payload],
      };
    }
    case UPDATE_TRADES: {
      const newTrades = [action.payload];
      const oldTrades = state.trades.splice(0, 30 - newTrades.length);
      return {
        ...state,
        trades: newTrades.concat(oldTrades),
      };
    }
    default: {
      return state;
    }
  }
};

export default trades;
