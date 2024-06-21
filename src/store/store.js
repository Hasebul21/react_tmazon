import { createStore } from "redux";

const initialState = {
  count: 0,
  showCounter: true,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log("Incrementing")
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "INCREMENT_BY_5":
      return {
        ...state,
        count: state.count + action.amount,
      };
    case "TOGGLE_COUNTER":
      return {
        ...state,
        showCounter: !state.showCounter,
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);
export default store;
