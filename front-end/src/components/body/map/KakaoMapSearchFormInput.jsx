import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Form from "../mixin/Form";
import BorderEffect from "../mixin/BorderEffect";
import { Button, Input, SearchBar } from "../mixin/Mixin";
import KakaoMapSearchForm from "./KakaoMapSearchForm";
import BorderEffectBox from "../mixin/BorderEffectBox";

const SearchForm = styled(Form)`
  margin: 0;
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
  select {
    margin-right: var(--margin-default);
  }
`;

const InputContainer = styled.div`
  position: relative;
`;

const Label = styled.label`
  margin-right: calc(var(--margin-default));
`;

const KakaoMapSearchFormInput = ({
  clickedPlace = "",
  setClickedPlace = () => {},
  setClickedPlaceAddr = () => {},
  setClickedPlaceTel = () => {},
  setSelectedPcode = () => {},
  setSelectedSort = () => {},
}) => {
  // 입력된 단어
  const [inputText, setInputText] = useState("");
  // 검색으로 나온 장소
  const [place, setPlace] = useState("비트캠프");
  // 마우스로 최종 선택한 장소

  // 스타일
  const [searchBarWidth, setSearchBarWidth] = useState("0");
  // 마커 클릭시 useEffect
  useEffect(() => {
    setInputText(clickedPlace);
  }, [clickedPlace]);
  // 제출시... 왜인지 버튼 클릭을 막으면 서브밋도 같이 막힘;
  const onSubmitKeyword = (e) => {
    // console.log("서브밋 발생하냐?");
    e.preventDefault();
    setPlace(inputText);
  };
  const onClickButton = (e) => {
    e.preventDefault();
    setPlace(inputText);
  };
  // 인풋박스 스타일링
  const onBlurInputBox = () => {
    // console.log(inputText.length);
    return inputText.length > 0
      ? setSearchBarWidth(searchBarWidth)
      : setSearchBarWidth("0");
  };

  // console.log("pcode: ", selectedPcode);
  // console.log("솔트는?: ", selectedSort);
  // console.log("인풋 inputText: ", inputText);
  // console.log("인풋 place: ", place);
  // console.log("클릭된 장소: ", clickedPlace);
  return (
    <>
      <SearchForm onSubmit={onSubmitKeyword}>
        <CenterSearchBar>
          <Label>장소를 검색해 주세요</Label>
          <select onChange={(e) => setSelectedPcode(e.target.value)}>
            <option value="">순서</option>
            <option value="pcode1">장소1</option>
            <option value="pcode2">장소2</option>
            <option value="pcode3">장소3</option>
          </select>
          <select onChange={(e) => setSelectedSort(e.target.value)}>
            <option value="">분류</option>
            <option value="식당">식당</option>
            <option value="카페">카페</option>
            <option value="기타">기타</option>
          </select>
          <InputContainer>
            <Input
              type="text"
              onChange={(e) => setInputText(e.target.value)}
              onFocus={() => setSearchBarWidth("240px")}
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
      <KakaoMapSearchForm
        place={place}
        setClickedPlace={setClickedPlace}
        setClickedPlaceAddr={setClickedPlaceAddr}
        setClickedPlaceTel={setClickedPlaceTel}
      />
    </>
  );
};

export default KakaoMapSearchFormInput;
