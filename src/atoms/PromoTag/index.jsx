import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: var(--blue-500);
  width: 103px;
  height: 21px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;

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
