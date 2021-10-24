import React, { useEffect } from "react";
import styled from "styled-components";

// searchPlaces의 첫 렌더링시 호출 막기

const MapContainer = styled.div`
  width: 800px;
  height: 400px;
  font-size: var(--font-size-tiny);
  position: relative;
`;

const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px;
  margin: 10px 0 30px 10px;
  padding: 5px;
  overflow-y: auto;
  z-index: 2;
  font-size: 12px;
  border-radius: 10px;
  background: #fff;
  opacity: 0.9;

  & .option {
    text-align: center;
  }
  & .option p {
    margin: 10px 0;
  }
  & .option button {
    margin-left: 5px;
  }
`;

const PlacesList = styled.ul`
  & .item {
    position: relative;
    border-bottom: 1px solid #888;
    overflow: hidden;
    cursor: pointer;
    min-height: 65px;
  }
  & .item span {
    display: block;
    margin-top: 4px;
  }
  & .item h5,
  & .item .info {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  & .item .info {
    padding: 10px 0 10px 55px;
  }
  & .info .gray {
    color: #8a8a8a;
  }
  & .info .jibun {
    padding-left: 26px;
    background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_jibun.png")
      no-repeat;
  }
  & .info .tel {
    color: #009900;
  }
  & .item .markerbg {
    float: left;
    position: absolute;
    width: 36px;
    height: 37px;
    margin: 10px 0 0 10px;
    background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png")
      no-repeat;
  }
  & .item .marker_1 {
    background-position: 0 -10px;
  }
  & .item .marker_2 {
    background-position: 0 -56px;
  }
  & .item .marker_3 {
    background-position: 0 -102px;
  }
  & .item .marker_4 {
    background-position: 0 -148px;
  }
  & .item .marker_5 {
    background-position: 0 -194px;
  }
  & .item .marker_6 {
    background-position: 0 -240px;
  }
  & .item .marker_7 {
    background-position: 0 -286px;
  }
  & .item .marker_8 {
    background-position: 0 -332px;
  }
  & .item .marker_9 {
    background-position: 0 -378px;
  }
  & .item .marker_10 {
    background-position: 0 -423px;
  }
  & .item .marker_11 {
    background-position: 0 -470px;
  }
  & .item .marker_12 {
    background-position: 0 -516px;
  }
  & .item .marker_13 {
    background-position: 0 -562px;
  }
  & .item .marker_14 {
    background-position: 0 -608px;
  }
  & .item .marker_15 {
    background-position: 0 -654px;
  }
`;

const Pagination = styled.div`
  & {
    margin: 10px auto;
    text-align: center;
  }
  & a {
    display: inline-block;
    margin-right: 10px;
  }
  & .on {
    font-weight: bold;
    cursor: default;
    color: #777;
  }
`;

const { kakao } = window;
const KakaoMapSearchForm = ({
  place = "",
  setClickedPlace = () => {},
  setClickedPlaceAddr = () => {},
  setClickedPlaceTel = () => {},
}) => {
  useEffect(() => {
    // 마커를 담을 배열입니다
    var markers = [];

    var mapContainer = document.getElementById("kakaoMap"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

    // 지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 장소 검색 객체를 생성합니다
    var ps = new kakao.maps.services.Places();

    // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    // 키워드로 장소를 검색합니다 => 인풋되었을 때 실행
    searchPlaces();

    // 키워드 검색을 요청하는 함수입니다
    function searchPlaces() {
      var keyword = place;

      if (!keyword.replace(/^\s+|\s+$/g, "")) {
        alert("키워드를 입력해주세요!");
        return false;
      }

      // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
      ps.keywordSearch(keyword, placesSearchCB);
    }

    // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 정상적으로 검색이 완료됐으면
        // 검색 목록과 마커를 표출합니다
        displayPlaces(data);

        // 페이지 번호를 표출합니다
        displayPagination(pagination);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert("검색 결과가 존재하지 않습니다.");
        return;
      } else if (status === kakao.maps.services.Status.ERROR) {
        alert("검색 결과 중 오류가 발생했습니다.");
        return;
      }
    }

    // 검색 결과 목록과 마커를 표출하는 함수입니다
    function displayPlaces(places) {
      var listEl = document.getElementById("placesList"),
        menuEl = document.getElementById("menu_wrap"),
        fragment = document.createDocumentFragment(),
        bounds = new kakao.maps.LatLngBounds(),
        listStr = "";

      // 검색 결과 목록에 추가된 항목들을 제거합니다
      removeAllChildNods(listEl);

      // 지도에 표시되고 있는 마커를 제거합니다
      removeMarker();

      for (var i = 0; i < places.length; i++) {
        // 마커를 생성하고 지도에 표시합니다
        var placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
          marker = addMarker(placePosition, i),
          itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        bounds.extend(placePosition);

        // 마커와 검색결과 항목에 mouseover 했을때
        // 해당 장소에 인포윈도우에 장소명을 표시합니다
        // mouseout 했을 때는 인포윈도우를 닫습니다
        (function (marker, title) {
          kakao.maps.event.addListener(marker, "mouseover", function () {
            displayInfowindow(marker, title);
          });

          ////////////////////////////////////////////////////////////////
          // 클릭 이벤트 추가
          kakao.maps.event.addListener(marker, "click", function () {
            // console.log(markers.findIndex((mark) => mark === this));
            const selectedMarkerIndex = markers.findIndex(
              (mark) => mark === this
            );
            // console.log(selectedMarkerIndex);
            // console.log(places[selectedMarkerIndex]);
            const selectedPlace = places[selectedMarkerIndex];
            // console.log(selectedPlace);
            // console.log(title);
            setClickedPlace(title);
            setClickedPlaceAddr(selectedPlace.address_name);
            setClickedPlaceTel(selectedPlace.phone);
          });
          // console.log(marker);
          // console.log(title);
          // console.log("선택 장소: ", searchedWord);
          ////////////////////////////////////////////////////////////////

          kakao.maps.event.addListener(marker, "mouseout", function () {
            infowindow.close();
          });

          itemEl.onmouseover = function () {
            displayInfowindow(marker, title);
          };
          /////////////////////////////////
          // 여기도 클릭 이벤트 추가
          itemEl.onclick = function () {
            // console.log(this.lastChild);
            setClickedPlace(title);
            setClickedPlaceAddr(this.lastChild.childNodes[5].innerText);
            setClickedPlaceTel(this.lastChild.lastChild.innerText);
          };

          itemEl.onmouseout = function () {
            infowindow.close();
          };
        })(marker, places[i].place_name);

        fragment.appendChild(itemEl);
      }

      // 검색결과 항목들을 검색결과 목록 Elemnet에 추가합니다
      if (listEl !== null) {
        listEl.appendChild(fragment);
        menuEl.scrollTop = 0;
      }

      // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
      map.setBounds(bounds);
    }

    // 검색결과 항목을 Element로 반환하는 함수입니다
    function getListItem(index, places) {
      var el = document.createElement("li"),
        itemStr =
          '<span class="markerbg marker_' +
          (index + 1) +
          '"></span>' +
          '<div class="info">' +
          "   <h5>" +
          places.place_name +
          "</h5>";

      if (places.road_address_name) {
        itemStr +=
          "    <span>" +
          places.road_address_name +
          "</span>" +
          '   <span class="jibun gray">' +
          places.address_name +
          "</span>";
      } else {
        itemStr += "    <span>" + places.address_name + "</span>";
      }

      itemStr += '  <span class="tel">' + places.phone + "</span>" + "</div>";

      el.innerHTML = itemStr;
      el.className = "item";

      return el;
    }

    // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
    function addMarker(position, idx, title) {
      var imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png", // 마커 이미지 url, 스프라이트 이미지를 씁니다
        imageSize = new kakao.maps.Size(36, 37), // 마커 이미지의 크기
        imgOptions = {
          spriteSize: new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
          spriteOrigin: new kakao.maps.Point(0, idx * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
          offset: new kakao.maps.Point(13, 37), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
        },
        markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imgOptions
        ),
        marker = new kakao.maps.Marker({
          position: position, // 마커의 위치
          image: markerImage,
        });

      marker.setMap(map); // 지도 위에 마커를 표출합니다
      markers.push(marker); // 배열에 생성된 마커를 추가합니다

      return marker;
    }

    // 지도 위에 표시되고 있는 마커를 모두 제거합니다
    function removeMarker() {
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      markers = [];
    }

    // 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
    function displayPagination(pagination) {
      var paginationEl = document.getElementById("pagination"),
        fragment = document.createDocumentFragment(),
        i;

      // 기존에 추가된 페이지번호를 삭제합니다
      if (paginationEl !== null) {
        while (paginationEl.hasChildNodes()) {
          paginationEl.removeChild(paginationEl.lastChild);
        }
      }

      for (i = 1; i <= pagination.last; i++) {
        var el = document.createElement("a");
        el.href = "#";
        el.innerHTML = i;

        if (i === pagination.current) {
          el.className = "on";
        } else {
          el.onclick = (function (i) {
            return function () {
              pagination.gotoPage(i);
            };
          })(i);
        }

        fragment.appendChild(el);
      }
      if (paginationEl !== null) {
        paginationEl.appendChild(fragment);
      }
    }

    // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
    // 인포윈도우에 장소명을 표시합니다
    function displayInfowindow(marker, title) {
      var content = '<div style="padding:5px;z-index:1;">' + title + "</div>";

      infowindow.setContent(content);
      infowindow.open(map, marker);
    }

    // 검색결과 목록의 자식 Element를 제거하는 함수입니다
    function removeAllChildNods(el) {
      if (el !== null) {
        while (el.hasChildNodes()) {
          el.removeChild(el.lastChild);
        }
      }
    }
  }, [place]);

  return (
    <MapContainer id="kakaoMap">
      <MenuWrapper id="menu_wrap">
        <div className="option"></div>
        <PlacesList id="placesList"></PlacesList>
        <Pagination id="pagination"></Pagination>
      </MenuWrapper>
    </MapContainer>
  );
};

export default KakaoMapSearchForm;
