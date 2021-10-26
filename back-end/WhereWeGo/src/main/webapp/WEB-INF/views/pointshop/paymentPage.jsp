<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<script>
	var inputText = function() {
		var a = document.querySelector("#one").value;
		document.querySelector("#two").innerText = a;
		document.querySelector("#one").value = "";
		document.querySelector("#one").focus();
	};
</script>

<style>
#frame {
	width: 72%;
	margin: 0 auto;
}
#buttonMenu {
	float: right;
}
.button {
	background-color: #fd7d73;
	border: none;
	color: #f5ebe3;
	padding: 10px 20px;
	margin: 10px 0px;
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
img {margin-left:20%;width:20%; border:1px solid black;}
#infoDiv {width:50%; float:right}
</style>
</head>
<body>
	<div id="frame">
		<h1>주문 / 결제</h1>
		<br />
		<hr/>
		<br/>
		<h3>상품 정보</h3>
		<br/>
		<img src="upload/pointshop/${prVo.img }"/>
		<div id="infoDiv">
			${prVo.brand }
			<h3>${prVo.name }</h3>
		</div>
		<form method="get" action="/wherewego/paymentPageOk">
			<div>
				<input type="hidden" name="p_num" value="${ppVo.p_num }">
				${ppVo.img }<br /> ${ppVo.name }<br /> ${ppVo.brand }<br />
				${ppVo.price }
			</div>
			<br />
			<hr />

			<div>
				<h2>구매자 정보</h2>
				<br /> 수령인 : <input name="userId" value="${uVo.userId }"><br />
				연락처 : <input name="tel" value="${uVo.tel }"><br /> 이메일 : <input
					name="email" value="${uVo.email }"><br /> 포인트 : ${uVo.point }점
			</div>
			<br />
			<hr />

			<div class="wrapper">
				<h2>포인트 결제</h2>
				<br /> 보유 : <input name="point" value="${uVo.point }"><br />
				사용 : <input type="text" id="one"
					onKeyup="this.value=this.value.replace(/[^0-9]/g,'');" /> <input
					type="checkbox" id="useAllPoint" checked> 항상 보유 포인트 전액 사용하기

				<button onclick="inputText();">사용</button>

			</div>
			<br />

			<div>
				${uVo.point }<br /> -<br />
				<p id="two"></p>
			</div>

			<div id="buttonMenu">
				<a class="button" href="/wherewego/productPay?p_num=${prVo.p_num }&name=${prVo.name}&price=${prVo.price}">결제</a>
				<a class="button" href="/wherewego/pointshopView?p_num=${prVo.p_num}&nowPage=${pVo.nowPage}">취소</a>
			</div>
		</form>
	</div>
</body>
</html>
