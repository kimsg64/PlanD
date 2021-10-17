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

td {padding : 40px;}

td:hover {
	color: #fd7d73;
	background-color : #f5ebe3;
	border-radius: 12px;
}
</style>

<div id="whitetop"></div>

<div id="mainDiv">
	<h1>My Page</h1>


	<div id="profileDiv">
		${logid} 님의 마이페이지<br />
		<h2>${logname}</h2>
		사업자번호 : ${lognum}
	</div>
			<!-- 관리자 화면 -->
	<c:if test="${logid=='admin'}">
	
		<!-- 링크 이름은 임시로 제가 넣어둠! -->
		<table id="adminMenu">
			<tr>
				<td><a href="/wherewego/userList"><img
						src="imgs/adminMenu/userB.png" /><br />회원 관리</a></td>
				<td><a href="/wherewego/noticeList"><img
						src="imgs/adminMenu/notiB.png" /><br />공지 관리</a></td>
				<td><a href="/wherewego/resList"><img
						src="imgs/adminMenu/resB.png" /><br />예약 관리</a></td>
				<td><a href="/wherewego/reviewList"><img
						src="imgs/adminMenu/reviewB.png" /><br />후기 관리</a></td>
			</tr>
			<tr>
				<td><a href="/wherewego/courseList"><img
						src="imgs/adminMenu/locaB.png" /><br />코스 관리</a></td>
				<td><a href="/wherewego/placeList"><img
						src="imgs/adminMenu/placeB.png" /><br />장소 관리</a></td>
				<td><a href="/wherewego/advermanage"><img
						src="imgs/adminMenu/adB.png" /><br />광고 관리</a></td>
				<td><a href="/wherewego/pointshopList"><img
						src="imgs/adminMenu/pointB.png" /><br />포인트샵 관리</a></td>
			</tr>
		</table>
	</c:if>

	<!-- 광고주 화면 -->
	<c:if test="${logid!='admin'}">
		<table id="adminMenu">
			<tr>
				<td><a href="/wherewego/MyInfo"><img
						src="imgs/adminMenu/userB.png" /><br />내 정보 수정</a></td>
				<td><a href="/wherewego/adRegister"><img
						src="imgs/adminMenu/clickB.png" /><br />광고 신청</a></td>
				<td><a href="/wherewego/advermanage"><img
						src="imgs/adminMenu/adB.png" /><br />광고 관리</a></td>
			</tr>
		</table>
	</c:if>
</div>
