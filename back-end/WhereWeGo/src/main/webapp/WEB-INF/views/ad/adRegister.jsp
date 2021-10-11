<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<style>
	#whitetop {
		width: 100%;
		height: 80px;
	}
	
	#mainDiv {
		width: 72%;
		margin: 0 auto;
		color: #00282e;
		text-align: center;
	}
	
	#mainDiv>h1 {
		margin-bottom: 30px;
		text-align: left;
	}
	
	label {
		margin-top: 10px;
	}
</style>
<script>

</script>

<div id="whitetop"></div>

<div id="mainDiv">
	<h1>광고 신청</h1>

	<form method="post" action="">
		<div>
			<label>상호명</label><br/>
			<input type="text" class="form-control" name="name" id="name" value="${bVo.name}" readonly><br/>

			<label>주소</label><br/>
			<input type="text" class="form-control" name="addr" id="addr" value="${bVo.addr}" readonly><br/>
			
			<label>연락처</label><br/>
			<input type="text" class="form-control" name="tel" id="tel" value="${bVo.tel}" placeholder="하이픈(-) 없이 입력하세요." required><br/>

			<label>시작날짜</label><br/>
			<input type="date" class="form-control" name="start" id="start" required><br/>
			
			<label>마감날짜</label><br/>
			<input type="date" class="form-control" name="end" id="end" required><br/>

			<label>링크</label><br/>
			<input type="text" class="form-control" name="link" id="link" required><br/>
			
			<label>내용</label><br/>
			<textarea class="form-control" name="content" id="content" rows="2"></textarea><br/>

			<label>첨부파일</label><br/>
			<input class="form-control" type="file" id="formFile" required><br/>
		</div>
	</form>
</div>