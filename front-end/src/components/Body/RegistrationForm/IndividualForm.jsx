import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Form from "./Form";
import {
  Button,
  Label,
  Input,
  Hyphen,
  Checkbox,
  CheckboxLabel,
} from "../mixin/Mixin";

const Container = styled.div`
  overflow: hidden;
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

// 각 항목 스타일링
const ItemContainer = styled.div`
  width: auto;
  margin-top: calc(var(--margin-default) / 2);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* Null시 출력될 주의사항 */
  ::after {
    margin-left: calc(var(--margin-default) / 4);
    font-size: var(--font-size-tiny);
    color: var(--color-pink);
    /* display: none; */
  }
`;

const IDContainer = styled(ItemContainer)`
  ::after {
    content: "아이디 중복 여부를 확인해 주세요!";
    margin-left: 0;
  }
`;
const PWDContainer = styled(ItemContainer)`
  ::after {
    content: "비밀번호를 입력해 주세요!";
  }
`;
const PWDCheckContainer = styled(ItemContainer)`
  ::after {
    content: "비밀번호 일치 여부를 확인해 주세요!";
  }
`;
const NameContainer = styled(ItemContainer)`
  ::after {
    content: "이름을 입력해 주세요!";
  }
`;
const PersonalNumContainer = styled(ItemContainer)`
  ::after {
    content: "유효한 주민등록번호를 입력해 주세요!";
  }
`;
const PhoneNumContainer = styled(ItemContainer)`
  ::after {
    content: "연락처를 입력해 주세요!";
  }
`;

const PersonalNumInput = styled(Input)`
  width: 4.5em;
`;
const PhoneNumInput = styled(Input)`
  width: 3em;
`;
const EmailInput = styled(Input)`
  width: 12em;
`;
const ZipcodeInput = styled(Input)`
  width: 4em;
`;
const AddrInput = styled(Input)`
  width: 20em;
`;
const AddrDetailInput = styled(Input)`
  width: 24em;
`;
const AnniversaryInput = styled(Input)`
  width: 10em;
`;

const OptionsContainer = styled.div`
  max-width: 40vw;
  height: auto;
  margin-top: var(--margin-default);
  border: 2px solid var(--color-brown);
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  padding: var(--padding-default);
`;

const UserImgContainer = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  margin-bottom: var(--margin-line-space);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 160px;
  background-color: var(--color-lightpink);
`;

const IndividualForm = ({ isIndividual = true }) => {
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("이벤트", e);
    const formData = new FormData();
    formData.append("individualData", data[0]);
    axios
      .post("http://localhost:9090/wherewego/registertest", formData, {
        headers: { "Content-Type": `multipart/form-data` },
      })
      .then((response) => {
        console.log("response : ", JSON.stringify(response, null, 2));
      })
      .catch((error) => {
        console.log("failed", error);
      });
    setData(e.target.value);
    console.log(formData);
  };

  const handleData = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setData(e.target.value);
  };
  return (
    <Container isVisible={isIndividual}>
      <Form
        id="individual_form"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <TopSection>
          <LeftSection>
            <IDContainer>
              <Label>아이디</Label>
              <Input
                type="text"
                name="user_id"
                id="user_id"
                value={data}
                onChange={handleData}
              />
              <Button>중복 확인</Button>
            </IDContainer>
            <PWDContainer>
              <Label>비밀번호</Label>
              <Input type="password" name="user_pwd" id="user_pwd" />
            </PWDContainer>
            <PWDCheckContainer>
              <Label>비밀번호 확인</Label>
              <Input type="password" name="user_pwdcheck" id="user_pwdcheck" />
            </PWDCheckContainer>
            <NameContainer>
              <Label>이름</Label>
              <Input type="text" name="user_name" id="user_name" />
            </NameContainer>
            <PersonalNumContainer>
              <Label>주민등록번호</Label>
              <PersonalNumInput type="number" name="user_num1" id="user_num1" />
              <Hyphen> - </Hyphen>
              <PersonalNumInput
                type="password"
                name="user_num2"
                id="user_num2"
              />
            </PersonalNumContainer>
            <PhoneNumContainer>
              <Label>연락처</Label>
              <PhoneNumInput type="select" name="user_tel1" id="user_tel1" />
              <Hyphen> - </Hyphen>
              <PhoneNumInput type="number" name="user_tel2" id="user_tel2" />
              <Hyphen> - </Hyphen>
              <PhoneNumInput type="number" name="user_tel3" id="user_tel3" />
            </PhoneNumContainer>
            <ItemContainer>
              <Label>이메일</Label>
              <EmailInput tyoe="email"></EmailInput>
            </ItemContainer>
            <ItemContainer>
              <Label>우편번호</Label>
              <ZipcodeInput
                type="number"
                name="user_zipcode"
                id="user_zipcode"
              />
              <Button>우편번호 검색</Button>
            </ItemContainer>
            <ItemContainer>
              <Label>주소</Label>
              <AddrInput type="text" name="user_addr" id="user_addr" />
            </ItemContainer>
            <ItemContainer>
              <Label>상세주소</Label>
              <AddrDetailInput
                type="text"
                name="user_addrdetail"
                id="user_addrdetail"
              />
            </ItemContainer>
            <ItemContainer>
              <Label>기념일</Label>
              <AnniversaryInput type="date" name="user_date" id="user_date" />
            </ItemContainer>
          </LeftSection>
          <RightSection>
            <UserImgContainer>
              <i className="far fa-user"></i>
            </UserImgContainer>
            <Button>사진 선택</Button>
          </RightSection>
        </TopSection>

        {/* 바텀 폼 */}
        <BottomSection>
          <ItemContainer>
            <Label>관심사</Label>
            <OptionsContainer>
              <CheckboxLabel>
                <Checkbox type="checkbox" /> 임시
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox type="checkbox" /> 로
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox type="checkbox" /> 다양한 값을 입력하여
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox type="checkbox" /> 박스의 크기가 예쁘게 늘어나는지
                확인하기 위한
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox type="checkbox" /> 체크박스입니다.
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox type="checkbox" /> 값은 아직
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox type="checkbox" /> 전달되지 않는다는 사실을 부디
                명심하시고
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox type="checkbox" /> 값이 전달되지 않는다고 엄한
                노트북에 샷건을 치지 않기를
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox type="checkbox" /> 간절하게 바랍니다.
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox type="checkbox" /> 이만
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox type="checkbox" /> 아직도 있나?
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox type="checkbox" /> 그만하자
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox type="checkbox" /> 이정도면 됐지
              </CheckboxLabel>
            </OptionsContainer>
          </ItemContainer>
        </BottomSection>
        <input type="submit" value="제출" />
      </Form>
    </Container>
  );
};

export default IndividualForm;
