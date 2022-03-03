import { renderHook } from "@testing-library/react-hooks";
import { useModal } from "../useModal";
import * as redux from "react-redux";
import { cleanup } from "@testing-library/react";
import { resetDishCounter, setModal, toggleModal } from "../../store/actions";

describe("useDishes", () => {
  const spyOnSelector = jest.spyOn(redux, "useSelector");
  const dispatchMock = jest.fn();
  const spyOnDispatch = jest.spyOn(redux, "useDispatch");

  beforeEach(() => {
    cleanup();
  });

  describe("when calls useModal", () => {
    it("get modal", () => {
      spyOnSelector.mockReturnValue("myModal");
      const { result } = renderHook(() => useModal());

      expect(spyOnSelector).toHaveBeenCalled();
      expect(result.current.modal).toBe("myModal");
    });

    it("get closeModal", () => {
      spyOnDispatch.mockReturnValue(dispatchMock);
      const { result } = renderHook(() => useModal());

      result.current.closeModal();

      expect(dispatchMock).toHaveBeenCalledWith(resetDishCounter());
      expect(dispatchMock).toHaveBeenCalledWith(toggleModal());
    });

    it("get showDishModal", () => {
      spyOnSelector.mockReturnValue({ show: false });
      spyOnDispatch.mockReturnValue(dispatchMock);
      const { result } = renderHook(() => useModal());

      result.current.showDishModal("test", "testImage", 1.0, false, "test");

      expect(dispatchMock).toHaveBeenCalledWith(
        setModal({ image: "testImage", name: "test", price: 1, show: true })
      );
    });
  });
});
