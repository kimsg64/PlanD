<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<style>
#whitetop {
	width: 100%;
	height: 80px;
	/*background-color:red;*/
}

#mainDiv {
	/*background-color:pink;*/
	width: 72%;
	margin: 0 auto;
	color: #553a31;
}


#mainDiv>h1 {
	margin-bottom:30px;
}

#list ul, #list li {
	margin: 0;
	padding: 0;
	list-style: none;
}

#list {
	width: 100%;
	height: 400px;
	margin: 0 auto;
}

#boardList>li {
	float: left;
	width: 10%;
	height: 40px;
	line-height: 40px;
	border-bottom: 1px solid #ddd;
}

#boardList>li:nth-child(6n+3) {
	width: 50%;
}

.wordCut {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

}
</style>

<script>
   $(()=>{
	   //전체선택
      $('#allChk').on('change',function(){
    	  $('#boardList input[type=checkbox]').prop('checked',$('#allChk').prop('checked'));
      
      }); 
      
   });
</script>

<div id="whitetop"></div>

<div id="mainDiv">
	<h1>예약 관리</h1>

	<div id="list">	
		<ul id="boardList">
			<li><input type="checkbox" id="allChk"></li>
			<li>No.</li>
			<li class="wordCut">코스명</li>
			<li>예약자</li>
			<li>날짜</li>
			<li>시간대</li>
		</ul>
		
		<ul id="boardList">
			<li><input type="checkbox" id="allChk"></li>
			<li>1</li>
			<li class="wordCut">덕수궁 돌담길 어때</li>
			<li>user01</li>
			<li>03/21</li>
			<li>12:00</li>
		</ul>
		
		<ul id="boardList">
			<li><input type="checkbox" id="allChk"></li>
			<li>2</li>
			<li class="wordCut">덕수궁 돌담길 어때</li>
			<li>user01</li>
			<li>03/21</li>
			<li>12:00</li>
		</ul>
		
		<ul id="boardList">
			<li><input type="checkbox" id="allChk"></li>
			<li>3</li>
			<li class="wordCut">덕수궁 돌담길 어때</li>
			<li>user01</li>
			<li>03/21</li>
			<li>12:00</li>
		</ul>
		
		<ul id="boardList">
			<li><input type="checkbox" id="allChk"></li>
			<li>4</li>
			<li class="wordCut">덕수궁 돌담길 어때</li>
			<li>user01</li>
			<li>03/21</li>
			<li>12:00</li>
		</ul>
		
		<ul id="boardList">
			<li><input type="checkbox" id="allChk"></li>
			<li>5</li>
			<li class="wordCut">덕수궁 돌담길 어때</li>
			<li>user01</li>
			<li>03/21</li>
			<li>12:00</li>
		</ul>
		
		<ul id="boardList">
			<li><input type="checkbox" id="allChk"></li>
			<li>6</li>
			<li class="wordCut">덕수궁 돌담길 어때</li>
			<li>user01</li>
			<li>03/21</li>
			<li>12:00</li>
		</ul>
		
		<ul id="boardList">
			<li><input type="checkbox" id="allChk"></li>
			<li>7</li>
			<li class="wordCut">덕수궁 돌담길 어때</li>
			<li>user01</li>
			<li>03/21</li>
			<li>12:00</li>
		</ul>
		
		<ul id="boardList">
			<li><input type="checkbox" id="allChk"></li>
			<li>8</li>
			<li class="wordCut">덕수궁 돌담길 어때</li>
			<li>user01</li>
			<li>03/21</li>
			<li>12:00</li>
		</ul>
		
		<ul id="boardList">
			<li><input type="checkbox" id="allChk"></li>
			<li>9</li>
			<li class="wordCut">덕수궁 돌담길 어때</li>
			<li>user01</li>
			<li>03/21</li>
			<li>12:00</li>
		</ul>
		
		<ul id="boardList">
			<li><input type="checkbox" id="allChk"></li>
			<li>10</li>
			<li class="wordCut">덕수궁 돌담길 어때</li>
			<li>user01</li>
			<li>03/21</li>
			<li>12:00</li>
		</ul>
		
		
	</div>
</div>