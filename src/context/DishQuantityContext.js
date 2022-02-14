import { createContext, useState } from "react";

const DishQuantityContext = createContext({
  quantity: 0,
  setQuantity: () => {},
});

function DishQuantityProvider({ children }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <DishQuantityContext.Provider value={{ quantity, setQuantity }}>
      {children}
    </DishQuantityContext.Provider>
  );
}

export { DishQuantityProvider };
export default DishQuantityContext;
