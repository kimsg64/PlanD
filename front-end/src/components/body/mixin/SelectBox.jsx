import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Indicator = styled.div`
  display: flex;
  padding-right: calc(var(--padding-default));
  align-items: center;
  & select {
    height: 24px;
  }
  & select:not(:first-child) {
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
  selectedPcode = "",
}) => {
  // selectedPcode가 내려오면 그 값에 따라 option 선택
  const [isSelected1, setIsSelected1] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);
  const [isSelected3, setIsSelected3] = useState(false);
  useEffect(() => {
    selectedPcode === "pcode1"
      ? setIsSelected1(true)
      : selectedPcode === "pcode2"
      ? setIsSelected2(true)
      : setIsSelected3(true);
    return () => {
      setIsSelected1(false);
      setIsSelected2(false);
      setIsSelected3(false);
    };
  }, [selectedPcode]);
  useEffect(() => {
    setSort1(sort1);
    setSort2(sort2);
    setSort3(sort3);
  }, [isSelected1, isSelected2, isSelected3]);

  // sort가 동일한 값이 걸리면 초기화해버리기
  useEffect(() => {
    const checkSort = () => {
      if (
        (sort1 !== "" && sort2 !== "" && sort1 === sort2) ||
        (sort2 !== "" && sort3 !== "" && sort2 === sort3) ||
        (sort3 !== "" && sort1 !== "" && sort3 === sort1)
      ) {
        alert("식당, 카페, 기타를 각각 한 가지만 설정해 주세요!");
        setSort1("");
        setSort2("");
        setSort3("");
        setIsSelected1(false);
        setIsSelected2(false);
        setIsSelected3(false);
      }
    };
    checkSort();
  }, [sort1, sort2, sort3]);
  // 첫 콤보박스 선택시 다음 콤보박스 제한
  const combination = ["식당", "카페", "기타"];

  return (
    <Indicator>
      <select onChange={(e) => setSort1(e.target.value)}>
        <option value="">장소1</option>
        <option
          value="식당"
          selected={isSelected1 && sort1 === "식당" ? true : false}
        >
          식당
        </option>
        <option
          value="카페"
          selected={isSelected1 && sort1 === "카페" ? true : false}
        >
          카페
        </option>
        <option
          value="기타"
          selected={isSelected1 && sort1 === "기타" ? true : false}
        >
          기타
        </option>
      </select>
      {/* sort1 선택완료 */}

      {sort1 === "" ? (
        <select onChange={(e) => setSort2(e.target.value)}>
          <option value="">장소2</option>
          <option
            value="식당"
            selected={isSelected2 && sort2 === "식당" ? true : false}
          >
            식당
          </option>
          <option
            value="카페"
            selected={isSelected2 && sort2 === "카페" ? true : false}
          >
            카페
          </option>
          <option
            value="기타"
            selected={isSelected2 && sort2 === "기타" ? true : false}
          >
            기타
          </option>
        </select>
      ) : (
        <select onChange={(e) => setSort2(e.target.value)}>
          <option value="">장소2</option>
          {combination.map((item) => {
            return item === sort1 ? null : (
              <option
                value={`${item}`}
                selected={isSelected2 && sort2 === item ? true : false}
              >
                {item}
              </option>
            );
          })}
        </select>
      )}
      {/* sort2 선택완료 */}

      {sort1 === "" || sort2 === "" || (sort1 === "" && sort2 === "") ? (
        <select onChange={(e) => setSort3(e.target.value)}>
          <option value="">장소3</option>
          <option
            value="식당"
            selected={isSelected3 && sort3 === "식당" ? true : false}
          >
            식당
          </option>
          <option
            value="카페"
            selected={isSelected3 && sort3 === "카페" ? true : false}
          >
            카페
          </option>
          <option
            value="기타"
            selected={isSelected3 && sort3 === "기타" ? true : false}
          >
            기타
          </option>
        </select>
      ) : (
        <select onChange={(e) => setSort3(e.target.value)}>
          <option value="">장소3</option>
          {combination.map((item) => {
            return item === sort1 || item === sort2 ? null : (
              <option
                value={`${item}`}
                selected={isSelected3 && sort3 === item ? true : false}
              >
                {item}
              </option>
            );
          })}
        </select>
      )}
    </Indicator>
  );
};

export default SelectBox;
