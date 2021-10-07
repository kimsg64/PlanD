import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

const CustomCalendarWrapper = styled.div`
  width: 100%;
  height: calc(100% - var(--margin-default) - var(--font-size-title-normal));
  padding: var(--padding-default);
  font-size: var(--font-size-large);
  display: flex;
  flex-direction: column;
  align-items: center;

  /* 캘릭더 틀 */
  .react-calendar {
    height: 372px;
    background-color: inherit;
    font-family: inherit;
    border: none;
  }

  /* 공통 */
  button[disabled],
  button:enabled:hover,
  button:enabled:focus {
    background-color: inherit;
  }
  button:not(.react-calendar__navigation__arrow) {
    font-family: inherit;
  }

  /* 네비게이션 */
  .react-calendar__navigation {
    margin: 0;
  }
  /* 화살표 버튼 */
  .react-calendar__navigation__arrow {
    font-size: var(--font-size-normal);
  }

  /* 요일 */
  abbr[title] {
    text-decoration: none;
  }
  /* 네비게이션 라벨 */
  .react-calendar__navigation__label__labelText {
    font-size: var(--font-size-normal);
  }

  /* 타일 버튼 */
  .react-calendar__tile {
    font-size: var(--font-size-small);
    padding: 1em 0.5em;
    font-family: inherit;
  }
`;

const CustomCalerdar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <CustomCalendarWrapper>
      <Calendar onChange={onChange} value={value} />{" "}
    </CustomCalendarWrapper>
  );
};

export default CustomCalerdar;
