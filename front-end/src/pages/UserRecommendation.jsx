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
  label {
    min-width: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: var(--padding-default);
  }
`;

const RecommendationForm = styled(Form)`
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
  margin: 0 calc(var(--margin-default) / 2) 0 4px;
  text-align: right;
`;

const UserRecommendation = () => {
  const [name, setName] = useState("");
  const [courseNameWidth, setCourseNameWidth] = useState("0");
  const [line, setLine] = useState("");
  const [stname, setStname] = useState("");
  const [stnameWidth, setStnameWidth] = useState("0");
  const [showModal, setShowModal] = useState(false);
  console.log(name);
  console.log(line);
  console.log(stname);
  // const body = {
  //   name: name,
  //   userid: userid,
  //   time: time,
  //   stname: stname,
  //   info: info,
  //   pcode1: pcode1,
  //   pcode2: pcode2,
  //   pcode3: pcode3,
  //   opt: opt,
  // }
  // axios.post()

  const onClickSearchButton = () => {
    setShowModal(true);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const checkBoxFilled = (e) => {
    // console.log(e.target.dataset.type);
    if (e.target.dataset.type === "name") {
      name.length > 0
        ? setCourseNameWidth(courseNameWidth)
        : setCourseNameWidth("0");
    } else if (e.target.dataset.type === "stname") {
      stname.length > 0 ? setStnameWidth(stnameWidth) : setStnameWidth("0");
    }
  };
  return (
    <>
      <Header />
      <BodyLayout>
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
            <label>노선 정보</label>
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
            />
            <BorderEffectBox fromLeft="-180px">
              <BorderEffect
                spanWidth={stnameWidth}
                fromTop="38px"
                bgColor="var(--color-green)"
              />
            </BorderEffectBox>
          </LineWrapper>
          <LineWrapper>
            <div>
              {/* 역 관련 장소 정보를 받아와서 표시해주고 */}
              {/* 장소 추가하는 경우에 지도(모달) */}
              <StyledSearchBar width="12em">
                <StyledInput type="text" placeholder="장소1" />
                <StyledInput type="text" placeholder="장소2" />
                <StyledInput type="text" placeholder="장소3" />
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
