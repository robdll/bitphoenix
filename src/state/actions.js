export const INIT_ORDERBOOK = "orderbook/INIT_ORDERBOOK";
export const UPDATE_ORDERBOOK = "orderbook/UPDATE_ORDERBOOK";
export const EDIT_ORDERBOOK_PRECISION = "orderbook/EDIT_ORDERBOOK_PRECISION";

export const initOrderBook = (payload) => {
  return {
    payload,
    type: INIT_ORDERBOOK,
  };
};

export const updateOrderBook = (payload) => {
  return {
    payload,
    type: UPDATE_ORDERBOOK,
  };
};

export const editOrderbookPrecision = (payload) => {
  return {
    payload,
    type: EDIT_ORDERBOOK_PRECISION,
  };
};
