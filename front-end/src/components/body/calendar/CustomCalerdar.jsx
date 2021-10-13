import React, { useEffect, useState } from "react";
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
    width: 350px;
    max-width: 100%;
    padding: 1em;
    background: inherit;
    border: 2px solid var(--color-green);
    border-radius: 12px;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
  }
  .react-calendar--doubleView {
    width: 700px;
  }
  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }
  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }
  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__navigation {
    height: 44px;
  }
  .react-calendar__navigation button {
    min-width: 44px;
    background: none;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e6e6e6;
  }
  .react-calendar__navigation button[disabled] {
    background-color: #f0f0f0;
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.5em;
    abbr[title] {
      text-decoration: none;
    }
    abbr[title="Sunday"] {
      color: #d10000;
    }
    abbr[title="Saturday"] {
      color: #006edc;
    }
  }
  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
  }
  .react-calendar__month-view__weekNumbers {
    font-weight: bold;
  }
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    padding: calc(0.75em / 0.75) calc(0.5em / 0.75);
  }
  .react-calendar__month-view__days__day--weekend:nth-child(7n) {
    color: #006edc;
    &.react-calendar__month-view__days__day--neighboringMonth {
      color: #7fa7cf;
    }
  }
  .react-calendar__month-view__days__day--weekend:first-child {
    color: #d10000;
    &.react-calendar__month-view__days__day--neighboringMonth {
      color: #d48e8e;
    }
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #8c8b8b;
  }

  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 1em 0.25em;
  }
  .react-calendar__tile {
    max-width: 100%;
    text-align: center;
    padding: 0.75em 0.5em;
    background: none;
  }
  /* 선택불가 날짜들 */
  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #e6e6e6;
  }
  .react-calendar__tile--now {
    background: var(--color-focus);
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: var(--color-focus);
  }
  .react-calendar__tile--hasActive {
    background: var(--color-green);
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: var(--color-light-green);
  }
  .react-calendar__tile--active {
    background: var(--color-green);
    color: white;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: var(--color-green);
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
  }
`;

const CustomCalerdar = ({
  selectedDate = null,
  setSelectedDate = () => {},
}) => {
  const [value, onChangeDate] = useState(new Date(selectedDate));
  const today = new Date();
  const after1Year = new Date(
    today.getFullYear() + 1,
    today.getMonth(),
    today.getDate()
  );

  return (
    <CustomCalendarWrapper>
      <Calendar
        onChange={onChangeDate}
        value={value}
        minDate={today}
        minDetail="decade"
        maxDate={after1Year}
        nextLabel="▶"
        next2Label="▶▶"
        prevLabel="◀"
        prev2Label="◀◀"
        locale="en-US"
        onClickDay={(value, event) => setSelectedDate(value)}
      />
    </CustomCalendarWrapper>
  );
};

export default CustomCalerdar;
