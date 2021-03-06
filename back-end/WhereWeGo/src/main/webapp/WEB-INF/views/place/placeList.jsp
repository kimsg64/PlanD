<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<style>
#search {
	margin-left: 1150px;
	margin-bottom: 30px;
	margin-top: 20px;
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

#banner {
	width: 100%;
}

#searchDiv {
	width: 100%;
	text-align: right;
	margin: 20px 0px;
}

select, option, input {
	font-family: "TmoneyRoundWindRegular";
}

#bottomdiv {
	width: 100%;
	height: 50px;
	margin: 10px 0px;
}

#count {
	font-size: 0.7em;
	color: #f5ebe3;
	text-align: left;
	float: left;
}

#count:hover {
	color: #efcac3;
}

#buttonMenu {
	float: right;
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

#adminboardList>li {
	float: left;
	width: 13.75%;
	height: 40px;
	line-height: 40px;
	border-bottom: 1px solid #f5ebe3;
}

#adminboardList>li:nth-child(6n+3) {
	width: 40%;
	text-align: left;
}

#adminboardList>li:nth-child(3) {
	width: 40%;
	text-align: center;
}

#adminboardList>li:nth-child(6n+1) {
	width: 5%;
}

#userboardList>li {
	float: left;
	width: 11%;
	height: 40px;
	line-height: 40px;
	border-bottom: 1px solid #f5ebe3;
}

#userboardList>li:nth-child(6n+4) {
	width: 50%;
	text-align: left;
}

#userboardList>li:nth-child(4) {
	width: 50%;
	text-align: center;
}

#userboardList>li:nth-child(6n+1) {
	width: 10%;
}

.wordCut {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.wordCut a:hover {
	color: #fd7d73;
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

#banner {
	width: 100%;
}

.wordCut {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.wordCut a:hover {
	color: #fd7d73;
}
</style>

<script>
   $(()=>{
	   //????????????
      $('#allChk').on('change',function(){
    	  $('#adminboardList input[type=checkbox]').prop('checked',$('#allChk').prop('checked'));
    	  $('#userboardList input[type=checkbox]').prop('checked',$('#allChk').prop('checked'));
      });
   });
</script>

<div id="mainDiv">
	<h1>?????? ??????</h1>
	<img src="imgs/banner/place.jpg" id="banner" />

	<!-- ?????? -->
	<div id="searchDiv">
		<div>
			<form method="get" id="searchFrm" name="searchFrm"
				action="/wherewego/placeList">
				<select name="searchKey">
					<option value="name">?????????</option>
					<option value="addr">??????</option>
				</select> <input type="text" name="searchWord" id="searchWord"
					placeholder="????????? ??????" required /> <input type="submit" value="??????"
					class="button" />
			</form>
		</div>
	</div>

	<div id="list">

		<!-- ????????? ?????? -->
		<c:if test="${logid=='admin'}">
			<ul id="adminboardList">
				<li><input type="checkbox" id="allChk"></li>
				<li><b>No.</b></li>
				<li class="wordCut"><b>?????????</b></li>
				<li><b>??????</b></li>
				<li><b>?????? ??????</b></li>
				<li><b>??????</b></li>

				<c:forEach var="vo" items="${list }">
					<li><input type="checkbox" name="chk" value="${vo.pcode }" /></li>
					<li>${vo.pcode }</li>
					<li class="wordCut"><a href="/wherewego/placeView?pcode=${vo.pcode }&nowPage=${pVo.nowPage}">${vo.name }</a></li>
					<li>${vo.grade }</li>
					<li>${vo.datesort }</li>
					<li><c:if test="${vo.link==null }">
							<img src="imgs/link.png" />
						</c:if> <c:if test="${vo.link!=null }">
							<a href="${vo.link }" target="_blank"><img
								src="imgs/linkg.png" /></a>
						</c:if></li>
				</c:forEach>
			</ul>
		</c:if>
	</div>

	<!-- ?????? -->
	<c:if test="${logid=='admin'}">
		<div id="bottomdiv">
			<div id="count">
				<div>??? ????????? ??? : ${pVo.totalRecord }</div>
				<div>???????????????/??????????????? : ${pVo.nowPage}/${pVo.totalPage}</div>
			</div>

			<div id="buttonMenu">
				<a class="button" href="#">??????</a> <a class="button" href="#">??????</a>
			</div>
		</div>
	</c:if>

	<!-- ????????? -->
	<div id="paging">
		<ul class="pagination">
			<!-- ??????????????? -->
			<c:if test="${pVo.nowPage>1}">
				<li class='page-item'><a
					href="/wherewego/placeList?nowPage=${pVo.nowPage-1}"
					class='page-link'>??</a></li>
			</c:if>

			<c:if test="${pVo.nowPage==1}">
				<li class='page-item'><a href='#'>??</a></li>
			</c:if>

			<!-- ????????????????????? 5?????? ????????? ?????? -->
			<c:forEach var="i" begin="${pVo.startPage}"
				end="${pVo.startPage+pVo.onePageNumberCount-1}">

				<c:if test="${i<=pVo.totalPage}">

					<c:if test="${i==pVo.nowPage}">
						<li><a class="active"
							href="/wherewego/placeList?nowPage=${i}">${i}</a>
					</c:if>

					<c:if test="${i!=pVo.nowPage}">
						<li><a href="/wherewego/placeList?nowPage=${i}">${i}</a>
					</c:if>
				</c:if>
			</c:forEach>

			<!-- ???????????????-->
			<c:if test="${pVo.nowPage<pVo.totalPage}">
				<li class='page-item'><a
					href="/wherewego/placeList?nowPage=${pVo.nowPage+1}">??</a></li>
			</c:if>

			<c:if test="${pVo.nowPage==pVo.totalPage}">
				<li class='page-item'><a href='#'>??</a></li>
			</c:if>
		</ul>
	</div>
</div>