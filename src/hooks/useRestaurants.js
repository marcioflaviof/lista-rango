import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../config/http";
import {
  setActiveRestaurant as actionSetRestaurant,
  setRestaurants,
} from "../store/actions";
import { selectRestaurants, selectActiveRestaurant } from "../store/selectors";

const useRestaurants = () => {
  const restaurants = useSelector(selectRestaurants);
  const getActiveRestaurant = useSelector(selectActiveRestaurant);

  const dispatch = useDispatch();

  const fetchRestaurantData = useCallback(
    async (id) => {
      const response = await api.get(`/restaurants/${id}`);

      dispatch(actionSetRestaurant({ ...response.data }));
    },
    [dispatch]
  );

  const fetchAllRestaurants = useCallback(
    async (path) => {
      let response = [];

      if (path) {
        response = await api.get(path);
      } else {
        response = await api.get("/restaurants");
      }

      console.log(response.data);

      dispatch(setRestaurants(response.data));
    },
    [dispatch]
  );

  const setActiveRestaurant = (restaurant) => {
    const { name, image, address, hours } = restaurant;
    dispatch(actionSetRestaurant({ name, image, address, hours }));
  };

  return {
    restaurants,
    getActiveRestaurant,
    fetchRestaurantData,
    fetchAllRestaurants,
    setActiveRestaurant,
  };
};

export { useRestaurants };
