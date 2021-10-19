<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>

	.review_item {
		max-width: 440px;
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
	
</style>
</head>
<body>

  <div class="review_item">
    <div>코스명</div>
    <div class="image_box">
      <img
        src=`${process.env.PUBLIC_URL}/images/reviews/review_sample.jpg`
        alt="cafe_review"
      />
    </div>
    <div class="text_box">
      
        <p>제가 LA에 있을때는 말이죠 정말 제가 꿈에 무대인 메이저리그로 진출해서 가는 식당마다 싸인해달라 기자들은 항상 붙어다니며 취재하고 제가 그 머~ 어~ 대통령이 된 기분이었어요</p>
      
    </div>
    <div class="profile_box">
      <div class="icon">
        <img
          src={`${process.env.PUBLIC_URL}/images/users/user1.png`}
          alt="user_icon"
        />
      </div>
      <div class="user_info">
        <div class="name_and_start">
          <div class="user_name">찬호팍</div>
          <div class="star_box">
          	<div class="score">10.0</div>
		      <i class="far fa-star"></i>
		      <i class="fas fa-star"></i>
		      <i class="fas fa-star"></i>
		      <i class="fas fa-star"></i>
		      <i class="fas fa-star"></i>
          </div>
        </div>
        <div class="user_history">코스A, 1992.09.12 방문</div>
      </div>
    </div>
  </div>

</body>
</html>