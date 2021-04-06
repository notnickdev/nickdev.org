import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Components
import Card from '../components/Card';
import Wrapper from '../components/Wrapper';

// Assets
import watchouBrandLogo from '../assets/watchou_brand_logo.png';

const Portfolio: React.FunctionComponent<any> = () => {
  const projects = [
    {
      name: 'Watchou',
      role: 'Developer',
      active: true,
      site: 'https://watchou.com/',
      image: watchouBrandLogo,
    },
    {
      name: 'Watchou',
      role: 'Developer',
      active: true,
      site: 'https://watchou.com/',
    },
  ];

  return (
    <Wrapper>
      <Title>Portfolio</Title>
      {projects.map(project => (
        <Card
          name={project.name}
          role={project.role}
          active={project.active}
          site={project.site}
          image={project.image}
        />
      ))}
      <StyledLinkNavigation to="/">← Go back</StyledLinkNavigation>
    </Wrapper>
  );
};

const StyledLinkNavigation = styled(Link)`
  color: #695779;
  text-decoration: none;
  font-size: 15px;
  transition: 0.2s ease all;

  &:hover {
    color: #bf30eb;
  }
`;

const Title = styled.h1`
  text-align: center;
`;

export default Portfolio;
