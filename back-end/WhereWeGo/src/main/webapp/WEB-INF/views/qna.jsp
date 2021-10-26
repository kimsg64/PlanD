<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

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
#imgDiv {width:40%; margin:0 auto;}
a > #talk {width:70%;}
a > #chat, a > #cha {width:12%;}
b {color:#fd7d73;}
#faq:hover{color:#fd7d73;}
</style>

<div id="mainDiv">
	<h1>QnA</h1>

	<h2>찾으시는 질문이 <a href="http://localhost:3000/#/faq" id="faq">FAQ</a>에 없으신가요?</h2>
	<br/>
	<h3>1:1 문의는 <b>PlanD</b> 카카오톡 채널을 이용해주세요.</h3>
	<br/><br/>
	<video src="imgs/talk/ka.mp4" width="40%" autoplay muted loop>
	</video>
	<div id="imgDiv">
		<a href="https://pf.kakao.com/_xlPxiIb"><img src="imgs/talk/talk.jpg" id="talk"/></a>
		<a href="https://pf.kakao.com/_xlPxiIb/chat"><img src="imgs/talk/chat.jpg" id="chat"/></a>
		<a href="https://pf.kakao.com/_xlPxiIb/friend"><img src="imgs/talk/cha.jpg" id="cha"/></a>
	</div>
	<br/><br/><br/>
	버튼을 누르면 <b>PlanD</b>의 카카오톡 채널로 이동합니다.
	<br/><br/>
	상담시간은 평일 09:00 부터 18:00입니다.<br/>
	영업시간 외 문의는 순차적으로 답변드리겠습니다.

</div>