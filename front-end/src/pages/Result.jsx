import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {
  Button,
  BodyLayout,
  MenuTitle,
  ToolTipBox,
  ToolTip,
  PointLetter,
} from "../components/body/mixin/Mixin";
import PageSlider from "../components/body/mixin/PageSlider";
import CustomTMap from "../components/body/map/CustomTMap";
import GoogleMapSettings from "../components/body/map/GoogleMapSettings";
import axios from "axios";
import { read_cookie } from "sfcookies";

const MenuTitleWithMargin = styled(MenuTitle)`
  margin-bottom: var(--margin-default);
`;

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
  & h1 {
    margin: var(--margin-default) 0;
  }
  & > img {
    margin-top: var(--margin-default);
  }
`;

const ButtonContainer = styled.div`
  width: 400px;
  margin-top: var(--margin-default);
  display: flex;
  justify-content: center;
`;

const LineContianer = styled.div`
  width: 800px;
  height: 40px;
  margin-top: calc(var(--margin-default) * 2);
  display: flex;
  align-items: center;
  position: relative;
`;

const LineSpan = styled.span`
  width: 370px;
  height: 4px;
  background-color: var(--color-focus);
  position: relative;
  right: 2px;
`;

const Circle = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 4px solid var(--color-focus);
  border-radius: 50%;
  right: 2px;
  font-weight: bold;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.fontColor};
  &:hover {
    cursor: pointer;
    color: var(--color-dark-focus);
    background-color: var(--color-blur);
  }
`;

const PlaceInfoWindow = styled.div`
  width: 800px;
  height: 300px;
  display: flex;
`;
const ImageSection = styled.div`
  width: 400px;
  height: 300px;
  overflow: hidden;
  border-radius: 12px 0 0 12px;
  & img {
    width: 100%;
    height: 100%;
  }
`;

const InfoSection = styled.div`
  width: 400px;
  height: 300px;
  padding: var(--padding-default);
  border: 2px solid var(--color-green);
  border-left: none;
  border-radius: 0 12px 12px 0;
  background-color: var(--color-light-bg);
  & h2 {
    margin-bottom: var(--margin-default);
  }
  & h3 {
    margin-bottom: calc(var(--margin-default) / 4);
  }
`;

const ForecastBox = styled.div`
  margin: calc(var(--margin-default) / 2) 0;
  & h2 {
    margin-bottom: var(--margin-default);
  }
`;

const SmallFont = styled.span`
  font-size: 16px;
  &:hover {
    cursor: pointer;
    color: var(--color-focus);
  }
`;

// ?????? ?????? ???????????? > ??????1, ??????2, ??????3 ????????? ???????????? ????????? ??????
const Result = ({ location, history }) => {
  const [idx, setIdx] = useState(0);
  const [startPoint, setStartPoint] = useState();
  // "??????????????? ????????? ????????? 332 33 1???"
  const [wayPoint, setWayPoint] = useState();
  // "??????????????? ????????? ????????? ?????????6??? 15"
  const [endPoint, setEndPoint] = useState();
  // "??????????????? ????????? ????????? ????????????21??? 31-10"

  // ?????? ????????????
  const [isSelected1, setIsSelected1] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);
  const [isSelected3, setIsSelected3] = useState(false);

  // ?????? ?????? ??????
  const [recommended, setRecommended] = useState("");
  const [recommendedKor, setRecommendedKor] = useState("");

  // ?????? ?????? ???????????? ??????
  const courseResults = location.props.result;
  const weather = location.props.weather;
  const resdate = location.props.resdate;
  const sort = location.props.sort;
  const c_num = courseResults[0]?.c_num;
  // console.log("?????? ??????", courseResults);
  // console.log("????????????", c_num);
  // console.log("?????? ??????", weather);
  // console.log("?????? ?????????", resdate);
  // console.log(recommended);
  useEffect(() => {
    weather[0]?.icon === "01d" ||
    weather[0]?.icon === "01n" ||
    weather[0]?.icon === "02d" ||
    weather[0]?.icon === "02n"
      ? setRecommended("trench")
      : weather[0]?.icon === "03d" ||
        weather[0]?.icon === "03n" ||
        weather[0]?.icon === "04d" ||
        weather[0]?.icon === "04n"
      ? setRecommended("fleece")
      : weather[0]?.icon === "09d" ||
        weather[0]?.icon === "09n" ||
        weather[0]?.icon === "10d" ||
        weather[0]?.icon === "10n"
      ? setRecommended("umbrella")
      : setRecommended("nothing");

    weather[0]?.icon === "01d" ||
    weather[0]?.icon === "01n" ||
    weather[0]?.icon === "02d" ||
    weather[0]?.icon === "02n"
      ? setRecommendedKor("????????? ??????")
      : weather[0]?.icon === "03d" ||
        weather[0]?.icon === "03n" ||
        weather[0]?.icon === "04d" ||
        weather[0]?.icon === "04n"
      ? setRecommendedKor("?????????")
      : weather[0]?.icon === "09d" ||
        weather[0]?.icon === "09n" ||
        weather[0]?.icon === "10d" ||
        weather[0]?.icon === "10n"
      ? setRecommendedKor("??????")
      : setRecommendedKor("??????");
  }, []);
  // console.log("?????? ?????????", resdate);
  // console.log("??????", sort);
  useEffect(() => {
    // console.log("?????? ????????? ?????? ???????????? ?????????, ??? ????????? ??????");
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
  // ??????????????? ??????????????????
  const coords = GoogleMapSettings({ startPoint, wayPoint, endPoint });
  // console.log("coords[0]: ", coords[0]);
  // console.log("coords[1]: ", coords[1]);
  // console.log("coords[2]: ", coords[2]);

  const onClickPlace1 = (e) => {
    setIsSelected1(true);
    setIsSelected2(false);
    setIsSelected3(false);
  };
  const onClickPlace2 = (e) => {
    setIsSelected1(false);
    setIsSelected2(true);
    setIsSelected3(false);
  };
  const onClickPlace3 = (e) => {
    setIsSelected1(false);
    setIsSelected2(false);
    setIsSelected3(true);
  };

  // ???????????? ????????????
  const CheckPhoneNumber = (tel) => {
    if (!tel.includes("-")) {
      switch (tel.length) {
        case 11:
          return `${tel.substring(0, 3)}-${tel.substring(3, 7)}-${tel.substring(
            7,
            11
          )}`;
        case 10:
          return `${tel.substring(0, 2)}-${tel.substring(2, 6)}-${tel.substring(
            6,
            10
          )}`;
        case 9:
          return `${tel.substring(0, 2)}-${tel.substring(2, 5)}-${tel.substring(
            5,
            9
          )}`;
        case 8:
          return `${tel.substring(0, 3)}-${tel.substring(3, 8)}`;
      }
    }
  };

  // ?????? ????????????
  const DevideAddr = (addr) => {
    return addr.split("???");
  };

  // ?????? ?????? ????????????
  const onClickLink = (e) => {
    console.log(e.target.innerText.split("??????: ")[1]);
    if (e.target.innerText !== "??????: ") {
      e.stopPropagation();
      window.open(e.target.innerText.split("??????: ")[1]);
    }
  };

  // ????????? ?????????
  const onClickNext = () => {
    setIdx((prevIdx) => prevIdx + 1);
  };
  const onClickPrev = () => {
    setIdx((prevIdx) => prevIdx - 1);
  };
  // console.log("coords: ", coords);

  // ?????? ???????????? DB??? ?????????
  const onClickConfirm = () => {
    const body = {
      userid: read_cookie("userId"),
      c_num: c_num,
      resdate: resdate,
    };
    console.log("?????? ????????????~", body);
    axios
      .post("/wherewego/insertRes", body)
      .then((response) => {
        console.log(response.data);
        alert("????????? ?????????????????????!");
        history.push("/mypage");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Header />
      <BodyLayout>
        <MenuTitleWithMargin>{courseResults[0].name}</MenuTitleWithMargin>
        {coords.length === 3 ? (
          <CustomTMap
            startPoint={coords[0]}
            wayPoint={coords[1]}
            endPoint={coords[2]}
          />
        ) : null}
        <Slider>
          <PageSlider idx={idx} rate={-50}>
            <Container>
              <LineContianer>
                {isSelected1 ? null : isSelected2 ? null : isSelected3 ? null : (
                  <ToolTipBox fromTop="-44px" fromLeft="-36px">
                    ??? ????????? ?????? ????????? ???????????? ?????? ????????? ????????? ?????????!
                    <ToolTip />
                  </ToolTipBox>
                )}
                <Circle
                  onClick={onClickPlace1}
                  bgColor={isSelected1 ? "var(--color-focus)" : "white"}
                  fontColor={isSelected1 ? "white" : "var(--color-font)"}
                >
                  1
                </Circle>
                <LineSpan />
                <Circle
                  onClick={onClickPlace2}
                  bgColor={isSelected2 ? "var(--color-focus)" : "white"}
                  fontColor={isSelected2 ? "white" : "var(--color-font)"}
                >
                  2
                </Circle>
                <LineSpan />
                <Circle
                  onClick={onClickPlace3}
                  bgColor={isSelected3 ? "var(--color-focus)" : "white"}
                  fontColor={isSelected3 ? "white" : "var(--color-font)"}
                >
                  3
                </Circle>
              </LineContianer>
              {isSelected1 ? (
                <>
                  <h1>{courseResults[0]?.name1}</h1>
                  <PlaceInfoWindow>
                    <ImageSection>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/places/${
                          sort[0] === "??????"
                            ? "cafe1.jpg"
                            : sort[0] === "??????"
                            ? "food1.jpg"
                            : "etc1.jpg"
                        }`}
                        alt="first"
                      />
                    </ImageSection>
                    <InfoSection>
                      <h2>{courseResults[0]?.name1}</h2>
                      <h3>
                        ??????: {DevideAddr(courseResults[0]?.addr1)[0] + "???"}
                        <br />
                        {DevideAddr(courseResults[0]?.addr1)[1]}
                      </h3>
                      <h3>
                        ?????????: {CheckPhoneNumber(courseResults[0]?.tel1)}
                      </h3>

                      {courseResults[0]?.link1 === null ? null : (
                        <h3 onClick={onClickLink}>
                          ??????: <SmallFont>{courseResults[0]?.link1}</SmallFont>
                        </h3>
                      )}
                      {courseResults[0]?.info1 === null ? null : (
                        <h3>??????: {courseResults[0]?.info1}</h3>
                      )}
                    </InfoSection>
                  </PlaceInfoWindow>
                </>
              ) : isSelected2 ? (
                <>
                  <h1>{courseResults[0]?.name2}</h1>
                  <PlaceInfoWindow>
                    <ImageSection>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/places/${
                          sort[1] === "??????"
                            ? "cafe2.jpg"
                            : sort[1] === "??????"
                            ? "food2.jpg"
                            : "etc2.jpg"
                        }`}
                        alt="first"
                      />
                    </ImageSection>
                    <InfoSection>
                      <h2>{courseResults[0]?.name2}</h2>
                      <h3>
                        ??????: {DevideAddr(courseResults[0]?.addr2)[0] + "???"}
                        <br />
                        {DevideAddr(courseResults[0]?.addr2)[1]}
                      </h3>
                      <h3>
                        ?????????: {CheckPhoneNumber(courseResults[0]?.tel2)}
                      </h3>
                      {courseResults[0]?.link2 === null ? null : (
                        <h3 onClick={onClickLink}>
                          ??????: <SmallFont>{courseResults[0]?.link2}</SmallFont>
                        </h3>
                      )}
                      {courseResults[0]?.info2 === null ? null : (
                        <h3>??????: {courseResults[0]?.info2}</h3>
                      )}
                    </InfoSection>
                  </PlaceInfoWindow>
                </>
              ) : isSelected3 ? (
                <>
                  <h1>{courseResults[0]?.name3}</h1>
                  <PlaceInfoWindow>
                    <ImageSection>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/places/${
                          sort[2] === "??????"
                            ? "cafe1.jpg"
                            : sort[2] === "??????"
                            ? "food2.jpg"
                            : "etc2.jpg"
                        }`}
                        alt="first"
                      />
                    </ImageSection>
                    <InfoSection>
                      <h2>{courseResults[0]?.name3}</h2>
                      <h3>
                        ??????: {DevideAddr(courseResults[0]?.addr3)[0] + "???"}
                        <br />
                        {DevideAddr(courseResults[0]?.addr3)[1]}
                      </h3>
                      <h3>
                        ?????????: {CheckPhoneNumber(courseResults[0]?.tel3)}
                      </h3>
                      {courseResults[0]?.link3 === null ? null : (
                        <h3 onClick={onClickLink}>
                          ??????: <SmallFont>{courseResults[0]?.link3}</SmallFont>
                        </h3>
                      )}
                      {courseResults[0]?.info3 === null ? null : (
                        <h3>??????: {courseResults[0]?.info3}</h3>
                      )}
                    </InfoSection>
                  </PlaceInfoWindow>
                </>
              ) : null}
            </Container>
            <Container>
              <img
                src={`http://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`}
                alt={weather[0]?.description}
              />
              <ForecastBox>
                <h2>
                  <PointLetter>
                    {`${resdate?.substring(0, 4)}??? ${resdate?.substring(
                      5,
                      7
                    )}??? ${resdate?.substring(8, 10)}???`}
                  </PointLetter>
                  ??? ??????: {weather[0]?.description}
                </h2>
              </ForecastBox>

              <PlaceInfoWindow>
                <ImageSection>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/shoppings/${recommended}1.jpg`}
                    alt="first"
                  />
                </ImageSection>
                <InfoSection>
                  <h2>
                    ?????? ?????????:
                    <PointLetter> {recommendedKor}</PointLetter>
                  </h2>
                  <a
                    href={`https://search.musinsa.com/search/musinsa/integration?type=&q=${recommendedKor}`}
                    target="_blank"
                  >
                    <SmallFont>?????? ??????</SmallFont>
                  </a>
                </InfoSection>
              </PlaceInfoWindow>
            </Container>
          </PageSlider>
        </Slider>
        {idx === 0 ? (
          <ButtonContainer>
            <Button onClick={onClickNext}>??????</Button>
            <Link to={"/planning"}>
              <Button>?????? ????????????</Button>
            </Link>
          </ButtonContainer>
        ) : idx === 1 ? (
          <ButtonContainer>
            <Button onClick={onClickPrev}>??????</Button>
            <Button onClick={onClickConfirm}>?????? ????????????</Button>
          </ButtonContainer>
        ) : null}
      </BodyLayout>
      <Footer />
    </>
  );
};

export default Result;
