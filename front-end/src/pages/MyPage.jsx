import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import styled from "styled-components";
import {
  BodyLayout,
  MenuTitle,
  StyledButton,
  MenuBox,
  SubMenuTitle,
} from "../components/body/mixin/Mixin";
import { Link } from "react-router-dom";
import { FormInput } from "../components/body/registrationForm/FormMixin";
import { read_cookie } from "sfcookies";
import axios from "axios";
import MyCourse from "../components/body/myMenu/MyCourse";
import MyReviews from "../components/body/myMenu/MyReviews";
import MyReservation from "../components/body/myMenu/MyReservation";

// 상단 프로필 섹션
const ProfileSummary = styled.section`
  width: 60vw;
  height: auto;
  margin-top: var(--margin-default);
  display: flex;
  justify-content: space-evenly;
  background-color: var(--color-light-bg);
  box-shadow: 0px 2px 4px 2px grey;
  border-radius: 4px;
`;

// 프로필 섹션의 공통 섹션
const SectionInProfile = styled.section`
  display: flex;
  flex-direction: column;
  margin: calc(var(--margin-default) / 2);
`;
// 아이콘 섹션
const UserIconSection = styled(SectionInProfile)`
  align-items: center;
`;

const UserImgContainer = styled.div`
  width: 240px;
  height: 240px;
  overflow: hidden;
  border-radius: 50%;
  border: 4px solid var(--color-focus);
  margin-bottom: var(--margin-line-space);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size-huge);
  background-color: var(--color-super-light-green);
  img {
    height: 100%;
  }
`;

// 유저 프로필 섹션
const UserInfoSection = styled(SectionInProfile)`
  min-width: 40%;
  padding: var(--padding-default);
  display: flex;
`;
const UserId = styled.div`
  margin-bottom: var(--margin-default);
  font-size: var(--font-size-large);
`;
const UserInfo = styled.div`
  margin-bottom: var(--margin-line-space);
  font-size: var(--font-size-normal);
`;
// 정보 수정 버튼 섹션
const ButtonsSection = styled(SectionInProfile)`
  width: 28%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
`;
const EditButton = styled(StyledButton)`
  margin: 0 calc(var(--margin-default) / 4);
  line-height: 24px;
`;

// 하단 메뉴 섹션
const MenuContainer = styled.section`
  width: 60vw;
  height: 40vh;
  margin-top: var(--margin-default);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MyPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [reviewLoaded, setReviewLoaded] = useState(false);
  const [courseLoaded, setCourseLoaded] = useState(false);
  const [reservationLoaded, setReservationLoaded] = useState(false);
  const [userData, setUserData] = useState(null);
  const [userReview, setUserReview] = useState(null);
  const [userCourse, setUserCourse] = useState(null);
  const [userReservation, setUserReservation] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [startdate, setStartdate] = useState("지정된 기념일이 없습니다.");
  const [point, setPoint] = useState("");
  const [photo, setPhoto] = useState(null);
  const [photoUrl, setPhotoUrl] = useState("");
  useEffect(() => {
    // 마이페이지에서 수정하러 왔을 때만 axios에서 유저 정보 받아오기
    if (read_cookie("userId").length > 0) {
      // 쿠키 읽어서 유저 아이디가 있다면 서버에서 정보 받아오기
      const userId = read_cookie("userId");
      const body = {
        userId: userId,
      };
      axios
        .post("/wherewego/getUserData", body)
        .then((response) => {
          // console.log(response.data);
          setUserData(response.data);
          setIsLoaded(true);
        })
        .catch((error) => console.log(error));

      axios
        .post("wherewego/myCourseSelect", body)
        .then((response) => {
          // console.log(response.data);
          setUserCourse(response.data);
          setCourseLoaded(true);
        })
        .catch((error) => console.log(error));

      axios
        .post("wherewego/myReviewSelect", body)
        .then((response) => {
          // console.log(response.data);
          setUserReview(response.data);
          setReviewLoaded(true);
        })
        .catch((error) => console.log(error));

      // axios
      //   .post("wherewego/myReservationSelect", body)
      //   .then((response) => {
      //     console.log(response.data);
      //     setUserReservation(response.data);
      //   })
      //   .catch((error) => console.log(error));
    }
  }, []);
  useEffect(() => {
    if (isLoaded) {
      setName(userData.name);
      setEmail(userData.email);
      setPoint(userData.point);
      if (userData.startdate === null) {
        return;
      } else {
        const year = userData.startdate.substring(0, 4);
        const month = userData.startdate.substring(5, 7);
        const date = userData.startdate.substring(8, 10);
        setStartdate(`${year}년 ${month}월 ${date}일`);
      }
    }
  }, [isLoaded]);

  // 업로드 이미지 미리보기
  const onChangePhoto = (e) => {
    const imageFile = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setPhoto(imageFile);
      setPhotoUrl(reader.result);
    };
    reader.readAsDataURL(imageFile);
    // console.log(photo);
    // console.log(photoUrl);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    ///////////////////////////////////////////////////////////////////
    /*
    if (photo !== null) {
      //FormData 생성
      const userId = read_cookie("userId");
      let formData = new FormData();
      //FormData에 key, value 추가하기
      formData.append(userId, photo);
      console.log(photo);
      for (let value of formData.keys()) {
        console.log(value);
      }
      for (let key of formData.values()) {
        console.log(key);
      }
      const header = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const body = {
        userIid: userId,
        photo: formData,
      };

      axios
        .post("/wherewego/changeUserImage", formData, header)
        // .post("/wherewego/changeUserImage", body, header)
        .then((response) => {
          return console.log(response);
        })
        .catch((error) => console.log(error));
    }*/
    ///////////////////////////////////////////////////////////////////
  };

  return (
    <>
      <Header />
      <BodyLayout>
        <MenuTitle>마이 페이지</MenuTitle>
        <ProfileSummary>
          <UserIconSection>
            {/* <UserIcon>
              <UserImage>
                <img
                  src={`${process.env.PUBLIC_URL}/images/users/user1.png`}
                  alt="user"
                />
              </UserImage>
            </UserIcon> */}
            <UserImgContainer>
              {photo === null ? (
                userData !== null ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/users/${userData.userId}.jpg`}
                    alt="user"
                  />
                ) : (
                  <i className="far fa-user"></i>
                )
              ) : (
                <img src={photoUrl} alt="preview" />
              )}
            </UserImgContainer>

            <form id="change_image" onSubmit={onSubmitForm}>
              <FormInput
                type="file"
                id="photo"
                name="photo"
                accept="image/*"
                onChange={onChangePhoto}
              />
            </form>
          </UserIconSection>
          <UserInfoSection>
            <UserId>{name} 님</UserId>
            <UserInfo>이메일: {email}</UserInfo>
            <UserInfo>기념일: {startdate}</UserInfo>
            <UserInfo>보유 포인트: {point}</UserInfo>
          </UserInfoSection>
          <ButtonsSection>
            <EditButton as="label" htmlFor="photo">
              사진 변경
            </EditButton>
            <EditButton type="submit" form="change_image">
              변경 완료
            </EditButton>
            <Link to={"/individualform"}>
              <EditButton>프로필 수정</EditButton>
            </Link>
          </ButtonsSection>
        </ProfileSummary>

        <MenuContainer>
          <MenuBox>
            <SubMenuTitle>나의 후기</SubMenuTitle>
            <MyReviews userReview={reviewLoaded ? userReview : null} />
          </MenuBox>
          <MenuBox>
            <SubMenuTitle>나의 예약 및 이용 내역</SubMenuTitle>
            <MyReservation
              userReservation={reservationLoaded ? userReservation : null}
            />
          </MenuBox>
          <MenuBox>
            <SubMenuTitle>나의 추천 코스</SubMenuTitle>
            <MyCourse userCourse={courseLoaded ? userCourse : null} />
          </MenuBox>
        </MenuContainer>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default MyPage;
