import { set, increment, decrement } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

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
  const quantity = useSelector((state) => state.dishes.quantity);
  const dispatch = useDispatch();

  const handleValue = (event) => {
    const { value } = event.target;

    dispatch(set(value));
  };

  const addValue = () => {
    dispatch(increment());
  };

  const subtractValue = () => {
    if (quantity <= 0) return;
    dispatch(decrement());
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
