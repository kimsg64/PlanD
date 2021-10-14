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
	
	#adDiv {
		background-color:#f5ebe3;
		padding : 5% 13%;
		border-radius: 8px;
	}
	
	h3 {
		margin-bottom: 10px;
		text-align: left;
	}
	
	input[type=text], input[type=date], input[type=file], textarea {
		width : 100%;
		border-radius: 4px;
		padding: 10px;
		margin-bottom: 60px;
		border: 1px solid white;
		background-color: white;
	}
	
	input[type=text]:focus, input[type=date]:focus, input[type=file]:focus, textarea:focus {
		width : 100%;
		border-radius: 4px;
		padding: 10px;
		margin-bottom: 60px;
		border: 1px solid white;
		background-color: #efcac3;
		outline: none;
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
</style>
<script>

</script>

<div id="whitetop"></div>

<div id="mainDiv">
<form method="post" action="/wherewego/dataUpload" enctype="multipart/form-data">
	첨부파일 : <input type="file" name="filename"/><br/>
			<input type="file" name="filename"/><br/>
			<input type="file" name="filename"/><br/>
			<input type="file" name="filename"/><br/>
	<input type="submit" value="업로드하기"/>
</form>
	
	<h1>광고 신청</h1>

	<form method="post" action="/wherewego/adRegisterOk" name="adFrm" enctype="multipart/form-data">
		<div id="adDiv">
			<input type="hidden" name="b_id" id="b_id" value="${logid}">
			<input type="hidden" name="price" id="price" value="100">
			<input type="hidden" name="grade" id="grade" value="검토중">

			<h3>상호명</h3> <input type="text" name="name" id="name" value="${bVo.name}" readonly><br />
			
			<h3>주소</h3> <input type="text" name="addr" id="addr" value="${bVo.addr}" readonly><br />

			<h3>연락처</h3> <input type="text" name="tel" id="tel" value="${bVo.tel}" placeholder="하이픈(-) 없이 입력하세요." required><br />

			<h3>시작날짜</h3> 
			<input type="date" name="startdate" id="startdate" required><br/>
			
			<h3>마감날짜</h3>
			<input type="date" name="enddate" id="enddate" required><br />
			
			<!-- <h3>마감날짜</h3><br /> <input type="date" name="end" id="end" required><br /> -->
			
			<h3>링크</h3> <input type="text" name="link" id="link" placeholder="http://" required><br />
			
			<h3>내용</h3> <textarea name="info" id="info" rows="5"></textarea> <br />
			
			<h3>첨부파일</h3> <input type="file" id="uploadFile" name="uploadFile" required><br />
		</div>
		
		<div id="buttonMenu">
			<a class="button" href="javascript:document.adFrm.reset();">리셋</a>
			<a class="button" href="javascript:document.adFrm.submit();">신청</a>
		</div>
	</form>
</div>