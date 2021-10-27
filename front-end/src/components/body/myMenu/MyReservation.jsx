import React from "react";
import { Link } from "react-router-dom";
import { ContentP, MyMenuItemBox, StyledButton, TitleP } from "../mixin/Mixin";

const MyReservation = (userReservation = null) => {
  // const userReservationData = userReservation?.
  return (
    <>
      <MyMenuItemBox>
        <div>
          <i className="fas fa-clock"></i>
          <TitleP>예약</TitleP>
        </div>
        <ContentP>예약</ContentP>
      </MyMenuItemBox>
      <MyMenuItemBox>
        데이트 코스를 찾아보세요!
        <Link to={`/planning`}>
          <StyledButton>예약하러 가기</StyledButton>
        </Link>
      </MyMenuItemBox>
    </>
  );
};

export default MyReservation;
