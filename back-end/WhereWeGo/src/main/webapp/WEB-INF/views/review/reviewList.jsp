<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>

<style>
	#top{display: flex; margin-top:80px; margin-left:50px;}
	select{height: 30px;}
	#search{margin-left:810px;}
	#bottom{display: flex;}
	#paging{margin-left:440px;}
	#button{margin-left:1160px;}
	#button1{color:white; background-color:pink; border-radius:5px; border:1px solid white;}
	#button2{color:white; background-color:brown; border-radius:5px; border:1px solid white;}
	img{margin-left:50px; padding-top:6%; padding-bottom:6%;}
</style>
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
<div>
		<div id="button">
		<button id="button1">공개</button>
		<button id="button2">취소</button>
	</div>
</div>
<div>
	<ul class="pagination pagination-lg" id="paging">
		<li class="page-item"><a href="#" class="page-link"><</a></li>
		<li class="page-item"><a href="#" class="page-link">1</a></li>
		<li class="page-item"><a href="#" class="page-link">2</a></li>
		<li class="page-item"><a href="#" class="page-link">3</a></li>
		<li class="page-item"><a href="#" class="page-link">4</a></li>
		<li class="page-item"><a href="#" class="page-link">5</a></li>
		<li class="page-item"><a href="#" class="page-link">></a></li>
	</ul>
</div>
</body>
</html>