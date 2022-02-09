import styled from "styled-components";

const Container = styled.div`
  display: flex;
  div {
    display: flex;
    background-color: white;
    height: 40px;
    width: 215px;
    justify-content: center;
    align-items: center;
    border-radius: 20px 0 0 20px;
    box-shadow: 0px 2px 4px #00000029;
  }
`;

const Input = styled.input`
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center right;
  background-color: #0000001a;
  background-origin: content-box;
  padding-right: 25px;
  padding-left: 20px;
  border: none;
  border-radius: 0 20px 20px 0;
  box-shadow: 0px 2px 4px #00000029;
  width: 625px;
  height: 40px;
  font-size: 1rem;
`;

const MenuSearchBar = () => {
  return (
    <Container>
      <div>
        <p>Buscar no cardápio</p>
      </div>
      <Input img="/images/search.svg" type="search" />
    </Container>
  );
};

export { MenuSearchBar };
