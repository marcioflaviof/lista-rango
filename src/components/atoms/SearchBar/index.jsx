import { useContext } from "react";
import styled from "styled-components";
import { api } from "../../../config/http";
import RestaurantContext from "../../../context/RestaurantContext";

const Input = styled.input`
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center right;
  background-color: var(--gray-100);
  background-origin: content-box;
  padding-right: 25px;
  padding-left: 20px;
  border: none;
  border-radius: 25px;
  box-shadow: 0px 2px 4px var(--gray-500);
  width: 840px;
  height: 40px;
  font-size: 1rem;
  margin-top: ${(props) => props.marginTop || 0};
`;

const SearchBar = ({ placeholderText, marginTop }) => {
  const { restaurant, setRestaurant } = useContext(RestaurantContext);

  const handleSearch = async (event) => {
    const { value } = event.target;

    if (value.length >= 3) {
      const response = await api.get(`/restaurants?name_like=${value}`);

      setRestaurant({ ...restaurant, restaurants: response.data });
    } else {
      const response = await api.get("/restaurants");

      setRestaurant({ ...restaurant, restaurants: response.data });
    }
  };

  return (
    <Input
      img="/images/search.svg"
      type="search"
      placeholder={placeholderText}
      marginTop={marginTop}
      onChange={handleSearch}
    />
  );
};

export { SearchBar };
