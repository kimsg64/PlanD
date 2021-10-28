import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContentP, MyMenuItemBox, StyledButton, TitleP } from "../mixin/Mixin";

const MyReservation = ({
  reservationLoaded = false,
  userReservation = null,
}) => {
  const [reservationList, setReservationList] = useState([]);
  const userReservationData = userReservation;

  useEffect(() => {
    // 리뷰 = 작성한 리뷰(userReviewData) + 작성 가능한 예약
    const today = new Date();
    const thisMonth = today.getMonth() + 1;
    const thisDate = today.getDate();
    // 오늘 이후의 예약을 표시
    // console.log("오늘", today);
    // console.log("오늘", thisMonth, thisDate);
    const list = userReservationData?.filter((data) => {
      return (
        parseInt(data.resdate.split("/")[0]) > thisMonth ||
        (parseInt(data.resdate.split("/")[0]) === thisMonth &&
          parseInt(data.resdate.split("/")[1]) >= thisDate)
      );
    });
    console.log(list);
    setReservationList(list);
  }, [reservationLoaded]);

  // console.log("나의 예약의 예약", userReservationData);
  console.log("날짜 안지난 나의 예약", reservationList);

  return (
    <>
      {reservationList?.length === 0 ? (
        <MyMenuItemBox>
          데이트 코스를 찾아보세요!
          <Link to={`/planning`}>
            <StyledButton>예약하러 가기</StyledButton>
          </Link>
        </MyMenuItemBox>
      ) : null}
      {reservationList &&
        reservationList.map((reservation) => {
          return (
            <Link to={`/myreservationitem/${reservation?.c_num}`}>
              <MyMenuItemBox>
                <div>
                  <i className="far fa-clock"></i>
                  <TitleP>{reservation.name}</TitleP>
                </div>
                <ContentP>{`21/${reservation.resdate}`}</ContentP>
              </MyMenuItemBox>
            </Link>
          );
        })}
    </>
  );
};

export default MyReservation;
