import { useState } from "react";
import styled from "styled-components";
import { api } from "../../../config/http";
import { DishCard } from "../DishCard";

const Container = styled.div`
  display: flex;
  margin-bottom: 35px;
  div {
    display: flex;
    background-color: var(--white);
    height: 40px;
    width: 215px;
    justify-content: center;
    align-items: center;
    border-radius: 20px 0 0 20px;
    box-shadow: -1px 2px 4px var(--gray-500);
  }
`;

const Input = styled.input`
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center right;
  background-color: var(--gray-700);
  background-origin: content-box;
  padding-right: 25px;
  padding-left: 20px;
  border: none;
  border-radius: 0 20px 20px 0;
  box-shadow: 1px 2px 4px var(--gray-500);
  width: 585px;
  height: 40px;
  font-size: 1rem;
`;

const DishesContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  max-width: 800px;
`;

const MenuSearchBar = ({ id, setSearching, searching }) => {
  const [dishes, setDishes] = useState([]);

  const handleSearch = async (event) => {
    const { value } = event.target;

    if (value.length === 0) setSearching(false);
    if (value.length > 0) setSearching(true);

    const response = await api.get(
      `/restaurants/${id}/menu?name_like=${value}`
    );

    setDishes(response.data);
  };

  return (
    <>
      <Container>
        <div>
          <p>Buscar no cardápio</p>
        </div>
        <Input img="/images/search.svg" type="search" onChange={handleSearch} />
      </Container>
      {searching && (
        <DishesContainer>
          {dishes.map((dish) => (
            <DishCard key={dish.name} dish={dish} />
          ))}
        </DishesContainer>
      )}
    </>
  );
};

export { MenuSearchBar };
