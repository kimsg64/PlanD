import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  width: calc(100% - 16px);
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  background-color: white;
  position: fixed;
  z-index: 2;
  overflow-y: hidden;
  font-weight: 800;
  font-size: var(--font-size-large);
`;

const LogoContainer = styled.div`
  height: 100%;
  margin-left: calc(var(--margin-default) / 2);
  position: relative;
  a {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  #icon {
    height: 100%;
  }
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
  & > li:hover {
    color: var(--color-pink);
  }
`;

const LoginBtnContainer = styled.div`
  width: 16%;
  height: 100%;
  padding: var(--padding-default);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  & > div:hover {
    color: var(--color-pink);
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to={`/`}>
          <img id="icon" src="images/logos/icon_pin.png" alt="icon" />
          <img id="logo" src="images/logos/logo.png" alt="logo" />
        </Link>
      </LogoContainer>
      <MenuContainer>
        <li>
          <Link to={`/`}>홈</Link>
        </li>
        <li>
          <Link to={`/Planning`}>플랜 짜기</Link>
        </li>
        <li>
          <Link to={`/Reviews`}>후기</Link>
        </li>
        <li>
          <Link to={`/userrecommendation`}>코스 제안</Link>
        </li>
      </MenuContainer>
      <LoginBtnContainer>
        <div>
          <Link to={`/login`}>로그인</Link>
        </div>
        <div>
          <Link to={`/registration`}>회원가입</Link>
        </div>
      </LoginBtnContainer>
    </HeaderContainer>
  );
};

export default Header;
