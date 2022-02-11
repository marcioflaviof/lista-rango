import styled from "styled-components";
import { DishDetails } from "../../molecules/DishDetails";

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

const Description = styled.p`
  font-size: 0.75rem;
  text-align: left;
  margin-bottom: 15px;
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
  return (
    <>
      <Container>
        <ImageContainer>
          <img src={image || "/images/dish.png"} alt="Imagem do prato" />
        </ImageContainer>
        <div>
          <div>
            <Subtitle>{name}</Subtitle>
            {/* <Description>Aprecie</Description> */}
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
