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
	width: 44%;
	margin: 3%;
	order : 1px solid #efcac3;
	background-color:#fffefd;
	border-radius: 12px;
	padding : 15px;
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

#bname {font-size:1.3em; font-weight:bold; margin-bottom:10px 0px;}
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
	<h1>광고 관리</h1>
	<img src="imgs/banner/ad.jpg" id="banner" />
	
	<!-- 검색 -->
	<div id="searchDiv">
		<div>
			<form method="get" id="searchFrm" name="searchFrm" action="/wherewego/advermanage">
				<select name="searchKey">
					<option value="name">상호명</option>
					<option value="info">내용</option>
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
                  <input type="checkbox" name="chk" value="${vo.adnum }" />&nbsp;&nbsp;No.${vo.adnum }
               </div>
               <div class="image">
                  <a
                     href="/wherewego/adView?adnum=${vo.adnum}&nowPage=${pVo.nowPage}">
                     <img src="upload/adimg/${vo.photo}" />
                  </a>
               </div>
               <div id="bname"> ${vo.name }</div>
               <div>광고 기간 : ${vo.startdate } ~ ${vo.enddate }</div>
               <div>승인 여부 : ${vo.grade } 
               	<c:if test="${vo.grade=='미결제' }">
               	( <a href="#">결제하기</a> )
               	</c:if>
               </div>
               <div>결제 여부 : ${vo.payment }</div>
               <div>가격 : <b>${vo.price }000원</b></div>
            </li>
         </c:forEach>
      </ul>
   </div>

	<!-- 버튼 -->
	<div id="bottomdiv">
		<div id="count">
			<div>총 레코드 수 : ${pVo.totalRecord }</div>
			<div>현재페이지/총페이지수 : ${pVo.nowPage}/${pVo.totalPage}</div>
		</div>
		<div id="buttonMenu">
			<c:if test="${logid=='admin'}">
				<a class="button" href="#">승인</a> <a class="button" href="#">미승인</a>
			</c:if>
			<c:if test="${logid!='admin'}">
				<a class="button" href="#">삭제</a>
			</c:if>
		</div>
	</div>

	<!-- 페이징 -->
	<div id="paging">
		<ul class="pagination">
			<!-- 이전페이지 -->
			<c:if test="${pVo.nowPage>1}">
				<li class='page-item'><a
					href="/wherewego/advermanage?nowPage=${pVo.nowPage-1}"
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
							href="/wherewego/advermanage?nowPage=${i}">${i}</a>
					</c:if>

					<c:if test="${i!=pVo.nowPage}">
						<li><a href="/wherewego/advermanage?nowPage=${i}">${i}</a>
					</c:if>
				</c:if>
			</c:forEach>

			<!-- 다음페이지-->
			<c:if test="${pVo.nowPage<pVo.totalPage}">
				<li class='page-item'><a
					href="/wherewego/advermanage?nowPage=${pVo.nowPage+1}">»</a></li>
			</c:if>

			<c:if test="${pVo.nowPage==pVo.totalPage}">
				<li class='page-item'><a href='#'>»</a></li>
			</c:if>
		</ul>
	</div>
</div>

