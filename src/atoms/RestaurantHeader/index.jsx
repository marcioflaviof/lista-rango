import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 695px;
  max-height: 145px;
  color: #404040;
`;

const DetailsContainer = styled.div`
  display: inline-block;
  flex-direction: column;
  max-width: 695px;
  max-height: 145px;
  padding: 10px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0px;
`;

const Text = styled.p`
  font-size: 1rem;
  margin: 10px 0;
`;

const TimeRange = styled.p`
  font-size: 0.75rem;
  margin: 0px;
  & span {
    color: black;
    font-weight: bold;
  }
`;

const FitImage = styled.div`
  max-height: 145px;
  max-width: 145px;

  & img {
    max-height: 100%;
    max-width: 100%;
  }
`;

const RestaurantHeader = () => {
  return (
    <Container>
      <FitImage>
        <img src="/images/restaurant-big.png" alt="Icone do restaurante" />
      </FitImage>

      <DetailsContainer>
        <Title>Nome Do Restaurante</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt et similique modi!
          Necessitatibus similique
        </Text>
        <TimeRange>
          Segunda a Sexta: <span>11:30 as 15:00</span>
        </TimeRange>
        <TimeRange>
          Sabados: <span>11:30 as 15:00</span>
        </TimeRange>
        <TimeRange>
          Domingos e Feriados: <span>11:30 as 15:00</span>
        </TimeRange>
      </DetailsContainer>
    </Container>
  );
};

export { RestaurantHeader };
