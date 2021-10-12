package com.bit5.wherewego.course;

import java.util.List;

public interface CourseDAOImp {
	public List<CourseVO> courseAllSelect(int num1, int num2);
	public int totalRecordCount(); //페이징
}
