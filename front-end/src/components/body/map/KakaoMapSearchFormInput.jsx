import React, { useState } from "react";
import Form from "../mixin/Form";
import BorderEffect from "../mixin/BorderEffect";
import { Button, Input, SearchBar } from "../mixin/Mixin";
import KakaoMapSearchForm from "./KakaoMapSearchForm";

const KakaoMapSearchFormInput = () => {
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("비트캠프 신촌");
  const [searchBarWidth, setSearchBarWidth] = useState("0");
  const onSubmitKeyword = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };

  return (
    <>
      <Form onSubmit={onSubmitKeyword}>
        <SearchBar>
          <label>장소를 검색해 주세요</label>
          <Input
            type="text"
            onChange={(e) => setInputText(e.target.value)}
            onFocus={() => setSearchBarWidth("400px")}
            onBlur={() => setSearchBarWidth("0")}
            value={inputText}
            placeholder="검색"
          />
          <BorderEffect spanWidth={searchBarWidth} fromTop="" fromLeft="" />
          <Button>
            <i className="fas fa-search"></i>
          </Button>
        </SearchBar>
      </Form>
      <KakaoMapSearchForm place={place} />
    </>
  );
};

export default KakaoMapSearchFormInput;
