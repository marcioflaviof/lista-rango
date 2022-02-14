import { createContext, useState } from "react";

const ModalContext = createContext({
  state: { showModal: false, name: "", description: "", image: "", price: 9999999 },
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

  return <ModalContext.Provider value={{ state, setState }}>{children}</ModalContext.Provider>;
}

export { ModalProvider };
export default ModalContext;
