import { createStore } from "redux";

const initialState = {
  listOfPlaces: [],
};

const placesReducer = (state = initialState, action) => {
  if (action.type === 'ADD_PLACES') {
    return {
      ...state,
      listOfPlaces: [...state.listOfPlaces, action.payload]
    }
  }
  return state;
};

const store = createStore(placesReducer);
export default store;
