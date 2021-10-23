<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
	integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
	crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<style>
.write-area {
	width: 72%;
	margin: 0 auto;
}

.writeTitle {
	padding: 29px 29px 29px;;
	border: 1px solid gray;
	border-radius: 6px;
}

.writeTitle.write_header {
	
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
			location.href="/wherewego/pdDel?p_num=${vo.p_num}";
		}
	}
</script>
<div class="write-area">
	<div class="writeTitle">
		<div class="write_header">
			<div class="write_title">
				${vo.p_num }
				<h1>${vo.name }</h1>
				<div class="write_info"></div>
			</div>
		</div>
		<div class="write_story">
			<div class="write_main">
				<img src="upload/pointshop/${vo.img}" width=70%; /><br />
				<h2>브랜드 : ${vo.brand }</h2>
				<h2>제품명 : ${vo.name }</h2>
				<h2>가 격 : ${vo.price }</h2>
				<h2>제품 설명: ${vo.info }</h2>
			</div>
		</div>
	</div>
	<div id="buttonMenu">		
		<a class="button" href="pointshopList?nowPage=${pVo.nowPage }">목록</a>
		<a class="button" href="javascript:viewDel()">삭제</a>
		<a class="button" href="#" >구매</a>
	</div>
</div>