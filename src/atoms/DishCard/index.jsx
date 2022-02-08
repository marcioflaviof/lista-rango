import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 385px;
  max-height: 115px;
  box-shadow: 0px 4px 8px #00000029;
`;

const ImageContainer = styled.div`
  width: 115px;
  height: 115px;

  margin-right: 10px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
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
  color: #009ca3;
  margin-right: 5px;
`;

const OldPrice = styled.p`
  font-size: 0.75rem;
  margin-top: 3px;
  color: #989898;
  text-decoration: line-through;
`;

const DishCard = () => {
  return (
    <Container>
      <ImageContainer>
        <img src="/images/dish.png" alt="" />
      </ImageContainer>
      <div>
        <div>
          <Subtitle>Nome do Prato</Subtitle>
          <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</Description>
        </div>
        <PriceContainer>
          <Price>R$ 19,90</Price>
          <OldPrice>R$ 29,90</OldPrice>
        </PriceContainer>
      </div>
    </Container>
  );
};

export { DishCard };
