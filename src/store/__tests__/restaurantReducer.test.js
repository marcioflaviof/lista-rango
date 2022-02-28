import { setActiveRestaurant, setRestaurants } from "../actions";
import { restaurantReducer } from "../restaurantReducer";

describe("restaurantReducer", () => {
  describe("when don't pass state or actions", () => {
    it("return initial state", () => {
      expect(restaurantReducer(undefined, {})).toMatchObject({
        restaurants: [],
        activeRestaurant: {},
      });
    });
  });

  describe("when set restaurants", () => {
    it("set the restaurants", () => {
      expect(
        restaurantReducer(
          undefined,
          setRestaurants([
            {
              id: 1,
              name: "Test one",
              address: "test one",
              hours: [
                {
                  from: "09:00",
                  to: "18:00",
                  days: [2],
                },
                {
                  from: "11:00",
                  to: "20:00",
                  days: [7, 1],
                },
              ],
              image: "image",
            },

            {
              id: 2,
              name: "Test two",
              address: "test two",
              image: "image",
            },
          ])
        )
      ).toMatchObject({
        restaurants: [
          {
            id: 1,
            name: "Test one",
            address: "test one",
            hours: [
              {
                from: "09:00",
                to: "18:00",
                days: [2],
              },
              {
                from: "11:00",
                to: "20:00",
                days: [7, 1],
              },
            ],
            image: "image",
          },

          {
            id: 2,
            name: "Test two",
            address: "test two",
            image: "image",
          },
        ],
        activeRestaurant: {},
      });
    });
  });

  describe("when we set active restaurant", () => {
    it("new active restaurant is setted", () => {
      expect(
        restaurantReducer(
          undefined,
          setActiveRestaurant({
            id: 2,
            name: "Test two",
            address: "test two",
            image: "image",
          })
        )
      ).toMatchObject({
        restaurants: [],
        activeRestaurant: {
          id: 2,
          name: "Test two",
          address: "test two",
          image: "image",
        },
      });
    });
  });
});
