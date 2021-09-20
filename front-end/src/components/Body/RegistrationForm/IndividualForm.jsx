import React from "react";
import styled from "styled-components";

import Button from "../Button";
import Form from "./Form";
import Label from "./Label";

const LeftSection = styled.section``;
const RightSection = styled.section``;

// 각 항목 스타일링
const ItemContainer = styled.div`
  width: 40vw;
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

// 하이픈 스타일링
const Hyphen = styled.p`
  margin: 0 calc(var(--margin-default) / 4);
  font-size: var(--font-size-large);
  color: var(--color-black);
`;

// Input 상자 스타일링
const InputContainer = styled.input`
  width: 8vw;
  padding: calc(var(--padding-default) / 4) 0;
  font-size: var(--font-size-normal);
  position: relative;
  border: none;
  border-bottom: 2px solid var(--color-black);
  text-align: center;
  transition-duration: 0.2s;
  &:focus {
    outline: none;
    border-bottom: 2px solid var(--color-brown);
  }
`;

const PersonalNumInput = styled(InputContainer)`
  width: calc(6vw - var(--margin-default) / 4 - var(--font-size-large));
`;
const PhoneNumInput = styled(InputContainer)`
  width: calc(4vw - var(--margin-default) / 4 - var(--font-size-large));
`;
const ZipcodeInput = styled(InputContainer)`
  width: 4vw;
`;
const AddrInput = styled(InputContainer)`
  width: 20vw;
`;
const AddrDetailInput = styled(InputContainer)`
  width: 20vw;
`;
const CheckBoxInput = styled(InputContainer)`
  width: auto;
`;

const OptionsContainer = styled.div`
  width: 30vw;
  height: auto;
  border: 2px solid var(--color-brown);
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  padding: var(--padding-default);
  label {
    min-width: 4vw;
    margin: 0 1vw 1vw 1vw;
  }
`;

const IndividualForm = () => {
  return (
    <Form id="individual_form">
      <IDContainer>
        <Label>아이디</Label>
        <InputContainer type="text" name="user_id" id="user_id" />
        <Button>중복 확인</Button>
      </IDContainer>
      <PWDContainer>
        <Label>비밀번호</Label>
        <InputContainer type="password" name="user_pwd" id="user_pwd" />
      </PWDContainer>
      <PWDCheckContainer>
        <Label>비밀번호 확인</Label>
        <InputContainer
          type="password"
          name="user_pwdcheck"
          id="user_pwdcheck"
        />
      </PWDCheckContainer>
      <NameContainer>
        <Label>이름</Label>
        <InputContainer type="text" name="user_name" id="user_name" />
      </NameContainer>
      <PersonalNumContainer>
        <Label>주민등록번호</Label>
        <PersonalNumInput type="text" name="user_num1" id="user_num1" />
        <Hyphen> - </Hyphen>
        <PersonalNumInput type="password" name="user_num2" id="user_num2" />
      </PersonalNumContainer>
      <PhoneNumContainer>
        <Label>연락처</Label>
        <PhoneNumInput type="select" name="user_tel1" id="user_tel1" />
        <Hyphen> - </Hyphen>
        <PhoneNumInput type="text" name="user_tel2" id="user_tel2" />
        <Hyphen> - </Hyphen>
        <PhoneNumInput type="text" name="user_tel3" id="user_tel3" />
      </PhoneNumContainer>
      <ItemContainer>
        <Label>우편번호</Label>
        <ZipcodeInput type="text" name="user_zipcode" id="user_zipcode" />
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
        <InputContainer type="date" name="user_date" id="user_date" />
      </ItemContainer>
      <ItemContainer>
        <Label>관심사</Label>
        <OptionsContainer>
          <label>
            <CheckBoxInput type="checkbox" /> 임시
          </label>
          <label>
            <CheckBoxInput type="checkbox" /> 로
          </label>
          <label>
            <CheckBoxInput type="checkbox" /> 다양한 값을 입력하여
          </label>
          <label>
            <CheckBoxInput type="checkbox" /> 박스의 크기가 예쁘게 늘어나는지
            확인하기 위한
          </label>
          <label>
            <CheckBoxInput type="checkbox" /> 체크박스입니다.
          </label>
          <label>
            <CheckBoxInput type="checkbox" /> 값은 아직
          </label>
          <label>
            <CheckBoxInput type="checkbox" /> 전달되지 않는다는 사실을 부디
            명심하시고
          </label>
          <label>
            <CheckBoxInput type="checkbox" /> 값이 전달되지 않는다고 엄한
            노트북에 샷건을 치지 않기를
          </label>
          <label>
            <CheckBoxInput type="checkbox" /> 간절하게 바랍니다.
          </label>
          <label>
            <CheckBoxInput type="checkbox" /> 이만
          </label>
          <label>
            <CheckBoxInput type="checkbox" /> 아직도 있나?
          </label>
          <label>
            <CheckBoxInput type="checkbox" /> 그만하자
          </label>
          <label>
            <CheckBoxInput type="checkbox" /> 이정도면 됐지
          </label>
        </OptionsContainer>
      </ItemContainer>
      <input type="submit" value="제출" />
    </Form>
  );
};

export default IndividualForm;
