import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import styled from "styled-components";
import {
  BodyLayout,
  MenuTitle,
  StyledButton,
  Button,
} from "../components/body/mixin/Mixin";
import { Link } from "react-router-dom";
import UserData from "../server/UserData";
import { FormInput } from "../components/body/registrationForm/FormMixin";
import { read_cookie } from "sfcookies";
import axios from "axios";

// 상단 프로필 섹션
const ProfileSummary = styled.section`
  width: 60vw;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  background-color: var(--color-bg);
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
  border: 4px solid var(--color-green);
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
  min-width: 48%;
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
  width: 20%;
  height: 24vh;
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

const MenuBox = styled.div`
  width: 32%;
  height: 100%;
  background-color: var(--color-bg);
  box-shadow: 0px 2px 4px 2px grey;
  border-radius: 4px;
`;

const MyPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [userData, setUserData] = useState(null);
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
          console.log(response.data);
          setUserData(response.data);
          setIsLoaded(true);
        })
        .catch((error) => console.log(error));
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
  };

  return (
    <>
      <Header />
      <BodyLayout>
        <MenuTitle>My Page</MenuTitle>
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
                <i className="far fa-user"></i>
              ) : (
                <img src={photoUrl} alt="preview" />
              )}
            </UserImgContainer>

            <FormInput
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              onChange={onChangePhoto}
            />
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
            <Link to={"/individualform"}>
              <EditButton>프로필 수정</EditButton>
            </Link>
          </ButtonsSection>
        </ProfileSummary>

        <MenuContainer>
          <MenuBox>후기 컴포넌트 불러올 예정</MenuBox>
          <MenuBox>찜한 장소</MenuBox>
          <MenuBox>나의 추천 코스</MenuBox>
        </MenuContainer>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default MyPage;
