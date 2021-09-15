import React from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import BodyLayout from "../components/Body/BodyLayout";
import Footer from "../components/Footer/Footer";
import ImageSlider from "../components/Body/ImageSlider";

const TextContainer = styled.section`
  width: 56vw;
  height: 32vh;
  margin: var(--margin-default) 0;
  background-color: var(--concept-color6);
  display: flex;
  align-items: center;
`;

const TitleContainer = styled.div`
  width: 28%;
`;

const ContentContainer = styled.div`
  width: 72%;
`;

const About = () => {
  return (
    <>
      <Header />
      <BodyLayout>
        <ImageSlider />
        <TextContainer>
          <TitleContainer>엄선된 인기 코스를 추천합니다</TitleContainer>
          <ContentContainer>
            선발 과정은 우리가 적당히 고르는 것입니다.
          </ContentContainer>
        </TextContainer>
        <TextContainer>
          <TitleContainer>
            코로나/날씨/미세먼지를 고려하여 최적의 장소를 선별합니다.
          </TitleContainer>
          <ContentContainer>이건 진짜입니다.</ContentContainer>
        </TextContainer>
        <TextContainer>
          <TitleContainer>엄선된 인기 코스를 추천합니다</TitleContainer>
          <ContentContainer>
            선발 과정은 우리가 적당히 고르는 것입니다.
          </ContentContainer>
        </TextContainer>
        <TextContainer>
          <TitleContainer>엄선된 인기 코스를 추천합니다</TitleContainer>
          <ContentContainer>
            선발 과정은 우리가 적당히 고르는 것입니다.
          </ContentContainer>
        </TextContainer>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default About;
