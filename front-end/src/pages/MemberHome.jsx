import React from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import BodyLayout from "../components/body/BodyLayout";
import Footer from "../components/footer/Footer";
import ImageSlider from "../components/body/ImageSlider";

const MenuSection = styled.section`
  width: 60vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: var(--margin-default);
`;

const Container = styled.div`
  width: 40%;
  height: 40%;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin: var(--margin-default);
`;

const TimerContainer = styled(Container)`
  font-size: var(--font-size-big-title);
`;

const CalendarContainer = styled(Container)``;
const NextPlanContainer = styled(Container)``;
const ReviewsContainer = styled(Container)``;

const MemberHome = () => {
  return (
    <>
      <Header />
      <BodyLayout>
        <ImageSlider />
        {/* 아래에 일정/달력/... */}
        <MenuSection>
          <TimerContainer>312일</TimerContainer>
          <CalendarContainer>
            <i class="far fa-calendar-alt"></i>
          </CalendarContainer>
          <NextPlanContainer>다음</NextPlanContainer>
          <ReviewsContainer>리뷰들</ReviewsContainer>
        </MenuSection>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default MemberHome;
