import { TEST_ACTION } from "../actions";

const initialState = {
  foo: "bar",
};

const trades = (state = initialState, action) => {
  switch (action.type) {
    case TEST_ACTION: {
      console.log(action.type);
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

export default trades;
