import { render, screen } from "@testing-library/react";
import { CircleStatus } from "../index";

describe("CircleStatus", () => {
  describe("when pass true", () => {
    it("shows the message 'Aberto agora'", () => {
      render(<CircleStatus status={true} />);

      expect(screen.getByText(/aberto agora/i)).toBeInTheDocument();
    });
  });

  describe("when pass false or don't pass anything", () => {
    it("shows the message 'Fechado'", () => {
      render(<CircleStatus />);

      expect(screen.getByText(/fechado/i)).toBeInTheDocument();
    });
  });
});
