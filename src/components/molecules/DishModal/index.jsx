import { useContext } from "react";
import reactDom from "react-dom";
import styled from "styled-components";
import { DishQuantityProvider } from "../../../context/DishQuantityContext";
import ModalContext from "../../../context/ModalContext";
import { ButtonAdd } from "../../atoms/ButtonAdd";
import { CloseButton } from "../../atoms/CloseButton";
import { Counter } from "../../atoms/Counter";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

const Container = styled.div`
  position: fixed;
  top: 40%;
  left: 40%;
  transform: translate(-50%, -50%);
  margin: 100px;
  height: 485px;
  width: 600px;
  box-shadow: 0px 4px 8px #00000033;
  border-radius: 8px;
  background-color: var(--white);
  padding: 10px;
  z-index: 1000;
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
    object-fit: contain;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  margin-top: 65px;
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
  margin-top: 50px;
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid;
  border-color: var(--gray-200);
`;

const DishModal = () => {
  const { state, setState } = useContext(ModalContext);
  const { showModal, name, description, image, price } = state;

  const closeModal = () => {
    return setState({ showModal: !state.showModal });
  };

  return reactDom.createPortal(
    <>
      {showModal ? (
        <>
          <Background onClick={closeModal} />
          <Container>
            <Close>
              <CloseButton />
            </Close>
            <ImageContainer>
              <img
                src={image || "/images/vegetarian-dish.png"}
                alt="Imagem do prato"
              />
            </ImageContainer>

            <DetailsContainer>
              <TextContainer>
                <SubTitle>{name}</SubTitle>
                <Text>{description}</Text>
              </TextContainer>
              <Price>
                <p>R$ {price.toFixed(2)}</p>
              </Price>
            </DetailsContainer>
            <ButtonsContainer>
              <DishQuantityProvider>
                <Counter />
                <ButtonAdd price={price} />
              </DishQuantityProvider>
            </ButtonsContainer>
          </Container>
        </>
      ) : null}
    </>,
    document.getElementById("modals")
  );
};

export { DishModal };
