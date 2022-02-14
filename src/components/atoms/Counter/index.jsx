import { useContext } from "react";
import styled from "styled-components";
import DishQuantityContext from "../../../context/DishQuantityContext";

const Container = styled.div`
  display: flex;
  width: 125px;
  height: 50px;
  border: 1px solid var(--gray-200);
  border-radius: 4px;
`;

const Button = styled.button`
  display: flex;
  margin: none;
  width: 50px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--cyan);
  font-size: 1.25rem;
`;

const Input = styled.input`
  width: 25px;
  border: none;
  color: var(--cyan);
  font-size: 1.25rem;
  text-align: center;
`;

const Counter = () => {
  const { quantity, setQuantity } = useContext(DishQuantityContext);

  const handleValue = (event) => {
    const { value } = event.target;

    setQuantity(value);
  };

  const addValue = () => {
    setQuantity(quantity + 1);
  };

  const subtractValue = () => {
    if (quantity <= 0) return;
    setQuantity(quantity - 1);
  };

  return (
    <Container>
      <Button onClick={subtractValue}>-</Button>
      <Input type="text" onChange={handleValue} value={quantity} />
      <Button onClick={addValue}>+</Button>
    </Container>
  );
};

export { Counter };
