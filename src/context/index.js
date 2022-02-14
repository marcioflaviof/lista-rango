import { ModalProvider } from "./ModalContext";
import { RestaurantProvider } from "./RestaurantContext";

const GlobalContext = ({ children }) => {
  return (
    <RestaurantProvider>
      <ModalProvider>{children}</ModalProvider>
    </RestaurantProvider>
  );
};

export default GlobalContext;
