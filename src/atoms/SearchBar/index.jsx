import styled from "styled-components";

const Input = styled.input`
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center right;
  background-color: #fbfbfb;
  background-origin: content-box;
  padding-right: 25px;
  padding-left: 20px;
  border: none;
  border-radius: 25px;
  box-shadow: 0px 2px 4px #00000029;
  width: 840px;
  height: 40px;
  font-size: 1rem;
  margin-top: ${(props) => props.marginTop || 0};
`;

const SearchBar = ({ placeholderText, marginTop }) => {
  return (
    <Input
      img="/images/search.svg"
      type="search"
      placeholder={placeholderText}
      marginTop={marginTop}
    />
  );
};

export { SearchBar };
