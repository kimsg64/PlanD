import React from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import BodyLayout from "../components/Body/BodyLayout";
import Footer from "../components/Footer/Footer";
import ImageSlider from "../components/Body/ImageSlider";
import ImageSliderContents from "../components/Body/ImageSliderContents";

const StepsContainer = styled.section`
  width: 72vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const StepWapper = styled.article`
  width: 80%;
  height: 32vh;
  margin: calc(var(--margin-default) * 2);
  display: flex;
`;

const StepCircle = styled.div`
  width: 32vh;
  height: 32vh;
  border-radius: 50%;
  background-color: var(--concept-color6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StepTextContainer = styled.div`
  width: calc(100% - 32vh);
  height: 100%;
  margin: 0 var(--margin-default);
  padding: calc(var(--padding-default) * 3);
  display: flex;
  flex-direction: column;
`;

const StepTextTitle = styled.div`
  font-size: var(--font-size-title);
`;

const StepTextContent = styled.div`
  padding-top: var(--padding-default);
  font-size: var(--font-size-default);
`;

const Home = () => {
  return (
    <>
      <Header />
      <BodyLayout>
        <ImageSlider />
        <StepsContainer>
          <StepWapper>
            <StepCircle>그림</StepCircle>
            <StepTextContainer>
              <StepTextTitle>STEP 1 회원가입</StepTextTitle>
              <StepTextContent>회원가입 안하면 못 씀 ㅅㄱ</StepTextContent>
            </StepTextContainer>
          </StepWapper>
          <StepWapper>
            <StepTextContainer>
              <StepTextTitle>STEP 2 조건 입력 </StepTextTitle>
              <StepTextContent>계획을 짜 보아라</StepTextContent>
            </StepTextContainer>
            <StepCircle>그림</StepCircle>
          </StepWapper>
          <StepWapper>
            <StepCircle>그림</StepCircle>
            <StepTextContainer>
              <StepTextTitle>STEP 3 코스 추천</StepTextTitle>
              <StepTextContent>와! 정말 좋은 코스입니다.</StepTextContent>
            </StepTextContainer>
          </StepWapper>
          <StepWapper>
            <StepTextContainer>
              <StepTextTitle>STEP 4 후기 작성</StepTextTitle>
              <StepTextContent>
                일주일 내에 후기를 작성해야만 해
              </StepTextContent>
            </StepTextContainer>
            <StepCircle>그림</StepCircle>
          </StepWapper>
        </StepsContainer>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default Home;
