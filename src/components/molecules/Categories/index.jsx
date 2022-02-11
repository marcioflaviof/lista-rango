import styled from "styled-components";
import { DishCard } from "../../atoms/DishCard";

const Container = styled.div`
  max-width: 800px;
  margin-top: 50px;
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

const Categories = ({ dishes }) => {
  const groups = dishes.map((dish) => dish.group);

  const uniqueGroups = [...new Set(groups)];

  return (
    <>
      {uniqueGroups &&
        uniqueGroups.map((group) => (
          <Container key={group}>
            <CategoriesContainer>
              <h3>{group}</h3>

              <img src="/images/arrow.svg" alt="Clique para mostrar o conteudo" />
            </CategoriesContainer>
            <DishesContainer>
              {dishes.map((dish) => {
                return (
                  dish.group === group && (
                    <DishCard
                      key={dish.name}
                      name={dish.name}
                      image={dish.image}
                      price={dish.price}
                    />
                  )
                );
              })}
            </DishesContainer>
          </Container>
        ))}
    </>
  );
};

export { Categories };
