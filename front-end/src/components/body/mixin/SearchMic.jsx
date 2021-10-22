import React, { useEffect } from "react";
import styled from "styled-components";
import { useSpeechRecognition } from "react-speech-kit";
import { Button, ToolTipBox, ToolTip } from "./Mixin";

const SearchMicWrap = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -106px;
  left: 332px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: var(--color-light-green);
  }
`;

const SearchMic = ({ setKeyword = () => {}, setIsListening = () => {} }) => {
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setKeyword(result);
    },
  });
  useEffect(() => {
    listening ? setIsListening(true) : setIsListening(false);
  }, [listening]);

  return (
    <SearchMicWrap
      className="globalIconBtn"
      onMouseDown={listen}
      onMouseUp={stop}
    >
      <i className="fas fa-microphone"></i>
      <ToolTipBox
        display={listening ? "block" : "none"}
        width="120px"
        fromTop="-48px"
        fromLeft="-36px"
      >
        {listening ? "음성 인식 중" : null}
        <ToolTip display={listening ? "block" : "none"} />
      </ToolTipBox>
    </SearchMicWrap>
  );
};

export default SearchMic;
