import styled from "styled-components";
import { FlexContainer } from "../../utils/componentStyles";

const Container = styled(FlexContainer)`
  background-color: var(--blue-500);
  width: 103px;
  height: 21px;
  border-radius: 25px;

  & p {
    font-size: 0.5rem;
    color: var(--white);
  }

  & img {
    width: 10px;
    margin-right: 5px;
  }
`;

const PromoTag = () => {
  return (
    <Container>
      <img src="/images/award.svg" alt="Icone da promoção" />
      <p>Promo Almoço</p>
    </Container>
  );
};

export { PromoTag };
