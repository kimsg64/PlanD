// 달력 스타일링 마무리

import React from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import BodyLayout from "../components/body/BodyLayout";
import Footer from "../components/footer/Footer";
import ImageSlider from "../components/body/imageSlider/ImageSlider";
import { YellowD } from "../components/body/mixin/Mixin";
import CustomCalerdar from "../components/body/calendar/CustomCalerdar";

const MenuSection = styled.section`
  width: 60vw;
  height: 100vh;
  margin: var(--margin-default);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 40%;
  min-width: 360px;
  height: 48%;
  margin: var(--margin-default);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-lightpink);
  border-radius: 8px;
`;

const SubHeading = styled.div`
  margin-top: calc(var(--margin-default)) 0;
  font-size: var(--font-size-title-normal);
`;

const Article = styled.article`
  width: 100%;
  height: calc(100% - var(--margin-default) - var(--font-size-title-normal));
  padding: var(--padding-default);
  font-size: var(--font-size-large);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CustomCalendarWrapper = styled(Article)`
  /* 캘릭더 틀 */
  .react-calendar {
    height: 372px;
    background-color: inherit;
    font-family: inherit;
    border: none;
  }

  /* 공통 */
  button[disabled],
  button:enabled:hover,
  button:enabled:focus {
    background-color: inherit;
  }
  button:not(.react-calendar__navigation__arrow) {
    font-family: inherit;
  }

  /* 네비게이션 */
  .react-calendar__navigation {
    margin: 0;
  }
  /* 화살표 버튼 */
  .react-calendar__navigation__arrow {
    font-size: var(--font-size-normal);
  }

  /* 요일 */
  abbr[title] {
    text-decoration: none;
  }
  /* 네비게이션 라벨 */
  .react-calendar__navigation__label__labelText {
    font-size: var(--font-size-normal);
  }

  /* 타일 버튼 */
  .react-calendar__tile {
    font-size: var(--font-size-small);
    padding: 1em 0.5em;
    font-family: inherit;
  }
  }
`;

const ArticleItem = styled.div`
  margin: calc(var(--margin-default) / 2) calc(var(--margin-default) / 4);
`;

const MemberHome = () => {
  return (
    <>
      <Header />
      <BodyLayout>
        <ImageSlider />
        <MenuSection>
          <Container>
            <SubHeading>
              <YellowD>D</YellowD>+ 36,500
            </SubHeading>
            <Article>
              {/* 시작일 받아서 반복문 */}
              <ArticleItem>36,600 기념일 D-100 (2031/12/10)</ArticleItem>
              <ArticleItem>36,700 기념일 D-200 (2032/03/20)</ArticleItem>
              <ArticleItem>36,800 기념일 D-300 (2032/06/30)</ArticleItem>
              <ArticleItem>101주년 D-365 (2032/09/05)</ArticleItem>
              <ArticleItem>36,900 기념일 D-400 (2032/10/10)</ArticleItem>
              {/* <ArticleItem>37,000 기념일 D-500 (2032/01/10)</ArticleItem> */}
            </Article>
          </Container>
          <Container>
            <SubHeading>플랜</SubHeading>
            {/* 예약시에는(예약일) minDate 오늘, 가입시에는(시작일) maxDate 오늘 */}
            <CustomCalendarWrapper>
              <CustomCalerdar />
            </CustomCalendarWrapper>
          </Container>
          <Container>
            <SubHeading>예약</SubHeading>
            <Article>
              <ArticleItem>
                다음 예약 요약해서 보여주고 클릭하면 넘어가기
              </ArticleItem>
            </Article>
          </Container>
          <Container>
            <SubHeading>이력</SubHeading>
            <Article></Article>
          </Container>
        </MenuSection>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default MemberHome;
