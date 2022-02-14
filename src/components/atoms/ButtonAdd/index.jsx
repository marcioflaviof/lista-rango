import { useContext } from "react";
import styled from "styled-components";
import DishQuantityContext from "../../../context/DishQuantityContext";

const Button = styled.button`
  display: flex;
  height: 50px;
  width: 265px;
  background-color: var(--cyan);
  border: none;
  cursor: pointer;
  color: var(--white);
  font-size: 1.25rem;
  border-radius: 4px;
  align-items: center;
  justify-content: space-around;
`;

const ButtonAdd = ({ price }) => {
  const { quantity } = useContext(DishQuantityContext);

  const value = (price * quantity).toFixed(2);

  return (
    <Button>
      Adicionar <span>R$ {value}</span>
    </Button>
  );
};

export { ButtonAdd };
