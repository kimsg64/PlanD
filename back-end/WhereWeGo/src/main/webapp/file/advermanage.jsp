<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
<script>
        function showPopup(){
            window.open("popUp.html","미승인 사유","width=317, height=100, top=10, left=10");
        }
        
    </script>
<style>	
	body{
		width:1200px;
		margin:0 auto;
		}
	list{width:1200px;
		margin-top:60px;
		float:left;
		}
	img{
		margin-top:1px;
		width:50%;
		}
	#button{
		margin-left:1000px;
		}
	ul{
		float:left; margin:0 auto; padding:10px;  text-align: center;
	}
	li{
		list-style-type:none; 
	}
	#paging{
        width:100%;
        margin-top:15px;
        justify-content: center;        
       }
</style>
</head>
<body>
<h1>광고 관리</h1>
<div id="list">
	<ul>
		<li><input type="checkbox"/><li>
		<li><img src="../img/icecream.jpg"/></li>
		<li>상호명 :</li>
		<li>기간 :</li>
	</ul>
	<ul>
		<li><input type="checkbox"/></li>
		<li><img src="../img/icecream.jpg"/></li>
		<li>상호명 :</li>
		<li>기간 :</li>
	</ul>
	<ul>
		<li><input type="checkbox"/></li>
		<li><img src="../img/icecream.jpg"/></li>
		<li>상호명 :</li>
		<li>기간 :</li>
	</ul>
	<ul>
		<li><input type="checkbox"/></li>
		<li><img src="../img/icecream.jpg"/></li>
		<li>상호명 :</li>
		<li>기간 :</li>
	</ul>
</div>
<div>
   <ul class="pagination pagination-lg" id="paging" >
      <li class="page-item"><a href="#" class="page-link">prev</a></li>
      <li class="page-item"><a href="#" class="page-link">1</a></li>
      <li class="page-item"><a href="#" class="page-link">2</a></li>
      <li class="page-item"><a href="#" class="page-link">3</a></li>
      <li class="page-item"><a href="#" class="page-link">4</a></li>
      <li class="page-item"><a href="#" class="page-link">5</a></li>
      <li class="page-item"><a href="#" class="page-link">next</a></li>
   </ul>
</div>
<div id="button">
	<button id="button1">승인</button>
	<button id="button2" value="미승인" onclick="showPopup();">미승인</button>
</div>
</body>
</html>