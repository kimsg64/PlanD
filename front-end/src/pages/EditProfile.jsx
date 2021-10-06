import React from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import { BodyLayout } from "../components/body/mixin/Mixin";
import Footer from "../components/footer/Footer";

const EditProfile = () => {
  return (
    <>
      <Header />
      <BodyLayout></BodyLayout>
      <Footer />
    </>
  );
};

export default EditProfile;