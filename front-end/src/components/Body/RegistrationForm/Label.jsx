import React from "react";
import styled from "styled-components";

const LabelContainer = styled.label`
  width: 8vw;
  font-size: var(--font-size-normal);
  margin-right: var(--margin-default);
`;

const Label = ({ children }) => {
  return <LabelContainer>{children}</LabelContainer>;
};

export default Label;
