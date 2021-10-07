import React, { useEffect, useState } from "react";
import Form from "../mixin/Form";
import { Button, Input } from "../mixin/Mixin";
import KakaoMapSearchForm from "./KakaoMapSearchForm";

const KakaoMapSearchFormInput = () => {
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");
  const onSubmitKeyword = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };

  return (
    <>
      <Form onSubmit={onSubmitKeyword}>
        <Input
          type="text"
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
          placeholder="검색"
        />
        <Button>
          <i className="fas fa-search"></i>
        </Button>
      </Form>
      <KakaoMapSearchForm place={place} />
    </>
  );
};

export default KakaoMapSearchFormInput;
