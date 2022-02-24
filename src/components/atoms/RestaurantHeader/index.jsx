import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { api } from "../../../config/http";
import { setActiveRestaurant } from "../../../store/actions";

const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 695px;
  max-height: 145px;
  margin-bottom: 25px;
  color: var(--gray-300);
`;

const DetailsContainer = styled.div`
  display: inline-block;
  flex-direction: column;
  max-width: 695px;
  max-height: 145px;
  padding-left: 10px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 5px;
`;

const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 5px;
`;

const TimeRange = styled.p`
  font-size: 0.75rem;
  & span {
    color: var(--black);
    font-weight: bold;
  }
`;

const FitImage = styled.div`
  max-height: 165px;
  max-width: 165px;

  & img {
    max-height: 100%;
    max-width: 100%;
  }
`;

const RestaurantHeader = ({ id }) => {
  const restaurant = useSelector((state) => state.restaurant.activeRestaurant);
  const dispatch = useDispatch();

  const { name, image, address, hours } = restaurant;

  const fetchData = useCallback(async () => {
    const response = await api.get(`/restaurants/${id}`);

    dispatch(setActiveRestaurant({ ...response.data }));
  }, [dispatch, id]);

  useEffect(() => {
    if (name) return;

    fetchData();
  }, [name, fetchData]);

  return (
    <Container>
      <FitImage>
        <img src={image || "/images/restaurant-big.png"} alt="Icone do restaurante" />
      </FitImage>

      <DetailsContainer>
        <Title>{name}</Title>
        <Text>{address}</Text>
        {Boolean(hours && hours.length) ? (
          <>
            <TimeRange>
              Segunda a Sexta:{" "}
              <span>
                {hours[0].from} as {hours[0].to}
              </span>
            </TimeRange>
            <TimeRange>
              Sabados:{" "}
              <span>
                {hours[1].from} as {hours[1].to}
              </span>
            </TimeRange>
            <TimeRange>
              Domingos e Feriados:{" "}
              <span>
                {hours[1].from} as {hours[1].to}
              </span>
            </TimeRange>
          </>
        ) : (
          <p>Em breve</p>
        )}
      </DetailsContainer>
    </Container>
  );
};

export { RestaurantHeader };
