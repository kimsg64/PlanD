import React from "react";
import Header from "../components/header/Header";
import BodyLayout from "../components/body/BodyLayout";
import Footer from "../components/footer/Footer";
import styled from "styled-components";

const ProfileSummary = styled.section`
  width: 60vw;
  height: 32vh;
  margin-top: calc(var(--margin-default) * 3);
  background-color: var(--concept-color6);
  display: flex;
  justify-content: space-evenly;
`;

const UserIconSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserIcon = styled.div`
  width: 24vh;
  height: 24vh;
  margin: calc(var(--margin-default) / 4) var(--margin-default);
`;

const UserImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

const UserName = styled.div`
  width: 24vh;
  margin: calc(var(--margin-default) / 4) var(--margin-default);
  text-align: center;
`;

const UserInfoSection = styled.section`
  width: 72%;
`;

const MenuContainer = styled.section`
  width: 60vw;
  height: 40vh;
  background-color: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MenuBox = styled.div`
  width: 32%;
  height: 48%;
  background-color: white;
`;

const MyPage = () => {
  return (
    <>
      <Header />
      <BodyLayout>
        <ProfileSummary>
          <UserIconSection>
            <UserIcon>
              <UserImage>
                <img src="images/user.jpg" alt="user" />
              </UserImage>
            </UserIcon>
            <UserName>김승규 님</UserName>
          </UserIconSection>
          <UserInfoSection>여기는 포인트 등등이 들어갈 예정임</UserInfoSection>
        </ProfileSummary>
        <MenuContainer>
          <MenuBox></MenuBox>
          <MenuBox></MenuBox>
          <MenuBox></MenuBox>
          <MenuBox></MenuBox>
          <MenuBox></MenuBox>
          <MenuBox></MenuBox>
        </MenuContainer>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default MyPage;
