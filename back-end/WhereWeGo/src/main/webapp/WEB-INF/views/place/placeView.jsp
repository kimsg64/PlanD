<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<style>
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
#banner {width:100%;}
</style>

<div id="mainDiv">
	<h1>장소 상세보기</h1>
	<img src="imgs/banner/place.jpg" id="banner"/>
	
	<div id="viewDiv">
		${vo.pcode }
		${vo.datesort }
		${vo.name }
		${vo.addr }
		${vo.tel }
		${vo.time }
		${vo.info }
		${vo.link }
	</div>
</div>