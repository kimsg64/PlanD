package com.bit5.wherewego.review;

import java.util.List;

public interface ReviewDAOImp {
	public List<ReviewVO> reviewAllSelect(int num1, int num2, String string, String string2);
	public List<ReviewVO> selectBestReviews();
	public int newReviewCount();
	public List<ReviewVO> reviewSearchSelect(int num1, int num2, String sKey, String sWord);
	public List<ReviewVO> myReviewSelect (String userid);
	public ReviewVO reviewView (int r_num);
	public void reViewgradech(ReviewVO vo); //뷰에서 공개/비공개
	public int totalReviewCount(String searchKey, String searchWord); //페이징

}
