import styled from "styled-components";
import { useDishes } from "../../../hooks/useDishes";

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
  const { dishQuantity } = useDishes();

  const value = (price * dishQuantity).toFixed(2);

  return (
    <Button>
      Adicionar <span>R$ {value}</span>
    </Button>
  );
};

export { ButtonAdd };
