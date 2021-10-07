import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Form from "../mixin/Form";
import {
  Label,
  SubmitButton,
  ItemContainer,
  FormInput,
  Hyphen,
} from "./FormMixin";
import { Button } from "../mixin/Mixin";

const Container = styled.div`
  overflow: hidden;
  transition-delay: ${(props) => {
    return props.isVisible ? "0" : "0.5s";
  }};
  transition-duration: 0.5s;
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
  const [test, setTest] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let body = {
      testData: test,
    };
    axios
      // .post("/wherewego/user/getUserData", body)
      .post("/wherewego/registertest", body)
      .then((response) => console.log(response));
    // window.location.href = "http://localhost:3000/";
  };

  return (
    <Container isVisible={isIndividual}>
      <FlexForm id="company-form" onSubmit={handleSubmit}>
        <ItemContainer>
          <Label>아이디</Label>
          <FormInput type="text" name="" />
          <Button>중복 확인</Button>
        </ItemContainer>
        <ItemContainer>
          <Label>비밀번호</Label>
          <FormInput type="password" name="" />
        </ItemContainer>
        <ItemContainer>
          <Label>비밀번호 확인</Label>
          <FormInput type="password" name="" autoComplete="new-password" />
        </ItemContainer>
        <ItemContainer>
          <Label>상호명</Label>
          <FormInput type="text" name="" />
        </ItemContainer>
        <ItemContainer>
          <Label>사업자등록번호</Label>
          <FormInput type="text" name="" placeholder="2자리" />
          <Hyphen> - </Hyphen>
          <FormInput type="text" name="" placeholder="3자리" />
          <Hyphen> - </Hyphen>
          <FormInput type="text" name="" placeholder="5자리" />
        </ItemContainer>
        <ItemContainer>
          <Label>대표 연락처</Label>
          <FormInput type="text" name="" />
        </ItemContainer>
        <ItemContainer>
          <Label>대표 이메일</Label>
          <FormInput type="email" name="" />
        </ItemContainer>
        <ItemContainer>
          <Label>우편번호</Label>
          <FormInput type="text" name="" />
          <Button>우편번호 검색</Button>
        </ItemContainer>
        <ItemContainer>
          <Label>주소</Label>
          <FormInput type="text" name="" />
        </ItemContainer>
        <ItemContainer>
          <Label>상세주소</Label>
          <FormInput type="text" name="" />
        </ItemContainer>

        <SubmitSection>
          <SubmitButton as="FormInput" type="reset" value="초기화" />
          <SubmitButton as="FormInput" type="submit" value="회원가입" />
        </SubmitSection>
      </FlexForm>
    </Container>
  );
};

export default CompanyForm;
