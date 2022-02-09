import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  box-shadow: 0px 2px 4px #00000029;
  opacity: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const Status = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: black;
  font-family: sans-serif;
`;

const CloseButton = () => {
  return (
    <Container>
      <Status>X</Status>
    </Container>
  );
};

export { CloseButton };