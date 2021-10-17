package com.bit5.wherewego.course;

import java.util.List;

import com.bit5.wherewego.notice.PagingVO;

public interface CourseDAOImp {
	public List<CourseVO> courseAllSelect(int num1, int num2);
	public int totalRecordCount(PagingVO pVo); //페이징
	
}
