// 달력 스타일링 마무리

import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ImageSlider from "../components/body/imageSlider/ImageSlider";
import Dots from "../components/body/imageSlider/Dots";
import {
  PointLetter,
  BodyLayout,
  StyledButton,
} from "../components/body/mixin/Mixin";
import CustomCalerdar from "../components/body/calendar/CustomCalerdar";
import { Link } from "react-router-dom";

const MenuSection = styled.section`
  width: 60vw;
  height: 140vh;
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
  align-items: flex-start;
`;

const ArticleItem = styled.div`
  margin: calc(var(--margin-default) / 2) calc(var(--margin-default) / 4);
`;

const StyledButtonWidthMargin = styled(StyledButton)`
  margin-bottom: 20px;
`;

const MemberHome = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [idx, setIdx] = useState("first");
  // console.log("idx in member home", idx);
  // 날짜 선택하고 course로 넘어가게 하기
  // console.log("멤버홈", selectedDate);

  return (
    <>
      <Header />
      <BodyLayout padding="0">
        <ImageSlider idx={idx} setIdx={setIdx} />
        <Dots idx={idx} setIdx={setIdx} />
        <MenuSection>
          <Container>
            <SubHeading>
              <PointLetter>D</PointLetter>+ 36,500
            </SubHeading>
            <Article>
              {/* 시작일 받아서 반복문 */}
              <ArticleItem>
                36,600 기념일 <PointLetter>D-100</PointLetter> (2031/12/10)
              </ArticleItem>
              <ArticleItem>
                36,700 기념일 <PointLetter>D-200</PointLetter> (2032/03/20)
              </ArticleItem>
              <ArticleItem>
                36,800 기념일 <PointLetter>D-300</PointLetter> (2032/06/30)
              </ArticleItem>
              <ArticleItem>
                101주년 <PointLetter>D-365</PointLetter> (2032/09/05)
              </ArticleItem>
              <ArticleItem>
                36,900 기념일 <PointLetter>D-400</PointLetter> (2032/10/10)
              </ArticleItem>
              <ArticleItem>
                37,000 기념일 <PointLetter>D-500</PointLetter> (2032/01/10)
              </ArticleItem>
            </Article>
          </Container>
          <Container>
            <SubHeading>플랜</SubHeading>
            {/* 예약시에는(예약일) minDate 오늘, 가입시에는(시작일) maxDate 오늘 */}

            <CustomCalerdar setSelectedDate={setSelectedDate} />
            {selectedDate !== null ? (
              <Link to={`/planning/${selectedDate}`}>
                <StyledButtonWidthMargin>
                  {`${selectedDate.getFullYear()}/${
                    selectedDate.getMonth() + 1
                  }/${selectedDate.getDate()} 데이트 `}
                  예약하러 가기
                </StyledButtonWidthMargin>
              </Link>
            ) : (
              <Link to={`/planning/`}>
                <StyledButtonWidthMargin>예약하러 가기</StyledButtonWidthMargin>
              </Link>
            )}
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
