import { useSelector } from "react-redux";
import { selectDishesQuantity } from "../store/selectors";

const useDishes = () => {
  const dishQuantity = useSelector(selectDishesQuantity);

  return { dishQuantity };
};

export { useDishes };
