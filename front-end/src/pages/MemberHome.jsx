import React from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import BodyLayout from "../components/body/BodyLayout";
import Footer from "../components/footer/Footer";
import ImageSlider from "../components/body/imageSlider/ImageSlider";

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
  margin: var(--margin-default);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size-huge);
`;

const TimerContainer = styled(Container)`
  background-color: var(--color-lightpink);
`;

const CalendarContainer = styled(Container)`
  background-color: var(--color-pink);
`;
const NextPlanContainer = styled(Container)`
  background-color: var(--color-yellow);
`;
const ReviewsContainer = styled(Container)`
  background-color: var(--color-brown);
`;

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
            <i className="far fa-calendar-alt"></i>
          </CalendarContainer>
          <NextPlanContainer>next</NextPlanContainer>
          <ReviewsContainer>reviews</ReviewsContainer>
        </MenuSection>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default MemberHome;
