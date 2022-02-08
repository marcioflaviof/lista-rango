import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 4px #00000029;
  max-width: 365px;
  max-height: 100px;
`;

const TextContainer = styled.div`
  margin-left: 25px;
`;

const Title = styled.h3`
  text-align: left;
  font-size: 1rem;
`;

const Address = styled.p`
  font-size: 0.75rem;
`;

const RestaurantCard = () => {
  return (
    <Container>
      <img src="/images/restaurant.png" alt="Logo do restaurante" />
      <TextContainer>
        <Title>Nome do Restaurante</Title>
        <Address>Endereço do restaurante</Address>
      </TextContainer>
    </Container>
  );
};

export { RestaurantCard };
