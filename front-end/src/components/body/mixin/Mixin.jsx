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
  height: 40px;
  margin: 0 var(--margin-line-space);
  padding: var(--padding-small);
  /* font-weight: ${(props) => props.weight || "500"}; */
  font-family: -apple-system;
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

// 시작용 큰 버튼
export const StartButton = styled(Button)`
  margin-top: calc(var(--margin-default));
  padding: calc(var(--padding-default) / 2) var(--padding-default);
  font-size: var(--font-size-large);
`;

// input 디폴트
export const Input = styled.input`
  width: ${(props) => props.width || "12em"};
  padding: var(--padding-small);
  font-size: var(--font-size-normal);
  position: relative;
  text-align: center;
  border: none;
  border-bottom: 2px solid var(--color-font);
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
  Input {
    margin-right: calc(var(--margin-default) / 2);
  }
  Button {
    i {
      font-size: var(--font-size-large);
    }
  }
`;

// 노란색 글자
export const YellowD = styled.span`
  color: var(--color-focus);
`;

// 옵션 컨테이너
export const OptionsContainer = styled.div`
  max-width: 44vw;
  height: auto;
  margin-top: var(--margin-default);
  border: 2px solid var(--color-font);
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  padding: var(--padding-default);
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
