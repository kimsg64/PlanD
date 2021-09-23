import React, { useRef } from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import BodyLayout from "../components/body/BodyLayout";
import Footer from "../components/footer/Footer";

// 여기는 리뷰 상세 페이지로 활용하기

const ReviewsContainer = styled.ul`
  width: 80vw;
  height: 80vh;
  margin-top: var(--margin-header-to-body);
  display: flex;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap;
  user-select: none;
  transition: all 0.2s;
  will-change: transform;
  perspective: 800px;
  /* background: -webkit-linear-gradient(
    left,
    rgba(0, 0, 0, 0.65) 0%,
    rgba(0, 0, 0, 0) 20%,
    rgba(0, 0, 0, 0) 80%,
    rgba(0, 0, 0, 0.65) 100%
  ); */
`;

const ReviewItem = styled.li`
  width: auto;
  height: 40%;
  margin: 0 calc(var(--margin-default) / 1.4);

  &:nth-child(even) {
    transform: scaleX(1.3) rotateY(10deg);
  }
  &:nth-child(odd) {
    transform: scaleX(1.3) rotateY(-10deg);
  }

  /* 체크용 > 삭제예정 */
  border: 1px solid black;
  background-color: var(--concept-color4);
`;

const ProfileBox = styled.div`
  width: 200px;
  height: 200px;
`;

const Reviews = () => {
  const isDown = useRef(false);
  const sliderRef = useRef();
  let startX;
  let scrollL;

  // 클릭 & 드래그 이벤트
  const startDraging = (e) => {
    // console.log("start~!");
    isDown.current = true;
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollL = sliderRef.current.scrollLeft;
  };

  const slideReviews = (e) => {
    // console.log("moving!", isDown);
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollL - walk;
  };

  const stopDraging = () => {
    // console.log("stop...", isDown);
    isDown.current = false;
  };

  const showDetailItem = () => {};

  return (
    <>
      <Header />
      <BodyLayout>
        <ReviewsContainer
          ref={sliderRef}
          onMouseDown={startDraging}
          onMouseMove={slideReviews}
          onMouseUp={stopDraging}
        >
          <ReviewItem onClick={showDetailItem}>
            <ProfileBox>1</ProfileBox>
          </ReviewItem>
          <ReviewItem onClick={showDetailItem}>
            <ProfileBox>1</ProfileBox>
          </ReviewItem>
          <ReviewItem onClick={showDetailItem}>
            <ProfileBox>1</ProfileBox>
          </ReviewItem>
          <ReviewItem onClick={showDetailItem}>
            <ProfileBox>1</ProfileBox>
          </ReviewItem>
          <ReviewItem onClick={showDetailItem}>
            <ProfileBox>1</ProfileBox>
          </ReviewItem>
          <ReviewItem onClick={showDetailItem}>
            <ProfileBox>1</ProfileBox>
          </ReviewItem>
          <ReviewItem onClick={showDetailItem}>
            <ProfileBox>1</ProfileBox>
          </ReviewItem>
          <ReviewItem onClick={showDetailItem}>
            <ProfileBox>1</ProfileBox>
          </ReviewItem>
          <ReviewItem onClick={showDetailItem}>
            <ProfileBox>1</ProfileBox>
          </ReviewItem>
          <ReviewItem onClick={showDetailItem}>
            <ProfileBox>1</ProfileBox>
          </ReviewItem>
          <ReviewItem onClick={showDetailItem}>
            <ProfileBox>1</ProfileBox>
          </ReviewItem>
          <ReviewItem onClick={showDetailItem}>
            <ProfileBox>1</ProfileBox>
          </ReviewItem>
          <ReviewItem onClick={showDetailItem}>
            <ProfileBox>1</ProfileBox>
          </ReviewItem>
          <ReviewItem onClick={showDetailItem}>
            <ProfileBox>1</ProfileBox>
          </ReviewItem>
        </ReviewsContainer>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default Reviews;
