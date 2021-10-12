import React, { useRef } from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import { BodyLayout } from "../components/body/mixin/Mixin";
import Footer from "../components/footer/Footer";
import Stars from "../components/body/mixin/Stars";
import ReviewsData from "../server/ReviewsData";

// 여기는 리뷰 상세 페이지로 활용하기

const ReviewsContainer = styled.ul`
  width: 80vw;
  margin-top: var(--margin-header-to-body);
  display: flex;
  align-items: center;
  overflow-x: hidden;
  white-space: nowrap;
  user-select: none;
  transition: all 0.2s;
  will-change: transform;
  /* perspective: 800px; */
  /* background: -webkit-linear-gradient(
    left,
    rgba(0, 0, 0, 0.65) 0%,
    rgba(0, 0, 0, 0) 20%,
    rgba(0, 0, 0, 0) 80%,
    rgba(0, 0, 0, 0.65) 100%
  ); */
`;

const ReviewItem = styled.li`
  height: 560px;
  margin: 0 calc(var(--margin-default) / 1.4);
  padding: var(--padding-default);
  border-radius: 8px;

  &:nth-child(even) {
    /* transform: scaleX(1.16) rotateY(10deg); */
  }
  &:nth-child(odd) {
    /* transform: scaleX(1.16) rotateY(-10deg); */
  }

  /* 체크용 > 색깔 변경예정 */
  border: 2px solid var(--color-brown);
`;

const ImageBox = styled.div`
  width: 400px;
  height: 240px;
  margin: calc(var(--margin-default) / 2) 0;
  overflow: hidden;
  background-color: var(--color-brown);
  img {
    width: 100%;
  }
`;

const TextBox = styled.div`
  width: 100%;
  height: 112px;
  margin-top: calc(var(--margin-default) / 2);
  padding: var(--padding-default);
  border: 2px solid var(--color-brown);
  border-radius: 8px;
  font-size: var(--font-size-normal);
  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    white-space: pre-wrap;
    text-overflow: ellipsis;
  }
  /* after로 말풍선 툴팁 주기? */
`;

const ProfileBox = styled.div`
  width: 400px;
  height: 100px;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  width: 60px;
  height: 60px;
  margin: calc(var(--margin-default) / 2) calc(var(--margin-default) / 4);
  overflow: hidden;
  border-radius: 50%;
  background-color: var(--color-bg);
  img {
    width: 100%;
  }
`;

const UserInfo = styled.div`
  width: calc(100% - 60px);
`;

const NameAndStar = styled.div`
  display: flex;
`;

const UserName = styled.div`
  width: 48%;
  min-width: 120px;
  font-size: var(--font-size-large);
`;

const UserHistory = styled.div`
  font-size: var(--font-size-normal);
`;

const Reviews = () => {
  // 슬라이더 이펙트
  const isDown = useRef(false);
  const sliderRef = useRef();
  // 리뷰 데이터
  const reviewsData = ReviewsData();
  const reviewsList = reviewsData[2];
  console.log(reviewsList);
  // 슬라이더 이펙트 기준
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
      <BodyLayout padding="0">
        <ReviewsContainer
          ref={sliderRef}
          onMouseDown={startDraging}
          onMouseMove={slideReviews}
          onMouseUp={stopDraging}
        >
          <ReviewItem onClick={showDetailItem}>
            <div>코스명</div>
            <ImageBox>
              <img
                src={`${process.env.PUBLIC_URL}/images/reviews/review_sample.jpg`}
                alt="cafe_review"
              />
            </ImageBox>
            <TextBox>
              <p>
                제가 LA에 있을때는 말이죠 정말 제가 꿈에 무대인 메이저리그로
                진출해서 가는 식당마다 싸인해달라 기자들은 항상 붙어다니며
                취재하고 제가 그 머~ 어~ 대통령이 된 기분이었어요
              </p>
            </TextBox>
            <ProfileBox>
              <Icon>
                <img
                  src={`${process.env.PUBLIC_URL}/images/users/user1.png`}
                  alt="user_icon"
                />
              </Icon>
              <UserInfo>
                <NameAndStar>
                  <UserName>찬호팍</UserName>
                  <Stars />
                </NameAndStar>
                <UserHistory>코스A, 1992.09.12 방문</UserHistory>
              </UserInfo>
            </ProfileBox>
          </ReviewItem>

          {reviewsList.map((review) => {
            return (
              <ReviewItem onClick={showDetailItem}>
                <div>코스명</div>
                <ImageBox>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/reviews/review_sample.jpg`}
                    alt="cafe_review"
                  />
                </ImageBox>
                <TextBox>
                  <p>{review.info}</p>
                </TextBox>
                <ProfileBox>
                  <Icon>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/users/user1.png`}
                      alt="user_icon"
                    />
                  </Icon>
                  <UserInfo>
                    <NameAndStar>
                      <UserName>{review.userid}</UserName>
                      <Stars score={review.score} />
                    </NameAndStar>
                    <UserHistory>코스A, 1992.09.12 방문</UserHistory>
                  </UserInfo>
                </ProfileBox>
              </ReviewItem>
            );
          })}
        </ReviewsContainer>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default Reviews;
