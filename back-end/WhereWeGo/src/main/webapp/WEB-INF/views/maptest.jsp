<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<script>

</script>
<form method="get" action="/wherewego/telcheck">
	<input type="text" id="tel" name="tel" value="01087885202" required/>
	<input type="submit" id="telcheck" value="인증하기"/>
</form>

<form method="get" action="wherewego/userPhotoChange">
	<input type="text" id="userId" name="userId">
	<input type="file" id="photo" name="photo">
	<input type ="submit" value="사진 업로드"/>
</form>
	






<!--  -->
<!-- services와 clusterer, drawing 라이브러리 불러오기 -- >
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=ed6c268bc17af15a75755708f3c3d0a9&libraries=services,clusterer,drawing"></script>

<style>
/*
.map_wrap, .map_wrap * {margin:0;padding:0;font-size:12px;}
.map_wrap a, .map_wrap a:hover, .map_wrap a:active{color:#000;text-decoration: none;}
.map_wrap {position:relative;width:100%;height:500px; text-align:left;}
#menu_wrap {position:absolute;top:0;left:0;bottom:0;width:250px;margin:10px 0 30px 10px;padding:5px;overflow-y:auto;background:rgba(255, 255, 255, 0.7);z-index: 1;font-size:12px;border-radius: 10px;}
.bg_white {background:#fff;}
#menu_wrap hr {display: block; height: 1px;border: 0; border-top: 2px solid #5F5F5F;margin:3px 0;}
#menu_wrap .option{text-align: center;}
#menu_wrap .option p {margin:10px 0;}  
#menu_wrap .option button {margin-left:5px;}
#placesList li {list-style: none;}
#placesList .item {position:relative;border-bottom:1px solid #888;overflow: hidden;cursor: pointer;min-height: 65px;}
#placesList .item span {display: block;margin-top:4px;}
#placesList .item h5, #placesList .item .info {text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
#placesList .item .info{padding:10px 0 10px 55px;}
#placesList .info .gray {color:#8a8a8a;}
#placesList .info .jibun {padding-left:26px;background:url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_jibun.png) no-repeat;}
#placesList .info .tel {color:#009900;}
#placesList .item .markerbg {float:left;position:absolute;width:36px; height:37px;margin:10px 0 0 10px;background:url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png) no-repeat;}
#placesList .item .marker_1 {background-position: 0 -10px;}
#placesList .item .marker_2 {background-position: 0 -56px;}
#placesList .item .marker_3 {background-position: 0 -102px}
#placesList .item .marker_4 {background-position: 0 -148px;}
#placesList .item .marker_5 {background-position: 0 -194px;}
#placesList .item .marker_6 {background-position: 0 -240px;}
#placesList .item .marker_7 {background-position: 0 -286px;}
#placesList .item .marker_8 {background-position: 0 -332px;}
#placesList .item .marker_9 {background-position: 0 -378px;}
#placesList .item .marker_10 {background-position: 0 -423px;}
#placesList .item .marker_11 {background-position: 0 -470px;}
#placesList .item .marker_12 {background-position: 0 -516px;}
#placesList .item .marker_13 {background-position: 0 -562px;}
#placesList .item .marker_14 {background-position: 0 -608px;}
#placesList .item .marker_15 {background-position: 0 -654px;}
#pagination {margin:10px auto;text-align: center;}
#pagination a {display:inline-block;margin-right:10px;}
#pagination .on {font-weight: bold; cursor: default;color:#777;}
*/
</style>
<!-- 
<div class="map_wrap">
    <div id="map" style="width:100%;height:100%;position:relative;/* verflow:hidden; */"></div>

    <div id="menu_wrap" class="bg_white">
        <div class="option">
            <div>
                <form onsubmit="searchPlaces(); return false;">
                    키워드 : <input type="text" value="비트캠프" placeholder="장소명 입력" id="keyword" size="15"> 
                    <button type="submit">검색하기</button> 
                </form>
            </div>
        </div>
        <hr>
        <ul id="placesList"></ul>
        <div id="pagination"></div>
    </div>
</div> -- >

위에까진 네이버 제공
여기처럼 이렇게 사용자가 볼 수 있게 띄우기<br/>
<div id="name2">상호명</div>

<hr/><hr/>
<form method="post" action="/wherewego/checkPlace" onsubmit="return cantPlace();">
	<!-- 임시로 일단 종류는 임의 입력!!!!!!!!!!! -- >
	<input type="text" name="sort" placeholder="식당 카페 기타"/>
	<input type="text" name="zip" value="55555"/>
	<input type="text" name="time" value="00~24"/>
	<input type="text" name="info" placeholder="설명"/>
	<input type="text" name="link" placeholder="링크"/>

	<!-- 원래는 hidden으로 받기 -- >
	<input type="text" name="name" id="name" placeholder="상호명"/>
	<input type="text" name="addr" id="addr" placeholder="주소"/>
	<input type="text" name="tel" id="tel" placeholder="전화번호"/>
	<input type="submit" value="확인"/>
</form>
<hr/>
<br/><br/><br/><br/>
<form method="post" action="/wherewego/checkCourse">
	<input type="text" name="name" placeholder="코스명"/><br/>
	<input type="text" name="userid" placeholder="작성자"/>일단 여기서 $ { logid }을 hidden으로 넣는다는 가정.. 또는 컨트롤러에서 session값 불러와도됨<br/>
	<input type="text" name="starttime" value="00"/><input type="text" name="endtime" value="24"/>시간은 00~24 ~로 구분....... 일단 임시값<br/>
	근데 생각해보니까 분명이 빠른시간대랑 늦은시간대랑 따로따로 받을듯... vo추가해두기
	<input type="text" name="stname" value="잠실" placeholder="역이름"/>역이름으로 보내주시면됩니당<br/>
	<input type="text" name="pcode1" placeholder="장소코드1"/>
	<input type="text" name="pcode2" placeholder="장소코드2"/>
	<input type="text" name="pcode3" placeholder="장소코드3"/><br/>
	<input type="text" name="sortstring" placeholder="종류"/>카페기타식당 식당카페기타 이렇게 넘겨주세용<br/>
	<input type="text" name="opt" value="#한식#일식/#분위기#야외/#체험/#팝업" placeholder="관심사"/><br/>
	<textarea name="info"></textarea>
	#한식#일식/#분위기#야외/#체험/#팝업<br/>
	/#분위기//<br/>
	#한식#일식#그외/#컨셉//#팝업<br/>
	#양식///<br/>
	<input type="submit" value="확인"/>
</form>


<script>
/*
////////////////////**************************
function cantPlace() {
	if($("#name").val()=="" || $("#addr").val()=="" || $("#tel").val()=="") {
		alert("등록이 불가능한 장소입니다. 다른 장소를 추천해주세요. 라고 쓰려고 했는데 일부장소는 번호가 없는게 정상이긴하네?");
		$("#name").val(null);
		$("#addr").val(null);
		$("#tel").val(null);
		
		return false;
	}
}
///////////////////////////////////////////////////////


// 마커를 담을 배열입니다

var markers = [];

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };  

// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption); 

// 장소 검색 객체를 생성합니다
var ps = new kakao.maps.services.Places();  

// 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({zIndex:1});

// 키워드로 장소를 검색합니다
searchPlaces();

// 키워드 검색을 요청하는 함수입니다
function searchPlaces() {

    var keyword = document.getElementById('keyword').value;

    if (!keyword.replace(/^\s+|\s+$/g, '')) {
        alert('키워드를 입력해주세요!');
        return false;
    }

    // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
    ps.keywordSearch( keyword, placesSearchCB); 
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

        alert('검색 결과가 존재하지 않습니다.');
        return;

    } else if (status === kakao.maps.services.Status.ERROR) {

        alert('검색 결과 중 오류가 발생했습니다.');
        return;

    }
}

// 검색 결과 목록과 마커를 표출하는 함수입니다
function displayPlaces(places) {

    var listEl = document.getElementById('placesList'), 
    menuEl = document.getElementById('menu_wrap'),
    fragment = document.createDocumentFragment(), 
    bounds = new kakao.maps.LatLngBounds(), 
    listStr = '';
    
    // 검색 결과 목록에 추가된 항목들을 제거합니다
    removeAllChildNods(listEl);

    // 지도에 표시되고 있는 마커를 제거합니다
    removeMarker();
    
    for ( var i=0; i<places.length; i++ ) {

        // 마커를 생성하고 지도에 표시합니다
        var placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
            marker = addMarker(placePosition, i), 
            itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        bounds.extend(placePosition);
            

    	
    	/////////내가추가***********
    	//var addr = places[i].road_address_name;
    	//if(addr==null) {
    	//	addr = places[i].address_name;
    	//}
    	//var tel = places[i].phone;
    	////**************************

        // 마커와 검색결과 항목에 mouseover 했을때
        // 해당 장소에 인포윈도우에 장소명을 표시합니다
        // mouseout 했을 때는 인포윈도우를 닫습니다
        (function(marker, title) {
        	var addr = places[i].road_address_name;
        	if(addr==null) {
        		addr = places[i].address_name;
        	}
        	var tel = places[i].phone;
            kakao.maps.event.addListener(marker, 'mouseover', function() {
                displayInfowindow(marker, title);
            });

            kakao.maps.event.addListener(marker, 'mouseout', function() {
                infowindow.close();
            });
            
            ////////내가 추가***********************
            kakao.maps.event.addListener(marker, 'mouseup', function() {
                $('#name').val(title);
                $('#tel').val(tel);
                $('#addr').val(addr);           
                $('#name2').html(title);
            });
            
            itemEl.onmouseup =  function () {
                $('#name').val(title);
                $('#tel').val(tel);
                $('#addr').val(addr);       
                $('#name2').html(title);
            };
            ///////////////////

            itemEl.onmouseover =  function () {
                displayInfowindow(marker, title);
            };

            itemEl.onmouseout =  function () {
                infowindow.close();
            };
            /////////////////더 갖고올 정보 여기서 추가함***********************
        })(marker, places[i].place_name, places[i].phone, places[i].address_name, places[i].road_address_name);

        fragment.appendChild(itemEl);
    }

    // 검색결과 항목들을 검색결과 목록 Elemnet에 추가합니다
    listEl.appendChild(fragment);
    menuEl.scrollTop = 0;

    // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
    map.setBounds(bounds);
}

// 검색결과 항목을 Element로 반환하는 함수입니다
function getListItem(index, places) {

    var el = document.createElement('li'),
    itemStr = '<span class="markerbg marker_' + (index+1) + '"></span>' +
                '<div class="info">' +
                '   <h5>' + places.place_name + '</h5>';

    if (places.road_address_name) {
        itemStr += '    <span>' + places.road_address_name + '</span>' +
                    '   <span class="jibun gray">' +  places.address_name  + '</span>';
    } else {
        itemStr += '    <span>' +  places.address_name  + '</span>'; 
    }
                 
      itemStr += '  <span class="tel">' + places.phone  + '</span>' +
                '</div>';           

    el.innerHTML = itemStr;
    el.className = 'item';

    return el;
}

// 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
function addMarker(position, idx, title) {
    var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
        imageSize = new kakao.maps.Size(36, 37),  // 마커 이미지의 크기
        imgOptions =  {
            spriteSize : new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
            spriteOrigin : new kakao.maps.Point(0, (idx*46)+10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
            offset: new kakao.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
        },
        markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
            marker = new kakao.maps.Marker({
            position: position, // 마커의 위치
            image: markerImage 
        });

    marker.setMap(map); // 지도 위에 마커를 표출합니다
    markers.push(marker);  // 배열에 생성된 마커를 추가합니다

    return marker;
}

// 지도 위에 표시되고 있는 마커를 모두 제거합니다
function removeMarker() {
    for ( var i = 0; i < markers.length; i++ ) {
        markers[i].setMap(null);
    }   
    markers = [];
}

// 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
function displayPagination(pagination) {
    var paginationEl = document.getElementById('pagination'),
        fragment = document.createDocumentFragment(),
        i; 

    // 기존에 추가된 페이지번호를 삭제합니다
    while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild (paginationEl.lastChild);
    }

    for (i=1; i<=pagination.last; i++) {
        var el = document.createElement('a');
        el.href = "#";
        el.innerHTML = i;

        if (i===pagination.current) {
            el.className = 'on';
        } else {
            el.onclick = (function(i) {
                return function() {
                    pagination.gotoPage(i);
                }
            })(i);
        }

        fragment.appendChild(el);
    }
    paginationEl.appendChild(fragment);
}

// 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
// 인포윈도우에 장소명을 표시합니다
function displayInfowindow(marker, title) {
    var content = '<div style="padding:5px;z-index:1;">' + title + '</div>';

    infowindow.setContent(content);
    infowindow.open(map, marker);
}

 // 검색결과 목록의 자식 Element를 제거하는 함수입니다
function removeAllChildNods(el) {   
    while (el.hasChildNodes()) {
        el.removeChild (el.lastChild);
    }
}
 */
</script>


<script>
/*
//오늘의날씨
var apiURI = "http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=28dfc3b27e5cac4c9fd964f060b19070&lang=kr";
$.ajax({
    url: apiURI,
    dataType: "json",
    type: "GET",
    async: "false",
    success: function(resp) {
        console.log(resp);
        console.log("현재온도 : "+ (resp.main.temp- 273.15) );
        console.log("현재습도 : "+ resp.main.humidity);
        console.log("날씨 : "+ resp.weather[0].main );
        console.log("상세날씨설명 : "+ resp.weather[0].description );
        console.log("날씨 이미지 : "+ resp.weather[0].icon );
        console.log("바람   : "+ resp.wind.speed );
        console.log("나라   : "+ resp.sys.country );
        console.log("도시이름  : "+ resp.name );
        console.log("구름 : "+ (resp.clouds.all) +"%" );                 
    }
})*/
</script>

<script>
//이 스크립트를 코스 검색에 추가해주세요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//resp.list[i].weather[0].icon 이 데이터를 wheather 라는 데이터로 보내주시면 됩니다!!!!!!!!!!!!!!!!!!!!!
//planningVO 에 제가 wheather 추가해놨어요!!!!!!!!!!!!!!!!!!!!!!!

//날씨가 오늘 기준으로 4일뒤까지만 가져올 수 있어서
//만약 오늘날짜 : 10/24이고, 예약날짜 5일 이상((10/29~)) 이면 날짜 value 그냥 비워두시면 됩니당.
//10/29 이전이라면?
//다음날:11 / 다다음날:19 / 다다다음날:27 / 다다다다음날 35 라는 숫자를 resp.list[i].weather[0].icon 여기 i 안에 넣어주면 됩니당!!!!!!
/*
var apiURI = "https://api.openweathermap.org/data/2.5/forecast?q=seoul&appid=28dfc3b27e5cac4c9fd964f060b19070&lang=kr";
$.ajax({
    url: apiURI,
    dataType: "json",
    type: "GET",
    async: "false",
    success: function(resp) {
        console.log(resp);
        console.log("이 데이터를 가져와주세요!!!!! : "+ resp.list[0].weather[0].icon);
    }
})*/
</script>

<br/>
<br/>
<br/>
<br/>
<br/>
<input type="text" name="userid" plcaeholder="아이디"/>
<input type="text" name="stname" plcaeholder="역명"/>
<input type="text" name="userid" plcaeholder="날짜"/>


<br/>
<br/>
<br/>
<br/>
<!-- 
		<script src="https://apis.openapi.sk.com/tmap/jsv2?version=1&appKey=l7xx2b206584120d471e8a290bd17aaba591"></script>
		<script type="text/javascript">

		var map;
		
		var marker_s, marekr_e, waypoint;
		var resultMarkerArr = [];
		//경로그림정보
		var drawInfoArr = [];
		var resultInfoArr = [];
		
		window.onload = function initTmap(){
			resultMarkerArr = [];
			
		 	// 1. 지도 띄우기
			map = new Tmapv2.Map("map_div", {
				center: new Tmapv2.LatLng(37.405278291509404, 127.12074279785197),
				width : "100%",
				height : "400px",
				zoom : 14,
				zoomControl : true,
				scrollwheel : true
				
			});
			
			// 2. 시작, 도착 심볼찍기
			// 시작
			marker_s = new Tmapv2.Marker({
				position : new Tmapv2.LatLng(37.402688, 127.103259),
				icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_s.png",
				iconSize : new Tmapv2.Size(24, 38),
				map:map
			});
			resultMarkerArr.push(marker_s);
			// 도착
			marker_e = new Tmapv2.Marker({
				position : new Tmapv2.LatLng(37.414382, 127.142571),
				icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_e.png",
				iconSize : new Tmapv2.Size(24, 38),
				map:map
			});
			resultMarkerArr.push(marker_e);
			
			// 3. 경유지 심볼 찍기
			marker = new Tmapv2.Marker({
				position : new Tmapv2.LatLng(37.399569, 127.103790),
				icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_1.png",
				iconSize : new Tmapv2.Size(24, 38),
				map:map
			});
			resultMarkerArr.push(marker);
			
			marker = new Tmapv2.Marker({
				position : new Tmapv2.LatLng(37.402748, 127.108913),
				icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_2.png",
				iconSize : new Tmapv2.Size(24, 38),
				map:map
			});
			resultMarkerArr.push(marker);
			/*
			marker = new Tmapv2.Marker({
				position : new Tmapv2.LatLng(37.397153, 127.113403),
				icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_3.png",
				iconSize : new Tmapv2.Size(24, 38),
				map:map
			});
			resultMarkerArr.push(marker);
			
			marker = new Tmapv2.Marker({
				position : new Tmapv2.LatLng(37.410135, 127.121210),
				icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_4.png",
				iconSize : new Tmapv2.Size(24, 38),
				map:map
			});
			resultMarkerArr.push(marker);
			
			marker = new Tmapv2.Marker({
				position : new Tmapv2.LatLng(37.399400, 127.123296),
				icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_5.png",
				iconSize : new Tmapv2.Size(24, 38),
				map:map
			});
			resultMarkerArr.push(marker);
			
			marker = new Tmapv2.Marker({
				position : new Tmapv2.LatLng(37.406327, 127.130933),
				icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_6.png",
				iconSize : new Tmapv2.Size(24, 38),
				map:map
			});
			resultMarkerArr.push(marker);
			
			marker = new Tmapv2.Marker({
				position : new Tmapv2.LatLng(37.413227, 127.127337),
				icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_7.png",
				iconSize : new Tmapv2.Size(24, 38),
				map:map
			});
			*/
			resultMarkerArr.push(marker);
			
			// 4. 경로탐색 API 사용요청
			var routeLayer; 
			//$("#btn_select").click(function(){
				$(()=> {
					
				
		
				var searchOption = 3;
				
				var headers = {}; 
				headers["appKey"]="l7xx2b206584120d471e8a290bd17aaba591";
				headers["Content-Type"]="application/json";
				
				var param = JSON.stringify({
					"startName" : "출발지",
					"startX" : "127.103259",
					"startY" : "37.402688",
					"startTime" : "201708081103",
					"endName" : "도착지",
					"endX" : "127.142571",
					"endY" : "37.414382",
					"viaPoints" : 
						[
						 {
							 "viaPointId" : "test01",
							 "viaPointName" : "name01",
							 "viaX" : "127.103790" ,
							 "viaY" : "37.399569" 
						 },
						 {
							 "viaPointId" : "test02",
							 "viaPointName" : "name02",
							 "viaX" : "127.108913" ,
							 "viaY" : "37.402748" 
						 }/*,
						 {
							 "viaPointId" : "test03",
							 "viaPointName" : "name03",
							 "viaX" : "127.113403" ,
							 "viaY" : "37.397153" 
						 },
						 {
							 "viaPointId" : "test04",
							 "viaPointName" : "name04",
							 "viaX" : "127.121210" ,
							 "viaY" : "37.410135" 
						 },
						 {
							 "viaPointId" : "test05",
							 "viaPointName" : "name05",
							 "viaX" : "127.123296" ,
							 "viaY" : "37.399400" 
						 },
						 {
							 "viaPointId" : "test06",
							 "viaPointName" : "name06",
							 "viaX" : "127.130933" ,
							 "viaY" : "37.406327" 
						 },
						 {
							 "viaPointId" : "test07",
							 "viaPointName" : "name07",
							 "viaX" : "127.127337" ,
							 "viaY" : "37.413227" 
						 }*/
						],
					"reqCoordType" : "WGS84GEO",
					"resCoordType" : "EPSG3857",
					"searchOption": searchOption
				});
				
				$.ajax({
						method:"POST",
						url:"https://apis.openapi.sk.com/tmap/routes/routeSequential30?version=1&format=json",//
						headers : headers,
						async:false,
						data:param,
						success:function(response){
		
							var resultData = response.properties;
							var resultFeatures = response.features;
							
							// 결과 출력
							var tDistance = "총 거리 : " + resultData.totalDistance + "km,  ";
							var tTime = "총 시간 : " + resultData.totalTime + "분,  ";
							var tFare = "총 요금 : " + resultData.totalFare + "원";
							
							$("#result").text(tDistance+tTime+tFare);
							
							//기존  라인 초기화
							
							if(resultInfoArr.length>0){
								for(var i in resultInfoArr){
									resultInfoArr[i].setMap(null);
								}
								resultInfoArr=[];
							}
							
							for(var i in resultFeatures) {
								var geometry = resultFeatures[i].geometry;
								var properties = resultFeatures[i].properties;
								var polyline_;
								
								drawInfoArr = [];
								
								if(geometry.type == "LineString") {
									for(var j in geometry.coordinates){
										// 경로들의 결과값(구간)들을 포인트 객체로 변환 
										var latlng = new Tmapv2.Point(geometry.coordinates[j][0], geometry.coordinates[j][1]);
										// 포인트 객체를 받아 좌표값으로 변환
										var convertPoint = new Tmapv2.Projection.convertEPSG3857ToWGS84GEO(latlng);
										// 포인트객체의 정보로 좌표값 변환 객체로 저장
										var convertChange = new Tmapv2.LatLng(convertPoint._lat, convertPoint._lng);
										
										drawInfoArr.push(convertChange);
									}
		
									polyline_ = new Tmapv2.Polyline({
										path : drawInfoArr,
										strokeColor : "#FF0000",
										strokeWeight: 6,
										map : map
									});
									resultInfoArr.push(polyline_);
									
								}else{
									var markerImg = "";
									var size = "";			//아이콘 크기 설정합니다.
									
									if(properties.pointType == "S"){	//출발지 마커
										markerImg = "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_s.png";	
										size = new Tmapv2.Size(24, 38);
									}else if(properties.pointType == "E"){	//도착지 마커
										markerImg = "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_e.png";
										size = new Tmapv2.Size(24, 38);
									}else{	//각 포인트 마커
										markerImg = "http://topopen.tmap.co.kr/imgs/point.png";
										size = new Tmapv2.Size(8, 8);
									}
									
									// 경로들의 결과값들을 포인트 객체로 변환 
									var latlon = new Tmapv2.Point(geometry.coordinates[0], geometry.coordinates[1]);
									// 포인트 객체를 받아 좌표값으로 다시 변환
									var convertPoint = new Tmapv2.Projection.convertEPSG3857ToWGS84GEO(latlon);
								  	
								  	marker_p = new Tmapv2.Marker({
								  		position: new Tmapv2.LatLng(convertPoint._lat, convertPoint._lng),
								  		icon : markerImg,
								  		iconSize : size,
								  		map:map
								  	});
								  	
								  	resultMarkerArr.push(marker_p);
								}
							}
						},
						error:function(request,status,error){
							console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
						}
					});
			});
		}
		
		function addComma(num) {
			  var regexp = /\B(?=(\d{3})+(?!\d))/g;
			   return num.toString().replace(regexp, ',');
		}
	</script>


<p id="result"></p>

	<button id="btn_select">적용하기</button>
	
	<div id="map_wrap" class="map_wrap">
		<div id="map_div"></div>
	</div>
	 -- >
	 
	 

	 
	 
	 
	 


<script
	src="https://apis.openapi.sk.com/tmap/jsv2?version=1&appKey=l7xx2b206584120d471e8a290bd17aaba591"></script>
<script type="text/javascript">
	var map;
	var marker_s, marker_e, marker_p1, marker_p2;
	var totalMarkerArr = [];
	var drawInfoArr = [];
	var resultdrawArr = [];

	window.onload = function initTmap() {
		// 1. 지도 띄우기
		map = new Tmapv2.Map("map_div", {
			center : new Tmapv2.LatLng(37.285569177130164, 126.98888900488411),
			width : "100%",
			height : "400px",
			zoom : 16,
			zoomControl : true,
			scrollwheel : true
		});

		// 2. 시작, 도착 심볼찍기
		// 시작
		marker_s = new Tmapv2.Marker(
				{
					position : new Tmapv2.LatLng(37.28417777867449, 126.98951126039627),
					icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_s.png",
					iconSize : new Tmapv2.Size(24, 38),
					map : map
				});

		// 도착
		marker_e = new Tmapv2.Marker(
				{
					position : new Tmapv2.LatLng(37.28694348890008, 126.98630333841743),
					icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_e.png",
					iconSize : new Tmapv2.Size(24, 38),
					map : map
				});
		// 3. 경유지 심볼 찍기
		marker = new Tmapv2.Marker({
			position : new Tmapv2.LatLng(37.28463020120612, 126.98818088470202),
			icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_1.png",
			iconSize : new Tmapv2.Size(24, 38),
			map:map
		});
		
		
		marker = new Tmapv2.Marker({
			position : new Tmapv2.LatLng(37.28503140380001, 126.98644281328428),
			icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_2.png",
			iconSize : new Tmapv2.Size(24, 38),
			map:map
		});
		
		// 3. 경로탐색 API 사용요청
		$
				.ajax({
					method : "POST",
					url : "https://apis.openapi.sk.com/tmap/routes/pedestrian?version=1&format=json&callback=result",
					async : false,
					data : {
						"appKey" : "l7xx2b206584120d471e8a290bd17aaba591",
						"startX" : "126.98956490454823",
						"startY" : "37.28418631498492",
						"endX" : "126.98634625377464",
						"endY" : "37.28693495290592",
						"reqCoordType" : "WGS84GEO",
						"resCoordType" : "EPSG3857",
						"startName" : "출발지",
						"endName" : "도착지",
						"passList" : "126.98818088470924,37.28467288243416_126.98646427096334,37.28516798291778"
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
								resultdrawArr[i]
										.setMap(null);
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
		<!-- 190430 기존 지도를 모두 이미지 처리 위해 주석 처리 S -- >
		<div id="map_wrap" class="map_wrap3">
			<div id="map_div"></div>
		</div>
		<div class="map_act_btn_wrap clear_box"></div>
		<p id="result"></p>

		
		
		<br/>
		<br/>
		<br/>
		<br/>
		
		<div id="map" style="width:100%;height:350px;"></div>
<script>
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };  

// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption); 

// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();

// 주소로 좌표를 검색합니다
geocoder.addressSearch('제주특별자치도 제주시 첨단로 242', function(result, status) {

    // 정상적으로 검색이 완료됐으면 
     if (status === kakao.maps.services.Status.OK) {

        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        console.log("결과 : "+coords);
        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
            map: map,
            position: coords
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
            content: '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>'
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
    } 
   });    
</script>




<br/>
<br/>
<br/>
-->
<script>
/*
//오늘의날씨
var url = "http://api.vworld.kr/req/address?service=address&request=getcoord&version=2.0&crs=epsg:4326&address=경기도 수원시 팔달구 화산로24&refine=true&simple=false&format=xml&type=road&key=BD29CFAF-FFA8-3981-B839-71BE60DA5D29";
$.ajax({
    url: url,
    dataType: "xml",
    type: "GET",
    //async: "false",
    success: function(resp) {
        console.log(resp);               
    }
})*/
var url = "https://maps.googleapis.com/maps/api/geocode/json?address=경기 수원시 팔달구 화산로 24&key=AIzaSyCIt_Stq2QW_15wVds7sVrxA9y0Cadru1s";
$.ajax({
    url: url,
    dataType: "json",
    type: "GET",
    //async: "false",
    success: function(resp) {
        console.log(resp);  
        console.log("경도 : "+ resp.results[0].geometry.location.lat);
        console.log("위도 : "+ resp.results[0].geometry.location.lng);  
    }
});
</script>