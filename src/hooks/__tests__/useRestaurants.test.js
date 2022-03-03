import { cleanup } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import nock from "nock";
import { useRestaurants } from "../useRestaurants";
import * as redux from "react-redux";
import {
  selectActiveRestaurant,
  selectRestaurants,
} from "../../store/selectors";
import { setActiveRestaurant, setRestaurants } from "../../store/actions";

describe("useRestaurants", () => {
  const spyOnSelector = jest.spyOn(redux, "useSelector");
  const dispatchMock = jest.fn();
  const spyOnDispatch = jest.spyOn(redux, "useDispatch");

  const restaurantMock = nock(process.env.REACT_APP_BASE_URL);

  beforeEach(() => {
    restaurantMock
      .get("/restaurants/1")
      .reply(200, { restaurant: 1 }, { "Access-Control-Allow-Origin": "*" });

    restaurantMock
      .get("/restaurants")
      .reply(
        200,
        { restaurants: [{ restaurant: 1 }, { restaurant: 2 }] },
        { "Access-Control-Allow-Origin": "*" }
      );
  });

  afterEach(() => {
    cleanup();
  });

  describe("when calls useRestaurants", () => {
    it("get restaurants", () => {
      renderHook(() => useRestaurants());

      expect(spyOnSelector).toHaveBeenCalledWith(selectRestaurants);
    });

    it("get activeRestaurant", () => {
      renderHook(() => useRestaurants());

      expect(spyOnSelector).toHaveBeenCalledWith(selectActiveRestaurant);
    });

    it("fetchRestaurantData", async () => {
      spyOnDispatch.mockReturnValue(dispatchMock);
      const { result } = renderHook(() => useRestaurants());

      await result.current.fetchRestaurantData(1);

      expect(dispatchMock).toHaveBeenCalledWith(
        setActiveRestaurant({ restaurant: 1 })
      );
    });

    it("fetchAllRestaurants", async () => {
      spyOnDispatch.mockReturnValue(dispatchMock);
      const { result } = renderHook(() => useRestaurants());

      await result.current.fetchAllRestaurants();

      expect(dispatchMock).toHaveBeenCalledWith(
        setRestaurants({
          restaurants: [{ restaurant: 1 }, { restaurant: 2 }],
        })
      );
    });

    it("setActiveRestaurant", () => {
      spyOnDispatch.mockReturnValue(dispatchMock);
      const { result } = renderHook(() => useRestaurants());
      const restaurant = {
        name: "test",
        image: "test image",
        address: "test address",
        hours: "10",
      };

      result.current.setActiveRestaurant(restaurant);

      expect(dispatchMock).toHaveBeenCalledWith(
        setActiveRestaurant({
          name: "test",
          image: "test image",
          address: "test address",
          hours: "10",
        })
      );
    });
  });
});
