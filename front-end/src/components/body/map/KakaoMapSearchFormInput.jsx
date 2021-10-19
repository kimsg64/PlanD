import React, { useState } from "react";
import styled from "styled-components";
import Form from "../mixin/Form";
import BorderEffect from "../mixin/BorderEffect";
import { Button, Input, SearchBar } from "../mixin/Mixin";
import KakaoMapSearchForm from "./KakaoMapSearchForm";
import BorderEffectBox from "../mixin/BorderEffectBox";

const SearchForm = styled(Form)`
  & > div {
    padding: 0 0 0 0;
    background-color: white;
    box-shadow: none;
  }
`;

const CenterSearchBar = styled(SearchBar)`
  width: 800px;
  justify-content: center;
  background-color: var(--color-light-bg);
  box-shadow: 0px 2px 4px 2px grey;
`;

const InputContainer = styled.div`
  position: relative;
`;

const Label = styled.label`
  margin: 0 calc(var(--margin-default) * 2);
`;

const KakaoMapSearchFormInput = () => {
  // 입력된 단어
  const [inputText, setInputText] = useState("");
  // 검색으로 나온 장소
  const [place, setPlace] = useState("송파구청 정문");
  // 마우스로 최종 선택한 장소
  const [clickedPlace, setClickedPlace] = useState("");
  const [searchBarWidth, setSearchBarWidth] = useState("0");
  const onSubmitKeyword = (e) => {
    console.log("서브밋 발생하냐?");
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };
  const onClickButton = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };
  const onBlurInputBox = () => {
    // console.log(inputText.length);
    return inputText.length > 0 ? null : setSearchBarWidth("0");
  };

  // console.log("인풋 inputText: ", inputText);
  // console.log("인풋 place: ", place);
  console.log("선택 장소 from input: ", clickedPlace);
  return (
    <>
      <SearchForm onSubmit={onSubmitKeyword}>
        <CenterSearchBar>
          <Label>장소를 검색해 주세요</Label>
          <InputContainer>
            <Input
              type="text"
              onChange={(e) => setInputText(e.target.value)}
              onFocus={() => setSearchBarWidth("240px")}
              // onBlur={() => setSearchBarWidth("0")}
              onBlur={onBlurInputBox}
              value={inputText}
              placeholder="검색"
            />
            <BorderEffectBox fromLeft="-8px">
              <BorderEffect
                spanWidth={searchBarWidth}
                fromTop="0"
                bgColor="var(--color-green)"
              />
            </BorderEffectBox>
          </InputContainer>
          <Button onClick={onClickButton}>
            <i className="fas fa-search"></i>
          </Button>
        </CenterSearchBar>
      </SearchForm>
      <KakaoMapSearchForm place={place} setClickedPlace={setClickedPlace} />
    </>
  );
};

export default KakaoMapSearchFormInput;
