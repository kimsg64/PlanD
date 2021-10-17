import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import Form from "../components/body/mixin/Form";
import CheckBoxSet from "../components/body/mixin/CheckBoxSet";
import { BodyLayout, Button } from "../components/body/mixin/Mixin";
import {
  ErrorMsg,
  FormInput,
  ItemContainer,
  Label,
  SubmitButton,
  LineWrapper,
  CenterWrapper,
} from "../components/body/registrationForm/FormMixin";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const BottomSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SubmitSection = styled.section`
  width: 40em;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const IndividualForm = () => {
  const [userId, setUserId] = useState("");
  const [pwd, setPwd] = useState("");
  // 비밀번호 체크용(userPwd2)
  const [isSame, setIsSame] = useState(false);
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  // 임시값
  const [zip, setZip] = useState("12345");
  const [addr, setAddr] = useState("");
  const [addrDetail, setAddrDetail] = useState("");
  const [startdate, setStartdate] = useState("");
  const [opt, setOpt] = useState([]);

  // 기념일은 최댓값이 오늘
  const setMaxDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    // console.log(`${year}-${month}-${day}`);
    return `${year}-${month}-${day}`;
  };

  // 비밀번호 더블체크
  const checkPwd = (e) => {
    if (e.target.value === "") return;
    return pwd === e.target.value ? setIsSame(true) : setIsSame(false);
  };

  // 하이픈 자동 입력
  const insertHyphen = (e, num) => {
    // console.log(e.target.value.length, num);
    // console.log("키코드", e.keyCode);
    return e.target.value.length === num && e.keyCode !== 8 && e.keyCode !== 46
      ? (e.target.value += "-")
      : e.target.value;
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const body = {
      userId: userId,
      pwd: pwd,
      name: name,
      num: num,
      tel: tel,
      email: email,
      zip: zip,
      addr: addr + " " + addrDetail,
      startdate: startdate,
      opt: opt.join("#"),
    };
    // console.log("바디", body);

    axios
      .post("/wherewego/getUserData", body)
      .then((response) => {
        console.log("response : ", response.data);
        if (response.data > 0) {
          alert("회원가입이 완료되었습니다!");
          window.location.href = "http://localhost:3000/#/login";
        } else {
          alert("회원가입에 실패하였습니다...!!!");
        }
      })
      .catch((error) => {
        console.log("failed", error);
        alert("회원가입에 실패하였습니다...");
      });
  };

  return (
    <>
      <Header />
      <BodyLayout>
        <Form onSubmit={onSubmitForm} encType="multipart/form-data">
          <CenterWrapper>
            <LineWrapper>
              <ItemContainer>
                <Label htmlFor="userId">아이디</Label>
                <FormInput
                  type="text"
                  required
                  minLenght="6"
                  maxLength="14"
                  pattern="[A-Za-z]{1}\w{5,14}"
                  placeholder="아이디"
                  onKeyDown={(e) => setUserId(e.target.value)}
                />
                <ErrorMsg>
                  아이디는 6~14자의 영문 대소문자, 숫자로 이루어져야 하며, 첫
                  글자는 영문자만 입력할 수 있습니다.
                </ErrorMsg>
              </ItemContainer>
              <Button
                type="button"
                position="absolute"
                fromTop="60px"
                fromLeft="240px"
              >
                중복 확인
              </Button>
            </LineWrapper>
            <LineWrapper>
              <ItemContainer>
                <Label htmlFor="pwd">비밀번호</Label>
                <FormInput
                  type="password"
                  required
                  minLength="8"
                  maxLength="16"
                  pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$"
                  placeholder="비밀번호"
                  onKeyDown={(e) => setPwd(e.target.value)}
                />
                <ErrorMsg>
                  비밀번호는 8자 이상이어야 하며, 숫자, 영문 대소문자,
                  특수문자를 모두 포함해야 합니다.
                </ErrorMsg>
              </ItemContainer>
              <ItemContainer>
                <Label htmlFor="userPwd2">비밀번호 확인</Label>
                <FormInput
                  type="password"
                  required
                  maxLength="16"
                  placeholder="비밀번호 확인"
                  onKeyUp={checkPwd}
                  className="check"
                  isSame={isSame}
                  autoComplete="new-password"
                />
                <ErrorMsg>비밀번호가 일치하지 않습니다.</ErrorMsg>
              </ItemContainer>
            </LineWrapper>
            <LineWrapper>
              <ItemContainer>
                <Label htmlFor="name">이름</Label>
                <FormInput
                  type="text"
                  required
                  minLength="2"
                  maxLength="8"
                  placeholder="이름"
                  pattern="^[가-힣]{2,8}$"
                  onKeyDown={(e) => setName(e.target.value)}
                />
                <ErrorMsg>올바른 이름을 입력해 주세요.</ErrorMsg>
              </ItemContainer>
              <ItemContainer>
                <Label htmlFor="num">주민등록번호</Label>
                <FormInput
                  type="text"
                  required
                  maxLength="14"
                  placeholder="ex) 000000-0000000"
                  pattern="^[0-9]{2}[01]{1}[0-9]{1}[0-3]{1}[0-9]{1}-[0-9]{7}$"
                  onKeyUp={(e) => insertHyphen(e, 6)}
                  onKeyDown={(e) => setNum(e.target.value)}
                />
                <ErrorMsg>올바른 주민등록번호를 입력해 주세요.</ErrorMsg>
              </ItemContainer>
            </LineWrapper>
            <LineWrapper>
              <ItemContainer>
                <Label htmlFor="tel">연락처</Label>
                <FormInput
                  type="text"
                  required
                  minLength="9"
                  maxLength="11"
                  placeholder="ex) 01012349874"
                  pattern="^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$"
                  onKeyDown={(e) => setTel(e.target.value)}
                />
                <Button
                  type="button"
                  position="absolute"
                  fromTop="60px"
                  fromLeft="240px"
                >
                  본인 인증
                </Button>
                <ErrorMsg>올바른 연락처를 입력해 주세요.</ErrorMsg>
              </ItemContainer>
              <ItemContainer>
                <Label htmlFor="email">이메일</Label>
                <FormInput
                  type="email"
                  required
                  placeholder="ex) abc@naver.com"
                  pattern="^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$"
                  onKeyDown={(e) => setEmail(e.target.value)}
                />
                <ErrorMsg>올바른 이메일 주소를 입력해 주세요.</ErrorMsg>
              </ItemContainer>
            </LineWrapper>
            <LineWrapper>
              <ItemContainer>
                <Label htmlFor="addr">주소</Label>
                <FormInput
                  type="text"
                  width="32em"
                  className="optional"
                  onKeyUp={(e) => setAddr(e.target.value)}
                />
              </ItemContainer>
              <ItemContainer width="5em">
                <Label htmlFor="zip">우편번호</Label>
                <FormInput
                  type="text"
                  width="16em"
                  className="optional"
                  disabled
                  // 임시 value
                  // value={zip}
                  value="12345"
                />
              </ItemContainer>
              <Button
                type="button"
                position="absolute"
                fromTop="60px"
                fromLeft="640px"
                width="54px"
              >
                검색
              </Button>
            </LineWrapper>
            <LineWrapper>
              <ItemContainer>
                <Label htmlFor="addrDetail">상세주소</Label>
                <FormInput
                  type="text"
                  width="28em"
                  className="optional"
                  onKeyUp={(e) => setAddrDetail(e.target.value)}
                />
              </ItemContainer>
              <ItemContainer>
                <Label htmlFor="startdate">기념일</Label>
                <FormInput
                  type="date"
                  max={setMaxDate()}
                  width="20em"
                  className="optional"
                  onChange={(e) => setStartdate(e.target.value)}
                />
              </ItemContainer>
            </LineWrapper>
          </CenterWrapper>
          <BottomSection>
            <ItemContainer margin="calc(var(--margin-default) / 2) 84px 0 0">
              <Label>관심사</Label>
              <CheckBoxSet setOpt={setOpt} />
            </ItemContainer>
            <SubmitSection>
              <SubmitButton type="submit">회원가입</SubmitButton>
            </SubmitSection>
          </BottomSection>
        </Form>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default IndividualForm;
