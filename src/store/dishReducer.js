import {
  INCREMENT_DISH_COUNTER,
  DECREMENT_DISH_COUNTER,
  SET_DISH_COUNTER,
  RESET_DISH_COUNTER,
} from "./actions";

const initialState = { quantity: 0 };

export const dishReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_DISH_COUNTER:
      return { quantity: state.quantity + 1 };

    case DECREMENT_DISH_COUNTER:
      return { quantity: state.quantity - 1 };

    case SET_DISH_COUNTER:
      return { quantity: action.payload && parseInt(action.payload, 10) };

    case RESET_DISH_COUNTER:
      return { quantity: 0 };

    default:
      return state;
  }
};
