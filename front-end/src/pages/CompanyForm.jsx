import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import Form from "../components/body/mixin/Form";
import { BodyLayout, Button } from "../components/body/mixin/Mixin";
import {
  CenterWrapper,
  ErrorMsg,
  FormInput,
  ItemContainer,
  Label,
  LineWrapper,
  SubmitButton,
} from "../components/body/registrationForm/FormMixin";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const SubmitSection = styled.section`
  width: calc(40em + 4px);
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const CompanyForm = () => {
  const [b_id, setB_id] = useState("");
  const [pwd, setPwd] = useState("");
  // 비밀번호 체크용(userPwd2)
  const [isSame, setIsSame] = useState(false);
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [tel, setTel] = useState("");
  // 임시값
  const [zip, setZip] = useState("12345");
  const [addr, setAddr] = useState("");
  const [addrDetail, setAddrDetail] = useState("");

  // 비밀번호 더블체크
  const checkPwd = (e) => {
    if (e.target.value === "") return;
    return pwd === e.target.value ? setIsSame(true) : setIsSame(false);
  };

  // 하이픈 자동 입력
  const insertHyphen = (e, num1, num2) => {
    // console.log(e.target.value.length, num);
    // console.log("키코드", e.keyCode);
    return (e.target.value.length === num1 || e.target.value.length === num2) &&
      e.keyCode !== 8 &&
      e.keyCode !== 46
      ? (e.target.value += "-")
      : e.target.value;
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    let body = {
      b_id: b_id,
      pwd: pwd,
      name: name,
      num: num,
      tel: tel,
      zip: zip,
      addr: addr + " " + addrDetail,
    };
    console.log("회사바디", body);
    axios
      .post("/wherewego/registertest", body)
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
        // window.history.back();
      });
  };

  return (
    <>
      <Header />
      <BodyLayout>
        <Form
          id="company_form"
          onSubmit={onSubmitForm}
          encType="multipart/form-data"
        >
          <CenterWrapper>
            <LineWrapper>
              <ItemContainer>
                <Label htmlFor="userId">아이디</Label>
                <FormInput
                  type="text"
                  name="b_id"
                  required
                  minLenght="6"
                  maxLength="14"
                  pattern="[A-Za-z]{1}\w{5,14}"
                  placeholder="아이디"
                  onKeyDown={(e) => setB_id(e.target.value)}
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
                  name="pwd"
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
                  name="bPwd2"
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
                <Label htmlFor="name">상호</Label>
                <FormInput
                  type="text"
                  name="name"
                  required
                  minLength="2"
                  maxLength="16"
                  placeholder="상호"
                  onKeyDown={(e) => setName(e.target.value)}
                />
                <ErrorMsg>올바른 상호명을 입력해 주세요.</ErrorMsg>
              </ItemContainer>
              <ItemContainer>
                <Label htmlFor="num">사업자등록번호</Label>
                <FormInput
                  type="text"
                  name="num"
                  placeholder="사업자등록번호   ex) 00-000-00000"
                  required
                  minLenght="12"
                  maxLength="12"
                  pattern="^[0-9]{2}-[0-9]{3}-[0-9]{5}$"
                  onKeyUp={(e) => insertHyphen(e, 2, 6)}
                />
                <ErrorMsg>올바른 사업자등록번호를 입력해 주세요.</ErrorMsg>
              </ItemContainer>
            </LineWrapper>
            <LineWrapper>
              <ItemContainer>
                <Label htmlFor="tel">대표 연락처</Label>
                <FormInput
                  type="text"
                  name="tel"
                  required
                  minLength="9"
                  maxLength="11"
                  placeholder="대표 연락처   ex) 0212349845"
                  pattern="^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$"
                  onKeyDown={(e) => setTel(e.target.value)}
                />
                <ErrorMsg>올바른 연락처를 입력해 주세요.</ErrorMsg>
              </ItemContainer>
            </LineWrapper>
            <LineWrapper>
              <ItemContainer>
                <Label htmlFor="addr">주소</Label>
                <FormInput
                  type="text"
                  name="addr"
                  id="addr"
                  width="32em"
                  className="optional"
                  onKeyUp={(e) => setAddr(e.target.value)}
                />
              </ItemContainer>
              <ItemContainer width="5em">
                <Label htmlFor="zip">우편번호</Label>
                <FormInput
                  type="text"
                  name="zip"
                  id="zip"
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
                  name="addrDetail"
                  id="addrDetail"
                  width="51em"
                  className="optional"
                  onKeyUp={(e) => setAddrDetail(e.target.value)}
                />
              </ItemContainer>
            </LineWrapper>
          </CenterWrapper>
          <SubmitSection>
            <SubmitButton type="submit">회원가입</SubmitButton>
          </SubmitSection>
        </Form>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default CompanyForm;
