<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>

function delCheck(){
	if(confirm("글을 삭제하시겠습니까?")){
		location.href="/wherewego/noticeDel?n_num=${vo.n_num}";
	}
}

</script>
<style>

	.write-area{
		width: 72%;
		margin:0 auto;
	}
	
	.writeTitle{
		height : 800px;
		padding: 29px 29px 29px;;
		border: 2px solid #ddd;
		border-radius: 6px;
	}
	
	.write_title{
		position: relative;
		margin-bottom:20px;
		padding-bottom:20px;
		border-bottom: 1px solid gray;
	}
	
	.write_main{
		margin-top:10px;
		width:100;
		overflow-x:auto;
		padding: 15px 15px 15px;
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
<div class="write-area">
	<div class="writeTitle">	
		<div class="write_header">
			<div class="write_title">
	
				<h1> ${vo.title }</h1><br/>
				<hr>
				　
				<div class="write_info">
				 등록일 : ${vo.writedate }　|　조회수 : ${vo.hit }
				</div>
			</div>		
		</div>
		<div class="write_story">
			<div class="write_main">
				<h5>${vo.content }</h5>
			</div>			
		</div>
	</div>
  	<div id="buttonMenu">
				<a class="button" href="noticeList">목록</a>
				<a class="button" href="javascript:delCheck()">삭제</a>
			</div>		<!-- 
  			 	<li>사진 : ${vo.photo }</li>
  			 -->
</div>