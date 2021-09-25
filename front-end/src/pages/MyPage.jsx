import React from "react";
import Header from "../components/header/Header";
import BodyLayout from "../components/body/BodyLayout";
import Footer from "../components/footer/Footer";
import styled from "styled-components";
import { MenuTitle } from "../components/body/mixin/Mixin";
import { Button } from "../components/body/registrationForm/FormMixin";

// 상단 프로필 섹션
const ProfileSummary = styled.section`
  width: 60vw;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  border: 2px solid var(--color-yellow);
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
const UserIcon = styled.div`
  width: 24vh;
  height: 24vh;
  margin: var(--margin-line-space);
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
// 유저 프로필 섹션
const UserInfoSection = styled(SectionInProfile)`
  min-width: 56%;
  padding: var(--padding-default);
  display: flex;
  flex-direction: column;
  justify-content: center;
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
const EditButtonSection = styled(SectionInProfile)`
  width: 8vw;
  height: 20vh;
  margin: var(--margin-default);
  display: flex;
  justify-content: flex-end;
`;
const EditButton = styled(Button)`
  margin: 0;
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
  border: 2px solid var(--color-brown);
  border-radius: 4px;
`;

const MyPage = () => {
  return (
    <>
      <Header />
      <BodyLayout>
        <MenuTitle>My Page</MenuTitle>
        <ProfileSummary>
          <UserIconSection>
            <UserIcon>
              <UserImage>
                <img src="images/user.jpg" alt="user" />
              </UserImage>
            </UserIcon>
          </UserIconSection>
          <UserInfoSection>
            <UserId>UserId will be here</UserId>
            <UserInfo>유저 정보가 뭐라도 필요한데</UserInfo>
            <UserInfo>뭐 쓸말이 있어야 쓰지</UserInfo>
            <UserInfo>하여튼 대충 세 줄 정도 채우면 될듯!</UserInfo>
          </UserInfoSection>
          <EditButtonSection>
            <EditButton>프로필 수정</EditButton>
          </EditButtonSection>
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
