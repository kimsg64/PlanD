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
  text-align: left;
`;

const StyledSearchBar = styled(SearchBar)`
  margin-top: 0;
`;

const UserRecommendation = () => {
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);

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
  return (
    <>
      <Header />
      <BodyLayout>
        <RecommendationForm onSubmit={onSubmitForm}>
          <LineWrapper>
            <label>코스명</label>
            <StyledInput
              type="text"
              width="32em"
              placeholder="코스명을 입력해 주세요"
            />
          </LineWrapper>
          <LineWrapper>
            <label>역 정보</label>
            <StyledInput type="text" placeholder="노선 선택" />
            <StyledInput type="text" placeholder="역명" />
          </LineWrapper>
          <LineWrapper>
            <div>
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
