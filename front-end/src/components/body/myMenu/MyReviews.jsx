import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContentP, MyMenuItemBox, StyledButton, TitleP } from "../mixin/Mixin";

const MyReviews = ({
  reviewLoaded = false,
  userReview = null,
  reservationLoaded = false,
  userReservation = null,
}) => {
  const [reviewList, setReviewList] = useState([]);
  const userReviewData = userReview;
  const userReservationData = userReservation;

  useEffect(() => {
    // 리뷰 = 작성한 리뷰(userReviewData) + 작성 가능한 예약
    const today = new Date();
    const thisMonth = today.getMonth() + 1;
    const thisDate = today.getDate();
    // 예약 중, 오늘보다 날짜가 빠른 애들은 리뷰 작성 가능
    // console.log("오늘", today);
    // console.log("오늘", thisMonth, thisDate);
    const list = userReservationData?.filter((data) => {
      return (
        parseInt(data.resdate.split("/")[0]) < thisMonth ||
        (parseInt(data.resdate.split("/")[0]) === thisMonth &&
          parseInt(data.resdate.split("/")[1]) <= thisDate)
      );
    });
    setReviewList(list);
  }, [reviewLoaded, reservationLoaded]);
  console.log("옵셔널 체이닝 후 리뷰", userReviewData);
  // console.log("마이리뷰의 예약(이력)", userReservationData);
  // console.log("오늘 이전의 예약(이용완료 => 후기작성해라)", reviewList);

  return (
    <>
      {/* 작성한 리뷰 => 보러가기 */}
      {userReviewData?.length > 0 ? (
        userReviewData.map((data) => {
          return (
            <Link to={`/myreviewsitem/${data.r_num}`}>
              <MyMenuItemBox>
                <div>
                  <i className="fas fa-edit"></i>
                  <TitleP>{data.name}</TitleP>
                </div>
                <ContentP>{data.writedate}</ContentP>
              </MyMenuItemBox>
            </Link>
          );
        })
      ) : userReservation?.length === 0 ? (
        // 이용 아예 안 함
        <MyMenuItemBox>
          이용 내역이 없습니다.
          <Link to={`/planning`}>
            <StyledButton>예약하러 가기</StyledButton>
          </Link>
        </MyMenuItemBox>
      ) : null}
      {
        // 이용은 했는데 후기 작성 안 함(reviewList => 작성)
        reviewList &&
          reviewList.map((review) => {
            return (
              <MyMenuItemBox>
                <div>
                  <i className="fas fa-edit"></i>
                  <TitleP>{review.name}</TitleP>
                </div>
                <Link to={`/userreview/${review.c_num}`}>
                  <StyledButton>후기작성</StyledButton>
                </Link>
              </MyMenuItemBox>
            );
          })
      }
    </>
  );
};

export default MyReviews;
