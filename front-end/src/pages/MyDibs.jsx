import React from "react";
import Header from "../components/header/Header";
import { BodyLayout } from "../components/body/mixin/Mixin";
import Footer from "../components/footer/Footer";

const MyDibs = () => {
  return (
    <>
      <Header />
      <BodyLayout></BodyLayout>
      <Footer />
    </>
  );
};

export default MyDibs;
