import React from "react";
import Header from "../components/header/Header";
import BodyLayout from "../components/body/BodyLayout";
import Footer from "../components/footer/Footer";
import Form from "../components/body/mixin/Form";
import { Input } from "../components/body/mixin/Mixin";

const UserRecommendation = () => {
  return (
    <>
      <Header />
      <BodyLayout>
        <Form>
          <Input type="text" placeholder="코스명" />
          <Input type="text" placeholder="호선" />
          <Input type="text" placeholder="역" />
          <Input type="text" placeholder="시간대" />
          <Input type="text" placeholder="장소1" />
          <Input type="text" placeholder="장소2" />
          <Input type="text" placeholder="장소3" />
          <Input type="text" placeholder="상세설명" />
        </Form>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default UserRecommendation;
