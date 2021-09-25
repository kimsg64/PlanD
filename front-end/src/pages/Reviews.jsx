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
  overflow: hidden;
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
  min-height: 16%;

  position: absolute;
  top: 280px;
  left: 688px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-black);
  transition-delay: 0.2s;
  transition-duration: 0.4s;

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
  &.selected {
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
    height: 80px;
  }
`;

const ReviewTitle = styled.p`
  font-size: var(--font-size-tiny);
`;

const ReviewContent = styled.p`
  font-size: var(--font-size-3d);
  transition-duration: 0.5s;
  overflow: hidden;
  /* 가운데 요소만 높이 픽셀로 지정해서 내용 보여주기 */
  /* 클릭한 요소 가운데로 옮기기 */
  height: 0;
  /* height: 100px; */
`;

const Reviews = () => {
  const [deg, setDeg] = useState(0);
  // 링 포스터 셋업
  const testReivew = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const posterNum = testReivew.length;
  const posterAngle = 360 / posterNum;
  const ringRef = useRef();
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
          <ReviewsContainer ref={ringRef} deg={deg}>
            <div>
              {testReivew.map((reviewNum) => {
                return (
                  <ReviewItem
                    yRotate={posterAngle * reviewNum}
                    className={
                      posterAngle * Math.abs(reviewNum - posterNum) ===
                      deg % 360
                        ? "selected"
                        : ""
                    }
                  >
                    <ProfileBox>
                      <img src="images/temp2.jpg" alt="temp" />
                    </ProfileBox>
                    <ReviewTitle>베스트 리뷰의 제목입니다.</ReviewTitle>
                    <ReviewContent>
                      그리고 이것은 내용입니다. 내용이 길어지면 또 할게 많은데
                      어휴 이걸 또 어쩐담
                    </ReviewContent>
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
