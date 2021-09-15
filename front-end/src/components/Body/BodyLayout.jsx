import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: var(--header-height);
`;

const BodyLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default BodyLayout;
