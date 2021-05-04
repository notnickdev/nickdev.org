import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/me.png';
import theme from '../Theme/Theme';

// Icons
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaKeybase } from 'react-icons/fa';
interface MainProps {
  twitter: string;
  github: string;
  linkedin: string;
  email: string;
  keybase: string;
}

const Main: React.FunctionComponent<MainProps> = props => {
  return (
    <MainContainer>
      <MainImage src={logo} />
      <Wrapper>
        <MainTitle>
          Hey! 👋 I'm{' '}
          <span
            style={{
              background: `-webkit-linear-gradient(70deg, ${theme.primary.hex}, ${theme.primary.hexOnHover})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Nicholas.
          </span>
        </MainTitle>
        <MainDescription>
          {new Date().getFullYear() - 2003} year Entrepreneur & Developer
          <br />
          Contact:{' '}
          <StyledLink target="_blank" rel="noreferrer" href={props.twitter}>
            Twitter DM's
          </StyledLink>{' '}
          -{' '}
          <StyledLink
            target="_blank"
            rel="noreferrer"
            href={`mailto:${props.email}`}
          >
            Email
          </StyledLink>
        </MainDescription>
        <MainIconsContainer>
          <MainIcon target="_blank" href={props.twitter} rel="noreferrer">
            <AiOutlineTwitter />
          </MainIcon>
          <MainIcon target="_blank" href={props.github} rel="noreferrer">
            <AiOutlineGithub />
          </MainIcon>
          <MainIcon target="_blank" href={props.linkedin} rel="noreferrer">
            <AiFillLinkedin />
          </MainIcon>
          <MainIcon target="_blank" href={props.keybase} rel="noreferrer">
            <FaKeybase />
          </MainIcon>
        </MainIconsContainer>
        <div>
          <StyledLinkNavigation to="/about">About →</StyledLinkNavigation>
          <StyledLinkNavigation to="/portfolio">
            Portfolio →
          </StyledLinkNavigation>
          <StyleBlogsLink
            href="https://notnickdev.medium.com/"
            target="_blank"
            rel="noreferrer"
          >
            Blogs →
          </StyleBlogsLink>
        </div>
      </Wrapper>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  margin: 0 auto;
  position: relative;
  display: flex;
  top: 18rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainTitle = styled.h1`
  color: ${theme.primary.hex};
  font-weight: 700;

  @media (max-width: 480px) {
    font-size: 1.7rem;
  }
`;

const MainDescription = styled.p`
  font-size: 15px;
  color: ${theme.primary.hex};

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const MainImage = styled.img`
  width: 92px;
  height: 92px;
  border: 4px solid #fc99f3;
  margin-right: 15px;
  border-radius: 50%;
  margin-top: 15px;
  pointer-events: none;

  @media (max-width: 480px) {
    display: none;
  }
`;

const MainIconsContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 15px;
`;

const StyledLink = styled.a`
  color: ${theme.primary.hex};
  font-size: 15px;
  transition: 0.2s ease all;

  &:hover {
    color: ${theme.primary.hexOnHover};
  }
`;

const StyledLinkNavigation = styled(Link)`
  color: ${theme.primary.hex};
  text-decoration: none;
  margin-right: 40px;
  font-size: 15px;
  transition: 0.2s ease all;

  &:hover {
    color: ${theme.primary.hexOnHover};
  }

  @media (max-width: 480px) {
    margin-right: 25px;
  }
`;

const StyleBlogsLink = styled.a`
  color: ${theme.primary.hex};
  text-decoration: none;
  margin-right: 40px;
  font-size: 15px;
  transition: 0.2s ease all;

  &:hover {
    color: ${theme.primary.hexOnHover};
  }
`;

const MainIcon = styled.a`
  font-size: 35px;
  margin-right: 10px;
  color: ${theme.primary.hex};
  cursor: pointer;
  transition: ease 0.2s;

  &:hover {
    color: ${theme.primary.hexOnHover};
  }
`;

export default Main;
