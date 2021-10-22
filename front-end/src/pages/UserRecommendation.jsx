import React, { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Form from "../components/body/mixin/Form";
import {
  BodyLayout,
  Button,
  Input,
  SearchBar,
  StyledButton,
  MenuTitle,
} from "../components/body/mixin/Mixin";
import Modal from "../components/body/mixin/Modal";
import KakaoSearchFormInput from "../components/body/map/KakaoMapSearchFormInput";
import ModalBG from "../components/body/mixin/ModalBG";
import styled from "styled-components";
import CustomCKEditor from "../components/body/mixin/CustomCKEditor";
import axios from "axios";
import BorderEffectBox from "../components/body/mixin/BorderEffectBox";
import BorderEffect from "../components/body/mixin/BorderEffect";

const MapWarpper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: var(--margin-default);
`;

const LineWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: calc(var(--margin-default) / 2);
  position: relative;
  label {
    min-width: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: var(--padding-default);
  }
`;

// 결과창 띄울 모달창
const ResultContainer = styled.div`
  width: 880px;
  height: 620px;
  display: flex;
  flex-direction: column;
  background-color: white;
  overflow-y: scroll;
`;

const TitleLine = styled(LineWrapper)`
  background-color: var(--color-focus);
`;
const Item = styled.div`
  padding: var(--padding-default) 0 0 var(--padding-default);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  white-space: pre-wrap;
  text-overflow: ellipsis;
`;
const TitleWrapper = styled(Item)`
  width: 12%;
`;
const AddrWrapper = styled(Item)`
  width: 32%;
`;
const SortWrapper = styled(Item)`
  width: 8%;
`;
const TimeWrapper = styled(Item)`
  width: 12%;
`;
const LinkWrapper = styled(Item)`
  width: 32%;
`;

const AbsoluteButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 656px;
  font-size: var(--font-size-large);
`;

const RecommendationForm = styled(Form)`
  margin-top: 0;
  & > div {
    padding-left: 0;
  }
`;

const StyledInput = styled(Input)`
  background-color: inherit;
  border-bottom: 1px solid var(--color-super-light-green);
  text-align: left;
`;

const StyledSearchBar = styled(SearchBar)`
  margin-top: 0;
`;

const SelectBox = styled.select`
  position: absolute;
  left: 600px;
  top: 4px;
  margin: 0 calc(var(--margin-default) / 2) 0 4px;
`;

const UserRecommendation = () => {
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [courseNameWidth, setCourseNameWidth] = useState("0");
  const [placeWidth, setPlaceWidth] = useState("0");
  // 검색분류
  const [searchKey, setSearchKey] = useState("");
  // 검색어
  const [keyword, setKeyword] = useState("");
  // 검색 결과 리스트와 이를 띄울 모달 창
  const [showModalResult, setShowModalResult] = useState(false);
  const [searchedPlace, setSearchedPlace] = useState([]);
  // const [line, setLine] = useState("");
  // const [stname, setStname] = useState("");
  // console.log(name);
  // console.log(line);
  // console.log(stname);

  //////////////////// 보낼 것 ///////////////////////////////
  // 1. 장소 검색하면 받아와야 함(POST)
  // 2. 코스명/장소/글내용 가지고 가야 함
  ////////////////////////////////////////////////////////////

  // const body = {
  //   name: name,
  //   userid: userid,
  //   time: time,
  //   info: info,
  //   pcode1: pcode1,
  //   pcode2: pcode2,
  //   pcode3: pcode3,
  //   opt: opt,
  // }
  // axios.post()

  // 1. 장소 검색하면 받아와야 함(POST)
  const onClickSearchPlace = (e) => {
    e.preventDefault();
    // console.log("분류: ", searchKey);
    // console.log("키워드: ", keyword);
    const body = {
      searchKey: searchKey,
      searchWord: keyword,
    };
    // console.log(body);
    axios
      .post("/wherewego/allPlaceList", body)
      .then((response) => {
        console.log(response.data);
        setShowModalResult(true);
        setSearchedPlace(response.data);
      })
      .catch((error) => console.log(error));
  };
  console.log("검색 결과: ", searchedPlace);

  // 장소 검색
  const onClickSearchButton = () => {
    setShowModal(true);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    // console.log(e);
  };

  const checkBoxFilled = (e) => {
    // console.log(e.target.dataset.type);
    if (e.target.dataset.type === "name") {
      name.length > 0
        ? setCourseNameWidth(courseNameWidth)
        : setCourseNameWidth("0");
    } else if (e.target.dataset.type === "keyword") {
      keyword.lenght > 0 ? setPlaceWidth(placeWidth) : setPlaceWidth("0");
    }
    // } else if (e.target.dataset.type === "stname") {
    //   stname.length > 0 ? setStnameWidth(stnameWidth) : setStnameWidth("0");
  };

  return (
    <>
      <Header />
      <BodyLayout>
        <MenuTitle>코스 추천하기</MenuTitle>
        <RecommendationForm onSubmit={onSubmitForm}>
          <LineWrapper>
            <label>코스명</label>
            <StyledInput
              type="text"
              width="34em"
              placeholder="코스명을 입력해 주세요"
              onKeyUp={(e) => setName(e.target.value)}
              onFocus={() => setCourseNameWidth("612px")}
              onBlur={checkBoxFilled}
              data-type="name"
            />
            <BorderEffectBox fromLeft="-306px">
              <BorderEffect
                spanWidth={courseNameWidth}
                fromTop="38px"
                bgColor="var(--color-green)"
              />
            </BorderEffectBox>
          </LineWrapper>
          <LineWrapper>
            {/* <label>노선 정보</label>
            <SelectBox onChange={(e) => setLine(e.target.value)}>
              <option value="none">라인을 선택하세요</option>
              <option value="1">1호선</option>
              <option value="2">2호선</option>
              <option value="3">3호선</option>
              <option value="4">4호선</option>
              <option value="5">5호선</option>
              <option value="6">6호선</option>
              <option value="7">7호선</option>
              <option value="8">8호선</option>
              <option value="9">9호선</option>
            </SelectBox>
            <label>역 정보</label>
            <StyledInput
              type="text"
              placeholder="역명을 입력해 주세요"
              width="20em"
              onKeyUp={(e) => setStname(e.target.value)}
              onFocus={() => setStnameWidth("360px")}
              onBlur={checkBoxFilled}
              data-type="stname"
            /> */}

            {/* 장소검색 */}
            <label>장소</label>
            <StyledInput
              type="text"
              width="34em"
              placeholder="장소를 검색해 주세요"
              onKeyUp={(e) => setKeyword(e.target.value)}
              onFocus={() => setPlaceWidth("612px")}
              onBlur={checkBoxFilled}
              data-type="keyword"
              maxLenght="28"
            />
            <BorderEffectBox fromLeft="-306px">
              <BorderEffect
                spanWidth={placeWidth}
                fromTop="38px"
                bgColor="var(--color-green)"
              />
            </BorderEffectBox>
            <SelectBox onChange={(e) => setSearchKey(e.target.value)}>
              <option value="none">분류</option>
              <option value="name">장소</option>
              <option value="addr">주소</option>
            </SelectBox>
            <AbsoluteButton type="button" onClick={onClickSearchPlace}>
              <i className="fas fa-search"></i>
            </AbsoluteButton>
          </LineWrapper>
          {showModalResult ? (
            <ModalBG setShowModalResult={setShowModalResult}>
              <Modal>
                <ResultContainer>
                  <TitleLine>
                    <SortWrapper>구분</SortWrapper>
                    <TitleWrapper>업체명</TitleWrapper>
                    <AddrWrapper>주소</AddrWrapper>
                    <TimeWrapper>영업시간</TimeWrapper>
                    <LinkWrapper>링크</LinkWrapper>
                  </TitleLine>
                  {searchedPlace.map((place) => {
                    return (
                      <LineWrapper>
                        <SortWrapper>{place.sort}</SortWrapper>
                        <TitleWrapper>{place.name}</TitleWrapper>
                        <AddrWrapper>{place.addr}</AddrWrapper>
                        <TimeWrapper>{place.time}</TimeWrapper>
                        <LinkWrapper>{place.link}</LinkWrapper>
                      </LineWrapper>
                    );
                  })}
                </ResultContainer>
              </Modal>
            </ModalBG>
          ) : null}

          {/* 장소추가 후에 표시 */}
          <LineWrapper>
            <StyledInput type="text" placeholder="장소1" disabled />
            <StyledInput type="text" placeholder="장소2" disabled />
            <StyledInput type="text" placeholder="장소3" disabled />
          </LineWrapper>
          <LineWrapper>
            <div>
              {/* 역 관련 장소 정보를 받아와서 표시해주고 */}
              {/* 장소 추가하는 경우에 지도(모달) */}
              <StyledSearchBar width="12em">
                <Button type="button" onClick={onClickSearchButton}>
                  <i className="fas fa-search"></i>
                </Button>
              </StyledSearchBar>
              {showModal ? (
                <ModalBG setShowModal={setShowModal}>
                  <Modal>
                    <MapWarpper>
                      <KakaoSearchFormInput />
                    </MapWarpper>
                  </Modal>
                </ModalBG>
              ) : null}
            </div>
          </LineWrapper>
          <CustomCKEditor />
          <StyledButton>작성완료</StyledButton>
        </RecommendationForm>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default UserRecommendation;
