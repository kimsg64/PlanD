import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  height: var(--footer-height);
  background-color: var(--concept-color5);
  margin-top: var(--margin-default);
  display: flex;
  justify-content: center;
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
  margin-top: calc(var(--margin-default) / 8);
  font-size: var(--font-size-small);
  :first-child {
    margin-top: calc(var(--margin-default) / 4);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <NavList>
        <NavItemsContainer>
          <NavItemsTitle>
            소개
            <NavItems>공지사항</NavItems>
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
            <NavItems>광고 문의</NavItems>
          </NavItemsTitle>
        </NavItemsContainer>
        <NavItemsContainer>
          <NavItemsTitle>
            커뮤니티
            <NavItems>후기</NavItems>
            <NavItems>코스 제안</NavItems>
          </NavItemsTitle>
        </NavItemsContainer>
      </NavList>
    </FooterContainer>
  );
};

export default Footer;
