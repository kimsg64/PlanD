<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<style>
#whitetop {
	width: 100%;
	height: 80px;
}

#top {display: flex; margin-top:80px; margin-left:50px;}

#search{margin-left:720px; margin-bottom:30px;}

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

#bottomdiv {
	width:100%;
	height: 50px;
	margin : 10px 0px;
}
#count {
	font-size: 0.7em;
	color: #f5ebe3;
	text-align:left;
	float:left;
}
#count:hover {
	color: #efcac3;
}

#buttonMenu {
	float:right;
}

#list ul, #list li {
	margin: 0;
	padding: 0;
	list-style: none;
}

#list {
	width: 100%;
	height: 450px;
}

#boardList>li {
	float: left;
	width: 12.5%;
	height: 40px;
	line-height: 40px;
	border-bottom: 1px solid #f5ebe3;
}

#boardList>li:nth-child(6n+3) {
	width: 45%;
	text-align: left;
}

#boardList>li:nth-child(3) {
	width: 45%;
	text-align: center;
}

#boardList>li:nth-child(6n+1) {
	width: 5%;
}

.wordCut {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.wordCut a:hover {
	color:#fd7d73;
}

#popup0 {
	color: #f5ebe3;
}

#popup0:hover {
	color: #81bbaf;
}

#popup1 {
	color: #81bbaf;
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

ul.pagination {
	display: inline-block;
	padding: 0;
	margin: 0;
}

ul.pagination li {
	display: inline;
}

ul.pagination li a {
	float: left;
	padding: 8px 16px;
	text-decoration: none;
	border-radius: 5px;
}

ul.pagination li a.active {
	background-color: #fd7d73;
	color: #f5ebe3;
	border-radius: 5px;
}

ul.pagination li a:hover:not(.active) {
	background-color: #f5ebe3;
}
</style>

<script>
//전체선택
   $(()=>{
      $('#allChk').on('change',function(){
            $('#boardList input[type=checkbox]').prop('checked',$('#allChk').prop('checked'));
      });
      
      $('#searchFrm').submit(function(){
			if($('#searchWord').val()==''){
				alert('검색어를 입력 후 검색하세요');
				return false;
			}
			return true;
		});
   });
</script>

<div id="whitetop"></div>



<div id="mainDiv">
	<h1>코스 관리</h1>

<div id="search">	
	<input type="text" placeholder="검색어 입력"><button>검색</button>
</div>		

	<div id="list">
		<ul id="boardList">
			<li><input type="checkbox" id="allChk"></li>
			<li>No.</li>
			<li class="wordCut">코스명</li>
			<li>역이름</li>
			<li>작성자</li>
			<li>승인여부</li>

			<c:forEach var="vo" items="${list}">
				<li><input type="checkbox" name="chk" value="${vo.c_num}" /></li>
				<li>${vo.c_num}</li>
				<li class="wordCut"><a
					href="/wherewego/courseView?no=${vo.c_num}&nowPage=${pVo.nowPage}">${vo.name}</a></li>
				<li>${vo.stname }</li>
				<li>${vo.userid }</li>
				<li>${vo.grade }</li>
			</c:forEach>
		</ul>
	</div>
	
	<div id="bottomdiv">
		<div id="count">
			<div>총 레코드 수 : ${pVo.totalRecord }</div>
			<div>현재페이지/총페이지수 : ${pVo.nowPage}/${pVo.totalPage}</div>
		</div>
		
		<div id="buttonMenu">
			<a class="button" href="#">공개</a> <a class="button" href="#">비공개</a>
		</div>
	</div>

	<!-- 페이징 -->
	<div id="paging">
		<ul class="pagination">
			<!-- 이전페이지 -->
			<c:if test="${pVo.nowPage>1}">
				<li class='page-item'><a
					href="/wherewego/courseList?nowPage=${pVo.nowPage-1}"
					class='page-link'>«</a></li>
			</c:if>

			<c:if test="${pVo.nowPage==1}">
				<li class='page-item'><a href='#'>«</a></li>
			</c:if>

			<!-- 시작페이지부터 5개의 페이지 출력 -->
			<c:forEach var="i" begin="${pVo.startPage}"
				end="${pVo.startPage+pVo.onePageNumberCount-1}">

				<c:if test="${i<=pVo.totalPage}">

					<c:if test="${i==pVo.nowPage}">
						<li><a class="active"
							href="/wherewego/courseList?nowPage=${i}">${i}</a>
					</c:if>

					<c:if test="${i!=pVo.nowPage}">
						<li><a href="/wherewego/courseList?nowPage=${i}">${i}</a>
					</c:if>
				</c:if>
			</c:forEach>

			<!-- 다음페이지-->
			<c:if test="${pVo.nowPage<pVo.totalPage}">
				<li class='page-item'><a
					href="/wherewego/courseList?nowPage=${pVo.nowPage+1}">»</a></li>
			</c:if>
			
			<c:if test="${pVo.nowPage==pVo.totalPage}">
				<li class='page-item'><a href='#'>»</a></li>
			</c:if>
		</ul>
	</div>
</div>