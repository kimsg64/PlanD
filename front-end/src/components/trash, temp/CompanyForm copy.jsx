// ★★★ 미구현 기능
// 1. ID 중복 확인
// 2. 우편번호 검색
// 3. 회원가입 기능 체크하기

import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Form from "../mixin/Form";
import {
  SubmitButton,
  ItemContainer,
  LineItem,
  FormInput,
  ErrorMsg,
} from "../registrationForm/FormMixin";
import { Button } from "../mixin/Mixin";

const Container = styled.div`
  overflow: hidden;
  transition-delay: ${(props) => {
    return props.isVisible ? "0" : "0.7s";
  }};
  transition-duration: 0.7s;
  height: ${(props) => {
    return props.isVisible ? "0" : "72vh";
  }};
`;

const FlexForm = styled(Form)`
  align-items: flex-start;
`;

// 제출 박스 컨테이너
const SubmitSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const CompanyForm = ({ isIndividual = true }) => {
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
    <Container isVisible={isIndividual}>
      <FlexForm id="company_form" onSubmit={onSubmitForm}>
        <LineItem>
          <ItemContainer>
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
              아이디는 6~14자의 영문 대소문자, 숫자로 이루어져야 하며, 첫 글자는
              영문자만 입력할 수 있습니다.
            </ErrorMsg>
          </ItemContainer>
          <Button type="button">중복 확인</Button>
        </LineItem>
        <LineItem>
          <ItemContainer>
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
              비밀번호는 8자 이상이어야 하며, 숫자, 영문 대소문자, 특수문자를
              모두 포함해야 합니다.
            </ErrorMsg>
          </ItemContainer>
          <ItemContainer>
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
        </LineItem>
        <LineItem>
          <ItemContainer>
            <FormInput
              type="text"
              name="name"
              required
              minLength="2"
              maxLength="16"
              placeholder="상호"
              onKeyDown={(e) => setName(e.target.value)}
            />
            <ErrorMsg>올바른 이름을 입력해 주세요.</ErrorMsg>
          </ItemContainer>
          <ItemContainer>
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
        </LineItem>
        <LineItem>
          <ItemContainer>
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
          <ItemContainer>
            <FormInput
              type="text"
              name="addr"
              className="optional"
              placeholder="주소"
              onKeyUp={(e) => setAddr(e.target.value)}
            />
          </ItemContainer>
          <ItemContainer>
            <FormInput
              type="text"
              name="zip"
              width="5em"
              className="optional"
              disabled
              // 임시 value
              value={zip}
            />
            {/* 임시로 클릭시 설정 */}
            <Button type="button">우편번호 검색</Button>
          </ItemContainer>
        </LineItem>
        <ItemContainer>
          <FormInput
            type="text"
            name="addrDetail"
            width="24em"
            className="optional"
            placeholder="나머지 주소"
            onKeyUp={(e) => setAddrDetail(e.target.value)}
          />
        </ItemContainer>
        <SubmitSection>
          <SubmitButton type="submit">회원가입</SubmitButton>
        </SubmitSection>
      </FlexForm>
    </Container>
  );
};

export default CompanyForm;
