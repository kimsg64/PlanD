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

<form method="post" action="/wherewego/paymentPageOk">
<div>
<input type="hidden" name="p_num" value="${vo.p_num }">
<img src="productImg.jpg"/> ${vo.name } ${vo.brand } ${vo.price }
</div>
<hr/>

<div>
<h2>배송지정보</h2>
수령인 <input type="text" id="userid" name="userid" ${vo.userid }>
연락처 <input type="text" id="tel" name="tel"> ${vo.tel }>
</div>

<div>
<h2>포인트</h2>
<h3>포인트 결제</h3>
보유 ${vo.point }
사용 ${vo.price }-{vo.point } <p><input type="checkbox" id="useAllPoint" checked>항상 보유 포인트 전액사용하기</p>
</div>

<div id="payButton">
<input type="button" id="pay">사용하기
</div>
</form>
</body>
</html>