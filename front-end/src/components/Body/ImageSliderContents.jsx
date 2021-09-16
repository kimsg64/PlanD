import React, { useState } from "react";
import styled from "styled-components";

const TextInImage = styled.div`
  width: auto;
  position: absolute;
  z-index: 3;
  white-space: nowrap;
  left: 8vw;
  top: 20vh;
  h1 {
    margin-bottom: calc(var(--margin-default) / 2);
    color: white;
    font-size: var(--font-size-big-title);
    font-weight: 800;
  }
  p {
    font-size: var(--font-size-default);
    color: white;
    line-height: 2;
  }
`;

const ImageSliderContents = ({ isShown = "1st" }) => {
  return (
    <>
      <img
        src="images/temp_main.jpg"
        className={isShown === "1st" ? "display_on" : "display_off"}
      />
      <TextInImage className={isShown === "1st" ? "display_on" : "display_off"}>
        <h1>우리 어디가?</h1>
        <p>
          데이트를 잘하려면 뭘 해야 할까요? <br /> 일단 애인이 있어야 합니다.
          <br /> 그 다음에 필요한 것이 바로 우리 사이트임 <br />
          제발 가입해
        </p>
      </TextInImage>

      <img
        src="images/temp_main.jpg"
        className={isShown === "2nd" ? "display_on" : "display_off"}
      />
      <TextInImage className={isShown === "2nd" ? "display_on" : "display_off"}>
        <h1>우리 어디가냐고?</h1>
        <p>
          데이트를 잘하려면 뭘 해야 할까요? <br /> 일단 애인이 있어야 합니다.
          <br /> 그 다음에 필요한 것이 바로 우리 사이트임~ <br />
          제발 가입해
        </p>
      </TextInImage>

      <img
        src="images/temp_main.jpg"
        className={isShown === "3rd" ? "display_on" : "display_off"}
      />
      <TextInImage className={isShown === "3rd" ? "display_on" : "display_off"}>
        <h1>우리 어디갈거냐고!!!</h1>
        <p>
          데이트를 잘하려면 뭘 해야 할까요? <br /> 일단 애인이 있어야 합니다.
          <br /> 그 다음에 필요한 것이 바로 우리 사이트임!! <br />
          제발 가입해
        </p>
      </TextInImage>
    </>
  );
};

export default ImageSliderContents;
