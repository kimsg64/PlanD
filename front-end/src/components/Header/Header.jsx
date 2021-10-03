// ★★★ 미구현 기능
// 1. 로고의 D에 스타일 지정하고 컴포넌트로 만들기
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { read_cookie, delete_cookie } from "sfcookies";
import { YellowD } from "../body/mixin/Mixin";

const HeaderContainer = styled.header`
  width: calc(100% - 16px);
  height: var(--header-height);
  display: flex;
  justify-content: center;
  background-color: var(--color-brown);
  position: fixed;
  z-index: 2;
  opacity: 0.9;
  color: white;
`;

const HeaderSizeController = styled.div`
  width: 72%;
  display: flex;
  justify-content: space-around;
`;

const LogoContainer = styled.div`
  position: relative;
  font-size: var(--font-size-title-large);
  a {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const MenuSection = styled.section`
  width: 40%;
  display: flex;
  justify-content: flex-end;
`;

const MenuContainer = styled.ul`
  width: 72%;
  min-width: 392px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: var(--font-size-large);
  & > li {
    margin-left: var(--margin-default);
  }
  & > li:hover {
    color: var(--color-yellow);
  }
`;

const LoginBtnContainer = styled.div`
  width: 28%;
  min-width: 152px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: var(--font-size-small);
  color: grey;
  & > div {
    position: relative;
  }
  & > div:hover {
    color: var(--color-yellow);
  }
`;

const SubMenuContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const SubMenu = styled.ul`
  min-width: 152px;
  height: ${(props) => props.heightOfSub};
  transition-duration: 0.3s;
  overflow: hidden;
  background-color: var(--color-brown);
  position: absolute;
  top: 60px;
  left: -48px;
`;

const SubMenuItem = styled.li`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  &:hover {
    cursor: pointer;
    color: var(--color-yellow);
  }
`;

const Header = () => {
  const [heightOfSub, setHeightOfSub] = useState("0");

  const onClickLogout = () => {
    delete_cookie("userId");
  };

  return (
    <HeaderContainer>
      <HeaderSizeController>
        <LogoContainer>
          <Link to={`/`}>
            Plan.<YellowD>D</YellowD>
          </Link>
        </LogoContainer>
        <MenuSection>
          {read_cookie("userId").length > 0 ? (
            <MenuContainer>
              <li>
                <Link to={`/Memberhome`}>홈</Link>
              </li>
              <li>
                <Link to={`/Planning`}>플랜</Link>
              </li>
              <li>
                <Link to={`/Reviews2`}>후기</Link>
              </li>
              <li>
                <Link to={`/userrecommendation`}>제안</Link>
              </li>
              <li>
                <Link to={`/`}>장소</Link>
              </li>
            </MenuContainer>
          ) : null}
          <LoginBtnContainer>
            <SubMenuContainer
              onMouseOver={() => setHeightOfSub("300px")}
              onMouseOut={() => setHeightOfSub("0")}
            >
              {read_cookie("userId").length > 0 ? (
                <>
                  <Link to={`/mypage`}>마이페이지</Link>
                  <SubMenu heightOfSub={heightOfSub}>
                    <SubMenuItem>프로필 수정</SubMenuItem>
                    <SubMenuItem>나의 추천 코스</SubMenuItem>
                    <SubMenuItem>나의 후기</SubMenuItem>
                    <SubMenuItem>찜</SubMenuItem>
                    <SubMenuItem>포인트샵</SubMenuItem>
                  </SubMenu>
                </>
              ) : (
                <Link to={`/registration`}>회원가입</Link>
              )}
            </SubMenuContainer>
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
        </MenuSection>
      </HeaderSizeController>
    </HeaderContainer>
  );
};

export default Header;
