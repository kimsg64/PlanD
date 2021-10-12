import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  transition-duration: 0.7s;
  transition-timing-function: cubic-bezier(0.57, 0.01, 0.36, 0.99);
  transform: translateX(${(props) => props.idx * props.rate + "%"});
`;

const PageSlider = ({ children, ...props }) => {
  console.log(props.rate);
  return (
    <Container idx={props.idx} rate={props.rate}>
      {children}
    </Container>
  );
};

export default PageSlider;
