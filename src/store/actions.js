// DISHES
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const SET = "SET";
export const RESET = "RESET";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const set = (value) => ({ type: SET, payload: value });
export const reset = () => ({ type: RESET });

// MODAL
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const SET_MODAL = "SET_MODAL";

export const toggleModal = () => ({ type: TOGGLE_MODAL });

export const setModal = (modalInfo) => ({
  type: SET_MODAL,
  payload: modalInfo,
});

// RESTAURANT

export const SET_RESTAURANTS = "SET_RESTAURANTS";
export const SET_ACTIVE_RESTAURANT = "SET_ACTIVE_RESTAURANT";

export const setRestaurants = (restaurants) => ({
  type: SET_RESTAURANTS,
  payload: restaurants,
});

export const setActiveRestaurant = (restaurant) => ({
  type: SET_ACTIVE_RESTAURANT,
  payload: restaurant,
});
