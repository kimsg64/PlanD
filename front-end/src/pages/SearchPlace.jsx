import React from "react";
import Header from "../components/header/Header";
import {
  BodyLayout,
  MenuTitle,
  TitleIconWrapper,
} from "../components/body/mixin/Mixin";
import Footer from "../components/footer/Footer";
import KakaoMapSearchFormInput from "../components/body/map/KakaoMapSearchFormInput";

const SearchPlace = () => {
  return (
    <>
      <Header />
      <BodyLayout>
        <MenuTitle>장소로 검색하기</MenuTitle>
        <KakaoMapSearchFormInput />
        <div>장소 설명</div>
        <div>관련 코스</div>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default SearchPlace;
