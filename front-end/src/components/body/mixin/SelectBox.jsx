import React from "react";
import styled from "styled-components";

const Indicator = styled.div`
  display: flex;
  padding-right: calc(var(--padding-default) * 2);
  align-items: center;
  select {
    height: 24px;
  }
  select:not(:first-child) {
    margin-left: calc(var(--margin-default) / 2);
  }
`;

const SelectBox = ({
  sort1 = "",
  setSort1 = () => {},
  sort2 = "",
  setSort2 = () => {},
  sort3 = "",
  setSort3 = () => {},
}) => {
  // 첫 콤보박스 선택시 다음 콤보박스 제한
  const combination = ["식당", "카페", "기타"];

  return (
    <Indicator>
      <select onChange={(e) => setSort1(e.target.value)}>
        <option value="">장소1</option>
        <option value="식당">식당</option>
        <option value="카페">카페</option>
        <option value="기타">기타</option>
      </select>
      {/* sort1 선택완료 */}

      {sort1 === "" ? (
        <select onChange={(e) => setSort2(e.target.value)}>
          <option value="">장소2</option>
          <option value="식당">식당</option>
          <option value="카페">카페</option>
          <option value="기타">기타</option>
        </select>
      ) : (
        <select onChange={(e) => setSort2(e.target.value)}>
          <option value="">장소2</option>
          {combination.map((item) => {
            return item === sort1 ? null : (
              <option value={`${item}`}>{item}</option>
            );
          })}
        </select>
      )}
      {/* sort2 선택완료 */}

      {sort1 === "" || sort2 === "" ? (
        <select onChange={(e) => setSort3(e.target.value)}>
          <option value="">장소3</option>
          <option value="식당">식당</option>
          <option value="카페">카페</option>
          <option value="기타">기타</option>
        </select>
      ) : (
        <select onChange={(e) => setSort3(e.target.value)}>
          <option value="">장소3</option>
          {combination.map((item) => {
            return item === sort1 || item === sort2 ? null : (
              <option value={`${item}`}>{item}</option>
            );
          })}
        </select>
      )}
    </Indicator>
  );
};

export default SelectBox;
