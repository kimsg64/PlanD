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
	color: #553a31;
	text-align:center;
}

#mainDiv>h1 {
	text-align:left;
	margin-bottom:30px;
}

#adminProfileDiv, #businessProfileDiv{
	width: 100%;
	height: 150px;
	border: 1px solid #553a31;
	text-align: center;
	line-height: 50px;
	background-color: #eaded9;
	margin-bottom: 50px;
}


#adminMenu img, #businessMenu img {
	width:100px;
	height:100px;
}

#adminMenu, #businessMenu {
	width: 100%;
	border-spacing: 0 20px;
}

td:hover {
	color:#fde511;
}

</style>

<div id="whitetop"></div>

<div id="mainDiv">
	<h1>My Page</h1>

	<!-- 여긴 관리자 화면!!!!!!!!!!!< c : if test="${logid=='admin'}"> -->
	<div id="adminProfileDiv">
		admin 님의 마이페이지<br />
		<!-- ${logid } -->
		<h2>Plan.D</h2>
		사업자번호 : 555555555
	</div>

	<!-- 링크 이름은 임시로 제가 넣어둠! -->
	<table id="adminMenu">
		<tr>
			<td><a href="/wherewego/userList"><img src="imgs/adminMenu/user.png" /><br/>회원 관리</a></td> <!-- 병철님 파일 연결하기 -->
			<td><a href="/wherewego/noticeList"><img src="imgs/adminMenu/notice.png" /><br/>공지 관리</a></td>
			<td><a href="/wherewego/resList"><img src="imgs/adminMenu/reservation.png" /><br/>예약 관리</a></td>
			<td><a href="/wherewego/reviewList"><img src="imgs/adminMenu/review.png" /><br/>후기 관리</a></td> <!-- 유나님 파일 연결하기 -->
		</tr>
		<tr>
			<td><a href="/wherewego/courseList"><img src="imgs/adminMenu/location.png" /><br/>코스 관리</a></td> <!-- 유나님 파일 연결하기 -->
			<td><a href="/wherewego/newCourseList"><img src="imgs/adminMenu/new.png" /><br/>신규 코스 관리</a></td> <!-- 유나님 파일 연결하기 -->
			<td><a href="/wherewego/adList"><img src="imgs/adminMenu/ad.png" /><br/>광고 관리</a></td> <!-- 도훈님 파일 연결하기 -->
			<td><a href="/wherewego/pointshopList"><img src="imgs/adminMenu/pointshop.png" /><br/>상품 관리</a></td>
		</tr>
	</table>
	<!--  < / c:if> adminDiv끝-->
	
	<!--여긴 광고주 화면!!!!!!!!!!!< c : if test="${logid!='admin'}"> -->
	<div id="businessProfileDiv">
		Starbucks 님의 마이페이지<br />
		<!-- ${logid } -->
		<h2>스타벅스</h2>
		사업자번호 : 555555555
	</div>

	<!-- 링크 이름은 임시로 제가 넣어둠! -->
	<table id="businessMenu">
		<tr>
			<td><a href="/wherewego/MyInfo"><img src="imgs/adminMenu/user.png" /><br/>내 정보 수정</a></td>
			<td><a href="/wherewego/adMenu"><img src="imgs/adminMenu/ad.png" /><br/>광고 관리</a></td>
		</tr>
	</table>
	<!--  < / c:if> adminDiv끝-->

</div>