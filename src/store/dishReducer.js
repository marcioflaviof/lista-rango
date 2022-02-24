import { INCREMENT, DECREMENT, SET, RESET } from "./actions";

const initialState = { quantity: 0 };

export const dishReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { quantity: state.quantity + 1 };

    case DECREMENT:
      return { quantity: state.quantity - 1 };

    case SET:
      return { quantity: action.payload && parseInt(action.payload, 10) };

    case RESET:
      return { quantity: 0 };

    default:
      return state;
  }
};
