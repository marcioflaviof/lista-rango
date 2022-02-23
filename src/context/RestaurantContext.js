import { createContext, useState } from "react";

const RestaurantContext = createContext({
  restaurant: { name: "", image: "", address: "", hours: [], restaurants: [] },
  setRestaurant: () => {},
});

function RestaurantProvider({ children }) {
  const [restaurant, setRestaurant] = useState({
    name: "",
    image: "",
    address: "",
    hours: [],
    restaurants: [],
  });

  return (
    <RestaurantContext.Provider value={{ restaurant, setRestaurant }}>
      {children}
    </RestaurantContext.Provider>
  );
}

export { RestaurantProvider };
export default RestaurantContext;
