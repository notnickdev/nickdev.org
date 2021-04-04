import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Wrapper from '../components/Wrapper';

const About: React.FunctionComponent<any> = () => {
  return (
    <Wrapper>
      <h1>About</h1>
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

export default About;
