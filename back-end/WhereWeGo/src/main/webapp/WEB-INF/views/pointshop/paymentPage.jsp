<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
.frame{
width: 72%;
	margin: 0 auto;
}
</style>
</head>
<body>
<h1>주문/결제</h1><br/>
<h4>상품정보</h4>

<div id="frame">
<form method="get" action="/wherewego/paymentPageOk">
<div>
<input type="hidden" name="p_num" value="${pVo.p_num }">
${pVo.name }<br/>
${pVo.brand }<br/>
${pVo.price }
</div>
<hr/>

<div>
<h2>구매자 정보</h2><br/>
수령인 : <input type="" id="userId" name="userId" value="${uVo.userId }"><br/>
연락처 : <input type="" id="tel" name="tel" value="${uVo.tel }"><br/>
이메일 : <input type="" id="email" name="email" value="${uVo.email }"><br/>
포인트 : ${uVo.point }점
</div>
<hr/>

<div>
<h2>포인트 결제</h2><br/>
보유 : <input type="text" value="${uVo.point }"><br/>
사용 : <input type="text" id="usePoint" name="usePoint"> <input type="checkbox" id="useAllPoint" checked> 항상 보유 포인트 전액 사용하기<br/> 

<div id="payButton">
<button id="pointuse">사용</button>
</div>
</div>
<div>
　{uVo.point }<br/>
-<br/>
　
</div>

<div>
<button id="pay">결제하기</button>
</div>
</form>
</div>
</body>
</html>
