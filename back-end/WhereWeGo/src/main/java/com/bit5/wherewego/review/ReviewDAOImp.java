package com.bit5.wherewego.review;

import java.util.List;

public interface ReviewDAOImp {
	public List<ReviewVO> reviewAllSelect(int num1, int num2);
	public int totalRecordCount(); //페이징
}
