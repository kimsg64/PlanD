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
    color: var(--color-focus);
  }
`;

const Score = styled.div`
  font-size: var(--font-size-normal);
  margin: 0 calc(var(--margin-default) / 2);
`;

const HalfBox = styled.div`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 9px;
    height: 20px;
    background-color: var(--color-bg);
    top: 0px;
    left: 11px;
  }
`;

const Stars = ({ score = 1 }) => {
  // console.log(score);
  return (
    <StarsBox>
      <Score>{score}점</Score>
      {score === 10 ? (
        <>
          <i className="fas fa-star "></i>
          <i className="fas fa-star "></i>
          <i className="fas fa-star "></i>
          <i className="fas fa-star "></i>
          <i className="fas fa-star "></i>
        </>
      ) : score === 9 ? (
        <>
          <i className="fas fa-star "></i>
          <i className="fas fa-star "></i>
          <i className="fas fa-star "></i>
          <i className="fas fa-star "></i>
          <HalfBox>
            <i className="fas fa-star "></i>
          </HalfBox>
        </>
      ) : score === 8 ? (
        <>
          <i className="fas fa-star "></i>
          <i className="fas fa-star "></i>
          <i className="fas fa-star "></i>
          <i className="fas fa-star "></i>
        </>
      ) : score === 7 ? (
        <>
          <i className="fas fa-star "></i>
          <i className="fas fa-star "></i>
          <i className="fas fa-star "></i>
          <HalfBox>
            <i className="fas fa-star "></i>
          </HalfBox>
        </>
      ) : score === 6 ? (
        <>
          <i className="fas fa-star "></i>
          <i className="fas fa-star "></i>
          <i className="fas fa-star "></i>
        </>
      ) : score === 5 ? (
        <>
          <i className="fas fa-star "></i>
          <i className="fas fa-star "></i>
          <HalfBox>
            <i className="fas fa-star "></i>
          </HalfBox>
        </>
      ) : score === 4 ? (
        <>
          <i className="fas fa-star "></i>
          <i className="fas fa-star "></i>
        </>
      ) : score === 3 ? (
        <>
          <i className="fas fa-star "></i>
          <HalfBox>
            <i className="fas fa-star "></i>
          </HalfBox>
        </>
      ) : score === 2 ? (
        <>
          <i className="fas fa-star "></i>
        </>
      ) : (
        <>
          <HalfBox>
            <i className="fas fa-star "></i>
          </HalfBox>
        </>
      )}
    </StarsBox>
  );
};

export default Stars;
