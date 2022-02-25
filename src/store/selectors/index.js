export const selectDishesQuantity = (state) => state.dishes.quantity;

export const selectRestaurants = (state) => state.restaurant.restaurants;

export const selectActiveRestaurant = (state) =>
  state.restaurant.activeRestaurant;

export const selectModal = (state) => state.modal;
