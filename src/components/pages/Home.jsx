import { Fragment, useContext, useEffect } from "react";
import styled from "styled-components";

import { FlexContainer } from "./utils/componentStyles";
import { SearchBar } from "../atoms/SearchBar";
import { RestaurantCard } from "../atoms/RestaurantCard";
import { api } from "../../config/http";
import RestaurantContext from "../../context/RestaurantContext";

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
  const { state, setState } = useContext(RestaurantContext);

  const { restaurants } = state;

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/restaurants");

      setState({ restaurants: response.data });
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Title>Bem-vindo ao Lista Rango</Title>
      <SearchBar placeholderText="Buscar estabelecimento" marginTop="40px" />
      <RestaurantContainer>
        {restaurants.map((restaurant) => (
          <Fragment key={restaurant.id}>
            <RestaurantCard margin="30px 22.5px 0 22.5px" restaurant={restaurant} />
          </Fragment>
        ))}
      </RestaurantContainer>
    </Container>
  );
}

export { Home };
