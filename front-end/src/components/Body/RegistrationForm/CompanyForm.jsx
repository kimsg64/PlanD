import React, { useState } from "react";
import axios from "axios";
import Form from "./Form";
import Label from "./Label";
import Button from "../Button";

const CompanyForm = () => {
  const [test, setTest] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let body = {
      testData: test,
    };
    console.log(body);
    axios
      .post("/wherewego/registertest", body)
      // .post("http://localhost:9090/wherewego/registertest", body)
      .then((response) => console.log(response));
    // window.location.href = "http://localhost:3000/";
  };

  const handleTest = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setTest(e.target.value);
  };

  return (
    <form id="company-form" onSubmit={handleSubmit}>
      <Label>
        테스트용
        <input type="text" name="test" value={test} onChange={handleTest} />
      </Label>
      {/* <Button form="company-form">제출</Button> */}
      <input type="submit" value="제출" />
    </form>
  );
};

export default CompanyForm;
