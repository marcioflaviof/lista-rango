import { useDispatch, useSelector } from "react-redux";
import { selectModal } from "../store/selectors";
import { resetDishCounter, setModal, toggleModal } from "../store/actions";

const useModal = () => {
  const modal = useSelector(selectModal);

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(resetDishCounter());
    dispatch(toggleModal());
  };

  const showDishModal = (name, image, price, isOnSale, sale) => {
    dispatch(
      setModal({
        show: !modal.show,
        name,
        image,
        price: !isOnSale ? price : sale.price,
      })
    );
  };

  return { modal, closeModal, showDishModal };
};

export { useModal };
