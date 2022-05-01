import { setModal, toggleModal } from "../actions";
import { modalReducer } from "../modalReducer";

describe("modalReducer", () => {
  describe("when don't pass state or actions", () => {
    it("return initial state", () => {
      expect(modalReducer(undefined, {})).toMatchObject({
        show: false,
        name: "",
        description: "",
        image: "",
        price: 9999999,
      });
    });
  });

  describe("when toggle modal", () => {
    it("set show state to equals !show", () => {
      expect(modalReducer(undefined, toggleModal())).toMatchObject({
        show: true,
        name: "",
        description: "",
        image: "",
        price: 9999999,
      });
    });
  });

  describe("when set modal", () => {
    it("set modal state", () => {
      expect(
        modalReducer(
          {
            show: false,
            name: "",
            description: "",
            image: "",
            price: 9999999,
          },
          setModal({
            name: "Test modal",
            description: "testing",
            image: "some image",
            price: 10,
          })
        )
      ).toMatchObject({
        show: false,
        name: "Test modal",
        description: "testing",
        image: "some image",
        price: 10,
      });
    });
  });
});
