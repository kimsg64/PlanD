import React from "react";
import BodyLayout from "../components/body/BodyLayout";
import StationViewer from "../components/body/map/metorMap/StationViewer";
import Form from "../components/body/mixin/Form";
import {
  Checkbox,
  CheckboxLabel,
  OptionsContainer,
  StartButton,
} from "../components/body/mixin/Mixin";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const PlanningDetail = () => {
  return (
    <>
      <Header />
      <BodyLayout>
        <StationViewer />
        {/* 검색 창 같은거 없애든지... */}
        {/* 아니면 구조를 바꿔서 아래 페이지만 옆으로 넘기는건?(Single page) */}
        <Form>
          <div>
            <label>
              데이트 시작 시간
              <select name="start">
                <option value="10:00 ~ 12:00">10:00 ~ 12:00</option>
                <option value="12:00 ~ 14:00">12:00 ~ 14:00</option>
                <option value="14:00 ~ 16:00">14:00 ~ 16:00</option>
                <option value="16:00 ~ 18:00">16:00 ~ 18:00</option>
                <option value="18:00 ~ 20:00">18:00 ~ 20:00</option>
              </select>
            </label>
          </div>
          <div>
            순서
            <label name="first">
              <select name="first">
                <option name="none"> </option>
                <option name="pcode">식당</option>
                <option name="pcode2">카페</option>
                <option name="pcode3">기타</option>
              </select>
            </label>
            <label name="second">
              <select name="second">
                <option name="none"> </option>
                <option name="pcode">식당</option>
                <option name="pcode2">카페</option>
                <option name="pcode3">기타</option>
              </select>
            </label>
            <label name="third">
              <select name="third">
                <option name="none"> </option>
                <option name="pcode">식당</option>
                <option name="pcode2">카페</option>
                <option name="pcode3">기타</option>
              </select>
            </label>
          </div>
          <OptionsContainer>
            <CheckboxLabel>
              <Checkbox type="checkbox" value="일단 그냥 모양만 낸건데" />
              일단 그냥 모양만 낸건데
            </CheckboxLabel>
            <CheckboxLabel>
              <Checkbox type="checkbox" value="가만 생각해보면" />
              가만 생각해보면
            </CheckboxLabel>
            <CheckboxLabel>
              <Checkbox type="checkbox" value="나중에" />
              나중에
            </CheckboxLabel>
            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                value="어차피 로그인할때 있었던거 비슷하게 가져올거같기는"
              />
              어차피 로그인할때 있었던거 비슷하게 가져올거같기는
            </CheckboxLabel>
            <CheckboxLabel>
              <Checkbox type="checkbox" value="한듯" />
              한듯
            </CheckboxLabel>
          </OptionsContainer>
          <StartButton>검색</StartButton>
        </Form>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default PlanningDetail;
