import styled from "styled-components";
import { DishCard } from "../../atoms/DishCard";

const Container = styled.div`
  margin: 100px;
  max-width: 800px;
`;

const CategoriesContainer = styled.div`
  display: flex;
  max-width: 800px;
  border-bottom: 1px solid black;
  padding-bottom: 10px;
  justify-content: space-between;

  h3 {
    margin-left: 10px;
  }

  p {
    font-family: sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
    margin-right: 20px;
    transform: rotate(90deg);
  }

  img {
    margin-right: 20px;
    transform: rotate(-90deg);
  }
`;

const DishesContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  > * {
    margin-top: 30px;
  }
`;

const Categories = () => {
  return (
    <Container>
      <CategoriesContainer>
        <h3>Almoços</h3>

        <img src="/images/arrow.svg" alt="Clique para mostrar o conteudo" />
      </CategoriesContainer>
      <DishesContainer>
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
      </DishesContainer>
    </Container>
  );
};

export { Categories };
