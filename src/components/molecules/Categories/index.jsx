import { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import { DishCard } from "../../atoms/DishCard";

const DishesContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  > * {
    margin-top: 30px;
  }
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
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin-top: 50px;

  ${CategoriesContainer} {
    cursor: pointer;
    & > img {
      transform: ${({ open }) => (!open ? "rotate(-90deg)" : "none")};
      transition: transform 0.3s linear;
    }
  }
`;

const Categories = ({ dishes }) => {
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const activeGroups = useMemo(() => {
    let currentActiveGroups = {};

    dishes.forEach((dish) => {
      if (!currentActiveGroups[dish.group])
        currentActiveGroups[dish.group] = { active: false, dishes: [dish] };
      else {
        currentActiveGroups[dish.group].dishes = [
          ...currentActiveGroups[dish.group].dishes,
          dish,
        ];
      }
    });

    return currentActiveGroups;
  }, [dishes]);

  function changeGroupActivity(group) {
    activeGroups[group] = {
      ...activeGroups[group],
      active: !activeGroups[group].active,
    };
    forceUpdate();
  }

  return (
    <>
      {Object.keys(activeGroups) &&
        Object.keys(activeGroups).map((group) => (
          <Container key={group} open={activeGroups[group].active}>
            <CategoriesContainer onClick={() => changeGroupActivity(group)}>
              <h3>{group}</h3>

              <img
                src="/images/arrow.svg"
                alt="Clique para mostrar o conteudo"
              />
            </CategoriesContainer>
            <DishesContainer>
              {activeGroups[group].active &&
                dishes.map((dish) => {
                  return (
                    dish.group === group && (
                      <DishCard key={dish.name} dish={dish} />
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
