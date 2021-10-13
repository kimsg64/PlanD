import React from "react";
import styled from "styled-components";
import { Checkbox, CheckboxLabel } from "./Mixin";

// 옵션 컨테이너
const OptionsContainer = styled.div`
  width: calc(42em + var(--margin-default));
  height: auto;
  display: flex;
  border: 2px solid var(--color-font);
  border-radius: 4px;
  padding: var(--padding-default);
`;

const OptionsGroup = styled.div`
  width: 100%;
`;

const GroupWrapper = styled.div`
  width: 100%;
  border-top: 1px solid grey;
  padding: calc(var(--margin-default) / 4) 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  &:first-child {
    border-top: none;
  }
`;

const TitleGroup = styled.div`
  width: 72px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.div`
  height: 60px;
  line-height: 40px;
  padding: calc(var(--margin-default) / 4) 0;
`;

const CheckBoxSet = ({ setOpt = () => {} }) => {
  // 체크박스 리스트 만들기
  const setOptList = (e) => {
    setOpt((prevState) => {
      // console.log(prevState);
      return prevState.includes(e.target.value)
        ? prevState.filter((opt) => opt !== e.target.value)
        : [...prevState, e.target.value];
    });
  };

  return (
    <OptionsContainer>
      <TitleGroup>
        <Title>식당</Title>
        <Title>카페</Title>
        <Title>기타</Title>
        <Title>공통</Title>
      </TitleGroup>
      <OptionsGroup>
        <GroupWrapper>
          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              name="opt"
              value="한식"
              onClick={setOptList}
            />
            한식
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              name="opt"
              value="일식"
              onClick={setOptList}
            />
            일식
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              name="opt"
              value="중식"
              onClick={setOptList}
            />
            중식
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              name="opt"
              value="양식"
              onClick={setOptList}
            />
            양식
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              name="opt"
              value="그외"
              onClick={setOptList}
            />
            그외
          </CheckboxLabel>
        </GroupWrapper>
        <GroupWrapper>
          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              name="opt"
              value="분위기"
              onClick={setOptList}
            />
            분위기
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              name="opt"
              value="컨셉"
              onClick={setOptList}
            />
            컨셉
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              name="opt"
              value="야외"
              onClick={setOptList}
            />
            야외
          </CheckboxLabel>
        </GroupWrapper>
        <GroupWrapper>
          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              name="opt"
              value="체험"
              onClick={setOptList}
            />
            체험
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              name="opt"
              value="문화"
              onClick={setOptList}
            />
            문화
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              name="opt"
              value="익스트림"
              onClick={setOptList}
            />
            익스트림
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              name="opt"
              value="이색"
              onClick={setOptList}
            />
            이색
          </CheckboxLabel>
        </GroupWrapper>
        <GroupWrapper>
          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              name="opt"
              value="팝업"
              onClick={setOptList}
            />
            팝업
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              name="opt"
              value="기념일"
              onClick={setOptList}
            />
            기념일
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              name="opt"
              value="실외"
              onClick={setOptList}
            />
            실외
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              name="opt"
              value="실내"
              onClick={setOptList}
            />
            실내
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              name="opt"
              value="신상"
              onClick={setOptList}
            />
            신상
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              name="opt"
              value="가성비"
              onClick={setOptList}
            />
            가성비
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              name="opt"
              value="럭셔리"
              onClick={setOptList}
            />
            럭셔리
          </CheckboxLabel>
        </GroupWrapper>
      </OptionsGroup>
    </OptionsContainer>
  );
};

export default CheckBoxSet;
