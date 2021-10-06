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
	text-align:center;
}

#mainDiv>h1 {
	margin-bottom: 30px;
}

#mainDiv button {
	float:right;
	margin : 20px;
}

#reslist ul, #reslist li {
	margin: 0;
	padding: 0;
	list-style: none;
}

#reslist {
	width: 100%;
	height: 400px;
}

#boardList>li {
	float: left;
	width: 12.5%;
	height: 40px;
	line-height: 40px;
	border-bottom: 1px solid #ddd;
}

#boardList>li:nth-child(6n+3) {
	width: 45%;
}

#boardList>li:nth-child(6n+1) {
	width: 5%;
}

.wordCut {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
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

	<div id="reslist">
		<ul id="boardList">
			<li><input type="checkbox" id="allChk"></li>
			<li>No.</li>
			<li class="wordCut">코스명</li>
			<li>예약자</li>
			<li>날짜</li>
			<li>시간대</li>

			<c:forEach var="vo" items="${list}">
				<li><input type="checkbox" name="chk" value="${vo.r_num}" /></li>
				<li>${vo.r_num }</li>
				<li class="wordCut"><a href="list.jsp?num=1">${vo.name}</a></li>
				<li>${vo.userid }</li>
				<li>${vo.resdate }</li>
				<li>${vo.time }</li>
			</c:forEach>

			<li><input type="checkbox"></li>
			<li>1</li>
			<li class="wordCut">덕수궁 돌담길 어때</li>
			<li>user01</li>
			<li>03/21</li>
			<li>12:00</li>

			<li><input type="checkbox"></li>
			<li>2</li>
			<li class="wordCut">덕수궁 돌담길 어때</li>
			<li>user01</li>
			<li>03/21</li>
			<li>12:00</li>

			<li><input type="checkbox"></li>
			<li>3</li>
			<li class="wordCut">덕수궁 돌담길 어때</li>
			<li>user01</li>
			<li>03/21</li>
			<li>12:00</li>

			<li><input type="checkbox"></li>
			<li>4</li>
			<li class="wordCut">덕수궁 돌담길 어때</li>
			<li>user01</li>
			<li>03/21</li>
			<li>12:00</li>

			<li><input type="checkbox"></li>
			<li>5</li>
			<li class="wordCut">덕수궁 돌담길 어때</li>
			<li>user01</li>
			<li>03/21</li>
			<li>12:00</li>

			<li><input type="checkbox"></li>
			<li>6</li>
			<li class="wordCut">덕수궁 돌담길 어때</li>
			<li>user01</li>
			<li>03/21</li>
			<li>12:00</li>

			<li><input type="checkbox"></li>
			<li>7</li>
			<li class="wordCut">덕수궁 돌담길 어때</li>
			<li>user01</li>
			<li>03/21</li>
			<li>12:00</li>

			<li><input type="checkbox"></li>
			<li>8</li>
			<li class="wordCut">덕수궁 돌담길 어때</li>
			<li>user01</li>
			<li>03/21</li>
			<li>12:00</li>

			<li><input type="checkbox"></li>
			<li>9</li>
			<li class="wordCut">덕수궁 돌담길 어때</li>
			<li>user01</li>
			<li>03/21</li>
			<li>12:00</li>

			<li><input type="checkbox"></li>
			<li>10</li>
			<li class="wordCut">덕수궁 돌담길 어때</li>
			<li>user01</li>
			<li>03/21</li>
			<li>12:00</li>
	</div>
	
	<button type="button" class="btn btn-outline-warning">취소</button>

</div>