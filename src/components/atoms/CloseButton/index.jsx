import { useDispatch } from "react-redux";
import styled from "styled-components";
import { reset, toggleModal } from "../../../store/actions";

const Container = styled.button`
  display: flex;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  box-shadow: 0px 2px 4px var(--gray-500);
  opacity: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const Status = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: var(--black);
  font-family: sans-serif;
`;

const CloseButton = () => {
  const dispatch = useDispatch();

  function closeModal() {
    dispatch(reset());
    dispatch(toggleModal());
  }

  return (
    <Container onClick={closeModal}>
      <Status>X</Status>
    </Container>
  );
};

export { CloseButton };
