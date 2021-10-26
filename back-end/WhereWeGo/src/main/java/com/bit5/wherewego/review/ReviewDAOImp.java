package com.bit5.wherewego.review;

import java.util.List;

public interface ReviewDAOImp {
	public List<ReviewVO> reviewAllSelect(int num1, int num2, String string, String string2);
	public List<ReviewVO> selectBestReviews();
	public int newReviewCount();
	public List<ReviewVO> reviewSearchSelect(int num1, int num2, String sKey, String sWord);
	public List<ReviewVO> myReviewSelect (String userid);
	public ReviewVO reviewView (int r_num);
	public int totalReviewCount(String searchKey, String searchWord); //페이징
	public int reViewgradech(int num, String st);//공개 비공개
	public int reviewWriteOk(ReviewVO vo); // 리뷰 작성 확인용
	public int reviewEditOk(ReviewVO vo); //리뷰 수정 확인용
}
