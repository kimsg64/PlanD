import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Form from "../components/body/mixin/Form";
import {
  BodyLayout,
  Button,
  Input,
  SearchBar,
} from "../components/body/mixin/Mixin";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const UserRecommendation = () => {
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
          <SearchBar width="12em">
            <Input type="text" placeholder="장소1" />
            <Button>
              <i className="fas fa-search"></i>
            </Button>
            {/* <KakaoMapSearchFormInput /> */}
          </SearchBar>
          <SearchBar width="12em">
            <Input type="text" placeholder="장소2" />
            <Button>
              <i className="fas fa-search"></i>
            </Button>
          </SearchBar>
          <SearchBar width="12em">
            <Input type="text" placeholder="장소3" />
            <Button>
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
