import { UPDATE_TICKER } from "../actions";

const initialState = {
  lastPrice: "n.a.",
  volume: "n.a.",
  high: "n.a.",
  low: "n.a.",
};

const ticker = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TICKER: {
      const lastPrice = action.payload[6];
      const volume = action.payload[7];
      const high = action.payload[8];
      const low = action.payload[9];
      return {
        ...state,
        lastPrice,
        volume,
        high,
        low,
      };
    }
    default: {
      return state;
    }
  }
};

export default ticker;
