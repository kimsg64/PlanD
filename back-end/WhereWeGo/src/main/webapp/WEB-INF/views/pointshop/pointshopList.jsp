<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<style>
.container {
	width: 72%;
	margin: 0 auto;
	color: #00282e;
}

.container>h1 {
	margin-bottom: 30px;
	text-align: left;
}

#banner {width:100%;}

#searchDiv {width:100%; text-align:right; margin:20px 0px;}

select, option, input {font-family: "TmoneyRoundWindRegular";}

img {
	margin-top: 1px;
	width: 100%;
}

#list {
	text-align: center;
	width: 40%;
	height: auto;
}

#list ul, #list li {
	margin-left: 0;
	padding: 0;
	list-style: none;
}

#list div {
	overflow:ellipsis;
}

.allB {
	margin-top: 10px;
}

.admenu {
	margin: 0 auto;
	padding: 10px;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	white-space: nowrap;
	overflow: hidden;
}

.adlist {
	width: 25.33%;
	margin: 4%;
	border : 1px solid #efcac3;
	border-radius: 12px;
	padding : 15px;
	background-color:#fffefd;
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
	width: 80px;
	text-align: center;
}

.button:hover {
	color: #0e595f;
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

#paging {
	text-align: center;
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

#bname {font-size:1.2em; font-weight:bold; margin-bottom:13px 0px;}
</style>
<script>
   $(()=>{
	   //전체선택
      $('#allChk').on('change',function(){
    	  $('.adlist input[type=checkbox]').prop('checked',$('#allChk').prop('checked'));
      
      }); 
   });
</script>

<div class="container">
	<h1>포인트샵 관리</h1>
	<img src="imgs/banner/notice.jpg" id="banner" />
	
	<!-- 검색 -->
	<div id="searchDiv">
		<div>
			<form method="get" id="searchFrm" name="searchFrm" action="/wherewego/pointshopList">
				<select name="searchKey">
					<option value="brand">브랜드</option>
					<option value="name">상품명</option>
				</select>
				<input type="text" name="searchWord" id="searchWord" placeholder="검색어 입력" required/>
				<input type="submit" value="검색" class="button"/>
			</form>
		</div>
	</div>
	
	<div class="allB">
		<input type="checkbox" id="allChk"> <b>전체선택</b>
	</div>
	
   <div class="list">
      <ul class="admenu">
         <c:forEach var="vo" items="${list}">
            <li class="adlist">
               <div>
                  <input type="checkbox" name="chk" value="${vo.p_num }" />&nbsp;&nbsp;${vo.p_num }
               </div>
               <div class="image">
                  <a
                     href="/wherewego/productView?p_num=${vo.p_num}&nowPage=${pVo.nowPage}">
                     <img src="upload/pointshop/${vo.img}" />
                  </a>
               </div>
               <div id="bname">${vo.brand }</div>
               <div>${vo.name }</div>
               <div>${vo.price }원</div>
            </li>
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
		<ul class="pagination">
			<!-- 이전페이지 -->
			<c:if test="${pVo.nowPage>1}">
				<li class='page-item'><a
					href="/wherewego/pointshopList?nowPage=${pVo.nowPage-1}"
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
							href="/wherewego/pointshopList?nowPage=${i}">${i}</a>
					</c:if>

					<c:if test="${i!=pVo.nowPage}">
						<li><a href="/wherewego/pointshopList?nowPage=${i}">${i}</a>
					</c:if>
				</c:if>
			</c:forEach>

			<!-- 다음페이지-->
			<c:if test="${pVo.nowPage<pVo.totalPage}">
				<li class='page-item'><a
					href="/wherewego/pointshopList?nowPage=${pVo.nowPage+1}">»</a></li>
			</c:if>

			<c:if test="${pVo.nowPage==pVo.totalPage}">
				<li class='page-item'><a href='#'>»</a></li>
			</c:if>
		</ul>
	</div>
</div>

