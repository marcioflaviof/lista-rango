import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 125px;
  height: 50px;
  border: 1px solid var(--gray-200);
  border-radius: 4px;
`;

const Button = styled.div`
  display: flex;
  margin: none;
  cursor: pointer;
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
`;

const Counter = () => {
  return (
    <Container>
      <Button>-</Button>
      <Input type="text" />
      <Button>+</Button>
    </Container>
  );
};

export { Counter };
