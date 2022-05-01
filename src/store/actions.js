// DISHES
export const INCREMENT_DISH_COUNTER = "INCREMENT";
export const DECREMENT_DISH_COUNTER = "DECREMENT";
export const SET_DISH_COUNTER = "SET";
export const RESET_DISH_COUNTER = "RESET";

export const incrementDishCounter = () => ({ type: INCREMENT_DISH_COUNTER });
export const decrementDishCounter = () => ({ type: DECREMENT_DISH_COUNTER });
export const setDishCounter = (value) => ({
  type: SET_DISH_COUNTER,
  payload: value,
});
export const resetDishCounter = () => ({ type: RESET_DISH_COUNTER });

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
