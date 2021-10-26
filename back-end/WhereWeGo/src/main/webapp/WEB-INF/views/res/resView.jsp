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
 #buttonMenu {
   float: right;
   }
   
   .button {
      background-color: #fd7d73;
      border: none;
      color: #f5ebe3;
      padding: 10px 20px;
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

#banner {
	width: 100%;
}

#viewDiv {
	float: center;
	background-color: #f5ebe3;
	border: 1px solid #efcac3;
	padding: 30px;
	border-radius: 6px;
}

#infoDiv {
	margin-left: 30%;
	text-align: left;
}

#infoDiv li {
	width: 80%;
	height: 40px;
	line-height: 40px;
	border-bottom: 1px solid #f5ebe3;
}
#map{margin:0 auto; border: 1px solid #0e595f}
</style>

<div id="mainDiv">
	<h1>장소 상세보기</h1>
	<!-- <img src="imgs/banner/place.jpg" id="banner"/>  -->

	<div id="viewDiv">
		<h4>No.${vo.res_num }</h4>
		<br />
		<h1>사용자아이디 : ${vo.userid }</h1>
		<h1>예약 날짜 : ${vo.resdate }</h1>
		<h1>예약 시간대 : ${vo.time }</h1>
		<h1>코스 번호 : ${vo.c_num }</h1>
		<br /> <br />

		<div id="map" style="width:600px;height:350px;"></div>
		<br /> <br />

		<div id="infoDiv">
		
		</div>
	</div>
	<div id="buttonMenu">
		<a class="button" href="#">수정</a>
		<a class="button" href="#">삭제</a>
		<a class="button" href="resList?nowPage=${pVo.nowPage }">목록</a>
	</div>
</div>