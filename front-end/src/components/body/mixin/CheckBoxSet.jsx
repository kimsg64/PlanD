import React, { useState } from "react";
import styled from "styled-components";
import { Checkbox, CheckboxLabel } from "./Mixin";

// 옵션 컨테이너
const OptionsContainer = styled.div`
  /* width: calc(42em + var(--margin-default)); */
  min-width: 712px;
  height: auto;
  display: flex;
  border: 2px solid var(--color-font);
  border-radius: 4px;
  margin: ${(props) => props.optionMargin || 0};
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
  font-weight: bold;
  padding: calc(var(--margin-default) / 4) 0;
`;

const CheckBoxSet = ({ opt = [], setOpt = () => {}, optionMargin = "" }) => {
  const restaurants = ["한식", "일식", "중식", "양식", "그외"];
  const cafes = ["분위기", "컨셉", "야외"];
  const others = ["체험", "문화", "익스트림", "이색"];
  const commons = [
    "팝업",
    "기념일",
    "실외",
    "실내",
    "신상",
    "가성비",
    "럭셔리",
  ];
  // 체크박스 체크된 친구들 리스트 만들기
  const setOptList = (e) => {
    setOpt((prevState) => {
      // console.log(prevState);
      return prevState.includes(e.target.value)
        ? prevState.filter((opt) => opt !== e.target.value)
        : [...prevState, e.target.value];
    });
  };

  // 전달 받은 모든 opt에 대해서 체크박스에 값이 있으면 체크박스를 selected
  // console.log(opt);

  return (
    <OptionsContainer optionMargin={optionMargin}>
      <TitleGroup>
        <Title>식당</Title>
        <Title>카페</Title>
        <Title>기타</Title>
        <Title>공통</Title>
      </TitleGroup>
      <OptionsGroup>
        <GroupWrapper>
          {restaurants.map((restaurant) => {
            return opt.findIndex((option) => option === restaurant) >= 0 ? (
              <CheckboxLabel>
                <Checkbox
                  type="checkbox"
                  name="opt"
                  value={restaurant}
                  onClick={setOptList}
                  checked
                />
                {restaurant}
              </CheckboxLabel>
            ) : (
              <CheckboxLabel>
                <Checkbox
                  type="checkbox"
                  name="opt"
                  value={restaurant}
                  onClick={setOptList}
                />
                {restaurant}
              </CheckboxLabel>
            );
          })}
        </GroupWrapper>

        <GroupWrapper>
          {cafes.map((cafe) => {
            return opt.findIndex((option) => option === cafe) >= 0 ? (
              <CheckboxLabel>
                <Checkbox
                  type="checkbox"
                  name="opt"
                  value={cafe}
                  onClick={setOptList}
                  checked
                />
                {cafe}
              </CheckboxLabel>
            ) : (
              <CheckboxLabel>
                <Checkbox
                  type="checkbox"
                  name="opt"
                  value={cafe}
                  onClick={setOptList}
                />
                {cafe}
              </CheckboxLabel>
            );
          })}
        </GroupWrapper>

        <GroupWrapper>
          {others.map((other) => {
            return opt.findIndex((option) => option === other) >= 0 ? (
              <CheckboxLabel>
                <Checkbox
                  type="checkbox"
                  name="opt"
                  value={other}
                  onClick={setOptList}
                  checked
                />
                {other}
              </CheckboxLabel>
            ) : (
              <CheckboxLabel>
                <Checkbox
                  type="checkbox"
                  name="opt"
                  value={other}
                  onClick={setOptList}
                />
                {other}
              </CheckboxLabel>
            );
          })}
        </GroupWrapper>

        <GroupWrapper>
          {commons.map((common) => {
            return opt.findIndex((option) => option === common) >= 0 ? (
              <CheckboxLabel>
                <Checkbox
                  type="checkbox"
                  name="opt"
                  value={common}
                  onClick={setOptList}
                  checked
                />
                {common}
              </CheckboxLabel>
            ) : (
              <CheckboxLabel>
                <Checkbox
                  type="checkbox"
                  name="opt"
                  value={common}
                  onClick={setOptList}
                />
                {common}
              </CheckboxLabel>
            );
          })}
        </GroupWrapper>
      </OptionsGroup>
    </OptionsContainer>
  );
};

export default CheckBoxSet;
