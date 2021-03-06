import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CustomCalerdar from "../../calendar/CustomCalerdar";
import CheckBoxSet from "../../mixin/CheckBoxSet";
import Form from "../../mixin/Form";
import { Button } from "../../mixin/Mixin";
import { read_cookie } from "sfcookies";
import axios from "axios";
import SelectBox from "../../mixin/SelectBox";
import { useHistory } from "react-router";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const SearchForm = styled(Form)`
  & > div {
    padding: calc(var(--padding-default) * 2);
  }
`;

const Label = styled.label`
  font-size: var(--font-size-normal);
  margin-bottom: var(--margin-default);
`;

const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: var(--margin-default);
`;

const CalendarContainer = styled(ItemContainer)`
  flex-direction: column;
  align-items: center;
`;

const TitleSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

const ContentSection = styled.section`
  width: calc(100% - 360px);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const OptionContainer = styled(ItemContainer)`
  flex-direction: column;
`;

const Indicator = styled.div`
  display: flex;
  padding-right: calc(var(--padding-default) * 2);
  margin-left: calc(var(--margin-default) * 3.6);
`;

const ColorIndicator = styled.div`
  width: 40px;
  height: 20px;
  margin-right: calc(var(--margin-default) / 4);
  background-color: ${(props) => props.bgColor || "inherit"};
`;

const TextIndicator = styled.div`
  font-size: var(--font-size-small);
  margin-right: calc(var(--margin-default) / 4);
`;

const SearchButton = styled(Button)`
  margin-top: var(--margin-default);
`;

const PlanningETC = ({
  selectedDate = null,
  setSelectedDate = () => {},
  selectedStation = "",
  lineNum = "",
}) => {
  // const [time, setTime] = useState(10);
  const [sort1, setSort1] = useState("");
  const [sort2, setSort2] = useState("");
  const [sort3, setSort3] = useState("");
  const [opt, setOpt] = useState([]);
  const [weather, setWeather] = useState("");
  const history = useHistory();
  // console.log("ETC ?????????", selectedDate);
  // console.log("ETC", selectedDate);
  // console.log("ETC", selectedStation);

  // ?????? ???????????? ?????? ????????? ?????? ????????? ?????????
  useEffect(() => {
    // ?????? ?????? ?????????
    const today = new Date();
    const dDay = new Date(selectedDate);
    // console.log(today);
    // console.log(dDay);
    const gap = dDay - today;
    // console.log(gap);
    // console.log(new Date(2021, 9, 32));
    let index;
    if (gap > 1000 * 60 * 60 * 24 * 4) {
      alert("?????? ?????? ?????? ???????????? ?????? 4??? ???????????? ??????????????????.");
      return setSelectedDate(null);
    } else {
      const thisYear = today.getFullYear();
      const thisMonth = today.getMonth();
      const thisDate = today.getDate();
      const dYear = dDay.getFullYear();
      const dMonth = dDay.getMonth();
      const dDate = dDay.getDate();
      // console.log(
      //   new Date(thisYear, thisMonth, thisDate).toDateString() ===
      //     new Date(dYear, dMonth, dDate).toDateString()
      // );
      index =
        new Date(thisYear, thisMonth, thisDate).toDateString() ===
        new Date(dYear, dMonth, dDate).toDateString()
          ? 3
          : new Date(thisYear, thisMonth, thisDate + 1).toDateString() ===
            new Date(dYear, dMonth, dDate).toDateString()
          ? 11
          : new Date(thisYear, thisMonth, thisDate + 2).toDateString() ===
            new Date(dYear, dMonth, dDate).toDateString()
          ? 19
          : new Date(thisYear, thisMonth, thisDate + 3).toDateString() ===
            new Date(dYear, dMonth, dDate).toDateString()
          ? 27
          : 35;
      // console.log(index);
    }

    // const index;

    const url =
      "https://api.openweathermap.org/data/2.5/forecast?q=seoul&appid=28dfc3b27e5cac4c9fd964f060b19070&lang=kr";
    axios
      .get(url)
      .then((response) => {
        // console.log(response.data.list[index].weather[0].icon);
        setWeather(response.data.list[index].weather);
      })
      .catch((error) => console.log(error));
  }, [selectedDate]);

  // ?????? ??????
  const stringifyResdate = () => {
    const dDay = new Date(selectedDate);
    const year = dDay.getFullYear();
    const month = dDay.getMonth() + 1;
    const date = dDay.getDate();
    return `${year}-${month}-${date}`;
  };

  const sortNum =
    sort1 + sort2 + sort3 === "??????????????????"
      ? 1
      : sort1 + sort2 + sort3 === "??????????????????"
      ? 2
      : sort1 + sort2 + sort3 === "??????????????????"
      ? 3
      : sort1 + sort2 + sort3 === "??????????????????"
      ? 4
      : sort1 + sort2 + sort3 === "??????????????????"
      ? 5
      : sort1 + sort2 + sort3 === "??????????????????"
      ? 6
      : null;

  const stcode =
    selectedStation === "??????"
      ? "121"
      : selectedStation === "??????"
      ? "122"
      : selectedStation === "??????"
      ? "123"
      : selectedStation === "????????????"
      ? "124"
      : selectedStation === "??????"
      ? "125"
      : null;

  // console.log("??????", weather);
  const onSubmitForm = (e) => {
    e.preventDefault();
    // console.log(sortNum);
    if (selectedStation === "???") {
      alert("?????? ????????? ????????? ?????????!");
      return;
    } else {
      const body = {
        userId: read_cookie("userId"),
        line: lineNum + "??????",
        stname: selectedStation,
        stcode: stcode,
        resdate: stringifyResdate(),
        coursesort: sortNum,
        opt: opt.join("#"),
        weather: weather[0].icon,
      };
      console.log("????????? ????????? ????????? ??????: ", body);

      // ????????? ??????
      axios
        .post("/wherewego/coursePlanD", body)
        .then((response) => {
          console.log("response : ", response.data);
          // ??????????????? ?????? ????????? ????????? ??????????????? ?????????
          // console.log(history);
          if (response.data.length > 0) {
            history.push({
              pathname: "/result",
              props: {
                result: response.data,
                weather: weather,
                resdate: stringifyResdate(),
                sort: [sort1, sort2, sort3],
              },
            });
          } else {
            alert("???????????? ????????? ????????????...");
          }
        })
        .catch((error) => {
          console.log("failed", error);
        });
    }
  };

  return (
    <Container>
      <SearchForm onSubmit={onSubmitForm}>
        <CalendarContainer>
          <TitleSection>
            <Label>????????? ????????? ???????????????.</Label>
            <Indicator>
              <ColorIndicator bgColor="var(--color-focus)" />
              <TextIndicator>??????</TextIndicator>
              <ColorIndicator bgColor="var(--color-green)" />
              <TextIndicator>??????</TextIndicator>
            </Indicator>
          </TitleSection>
          <ContentSection>
            <CustomCalerdar
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </ContentSection>
        </CalendarContainer>
        {/* <ItemContainer>
          <TitleSection>
            <Label>????????? ????????? ????????? ???????????????.</Label>
          </TitleSection>
          <ContentSection>
            <Indicator>
              <select onChange={(e) => setTime(e.target.value)}>
                <option value="10">10:00</option>
                <option value="12">12:00</option>
                <option value="14">14:00</option>
                <option value="16">16:00</option>
                <option value="18">18:00</option>
                <option value="20">20:00</option>
              </select>
            </Indicator>
          </ContentSection>
        </ItemContainer> */}
        <ItemContainer>
          <TitleSection>
            <Label>????????? ????????? ???????????????.</Label>
          </TitleSection>
          <ContentSection>
            <SelectBox
              sort1={sort1}
              setSort1={setSort1}
              sort2={sort2}
              setSort2={setSort2}
              sort3={sort3}
              setSort3={setSort3}
            />
          </ContentSection>
        </ItemContainer>
        <OptionContainer>
          <Label>???????????? ??????????????? </Label>
          <CheckBoxSet setOpt={setOpt} />
        </OptionContainer>
        {/* ????????? axios??? ???????????? ?????? ??? ???????????? ??? */}
        <SearchButton type="submit">?????? ??????</SearchButton>
      </SearchForm>
    </Container>
  );
};

export default PlanningETC;
