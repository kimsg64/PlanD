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

#searchFrm{margin-left:1080px; margin-bottom:30px; margin-top:20px;}

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
<div>
	<img src="imgs/banner/course.jpg"/>
</div>
<div>
<form method="get" id="searchFrm" action="/wherewego/courseList">
	<select name="searchKey">
		<option value="name">코스명</option>
		<option value="userid">작성자</option>
	</select>
	<input type="text" name="searchWord" id="searchWord"/><input type="submit" value="Search"/>
</form>
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
			<a class="button" href="#">승인</a> <a class="button" href="#">미승인</a>
		</div>
	</div>

	<!-- 페이징 -->
	<div id="paging">
		<!-- 이전 페이지는 현재 페이지가 1페이지보다 클 때만 표시한다. -->
		<c:if test="${pVo.nowPage>1}">
			<li class="page-item"><a href="/wherewego/courseList?nowPage=${pVo.nowPage-1}<c:if test='${pVo.searchWord!=null && pVo.searchKey!=null}'>&searchKey=${pVo.searchKey }&searchWord=${pVo.searchWord }</c:if>" class="page-link">«</a></li>
		</c:if>
		<c:if test="${pVo.nowPage==1}">
			<li class="page-item"><a href="#" class="page-link">«</a></li>
		</c:if>
		<!-- 시작 페이지부터 5개의 페이지를 출력한다. -->
		<!-- 6,7,8,9,10 -->
		<c:forEach var="i" begin="${pVo.startPage }" end="${pVo.startPage+pVo.onePageNumberCount-1 }">
			<!-- 출력할 페이지 번호가 총 페이지 수보다 작을 때만 출력한다. -->
			<c:if test="${i<=pVo.totalPage }">
				<c:if test="${i==pVo.nowPage }">
					<li class='page-item active'>
				</c:if>
				<c:if test="${i!=pVo.nowPage }">
					<li class='page-item'>
				</c:if>	
				<a href="/wherewego/courseList?nowPage=${i }<c:if test='${pVo.searchWord!=null && pVo.searchKey!=null}'>&searchKey=${pVo.searchKey }&searchWord=${pVo.searchWord }</c:if>" class="page-link">${i }</a></li>
			</c:if>
		</c:forEach>
		
		<!-- 다음 페이지는 현재 페이지가 총 페이지 수 보다 작으면 다음 페이지가 있다. -->
		<c:if test="${pVo.nowPage<pVo.totalPage }">
			<li class="page-item"><a href="/wherewego/courseList?nowPage=${pVo.nowPage+1 }<c:if test='${pVo.searchWord!=null && pVo.searchKey!=null}'>&searchKey=${pVo.searchKey }&searchWord=${pVo.searchWord }</c:if>" class="page-link">»</a></li>
		</c:if>	
	</ul>
</div>
<!-- 검색 -->
