import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { setActiveRestaurant } from "../../../store/actions";
import { openHour } from "../../../utils/openHour";
import { CircleStatus } from "../CircleStatus";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 4px var(--gray-500);
  width: 365px;
  height: 100px;
  margin: 30px 22.5px 0 22.5px;
  position: relative;

  :hover {
    cursor: pointer;
  }
`;

const StatusContainer = styled.div`
  position: absolute;
  top: -25px;
  right: -25px;
`;

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;

  margin-right: 10px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

const TextContainer = styled.div`
  margin-left: 15px;
  padding-right: 15px;
`;

const Title = styled.h3`
  text-align: left;
  font-size: 1rem;
`;

const Address = styled.p`
  font-size: 0.75rem;
`;

const RestaurantCard = ({ restaurant }) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const { id, name, image, address, hours } = restaurant;

  useEffect(() => {
    let open = false;

    if (hours) {
      hours.forEach((t) => {
        if (!open) open = openHour(t.from, t.to, t.days);
      });
    }

    setIsOpen(open);
  }, [hours]);

  function handleClick() {
    dispatch(setActiveRestaurant({ name, image, address, hours }));
  }

  return (
    <StyledLink to={`/restaurant/${id}`} onClick={handleClick}>
      <Container>
        <StatusContainer>
          <CircleStatus status={isOpen} />
        </StatusContainer>

        <ImageContainer>
          <img src={image} alt="Logo do restaurante" />
        </ImageContainer>

        <TextContainer>
          <Title>{name}</Title>
          <Address>{address}</Address>
        </TextContainer>
      </Container>
    </StyledLink>
  );
};

export { RestaurantCard };
