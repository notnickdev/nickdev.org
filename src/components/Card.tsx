import React from 'react';
import styled from 'styled-components';

interface CardPropsInterface {
  name: string;
  role: string;
  active: boolean;
  site: string;
  image: any;
  hexCode: number[];
}

let hexCode = '';

const Card: React.FunctionComponent<CardPropsInterface> = ({
  name,
  role,
  active,
  site,
  image,
  hexCode,
}) => {
  console.log(`rgba(${hexCode[0]} ,${hexCode[1]}, ${hexCode[2]}, 0.96)`);
  console.log(hexCode[0]);
  return (
    <CardContainer
      style={{
        backgroundColor: `${hexCode}`,
      }}
    >
      <CardImageContainer
        style={{
          backgroundColor: `rgba(${hexCode[0]} ${hexCode[1]} ${hexCode[2]} 0.96)`,
        }}
      >
        <CardImage src={image} alt={name} />
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

const CardImage = styled.img`
  width: 225px;
  pointer-events: none;
`;

const CardLabel = styled.label`
  position: relative;
  font-size: 15px;
`;

const CardInfoText = styled.h4`
  margin-top: 5px;
  margin-bottom: 20px;
`;

const DescriptionContainer = styled.div`
  float: right;
  width: 50%;
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
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
  text-align: center;
  height: 40px;
  justify-content: center;
  align-items: center;
  display: flex;
  text-decoration: none;
  width: 110px;
`;

export default Card;
