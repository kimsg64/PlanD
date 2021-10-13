<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<script>
        function showPopup(){
            window.open("popUp.html","미승인 사유","width=317, height=100, top=10, left=10");
        }
        
    </script>
<style>
	#whitetop {
	width: 100%;
	height: 80px;
	}
	.container{
		width:70%;
		margin:0px auto;
		}
	img{
		margin-top:1px;
		width: 100%;
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
	#bottomdiv {
		width:100%;
		height: 50px;
		margin : 10px 0px;
	}
	#buttonMenu {
		float:right;
	}
	.admenu{	
		 margin:0 auto; padding:10px;
		 height:500px;
		 display: flex;
		 flex-wrap: wrap;
	}
	.adlist {
		width: 200px;
		margin:0 30px 0 0;
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
<div id="whitetop"></div>
<div class="container">
<h1>광고 관리</h1> <!-- 페이징처리시 높이를 주고 하세요. -->
   	  <ul class="admenu">
         <c:forEach var="vo" items="${list}">
         <li class="adlist">
	         <div><input type="checkbox" name="chk" value=""/></div>
	         <div class="image"><img src=${vo.photo} /> </div>
	         <div>상호명 : ${vo.name }</div>
	         <div>기간 : ${vo.startdate }, ~${vo.enddate }</div>
         </li>
         </c:forEach>
      </ul>


   <div id="bottomdiv">
   	<div id="count">
		<div>총 레코드 수 : ${pVo.totalRecord }</div>
		<div>현재페이지/총페이지수 : ${pVo.nowPage}/${pVo.totalPage}</div>
	</div>
    <div id="buttonMenu">
         <a class="button" href="#">승인</a> <a class="button" href="#">미승인</a>
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
</div>
