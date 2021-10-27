import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  BodyLayout,
  Button,
  Input,
  MenuTitle,
  ReviewIcon,
  ReviewImageBox,
  ReviewItem,
  ReviewProfileBox,
  ReviewTextBox,
} from "../components/body/mixin/Mixin";
import Stars from "../components/body/mixin/Stars";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const ReviewItemWidthMargin = styled(ReviewItem)`
  margin-top: var(--margin-default);
  height: auto;
`;

const ReviewInput = styled(Input)`
  width: 100%;
  background-color: inherit;
  text-align: left;
  border-bottom: 1px solid grey;
`;

const UserInfo = styled.div`
  width: calc(100% - 60px);
`;

const NameAndStar = styled.div`
  display: flex;
`;

const UserName = styled.div`
  width: 48%;
  min-width: 120px;
  font-size: var(--font-size-large);
`;

const UserHistory = styled.div`
  font-size: var(--font-size-normal);
`;

const UserReview = () => {
  const [photo, setPhoto] = useState(null);
  const [photoUrl, setPhotoUrl] = useState("");
  const [score, setScore] = useState(1);
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    setIsEditable(true);
  }, []);

  const onChangePhoto = (e) => {
    const imageFile = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setPhoto(imageFile);
      setPhotoUrl(reader.result);
    };
    reader.readAsDataURL(imageFile);
    // console.log(photo);
    // console.log(photoUrl);
  };

  const onSubmitReview = () => {
    const body = {
      // c_num: c_num,
      // r_num: r_num,
      // photo: photo,
      // info: info,
      // score: score,
    };

    axios
      .post("", body)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Header />
      <BodyLayout>
        <MenuTitle>리뷰 작성</MenuTitle>
        <ReviewItemWidthMargin as="form">
          <ReviewInput type="text" />
          <ReviewImageBox>
            <img src={photoUrl} alt="preview" />
          </ReviewImageBox>
          <ReviewInput
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={onChangePhoto}
            placeholder="리뷰 제목을 입력하세요"
          />
          <ReviewTextBox as="textarea" />
          <ReviewProfileBox>
            <ReviewIcon>
              <img
                // src={`${process.env.PUBLIC_URL}/images/users/${review.userid}.jpg`}
                alt="user_icon"
              />
            </ReviewIcon>
            <UserInfo>
              <NameAndStar>
                <UserName>ㅎㅎ</UserName>
                <Stars score={10} setScore={setScore} isEditable={isEditable} />
              </NameAndStar>
              <UserHistory>
                {/* {"20" + review.resdate.split("/")[0]}. */}
                {/* {review.resdate.split("/")[1]}.{review.resdate.split("/")[2]}{" "} */}
                방문
              </UserHistory>
            </UserInfo>
          </ReviewProfileBox>
          <Button onSubmit={onSubmitReview}>작성완료</Button>
        </ReviewItemWidthMargin>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default UserReview;
