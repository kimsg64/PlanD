import React, { useState } from "react";
import styled from "styled-components";
import CustomCalerdar from "../../calendar/CustomCalerdar";
import CheckBoxSet from "../../mixin/CheckBoxSet";
import Form from "../../mixin/Form";
import { Button } from "../../mixin/Mixin";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const DatePicker = styled.div`
  display: flex;
  flex-direction: column;
`;

const Caption = styled.section`
  width: 480px;
  display: flex;
  justify-content: space-between;
`;

const Indicator = styled.div`
  display: flex;
`;

const ColorIndicator = styled.div`
  width: 40px;
  height: 20px;
  margin-right: calc(var(--margin-default) / 4);
  background-color: ${(props) => props.bgColor || "inherit"};
`;

const TextIndicator = styled.div`
  font-size: var(--font-size-small);
  margin-right: calc(var(--margin-default) / 4);
`;

const ETCSelector = styled.div`
  width: 480px;
  margin: var(--margin-default) 0 var(--margin-default) 0;
  display: flex;
  justify-content: space-between;
`;

const PlanningETC = ({
  selectedDate = null,
  setSelectedDate = () => {},
  selectedStation = "",
}) => {
  const [opt, setOpt] = useState([]);
  // console.log("ETC 페이지", selectedDate);
  // console.log("ETC", selectedDate);
  return (
    <Container>
      <Form>
        <DatePicker>
          <Caption>
            <label>데이트 날짜를 선택하세요.</label>
            <Indicator>
              <ColorIndicator bgColor="var(--color-focus)" />
              <TextIndicator>오늘</TextIndicator>
              <ColorIndicator bgColor="var(--color-green)" />
              <TextIndicator>예정</TextIndicator>
            </Indicator>
          </Caption>
          <CustomCalerdar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
          {/* 선택된 날짜 히든으로 가져가기 */}
          <input type="hidden" name="resdate" value={selectedDate} />
        </DatePicker>
        <ETCSelector>
          <label>데이트를 시작할 시간을 선택하세요.</label>
          <select name="start">
            <option value="10:00 ~ 12:00">10:00 ~ 12:00</option>
            <option value="12:00 ~ 14:00">12:00 ~ 14:00</option>
            <option value="14:00 ~ 16:00">14:00 ~ 16:00</option>
            <option value="16:00 ~ 18:00">16:00 ~ 18:00</option>
            <option value="18:00 ~ 20:00">18:00 ~ 20:00</option>
          </select>
        </ETCSelector>
        <ETCSelector>
          데이트 순서를 선택하세요.
          <div>
            <label name="first">
              <select name="first">
                <option name="none">장소1</option>
                <option name="pcode">식당</option>
                <option name="pcode2">카페</option>
                <option name="pcode3">기타</option>
              </select>
            </label>
            <label name="second">
              <select name="second">
                <option name="none">장소2</option>
                <option name="pcode">식당</option>
                <option name="pcode2">카페</option>
                <option name="pcode3">기타</option>
              </select>
            </label>
            <label name="third">
              <select name="third">
                <option name="none">장소3</option>
                <option name="pcode">식당</option>
                <option name="pcode2">카페</option>
                <option name="pcode3">기타</option>
              </select>
            </label>
          </div>
        </ETCSelector>
        <label>관심사를 선택하세요 </label>
        <CheckBoxSet setOpt={setOpt} />
        {/* 앞에서 선택해둔 역 히든으로 가져가기 */}
        <input type="hidden" name="stname" value={selectedStation} />
        <Button>코스 검색</Button>
      </Form>
    </Container>
  );
};

export default PlanningETC;
