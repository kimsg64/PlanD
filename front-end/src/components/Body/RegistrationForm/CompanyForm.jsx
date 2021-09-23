import React, { useState } from "react";
import axios from "axios";
import Form from "./Form";
import { Label } from "../mixin/Mixin";
import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
  transition-delay: ${(props) => {
    return props.isVisible ? "0" : "0.5s";
  }};
  transition-duration: 0.5s;
  height: ${(props) => {
    return props.isVisible ? "0" : "120vh";
  }};
`;

const CompanyForm = ({ isIndividual = true }) => {
  const [test, setTest] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let body = {
      testData: test,
    };
    axios
      .post("/wherewego/registertest", body)
      .then((response) => console.log(response));
    window.location.href = "http://localhost:3000/";
  };

  const handleTest = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setTest(e.target.value);
  };

  return (
    <Container isVisible={isIndividual}>
      <Form id="company-form" onSubmit={handleSubmit}>
        <Label>
          아이디
          <input type="text" name="test" value={test} onChange={handleTest} />
        </Label>
        <Label>
          비밀번호
          <input type="text" name="test" value={test} onChange={handleTest} />
        </Label>
        <Label>
          상호명
          <input type="text" name="test" value={test} onChange={handleTest} />
        </Label>
        <Label>
          사업자등록번호
          <input type="text" name="test" value={test} onChange={handleTest} />
        </Label>
        <Label>
          대표연락처
          <input type="text" name="test" value={test} onChange={handleTest} />
        </Label>
        <Label>
          우편번호
          <input type="text" name="test" value={test} onChange={handleTest} />
        </Label>
        <Label>
          주소
          <input type="text" name="test" value={test} onChange={handleTest} />
        </Label>
        <Label>
          상세주소
          <input type="text" name="test" value={test} onChange={handleTest} />
        </Label>

        <input type="submit" value="제출" />
      </Form>
    </Container>
  );
};

export default CompanyForm;
