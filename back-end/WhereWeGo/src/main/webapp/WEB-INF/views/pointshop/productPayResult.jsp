<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<style>
#mainDiv {
	width: 72%;
	margin: 0 auto;
	color: #00282e;
	text-align: center;
}

.button {
	background-color: #fd7d73;
	border: none;
	color: #f5ebe3;
	padding: 10px 10px;
	margin: 50px 0px;
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
img {width:20%; margin:200px;}
#mainDiv>h1 {
	margin-bottom: 30px;
	text-align: left;
}
</style>

<div id="mainDiv">
<h1>결제 완료</h1>
	<img src="imgs/adminMenu/pointB.png"/>
	<h2>결제가 완료되었습니다.</h2>
	<br/> 유효기간은 구매일로부터 3개월입니다.<br/>
	쿠폰은 각 브랜드의 전국 온라인,오프라인 매장에서 사용 가능합니다.<br/>
	자세한 쿠폰 사용법은 각 브랜드의 홈페이지를 참고해주세요.<br/>
	확인을 누르면 포인트샵으로 이동합니다.<br/><br/>
	
	<a href="/wherewego/pointshopList" class="button">확인</a>
</div>