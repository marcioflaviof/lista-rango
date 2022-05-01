import { useDispatch, useSelector } from "react-redux";
import {
  decrementDishCounter,
  incrementDishCounter,
  setDishCounter,
} from "../store/actions";
import { selectDishesQuantity } from "../store/selectors";

const useDishes = () => {
  const dishQuantity = useSelector(selectDishesQuantity);

  const dispatch = useDispatch();

  const handleValue = (event) => {
    const { value } = event.target;

    dispatch(setDishCounter(value));
  };

  const addValue = () => {
    dispatch(incrementDishCounter());
  };

  const subtractValue = () => {
    if (dishQuantity <= 0) return;
    dispatch(decrementDishCounter());
  };

  return { dishQuantity, handleValue, addValue, subtractValue };
};

export { useDishes };
