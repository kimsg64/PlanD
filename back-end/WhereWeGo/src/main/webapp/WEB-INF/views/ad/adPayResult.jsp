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
img{width:20%; margin:200px;}
#mainDiv>h1 {
	margin-bottom: 30px;
	text-align: left;
}
</style>

<div id="mainDiv">
<h1>결제 완료</h1>
	<img src="imgs/adminMenu/adB.png"/>
	<h2>결제가 완료되었습니다.</h2>
	신청하신 광고는 검토 후 결과를 알려드리겠습니다.<br/>
	결과는 광고 관리 페이지에서 확인 가능합니다.<br/>
	승인이 완료된 후, 광고 관리페이지에서 결제가 가능합니다.<br/><br/>
	<a href="/wherewego/advermanage" class="button">확인</a>
</div>