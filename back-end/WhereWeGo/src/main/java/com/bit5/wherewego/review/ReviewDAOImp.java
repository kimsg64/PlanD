package com.bit5.wherewego.review;

import java.util.List;

public interface ReviewDAOImp {
	public List<ReviewVO> reviewAllSelect(int num1, int num2);
	public int totalRecordCount(); //페이징
	public List<ReviewVO> selectBestReviews();
	public int newReviewCount();
	public List<ReviewVO> reviewSearchSelect(int num1, int num2, String sKey, String sWord);
	public List<ReviewVO> myReviewSelect (String userid);
	
}
