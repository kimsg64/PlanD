import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import Form from "../components/body/mixin/Form";
import {
  BodyLayout,
  Button,
  Checkbox,
  CheckboxLabel,
  OptionsContainer,
} from "../components/body/mixin/Mixin";
import {
  ErrorMsg,
  FormInput,
  ItemContainer,
  Label,
  SubmitButton,
  LineWrapper,
} from "../components/body/registrationForm/FormMixin";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const BottomSection = styled.section`
  width: 100%;
`;

// 제출 박스 컨테이너
const SubmitSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const IndividualForm = ({ isIndividual = true }) => {
  const [userId, setUserId] = useState("");
  const [pwd, setPwd] = useState("");
  // 비밀번호 체크용(userPwd2)
  const [isSame, setIsSame] = useState(false);
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  // 임시값
  const [zip, setZip] = useState("12345");
  const [addr, setAddr] = useState("");
  const [addrDetail, setAddrDetail] = useState("");
  const [startdate, setStartdate] = useState("");
  const [photo, setPhoto] = useState(null);
  // 미리보기용 url
  const [photoUrl, setPhotoUrl] = useState("");
  const [opt, setOpt] = useState([]);

  // 비밀번호 더블체크
  const checkPwd = (e) => {
    if (e.target.value === "") return;
    return pwd === e.target.value ? setIsSame(true) : setIsSame(false);
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
      setPhoto(imageFile);
      setPhotoUrl(reader.result);
    };
    reader.readAsDataURL(imageFile);
  };

  // 체크박스 리스트 만들기
  const setOptList = (e) => {
    setOpt((prevState) => {
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
      pwd: pwd,
      name: name,
      num: num,
      tel: tel,
      email: email,
      zip: zip,
      addr: addr + " " + addrDetail,
      startdate: startdate,
      photoUrl: photoUrl,
      opt: opt.join("/"),
    };
    console.log("바디", body);

    axios
      .post("/wherewego/getUserData", body)
      .then((response) => {
        console.log("response : ", response.data);
        if (response.data > 0) {
          alert("회원가입이 완료되었습니다!");
          window.location.href = "http://localhost:3000/#/login";
        } else {
          alert("회원가입에 실패하였습니다...!!!");
        }
      })
      .catch((error) => {
        console.log("failed", error);
        alert("회원가입에 실패하였습니다...");
      });
  };

  return (
    <>
      <Header />
      <BodyLayout>
        <Form
          id="individual_form"
          onSubmit={onSubmitForm}
          encType="multipart/form-data"
        >
          <ItemContainer>
            <Label htmlFor="userId">아이디</Label>
            <FormInput
              type="text"
              name="userId"
              id="userId"
              required
              minLenght="6"
              maxLength="14"
              pattern="[A-Za-z]{1}\w{5,14}"
              placeholder="아이디"
              onKeyDown={(e) => setUserId(e.target.value)}
            />
            <ErrorMsg>
              아이디는 6~14자의 영문 대소문자, 숫자로 이루어져야 하며, 첫 글자는
              영문자만 입력할 수 있습니다.
            </ErrorMsg>
          </ItemContainer>
          <LineWrapper>
            <ItemContainer>
              <Label htmlFor="pwd">비밀번호</Label>
              <FormInput
                type="password"
                name="pwd"
                id="pwd"
                required
                minLength="8"
                maxLength="16"
                pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$"
                placeholder="비밀번호"
                onKeyDown={(e) => setPwd(e.target.value)}
              />
              <ErrorMsg>
                비밀번호는 8자 이상이어야 하며, 숫자, 영문 대소문자, 특수문자를
                모두 포함해야 합니다.
              </ErrorMsg>
            </ItemContainer>
            <ItemContainer>
              <Label htmlFor="userPwd2">비밀번호 확인</Label>
              <FormInput
                type="password"
                name="userPwd2"
                id="userPwd2"
                required
                maxLength="16"
                placeholder="비밀번호 확인"
                onKeyUp={checkPwd}
                className="check"
                isSame={isSame}
                autoComplete="new-password"
              />
              <ErrorMsg>비밀번호가 일치하지 않습니다.</ErrorMsg>
            </ItemContainer>
          </LineWrapper>
          <ItemContainer>
            <Label htmlFor="name">이름</Label>
            <FormInput
              type="text"
              name="name"
              id="name"
              required
              minLength="2"
              maxLength="8"
              placeholder="이름"
              pattern="^[가-힣]{2,8}$"
              onKeyDown={(e) => setName(e.target.value)}
            />
            <ErrorMsg>올바른 이름을 입력해 주세요.</ErrorMsg>
          </ItemContainer>
          <ItemContainer>
            <Label htmlFor="num">주민등록번호</Label>
            <FormInput
              type="text"
              name="num"
              id="num"
              required
              maxLength="14"
              placeholder="주민등록번호   ex) 000000-0000000"
              pattern="^[0-9]{2}[01]{1}[0-9]{1}[0-3]{1}[0-9]{1}-[0-9]{7}$"
              onKeyUp={(e) => insertHyphen(e, 6)}
              onKeyDown={(e) => setNum(e.target.value)}
            />
            <ErrorMsg>올바른 주민등록번호를 입력해 주세요.</ErrorMsg>
          </ItemContainer>
          <ItemContainer>
            <Label htmlFor="tel">연락처</Label>
            <FormInput
              type="text"
              name="tel"
              id="tel"
              required
              minLength="9"
              maxLength="11"
              placeholder="연락처   ex) 01012349874"
              pattern="^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$"
              onKeyDown={(e) => setTel(e.target.value)}
            />
            <Button type="button">본인 인증</Button>
            <ErrorMsg>올바른 연락처를 입력해 주세요.</ErrorMsg>
          </ItemContainer>

          <ItemContainer>
            <Label htmlFor="email">이메일</Label>
            <FormInput
              type="email"
              name="email"
              id="email"
              required
              placeholder="이메일   ex) abc@naver.com"
              pattern="^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$"
              onKeyDown={(e) => setEmail(e.target.value)}
            />
            <ErrorMsg>올바른 이메일 주소를 입력해 주세요.</ErrorMsg>
          </ItemContainer>
          <ItemContainer>
            <Label htmlFor="zip">우편번호</Label>
            <FormInput
              type="text"
              name="zip"
              id="zip"
              width="5em"
              className="optional"
              disabled
              placeholder="우편번호"
              // 임시 value
              value={zip}
            />
            {/* 임시로 클릭시 설정 */}
            <Button type="button">우편번호 검색</Button>
          </ItemContainer>
          <ItemContainer>
            <Label htmlFor="addr">주소</Label>
            <FormInput
              type="text"
              name="addr"
              id="addr"
              width="20em"
              className="optional"
              onKeyUp={(e) => setAddr(e.target.value)}
            />
          </ItemContainer>
          <ItemContainer>
            <Label htmlFor="addrDetail">상세주소</Label>
            <FormInput
              type="text"
              name="addrDetail"
              id="addrDetail"
              width="24em"
              className="optional"
              onKeyUp={(e) => setAddrDetail(e.target.value)}
            />
          </ItemContainer>
          <ItemContainer>
            <Label htmlFor="startdate">기념일</Label>
            <FormInput
              type="date"
              name="startdate"
              id="startdate"
              width="12em"
              className="optional"
              onChange={(e) => setStartdate(e.target.value)}
            />
          </ItemContainer>
          <BottomSection>
            <ItemContainer>
              <Label>관심사</Label>
              <OptionsContainer>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    name="user_option"
                    value="임시"
                    onClick={setOptList}
                  />
                  임시
                </CheckboxLabel>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    name="user_option"
                    value="로"
                    onClick={setOptList}
                  />
                  로
                </CheckboxLabel>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    name="user_option"
                    value="다양한 값을
                입력하여"
                    onClick={setOptList}
                  />
                  다양한 값을 입력하여
                </CheckboxLabel>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    name="user_option"
                    value="박스의 크기가 예쁘게 늘어나는지 확인하기 위한"
                    onClick={setOptList}
                  />
                  박스의 크기가 예쁘게 늘어나는지 확인하기 위한
                </CheckboxLabel>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    name="user_option"
                    value="체크박스입니다."
                    onClick={setOptList}
                  />
                  체크박스입니다.
                </CheckboxLabel>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    name="user_option"
                    value="아직"
                    onClick={setOptList}
                  />
                  아직
                </CheckboxLabel>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    name="user_option"
                    value="전달되지 않는다는 사실을 부디 명심하시고"
                    onClick={setOptList}
                  />
                  전달되지 않는다는 사실을 부디 명심하시고
                </CheckboxLabel>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    name="user_option"
                    value="전달되지 않는다고 엄한 노트북에 샷건을 치지 않기를"
                    onClick={setOptList}
                  />
                  전달되지 않는다고 엄한 노트북에 샷건을 치지 않기를
                </CheckboxLabel>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    name="user_option"
                    value="간절하게 바랍니다."
                    onClick={setOptList}
                  />
                  간절하게 바랍니다.
                </CheckboxLabel>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    name="user_option"
                    value="넌 왜 없니?"
                    onClick={setOptList}
                  />
                  넌 왜 없니?
                </CheckboxLabel>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    name="user_option"
                    value="아직도 있나?"
                    onClick={setOptList}
                  />
                  아직도 있나?
                </CheckboxLabel>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    name="user_option"
                    value="그만하자"
                    onClick={setOptList}
                  />
                  그만하자
                </CheckboxLabel>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    name="user_option"
                    value="이정도면 됐지"
                    onClick={setOptList}
                  />
                  이정도면 됐지
                </CheckboxLabel>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    name="user_option"
                    value="나중엔 DB에 있는거 가져와서 map으로 반복을 하겟쥬?"
                    onClick={setOptList}
                  />
                  나중엔 DB에 있는거 가져와서 map으로 반복을 하겟쥬?
                </CheckboxLabel>
              </OptionsContainer>
            </ItemContainer>
          </BottomSection>
          <SubmitSection>
            {/* <SubmitButton type="reset">초기화</SubmitButton> */}
            <SubmitButton type="submit">회원가입</SubmitButton>
          </SubmitSection>
        </Form>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default IndividualForm;
