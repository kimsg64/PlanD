import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const SignUpForm = styled.form`
  width: 72vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

// Form 컴포넌트가 form 역할을 하지 못하므로 ...props를 통해 submit 함수도 전달해야 함
const Form = ({ children, ...props }) => {
  const [data, setData] = useState([]);

  const handleSubmit = (userInfo) => {
    userInfo.preventDefault();
    console.log("이벤트", userInfo);
    const formData = new FormData();
    formData.append("individualData", data[0]);
    console.log(formData);
    axios
      .post("http://localhost:9090/wherewego/registertest", formData, {
        headers: { "Content-Type": `multipart/form-data` },
      })
      .then((response) => {
        console.log("response : ", JSON.stringify(response, null, 2));
      })
      .catch((error) => {
        console.log("failed", error);
      });
    console.log(userInfo);
    setData(userInfo);
  };
  console.log("form", props);

  return (
    <SignUpForm
      encType="multipart/form-data"
      onSubmit={handleSubmit}
      {...props}
    >
      {children}
    </SignUpForm>
  );
};

export default Form;
