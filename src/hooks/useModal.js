import { useSelector } from "react-redux";
import { selectModal } from "../store/selectors";

const useModal = () => {
  const modal = useSelector(selectModal);

  return { modal };
};

export { useModal };
