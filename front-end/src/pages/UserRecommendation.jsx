import React, { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Form from "../components/body/mixin/Form";
import {
  BodyLayout,
  Button,
  Input,
  SearchBar,
} from "../components/body/mixin/Mixin";
import Modal from "../components/body/mixin/Modal";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import KakaoSearchFormInput from "../components/body/map/KakaoMapSearchFormInput";
import ModalBG from "../components/body/mixin/ModalBG";

const UserRecommendation = () => {
  const [showModal, setShowModal] = useState(false);
  const onClickSearchButton = () => {
    setShowModal(true);
  };
  return (
    <>
      <Header />
      <BodyLayout>
        <Form>
          <label>
            코스명
            <Input type="text" width="40em" />
          </label>
          <label>
            역
            <Input type="text" placeholder="노선" />
            <Input type="text" placeholder="역" />
          </label>

          <div>
            <SearchBar width="12em">
              <Input type="text" placeholder="장소1" />
              <Button type="button" onClick={onClickSearchButton}>
                <i className="fas fa-search"></i>
              </Button>
            </SearchBar>
            {showModal ? (
              <ModalBG setShowModal={setShowModal}>
                <Modal>
                  <div>
                    <KakaoSearchFormInput />
                  </div>
                </Modal>
              </ModalBG>
            ) : null}
          </div>
          <SearchBar width="12em">
            <Input type="text" placeholder="장소2" />
            <Button type="button">
              <i className="fas fa-search"></i>
            </Button>
          </SearchBar>

          <SearchBar width="12em">
            <Input type="text" placeholder="장소3" />
            <Button type="button">
              <i className="fas fa-search"></i>
            </Button>
          </SearchBar>

          <CKEditor editor={ClassicEditor}></CKEditor>
        </Form>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default UserRecommendation;
