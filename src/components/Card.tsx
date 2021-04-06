import React from 'react';
import styled from 'styled-components';

interface CardPropsInterface {
  name: string;
  role: string;
  active: boolean;
  site: string;
  image: any;
}

const Card: React.FunctionComponent<CardPropsInterface> = ({
  name,
  role,
  active,
  site,
  image,
}) => {
  return (
    <CardContainer>
      <CardImageContainer>
        <CardImage src={image} alt={name} />
      </CardImageContainer>
      <DescriptionContainer>
        <DescriptionWrapper>
          <CardLabel htmlFor="name">Name:</CardLabel>
          <CardInfoText>{name}</CardInfoText>
          <CardLabel htmlFor="name">Role:</CardLabel>
          <CardInfoText>{role}</CardInfoText>
          <CardLabel htmlFor="name">Active:</CardLabel>
          <CardInfoText>{active ? 'True' : 'False'}</CardInfoText>
        </DescriptionWrapper>
        <VisitSiteButton target="_blank" href={site}>
          Visit Site
        </VisitSiteButton>
      </DescriptionContainer>
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
  background-color: #981bff;
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

const CardImage = styled.img`
  width: 225px;
  pointer-events: none;
`;

const CardLabel = styled.label`
  position: relative;
  font-size: 15px;
`;

const CardInfoText = styled.h4`
  /* margin-top: 10px;
  margin-bottom: 20px; */
`;

const DescriptionContainer = styled.div`
  display: flex;
  position: relative;
  float: right;
  flex-direction: column;
`;

const DescriptionWrapper = styled.div`
  right: 17rem;
  position: relative;
`;

const VisitSiteButton = styled.a`
  background-color: white;
  position: relative;
  padding: 8px;
  bottom: 2rem;
`;

export default Card;
