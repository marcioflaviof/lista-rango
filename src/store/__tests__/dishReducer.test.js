import {
  decrementDishCounter,
  incrementDishCounter,
  resetDishCounter,
  setDishCounter,
} from "../actions";
import { dishReducer } from "../dishReducer";

describe("dishReducer", () => {
  describe("when don't pass state or actions", () => {
    it("return initial state", () => {
      expect(dishReducer(undefined, {})).toMatchObject({
        quantity: 0,
      });
    });
  });

  describe("when pass increment action", () => {
    it("increments state quantity by 1", () => {
      expect(dishReducer(undefined, incrementDishCounter())).toMatchObject({
        quantity: 1,
      });
    });
  });

  describe("when pass decrement action", () => {
    it("decrements state quantity by 1", () => {
      expect(
        dishReducer({ quantity: 3 }, decrementDishCounter())
      ).toMatchObject({
        quantity: 2,
      });
    });
  });

  describe("when pass set action", () => {
    it("set quantity to any integer number", () => {
      expect(dishReducer({ quantity: 0 }, setDishCounter(4))).toMatchObject({
        quantity: 4,
      });
    });
  });

  describe("when pass reset action", () => {
    it("set quantity to 0", () => {
      expect(dishReducer({ quantity: 30 }, resetDishCounter())).toMatchObject({
        quantity: 0,
      });
    });
  });
});
