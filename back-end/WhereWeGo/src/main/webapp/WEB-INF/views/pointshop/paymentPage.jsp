<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1>주문/결제</h1><br/>
<h4>상품정보 판매자 </h4>

<form method="get" action="/wherewego/paymentPageOk">
<div>
<input type="hidden" name="p_num" value="${pVo.p_num }">
<img src="productImg.jpg"/><br/>
${pVo.name }<br/>
${pVo.brand }<br/>
${pVo.price }
</div>
<hr/>

<div>
<h2>배송지정보</h2>
수령인 : <input type="text" id="userid" name="userid" value="${uVo.userid }"><br/>
연락처 : <input type="text" id="tel" name="tel" value="${uVo.tel }"><br/>
이메일 : <input type="text" id="email" name="email" value="${uVo.email }"><br/>
포인트 : ${uVo.point }점
</div>
<hr/>

<div>
<h2>포인트</h2>
<h3>포인트 결제</h3>
보유 : <input type="text" value="${uVo.point }"> <p><input type="checkbox" id="useAllPoint" checked> 항상 보유 포인트 전액사용하기</p><br/> 
사용 : <input type="text"> 
</div>

<div id="payButton">
<input type="button" id="pay">사용
</div>

<div>

</div>

</form>
</body>
</html>