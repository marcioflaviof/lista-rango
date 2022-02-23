import { createContext, useState } from "react";

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

  const closeModal = () => setState({ showModal: !state.showModal });

  return (
    <ModalContext.Provider value={{ state, setState, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export { ModalProvider };
export default ModalContext;
