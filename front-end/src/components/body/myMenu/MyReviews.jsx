import React from "react";
import { Link } from "react-router-dom";
import { MyMenuItemBox, StyledButton } from "../mixin/Mixin";

const MyReviews = (userReview = null) => {
  const userReviewData = userReview?.userReview;
  // console.log("마이리뷰", userReview);
  // console.log("옵셔널 체이닝 후 리뷰", userReviewData);
  return (
    <div>
      {userReviewData?.length > 0 ? (
        userReviewData.map((data) => {
          return (
            <>
              <p>{data.name}</p>
              <p>{data.info}</p>
              <p>{data.sort}</p>
              <p>{data.time}</p>
            </>
          );
        })
      ) : (
        <MyMenuItemBox>
          리뷰를 작성해 주세요
          <Link to={`/`}>
            <StyledButton>작성하러 가기</StyledButton>
          </Link>
        </MyMenuItemBox>
      )}
    </div>
  );
};

export default MyReviews;
