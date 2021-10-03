import React from "react";
import Header from "../components/header/Header";
import BodyLayout from "../components/body/BodyLayout";
import Footer from "../components/footer/Footer";
import { Button } from "../components/body/mixin/Mixin";

const AdForAd = () => {
  return (
    <>
      <Header />
      <BodyLayout>
        <a href="http://localhost:9090/wherewego/">
          <Button>이걸 누르면 광고주 페이지로 넘어갑니다</Button>
        </a>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default AdForAd;
