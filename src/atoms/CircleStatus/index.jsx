import styled from "styled-components";

const Container = styled.div`
  display: flex;
  text-align: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #2b0d61;
  box-shadow: 0px 1px 2px #00000029;
  opacity: 1;
  align-items: center;
  justify-content: center;
`;

const Status = styled.p`
  font-size: 0.625rem;
  font-weight: bold;
  color: white;
`;

const CircleStatus = ({ status }) => {
  return (
    <Container>
      <Status>{status ? "Aberto agora" : "Fechado"}</Status>
    </Container>
  );
};

export { CircleStatus };
