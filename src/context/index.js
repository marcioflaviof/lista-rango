import { RestaurantProvider } from "./RestaurantContext";

const GlobalContext = ({ children }) => {
  return <RestaurantProvider>{children}</RestaurantProvider>;
};

export default GlobalContext;
