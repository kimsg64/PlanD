import axios from "axios";
import React, { useEffect, useState } from "react";
import { read_cookie } from "sfcookies";
import styled from "styled-components";
import { BodyLayout, MenuTitle } from "../components/body/mixin/Mixin";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Container = styled.div`
  width: 72%;
  margin-top: var(--margin-default);
  background-color: var(--color-bg);
  display: flex;
  justify-content: center;
  border-radius: 12px;
  border: 1px solid var(--color-blur);
`;

const ContentsBox = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;

  & h1 {
    margin: var(--margin-default);
    text-align: center;
  }

  & h2 {
    margin-bottom: calc(var(--margin-default) / 4);
  }

  & > h3 {
    text-align: right;
  }

  & h4 {
    margin-bottom: var(--margin-default);
    text-align: right;
    color: #3498db;
  }

  & p {
    margin-bottom: calc(var(--margin-default) / 6);
  }
`;

const PlaceBox = styled.div`
  margin-bottom: calc(var(--margin-default) * 2);
`;

const ImageBox = styled.div`
  width: 800px;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: calc(var(--margin-default) / 2);
  & img {
    width: 100%;
    height: 100%;
  }
`;

const MyCourseItem = ({ match }) => {
  const [matchedData, setMatchedData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  console.log("매치", match.params);
  const cnum = parseInt(match.params.cnum);
  console.log(cnum);

  useEffect(() => {
    axios
      .post("/wherewego/showReservedCourse", { c_num: cnum })
      .then((response) => {
        console.log(response);
        setMatchedData(response.data);
        setIsLoaded(true);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log("매치데이터: ", matchedData);
  return (
    <>
      <Header />
      <BodyLayout>
        <MenuTitle>
          {isLoaded ? read_cookie("userId") : null}님이 예약한 코스
        </MenuTitle>
        <Container>
          <ContentsBox>
            <h1>{isLoaded ? matchedData?.name : null}</h1>
            <h3>{`@${matchedData?.stname}`}</h3>
            <h4>
              {matchedData?.opt !== null
                ? matchedData?.opt[0] === "#"
                  ? `${matchedData?.opt}`
                  : `#${matchedData?.opt}`
                : null}
            </h4>
            <PlaceBox>
              <ImageBox>
                {matchedData?.coursesort === 1 ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/places/food1.jpg`}
                  />
                ) : matchedData?.coursesort === 2 ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/places/food2.jfif`}
                  />
                ) : matchedData?.coursesort === 3 ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/places/cafe1.jpg`}
                  />
                ) : matchedData?.coursesort === 4 ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/places/cafe2.jpg`}
                  />
                ) : matchedData?.coursesort === 5 ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/places/etc1.jpg`}
                  />
                ) : matchedData?.coursesort === 6 ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/places/etc2.jpg`}
                  />
                ) : null}
              </ImageBox>
              <h3>1st Place</h3>
              <h2>{matchedData?.name1}</h2>
              <p>
                <b>주소</b>: {matchedData?.addr1}
              </p>
              {matchedData?.tel1 !== null ? (
                <p>
                  <b>연락처</b>: {matchedData?.tel1}
                </p>
              ) : null}
              {matchedData?.link1 !== null ? (
                <p>
                  <b>링크</b>: {matchedData?.link1}
                </p>
              ) : null}
              {matchedData?.info1 !== null ? (
                <p>
                  <b>기타</b>: {matchedData?.info1}
                </p>
              ) : null}
            </PlaceBox>

            <PlaceBox>
              <ImageBox>
                {matchedData?.coursesort === 1 ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/places/cafe1.jpg`}
                  />
                ) : matchedData?.coursesort === 2 ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/places/etc1.jpg`}
                  />
                ) : matchedData?.coursesort === 3 ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/places/food1.jpg`}
                  />
                ) : matchedData?.coursesort === 4 ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/places/etc2.jpg`}
                  />
                ) : matchedData?.coursesort === 5 ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/places/food2.jfif`}
                  />
                ) : matchedData?.coursesort === 6 ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/places/cafe2.jpg`}
                  />
                ) : null}
              </ImageBox>
              <h3>2nd Place</h3>
              <h2>{matchedData?.name2}</h2>
              <p>
                <b>주소</b>: {matchedData?.addr2}
              </p>
              {matchedData?.tel2 !== null ? (
                <p>
                  <b>연락처</b>: {matchedData?.tel2}
                </p>
              ) : null}
              {matchedData?.link2 !== null ? (
                <p>
                  <b>링크</b>: {matchedData?.link2}
                </p>
              ) : null}
              {matchedData?.info2 !== null ? (
                <p>
                  <b>기타</b>: {matchedData?.info2}
                </p>
              ) : null}
            </PlaceBox>

            <PlaceBox>
              <ImageBox>
                {matchedData?.coursesort === 1 ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/places/etc1.jpg`}
                  />
                ) : matchedData?.coursesort === 2 ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/places/cafe1.jpg`}
                  />
                ) : matchedData?.coursesort === 3 ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/places/etc2.jpg`}
                  />
                ) : matchedData?.coursesort === 4 ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/places/food1.jpg`}
                  />
                ) : matchedData?.coursesort === 5 ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/places/cafe2.jpg`}
                  />
                ) : matchedData?.coursesort === 6 ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/places/food2.jfif`}
                  />
                ) : null}
              </ImageBox>
              <h3>3rd Place</h3>
              <h2>{matchedData?.name3}</h2>
              <p>
                <b>주소</b>: {matchedData?.addr3}
              </p>
              {matchedData?.tel3 !== null ? (
                <p>
                  <b>연락처</b>: {matchedData?.tel3}
                </p>
              ) : null}
              {matchedData?.link3 !== null ? (
                <p>
                  <b>링크</b>: {matchedData?.link3}
                </p>
              ) : null}
              {matchedData?.info3 !== null ? (
                <p>
                  <b>기타</b>: {matchedData?.info3}
                </p>
              ) : null}
            </PlaceBox>
          </ContentsBox>
        </Container>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default MyCourseItem;
