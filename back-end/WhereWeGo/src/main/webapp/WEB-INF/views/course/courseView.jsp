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
		<h4>No.${c_num }</h4>
		<br />
		<h1>코스명 : ${vo.name }</h1>
		<h1>작성자 : ${vo.userid }</h1>
		<h1>시간대 : ${vo.time }</h1>
		<h1>역코드 : ${vo.stcode }</h1>
		<br /> <br />

		<div id="map" style="width:600px;height:350px;"></div>
		<br /> <br />

		<div id="infoDiv">
			<ul>
				<li><b>설명 : </b>${vo.info }</li><br/>
				<li><b>승인여부 : </b>${vo.grade }</li>
				<li><b>장소코드1 : </b>${vo.pcode1 }</li>
				<li><b>장소코드2 : </b>${vo.pcode2 }</li>
				<li><b>장소코드3 : </b>${vo.pcode3 }</li>
				<li><b>평점 : </b>${vo.score }</li>
				<li><b>관심사 : </b>${vo.opt }</li>
				
			</ul>
		</div>
	</div>
</div>