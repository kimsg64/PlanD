package com.bit5.wherewego.course;

import java.util.List;

import com.bit5.wherewego.notice.PagingVO;
import com.bit5.wherewego.res.PlanningVO;

public interface CourseDAOImp {
	public List<CourseVO> courseAllSelect(int num1, int num2);
	public int totalRecordCount(PagingVO pVo); //페이징
	public int newCourseCount();
}
