import styled, { css } from "styled-components";
import { Button, Input } from "../mixin/Mixin";

// 제출 버튼
export const SubmitButton = styled(Button)`
  width: 120px;
  height: 40px;
  font-size: var(--font-size-normal);
  margin: var(--margin-default) var(--margin-default) 0 0;
`;

// 인풋 라벨
export const Label = styled.label`
  width: 24em;
  font-size: var(--font-size-small);
  margin-bottom: calc(var(--margin-default) / 4);
`;

// 인풋 상자(입력칸 디폴트)
export const FormInput = styled(Input)`
  width: ${(props) => props.width || "24em"};
  padding: calc(var(--padding-small) * 2) calc(var(--padding-default) * 2);
  font-size: var(--font-size-small);
  position: relative;
  text-align: left;
  border: 2px solid var(--color-blur);
  /* border-bottom: 2px solid var(--color-font); */
  transition-duration: 0.2s;
  background-color: var(--color-blur);
  &:disabled {
    /* background-color: white; */
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
    border: 2px solid var(--color-warning);
    /* 에러 메시지 표시 */
    & ~ div {
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
    border: 2px solid
      ${(props) => {
        return props.isSame ? "var(--color-font)" : "var(--color-warning)";
      }};
  }
  &.check:not(:focus):not(:placeholder-shown) ~ div {
    display: ${(props) => {
      return props.isSame ? "none" : "block";
    }};
  }

  /* 파일 업로드 스타일링 */
  &[type="file"] {
    display: none;
  }
`;

export const ErrorMsg = styled.div`
  width: ${(props) => props.width || "24em"};
  color: var(--color-warning);
  font-size: var(--font-size-tiny);
  font-style: italic;
  transition-duration: 0.2s;
  display: none;
`;

// 각 항목의 컨테이너
export const ItemContainer = styled.div`
  width: auto;
  margin-top: calc(var(--margin-default) / 2);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const LineWrapper = styled.div`
  display: flex;
`;
