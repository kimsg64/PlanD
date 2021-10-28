import React, { useState } from "react";
import Header from "../components/header/Header";
import { BodyLayout, MenuTitle } from "../components/body/mixin/Mixin";
import Footer from "../components/footer/Footer";
import KakaoMapSearchFormInput from "../components/body/map/KakaoMapSearchFormInput";

const SearchPlace = () => {
  const [selectedSort, setSelectedSort] = useState(""); // sort
  const [selectedPcode, setSelectedPcode] = useState(""); // pcode
  const [clickedPlace, setClickedPlace] = useState(""); // name
  const [clickedPlaceAddr, setClickedPlaceAddr] = useState(""); // addr
  const [clickedPlaceTel, setClickedPlaceTel] = useState(""); // tel
  return (
    <>
      <Header />
      <BodyLayout>
        <MenuTitle>장소로 검색하기</MenuTitle>
        <KakaoMapSearchFormInput
          clickedPlace={clickedPlace}
          setClickedPlace={setClickedPlace}
          setClickedPlaceAddr={setClickedPlaceAddr}
          setClickedPlaceTel={setClickedPlaceTel}
          setSelectedSort={setSelectedSort}
          setSelectedPcode={setSelectedPcode}
        />
      </BodyLayout>
      <Footer />
    </>
  );
};

export default SearchPlace;
