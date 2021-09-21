import React, { useRef, useState } from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import BodyLayout from "../components/body/BodyLayout";
import Footer from "../components/footer/Footer";

const Stage = styled.div`
  width: auto;
  height: auto;
  margin-top: var(--margin-header-to-body);
  perspective: 800px;
`;

const ReviewsContainer = styled.ul`
  width: 80vw;
  height: 80vh;
  align-items: center;
  will-change: transform;
  transform-style: preserve-3d;
  transition-duration: 1s;
  transform: rotateY(
    ${(props) => {
      return props.deg + "deg";
    }}
  );
`;

const ReviewItem = styled.li`
  width: 160px;
  height: 24%;
  position: absolute;
  top: 280px;
  left: 688px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-black);

  /* for ring poster */
  opacity: 0.7;
  transform: rotateY(
      ${(props) => {
        return props.yRotate + "deg";
      }}
    )
    translateZ(560px);
  :hover {
    cursor: pointer;
    opacity: 1;
  }
  p {
    margin: 4%;
    color: var(--color-yellow);
  }
  &.opaque {
    opacity: 1;
  }
`;

const ProfileBox = styled.div`
  width: 80%;
  height: 40%;
  margin: 4% 0;
  display: flex;
  justify-content: center;
  img {
    height: 100%;
  }
`;

const Reviews = () => {
  const [deg, setDeg] = useState(0);
  // 링 포스터 셋업
  const testReivew = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const posterNum = testReivew.length;
  const posterAngle = 360 / posterNum;
  const sliderRef = useRef();
  // let deg = 0;

  // 링 포스터 이동
  const spinRing = () => {
    // deg += posterAngle;
    setDeg((prevDeg) => prevDeg + posterAngle);
    console.log("deg 체크!", deg % 360);
  };

  return (
    <>
      <Header />
      <BodyLayout>
        <Stage>
          <ReviewsContainer ref={sliderRef} deg={deg}>
            <div>
              {testReivew.map((reviewNum) => {
                return (
                  <ReviewItem
                    yRotate={posterAngle * reviewNum}
                    className={
                      posterAngle * Math.abs(reviewNum - posterNum) ===
                      deg % 360
                        ? "opaque"
                        : ""
                    }
                  >
                    <ProfileBox>
                      <img src="images/temp2.jpg" />
                    </ProfileBox>
                    <p>
                      {reviewNum}. 베스트 리뷰들입니다. 무슨 내용을 넣을까요?
                    </p>
                  </ReviewItem>
                );
              })}
            </div>
          </ReviewsContainer>
        </Stage>
        <button onClick={spinRing}>테스트 버튼</button>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default Reviews;
