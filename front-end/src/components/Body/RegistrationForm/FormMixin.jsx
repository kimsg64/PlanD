import styled, { css } from "styled-components";

// 버튼
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
    transform: scale(1.02);
    color: var(--color-yellow);
  }
`;

// 제출 버튼
export const SubmitButton = styled(Button)`
  width: 200px;
  margin: var(--margin-default) var(--margin-default) 0 0;
`;

// 인풋 라벨
export const Label = styled.label`
  width: 8vw;
  font-size: var(--font-size-normal);
  margin-right: var(--margin-default);
`;

// 인풋 상자(입력칸 디폴트)
export const Input = styled.input`
  width: ${(props) => props.width || "12em"};
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
  &:disabled {
    background-color: white;
  }

  /* 필수 사항 유효성 체크(비밀번호 체크 외) */
  &:valid:not(.check):not(.optional) {
    background-image: url("/images/validcheck.png");
    background-size: 16px;
    background-repeat: no-repeat;
    background-position: 12px 12px;
  }
  /* 유효성 체크 경고문구 표시 */
  &:invalid:not(:focus):not(:placeholder-shown):not(.check) {
    border-bottom: 2px solid var(--color-pink);
    & ~ div {
      max-width: 16vw;
      display: block;
    }
  }

  /* 비밀번호 더블체크 */
  &.check {
    ${(props) => {
      return props.isSame
        ? css`
            background-image: url("/images/validcheck.png");
            background-size: 16px;
            background-repeat: no-repeat;
            background-position: 12px 12px;
          `
        : null;
    }}
  }
  &.check:not(:focus):not(:placeholder-shown) {
    border-bottom: 2px solid
      ${(props) => {
        return props.isSame ? "var(--color-black)" : "var(--color-pink)";
      }};
  }
  &.check:not(:focus):not(:placeholder-shown) ~ div {
    display: ${(props) => {
      return props.isSame ? "none" : "block";
    }};
  }
`;

export const ErrorMsg = styled.div`
  margin-left: calc(var(--margin-default) / 4);
  color: var(--color-pink);
  font-size: var(--font-size-tiny);
  font-style: italic;
  transition-duration: 0.2s;
  display: none;
`;

// 하이픈
export const Hyphen = styled.p`
  margin: 0 calc(var(--margin-default) / 4);
  font-size: var(--font-size-large);
  color: var(--color-black);
`;

// 체크박스
export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  margin: 0 var(--margin-line-space);
`;

// 체크박스 라벨
export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  min-width: 4vw;
  margin: 1vh 1vw;
  :hover {
    cursor: pointer;
  }
`;

// 각 항목의 컨테이너
export const ItemContainer = styled.div`
  width: auto;
  margin-top: calc(var(--margin-default) / 2);
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
