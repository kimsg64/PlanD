import React, { useEffect, useState } from "react";
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
const Result = ({ location }) => {
  const [idx, setIdx] = useState(0);
  const [startPoint, setStartPoint] = useState();
  // "서울특별시 마포구 서교동 332 33 1층"
  const [wayPoint, setWayPoint] = useState();
  // "서울특별시 마포구 서교동 홍익로6길 15"
  const [endPoint, setEndPoint] = useState();
  // "서울특별시 마포구 서교동 와우산로21길 31-10"
  // const [startCoord, setStartCoord] = useState(null);
  // const [wayCoord, setWayCoord] = useState(null);
  // const [endCoord, setEndCoord] = useState(null);

  const courseResults = location.props.result;
  console.log(courseResults);
  useEffect(() => {
    // console.log("코스 검색을 통해 들어오면 마운트, 각 포인트 설정");
    // console.log(courseResults[0]?.addr1);
    // console.log(courseResults[0]?.addr2);
    // console.log(courseResults[0]?.addr3);
    setStartPoint(courseResults[0]?.addr1);
    setWayPoint(courseResults[0]?.addr2);
    setEndPoint(courseResults[0]?.addr3);
  }, [courseResults]);

  // console.log("startPoint: ", startPoint);
  // console.log("wayPoint: ", wayPoint);
  // console.log("endPoint: ", endPoint);

  // 구글맵에서 갑자기 왜 또 못찍냐
  const coords = GoogleMapSettings({ startPoint, wayPoint, endPoint });

  // console.log("coords[0]: ", coords[0]);
  // console.log("coords[1]: ", coords[1]);
  // console.log("coords[2]: ", coords[2]);
  // useEffect(() => {
  //   console.log("아니 업데이트가 됐는데 셋팅을 안해?");
  //   setStartCoord(coords[0]);
  //   setWayCoord(coords[1]);
  //   setEndCoord(coords[2]);
  // }, [startPoint, wayPoint, endPoint]);
  // console.log("startCoord", startCoord);
  // console.log("wayCoord", wayCoord);
  // console.log("endCoord", endCoord);

  const onClickNext = () => {
    setIdx((prevIdx) => prevIdx + 1);
  };
  const onClickPrev = () => {
    setIdx((prevIdx) => prevIdx - 1);
  };
  // console.log("coords: ", coords);

  return (
    <>
      <Header />
      <BodyLayout>
        {/* 요약 */}
        <div>
          <h1>코스명</h1>
          <div>10:00~14:00</div>
        </div>
        {coords.length === 3 ? (
          <CustomTMap
            startPoint={coords[0]}
            wayPoint={coords[1]}
            endPoint={coords[2]}
            // startPoint={GoogleMapSettings({ startPoint })}
            // wayPoint={GoogleMapSettings({ wayPoint })}
            // endPoint={GoogleMapSettings({ endPoint })}
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
              <div>장소1, 2, 3 소개</div>
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
