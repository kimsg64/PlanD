import styled from "styled-components";

// 바디 레이아웃
export const BodyLayout = styled.div`
  min-height: calc(100vh - var(--header-height) - var(--footer-height) + 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.padding || "var(--header-height) 0"};
  position: relative;
`;

// 메뉴 타이틀
export const MenuTitle = styled.div`
  width: 72%;
  margin-top: calc(var(--margin-default) * 1.5);
  margin-bottom: 0;
  font-size: var(--font-size-title-normal);
  display: flex;
  align-items: center;
`;

// 버튼
export const Button = styled.button`
  width: ${(props) => props.width || "auto"};
  height: 32px;
  margin: 0 var(--margin-line-space);
  padding: var(--padding-tiny) var(--padding-small);
  font-family: -apple-system;
  font-size: var(--font-size-small);
  background-color: var(--color-green);
  border: none;
  border-radius: 4px;
  color: white;
  transition-duration: 0.2s;
  position: ${(props) => props.position || "static"};
  top: ${(props) => props.fromTop};
  left: ${(props) => props.fromLeft};
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    /* color: var(--color-light-green); */
  }
  &:active {
    background-color: var(--color-dark-green);
    color: var(--color-green);
  }
`;

// 색 바뀌는 버튼
export const StyledButton = styled(Button)`
  transition-duration: 0.5s;
  &:hover {
    background-color: var(--color-light-green);
    color: var(--color-green);
  }
  &:active {
    background-color: var(--color-dark-green);
    color: var(--color-light-green);
  }
`;

// 큰 버튼
export const StartButton = styled(StyledButton)`
  width: 180px;
  height: 60px;
  margin-top: calc(var(--margin-default));
  padding: calc(var(--padding-default) / 2) var(--padding-default);
  position: absolute;
  top: 800px;
  left: calc(50% - 180px / 2);
  z-index: 2;
  font-size: var(--font-size-large);
  /* background-color: var(--color-green); */
  /* :hover {
    color: var(--color-light-green);
  }
  :active {
    background-color: var(--color-dark-green);
    color: var(--color-green);
  } */
`;

// input 디폴트
export const Input = styled.input`
  width: ${(props) => props.width || "12em"};
  padding: var(--padding-small);
  font-size: var(--font-size-normal);
  position: relative;
  text-align: center;
  border: none;
  /* border-bottom: 2px solid var(--color-font); */
  transition-duration: 0.2s;
  &:focus {
    outline: none;
    /* border-bottom: 2px solid var(--color-yellow); */
  }
`;

// 검색 폼
export const SearchBar = styled.div`
  width: ${(props) => props.width || "1360px"};
  height: 60px;
  margin-top: var(--margin-default);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  Input {
    background-color: inherit;
    margin-right: calc(var(--margin-default) / 2);
    font-size: var(--font-size-normal);
  }
  Button {
    i {
      font-size: var(--font-size-large);
    }
  }
`;

// 강조 글자
export const PointLetter = styled.span`
  color: var(--color-focus);
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
  min-width: 120px;
  height: 40px;
  &:hover {
    cursor: pointer;
  }
`;

// 원
export const Circle = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: relative;
  top: 130px;
  left: 34px;
  &:hover {
    background-color: ${(props) => props.bgColor};
  }
`;

// 사각형
export const Square = styled.div`
  width: 140px;
  height: 172px;
  position: absolute;
  background-color: inherit;
  top: ${(props) => props.fromTop};
  left: ${(props) => props.fromLeft};
  &:hover {
    cursor: pointer;
    div {
      background-color: var(--color-focus);
    }
  }
  div {
    transition-duration: 0.2s;
    background-color: ${(props) => props.bgColor};
  }
`;

// 툴 팁
export const ToolTipBox = styled.div`
  display: ${(props) => props.display};
  position: absolute;
  background-color: var(--color-focus);
  padding: calc(var(--padding-default) / 2);
  width: ${(props) => props.width};
  top: ${(props) => props.fromTop};
  left: ${(props) => props.fromLeft};
  font-size: var(--font-size-small);
  color: black;
  border-radius: 8px;
`;

export const ToolTip = styled.div`
  position: absolute;
  display: ${(props) => props.display};
  border-style: solid;
  border-width: 8px 8px 0;
  border-color: var(--color-focus) transparent;
  width: 0;
  bottom: -6px;
  left: 40px;
`;

// 마이메뉴 아이템 박스
export const MyMenuItemBox = styled.div`
  width: 100%;
  padding: var(--padding-default);
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: var(--color-bg);
  }

  &:active {
    background-color: var(--color-blur);
  }

  & > div {
    display: flex;
    align-items: center;
    & > i {
      color: var(--color-focus);
      margin-right: calc(var(--margin-default) / 4);
    }
  }
`;
