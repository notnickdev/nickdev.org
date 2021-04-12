import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/me.png';

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
              color: '#bf30eb',
            }}
          >
            Nicholas.
          </span>
        </MainTitle>
        <MainDescription>
          {new Date().getFullYear() - 2003} year Full-Stack Developer
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
  color: #280f3f;
  font-weight: 700;
`;

const MainDescription = styled.p`
  font-size: 15px;
  color: #533f65;
`;

const MainImage = styled.img`
  width: 92px;
  height: 92px;
  border: 4px solid #bf30eb;
  margin-right: 15px;
  border-radius: 50%;
  margin-top: 15px;
  pointer-events: none;
`;

const MainIconsContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 15px;
`;

const StyledLink = styled.a`
  color: #695779;
  font-size: 15px;
  transition: 0.2s ease all;

  &:hover {
    color: #bf30eb;
  }
`;

const StyledLinkNavigation = styled(Link)`
  color: #695779;
  text-decoration: none;
  margin-right: 40px;
  font-size: 15px;
  transition: 0.2s ease all;

  &:hover {
    color: #bf30eb;
  }
`;

const StyleBlogsLink = styled.a`
  color: #695779;
  text-decoration: none;
  margin-right: 40px;
  font-size: 15px;
  transition: 0.2s ease all;

  &:hover {
    color: #bf30eb;
  }
`;

const MainIcon = styled.a`
  font-size: 35px;
  margin-right: 10px;
  color: #bf30eb;
  cursor: pointer;
  transition: ease 0.2s;

  &:hover {
    color: #9926bc;
  }
`;

export default Main;
