import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { PointLetter } from "../mixin/Mixin";

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
        : props.idx === "third"
        ? "-200%"
        : props.idx === "fourth"
        ? "-300%"
        : props.idx === "fifth"
        ? "-400%"
        : null;
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
`;

const LinkedContents = ({ idx = "first", setIdx = () => {} }) => {
  // const [idx, setIdx] = useState("first");
  const interval = useRef();
  // useCallback을 쓰는 이유???
  const changeIdx = useCallback(() => {
    return idx === "first"
      ? setIdx("second")
      : idx === "second"
      ? setIdx("third")
      : idx === "third"
      ? setIdx("fourth")
      : idx === "fourth"
      ? setIdx("fifth")
      : idx === "fifth"
      ? setIdx("first")
      : null;
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
            Plan.<PointLetter>D</PointLetter>와 함께하세요
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
          <h1>
            <PointLetter>전문가</PointLetter>를 통해 엄선된
          </h1>
          <h1>
            최적의 <PointLetter>데이트 코스</PointLetter> 안내
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
          <h1>
            볕 좋은 날 <PointLetter>한강</PointLetter>데이트,
          </h1>
          <h1>
            비 오는 날엔<PointLetter>실내</PointLetter> 데이트!
          </h1>
        </TextInImage>
      </div>

      <div>
        <ImageBox>
          <Image
            src={`${process.env.PUBLIC_URL}/images/img_main4.jpg`}
            alt="img_main4"
            // fromTop="-24vh"
          />
        </ImageBox>
        <TextInImage
        //  fromTop="-76vh"
        >
          <h1>
            볕 좋은 날 <PointLetter>한강</PointLetter>데이트,
          </h1>
          <h1>
            비 오는 날엔<PointLetter>실내</PointLetter> 데이트!
          </h1>
        </TextInImage>
      </div>
      <div>
        <ImageBox>
          <Image
            src={`${process.env.PUBLIC_URL}/images/img_main5.png`}
            alt="img_main5"
            // fromTop="-24vh"
          />
        </ImageBox>
        <TextInImage
        //  fromTop="-76vh"
        >
          <h1>
            볕 좋은 날 <PointLetter>한강</PointLetter>데이트,
          </h1>
          <h1>
            비 오는 날엔<PointLetter>실내</PointLetter> 데이트!
          </h1>
        </TextInImage>
      </div>
    </Container>
  );
};

export default LinkedContents;
