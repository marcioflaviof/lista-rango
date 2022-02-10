import { useEffect, useState } from "react";
import styled from "styled-components";

import { Nav } from "../atoms/Nav";
import { FlexContainer } from "./utils/componentStyles";
import { SearchBar } from "../atoms/SearchBar";
import { RestaurantCard } from "../atoms/RestaurantCard";
import { api } from "../../config/http";

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
  max-width: 90vw;
`;

function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/restaurants");

      setRestaurants(response.data);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Nav />
      <Title>Bem-vindo ao Lista Rango</Title>
      <SearchBar placeholderText="Buscar estabelecimento" marginTop="40px" />
      <RestaurantContainer>
        {restaurants.map(({ id, name, image, address }) => (
          <>
            <RestaurantCard
              margin="30px 22.5px 0 22.5px"
              id={id}
              name={name}
              image={image}
              address={address}
            />
          </>
        ))}
      </RestaurantContainer>
    </Container>
  );
}

export { Home };
