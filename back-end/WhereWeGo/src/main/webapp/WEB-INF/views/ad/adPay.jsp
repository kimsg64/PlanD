<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!-- 아임포트 결제 cdn 추가 -->
<script type="text/javascript"
	src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"></script>

<script>
	var adnum = "${adnum}";
	var name = "${name}";
	var price = "${price}";
	
	IMP.init('imp18284589');
	IMP.request_pay({
		pg : 'inicis',
		pay_method : 'card',
		merchant_uid : 'PlanD'+adnum+price+name,
		name : 'PlanD 광고 결제',
		amount : price,
		//buyer_email : 'iamport@siot.do',
		buyer_name : name,
		//buyer_tel : '010-1234-5678',
		//buyer_addr : '서울특별시 강남구 삼성동',
		//buyer_postcode : '123-456'
	}, function(rsp) {
		if (rsp.success) {
			var msg = '결제완료';
			//msg += '고유ID : ' + rsp.imp_uid;
			//msg += '상점 거래ID : ' + rsp.merchant_uid;
			//msg += '결제 금액 : ' + rsp.paid_amount;
			//msg += '카드 승인번호 : ' + rsp.apply_num;
			alert(msg);
			location.href="/wherewego/adPaymentChange?adnum="+adnum;
		} else {
			var msg = '결제에 실패하였습니다.';
			msg += '에러내용 : ' + rsp.error_msg;
			alert(msg);
			history.back();
		}

		//alert(msg);
		//location.href = "/wherewego/paymentChange";
	});
</script>