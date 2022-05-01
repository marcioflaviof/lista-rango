import styled from "styled-components";
import { useRestaurants } from "../../../hooks/useRestaurants";

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
  const { fetchAllRestaurants } = useRestaurants();

  const handleSearch = async (event) => {
    const { value } = event.target;

    if (value.length >= 3) {
      fetchAllRestaurants(`/restaurants?name_like=${value}`);
    } else {
      fetchAllRestaurants();
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
