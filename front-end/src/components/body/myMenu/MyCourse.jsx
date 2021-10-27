import React from "react";
import { Link } from "react-router-dom";
import UserRecommendation from "../../../pages/UserRecommendation";
import { StyledButton, MyMenuItemBox, TitleP, ContentP } from "../mixin/Mixin";

const MyCourse = (userCourse = null) => {
  const userCourseData = userCourse?.userCourse;
  // console.log("마이코스", userCourse);
  // console.log("옵셔널 체이닝 후 코스", userCourseData);

  return (
    <>
      {userCourseData?.length > 0 ? (
        userCourseData.map((data) => {
          return (
            <Link to={`/mycourseitem/${data.c_num}`}>
              <MyMenuItemBox>
                <div>
                  <i className="fas fa-map-marker-alt"></i>
                  <TitleP>{data.name}</TitleP>
                </div>
                <ContentP>{data.grade}</ContentP>
              </MyMenuItemBox>
            </Link>
          );
        })
      ) : (
        <MyMenuItemBox>
          코스를 추천해 주세요
          <Link to={`/userrecommendation}`}>
            <StyledButton>추천하러 가기</StyledButton>
          </Link>
        </MyMenuItemBox>
      )}
    </>
  );
};

export default MyCourse;
