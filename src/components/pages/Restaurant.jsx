import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { api } from "../../config/http";

import { MenuSearchBar } from "../atoms/MenuSearchBar";
import { RestaurantHeader } from "../atoms/RestaurantHeader";
import { Categories } from "../molecules/Categories";
import { DishModal } from "../molecules/DishModal";

const Container = styled.div`
  margin: 75px;
`;

const Restaurant = () => {
  const { id } = useParams();
  const [dishes, setDishes] = useState([]);
  const [searching, setSearching] = useState(false);

  const fetchData = useCallback(async () => {
    const response = await api.get(`/restaurants/${id}/menu`);

    setDishes(response.data);
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <DishModal />
      <Container>
        <RestaurantHeader id={id} />
        <MenuSearchBar
          id={id}
          setSearching={setSearching}
          searching={searching}
        />
        {!searching && <Categories dishes={dishes} />}
      </Container>
    </>
  );
};

export { Restaurant };
