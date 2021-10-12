import React from "react";
import styled from "styled-components";

const StarsBox = styled.div`
  width: 52%;
  min-width: 168px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  i {
    padding-bottom: 4px;
    font-size: var(--font-size-normal);
    color: var(--color-yellow);
  }
`;

const Score = styled.div`
  font-size: var(--font-size-normal);
  margin: 0 calc(var(--margin-default) / 2);
`;

const Stars = ({ score = 0 }) => {
  // console.log(score);
  return (
    <StarsBox>
      <Score>{score}</Score>
      <i className="far fa-star eightToTen"></i>
      <i className="fas fa-star sixToEight"></i>
      <i className="fas fa-star fourToSix"></i>
      <i className="fas fa-star twoToFour"></i>
      <i className="fas fa-star zeroToTwo"></i>
    </StarsBox>
  );
};

export default Stars;
