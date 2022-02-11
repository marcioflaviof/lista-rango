import { createContext, useState } from "react";

const RestaurantContext = createContext({
  state: { name: "", image: "", address: "", hours: [], restaurants: [] },
  setState: () => {},
});

function RestaurantProvider({ children }) {
  const [state, setState] = useState({
    name: "",
    image: "",
    address: "",
    hours: [],
    restaurants: [],
  });

  return (
    <RestaurantContext.Provider value={{ state, setState }}>{children}</RestaurantContext.Provider>
  );
}

export { RestaurantProvider };
export default RestaurantContext;
