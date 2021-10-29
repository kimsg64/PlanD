<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<script>
	$(()=> {	
		var price = "${prVo.price}";
		$('#finalprice').val(price);
		
		//구매수량 달라지면 가격도 바뀜
		$('#count').change(function() {
			price = "${prVo.price}"*$('#count').val();
			$('#money').html(price);
			$('#finalprice').val(price-$('.usepoint').val());
		});
		
		//포인트 전체 사용 체크
		$('#check').change(function() {
			$('.usepoint').val("${uVo.point}");
			$('.point').val(0);
			$('#finalprice').val(price-$('.usepoint').val());
		});
		
		//사용포인트 변화
		$('.usepoint').change(function(){
			var point = "${uVo.point}";
			usepoint = $('.usepoint').val();
			$('.point').val(point-usepoint);
			$('#finalprice').val(price-$('.usepoint').val());
			
			if($("#check").prop("checked", true)) {
				$("#check").prop("checked", false);
			}
		});
		//사용포인트 변화(키보드)
		$('.usepoint').keyup(function(){
			var point = "${uVo.point}";
			usepoint = $('.usepoint').val();
			$('.point').val(point-usepoint);
			$('#finalprice').val(price-$('.usepoint').val());
			
			if($("#check").prop("checked", true)) {
				$("#check").prop("checked", false);
			}
		});
		
		$('#tel').key(function(e) {
			console.log(e.target.value);
			$(this).val() = e.target.value;
			console.log($(this).val());
		});
	});
	
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

img {
	margin-left: 20%;
	width: 20%;
}

#infoDiv {
	width: 50%;
	float: right
}

.aaa {
	color: #0e595f;
	font-size: 0.8em;
}

#userInfo li {
	height: 20px;
	margin: 10px 20%;
	font-size: 1.2em;
}

#userInfo {
	margin: 50px 0px;
}

#inputtxt {
	width: 40%;
	border-radius: 4px;
	padding: 10px;
	margin-bottom: 60px;
	border: 1px solid #0e595f;
	background-color: white;
}

#inputtxt:focus {
	width: 40%;
	border-radius: 4px;
	padding: 10px;
	margin-bottom: 60px;
	background-color: #efcac3;
	outline: none;
}
#finalprice {
	font-family: "TmoneyRoundWindRegular";
	border: 1px solid #f5ebe3;
	font-size:1.5em;
	width:130px;
	font-weight:bold;
	background-color:#f5ebe3;
}
#finalprice:focus {background-color:#f5ebe3;outline: none;border: 1px solid white;}
#priceBox {padding:10px;width:200px; height:auto;text-align:right;background-color:#f5ebe3;border-radius: 12px;
position: sticky;bottom:20px; left:79%;right:14%;margin-bottom:50px;}
</style>
</head>
<body>
	<div id="frame">
		<form method="post" action="/wherewego/productPay">		
			<h1>주문 / 결제</h1>
			<br />
			<hr />
			<br />
	
			<h2>상품 정보</h2>
			<br /> <img src="upload/pointshop/${prVo.img }" />
			<div id="infoDiv">
				${prVo.p_num }<br /> <br /> ${prVo.brand }
				<h3>${prVo.name }</h3>
				<br /> <br /> 수량 : <input type="number" name="count" id="count" min="1" max="10" value="1" />개<br /> 
				<span id="aaa">최대 구입 가능 수량은 10개입니다.</span><br /> <br />
				가격 : <b id="money">${prVo.price }</b>원
			</div>
			
			<input type="hidden" name="p_num" value="${prVo.p_num }" />
			<input type="hidden" name="brand" value="${prVo.brand }" />
			<input type="hidden" name="name" value="${prVo.name }" />
			
			<br />
			<hr />
			<br />
			
			<h2>구매자 정보</h2><br/>
			<div id="userInfo">
				<ul>
					<li><b>아이디</b> : ${uVo.userId }<input type="hidden" name="userid" value="${uVo.userId }" readonly /><li>
					<li><b>구매자</b> : ${uVo.name }<li>
					<li><b>이메일</b> : <input type="text" id="email" name="email" value="${uVo.email }" required /><li>
					<li><b>연락처</b> : <input type="text" id="tel" name="tel" value="${uVo.tel }" required/><li>
					<br/><span>입력한 연락처로 쿠폰 번호가 발송됩니다.</span><br /> <br />
				</ul>
			</div>
			<br />
			<hr />
			<br />
			
			<h2>Point</h2><br/>
			<div id="userInfo">
				<ul>
					<li><b>잔여</b> : <input type="text" id="point" name="point" class="point" value="${uVo.point }"  readonly/><li>
					<li>
						<b>사용</b> : <input type="number" value="0" id="usepoint" class="usepoint" min="0" max="${uVo.point }"/>
						&nbsp;<input type="checkbox" id="check"><span>&nbsp;전체 사용</span>
					<li>
					<br/><span>1point 단위로 사용 가능합니다.</span><br /> <br />
				</ul>
			</div>
			<br />
			<br />

			<div id="priceBox">
				최종 결제 금액<br />
				<!-- <b id="finalprice">원</b> -->
				<input type="text" name="price" id="finalprice" readonly />원
			</div>

			<div id="buttonMenu">
				<input type="submit" class="button" value="결제" />
				<a class="button" href="/wherewego/pointshopView?p_num=${prVo.p_num}&nowPage=${pVo.nowPage}">취소</a>
			</div>

		</form>
		
		
	</div>