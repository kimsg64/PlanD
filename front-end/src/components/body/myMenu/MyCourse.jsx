import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserRecommendation from "../../../pages/UserRecommendation";
import { StyledButton, MyMenuItemBox } from "../mixin/Mixin";
import Modal from "../mixin/Modal";
import ModalBG from "../mixin/ModalBG";

const MyCourse = (userCourse = null) => {
  const [showModal, setShowModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const userCourseData = userCourse?.userCourse;
  // console.log("마이코스", userCourse);
  // console.log("옵셔널 체이닝 후 코스", userCourseData);

  useEffect(() => {
    setIsLoaded(true);
  }, [userCourseData]);

  const onClickItem = (e) => {
    setShowModal(true);
    console.log(e.target.dataset);
    console.log(e.target.dataset.cnum);
    setSelectedItem(parseInt(e.target.dataset.cnum));
  };

  return (
    <>
      {userCourseData?.length > 0 ? (
        userCourseData.map((data) => {
          return (
            <MyMenuItemBox onClick={onClickItem} data-cnum={data.c_num}>
              <div>
                <i className="fas fa-map-marker-alt" data-cnum={data.c_num}></i>
                <p data-cnum={data.c_num}>{data.name}</p>
              </div>
              <p data-cnum={data.c_num}>{data.grade}</p>
            </MyMenuItemBox>
          );
        })
      ) : (
        <MyMenuItemBox>
          코스를 추천해 주세요
          <Link to={`/userrecommendation`}>
            <StyledButton>추천하러 가기</StyledButton>
          </Link>
        </MyMenuItemBox>
      )}
      {showModal ? (
        <ModalBG setShowModal={setShowModal}>
          <Modal isLoaded={isLoaded}>
            <UserRecommendation
              userCourseData={userCourseData.filter(
                (data) => data.c_num === selectedItem
              )}
            />
          </Modal>
        </ModalBG>
      ) : null}
    </>
  );
};

export default MyCourse;
