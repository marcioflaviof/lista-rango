import { renderHook } from "@testing-library/react-hooks";
import { useDishes } from "../useDishes";
import * as redux from "react-redux";
import {
  decrementDishCounter,
  incrementDishCounter,
  setDishCounter,
} from "../../store/actions";
import { cleanup } from "@testing-library/react";

describe("useDishes", () => {
  const spyOnSelector = jest.spyOn(redux, "useSelector");
  const dispatchMock = jest.fn();
  const spyOnDispatch = jest.spyOn(redux, "useDispatch");

  beforeEach(() => {
    cleanup();
  });

  describe("when calls useDishes", () => {
    it("get dishQuantity", () => {
      spyOnSelector.mockReturnValue(10);
      const { result } = renderHook(() => useDishes());

      expect(spyOnSelector).toHaveBeenCalled();
      expect(result.current.dishQuantity).toEqual(10);
    });

    it("get handleValue", () => {
      spyOnDispatch.mockReturnValue(dispatchMock);
      const { result } = renderHook(() => useDishes());

      result.current.handleValue({ target: { value: 5 } });

      expect(dispatchMock).toHaveBeenCalledWith(setDishCounter(5));
    });

    it("get addValue", () => {
      spyOnDispatch.mockReturnValue(dispatchMock);
      const { result } = renderHook(() => useDishes());

      result.current.addValue();

      expect(dispatchMock).toHaveBeenCalledWith(incrementDishCounter());
    });

    it("get subtractValue", () => {
      spyOnDispatch.mockReturnValue(dispatchMock);
      const { result } = renderHook(() => useDishes());

      result.current.subtractValue();

      expect(dispatchMock).toHaveBeenCalledWith(decrementDishCounter());
    });
  });
});
