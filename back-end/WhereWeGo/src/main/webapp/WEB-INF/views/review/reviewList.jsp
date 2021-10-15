<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<style>
	#top{display: flex; margin-top:80px; margin-left:50px;}
	select{height: 30px;}
	#search{margin-left:810px;}
	img{margin-left:50px; padding-top:6%; padding-bottom:6%;}

#buttonMenu {
	float:right;
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
<<<<<<< Updated upstream
</head>
<body>
<div id="top">
	<div><input type="checkbox" name="selectall" value="전체선택">전체선택</div>
	<form>
		<select name="search" id="search">
			<option value="all">전체</option>
			<option value="courseNo">코스번호</option>
			<option value="id">아이디</option>
			<option value="content">내용</option>
		</select>
	</form>
		<input type="text" placeholder="검색어 입력">
		<button>검색</button>
</div>
<div>
	<img src="../img/review.png" width="300px"/>
</div>                        
=======

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
<script>
//체크 설정
$(document).ready(function(){
    $("#button").click(function(){
        if($("checkbox").is("checked")){
            $()
        }else{
            alert("체크박스 체크 해제!");
        }
    });
});

</script>
<div id="whitetop"></div>



<div id="mainDiv">
	<h1>리뷰 관리</h1>

<div id="search">	
	<input type="text" placeholder="검색어 입력"><button>검색</button>
</div>		

	<div id="list">
		<ul id="boardList">
			<li><input type="checkbox" id="allChk"></li>
			<li>No.</li>
			<li class="wordCut">코스명</li>
			<li>아이디</li>
			<li>점수</li>
			<li>작성일</li>
			<li>공개여부</li>

			<c:forEach var="vo" items="${list}">
				<li><input type="checkbox" name="chk" value="${vo.r_num}" /></li>
				<li>${vo.r_num}</li>
				<li class="wordCut"><a
					href="/wherewego/courseView?no=${vo.r_num}&nowPage=${pVo.nowPage}">${vo.name}</a></li>
				<li>${vo.userid }</li>
				<li>${vo.score }</li>
				<li>${vo.writedate }</li>
				<li>${vo.grade }</li>
			</c:forEach>
		</ul>
	</div>
<!--  >>>>>>> Stashed changes-->
	
	<div id="bottomdiv">
		
		<div id="buttonMenu">
			<a class="button" href="#">공개</a> <a class="button" href="#">비공개</a>
		</div>
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
</body>
</html>