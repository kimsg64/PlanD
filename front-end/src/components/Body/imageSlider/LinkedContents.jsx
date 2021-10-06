import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { YellowD } from "../mixin/Mixin";

const Container = styled.div`
  width: auto;
  display: flex;
  transition-duration: 0.7s;
  transition-timing-function: cubic-bezier(0.57, 0.01, 0.36, 0.99);
  transform: translateX(
    ${(props) => {
      /* console.log(props.idx); */
      return props.idx === "first"
        ? "0"
        : props.idx === "second"
        ? "-100%"
        : "-200%";
    }}
  );
`;

const ImageBox = styled.div`
  width: 100vw;
`;

const Image = styled.img`
  width: 100%;
  position: relative;
  /* 이미지 위치 조절 */
  /* top: ${(props) => props.fromTop}; */
  filter: brightness(0.7);
`;

const TextInImage = styled.div`
  width: 100%;
  position: relative;
  top: ${(props) => props.fromTop || "-100vh"};
  z-index: 3;
  text-align: center;
  h1 {
    margin-bottom: calc(var(--margin-default) / 2);
    color: white;
    font-size: var(--font-size-title-large);
    font-weight: 800;
  }
  p {
    font-size: var(--font-size-title-small);
    color: white;
    line-height: 2;
  }
  span {
    color: var(--color-yellow);
  }
`;

const LinkedContents = () => {
  const [idx, setIdx] = useState("first");
  const interval = useRef();
  // useCallback을 쓰는 이유???
  const changeIdx = useCallback(() => {
    idx === "first"
      ? setIdx("second")
      : idx === "second"
      ? setIdx("third")
      : setIdx("first");
    // console.log(idx);
  }, [idx]);
  useEffect(() => {
    interval.current = setInterval(changeIdx, 7000);
    return () => {
      clearInterval(interval.current);
    };
  }, [idx, changeIdx]);

  return (
    <Container onClick={changeIdx} idx={idx}>
      <div>
        <ImageBox>
          <Image
            src={`${process.env.PUBLIC_URL}/images/img_main1.jpg`}
            alt="img_main1"
          />
        </ImageBox>
        <TextInImage>
          <h1>데이트의 시작-</h1>
          <h1>
            Plan.<YellowD>D</YellowD>와 함께하세요
          </h1>
        </TextInImage>
      </div>
      <div>
        <ImageBox>
          <Image
            src={`${process.env.PUBLIC_URL}/images/img_main2.jpg`}
            alt="img_main2"
            // fromTop="-16vh"
          />
        </ImageBox>
        <TextInImage>
          <h1>5개의 역에서 엄선</h1>
          <h1>
            최적의 <YellowD>데이트 코스</YellowD> 안내
          </h1>
        </TextInImage>
      </div>
      <div>
        <ImageBox>
          <Image
            src={`${process.env.PUBLIC_URL}/images/img_main3.jpg`}
            alt="img_main3"
            // fromTop="-24vh"
          />
        </ImageBox>
        <TextInImage
        //  fromTop="-76vh"
        >
          <h1>비가 오는 날에도 오붓하게</h1>
          <h1>
            <YellowD>실내</YellowD> 데이트!
          </h1>
        </TextInImage>
      </div>
    </Container>
  );
};

export default LinkedContents;
