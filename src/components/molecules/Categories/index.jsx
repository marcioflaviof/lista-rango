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

  ${DishesContainer} {
    overflow: hidden;
    transition: all 0.6s ease;
    ${({ open }) => `
      opacity: ${open ? "1" : "0"};
      max-height: ${open ? "100vh" : "0px"};
      padding-bottom: ${open ? "24px" : "0"};
    `}
  }
`;

const Categories = ({ dishes }) => {
  const [activeGroups, setActiveGroups] = useState([]);

  const groups = useMemo(
    () => [...new Set(dishes.map((dish) => dish.group))],
    [dishes]
  );

  const handleActiveGroup = useCallback(
    (group) =>
      setActiveGroups((groupsNames) => {
        const hasGroupName = groupsNames.some(
          (groupName) => groupName === group
        );

        if (hasGroupName) {
          return groupsNames.filter((groupName) => groupName !== group);
        }

        return [...groupsNames, group];
      }),
    []
  );

  return (
    <>
      {groups.map((group) => {
        const isActive = activeGroups.some(
          (activeGroup) => activeGroup === group
        );

        return (
          <Container key={group} open={isActive}>
            <CategoriesContainer onClick={() => handleActiveGroup(group)}>
              <h3>{group}</h3>

              <img
                src="/images/arrow.svg"
                alt="Clique para mostrar o conteudo"
              />
            </CategoriesContainer>
            <DishesContainer>
              {dishes.map(
                (dish) =>
                  dish.group === group && (
                    <DishCard key={dish.name} dish={dish} />
                  )
              )}
            </DishesContainer>
          </Container>
        );
      })}
    </>
  );
};

export { Categories };
