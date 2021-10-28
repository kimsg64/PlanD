// 달력 스타일링 마무리

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ImageSlider from "../components/body/imageSlider/ImageSlider";
import Dots from "../components/body/imageSlider/Dots";
import {
  PointLetter,
  BodyLayout,
  StyledButton,
  MenuBox,
  SubMenuTitle,
  MyMenuItemBox,
} from "../components/body/mixin/Mixin";
import CustomCalerdar from "../components/body/calendar/CustomCalerdar";
import { Link } from "react-router-dom";
import { read_cookie } from "sfcookies";
import axios from "axios";

const MenuSection = styled.section`
  width: 60vw;
  height: 72vh;
  margin: var(--margin-default);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 40%;
  height: 40%;
  min-width: 360px;
  min-height: 520px;
  margin: var(--margin-default);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-bg);
  border-radius: 8px;
`;

const HomeMenuBox = styled(MenuBox)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeSubMenuTitle = styled(SubMenuTitle)`
  width: 100%;
  background-color: var(--color-light-green);
  text-align: center;
`;

const HomeMyMenuItemBox = styled(MyMenuItemBox)`
  justify-content: flex-start;
`;

const NameBox = styled.div`
  width: 120px;
`;

const DDayBox = styled.div`
  width: 200px;
`;

const WeatherBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & img {
    width: 32%;
  }
`;

const CakeContainer = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size-huge);
  color: var(--color-focus);
`;

// const SubHeading = styled.div`
//   margin-top: calc(var(--margin-default)) 0;
//   font-size: var(--font-size-title-normal);
// `;

// const Article = styled.article`
//   width: 100%;
//   height: calc(100% - var(--margin-default) - var(--font-size-title-normal));
//   padding: var(--padding-default);
//   font-size: var(--font-size-title-small);
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
// `;

// const ArticleItem = styled.div`
//   margin: calc(var(--margin-default) / 2) calc(var(--margin-default) / 4);
// `;

const StyledButtonWidthMargin = styled(StyledButton)`
  margin-top: ${(props) => props.fromTop};
  margin-bottom: 20px;
`;

const MemberHome = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [userData, setUserData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [idx, setIdx] = useState("first");
  const [weather, setWeather] = useState(null);
  // console.log("idx in member home", idx);
  // 날짜 선택하고 course로 넘어가게 하기
  // console.log("멤버홈", selectedDate);

  useEffect(() => {
    // 마이페이지에서 수정하러 왔을 때만 axios에서 유저 정보 받아오기
    if (read_cookie("userId").length > 0) {
      // 쿠키 읽어서 유저 아이디가 있다면 서버에서 정보 받아오기
      const userId = read_cookie("userId");
      const body = {
        userId: userId,
      };
      axios
        .post("/wherewego/getUserData", body)
        .then((response) => {
          // console.log(response.data);
          setUserData(response.data);
          setIsLoaded(true);
        })
        .catch((error) => console.log(error));
    }

    // 오늘의 날씨
    const url =
      "https://api.openweathermap.org/data/2.5/forecast?q=seoul&appid=28dfc3b27e5cac4c9fd964f060b19070&lang=kr";
    axios
      .get(url)
      .then((response) => {
        // console.log(response.data.list[3].weather[0]);
        setWeather(response.data.list[3].weather[0]);
      })
      .catch((error) => console.log(error));
  }, []);
  // console.log(userData);

  // console.log(weather);

  useEffect(() => {
    calculateDDays(100);
  }, [isLoaded]);

  // 날짜 객체를 넣으면 년, 월, 일만 반환
  const getYMD = (dateString) => {
    const year = parseInt(dateString.substring(0, 4));
    const month = parseInt(dateString.substring(5, 7));
    const date = parseInt(dateString.substring(8, 10));
    return [year, month, date];
  };

  // 두 날짜 간의 차이를 구함 => 오늘 날짜 - 특정 날짜
  const betweenDays = (firstDate, secondDate) => {
    const betweenTime = Math.abs(secondDate.getTime() - firstDate.getTime());
    return Math.floor(betweenTime / (1000 * 60 * 60 * 24));
  };

  const anniversary = [100, 200, 300, 365];
  const today = new Date();

  const calculateDDays = (anniversary) => {
    if (isLoaded) {
      if (userData.startdate !== null) {
        // console.log("기념일 raw-data:", userData.startdate);
        // 기념일의 연월일
        const dYMD = getYMD(userData.startdate);
        const dDay = new Date(dYMD[0], dYMD[1] - 1, dYMD[2]);
        // console.log("기념일 YMD: ", dYMD);
        // console.log("기념일 date객체: ", dDay);

        // 오늘의 연월일

        // 오늘이 며칠째인지 계산(anniversary x)
        if (anniversary === undefined) {
          return betweenDays(dDay, today);

          // 입력한 수가 며칠 뒤인지 계산
        } else if (!isNaN(anniversary)) {
          const targetDay = new Date(
            dYMD[0],
            dYMD[1] - 1,
            dYMD[2] + anniversary
          );
          const targetDayYear = targetDay.getFullYear();
          const targetDayMonth =
            targetDay.getMonth() + 1 < 10
              ? "0" + (targetDay.getMonth() + 1)
              : targetDay.getMonth() + 1;
          const targetDayDate =
            targetDay.getDate() < 10
              ? "0" + targetDay.getDate()
              : targetDay.getDate();

          // console.log("타겟", targetDayYear, targetDayMonth, targetDayDate);
          // console.log("차이", betweenDays(targetDay, today));

          return [
            targetDayYear,
            targetDayMonth,
            targetDayDate,
            betweenDays(targetDay, today),
          ];
          // console.log(dDays);
          // if (betweenDays(targetDay, today) < 0) {
          //   dDays.push(targetDay);
          // } else {
          //   return dDays.length <= 7
          //     ? calculateDDays(anniversary + 100)
          //     : dDays.map((day) => betweenDays(day, today));
          // }
        }
      }
    }
  };

  return (
    <>
      <Header />
      <BodyLayout padding="0">
        <ImageSlider idx={idx} setIdx={setIdx} />
        <Dots idx={idx} setIdx={setIdx} />
        <MenuSection>
          <Container>
            <HomeMenuBox>
              {isLoaded && userData?.startdate === null ? (
                <>
                  <HomeSubMenuTitle>기념일을 설정해 주세요!</HomeSubMenuTitle>
                  <CakeContainer>
                    <i className="fas fa-birthday-cake"></i>
                  </CakeContainer>
                  <StyledButtonWidthMargin>
                    <Link to={`/individualform`}>기념일 설정하러 가기</Link>
                  </StyledButtonWidthMargin>
                </>
              ) : (
                <>
                  <HomeSubMenuTitle>
                    {userData?.name}님의 기념일로부터
                    <PointLetter> D</PointLetter>+{isLoaded && calculateDDays()}
                  </HomeSubMenuTitle>
                  {anniversary.map((day) => {
                    return (
                      <HomeMyMenuItemBox>
                        <NameBox>
                          {day % 100 !== 0 ? `${day / 365}주년` : `${day}일`}
                        </NameBox>
                        <DDayBox>
                          <PointLetter>
                            D-{isLoaded && calculateDDays(day)[3]}
                          </PointLetter>
                        </DDayBox>
                        {isLoaded &&
                          `${calculateDDays(day)[0]}/${
                            calculateDDays(day)[1]
                          }/${calculateDDays(day)[2]}`}
                      </HomeMyMenuItemBox>
                    );
                  })}
                  <WeatherBox>
                    <img
                      src={`http://openweathermap.org/img/wn/${weather?.icon}@2x.png`}
                      alt={weather?.description}
                    />
                    <h2>
                      오늘의 날씨:
                      <PointLetter> {weather?.description}</PointLetter>
                    </h2>
                  </WeatherBox>
                </>
              )}
            </HomeMenuBox>
          </Container>
          <Container>
            <HomeMenuBox>
              <HomeSubMenuTitle>플랜을 세워 보세요!</HomeSubMenuTitle>
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
                  <StyledButtonWidthMargin>
                    예약하러 가기
                  </StyledButtonWidthMargin>
                </Link>
              )}
            </HomeMenuBox>
          </Container>
          {/* <Container>
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
          </Container> */}
        </MenuSection>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default MemberHome;
