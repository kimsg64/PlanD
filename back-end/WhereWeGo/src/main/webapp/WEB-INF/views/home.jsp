<%@page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<style>
#whitetop {
	width: 100%;
	height: 80px;
	/*background-color:red;*/
}

#mainDiv {
	/*background-color:pink;*/
	width: 72%;
	margin: 0 auto;
	color: #00282e;
	text-align: center;
}

#mainDiv>h1 {
	text-align: left;
	margin-bottom: 30px;
}

#profileDiv {
	width: 100%;
	height: 150px;
	border: 2px dotted #efcac3;
	text-align: center;
	line-height: 50px;
	background-color: #f5ebe3;
	margin-bottom: 50px;
}

#adminMenu img {
	width: 100px;
	height: 100px;
}

#adminMenu {
	width: 100%;
	border-spacing: 0 20px;
}

td {padding : 5px;}

td:hover {
	color: #0e595f;
	background-color : #f5ebe3;
	border-radius: 12px;
}
</style>

<div id="whitetop"></div>

<div id="mainDiv">
	<h1>My Page</h1>

	<!-- 여긴 관리자 화면!!!!!!!!!!!< c : if test="${logid=='admin'}"> -->
	<div id="profileDiv">
		$ { vo.b_id } 님의 마이페이지<br />
		<!-- ${logid } -->
		<h2>$ { vo.name }</h2>
		사업자번호 : $ { vo.num }
	</div>

	<!-- 링크 이름은 임시로 제가 넣어둠! -->
	<table id="adminMenu">
		<tr>
			<td><a href="/wherewego/userList"><img
					src="imgs/adminMenu/user.png" /><br />회원 관리</a></td>
			<!-- 병철님 파일 연결하기 -->
			<td><a href="/wherewego/noticeList"><img
					src="imgs/adminMenu/notice.png" /><br />공지 관리</a></td>
			<td><a href="/wherewego/resList"><img
					src="imgs/adminMenu/reservation.png" /><br />예약 관리</a></td>
			<td><a href="/wherewego/reviewList"><img
					src="imgs/adminMenu/review.png" /><br />후기 관리</a></td>
			<!-- 유나님 파일 연결하기 -->
		</tr>
		<tr>
			<td><a href="/wherewego/courseList"><img
					src="imgs/adminMenu/location.png" /><br />코스 관리</a></td>
			<!-- 유나님 파일 연결하기 -->
			<td><a href="/wherewego/placeList"><img
					src="imgs/adminMenu/place.png" /><br />장소 관리</a></td>
			<!-- 유나님 파일 연결하기 -->
			<td><a href="/wherewego/advermanage"><img
					src="imgs/adminMenu/ad.png" /><br />광고 관리</a></td>
			<!-- 도훈님 파일 연결하기 -->
			<td><a href="/wherewego/pointshopList"><img
					src="imgs/adminMenu/pointshop.png" /><br />포인트샵 관리</a></td>
		</tr>
	</table>
	<!--  < / c:if> adminDiv끝-->

	<!--여긴 광고주 화면!!!!!!!!!!!< c : if test="${logid!='admin'}"> -->

	<!-- 링크 이름은 임시로 제가 넣어둠! -->
	여기 아래는 광고주 아래가 로그인하면 뜨는 메뉴.
	<table id="adminMenu">
		<tr>
			<td><a href="/wherewego/MyInfo"><img
					src="imgs/adminMenu/user.png" /><br />내 정보 수정</a></td>
			<td><a href="/wherewego/adMenu"><img
					src="imgs/adminMenu/click.png" /><br />광고 신청</a></td>
			<td><a href="/wherewego/adMenu"><img
					src="imgs/adminMenu/ad.png" /><br />광고 관리</a></td>
		</tr>
	</table>
	<!--  < / c:if> adminDiv끝-->
</div>
