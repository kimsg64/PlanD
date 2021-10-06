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
	color: #553a31;
	text-align:center;
}

#mainDiv>h1 {
	margin-bottom: 30px;
	text-align:left;
}

#buttonMenu {
	text-align:right;
}

#reslist ul, #reslist li {
	margin: 0;
	padding: 0;
	list-style: none;
}

#reslist {
	width: 100%;
	height: 400px;
}

#boardList>li {
	float: left;
	width: 9%;
	height: 40px;
	line-height: 40px;
	border-bottom: 1px solid #ddd;
}

#boardList>li:nth-child(7n+3) {
	width: 50%;
	text-align:left;
}

#boardList>li:nth-child(7n+1) {
	width: 5%;
}

.wordCut {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

#popup0 {
	color: #ddd;
}

#popup0:hover {
	color: #fde511;
}

#popup1 {
	color: #fde511;
}

.button {
	background-color: #553a31;
	border: none;
	color: white;
	padding: 15px 20px;
	margin: 10px 0px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	border-radius: 12px;
	transition-duration: 0.4s;
	font-size: 13px;
	width: 26px;
}

.button:hover {
	color: #fde511;
}

ul.pagination {
    display: inline-block;
    padding: 0;
    margin: 0;
}

ul.pagination li {display: inline;}

ul.pagination li a {
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    border-radius: 5px;
}

ul.pagination li a.active {
    background-color: #553a31;
    color: #fde511;
    border-radius: 5px;
}

ul.pagination li a:hover:not(.active) {background-color: #eaded9;
</style>

<script>
//전체선택 이거 왜 안되냐......
   $(()=>{
      $('#allChk').on('change',function(){
            $('#boardList input[type=checkbox]').prop('checked',$('#allChk').prop('checked'));
      }); 
   });
</script>

<div id="whitetop"></div>

<div id="mainDiv">
	<h1>공지사항 관리</h1>

	<div id="reslist">
		<ul id="boardList">
			<li><input type="checkbox" id="allChk"></li>
			<li>No.</li>
			<li class="wordCut">제목</li>
			<li>작성일</li>
			<li>조회수</li>
			<li>첨부파일</li>
			<li>팝업</li>

			<c:forEach var="vo" items="${list}">
				<li><input type="checkbox" name="chk" value="${vo.n_num}" /></li>
				<li>${vo.n_num }</li>
				<li class="wordCut"><a href="list.jsp?num=1">${vo.title}</a></li>
				<li>${vo.writedate }</li>
				<li>${vo.hit }</li>
				<li><c:if test="${vo.photo==null}">
						<img src="imgs/disk0.png" />
					</c:if> <c:if test="${vo.photo!=null}">
						<!-- 첨부파일 다운받는 링크 연결하기 -->
						<a href="#"><img src="imgs/disk.png" /></a>
					</c:if></li>
				<li><c:if test="${vo.pop==1}">
						<a href="#" id="popup1">on</a>
					</c:if> <c:if test="${vo.pop==0}">
						<a href="#" id="popup0">off</a>
					</c:if></li>
			</c:forEach>
		</ul>
	</div>

<div id="buttonMenu">
<a class="button" href="#">작성</a>
<a class="button" href="#">삭제</a>
</div>
	
<div id="paging">
	<ul class="pagination">
		<li><a href="#">«</a></li>
		<li><a href="#">1</a></li>
		<li><a href="#">2</a></li>
		<li><a href="#">3</a></li>
		<li><a href="#">4</a></li>
		<li><a href="#">5</a></li>
		<li><a href="#">»</a></li>
	</ul>
</div>
</div>