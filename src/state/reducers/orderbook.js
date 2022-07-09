import {
  INIT_ORDERBOOK,
  UPDATE_ORDERBOOK,
  EDIT_ORDERBOOK_PRECISION,
} from "../actions";

const initialState = {
  bids: [],
  asks: [],
  precision: "P0",
};

const orderbook = (state = initialState, action) => {
  switch (action.type) {
    case INIT_ORDERBOOK: {
      console.log("init", action.payload);
      return {
        ...state,
      };
    }
    case UPDATE_ORDERBOOK: {
      console.log("update", action.payload);
      return {
        ...state,
      };
    }
    case EDIT_ORDERBOOK_PRECISION: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

export default orderbook;
