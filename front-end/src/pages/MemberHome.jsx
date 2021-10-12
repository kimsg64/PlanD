// 달력 스타일링 마무리

import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ImageSlider from "../components/body/imageSlider/ImageSlider";
import Dots from "../components/body/imageSlider/Dots";
import { PointLetter, BodyLayout } from "../components/body/mixin/Mixin";
import CustomCalerdar from "../components/body/calendar/CustomCalerdar";
import { Link } from "react-router-dom";

const MenuSection = styled.section`
  width: 60vw;
  height: 132vh;
  margin: var(--margin-default);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 40%;
  min-width: 360px;
  height: 40%;
  margin: var(--margin-default);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-bg);
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
  font-size: var(--font-size-title-small);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArticleItem = styled.div`
  margin: calc(var(--margin-default) / 2) calc(var(--margin-default) / 4);
`;

const MemberHome = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  // 날짜 선택하고 course로 넘어가게 하기
  console.log("멤버홈", selectedDate);

  return (
    <>
      <Header />
      <BodyLayout padding="0">
        <ImageSlider />
        <Dots />
        <MenuSection>
          <Container>
            <SubHeading>
              <PointLetter>D</PointLetter>+ 36,500
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

            <CustomCalerdar setSelectedDate={setSelectedDate} />
            <Link to={`/planning/${selectedDate}`}>예약하러 가기</Link>
          </Container>
          <Container>
            <SubHeading>예약</SubHeading>
            <Article>
              <ArticleItem>
                잠실역 데이트(2031/12/10) 14:00~18:00(코스 요약 추가)
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
