import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { read_cookie, delete_cookie } from "sfcookies";

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
  const onClickLogout = () => {
    delete_cookie("userId");
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to={`/`}>
          <img id="icon" src="/images/logos/icon_pin.png" alt="icon" />
          <img id="logo" src="/images/logos/logo.png" alt="logo" />
        </Link>
      </LogoContainer>
      {read_cookie("userId").length > 0 ? (
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
      ) : null}
      <LoginBtnContainer>
        <div>
          {read_cookie("userId").length > 0 ? (
            <Link to={`/mypage`}>마이페이지</Link>
          ) : (
            <Link to={`/registration`}>회원가입</Link>
          )}
        </div>
        <div>
          {read_cookie("userId").length > 0 ? (
            <Link to={`/`} onClick={onClickLogout}>
              로그아웃
            </Link>
          ) : (
            <Link to={`/login`}>로그인</Link>
          )}
        </div>
      </LoginBtnContainer>
    </HeaderContainer>
  );
};

export default Header;
