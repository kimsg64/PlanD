package com.bit5.wherewego.course;

import java.util.List;

import com.bit5.wherewego.notice.PagingVO;

public interface CourseDAOImp {
	public List<CourseVO> courseAllSelect(int num1, int num2);
	public int totalRecordCount(PagingVO pVo); //페이징
	public int newCourseCount();
	public List<CourseVO> myCourseSelect(String userid); //로그인한 사용자가 만든 코스 보기, 로그아이디값을 param으로 주시면됩니당
}
