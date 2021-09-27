// ★★★ 유효성 검사 시, null 값이 전달될 때 커스텀 경고가 뜨지 않는 현상 해결
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Form from "./Form";
import {
  Button,
  Label,
  Input,
  Checkbox,
  CheckboxLabel,
  SubmitButton,
  ItemContainer,
  ErrorMsg,
} from "../registrationForm/FormMixin";

const Container = styled.div`
  overflow: hidden;
  transition-delay: ${(props) => {
    return props.isVisible ? "0.5s" : "0";
  }};
  // auto에는 트랜지션 속도가 적용되지 않는 듯
  transition-duration: 0.5s;
  height: ${(props) => {
    return props.isVisible ? "120vh" : "0";
  }};
`;

const TopSection = styled.section`
  width: 100%;
  display: flex;
`;

const LeftSection = styled.section`
  width: 72%;
`;
const RightSection = styled.section`
  width: 28%;
  padding: var(--padding-default);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const BottomSection = styled.section`
  width: 100%;
`;

// 옵션 컨테이너
const OptionsContainer = styled.div`
  max-width: 44vw;
  height: auto;
  margin-top: var(--margin-default);
  border: 2px solid var(--color-brown);
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  padding: var(--padding-default);
`;

// 사진 입력 컨테이너
const UserImgContainer = styled.div`
  width: 240px;
  height: 240px;
  overflow: hidden;
  border-radius: 50%;
  margin-bottom: var(--margin-line-space);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size-huge);
  background-color: var(--color-lightpink);
  img {
    height: 100%;
  }
`;

// 제출 박스 컨테이너
const SubmitSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const IndividualForm = ({ isIndividual = true }) => {
  const [userId, setUserId] = useState("");
  const [userPwd, setUserPwd] = useState("");
  // 비밀번호 체크용(userPwd2)
  const [isSame, setIsSame] = useState(false);
  const [userName, setUserName] = useState("");
  const [userNum, setUserNum] = useState("");
  const [userTel, setUserTel] = useState("");
  const [userEmail, setUserEmail] = useState("");
  // 임시값
  const [userZipcode, setUserZipcode] = useState("12345");
  const [userAddr, setUserAddr] = useState("");
  const [userAddrDetail, setUserAddrDetail] = useState("");
  const [userDate, setUserDate] = useState("");
  const [userPhoto, setUserPhoto] = useState(null);
  // 미리보기용 url
  const [userPhotoUrl, setUserPhotoUrl] = useState("");
  const [userOption, setUserOption] = useState([]);

  // 비밀번호 더블체크
  const checkPwd = (e) => {
    if (e.target.value === "") return;
    return userPwd === e.target.value ? setIsSame(true) : setIsSame(false);
  };

  // 하이픈 자동 입력
  const insertHyphen = (e, num) => {
    // console.log(e.target.value.length, num);
    // console.log("키코드", e.keyCode);
    return e.target.value.length === num && e.keyCode !== 8 && e.keyCode !== 46
      ? (e.target.value += "-")
      : e.target.value;
  };

  // 업로드 이미지 미리보기
  const onChangePhoto = (e) => {
    const imageFile = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setUserPhoto(imageFile);
      setUserPhotoUrl(reader.result);
    };
    reader.readAsDataURL(imageFile);
  };

  // 체크박스 리스트 만들기
  const setUserOptionList = (e) => {
    setUserOption((prevState) => {
      console.log(prevState);
      return prevState.includes(e.target.value)
        ? prevState.filter((opt) => opt !== e.target.value)
        : [...prevState, e.target.value];
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const body = {
      userId: userId,
      userPwd: userPwd,
      userName: userName,
      userNum: userNum,
      userTel: userTel,
      userEmail: userEmail,
      userZipcode: userZipcode,
      userAddr: userAddr,
      userAddrDetail: userAddrDetail,
      userDate: userDate,
      userPhotoUrl: userPhotoUrl,
      userOption: userOption.join("/"),
    };
    console.log("바디", body);

    // 이미지 전송용
    // const formData = new FormData();
    // formData.append("individualData", data[0]);

    axios
      .post(
        "/wherewego/user/getUserData",
        body
        // , { headers: { "Content-Type": `multipart/form-data` } },
      )
      .then((response) => {
        console.log("response : ", JSON.stringify(response, null, 2));
        alert("회원가입이 완료되었습니다!");
        // window.location.href = "http://localhost:3000/";
      })
      .catch((error) => {
        console.log("failed", error);
        alert("회원가입에 실패하였습니다...");
        // window.history.back();
      });
  };

  return (
    <Container isVisible={isIndividual}>
      <Form
        id="individual_form"
        onSubmit={onSubmitForm}
        encType="multipart/form-data"
      >
        <TopSection>
          <LeftSection>
            <ItemContainer>
              <Label htmlFor="userId">아이디</Label>
              <Input
                type="text"
                name="userId"
                id="userId"
                required
                minLenght="6"
                maxLength="14"
                pattern="[A-Za-z]{1}\w{5,14}"
                placeholder=" "
                onKeyDown={(e) => setUserId(e.target.value)}
              />
              <Button type="button">중복 확인</Button>
              <ErrorMsg>
                아이디는 6~14자의 영문 대소문자, 숫자로 이루어져야 하며, 첫
                글자는 영문자만 입력할 수 있습니다.
              </ErrorMsg>
            </ItemContainer>
            <ItemContainer>
              <Label htmlFor="userPwd">비밀번호</Label>
              <Input
                type="password"
                name="userPwd"
                id="userPwd"
                required
                minLength="8"
                maxLength="16"
                pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$"
                placeholder=" "
                onKeyDown={(e) => setUserPwd(e.target.value)}
              />
              <ErrorMsg>
                비밀번호는 8자 이상이어야 하며, 숫자, 영문 대소문자, 특수문자를
                모두 포함해야 합니다.
              </ErrorMsg>
            </ItemContainer>
            <ItemContainer>
              <Label htmlFor="userPwd2">비밀번호 확인</Label>
              <Input
                type="password"
                name="userPwd2"
                id="userPwd2"
                required
                maxLength="16"
                placeholder=" "
                onKeyUp={checkPwd}
                className="check"
                isSame={isSame}
                autoComplete="new-password"
                onKeyDown={(e) => setUserName(e.target.value)}
              />
              <ErrorMsg>비밀번호가 일치하지 않습니다.</ErrorMsg>
            </ItemContainer>
            <ItemContainer>
              <Label htmlFor="userName">이름</Label>
              <Input
                type="text"
                name="userName"
                id="userName"
                required
                minLength="2"
                maxLength="8"
                placeholder=" "
                pattern="^[가-힣]{2,8}$"
              />
              <ErrorMsg>올바른 이름을 입력해 주세요.</ErrorMsg>
            </ItemContainer>
            <ItemContainer>
              <Label htmlFor="userNum">주민등록번호</Label>
              {/* length가 6이 되면 밸류에 하이픈이 자동으로 입력됨 */}
              <Input
                type="text"
                name="userNum"
                id="userNum"
                required
                maxLength="14"
                placeholder="-"
                pattern="^[0-9]{2}[01]{1}[0-9]{1}[0-3]{1}[0-9]{1}-[0-9]{7}$"
                onKeyUp={(e) => insertHyphen(e, 6)}
                onKeyDown={(e) => setUserNum(e.target.value)}
              />
              <ErrorMsg>올바른 주민등록번호를 입력해 주세요.</ErrorMsg>
            </ItemContainer>
            <ItemContainer>
              <Label htmlFor="userTel">연락처</Label>
              <Input
                type="text"
                name="userTel"
                id="userTel"
                required
                minLength="9"
                maxLength="11"
                placeholder="'-' 없이 입력해 주세요"
                pattern="^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$"
                onKeyDown={(e) => setUserTel(e.target.value)}
              />
              <ErrorMsg>올바른 연락처를 입력해 주세요.</ErrorMsg>
            </ItemContainer>

            {/* 여기부터 유효성 검사 재개 */}
            <ItemContainer>
              <Label htmlFor="userEmail">이메일</Label>
              <Input
                type="email"
                name="userEmail"
                id="userEmail"
                width="20em"
                required
                placeholder="@"
                pattern="^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$"
                onKeyDown={(e) => setUserEmail(e.target.value)}
              />
              <ErrorMsg>올바른 이메일 주소를 입력해 주세요.</ErrorMsg>
            </ItemContainer>
            <ItemContainer>
              <Label htmlFor="userZipcode">우편번호</Label>
              <Input
                type="text"
                name="userZipcode"
                id="userZipcode"
                width="5em"
                className="optional"
                disabled
                // 임시 value
                value={userZipcode}
              />
              {/* 임시로 클릭시 설정 */}
              <Button type="button">우편번호 검색</Button>
            </ItemContainer>
            <ItemContainer>
              <Label htmlFor="userAddr">주소</Label>
              <Input
                type="text"
                name="userAddr"
                id="userAddr"
                width="20em"
                className="optional"
                onKeyDown={(e) => setUserAddr(e.target.value)}
              />
            </ItemContainer>
            <ItemContainer>
              <Label htmlFor="userAddrDetail">상세주소</Label>
              <Input
                type="text"
                name="userAddrDetail"
                id="userAddrDetail"
                width="24em"
                className="optional"
                onKeyDown={(e) => setUserAddrDetail(e.target.value)}
              />
            </ItemContainer>
            <ItemContainer>
              <Label htmlFor="userDate">기념일</Label>
              <Input
                type="date"
                name="userDate"
                id="userDate"
                width="12em"
                className="optional"
                onChange={(e) => setUserDate(e.target.value)}
              />
            </ItemContainer>
          </LeftSection>
          <RightSection>
            <UserImgContainer>
              {userPhoto === null ? (
                <i className="far fa-user"></i>
              ) : (
                <img src={userPhotoUrl} alt="preview" />
              )}
            </UserImgContainer>
            <Button as="Label" htmlFor="userPhoto" weight="600">
              파일 선택
            </Button>
            <Input
              type="file"
              id="userPhoto"
              name="userPhoto"
              accept="image/*"
              onChange={onChangePhoto}
            />
          </RightSection>
        </TopSection>

        {/* 바텀 폼 */}
        <BottomSection>
          <ItemContainer>
            <Label>관심사</Label>
            <OptionsContainer>
              <CheckboxLabel>
                <Checkbox
                  type="checkbox"
                  name="user_option"
                  value="임시"
                  onClick={setUserOptionList}
                />
                임시
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox
                  type="checkbox"
                  name="user_option"
                  value="로"
                  onClick={setUserOptionList}
                />
                로
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox
                  type="checkbox"
                  name="user_option"
                  value="다양한 값을
                입력하여"
                  onClick={setUserOptionList}
                />
                다양한 값을 입력하여
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox
                  type="checkbox"
                  name="user_option"
                  value="박스의 크기가 예쁘게 늘어나는지 확인하기 위한"
                  onClick={setUserOptionList}
                />
                박스의 크기가 예쁘게 늘어나는지 확인하기 위한
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox
                  type="checkbox"
                  name="user_option"
                  value="체크박스입니다."
                  onClick={setUserOptionList}
                />
                체크박스입니다.
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox
                  type="checkbox"
                  name="user_option"
                  value="아직"
                  onClick={setUserOptionList}
                />
                아직
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox
                  type="checkbox"
                  name="user_option"
                  value="전달되지 않는다는 사실을 부디 명심하시고"
                  onClick={setUserOptionList}
                />
                전달되지 않는다는 사실을 부디 명심하시고
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox
                  type="checkbox"
                  name="user_option"
                  value="전달되지 않는다고 엄한 노트북에 샷건을 치지 않기를"
                  onClick={setUserOptionList}
                />
                전달되지 않는다고 엄한 노트북에 샷건을 치지 않기를
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox
                  type="checkbox"
                  name="user_option"
                  value="간절하게 바랍니다."
                  onClick={setUserOptionList}
                />
                간절하게 바랍니다.
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox
                  type="checkbox"
                  name="user_option"
                  value="넌 왜 없니?"
                  onClick={setUserOptionList}
                />
                넌 왜 없니?
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox
                  type="checkbox"
                  name="user_option"
                  value="아직도 있나?"
                  onClick={setUserOptionList}
                />
                아직도 있나?
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox
                  type="checkbox"
                  name="user_option"
                  value="그만하자"
                  onClick={setUserOptionList}
                />
                그만하자
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox
                  type="checkbox"
                  name="user_option"
                  value="이정도면 됐지"
                  onClick={setUserOptionList}
                />
                이정도면 됐지
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox
                  type="checkbox"
                  name="user_option"
                  value="나중엔 DB에 있는거 가져와서 map으로 반복을 하겟쥬?"
                  onClick={setUserOptionList}
                />
                나중엔 DB에 있는거 가져와서 map으로 반복을 하겟쥬?
              </CheckboxLabel>
            </OptionsContainer>
          </ItemContainer>
        </BottomSection>
        <SubmitSection>
          <SubmitButton as="input" type="reset" value="초기화" />
          <SubmitButton as="input" type="submit" value="회원가입" />
        </SubmitSection>
      </Form>
    </Container>
  );
};

export default IndividualForm;
