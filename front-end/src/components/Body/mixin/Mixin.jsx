import styled from "styled-components";

export const MenuTitle = styled.div`
  width: 60vw;
  margin-top: var(--margin-header-to-body);
  margin-bottom: var(--margin-default);
  font-size: var(--font-size-title-normal);
`;

// 버튼
export const Button = styled.button`
  margin: 0 var(--margin-line-space);
  padding: var(--padding-small);
  font-weight: ${(props) => props.weight || "800"};
  font-size: var(--font-size-small);
  background-color: var(--color-brown);
  border: none;
  border-radius: 4px;
  color: white;
  transition-duration: 0.2s;
  :hover {
    cursor: pointer;
    transform: scale(1.02);
    color: var(--color-yellow);
  }
`;

export const YellowD = styled.span`
  color: var(--color-yellow);
`;
