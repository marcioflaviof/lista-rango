import { createContext, useContext, useState } from "react";
import DishQuantityContext from "./DishQuantityContext";

const ModalContext = createContext({
  state: {
    showModal: false,
    name: "",
    description: "",
    image: "",
    price: 9999999,
  },
  setState: () => {},
});

function ModalProvider({ children }) {
  const [state, setState] = useState({
    showModal: false,
    name: "",
    description: "",
    image: "",
    price: 9999999,
  });
  const { setQuantity } = useContext(DishQuantityContext);

  const closeModal = () => {
    setQuantity(0);
    setState({ showModal: !state.showModal });
  };

  return (
    <ModalContext.Provider value={{ state, setState, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export { ModalProvider };
export default ModalContext;
