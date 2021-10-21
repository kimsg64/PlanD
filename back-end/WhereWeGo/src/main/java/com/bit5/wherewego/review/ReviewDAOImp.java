package com.bit5.wherewego.review;

import java.util.List;

public interface ReviewDAOImp {
	public List<ReviewVO> reviewAllSelect(int num1, int num2);
	public int totalRecordCount(); //페이징
	public List<ReviewVO> selectBestReviews();
	public int newReviewCount();
	public List<ReviewVO> reviewSearchSelect(int num1, int num2, String sKey, String sWord);
	public List<ReviewVO> myReviewSelect (String userid);
	public ReviewVO reviewView (int r_num);

	public void reViewgradech(ReviewVO vo);

	public int totalSearchname(String searchWord);
	public int totalSearchid(String searchWord);
	public Object allSelectSearchname(int num1, int num2, String searchWord);
	public Object allSelectSearchid(int num1, int num2, String searchWord);

}
