import styled from "styled-components";
import { Counter } from "../../atoms/Counter";
import { ButtonAdd } from "../../atoms/ButtonAdd";
import { CloseButton } from "../../atoms/CloseButton";

const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  opacity: 1;
`;

const ContentContainer = styled.div`
  margin: 100px;
  height: 485px;
  width: 600px;
  box-shadow: 0px 4px 8px #00000033;
  border-radius: 8px;
  padding: 10px;
  position: relative;
`;

const Close = styled.div`
  position: absolute;
  top: -30px;
  right: -30px;
`;

const ImageContainer = styled.div`
  height: 195px;
  width: 555px;
  margin-left: 13px;
  img {
    height: 100%;
    width: 100%;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  margin-top: 45px;
`;

const TextContainer = styled.div`
  max-width: 380px;
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
`;

const Text = styled.p`
  font-size: 1rem;
  padding-left: 4px;
  text-align: justify;
`;

const Price = styled.div`
  width: 220px;
  position: relative;
  p {
    position: absolute;
    bottom: 0;
    right: 0;
    font-weight: bold;
    font-size: 2rem;
    color: var(--cyan);
  }
`;

const ButtonsContainer = styled.div`
  margin-top: 30px;
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid;
  border-color: var(--gray-200);
`;

const DishDetails = () => {
  return (
    <Container>
      <ContentContainer>
        <Close>
          <CloseButton />
        </Close>
        <ImageContainer>
          <img src="/images/vegetarian-dish.png" alt="Imagem do prato" />
        </ImageContainer>

        <DetailsContainer>
          <TextContainer>
            <SubTitle>Nome do prato</SubTitle>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Text>
          </TextContainer>
          <Price>
            <p>R$ 19,90</p>
          </Price>
        </DetailsContainer>
        <ButtonsContainer>
          <Counter />
          <ButtonAdd />
        </ButtonsContainer>
      </ContentContainer>
    </Container>
  );
};

export { DishDetails };
