import {
  setDishCounter,
  incrementDishCounter,
  decrementDishCounter,
} from "../../../store/actions";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useDishes } from "../../../hooks/useDishes";

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
  const { dishQuantity } = useDishes();
  const dispatch = useDispatch();

  const handleValue = (event) => {
    const { value } = event.target;

    dispatch(setDishCounter(value));
  };

  const addValue = () => {
    dispatch(incrementDishCounter());
  };

  const subtractValue = () => {
    if (dishQuantity <= 0) return;
    dispatch(decrementDishCounter());
  };

  return (
    <Container>
      <Button onClick={subtractValue}>-</Button>
      <Input type="text" onChange={handleValue} value={dishQuantity} />
      <Button onClick={addValue}>+</Button>
    </Container>
  );
};

export { Counter };
