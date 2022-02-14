import { useContext } from "react";
import styled from "styled-components";
import ModalContext from "../../../context/ModalContext";

const Container = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  width: 385px;
  height: 115px;
  box-shadow: 0px 4px 8px var(--gray-500);
`;

const ImageContainer = styled.div`
  width: 115px;
  height: 115px;

  margin-right: 10px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

const Subtitle = styled.h2`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 5px;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-flow: wrap row;
`;

const Price = styled.p`
  font-size: 1rem;
  color: var(--cyan);
  margin-right: 5px;
`;

const OldPrice = styled.p`
  font-size: 0.75rem;
  margin-top: 3px;
  color: var(--gray-250);
  text-decoration: line-through;
`;

const DishCard = ({ name, image, price }) => {
  const { state, setState } = useContext(ModalContext);

  const showDishModal = () => {
    setState({ showModal: !state.showModal, name, image, price });
  };

  return (
    <>
      <Container onClick={showDishModal}>
        <ImageContainer>
          <img src={image || "/images/dish.png"} alt="Imagem do prato" />
        </ImageContainer>
        <div>
          <div>
            <Subtitle>{name}</Subtitle>
          </div>
          {price ? (
            <PriceContainer>
              <Price>R$ {price}</Price>
              <OldPrice>R$ {price + 10}</OldPrice>
            </PriceContainer>
          ) : (
            <p>Não disponível</p>
          )}
        </div>
      </Container>
    </>
  );
};

export { DishCard };
