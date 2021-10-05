// ★★★ 미구현 기능
// 1. 로고의 D에 스타일 지정하고 컴포넌트로 만들기
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { read_cookie, delete_cookie } from "sfcookies";
import { YellowD } from "../body/mixin/Mixin";
import BorderEffect from "../body/mixin/BorderEffect";

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
  width: 64%;
  display: flex;
  justify-content: space-between;
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
  width: 52%;
  display: flex;
  justify-content: flex-end;
`;

const MenuContainer = styled.ul`
  width: 72%;
  min-width: 460px;
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

const LoginButtonContainer = styled.div`
  width: 24%;
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
  position: relative;
  &:hover {
    cursor: pointer;
    color: var(--color-yellow);
  }
`;

const Header = () => {
  const [heightOfSub, setHeightOfSub] = useState("0");
  const [homeWidth, setHomeWidth] = useState("0");
  const [profileWidth, setProfileWidth] = useState("0");
  const [recommendWidth, setRecommendWidth] = useState("0");
  const [reviewWidth, setReviewWidth] = useState("0");
  const [likeWidth, setLikeWidth] = useState("0");
  const [pointWidth, setPointWidth] = useState("0");
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
                <Link to={`/memberhome`}>홈</Link>
              </li>
              <li>
                <Link to={`/planning`}>코스검색</Link>
              </li>
              <li>
                <Link to={`/searchplace`}>장소검색</Link>
              </li>
              <li>
                <Link to={`/reviews2`}>후기</Link>
              </li>
              <li>
                <Link to={`/userrecommendation`}>제안</Link>
              </li>
            </MenuContainer>
          ) : null}
          <LoginButtonContainer>
            <SubMenuContainer
              onMouseOver={() => setHeightOfSub("360px")}
              onMouseOut={() => setHeightOfSub("0")}
            >
              {read_cookie("userId").length > 0 ? (
                <>
                  <div>마이페이지</div>
                  <SubMenu heightOfSub={heightOfSub}>
                    <Link to={"/mypage"}>
                      <SubMenuItem
                        onMouseOver={() => setHomeWidth("150px")}
                        onMouseOut={() => setHomeWidth("0")}
                      >
                        마이 홈
                        <BorderEffect spanWidth={homeWidth} />
                      </SubMenuItem>
                    </Link>
                    <Link to={"/editprofile"}>
                      <SubMenuItem
                        onMouseOver={() => setProfileWidth("150px")}
                        onMouseOut={() => setProfileWidth("0")}
                      >
                        프로필 수정
                        <BorderEffect spanWidth={profileWidth} />
                      </SubMenuItem>
                    </Link>
                    <Link to={"/myhistory"}>
                      <SubMenuItem
                        onMouseOver={() => setReviewWidth("150px")}
                        onMouseOut={() => setReviewWidth("0")}
                      >
                        나의 기록
                        <BorderEffect spanWidth={reviewWidth} />
                      </SubMenuItem>
                    </Link>
                    <Link to={"/myrecommendation"}>
                      <SubMenuItem
                        onMouseOver={() => setRecommendWidth("150px")}
                        onMouseOut={() => setRecommendWidth("0")}
                      >
                        나의 추천 코스
                        <BorderEffect spanWidth={recommendWidth} />
                      </SubMenuItem>
                    </Link>
                    <Link to={"/mydibs"}>
                      <SubMenuItem
                        onMouseOver={() => setLikeWidth("150px")}
                        onMouseOut={() => setLikeWidth("0")}
                      >
                        찜한 코스
                        <BorderEffect spanWidth={likeWidth} />
                      </SubMenuItem>
                    </Link>
                    <Link to={"/pointshop"}>
                      <SubMenuItem
                        onMouseOver={() => setPointWidth("150px")}
                        onMouseOut={() => setPointWidth("0")}
                      >
                        포인트샵
                        <BorderEffect spanWidth={pointWidth} />
                      </SubMenuItem>
                    </Link>
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
          </LoginButtonContainer>
        </MenuSection>
      </HeaderSizeController>
    </HeaderContainer>
  );
};

export default Header;
