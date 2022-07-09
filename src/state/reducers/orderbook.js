import {
  INIT_ORDERBOOK,
  UPDATE_ORDERBOOK,
  EDIT_ORDERBOOK_PRECISION,
} from "../actions";

const initialState = {
  bids: [],
  asks: [],
  precision: "P1",
};

const orderbook = (state = initialState, action) => {
  switch (action.type) {
    case INIT_ORDERBOOK: {
      const orderbookLength = action.payload.length;
      let bids = action.payload.slice(0, orderbookLength / 2);
      let asks = action.payload.slice(orderbookLength / 2);
      let total = 0;
      bids = bids.map((item) => {
        total += item[2];
        item = {
          price: item[0],
          count: item[1],
          total,
          amount: item[2],
        };
        return item;
      });
      total = 0;
      asks = asks.map((item) => {
        total += item[2];
        item = {
          price: item[0],
          count: item[1],
          total,
          amount: item[2],
        };
        return item;
      });
      const sortedBids = bids.sort((a, b) => b.price - a.price);
      const sortedAsks = asks.sort((a, b) => a.price - b.price);
      const updateTime = new Date().valueOf();
      return {
        ...state,
        bids: sortedBids,
        asks: sortedAsks,
        updateTime,
      };
    }
    case UPDATE_ORDERBOOK: {
      const [price, count, amount] = action.payload;
      let target = amount > 0 ? [...state.bids] : [...state.asks];
      const targetIndex = target.findIndex((item) => item.price === price);
      if (targetIndex === -1) {
        target.push({ price, count, amount });
      } else {
        target.splice(targetIndex, 1, { price, count, amount });
      }
      let total = 0;
      target = target.map((item) => {
        total += item.amount;
        item = {
          price: item.price,
          count: item.count,
          total,
          amount: item.amount,
        };
        return item;
      });

      return {
        ...state,
        [amount > 0 ? "bids" : "asks"]: target,
      };
    }
    case EDIT_ORDERBOOK_PRECISION: {
      return {
        ...state,
        precision: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default orderbook;
