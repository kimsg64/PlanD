<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<style>

#buttonMenu {
	float:right;
}

#frame { 
	margin : 0 38.5%;
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

	.review_item {
		
		width: 440px;
		height: 560px;
		margin: 0 calc(var(--margin-default) / 1.4);
		padding: var(--padding-default);
		border-radius: 8px;
		border: 2px solid var(--color-font);
		box-shadow: 0px 2px 4px 2px grey;
	}
	
	.image_box {
		width: 400px;
		height: 240px;
		margin: calc(var(--margin-default) / 2) 0;
		overflow: hidden;
		background-color: var(--color-brown);
	}
	
	.image_box > img {
		width: 100%;
	}
	
	.text_box {
		width: 100%;
		height: 112px;
		margin-top: calc(var(--margin-default) / 2);
		padding: var(--padding-default);
		background-color: var(--color-light-bg);
		box-shadow: 0px 2px 4px 2px grey;
		border-radius: 8px;
		font-size: var(--font-size-normal);
	}
	
	.text_box > p {
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 3;
	    overflow: hidden;
	    white-space: pre-wrap;
	    text-overflow: ellipsis;
	}
	
	.profile_box {
		width: 400px;
		height: 100px;
		display: flex;
		align-items: center;
	}
	
	.icon {
		width: 60px;
		height: 60px;
		margin: calc(var(--margin-default) / 2) calc(var(--margin-default) / 4);
		overflow: hidden;
		border-radius: 50%;
		background-color: var(--color-bg);
	}
	
	.icon > img {
		width: 100%;
	}
	
	.user_info {
		width: calc(100% - 60px);
	}
	
	.name_and_start {
		display: flex;
	}
	
	.user_name {
		width: 48%;
		min-width: 120px;
		font-size: var(--font-size-large);
	}
	
	.user_history {
		font-size: var(--font-size-normal);
	}
	
	.star_box {
		width: 52%;
		min-width: 168px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	
	.star_box > i {
	    padding-bottom: 4px;
	    font-size: var(--font-size-normal);
	    color: var(--color-yellow);	
	}
	
	.score {
		font-size: var(--font-size-normal);
		margin: 0 calc(var(--margin-default) / 2);	
	}
	
	#titlediv {font-weight:bold; font-size:1.1em;}
</style>

<h1>후기 작성</h1>
<div id="frame">
<form method="post" action="#">
  <div class="review_item">
    <div id="titlediv" input="text" name="title" placeholder="코스명을 입력하세요."></div><br/>
    <div class="image_box">
      <img
        src="/imgs/icecream.jpg"
        alt="cafe_review"
      />
    </div>
    <div class="text_box">
      <textarea placeholder="내용을 입력하세요."></textarea>
    </div>
    <div class="profile_box">
      <div class="icon">
        <img
          src="/imgs/icecream.jpg"
          alt="user_icon"
        />
      </div>
      <div class="user_info">
        <div class="name_and_start">
          <div class="user_name">${vo.userid }</div>
          <div class="star_box">
          	<div class="score">${vo.score }</div>
		      <i class="far fa-star"></i>
		      <i class="fas fa-star"></i>
		      <i class="fas fa-star"></i>
		      <i class="fas fa-star"></i>
		      <i class="fas fa-star"></i>
          </div>
        </div>
        <div class="user_history">${vo.resdate } 방문<br/></div>
      </div>
    </div>
  </div>
</form>
</div>

<div id="buttonMenu">
				<a class="button" href="/wherewego/noticeList">목록</a>
				<button type="submit" class="button">작성</button>
			</div>