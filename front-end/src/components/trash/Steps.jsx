import React from "react";
import styled from "styled-components";

const StepsContainer = styled.section`
  width: 72vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const StepWapper = styled.article`
  width: 80%;
  height: 32vh;
  margin: calc(var(--margin-default) * 2);
  display: flex;
`;

const StepCircle = styled.div`
  width: 32vh;
  height: 32vh;
  border-radius: 50%;
  background-color: var(--color-yellow);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size-huge);
  color: var(--font-color-default);
`;

const StepTextContainer = styled.div`
  width: calc(100% - 32vh);
  height: 100%;
  margin: 0 var(--margin-default);
  padding: calc(var(--padding-default) * 3);
  display: flex;
  flex-direction: column;
`;

const StepTextTitle = styled.div`
  font-size: var(--font-size-title-normal);
`;

const StepTextContent = styled.div`
  padding-top: var(--padding-default);
  font-size: var(--font-size-normal);
`;

const Steps = () => {
  return (
    <StepsContainer>
      <StepWapper>
        <StepCircle>
          <i className="fas fa-user-check"></i>
        </StepCircle>
        <StepTextContainer>
          <StepTextTitle>STEP 1 회원가입</StepTextTitle>
          <StepTextContent>
            먼저 이 놀라운 웹 페이지에 가입하세요!
          </StepTextContent>
        </StepTextContainer>
      </StepWapper>
      <StepWapper>
        <StepTextContainer>
          <StepTextTitle>STEP 2 조건 입력 </StepTextTitle>
          <StepTextContent>
            원하는 시간, 장소, 관심사를 입력하세요!
          </StepTextContent>
        </StepTextContainer>
        <StepCircle>
          <i className="fas fa-edit"></i>
        </StepCircle>
      </StepWapper>
      <StepWapper>
        <StepCircle>
          <i className="fas fa-search-location"></i>
        </StepCircle>
        <StepTextContainer>
          <StepTextTitle>STEP 3 코스 추천</StepTextTitle>
          <StepTextContent>
            빅데이터를 이용해 엄선한 데이트 코스를 추천해 드립니다!
          </StepTextContent>
        </StepTextContainer>
      </StepWapper>
      <StepWapper>
        <StepTextContainer>
          <StepTextTitle>STEP 4 후기 작성</StepTextTitle>
          <StepTextContent>
            코스가 마음에 드셨다면 후기를 작성해 주세요!
          </StepTextContent>
        </StepTextContainer>
        <StepCircle>
          <i className="fas fa-edit"></i>
        </StepCircle>
      </StepWapper>
    </StepsContainer>
  );
};

export default Steps;
