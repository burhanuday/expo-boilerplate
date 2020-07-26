import { types } from "../actions/counter";

const initialStore = {
  count: 0,
};

const counter = (state = initialStore, action) => {
  switch (action.type) {
    case types.COUNTER_INCREMENT:
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};

export default counter;
