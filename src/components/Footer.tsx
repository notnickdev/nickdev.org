import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.p`
  position: fixed;
  color: #94879f;
  display: flex;
  bottom: 0;
  margin-bottom: 10px;
  font-size: 15px;
  right: 0;
  left: 0;
  justify-content: center;
`;

const Footer: React.FunctionComponent = () => (
  <FooterWrapper>
    Copyright &copy; {new Date().getFullYear()}, Nicholas
  </FooterWrapper>
);

export default Footer;
