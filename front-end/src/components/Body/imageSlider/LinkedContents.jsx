import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ContentsBox1 from "./sliderSources/ContentsBox1";
import ContentsBox2 from "./sliderSources/ContentsBox2";
import ContentsBox3 from "./sliderSources/ContentsBox3";

const Container = styled.div`
  width: auto;
  display: flex;
  transition-duration: 0.7s;
  transition-timing-function: cubic-bezier(0.57, 0.01, 0.36, 0.99);
  transform: translateX(
    ${(props) => {
      console.log(props.idx);
      return props.idx === "first"
        ? "0"
        : props.idx === "second"
        ? "-100%"
        : "-200%";
    }}
  );
`;

const LinkedContents = () => {
  const [idx, setIdx] = useState("first");
  const interval = useRef();
  useEffect(() => {
    interval.current = setInterval(changeIdx, 5000);
    return () => {
      clearInterval(interval.current);
    };
  }, [idx]);

  const changeIdx = () => {
    idx === "first"
      ? setIdx("second")
      : idx === "second"
      ? setIdx("third")
      : setIdx("first");
    // console.log(idx);
  };
  return (
    <Container onClick={changeIdx} idx={idx}>
      <ContentsBox1 />
      <ContentsBox2 />
      <ContentsBox3 />
    </Container>
  );
};

export default LinkedContents;
