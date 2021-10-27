import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import { BodyLayout, PointLetter } from "../components/body/mixin/Mixin";
import Footer from "../components/footer/Footer";
import {
  Button,
  Input,
  MenuTitle,
  SearchBar,
} from "../components/body/mixin/Mixin";
import FAQData from "../server/FAQData.json";
import BorderEffectBox from "../components/body/mixin/BorderEffectBox";
import BorderEffect from "../components/body/mixin/BorderEffect";

const NoticeContainer = styled.ul`
  width: 1360px;
  height: 800px;
  margin-top: var(--margin-default);
  overflow: hidden;
`;

const NoticeItem = styled.li`
  width: 100%;
  min-height: 40px;
  border-bottom: 1px solid hsl(0, 0%, 90%);
  overflow: hidden;
  text-align: center;
  &:first-child {
    font-size: var(--font-size-title-small);
    background-color: var(--color-focus);
    font-weight: bold;
  }
  i:hover {
    cursor: pointer;
    color: var(--color-focus);
  }
`;

const ImageBox = styled.div`
  width: 1360px;
  height: 300px;
  margin-top: var(--margin-default);
  overflow: hidden;
  img {
    width: 100%;
  }
`;

const Liner = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  line-height: 40px;
`;

const SmallBox = styled.div`
  width: 12%;
  max-width: 132px;
  transform: rotate(${(props) => props.arrowRotation});
  transition-duration: 0.3s;
`;

const TitleBox = styled.div`
  width: 60%;
  padding-left: 4%;
`;

const ContentBox = styled.div`
  /* width: calc(100% - 132px); */
  height: ${(props) => props.fullHeight || "0"};
  /* margin-left: 132px;
  padding-right: var(--margin-default); */
  padding: 0 132px;
  line-height: 30px;
  background-color: var(--color-light-bg);
  /* border-top: 1px solid hsl(0, 0%, 90%); */
  font-size: var(--font-size-small);
  text-align: left;
  transition-duration: 0.3s;
`;

const ItemTitleBox = styled(TitleBox)`
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: height;
  transition-duration: 0.3s;
  :hover {
    cursor: pointer;
    color: var(--color-focus);
  }
`;

const FAQ = () => {
  // 보여주기
  const [fullHeight1, setFullHeight1] = useState("0");
  const [arrowRotation1, setArrowRotation1] = useState("0");
  const [fullHeight2, setFullHeight2] = useState("0");
  const [arrowRotation2, setArrowRotation2] = useState("0");
  const [fullHeight3, setFullHeight3] = useState("0");
  const [arrowRotation3, setArrowRotation3] = useState("0");
  const [fullHeight4, setFullHeight4] = useState("0");
  const [arrowRotation4, setArrowRotation4] = useState("0");
  const [fullHeight5, setFullHeight5] = useState("0");
  const [arrowRotation5, setArrowRotation5] = useState("0");
  const [fullHeight6, setFullHeight6] = useState("0");
  const [arrowRotation6, setArrowRotation6] = useState("0");
  const [fullHeight7, setFullHeight7] = useState("0");
  const [arrowRotation7, setArrowRotation7] = useState("0");
  const [fullHeight8, setFullHeight8] = useState("0");
  const [arrowRotation8, setArrowRotation8] = useState("0");
  const [fullHeight9, setFullHeight9] = useState("0");
  const [arrowRotation9, setArrowRotation9] = useState("0");
  const [fullHeight10, setFullHeight10] = useState("0");
  const [arrowRotation10, setArrowRotation10] = useState("0");
  const [fullHeight11, setFullHeight11] = useState("0");
  const [arrowRotation11, setArrowRotation11] = useState("0");
  const [fullHeight12, setFullHeight12] = useState("0");
  const [arrowRotation12, setArrowRotation12] = useState("0");
  const [fullHeight13, setFullHeight13] = useState("0");
  const [arrowRotation13, setArrowRotation13] = useState("0");

  // 검색
  const [inputText, setInputText] = useState("");
  const [searchBarWidth, setSearchBarWidth] = useState("0");
  const openItem = (e) => {
    console.log(e.target.dataset.number);
    const selectedItemNumber = e.target.dataset.number;
    switch (selectedItemNumber) {
      case "1":
        if (fullHeight1 === "0") {
          setFullHeight1("60px");
          setArrowRotation1("180deg");
        } else {
          setFullHeight1("0");
          setArrowRotation1("0");
        }
        break;
      case "2":
        if (fullHeight2 === "0") {
          setFullHeight2("60px");
          setArrowRotation2("180deg");
        } else {
          setFullHeight2("0");
          setArrowRotation2("0");
        }
        break;
      case "3":
        if (fullHeight3 === "0") {
          setFullHeight3("60px");
          setArrowRotation3("180deg");
        } else {
          setFullHeight3("0");
          setArrowRotation3("0");
        }
        break;
      case "4":
        if (fullHeight4 === "0") {
          setFullHeight4("60px");
          setArrowRotation4("180deg");
        } else {
          setFullHeight4("0");
          setArrowRotation4("0");
        }
        break;
      case "5":
        if (fullHeight5 === "0") {
          setFullHeight5("60px");
          setArrowRotation5("180deg");
        } else {
          setFullHeight5("0");
          setArrowRotation5("0");
        }
        break;
      case "6":
        if (fullHeight6 === "0") {
          setFullHeight6("60px");
          setArrowRotation6("180deg");
        } else {
          setFullHeight6("0");
          setArrowRotation6("0");
        }
        break;
      case "7":
        if (fullHeight7 === "0") {
          setFullHeight7("60px");
          setArrowRotation7("180deg");
        } else {
          setFullHeight7("0");
          setArrowRotation7("0");
        }
        break;
      case "8":
        if (fullHeight8 === "0") {
          setFullHeight8("60px");
          setArrowRotation8("180deg");
        } else {
          setFullHeight8("0");
          setArrowRotation8("0");
        }
        break;
      case "9":
        if (fullHeight9 === "0") {
          setFullHeight9("60px");
          setArrowRotation9("180deg");
        } else {
          setFullHeight9("0");
          setArrowRotation9("0");
        }
        break;
      case "10":
        if (fullHeight10 === "0") {
          setFullHeight10("60px");
          setArrowRotation10("180deg");
        } else {
          setFullHeight10("0");
          setArrowRotation10("0");
        }
        break;
      case "11":
        if (fullHeight11 === "0") {
          setFullHeight11("60px");
          setArrowRotation11("180deg");
        } else {
          setFullHeight11("0");
          setArrowRotation11("0");
        }
        break;
      case "12":
        if (fullHeight12 === "0") {
          setFullHeight12("60px");
          setArrowRotation12("180deg");
        } else {
          setFullHeight12("0");
          setArrowRotation12("0");
        }
        break;
      case "13":
        if (fullHeight13 === "0") {
          setFullHeight13("60px");
          setArrowRotation13("180deg");
        } else {
          setFullHeight13("0");
          setArrowRotation13("0");
        }
        break;
    }
    // fullHeight === "0" ? setFullHeight("60px") : setFullHeight("0");
    // fullHeight === "0" ? setArrowRotation("180deg") : setArrowRotation("0");
  };

  const onBlurInputBox = () => {
    // console.log(inputText.length);
    return inputText.length > 0 ? null : setSearchBarWidth("0");
  };

  return (
    <>
      <Header />
      <BodyLayout>
        <MenuTitle>FAQ</MenuTitle>
        <ImageBox>
          <img src={`${process.env.PUBLIC_URL}/images/faq.jpg`} />
        </ImageBox>
        <SearchBar>
          <Input
            type="text"
            placeholder="검색하세요"
            onChange={(e) => setInputText(e.target.value)}
            onFocus={() => setSearchBarWidth("200px")}
            onBlur={onBlurInputBox}
          />
          <BorderEffectBox fromLeft="-128px">
            <BorderEffect
              spanWidth={searchBarWidth}
              fromTop="16px"
              bgColor="var(--color-green)"
            />
          </BorderEffectBox>
          <Button>
            <i className="fas fa-search"></i>
          </Button>
        </SearchBar>
        <NoticeContainer>
          <NoticeItem>
            <Liner>
              <SmallBox>번호</SmallBox>
              <SmallBox>분류</SmallBox>
              <TitleBox>제목</TitleBox>
              <SmallBox></SmallBox>
              <SmallBox></SmallBox>
            </Liner>
          </NoticeItem>
          {FAQData.items.map((item) => {
            return (
              <>
                <NoticeItem>
                  <Liner>
                    <SmallBox>{item.number}</SmallBox>
                    <SmallBox>{item.class}</SmallBox>
                    <ItemTitleBox onClick={openItem} data-number={item.number}>
                      <PointLetter>Q</PointLetter>: {item.title}
                    </ItemTitleBox>
                    <SmallBox></SmallBox>
                    {item.number === "1" ? (
                      <SmallBox
                        onClick={openItem}
                        arrowRotation={arrowRotation1}
                      >
                        <i
                          className="fas fa-chevron-down"
                          data-number={item.number}
                        ></i>
                      </SmallBox>
                    ) : item.number === "2" ? (
                      <SmallBox
                        onClick={openItem}
                        arrowRotation={arrowRotation2}
                      >
                        <i
                          className="fas fa-chevron-down"
                          data-number={item.number}
                        ></i>
                      </SmallBox>
                    ) : item.number === "3" ? (
                      <SmallBox
                        onClick={openItem}
                        arrowRotation={arrowRotation3}
                      >
                        <i
                          className="fas fa-chevron-down"
                          data-number={item.number}
                        ></i>
                      </SmallBox>
                    ) : item.number === "4" ? (
                      <SmallBox
                        onClick={openItem}
                        arrowRotation={arrowRotation4}
                      >
                        <i
                          className="fas fa-chevron-down"
                          data-number={item.number}
                        ></i>
                      </SmallBox>
                    ) : item.number === "5" ? (
                      <SmallBox
                        onClick={openItem}
                        arrowRotation={arrowRotation5}
                      >
                        <i
                          className="fas fa-chevron-down"
                          data-number={item.number}
                        ></i>
                      </SmallBox>
                    ) : item.number === "6" ? (
                      <SmallBox
                        onClick={openItem}
                        arrowRotation={arrowRotation6}
                      >
                        <i
                          className="fas fa-chevron-down"
                          data-number={item.number}
                        ></i>
                      </SmallBox>
                    ) : item.number === "7" ? (
                      <SmallBox
                        onClick={openItem}
                        arrowRotation={arrowRotation7}
                      >
                        <i
                          className="fas fa-chevron-down"
                          data-number={item.number}
                        ></i>
                      </SmallBox>
                    ) : item.number === "8" ? (
                      <SmallBox
                        onClick={openItem}
                        arrowRotation={arrowRotation8}
                      >
                        <i
                          className="fas fa-chevron-down"
                          data-number={item.number}
                        ></i>
                      </SmallBox>
                    ) : item.number === "9" ? (
                      <SmallBox
                        onClick={openItem}
                        arrowRotation={arrowRotation9}
                      >
                        <i
                          className="fas fa-chevron-down"
                          data-number={item.number}
                        ></i>
                      </SmallBox>
                    ) : item.number === "10" ? (
                      <SmallBox
                        onClick={openItem}
                        arrowRotation={arrowRotation10}
                      >
                        <i
                          className="fas fa-chevron-down"
                          data-number={item.number}
                        ></i>
                      </SmallBox>
                    ) : item.number === "11" ? (
                      <SmallBox
                        onClick={openItem}
                        arrowRotation={arrowRotation11}
                      >
                        <i
                          className="fas fa-chevron-down"
                          data-number={item.number}
                        ></i>
                      </SmallBox>
                    ) : item.number === "12" ? (
                      <SmallBox
                        onClick={openItem}
                        arrowRotation={arrowRotation12}
                      >
                        <i
                          className="fas fa-chevron-down"
                          data-number={item.number}
                        ></i>
                      </SmallBox>
                    ) : item.number === "13" ? (
                      <SmallBox
                        onClick={openItem}
                        arrowRotation={arrowRotation13}
                      >
                        <i
                          className="fas fa-chevron-down"
                          data-number={item.number}
                        ></i>
                      </SmallBox>
                    ) : null}
                  </Liner>
                  {item.number === "1" ? (
                    <ContentBox fullHeight={fullHeight1}>
                      <PointLetter>A</PointLetter>: {item.content}
                    </ContentBox>
                  ) : item.number === "2" ? (
                    <ContentBox fullHeight={fullHeight2}>
                      <PointLetter>A</PointLetter>: {item.content}
                    </ContentBox>
                  ) : item.number === "3" ? (
                    <ContentBox fullHeight={fullHeight3}>
                      <PointLetter>A</PointLetter>: {item.content}
                    </ContentBox>
                  ) : item.number === "4" ? (
                    <ContentBox fullHeight={fullHeight4}>
                      <PointLetter>A</PointLetter>: {item.content}
                    </ContentBox>
                  ) : item.number === "5" ? (
                    <ContentBox fullHeight={fullHeight5}>
                      <PointLetter>A</PointLetter>: {item.content}
                    </ContentBox>
                  ) : item.number === "6" ? (
                    <ContentBox fullHeight={fullHeight6}>
                      <PointLetter>A</PointLetter>: {item.content}
                    </ContentBox>
                  ) : item.number === "7" ? (
                    <ContentBox fullHeight={fullHeight7}>
                      <PointLetter>A</PointLetter>: {item.content}
                    </ContentBox>
                  ) : item.number === "8" ? (
                    <ContentBox fullHeight={fullHeight8}>
                      <PointLetter>A</PointLetter>: {item.content}
                    </ContentBox>
                  ) : item.number === "9" ? (
                    <ContentBox fullHeight={fullHeight9}>
                      <PointLetter>A</PointLetter>: {item.content}
                    </ContentBox>
                  ) : item.number === "10" ? (
                    <ContentBox fullHeight={fullHeight10}>
                      <PointLetter>A</PointLetter>: {item.content}
                    </ContentBox>
                  ) : item.number === "11" ? (
                    <ContentBox fullHeight={fullHeight11}>
                      <PointLetter>A</PointLetter>: {item.content}
                    </ContentBox>
                  ) : item.number === "12" ? (
                    <ContentBox fullHeight={fullHeight12}>
                      <PointLetter>A</PointLetter>: {item.content}
                    </ContentBox>
                  ) : item.number === "13" ? (
                    <ContentBox fullHeight={fullHeight13}>
                      <PointLetter>A</PointLetter>: {item.content}
                    </ContentBox>
                  ) : null}
                </NoticeItem>
              </>
            );
          })}
        </NoticeContainer>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default FAQ;
