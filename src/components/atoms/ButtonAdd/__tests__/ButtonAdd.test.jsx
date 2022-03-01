import { render, screen } from "@testing-library/react";
import { ButtonAdd } from "../index";

jest.mock("../../../../hooks/useDishes", () => ({
  useDishes: () => ({
    dishQuantity: 2,
  }),
}));

describe("ButtonAdd", () => {
  describe("when pass a price", () => {
    it("shows price * quantity", () => {
      render(<ButtonAdd price={10.0} />);

      expect(
        screen.getByRole("button", { name: /adicionar r\$ 20\.00/i })
      ).toBeInTheDocument();
    });
  });

  describe("when pass a price in number string", () => {
    it("works as a normal number prince", () => {
      render(<ButtonAdd price={"20.0"} />);

      expect(
        screen.getByRole("button", { name: /adicionar r\$ 40\.00/i })
      ).toBeInTheDocument();
    });
  });
});
