<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<style>
.write-area {
	width: 72%;
	margin: 0 auto;
}

.writeTitle {
	padding: 29px 29px 29px;;
	border: 1px solid gray;
	border-radius: 6px;
	width:70%;
}

.writeTitle.write_header {
	
}
.info{
	padding:30px 20px 30px 35px;
	width:800px;
	box-sizing: border-box;
}

.write_title {
	position: relative;
	margin-bottom: 20px;
	padding-bottom: 20px;
	border-bottom: 1px solid gray;
}

.write_main {
	margin-top: 10px;
	overflow-x: auto;
	padding: 15px 15px 15px;
	display:flex;
}

#buttonMenu {
	float: right;
}

.button {
	background-color: #fd7d73;
	border: none;
	color: #f5ebe3;
	padding: 10px 10px;
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
</style>
<script>
	function viewDel(){
		if(confirm("글을 삭제하시겠습니까?")){
			location.href="/wherewego/adDel?adnum=${vo.adnum}";
		}
	}
</script>
<div class="write-area">
	<div class="writeTitle">
		<div class="write_header">
			<div class="write_title">
				No.${vo.adnum }
				<h1>${vo.name }</h1>
				<div class="write_info">${vo.startdate }~${vo.enddate }</div>
			</div>
		</div>
		<div class="write_story">
			<div class="write_main">
				<img src="upload/adimg/${vo.photo}" width=70%; /><br />
				<div class="info">
				<h4>주소 : ${vo.addr }</h4><br/>
				<h4>사업자번호 : ${vo.num }</h4><br/>
				<h4>연락처 : ${vo.tel }</h4><br/>
				<h4>승인여부 : ${vo.grade }</h4><br/>
				<h4>가격 : ${vo.price }000원</h4><br/>
				<h4>결제여부 : ${vo.payment }</h4>
				</div>
			</div>
		</div>
	</div>
	
	<div id="buttonMenu">
		<c:if test="${logid=='admin' && vo.grade=='검토중'}">
			<a class="button" href="/wherewego/adGradeChange?adnum=${vo.adnum }&grade=승인">승인</a>
			<a class="button" href="/wherewego/adGradeChange?adnum=${vo.adnum }&grade=미승인">미승인</a>
		</c:if>
		
		<c:if test="${logid!='admin' && vo.grade=='검토중'}">
			<a class="button" href="adEdit?adnum=${vo.adnum }">수정</a>
			<a class="button" href="javascript:viewDel()">삭제</a>
		</c:if>
		
		<c:if test="${logid!='admin' && vo.grade=='승인' && vo.payment=='미결제'}">
			<a class="button" href="/wherewego/adPay?adnum=${vo.adnum }&name=${vo.name}&price=${vo.price}">결제</a>
			<a class="button" href="javascript:viewDel()">삭제</a>
		</c:if>
		
		<a class="button" href="advermanage?nowPage=${pVo.nowPage}">목록</a>
	</div>
</div>