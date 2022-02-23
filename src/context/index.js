import { DishQuantityProvider } from "./DishQuantityContext";
import { ModalProvider } from "./ModalContext";
import { RestaurantProvider } from "./RestaurantContext";

const GlobalContext = ({ children }) => {
  return (
    <RestaurantProvider>
      <DishQuantityProvider>
        <ModalProvider>{children}</ModalProvider>
      </DishQuantityProvider>
    </RestaurantProvider>
  );
};

export default GlobalContext;
