import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import BodyLayout from "../components/body/BodyLayout";
import Footer from "../components/footer/Footer";
import { MenuTitle } from "../components/body/mixin/Mixin";
import { Button, Input } from "../components/body/registrationForm/FormMixin";

const NoticeContainer = styled.ul`
  width: 1200px;
  height: 800px;
  overflow: hidden;
`;

const NoticeItem = styled.li`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  text-align: center;
  :first-child {
    font-size: var(--font-size-title-small);
    background-color: var(--color-yellow);
  }
`;

const SmallBox = styled.div`
  width: 10%;
  i {
    font-size: var(--font-size-large);
  }
  i:hover {
    cursor: pointer;
    color: var(--color-pink);
  }
`;

const TitleBox = styled.div`
  width: 60%;
`;

const ItemTitleBox = styled(TitleBox)`
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  :hover {
    cursor: pointer;
    color: var(--color-pink);
  }
`;

const SearchBar = styled.div`
  width: 1200px;
  height: 60px;
  margin-top: var(--margin-default);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  input {
    margin-right: calc(var(--margin-default) / 2);
  }
  Button {
    i {
      font-size: var(--font-size-large);
    }
  }
`;

const Notice = () => {
  const [open, setOpen] = useState();
  const openItem = () => {
    setOpen(open);
  };

  return (
    <>
      <Header />
      <BodyLayout>
        <MenuTitle>공지사항</MenuTitle>
        <NoticeContainer>
          <NoticeItem>
            <SmallBox>번호</SmallBox>
            <TitleBox>제목</TitleBox>
            <SmallBox>첨부파일</SmallBox>
            <SmallBox>조회수</SmallBox>
            <SmallBox>작성일</SmallBox>
          </NoticeItem>
          <NoticeItem>
            <SmallBox>1</SmallBox>
            <ItemTitleBox>제목이 길어져도 다 수용할수 있어야 함</ItemTitleBox>
            <SmallBox>첨부파일</SmallBox>
            <SmallBox>123</SmallBox>
            <SmallBox>2021.09.21</SmallBox>
          </NoticeItem>
          <NoticeItem>
            <SmallBox>2</SmallBox>
            <ItemTitleBox>
              그래서 테스트용으로 글을 길게 써 보겠습니다
            </ItemTitleBox>
            <SmallBox>
              <i className="fas fa-save"></i>
            </SmallBox>
            <SmallBox>조회수</SmallBox>
            <SmallBox>작성일</SmallBox>
          </NoticeItem>
          <NoticeItem>
            <SmallBox>3</SmallBox>
            <ItemTitleBox onClick={openItem}>
              흐헤헤흐헤헤흐헤헤흐헤헤흐헤헤흐헤헤흐헤헤흐헤헤흐헤헤흐헤헤흐헤헤흐헤헤흐헤헤흐헤헤흐헤헤흐헤헤흐헤헤흐헤헤흐헤헤흐헤헤흐헤헤흐헤헤흐헤헤흐헤헤흐헤헤흐헤헤
            </ItemTitleBox>
            <SmallBox>첨부파일</SmallBox>
            <SmallBox>56</SmallBox>
            <SmallBox>작성일</SmallBox>
          </NoticeItem>
          <NoticeItem>
            <SmallBox>4</SmallBox>
            <ItemTitleBox>제목</ItemTitleBox>
            <SmallBox>첨부파일</SmallBox>
            <SmallBox>85</SmallBox>
            <SmallBox>작성일</SmallBox>
          </NoticeItem>
          <NoticeItem>
            <SmallBox>5</SmallBox>
            <ItemTitleBox>제목</ItemTitleBox>
            <SmallBox></SmallBox>
            <SmallBox>조회수</SmallBox>
            <SmallBox>작성일</SmallBox>
          </NoticeItem>
          <NoticeItem>
            <SmallBox>6</SmallBox>
            <ItemTitleBox>제목</ItemTitleBox>
            <SmallBox>
              <i className="fas fa-save"></i>
            </SmallBox>
            <SmallBox>조회수</SmallBox>
            <SmallBox>작성일</SmallBox>
          </NoticeItem>
          <NoticeItem>
            <SmallBox>7</SmallBox>
            <ItemTitleBox>제목</ItemTitleBox>
            <SmallBox>첨부파일</SmallBox>
            <SmallBox>조회수</SmallBox>
            <SmallBox>작성일</SmallBox>
          </NoticeItem>
          <NoticeItem>
            <SmallBox>8</SmallBox>
            <ItemTitleBox>제목</ItemTitleBox>
            <SmallBox>첨부파일</SmallBox>
            <SmallBox>조회수</SmallBox>
            <SmallBox>작성일</SmallBox>
          </NoticeItem>
          <NoticeItem>
            <SmallBox>9</SmallBox>
            <ItemTitleBox>제목</ItemTitleBox>
            <SmallBox>첨부파일</SmallBox>
            <SmallBox>조회수</SmallBox>
            <SmallBox>작성일</SmallBox>
          </NoticeItem>
          <NoticeItem>
            <SmallBox>10</SmallBox>
            <ItemTitleBox>제목</ItemTitleBox>
            <SmallBox>첨부파일</SmallBox>
            <SmallBox>조회수</SmallBox>
            <SmallBox>작성일</SmallBox>
          </NoticeItem>
          <NoticeItem>
            <SmallBox>11</SmallBox>
            <ItemTitleBox>제목</ItemTitleBox>
            <SmallBox>첨부파일</SmallBox>
            <SmallBox>조회수</SmallBox>
            <SmallBox>작성일</SmallBox>
          </NoticeItem>
          <NoticeItem>
            <SmallBox>12</SmallBox>
            <ItemTitleBox>제목</ItemTitleBox>
            <SmallBox>첨부파일</SmallBox>
            <SmallBox>조회수</SmallBox>
            <SmallBox>작성일</SmallBox>
          </NoticeItem>
          <NoticeItem>
            <SmallBox>13</SmallBox>
            <ItemTitleBox>제목</ItemTitleBox>
            <SmallBox>첨부파일</SmallBox>
            <SmallBox>조회수</SmallBox>
            <SmallBox>작성일</SmallBox>
          </NoticeItem>
          <NoticeItem>
            <SmallBox>14</SmallBox>
            <ItemTitleBox>제목</ItemTitleBox>
            <SmallBox>첨부파일</SmallBox>
            <SmallBox>조회수</SmallBox>
            <SmallBox>작성일</SmallBox>
          </NoticeItem>
          <NoticeItem>
            <SmallBox>15</SmallBox>
            <ItemTitleBox>제목</ItemTitleBox>
            <SmallBox>첨부파일</SmallBox>
            <SmallBox>조회수</SmallBox>
            <SmallBox>작성일</SmallBox>
          </NoticeItem>
        </NoticeContainer>
        <SearchBar>
          <Input type="text" placeholder="배경색 임시임" />
          <Button>
            <i className="fas fa-search"></i>
          </Button>
        </SearchBar>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default Notice;
