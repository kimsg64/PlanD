import React, { useState } from "react";
import styled from "styled-components";
import Form from "../mixin/Form";
import BorderEffect from "../mixin/BorderEffect";
import { Button, Input, SearchBar } from "../mixin/Mixin";
import KakaoMapSearchForm from "./KakaoMapSearchForm";
import BorderEffectBox from "../mixin/BorderEffectBox";

const SearchForm = styled(Form)`
  & > div {
    padding: 0 0 0 calc(var(--padding-default) * 4);
    background-color: white;
    box-shadow: none;
  }
`;

const CenterSearchBar = styled(SearchBar)`
  width: 600px;
  justify-content: flex-start;
`;

const InputContainer = styled.div`
  position: relative;
`;

const Label = styled.label`
  margin-right: calc(var(--margin-default) * 2);
`;

const KakaoMapSearchFormInput = () => {
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("송파구청 정문");
  const [searchBarWidth, setSearchBarWidth] = useState("0");
  const onSubmitKeyword = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };

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
              onBlur={() => setSearchBarWidth("0")}
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
          <Button>
            <i className="fas fa-search"></i>
          </Button>
        </CenterSearchBar>
      </SearchForm>
      <KakaoMapSearchForm place={place} />
    </>
  );
};

export default KakaoMapSearchFormInput;
