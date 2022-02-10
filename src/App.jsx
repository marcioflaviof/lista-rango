import styled from "styled-components";
import { Nav } from "./atoms/Nav";
import { SearchBar } from "./atoms/SearchBar";
import { RestaurantCard } from "./atoms/RestaurantCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  max-width: 1265px;
`;

function App() {
  return (
    <Container>
      <Nav />
      <Title>Bem-vindo ao Lista Rango</Title>
      <SearchBar placeholderText="Buscar estabelecimento" marginTop="40px" />
      <RestaurantContainer>
        <RestaurantCard margin="30px 45px 0 0" />
        <RestaurantCard margin="30px 45px 0 0" />
        <RestaurantCard margin="30px 45px 0 0" />
        <RestaurantCard margin="30px 45px 0 0" />
        <RestaurantCard margin="30px 45px 0 0" />
        <RestaurantCard margin="30px 45px 0 0" />
        <RestaurantCard margin="30px 45px 0 0" />
        <RestaurantCard margin="30px 45px 0 0" />
        <RestaurantCard margin="30px 45px 0 0" />
        <RestaurantCard margin="30px 45px 0 0" />
        <RestaurantCard margin="30px 45px 0 0" />
      </RestaurantContainer>
    </Container>
  );
}

export default App;
