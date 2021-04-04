import React from "react";
import styled from "styled-components";

const Wrapper: React.FunctionComponent<any> = ({ children }) => {
  return <WrapperContainer>{children}</WrapperContainer>;
};

const WrapperContainer = styled.div`
  width: 45%;
  margin: auto;
`;

export default Wrapper;
