import React from "react";
import Header from "../components/header/Header";
import BodyLayout from "../components/body/BodyLayout";
import Footer from "../components/footer/Footer";
import KakaoMapResult from "../components/body/map/KakaoMapResult";
import { Button } from "../components/body/mixin/Mixin";

const Result = () => {
  return (
    <>
      <Header />
      <BodyLayout>
        {/* 요약 */}
        <div>
          <div>코스명</div>
          <div>시간</div>
          <div>역</div>
        </div>
        <div>
          <div>소제목</div>
          <KakaoMapResult />
          <div>장소 소개</div>
        </div>
        <Button>다시 선택하기</Button>
        <Button>휴대폰 알람 설정하기</Button>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default Result;
