<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<style>
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

#search{margin-left:1150px; margin-bottom:30px; margin-top:20px;}

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

#banner {width:100%;}

#searchDiv {width:100%; text-align:right; margin:20px 0px;}

select, option, input {font-family: "TmoneyRoundWindRegular";}

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
	width: 10%;
	height: 40px;
	line-height: 40px;
	border-bottom: 1px solid #f5ebe3;
}

#boardList>li:nth-child(8n+3) {
	width: 35%;
	text-align: left;
}

#boardList>li:nth-child(3) {
	width: 35%;
	text-align: center;
}

#boardList>li:nth-child(8n+1) {
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
      
//      $('#searchFrm').submit(function(){
//			if($('#searchWord').val()==''){
//				alert('검색어를 입력 후 검색하세요');
//				return false;
//			}
//			return true;
//		});
   });
</script>

<div id="mainDiv">
	<h1>리뷰 관리</h1>
	
	<img src="imgs/banner/review.jpg" id="banner"/>

	<!-- 검색 -->
	<div id="searchDiv">
		<div>
			<form method="get" id="searchFrm" name="searchFrm" action="/wherewego/reviewList">
				<select name="searchKey">
					<option value="name">코스명</option>
					<option value="userid">작성자</option>
				</select>
				<input type="text" name="searchWord" id="searchWord" placeholder="검색어 입력" required/>
				<input type="submit" value="검색" class="button"/>
			</form>
		</div>
	</div>
	
	<div id="list">
		<ul id="boardList">
			<li><input type="checkbox" id="allChk"></li>
			<li><b>No.</b></li>
			<li class="wordCut"><b>코스명</b></li>
			<li><b>방문일</b></li>
			<li><b>작성자</b></li>
			<li><b>점수</b></li>
			<li><b>작성일</b></li>
			<li><b>공개여부</b></li>

			<c:forEach var="vo" items="${list}">
				<li><input type="checkbox" name="chk" value="${vo.r_num}" /></li>
				<li>${vo.r_num }</li>
				<li class="wordCut"><a href="/wherewego/reviewView?r_num=${vo.r_num}&nowPage=${pVo.nowPage}">${vo.name}</a></li>
				<li>${vo.resdate }</li>
				<li>${vo.userid }</li>
				<li>${vo.score }</li>
				<li>${vo.writedate }</li>
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
					href="/wherewego/reviewList?nowPage=${pVo.nowPage-1}"
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
							href="/wherewego/reviewList?nowPage=${i}">${i}</a>
					</c:if>

					<c:if test="${i!=pVo.nowPage}">
						<li><a href="/wherewego/reviewList?nowPage=${i}">${i}</a>
					</c:if>
				</c:if>
			</c:forEach>

			<!-- 다음페이지-->
			<c:if test="${pVo.nowPage<pVo.totalPage}">
				<li class='page-item'><a
					href="/wherewego/reviewList?nowPage=${pVo.nowPage+1}">»</a></li>
			</c:if>
			
			<c:if test="${pVo.nowPage==pVo.totalPage}">
				<li class='page-item'><a href='#'>»</a></li>
			</c:if>
		</ul>
	</div>
</div>