import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.p`
  position: fixed;
  color: #94879f;
  display: flex;
  bottom: 0;
  margin-bottom: 10px;
  font-size: 13px;
  right: 0;
  left: 0;
  justify-content: center;
`;

const Footer: React.FunctionComponent = () => (
  <FooterWrapper>
    &copy; design & code by Nicholas, {new Date().getFullYear()}
  </FooterWrapper>
);

export default Footer;
