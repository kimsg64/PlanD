import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  min-height: calc(100vh - var(--header-height) - var(--footer-height) + 20px);
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
