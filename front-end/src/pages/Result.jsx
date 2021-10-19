import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Button, BodyLayout } from "../components/body/mixin/Mixin";
import PageSlider from "../components/body/mixin/PageSlider";
import CustomTMap from "../components/body/map/CustomTMap";
import GoogleMapSettings from "../components/body/map/GoogleMapSettings";

const Slider = styled.div`
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
`;

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
`;

const DetermineButtons = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
`;

// 코스 정보 받아와서 > 장소1, 장소2, 장소3 주소를 티맵으로 보내서 찍기
const Result = () => {
  const [idx, setIdx] = useState(0);
  const [startPoint, setStartPoint] = useState(
    "서울특별시 마포구 서교동 332 33 1층"
  ); // 부탄츄
  const [wayPoint, setWayPoint] = useState(
    "서울특별시 마포구 서교동 홍익로6길 15"
  ); // 설빙
  const [endPoint, setEndPoint] = useState(
    "서울특별시 마포구 서교동 와우산로21길 31-10"
  ); // 히어로 보드게임 카페

  const onClickNext = () => {
    setIdx((prevIdx) => prevIdx + 1);
  };
  const onClickPrev = () => {
    setIdx((prevIdx) => prevIdx - 1);
  };
  const coords = GoogleMapSettings({ startPoint, wayPoint, endPoint });
  // console.log("coords: ", coords);
  // console.log("coords[0]: ", coords[0]);
  // console.log("coords[1]: ", coords[1]);
  // console.log("coords[2]: ", coords[2]);

  return (
    <>
      <Header />
      <BodyLayout>
        {/* 요약 */}
        <div>
          <div>잠실역 데이트</div>
          <div>10:00~14:00</div>
          <div>잠실역</div>
        </div>
        {coords.length === 3 ? (
          <CustomTMap
            startPoint={coords[0]}
            wayPoint={coords[1]}
            endPoint={coords[2]}
          />
        ) : null}
        <Slider>
          <PageSlider idx={idx} rate={-25}>
            <Container>
              <div>코스 요약(장소 1, 2, 3)</div>

              <div>날씨 소개</div>
              <div>추천 코디</div>
            </Container>
            <Container>
              <div>장소1 소개</div>
            </Container>
            <Container>
              <div>장소2 소개</div>
            </Container>
            <Container>
              <div>장소3 소개</div>
            </Container>
          </PageSlider>
        </Slider>
        {idx === 0 ? (
          <ButtonContainer>
            <Button onClick={onClickNext}>다음</Button>
          </ButtonContainer>
        ) : idx === 1 ? (
          <ButtonContainer>
            <Button onClick={onClickPrev}>이전</Button>
            <Button onClick={onClickNext}>다음</Button>
          </ButtonContainer>
        ) : idx === 2 ? (
          <ButtonContainer>
            <Button onClick={onClickPrev}>이전</Button>
            <Button onClick={onClickNext}>다음</Button>
          </ButtonContainer>
        ) : idx === 3 ? (
          <ButtonContainer>
            <Button onClick={onClickPrev}>이전</Button>
          </ButtonContainer>
        ) : null}

        <DetermineButtons>
          <Link to={"/planning"}>
            <Button>다시 선택하기</Button>
          </Link>
          <Button>휴대폰 알람 설정하기</Button>
        </DetermineButtons>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default Result;
