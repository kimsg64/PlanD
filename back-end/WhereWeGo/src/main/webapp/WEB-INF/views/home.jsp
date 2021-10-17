<%@page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<style>

#mainDiv {
	width: 72%;
	margin: 0 auto;
	color: #00282e;
	text-align: center;
}

#mainDiv>h1 {
	text-align: left;
	margin-bottom: 30px;
}

#adminprofileDiv, #profileDiv {
	width: 100%;
	height: auto;
	border: 2px dotted #efcac3;
	text-align: center;
	line-height: 50px;
	background-color: #f5ebe3;
	margin-bottom: 50px;
	padding : 20px;
	border-radius: 12px;
}

#adminimg img{
	width:40%;
	height : auto;
	text-align: center;
	border-radius: 12px;
}

#adminMenu img {
	width: 100px;
	height: 100px;
}

#adminMenu {
	width: 100%;
	border-spacing: 0 20px;
}

#adminMenu td {padding : 40px;}

#adminMenu td:hover {
	color: #fd7d73;
	background-color : #f5ebe3;
	border-radius: 12px;
}

#adminnumtb { 
	background-color: #fffefd;
	width:100%; 
	border-top:2px dotted #efcac3;
	border-bottom:2px dotted #efcac3;
	padding : 20px;
}
#adminnumtb td {padding : 10px;}
#adminnum td {color:#fd7d73; font-size:2em;}

</style>

<div id="mainDiv">
	<h1>My Page</h1>

			<!-- 관리자 화면 -->
	<c:if test="${logid=='admin'}">
	
		<div id="adminprofileDiv">
			${logid} 관리자 페이지<br />
			<div id="adminimg"><img src="imgs/adminMenu/admin.png"/></div>
			<h2>${logname}</h2>
			사업자번호 : ${lognum}
		</div>

		<table id="adminnumtb">
			<tr>
				<td>검토중 코스</td>
				<td>검토중 광고</td>
				<td>새로운 후기</td>
				<td>신규 구매</td>
			</tr>
			<tr id="adminnum">
				<td>0${cnt1 }</td>
				<td>0${cnt2 }</td>
				<td>0${cnt3 }</td>
				<td>0${cnt4 }</td>
		</table>

	
		<!-- 링크 이름은 임시로 제가 넣어둠! -->
		<table id="adminMenu">
			<tr>
				<td><a href="/wherewego/userList"><img src="imgs/adminMenu/userB.png" /><br />회원 관리</a></td>
				<td><a href="/wherewego/noticeList"><img src="imgs/adminMenu/notiB.png" /><br />공지 관리</a></td>
				<td><a href="/wherewego/resList"><img src="imgs/adminMenu/resB.png" /><br />예약 관리</a></td>
				<td><a href="/wherewego/reviewList"><img src="imgs/adminMenu/reviewB.png" /><br />후기 관리</a></td>
			</tr>
			<tr>
				<td><a href="/wherewego/courseList"><img src="imgs/adminMenu/locaB.png" /><br />코스 관리</a></td>
				<td><a href="/wherewego/placeList"><img src="imgs/adminMenu/placeB.png" /><br />장소 관리</a></td>
				<td><a href="/wherewego/advermanage"><img src="imgs/adminMenu/adB.png" /><br />광고 관리</a></td>
				<td><a href="/wherewego/pointshopList"><img src="imgs/adminMenu/pointB.png" /><br />포인트샵 관리</a></td>
			</tr>
		</table>
	</c:if>

	<!-- 광고주 화면 -->
	<c:if test="${logid!='admin'}">
	
		<div id="profileDiv">
			${logid} 님의 마이페이지<br />
			<h2>${logname}</h2>
			사업자번호 : ${lognum}
		</div>
		
		<table id="adminnumtb">
			<tr>
				<td>진행중인 광고</td>
				<td>검토중인 광고</td>
				<td>완료된 광고</td>
			</tr>
			<tr id="adminnum">
				<td>0${cnt5 }</td>
				<td>0${cnt6 }</td>
				<td>0${cnt7 }</td>
		</table>
		
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
