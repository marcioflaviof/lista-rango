import { combineReducers, createStore } from "redux";
import { dishReducer } from "./dishReducer";
import { modalReducer } from "./modalReducer";
import { restaurantReducer } from "./restaurantReducer";

const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const rootReducer = combineReducers({
  dishes: dishReducer,
  modal: modalReducer,
  restaurant: restaurantReducer,
});

export const store = createStore(rootReducer, enhancer);
