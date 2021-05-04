import React from 'react';
import styled from 'styled-components';
import theme from '../Theme/Theme';

interface CardPropsInterface {
  name: string;
  role: string;
  active: boolean;
  site: string;
  image: any;
  hexCode: string;
  darkHexCode: string;
  size?: number;
}

let hexCode = '';

const Card: React.FunctionComponent<CardPropsInterface> = ({
  name,
  role,
  active,
  site,
  image,
  hexCode,
  darkHexCode,
  size,
}) => {
  return (
    <CardContainer
      style={{
        backgroundColor: `#${hexCode}`,
      }}
    >
      <CardImageContainer
        style={{
          backgroundColor: `#${darkHexCode}`,
        }}
      >
        <img
          src={image}
          alt={name}
          width={size}
          style={{ pointerEvents: 'none' }}
        />
      </CardImageContainer>
      <DescriptionWrapper>
        <CardLabel htmlFor="name">Name:</CardLabel>
        <CardInfoText>{name}</CardInfoText>
        <CardLabel htmlFor="name">Role:</CardLabel>
        <CardInfoText>{role}</CardInfoText>
        <CardLabel htmlFor="name">Status:</CardLabel>
        <CardInfoText>{active ? 'Active' : 'Not Active'}</CardInfoText>
      </DescriptionWrapper>
      <VisitSiteButton target="_blank" href={site}>
        Visit Site
      </VisitSiteButton>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 700px;
  position: relative;
  height: 240px;
  margin: auto;
  color: white;
  border-radius: 10px;
  margin-bottom: 25px;
`;

const CardImageContainer = styled.div`
  position: absolute;
  height: 240px;
  border-radius: 10px;
  background-color: #7f17d4;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 320px;
`;

const CardLabel = styled.label`
  position: relative;
  font-size: 15px;
`;

const CardInfoText = styled.h4`
  margin-top: 5px;
  margin-bottom: 20px;
`;

const DescriptionWrapper = styled.div`
  /* right: 17rem; */
  position: relative;
  justify-content: center;
  display: flex;
  width: 35%;
  flex-direction: column;
  right: 7rem;
  position: absolute;
  height: 240px;
`;

const VisitSiteButton = styled.a`
  background-color: white;
  position: absolute;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  right: 0;
  padding: 8px;
  bottom: 2rem;
  color: ${theme.primary.hex};
  text-align: center;
  height: 40px;
  justify-content: center;
  align-items: center;
  display: flex;
  text-decoration: none;
  width: 110px;
  transition: 0.2s ease all;

  &:hover {
    color: ${theme.primary.hexOnHover};
  }
`;

export default Card;
