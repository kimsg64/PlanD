<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<style>
#mainDiv {
	width: 72%;
	margin: 0 auto;
	color: #00282e;
	text-align: center;
	margin-top: 10px;
}

#mainDiv>h1 {
	margin-bottom: 30px;
	text-align: left;
}

#banner {
	width: 100%;
}

#viewDiv {
	width: 100%;
	height: auto;
	float: center;
	background-color: #f5ebe3;
	border: 1px solid #efcac3;
	padding-top: 50px;
	padding-bottom: 130px;
	border-radius: 6px;
}

#infoDiv {
	margin: 0 auto;
	text-align: left;
	height: auto;
	width: 50%;
	margin-bottom: 50px;
}

#infoDiv li {
	width: 80%;
	height: 40px;
}

#infoDiv2 {
	margin: 0 auto;
	text-align: left;
	height: auto;
	width: 50%;
	margin-bottom: 50px;
}

#infoDiv2 li {
	width: 80%;
	height: 40px;
}

#infoDiv2 h2 {
	margin-bottom: 20px;
}

#map_wrap {
	margin: 0 auto;
	width: 90%;
	max-width: 700px;
	height: auto;
}

#buttonMenu {
	float: right;
}

#map1, #map2, #map3 {
	margin: 0 auto; margin-bottom:30px;
}

.button {
	background-color: #fd7d73;
	border: none;
	color: #f5ebe3;
	padding: 10px 15px;
	margin: 10px 0px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	border-radius: 12px;
	transition-duration: 0.4s;
	font-size: 13px;
	width: 70px;
	text-align: center;
}

.button:hover {
	color: #0e595f;
}

#infoDiv2 a:hover{
color:#fd7d73;}

#lineImg {

	margin-bottom: 80px; 
}
</style>
<script>
	var lat1;
	var lng1;
	var lat2;
	var lng2;
	var lat3;
	var lng3;
	var url1 = "https://maps.googleapis.com/maps/api/geocode/json?address="
			+ "${vo.addr1}" + "&key=AIzaSyCIt_Stq2QW_15wVds7sVrxA9y0Cadru1s";
	$.ajax({
		url : url1,
		dataType : "json",
		type : "GET",
		async : false,
		success : function(resp) {
			console.log(resp);
			console.log("장소1 경도 : " + resp.results[0].geometry.location.lat);
			lat1 = resp.results[0].geometry.location.lat;
			console.log("장소1 위도 : " + resp.results[0].geometry.location.lng);
			lng1 = resp.results[0].geometry.location.lng;
		}
	});

	var url2 = "https://maps.googleapis.com/maps/api/geocode/json?address="
			+ "${vo.addr2}" + "&key=AIzaSyCIt_Stq2QW_15wVds7sVrxA9y0Cadru1s";
	$.ajax({
		url : url2,
		dataType : "json",
		type : "GET",
		async : false,
		success : function(resp) {
			console.log(resp);
			console.log("장소2 경도 : " + resp.results[0].geometry.location.lat);
			lat2 = resp.results[0].geometry.location.lat;
			console.log("장소2 위도 : " + resp.results[0].geometry.location.lng);
			lng2 = resp.results[0].geometry.location.lng;
		}
	});

	var url3 = "https://maps.googleapis.com/maps/api/geocode/json?address="
			+ "${vo.addr3}" + "&key=AIzaSyCIt_Stq2QW_15wVds7sVrxA9y0Cadru1s";
	$.ajax({
		url : url3,
		dataType : "json",
		type : "GET",
		async : false,
		success : function(resp) {
			console.log(resp);
			console.log("장소3 경도 : " + resp.results[0].geometry.location.lat);
			lat3 = resp.results[0].geometry.location.lat;
			console.log("장소3 위도 : " + resp.results[0].geometry.location.lng);
			lng3 = resp.results[0].geometry.location.lng;
		}
	});
</script>
<div id="mainDiv">
	<h1>예약 상세보기</h1>
	<!-- <img src="imgs/banner/place.jpg" id="banner"/>  -->

	<div id="viewDiv">
		<h4>No.${vo.c_num }</h4>
		<br />
		<h1>${vo.name }</h1>
		<br /> <br />

		<div id="map_wrap" class="map_wrap3">
			<div id="map_div"></div>
		</div>
		<div class="map_act_btn_wrap clear_box"></div>
		<p id="result"></p>

		<br /> <br />

		<div id="infoDiv">
			<ul>
				<li><b>작성자 : </b>${vo.userid}</li>
				<li><b>승인여부 : </b>${vo.grade}</li>
				<li><b>순서 : </b> <c:if test="${vo.coursesort==1}">
						식당 -> 카페 -> 기타
					</c:if> <c:if test="${vo.coursesort==2}">
						식당 -> 기타 -> 카페
					</c:if> <c:if test="${vo.coursesort==3}">
						카페 -> 식당 -> 기타
					</c:if> <c:if test="${vo.coursesort==4}">
						카페 -> 기타 -> 식당
					</c:if> <c:if test="${vo.coursesort==5}">
						기타 -> 식당 -> 카페
					</c:if> <c:if test="${vo.coursesort==6}">
						기타 -> 카페 -> 식당
					</c:if></li>
				<li><b>역명 : </b>${vo.stname }역</li>
				<li><b>평점 : </b> <c:if test="${vo.score==null or vo.score==0}">
						평가없음
					</c:if> <c:if test="${vo.score!=null and vo.score!=0}">
						${vo.score }
					</c:if></li>
				<li><b>관심사 : </b>${vo.opt }</li>
				<li><b>설명 </b> : ${vo.info }</li>
			</ul>
		</div>

			<img src="imgs/line.png" id="lineImg"/>

		<div id="map1" style="width: 90%; max-width: 700px; height: 350px;"></div>
		<div id="infoDiv2">
			<h3>1st Place</h3>
			<h2>${vo.name1}</h2>
			<ul>
				<li><b>주소 : </b>${vo.addr1}</li>
				<li><b>연락처 : </b>${vo.tel1}</li>
				<li><b>링크 : </b><a href="${vo.link1}">${vo.link1}</a></li>
				<li><b>설명 : </b>${vo.info1}</li>

			</ul>
		</div>
		
		<img src="imgs/line.png" id="lineImg"/>
		
		<div id="map2" style="width: 90%; max-width: 700px; height: 350px;"></div>
		<div id="infoDiv2">
			<h3>2nd Place</h3>
			<h2>${vo.name2}</h2>
			<ul>
				<li><b>주소 : </b>${vo.addr2}</li>
				<li><b>연락처 : </b>${vo.tel2}</li>
				<li><b>링크 : </b><a href="${vo.link2}">${vo.link2}</a></li>
				<li><b>설명 : </b>${vo.info2}</li>
			</ul>
		</div>
		
		<img src="imgs/line.png" id="lineImg"/>
		
		<div id="map3" style="width: 90%; max-width: 700px; height: 350px;"></div>
		<div id="infoDiv2">
			<h3>3rd Place</h3>
			<h2>${vo.name3}</h2>
			<ul>
				<li><b>주소 : </b>${vo.addr3}</li>
				<li><b>연락처 : </b>${vo.tel3}</li>
				<li><b>링크 : </b><a href="${vo.link3}" target="_blank">${vo.link3}</a></li>
				<li><b>설명 : </b>${vo.info3}</li>
			</ul>
		</div>
	</div>

	<div id="buttonMenu">
		<a class="button" href="#">수정</a>
		<c:if test="${vo.grade!='미승인'}">
			<a class="button" href="#">미승인</a>
		</c:if>
		<c:if test="${vo.grade!='승인'}">
			<a class="button" href="#">승인</a>
		</c:if>
		<a class="button" href="#">목록</a>
	</div>
</div>

<script
	src="https://apis.openapi.sk.com/tmap/jsv2?version=1&appKey=l7xx2b206584120d471e8a290bd17aaba591"></script>
<script type="text/javascript">
	var map;
	var marker_s, marker_e, marker_p1, marker_p2;
	var totalMarkerArr = [];
	var drawInfoArr = [];
	var resultdrawArr = [];

	var slat = (lat1 + lat2 + lat3) / 3;
	var slng = (lng1 + lng2 + lng3) / 3;

	window.onload = function initTmap() {
		// 1. 지도 띄우기
		map = new Tmapv2.Map("map_div", {
			center : new Tmapv2.LatLng(slat, slng),
			width : "100%",
			height : "400px",
			zoom : 15,
			zoomControl : true,
			scrollwheel : true
		});

		// 2. 시작, 도착 심볼찍기
		// 시작
		marker_s = new Tmapv2.Marker(
				{
					position : new Tmapv2.LatLng(lat1, lng1),
					icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_1.png",
					iconSize : new Tmapv2.Size(24, 38),
					map : map
				});

		// 도착
		marker_e = new Tmapv2.Marker(
				{
					position : new Tmapv2.LatLng(lat3, lng3),
					icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_3.png",
					iconSize : new Tmapv2.Size(24, 38),
					map : map
				});
		// 3. 경유지 심볼 찍기
		marker = new Tmapv2.Marker(
				{
					position : new Tmapv2.LatLng(lat2, lng2),
					icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_2.png",
					iconSize : new Tmapv2.Size(24, 38),
					map : map
				});

		var pass = lng2 + "," + lat2;
		console.log("확인" + pass);

		// 3. 경로탐색 API 사용요청
		$
				.ajax({
					method : "POST",
					url : "https://apis.openapi.sk.com/tmap/routes/pedestrian?version=1&format=json&callback=result",
					async : false,
					data : {
						"appKey" : "l7xx2b206584120d471e8a290bd17aaba591",
						"startX" : lng1,
						"startY" : lat1,
						"endX" : lng3,
						"endY" : lat3,
						"reqCoordType" : "WGS84GEO",
						"resCoordType" : "EPSG3857",
						"startName" : "출발지",
						"endName" : "도착지",
						"passList" : pass
					},
					success : function(response) {
						var resultData = response.features;

						//결과 출력
						var tDistance = "총 거리 : "
								+ ((resultData[0].properties.totalDistance) / 1000)
										.toFixed(1) + "km,";
						var tTime = " 총 시간 : "
								+ ((resultData[0].properties.totalTime) / 60)
										.toFixed(0) + "분";

						$("#result").text(tDistance + tTime);

						//기존 그려진 라인 & 마커가 있다면 초기화
						if (resultdrawArr.length > 0) {
							for ( var i in resultdrawArr) {
								resultdrawArr[i].setMap(null);
							}
							resultdrawArr = [];
						}

						drawInfoArr = [];

						for ( var i in resultData) { //for문 [S]
							var geometry = resultData[i].geometry;
							var properties = resultData[i].properties;
							var polyline_;

							if (geometry.type == "LineString") {
								for ( var j in geometry.coordinates) {
									// 경로들의 결과값(구간)들을 포인트 객체로 변환 
									var latlng = new Tmapv2.Point(
											geometry.coordinates[j][0],
											geometry.coordinates[j][1]);
									// 포인트 객체를 받아 좌표값으로 변환
									var convertPoint = new Tmapv2.Projection.convertEPSG3857ToWGS84GEO(
											latlng);
									// 포인트객체의 정보로 좌표값 변환 객체로 저장
									var convertChange = new Tmapv2.LatLng(
											convertPoint._lat,
											convertPoint._lng);
									// 배열에 담기
									drawInfoArr.push(convertChange);
								}
							} else {
								var markerImg = "";
								var pType = "";
								var size;

								if (properties.pointType == "S") { //출발지 마커
									markerImg = "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_s.png";
									pType = "S";
									size = new Tmapv2.Size(24, 38);
								} else if (properties.pointType == "E") { //도착지 마커
									markerImg = "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_e.png";
									pType = "E";
									size = new Tmapv2.Size(24, 38);
								} else { //각 포인트 마커
									markerImg = "http://topopen.tmap.co.kr/imgs/point.png";
									pType = "P";
									size = new Tmapv2.Size(8, 8);
								}

								// 경로들의 결과값들을 포인트 객체로 변환 
								var latlon = new Tmapv2.Point(
										geometry.coordinates[0],
										geometry.coordinates[1]);

								// 포인트 객체를 받아 좌표값으로 다시 변환
								var convertPoint = new Tmapv2.Projection.convertEPSG3857ToWGS84GEO(
										latlon);

								var routeInfoObj = {
									markerImage : markerImg,
									lng : convertPoint._lng,
									lat : convertPoint._lat,
									pointType : pType
								};

								// Marker 추가
								marker_p = new Tmapv2.Marker(
										{
											position : new Tmapv2.LatLng(
													routeInfoObj.lat,
													routeInfoObj.lng),
											icon : routeInfoObj.markerImage,
											iconSize : size,
											map : map
										});
							}
						}//for문 [E]
						drawLine(drawInfoArr);
					},
					error : function(request, status, error) {
						console.log("code:" + request.status + "\n"
								+ "message:" + request.responseText + "\n"
								+ "error:" + error);
					}
				});

	}

	function addComma(num) {
		var regexp = /\B(?=(\d{3})+(?!\d))/g;
		return num.toString().replace(regexp, ',');
	}

	function drawLine(arrPoint) {
		var polyline_;

		polyline_ = new Tmapv2.Polyline({
			path : arrPoint,
			strokeColor : "#DD0000",
			strokeWeight : 6,
			map : map
		});
		resultdrawArr.push(polyline_);
	}
</script>

<!-- services와 clusterer, drawing 라이브러리 불러오기 -->
<script type="text/javascript"
	src="//dapi.kakao.com/v2/maps/sdk.js?appkey=ed6c268bc17af15a75755708f3c3d0a9&libraries=services,clusterer,drawing"></script>
<script>
	var mapContainer1 = document.getElementById('map1'), // 지도를 표시할 div 
	mapOption1 = {
		center : new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
		level : 3
	// 지도의 확대 레벨
	};

	// 지도를 생성합니다    
	var map1 = new kakao.maps.Map(mapContainer1, mapOption1);

	// 주소-좌표 변환 객체를 생성합니다
	var geocoder1 = new kakao.maps.services.Geocoder();

	// 주소로 좌표를 검색합니다
	geocoder1
			.addressSearch(
					"${vo.addr1}",
					function(result, status) {

						// 정상적으로 검색이 완료됐으면 
						if (status === kakao.maps.services.Status.OK) {

							var coords1 = new kakao.maps.LatLng(result[0].y,
									result[0].x);

							// 결과값으로 받은 위치를 마커로 표시합니다
							var marker1 = new kakao.maps.Marker({
								map : map1,
								position : coords1
							});

							// 인포윈도우로 장소에 대한 설명을 표시합니다
							var infowindow1 = new kakao.maps.InfoWindow(
									{
										content : '<div style="width:150px;text-align:center;padding:6px 0;">${vo.name1}</div>'
									});
							infowindow1.open(map1, marker1);

							// 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
							map1.setCenter(coords1);
						}
					});
</script>
<script>
	var mapContainer2 = document.getElementById('map2'), // 지도를 표시할 div 
	mapOption2 = {
		center : new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
		level : 3
	// 지도의 확대 레벨
	};

	// 지도를 생성합니다    
	var map2 = new kakao.maps.Map(mapContainer2, mapOption2);

	// 주소-좌표 변환 객체를 생성합니다
	var geocoder2 = new kakao.maps.services.Geocoder();

	// 주소로 좌표를 검색합니다
	geocoder2
			.addressSearch(
					"${vo.addr2}",
					function(result, status) {

						// 정상적으로 검색이 완료됐으면 
						if (status === kakao.maps.services.Status.OK) {

							var coords2 = new kakao.maps.LatLng(result[0].y,
									result[0].x);

							// 결과값으로 받은 위치를 마커로 표시합니다
							var marker2 = new kakao.maps.Marker({
								map : map2,
								position : coords2
							});

							// 인포윈도우로 장소에 대한 설명을 표시합니다
							var infowindow2 = new kakao.maps.InfoWindow(
									{
										content : '<div style="width:150px;text-align:center;padding:6px 0;">${vo.name2}</div>'
									});
							infowindow2.open(map2, marker2);

							// 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
							map2.setCenter(coords2);
						}
					});
</script>
<script>
	var mapContainer3 = document.getElementById('map3'), // 지도를 표시할 div 
	mapOption3 = {
		center : new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
		level : 3
	// 지도의 확대 레벨
	};

	// 지도를 생성합니다    
	var map3 = new kakao.maps.Map(mapContainer3, mapOption3);

	// 주소-좌표 변환 객체를 생성합니다
	var geocoder3 = new kakao.maps.services.Geocoder();

	// 주소로 좌표를 검색합니다
	geocoder3
			.addressSearch(
					"${vo.addr3}",
					function(result, status) {

						// 정상적으로 검색이 완료됐으면 
						if (status === kakao.maps.services.Status.OK) {

							var coords3 = new kakao.maps.LatLng(result[0].y,
									result[0].x);

							// 결과값으로 받은 위치를 마커로 표시합니다
							var marker3 = new kakao.maps.Marker({
								map : map3,
								position : coords3
							});

							// 인포윈도우로 장소에 대한 설명을 표시합니다
							var infowindow3 = new kakao.maps.InfoWindow(
									{
										content : '<div style="width:150px;text-align:center;padding:6px 0;">${vo.name3}</div>'
									});
							infowindow3.open(map3, marker3);

							// 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
							map3.setCenter(coords3);
						}
					});
</script>