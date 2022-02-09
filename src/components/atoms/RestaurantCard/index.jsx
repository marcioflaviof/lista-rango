import styled from "styled-components";
import { CircleStatus } from "../CircleStatus";

const Container = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 4px var(--gray-500);
  width: 365px;
  height: 100px;
  margin: ${(props) => props.margin || 0};
  position: relative;
`;

const StatusContainer = styled.div`
  position: absolute;
  top: -25px;
  right: -25px;
`;

const TextContainer = styled.div`
  margin-left: 15px;
  padding-right: 15px;
`;

const Title = styled.h3`
  text-align: left;
  font-size: 1rem;
`;

const Address = styled.p`
  font-size: 0.75rem;
`;

const RestaurantCard = ({ margin }) => {
  return (
    <Container margin={margin}>
      <StatusContainer>
        <CircleStatus status />
      </StatusContainer>
      <img src="/images/restaurant.png" alt="Logo do restaurante" />
      <TextContainer>
        <Title>Nome do Restaurante</Title>
        <Address>Endereço do restaurante</Address>
      </TextContainer>
    </Container>
  );
};

export { RestaurantCard };
