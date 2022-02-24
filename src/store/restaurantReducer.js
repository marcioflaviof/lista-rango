import { SET_ACTIVE_RESTAURANT, SET_RESTAURANTS } from "./actions";

const initialState = {
  restaurants: [],
  activeRestaurant: {},
};

export const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESTAURANTS:
      return { ...state, restaurants: action.payload };

    case SET_ACTIVE_RESTAURANT:
      return { ...state, activeRestaurant: action.payload };

    default:
      return state;
  }
};
