import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  height: var(--footer-height);
  background-color: var(--font-color-default);
  margin-top: var(--margin-default);
  display: flex;
  justify-content: center;
  color: white;
`;

const NavList = styled.nav`
  width: 48%;
  display: flex;
  justify-content: space-between;
`;

const NavItemsContainer = styled.div`
  margin: var(--margin-default) 0;
`;

const NavItemsTitle = styled.ul`
  font-size: var(--font-size-small-title);
`;

const NavItems = styled.li`
  margin-top: calc(var(--margin-default) / 4);
  font-size: var(--font-size-small);
  :first-child {
    margin-top: calc(var(--margin-default) / 2);
  }
  :hover {
    cursor: pointer;
    color: var(--color-yellow);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <NavList>
        <NavItemsContainer>
          <NavItemsTitle>
            소개
            <NavItems>
              <Link to={`/Notice`}>공지사항</Link>
            </NavItems>
            <NavItems>서비스 소개</NavItems>
          </NavItemsTitle>
        </NavItemsContainer>
        <NavItemsContainer>
          <NavItemsTitle>
            고객센터
            <NavItems>이용약관</NavItems>
            <NavItems>개인정보취급방침</NavItems>
            <NavItems>FAQ</NavItems>
            <NavItems>Q&A</NavItems>
          </NavItemsTitle>
        </NavItemsContainer>
        <NavItemsContainer>
          <NavItemsTitle>
            광고
            <NavItems>
              <a href="http://localhost:9090/wherewego/">광고 문의</a>
            </NavItems>
          </NavItemsTitle>
        </NavItemsContainer>
        <NavItemsContainer>
          <NavItemsTitle>
            커뮤니티
            <NavItems>
              <Link to={`/Reviews`}>후기</Link>
            </NavItems>
            <NavItems>
              <Link to={`/UserRecommendation`}>코스 제안</Link>
            </NavItems>
          </NavItemsTitle>
        </NavItemsContainer>
      </NavList>
    </FooterContainer>
  );
};

export default Footer;
