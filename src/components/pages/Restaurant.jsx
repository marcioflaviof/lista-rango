import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { api } from "../../config/http";

import { MenuSearchBar } from "../atoms/MenuSearchBar";
import { RestaurantHeader } from "../atoms/RestaurantHeader";
import { Categories } from "../molecules/Categories";

const Container = styled.div`
  margin: 75px;
`;

const Restaurant = () => {
  const { id } = useParams();
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(`/restaurants/${id}/menu`);

      setDishes(response.data);
    };

    fetchData();
  }, [id]);
  return (
    <Container>
      <RestaurantHeader styles={{ "margin-bottom": "25px" }} />
      <MenuSearchBar styles={{ "margin-bottom": "35px" }} />
      <Categories dishes={dishes} />
    </Container>
  );
};

export { Restaurant };
