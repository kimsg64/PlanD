import React, { useState } from "react";
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
      <form onSubmit={onSubmitKeyword}>
        <input
          type="text"
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        />
        <input type="submit" value="검색" />
      </form>
      <KakaoMapSearchForm place={place} />
    </>
  );
};

export default KakaoMapSearchFormInput;
