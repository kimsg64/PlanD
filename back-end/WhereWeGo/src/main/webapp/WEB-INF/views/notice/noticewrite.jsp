<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="ckeditor/ckeditor.js"></script>
<script type="text/javaScript" language="javascript"></script>
<script>
	$(document).ready(function(){
		CKEDITOR.replace('content');
		$(function(){
			
			$('input[type=button]').click(function(){
				console.log(CKEDITOR.instances.content.getData());
		});
	});		
});
	
</script>
<style>
	.container{
		width:70%;
		margin:0px auto;
	}
	.container>h1{
		margin-bottom: 30px;
		text-align: left;
	}
	.ff{
	float:right;
	}
</style>

<div class="container">
<h1>공지사항 등록</h1>
<form method="post" action="/noticeWriteOk">
	제목 : <input type="text" name="title"/><br/>
	글내용 : <textarea name="content" id="content"></textarea><br/>
	첨부파일 : <input type="text" name="photo"/>
	<div class="ff"><input type="submit" value="글등록"/></div>
</form>
</div>