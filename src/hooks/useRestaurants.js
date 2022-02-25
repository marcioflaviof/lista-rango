import { useSelector } from "react-redux";
import { selectRestaurants, selectActiveRestaurant } from "../store/selectors";

const useRestaurants = () => {
  const restaurants = useSelector(selectRestaurants);
  const activeRestaurant = useSelector(selectActiveRestaurant);

  return { restaurants, activeRestaurant };
};

export { useRestaurants };
