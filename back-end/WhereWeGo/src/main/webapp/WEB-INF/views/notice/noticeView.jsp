<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
	integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
	crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>

function delCheck(){
	if(confirm("글을 삭제하시겠습니까?")){
		location.href="/wherewego/noticeDel?n_num=${vo.n_num}";
	}
}

$("input[id=file]").change(function(){
	
	if($(this).val() !=""){
		var ext = $(this).val().split(".").pop().toLowerCase();
		if($.inArray(ext, ["gif","jpg", "jpeg", "png"])== -1){
			alert("gif, jpg, jpeg, png 파일만 업로드 해주세요.");
			$(this).val("");
			return;
		}
	}
	
})

</script>
<style>
	.write-area{
      width: 72%;
      margin:0 auto;
   }
   
   .writeTitle{
      min-height : 800px;
      height:auto;
      padding: 45px 45px 45px;;
      border: 1px solid #efcac3;
      border-radius: 6px;
      background-color : #fffefd;
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
   
   #ii {max-width:50%; height:auto;display:inline;}
   #ff:hover {color:#fd7d73;}
</style>


<div class="write-area">
	<h1>공지사항</h1>
	<br />

	<div class="writeTitle">
		<div class="write_header">
			<div class="write_title">

				<h1>${vo.title }</h1>
				<br />
				<hr>
				<br/>
				<div class="write_info">등록일 : ${vo.writedate } | 조회수 :
					${vo.hit }</div>
			</div>
		</div>
		<div class="write_story">
			<div class="write_main">
				<h5>${vo.content }</h5>
			</div>
			<br/><br/>
			<c:if test="${vo.photo!=null}">
				<img src="upload/noticefile/${vo.photo }" id="ii"/><br/>
				<a id="ff" href="upload/noticefile/${vo.photo }" download><img src="imgs/disk.png"/> ${vo.photo }</a>
			</c:if>
		</div>
	</div>
	<div id="buttonMenu">
		<a class="button" href="noticeEdit?n_num=${vo.n_num }">수정</a>
		<a class="button" href="javascript:delCheck()">삭제</a>
		<a class="button" href="#">목록</a>
	</div>
	<!-- 
  			 	<li>사진 : ${vo.photo }</li>
  			 -->
</div>