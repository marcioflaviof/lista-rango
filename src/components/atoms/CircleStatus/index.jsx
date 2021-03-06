import styled from "styled-components";
import { FlexContainer } from "../../../utils/componentStyles";

const Container = styled(FlexContainer)`
  text-align: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.status ? "var(--blue-500)" : "var(--purple-100)"};
  box-shadow: 0px 1px 2px var(--gray-500);
  opacity: 1;
`;

const Status = styled.p`
  font-size: 0.625rem;
  font-weight: bold;
  color: var(--white);
`;

const CircleStatus = ({ status = false }) => {
  return (
    <Container status={status}>
      <Status>{status ? "Aberto agora" : "Fechado"}</Status>
    </Container>
  );
};

export { CircleStatus };
