import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import BodyLayout from "../components/body/BodyLayout";
import Footer from "../components/footer/Footer";
import Users from "../server/Users";
import { Link } from "react-router-dom";

const ReviewsContainer = styled.ul`
  width: 80vw;
  height: 80vh;
  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap;
  user-select: none;
`;

const ReviewItem = styled.li`
  width: auto;
  height: 100%;
  margin: 0 var(--margin-default);

  /* 체크용 > 삭제 4번 */
  background-color: var(--concept-color4);
`;

const ProfileBox = styled.div`
  width: 200px;
  height: 200px;
`;

const Reviews = () => {
  const UsersData = Users;
  const [isDown, setIsDown] = useState(false);
  const sliderRef = useRef();
  let startX;
  let scrollL;

  // useEffect로 핸들링해야 지속적으로 움직일 수 있을 듯
  useEffect(() => {
    setIsDown(true);
  }, [scrollL]);

  const startDraging = (e) => {
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollL = sliderRef.current.scrollLeft;
  };

  const slideReviews = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollL - walk;
  };

  const stopDraging = () => {
    setIsDown(false);
  };

  return (
    <>
      <Header />
      <BodyLayout>
        <ReviewsContainer
          ref={sliderRef}
          onMouseDown={startDraging}
          onMouseMove={slideReviews}
          onMouseLeave={stopDraging}
          onMouseUp={stopDraging}
        >
          <ReviewItem>
            <ProfileBox>{UsersData}</ProfileBox>
          </ReviewItem>
          <ReviewItem>
            <ProfileBox>
              <a href="http://localhost:9090/wherewego">testing connect</a>
            </ProfileBox>
          </ReviewItem>
          <ReviewItem>
            <ProfileBox>
              <Link to={"/users"}>테스트용</Link>
            </ProfileBox>
          </ReviewItem>
          <ReviewItem>
            <ProfileBox>3</ProfileBox>
          </ReviewItem>
          <ReviewItem>
            <ProfileBox>4</ProfileBox>
          </ReviewItem>
          <ReviewItem>
            <ProfileBox>5</ProfileBox>
          </ReviewItem>
          <ReviewItem>
            <ProfileBox>6</ProfileBox>
          </ReviewItem>
          <ReviewItem>
            <ProfileBox>7</ProfileBox>
          </ReviewItem>
          <ReviewItem>
            <ProfileBox>8</ProfileBox>
          </ReviewItem>
          <ReviewItem>
            <ProfileBox>9</ProfileBox>
          </ReviewItem>
          <ReviewItem>
            <ProfileBox>10</ProfileBox>
          </ReviewItem>
        </ReviewsContainer>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default Reviews;
