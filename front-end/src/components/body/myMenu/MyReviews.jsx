import React from "react";
import { Link } from "react-router-dom";
import { ContentP, MyMenuItemBox, StyledButton, TitleP } from "../mixin/Mixin";

const MyReviews = (userReview = null) => {
  const userReviewData = userReview?.userReview;
  console.log("마이리뷰", userReview);
  // console.log("옵셔널 체이닝 후 리뷰", userReviewData);
  return (
    <div>
      {userReviewData?.length > 0 ? (
        userReviewData.map((data) => {
          return (
            <Link to={`/myreviewsitem/${data.r_num}`}>
              <MyMenuItemBox>
                <div>
                  <i className="fas fa-edit"></i>
                  <TitleP>{data.name}</TitleP>
                </div>
                <ContentP>{data.info}</ContentP>
              </MyMenuItemBox>
            </Link>
          );
        })
      ) : (
        <>
          <MyMenuItemBox>
            이용 내역이 없습니다.
            <Link to={`/planning`}>
              <StyledButton>예약하러 가기</StyledButton>
            </Link>
            {/* <Link to={`/userreview`}>
            <StyledButton>예약하러 가기</StyledButton>
          </Link> */}
          </MyMenuItemBox>
          <MyMenuItemBox>
            후기 작성해야 할 코스
            <Link to={`/userreview`}>
              <StyledButton>후기 작성</StyledButton>
            </Link>
          </MyMenuItemBox>
        </>
      )}
    </div>
  );
};

export default MyReviews;
