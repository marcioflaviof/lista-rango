import styled from "styled-components";

const Button = styled.button`
  display: flex;
  height: 50px;
  width: 265px;
  background-color: var(--cyan);
  border: none;
  cursor: pointer;
  color: var(--white);
  font-size: 1.25rem;
  border-radius: 4px;
  align-items: center;
  justify-content: space-around;
`;

const ButtonAdd = ({ price }) => {
  return (
    <Button>
      Adicionar <span>R$ {price}</span>
    </Button>
  );
};

export { ButtonAdd };
