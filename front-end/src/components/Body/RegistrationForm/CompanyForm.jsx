import React, { useState } from "react";
import axios from "axios";
import Form from "./Form";
import { Label } from "../mixin/Mixin";
import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
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
          테스트용
          <input type="text" name="test" value={test} onChange={handleTest} />
        </Label>
        {/* <Button form="company-form">제출</Button> */}
        <input type="submit" value="제출" />
      </Form>
    </Container>
  );
};

export default CompanyForm;
