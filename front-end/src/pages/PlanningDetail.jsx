import React from "react";
import BodyLayout from "../components/body/BodyLayout";
import Form from "../components/body/mixin/Form";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const PlanningDetail = () => {
  return (
    <>
      <Header />
      <BodyLayout>
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
        </Form>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default PlanningDetail;
