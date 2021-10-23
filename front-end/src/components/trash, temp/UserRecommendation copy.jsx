import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Form from "../body/mixin/Form";
import {
  BodyLayout,
  Button,
  Input,
  SearchBar,
  StyledButton,
  MenuTitle,
} from "../body/mixin/Mixin";
import Modal from "../body/mixin/Modal";
import KakaoSearchFormInput from "../body/map/KakaoMapSearchFormInput";
import ModalBG from "../body/mixin/ModalBG";
import styled from "styled-components";
import CustomCKEditor from "../body/mixin/CustomCKEditor";
import axios from "axios";
import BorderEffectBox from "../body/mixin/BorderEffectBox";
import BorderEffect from "../body/mixin/BorderEffect";
import { read_cookie } from "sfcookies";

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
  background-color: var(--color-light-green);
  padding-bottom: var(--padding-default);
  margin-bottom: 0;
`;
const ItemLineWrapper = styled(LineWrapper)`
  padding-bottom: var(--padding-default);
  margin-bottom: 0;
  &:hover {
    cursor: pointer;
    background-color: var(--color-super-light-green);
  }
  &:active {
    background-color: var(--color-green);
  }
`;
const Item = styled.div`
  padding: var(--padding-default) 0 0 var(--padding-default);
  border-top: 1px solid hsl(0, 0%, 90%);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  white-space: pre-wrap;
  text-overflow: ellipsis;
`;
const SortWrapper = styled(Item)`
  width: 6%;
`;
const TitleWrapper = styled(Item)`
  width: 20%;
`;
const AddrWrapper = styled(Item)`
  width: 32%;
`;
const TimeWrapper = styled(Item)`
  width: 10%;
`;
const LinkWrapper = styled(Item)`
  width: 32%;
  &:hover {
    color: var(--color-focus);
  }
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
  const [pcode1, setPcode1] = useState("");
  const [pcode2, setPcode2] = useState("");
  const [pcode3, setPcode3] = useState("");
  const [selectedPlace, setSelectedPlace] = useState({});
  const [pname1, setPname1] = useState("");
  const [pname2, setPname2] = useState("");
  const [pname3, setPname3] = useState("");

  // useEffect로 pcode가 하나 선택될 때마다 검색창 비워주기 ??
  // useEffect(() => {
  //   setSearchKey("");
  //   setKeyword("");
  // }, [pcode1, pcode2, pcode3]);

  //////////////////// 보낼 것 ///////////////////////////////
  // 1. 장소 검색하면 받아와야 함(POST)
  // 2. 코스명/장소/글내용 가지고 가야 함
  ////////////////////////////////////////////////////////////

  // 1. 장소 검색하면 받아와야 함(POST)
  const onClickSearchPlace = (e) => {
    e.preventDefault();
    if (searchKey === "" || keyword === "") {
      alert("분류를 선택하거나 검색어를 입력해 주세요");
      return;
    }
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
  // console.log("검색 결과: ", searchedPlace);
  // 장소 검색 모달창 띄우기
  const onClickSearchButton = () => {
    setShowModal(true);
  };

  // 2. 코스명/장소/글내용 가지고 가야 함
  const onSubmitForm = (e) => {
    e.preventDefault();
    // console.log(e);
    const body = {
      name: name,
      userid: read_cookie("userId"),
      // time: time,
      // info: info,
      pcode1: pcode1,
      pcode2: pcode2,
      pcode3: pcode3,
      // opt: opt,
    };
    console.log(body);
    // axios.post("");
  };

  // 포커스/블러 시의 이펙트
  const checkBoxFilled = (e) => {
    // console.log(e.target.dataset.type);
    if (e.target.dataset.type === "name") {
      name.length > 0
        ? setCourseNameWidth(courseNameWidth)
        : setCourseNameWidth("0");
    } else if (e.target.dataset.type === "keyword") {
      // console.log("keyword", keyword);
      keyword.length > 0 ? setPlaceWidth(placeWidth) : setPlaceWidth("0");
    }
    // } else if (e.target.dataset.type === "stname") {
    //   stname.length > 0 ? setStnameWidth(stnameWidth) : setStnameWidth("0");
  };

  const onClickItem = (e) => {
    // 결과창 아이템 클릭하면 해당 아이템의 pcode를 셋팅해서 객체를 구함
    console.log(e.target.dataset);
    console.log(e.target.dataset.pcode);
    pcode1 === ""
      ? setPcode1(e.target.dataset.pcode)
      : pcode2 === ""
      ? setPcode2(e.target.dataset.pcode)
      : setPcode3(e.target.dataset.pcode);

    getObjectFromPcode(e.target.dataset.pcode);
    console.log("함수 실행 결과", getObjectFromPcode(e.target.dataset.pcode));

    /////////////////////////////////////////////
    // 인풋 창에 이름도 셋팅해서 보여줌 => ???
    pname1 === ""
      ? setPname1(e.target.dataset.name)
      : pname2 === ""
      ? setPname2(e.target.dataset.name)
      : setPname3(e.target.dataset.name);
    /////////////////////////////////////////////

    // 모달 끄기
    setShowModalResult(false);
  };

  // 링크 클릭시 이동
  const onClickLink = (e) => {
    // console.log(e.target.innerText);
    if (e.target.innerText !== "") {
      e.stopPropagation();
      window.open(e.target.innerText);
    }
  };

  const getObjectFromPcode = (code) => {
    // console.log(searchedPlace);
    console.log("받은 pcode", code);
    const selected = searchedPlace.filter((place) => place.pcode === code);
    setSelectedPlace(selected);
  };
  console.log(selectedPlace);

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
            {/* 장소검색 */}
            <label>장소 검색</label>
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
              <option value="">분류</option>
              <option value="name">장소</option>
              <option value="addr">주소</option>
            </SelectBox>
            <AbsoluteButton type="button" onClick={onClickSearchPlace}>
              <i className="fas fa-search"></i>
            </AbsoluteButton>
          </LineWrapper>
          {showModalResult ? (
            <ModalBG setShowModalResult={setShowModalResult} coordLeft="1340px">
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
                      <ItemLineWrapper
                        onClick={onClickItem}
                        data-pcode={place.pcode}
                        data-name={place.name}
                      >
                        <SortWrapper
                          data-pcode={place.pcode}
                          data-name={place.name}
                        >
                          {place.sort}
                        </SortWrapper>
                        <TitleWrapper
                          data-pcode={place.pcode}
                          data-name={place.name}
                        >
                          {place.name}
                        </TitleWrapper>
                        <AddrWrapper
                          data-pcode={place.pcode}
                          data-name={place.name}
                        >
                          {place.addr}
                        </AddrWrapper>
                        <TimeWrapper
                          data-pcode={place.pcode}
                          data-name={place.name}
                        >
                          {place.time}
                        </TimeWrapper>
                        <LinkWrapper
                          data-pcode={place.pcode}
                          data-name={place.name}
                          onClick={onClickLink}
                        >
                          {place.link}
                        </LinkWrapper>
                      </ItemLineWrapper>
                    );
                  })}
                </ResultContainer>
              </Modal>
            </ModalBG>
          ) : null}

          {/* 장소추가 후에 표시 */}
          <LineWrapper>
            <label>장소1</label>
            <StyledInput
              type="text"
              placeholder="장소1"
              disabled
              value={pname1}
              width="14.2em"
            />
            <label>장소2</label>
            <StyledInput
              type="text"
              placeholder="장소2"
              disabled
              value={pname2}
              width="14.2em"
            />
          </LineWrapper>
          <LineWrapper>
            <label>장소3</label>
            <StyledInput
              type="text"
              placeholder="장소3"
              disabled
              value={pname3}
              width="14.2em"
            />
            <label>찾는 장소가 없으신가요?</label>
            <StyledSearchBar width="4em">
              <Button type="button" onClick={onClickSearchButton}>
                <i className="fas fa-search"></i>
              </Button>
            </StyledSearchBar>
          </LineWrapper>
          {/* 장소 추가하는 경우에 지도(모달) */}
          {showModal ? (
            <ModalBG setShowModal={setShowModal}>
              <Modal>
                <MapWarpper>
                  <KakaoSearchFormInput />
                </MapWarpper>
              </Modal>
            </ModalBG>
          ) : null}
          <CustomCKEditor />
          <StyledButton>작성완료</StyledButton>
        </RecommendationForm>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default UserRecommendation;
