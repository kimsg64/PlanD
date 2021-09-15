import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  height: var(--header-height);
  background-color: var(--concept-color1);
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 10;
`;

const LogoContainer = styled.div`
  height: 100%;
  margin-left: var(--margin-default);
  padding: var(--frame-padding-default);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  #icon,
  #logo {
    height: 80%;
  }
`;

const MenuContainer = styled.ul`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid black;
`;

const LoginBtnContainer = styled.div`
  width: 16%;
  height: 100%;
  padding: var(--padding-default);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img id="icon" src="images/temp_icon.png" />
        <img id="logo" src="images/temp_logo.png" />
      </LogoContainer>
      <MenuContainer>
        <li>홈</li>
        <li>플랜 짜기</li>
        <li>후기</li>
        <li>코스 추천</li>
      </MenuContainer>
      <LoginBtnContainer>
        <div>로그인</div>
        <div>회원가입</div>
      </LoginBtnContainer>
    </HeaderContainer>
  );
};

export default Header;
