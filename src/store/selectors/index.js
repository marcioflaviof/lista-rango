import { createSelector } from "reselect";

const selectRestaurant = (state) => state.restaurant;

export const selectRestaurants = createSelector(
  selectRestaurant,
  (restaurant) => restaurant.restaurants
);

export const selectActiveRestaurant = createSelector(
  selectRestaurant,
  (restaurant) => restaurant.activeRestaurant
);

export const selectDishesQuantity = (state) => state.dishes.quantity;

export const selectModal = (state) => state.modal;
