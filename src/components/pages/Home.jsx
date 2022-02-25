import { Fragment, useEffect } from "react";
import styled from "styled-components";

import { FlexContainer } from "../../utils/componentStyles";
import { SearchBar } from "../atoms/SearchBar";
import { RestaurantCard } from "../atoms/RestaurantCard";
import { useRestaurants } from "../../hooks/useRestaurants";

const Container = styled(FlexContainer)`
  flex-direction: column;
`;

const Title = styled.h1`
  font-weight: 400;
  margin-top: 30px;
  font-size: 1.5rem;
`;

const RestaurantContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 10px;
  max-width: 1250px;
`;

function Home() {
  const { restaurants, fetchAllRestaurants } = useRestaurants();

  useEffect(() => {
    fetchAllRestaurants();
  }, [fetchAllRestaurants]);

  return (
    <Container>
      <Title>Bem-vindo ao Lista Rango</Title>
      <SearchBar placeholderText="Buscar estabelecimento" marginTop="40px" />
      <RestaurantContainer>
        {restaurants.map((restaurant) => (
          <Fragment key={restaurant.id}>
            <RestaurantCard restaurant={restaurant} />
          </Fragment>
        ))}
      </RestaurantContainer>
    </Container>
  );
}

export { Home };
