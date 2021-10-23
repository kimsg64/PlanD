import React, { useState, useEffect } from "react";
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
import { read_cookie } from "sfcookies";

// 지도 래퍼
const MapWarpper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: var(--margin-default);
`;

// 인풋박스 한 줄
const LineWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: calc(var(--margin-default) / 2);
  position: relative;
  label {
    min-width: 120px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: var(--padding-default);
    font-weight: bold;
  }
`;

// 결과 띄울 모달창
const ResultContainer = styled.div`
  width: 880px;
  height: 620px;
  display: flex;
  flex-direction: column;
  background-color: white;
  overflow-y: scroll;
`;

// 결과 모달창 내부 타이틀
const TitleLine = styled(LineWrapper)`
  height: 60px;
  background-color: var(--color-light-green);
  padding-bottom: var(--padding-default);
  margin-bottom: 0;
  & div:hover {
    color: var(--color-font);
  }
`;
// 결과 모달창 내부 한 줄
const ItemLineWrapper = styled(LineWrapper)`
  height: 60px;
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
// 결과 모달창 내부 각 아이템
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

// 장소 검색버튼 위치
const AbsoluteButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${(props) => props.fromTop};
  left: ${(props) => props.fromLeft};
  font-size: var(--font-size-large);
`;

// 전체 폼
const RecommendationForm = styled(Form)`
  margin-top: 0;
  & > div {
    padding-left: 0;
  }
`;

// 인풋
const StyledInput = styled(Input)`
  background-color: inherit;
  border-bottom: 1px solid var(--color-super-light-green);
  text-align: left;
`;

// 서치바
const StyledSearchBar = styled(SearchBar)`
  margin-top: 0;
`;

// 셀렉트박스 한줄로 담기
const Indicator = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-right: calc(var(--padding-default) * 2);
`;

// 셀렉트박스
const SelectBox = styled.select`
  /* position: absolute; */
  left: 600px;
  top: 4px;
  margin: 0 calc(var(--margin-default) / 2) 0 4px;
`;

const UserRecommendation = () => {
  // ★ 1. 인풋 줄긋기 이펙트
  const [courseNameWidth, setCourseNameWidth] = useState("0");
  const [place1Width, setPlace1Width] = useState("0");
  const [place2Width, setPlace2Width] = useState("0");
  const [place3Width, setPlace3Width] = useState("0");

  // ★★ 2. 카카오맵 모달 보여주기
  const [showModal, setShowModal] = useState(false);

  // ★★★ 3. 최종 submit할 값
  const [name, setName] = useState("");
  const [datesort, setDatesort] = useState("");

  // ★★★★ 4. 장소 순서 정하기
  const [sort1, setSort1] = useState("");
  const [sort2, setSort2] = useState("");
  const [sort3, setSort3] = useState("");
  const combination = ["식당", "카페", "기타"];

  // ★★★★★ 5-1. 장소 검색(검색어 정하기)
  const [keyword, setKeyword] = useState("");
  const [keyword1, setKeyword1] = useState("");
  const [keyword2, setKeyword2] = useState("");
  const [keyword3, setKeyword3] = useState("");
  // ★★★★★ 5-2. 장소 검색(검색 결과 띄울 모달 창 열기)
  const [showModalResult, setShowModalResult] = useState(false);
  // ★★★★★ 5-2. 장소 검색(모달 창에 띄울 검색 결과)
  const [searchedPlace, setSearchedPlace] = useState([]);

  // ★★★★★★ 6. 모달 창 셀렉트 결과로 pcode셋팅
  const [pcode1, setPcode1] = useState("");
  const [pcode2, setPcode2] = useState("");
  const [pcode3, setPcode3] = useState("");

  // const [pname1, setPname1] = useState("");
  // const [pname2, setPname2] = useState("");
  // const [pname3, setPname3] = useState("");

  //////////////////// 수정사항 /////////////////////////
  // 1. 데이트 순서 먼저 정해서 받고(sort1, sort2, sort3)
  // 2. 식당/카페/기타 정해지면 각각 검색창 띄워서 보여주기
  // 3. 찾는 장소가 없으신가요? => 식당/카페/기타 골라서 지도 검색 => 장소 추가(sort, name, addr, tel(null))
  // 4. 호선/역 이름 선택
  // 5. 코스 등록(course_name/userid/stname/pcode1,2,3/opt/sort/course_info
  ////////////////////////////////////////////////////////////

  // ★ 1. 인풋 줄긋기 이펙트
  const checkBoxFilled = (e) => {
    // console.log(e.target.dataset.type);
    if (e.target.dataset.type === "name") {
      name.length > 0
        ? setCourseNameWidth(courseNameWidth)
        : setCourseNameWidth("0");
    } else if (e.target.dataset.type === "keyword1") {
      keyword1.length > 0 ? setPlace1Width(place1Width) : setPlace1Width("0");
    } else if (e.target.dataset.type === "keyword2") {
      keyword2.length > 0 ? setPlace2Width(place2Width) : setPlace2Width("0");
    } else if (e.target.dataset.type === "keyword3") {
      keyword3.length > 0 ? setPlace3Width(place3Width) : setPlace3Width("0");
    }
  };

  // ★★ 2. 카카오맵 모달 띄우기
  const onClickSearchButton = () => {
    setShowModal(true);
  };

  // ★★★ 3. 최종 submit할 값
  const onSubmitForm = (e) => {
    e.preventDefault();
    // console.log(e);
    const body = {
      name: name,
      userid: read_cookie("userId"),
      datesort: datesort,
      pcode1: pcode1,
      pcode2: pcode2,
      pcode3: pcode3,
      // stname: stname,
      // time: time,
      // info: info,
      // opt: opt,
    };
    console.log(body);
    // axios.post("");
  };

  // ★★★★ 4. 장소 순서 정하기
  useEffect(() => {
    setDatesort(sort1 + sort2 + sort3);
  }, [sort1, sort2, sort3]);

  // ★★★★★ 5. 장소 검색해서 결과 모달창에 보여주기
  const onClickSearchPlace = (e) => {
    e.preventDefault();

    // 어느 인풋에서왔니?
    console.log("타입 먼저 체크: ", e.target.dataset.type);
    if (e.target.dataset.type === "keyword1") {
      if (keyword1 === "") {
        alert("검색어를 입력해 주세요");
        return;
      } else {
        setKeyword(keyword1);
      }
    } else if (e.target.dataset.type === "keyword2") {
      if (keyword2 === "") {
        alert("검색어를 입력해 주세요");
        return;
      } else {
        setKeyword(keyword2);
      }
    } else if (e.target.dataset.type === "keyword3") {
      if (keyword3 === "") {
        alert("검색어를 입력해 주세요");
        return;
      } else {
        setKeyword(keyword3);
      }
    }

    // 너의 분류는 무엇이니?
    console.log("분류", e.target.dataset.datesort);
    const sorted = e.target.dataset.datesort;
    const body = {
      searchWord: keyword,
    };
    console.log("검색용 바디", body);
    axios
      .post("/wherewego/allPlaceList", body)
      .then((response) => {
        console.log(response.data.filter((place) => place.datesort === sorted));
        // 현재 datesort와 일치하는 애들만
        const chosen = response.data.filter(
          (place) => place.datesort === sorted
        );
        if (chosen.length === 0) {
          alert("검색 결과가 없습니다!");
          return;
        }
        setShowModalResult(true);
        setSearchedPlace(chosen);
      })
      .catch((error) => console.log(error));
  };
  // console.log("검색 결과: ", searchedPlace);

  // ★★★★★ 5. (서브) 링크 클릭시 이동
  const onClickLink = (e) => {
    // console.log(e.target.innerText);
    if (e.target.innerText !== "") {
      e.stopPropagation();
      window.open(e.target.innerText);
    }
  };

  // ★★★★★★ 6. 모달 창 셀렉트 결과로 pcode셋팅
  const onClickItem = (e) => {
    const selected = getObjectFromPcode(e.target.dataset.pcode);
    console.log("최종 선택된 친구란다!", selected);

    // 결과창 아이템 클릭하면 해당 아이템의 pcode를 셋팅해서 객체를 구함
    console.log(e.target);
    console.log(e.target.dataset);
    console.log(e.target.dataset.pcode);
    console.log("너의솔트", selected.datesort);
    selected.datesort === "sort1"
      ? setPcode1(selected.pcode)
      : selected.datesort === "sort2"
      ? setPcode2(selected.pcode)
      : setPcode3(selected.pcode);

    /////////////////////////////////////////////
    // 인풋 창에 이름도 셋팅해서 보여줌 => ???
    // pname1 === ""
    //   ? setPname1(e.target.dataset.name)
    //   : pname2 === ""
    //   ? setPname2(e.target.dataset.name)
    //   : setPname3(e.target.dataset.name);
    /////////////////////////////////////////////

    // 모달 끄기
    setShowModalResult(false);
  };

  console.log();

  // ★★★★★★ 6. 모달 창 셀렉트 결과로 pcode셋팅 (p코드 일치하는 장소 객체 구하기)
  const getObjectFromPcode = (code) => {
    console.log(searchedPlace);
    console.log("받은 pcode", code);
    const selected = searchedPlace.filter(
      (place) => place.pcode === parseInt(code)
    );
    return selected;
  };
  // console.log(selectedPlace);

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

          {/* 순서 정하기 */}
          <LineWrapper>
            <label>데이트 순서</label>
            <Indicator>
              <SelectBox onChange={(e) => setSort1(e.target.value)}>
                <option value="">장소1</option>
                <option value="식당">식당</option>
                <option value="카페">카페</option>
                <option value="기타">기타</option>
              </SelectBox>
              {/* sort1 선택완료 */}

              {sort1 === "" ? (
                <SelectBox onChange={(e) => setSort2(e.target.value)}>
                  <option value="">장소2</option>
                  <option value="식당">식당</option>
                  <option value="카페">카페</option>
                  <option value="기타">기타</option>
                </SelectBox>
              ) : (
                <SelectBox onChange={(e) => setSort2(e.target.value)}>
                  <option value="">장소2</option>
                  {combination.map((item) => {
                    return item === sort1 ? null : (
                      <option value={`${item}`}>{item}</option>
                    );
                  })}
                </SelectBox>
              )}
              {/* sort2 선택완료 */}

              {sort1 === "" || sort2 === "" ? (
                <SelectBox onChange={(e) => setSort3(e.target.value)}>
                  <option value="">장소3</option>
                  <option value="식당">식당</option>
                  <option value="카페">카페</option>
                  <option value="기타">기타</option>
                </SelectBox>
              ) : (
                <SelectBox onChange={(e) => setSort3(e.target.value)}>
                  <option value="">장소3</option>
                  {combination.map((item) => {
                    return item === sort1 || item === sort2 ? null : (
                      <option value={`${item}`}>{item}</option>
                    );
                  })}
                </SelectBox>
              )}
            </Indicator>
          </LineWrapper>

          {/* 순서 선택 후에 각 장소 검색 */}
          <LineWrapper>
            <label>{sort1}</label>
            <StyledInput
              type="text"
              placeholder="장소1"
              onChange={(e) => setKeyword1(e.target.value)}
              onFocus={() => setPlace1Width("248px")}
              onBlur={checkBoxFilled}
              value={keyword1}
              width="13.7em"
              data-type="keyword1"
            />
            <AbsoluteButton
              type="button"
              data-sort={sort1}
              onClick={onClickSearchPlace}
              fromLeft="316px"
            >
              <i className="fas fa-search" data-sort={sort1}></i>
            </AbsoluteButton>
            <BorderEffectBox fromLeft="-124px">
              <BorderEffect
                spanWidth={place1Width}
                fromTop="38px"
                bgColor="var(--color-green)"
              />
            </BorderEffectBox>

            <label>{sort2}</label>
            <StyledInput
              type="text"
              placeholder="장소2"
              onChange={(e) => setKeyword2(e.target.value)}
              onFocus={() => setPlace2Width("248px")}
              onBlur={checkBoxFilled}
              value={keyword2}
              width="13.7em"
              data-type="keyword2"
            />
            <AbsoluteButton type="button" data-sort={sort2} fromLeft="680px">
              <i className="fas fa-search" data-sort={sort2}></i>
            </AbsoluteButton>
            <BorderEffectBox fromLeft="-124px">
              <BorderEffect
                spanWidth={place2Width}
                fromTop="38px"
                bgColor="var(--color-green)"
              />
            </BorderEffectBox>
          </LineWrapper>

          <LineWrapper>
            <label>{sort3}</label>
            <StyledInput
              type="text"
              placeholder="장소3"
              onChange={(e) => setKeyword3(e.target.value)}
              onFocus={() => setPlace3Width("248px")}
              onBlur={checkBoxFilled}
              value={keyword3}
              width="13.7em"
              data-type="keyword3"
            />
            <AbsoluteButton type="button" data-sort={sort3} fromLeft="316px">
              <i className="fas fa-search" data-sort={sort3}></i>
            </AbsoluteButton>
            <BorderEffectBox fromLeft="-124px">
              <BorderEffect
                spanWidth={place3Width}
                fromTop="38px"
                bgColor="var(--color-green)"
              />
            </BorderEffectBox>
          </LineWrapper>

          {/* 장소검색 */}
          {/* <LineWrapper>
            <label>장소 검색</label>
            <StyledInput
              type="text"
              width="34em"
              placeholder="장소를 검색해 주세요"
              onKeyUp={(e) => setKeyword(e.target.value)}
              maxLenght="28"
            />
            <BorderEffectBox fromLeft="-306px">
              <BorderEffect
                spanWidth={placeWidth}
                fromTop="38px"
                bgColor="var(--color-green)"
              />
            </BorderEffectBox>
            <AbsoluteButton type="button" onClick={onClickSearchPlace}>
              <i className="fas fa-search"></i>
            </AbsoluteButton>
          </LineWrapper> */}

          {/* 장소 검색 결과 모달 */}
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
                      >
                        <SortWrapper data-pcode={place.pcode}>
                          {place.datesort}
                        </SortWrapper>
                        <TitleWrapper data-pcode={place.pcode}>
                          {place.name}
                        </TitleWrapper>
                        <AddrWrapper data-pcode={place.pcode}>
                          {place.addr}
                        </AddrWrapper>
                        <TimeWrapper data-pcode={place.pcode}>
                          {place.time}
                        </TimeWrapper>
                        <LinkWrapper
                          data-pcode={place.pcode}
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

          <LineWrapper>
            {/* <label>찾는 장소가 없으신가요?</label>
            <StyledSearchBar width="4em">
              <Button type="button" onClick={onClickSearchButton}>
                <i className="fas fa-search"></i>
              </Button>
            </StyledSearchBar> */}
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
