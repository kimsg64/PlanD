import React from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import BodyLayout from "../components/Body/BodyLayout";
import Footer from "../components/Footer/Footer";

const NoticeTitle = styled.div`
  width: 400px;
  height: 100px;
  font-size: var(--font-size-big-title);
`;

const NoticeContainer = styled.ul`
  width: 800px;
  height: 800px;
`;

const NoticeItem = styled.li`
  width: 100%;
  height: 60px;
  border: 1px solid black;
  :nth-child(2n) {
    background-color: var(--concept-color5);
  }
  :nth-child(2n + 1) {
    background-color: var(--concept-color4);
  }
`;

const Notice = () => {
  return (
    <>
      <Header />
      <BodyLayout>
        <NoticeTitle>공지사항</NoticeTitle>
        <NoticeContainer>
          <NoticeItem>글</NoticeItem>
          <NoticeItem>글</NoticeItem>
          <NoticeItem>글</NoticeItem>
          <NoticeItem>글</NoticeItem>
          <NoticeItem>글</NoticeItem>
          <NoticeItem>글</NoticeItem>
          <NoticeItem>글</NoticeItem>
          <NoticeItem>글</NoticeItem>
          <NoticeItem>글</NoticeItem>
          <NoticeItem>글</NoticeItem>
        </NoticeContainer>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default Notice;
