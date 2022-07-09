import { TEST_ACTION } from "../actions";

const initialState = {
  foo: "bar",
};

const orderbook = (state = initialState, action) => {
  switch (action.type) {
    case TEST_ACTION: {
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
