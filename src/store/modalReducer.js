import { TOGGLE_MODAL, SET_MODAL } from "./actions";

const initialState = {
  show: false,
  name: "",
  description: "",
  image: "",
  price: 9999999,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...state, show: !state.show };

    case SET_MODAL:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
