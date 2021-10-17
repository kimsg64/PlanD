import styled from "styled-components";

// 바디 레이아웃
export const BodyLayout = styled.div`
  min-height: calc(100vh - var(--header-height) - var(--footer-height) + 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.padding || "var(--header-height) 0"};
  /* background-color: var(--color-bg); */
`;

// 바디 레이아웃(이미지, 비디오 겹치게)

// 메뉴 타이틀
export const MenuTitle = styled.div`
  width: 60vw;
  margin-top: var(--margin-header-to-body);
  margin-bottom: var(--margin-default);
  font-size: var(--font-size-title-normal);
`;

// 버튼
export const Button = styled.button`
  width: ${(props) => props.width || "auto"};
  height: 32px;
  margin: 0 var(--margin-line-space);
  padding: var(--padding-tiny) var(--padding-small);
  font-family: -apple-system;
  font-size: var(--font-size-small);
  /* background-color: var(--color-light-green); */
  background-color: var(--color-green);
  border: none;
  border-radius: 4px;
  color: white;
  transition-duration: 0.2s;
  position: ${(props) => props.position || "static"};
  top: ${(props) => props.fromTop};
  left: ${(props) => props.fromLeft};
  :hover {
    cursor: pointer;
    transform: scale(1.02);
    /* color: var(--color-green); */
    color: var(--color-light-green);
  }
  :active {
    /* background-color: var(--color-green);
    color: var(--color-light-green); */
    background-color: var(--color-dark-green);
    color: var(--color-green);
  }
`;

// 시작용 큰 버튼
export const StartButton = styled(Button)`
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
  width: ${(props) => props.width || "1200px"};
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
  :hover {
    cursor: pointer;
  }
`;

// 원
export const Circle = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: relative;
  background-color: ${(props) => props.bgColor};
  top: 130px;
  left: 34px;
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
`;
