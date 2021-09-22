import styled from "styled-components";

export const MenuTitle = styled.div`
  width: 60vw;
  margin-top: var(--margin-header-to-body);
  margin-bottom: var(--margin-default);
  font-size: var(--font-size-title-normal);
`;

export const Button = styled.button`
  margin: 0 var(--margin-line-space);
  padding: var(--padding-small);
  font-weight: 800;
  background-color: var(--color-brown);
  border: none;
  border-radius: 4px;
  color: white;
  transition-duration: 0.2s;
  :hover {
    cursor: pointer;
    transform: scale(1.05);
    color: var(--color-yellow);
  }
`;

export const Label = styled.label`
  width: 8vw;
  font-size: var(--font-size-normal);
  margin-right: var(--margin-default);
`;

export const Input = styled.input`
  width: 8em;
  padding: var(--padding-small);
  font-size: var(--font-size-normal);
  position: relative;
  text-align: center;
  border: none;
  border-bottom: 2px solid var(--color-black);
  transition-duration: 0.2s;
  &:focus {
    outline: none;
    border-bottom: 2px solid var(--color-yellow);
  }
`;

export const Hyphen = styled.p`
  margin: 0 calc(var(--margin-default) / 4);
  font-size: var(--font-size-large);
  color: var(--color-black);
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  margin: 0 var(--margin-line-space);
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  min-width: 4vw;
  margin: 1vh 1vw;
  :hover {
    cursor: pointer;
  }
`;
