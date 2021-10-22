package com.bit5.wherewego.course;

import java.util.List;

public interface CourseDAOImp {
	public int newCourseCount();
	public List<CourseVO> myCourseSelect(String userid); //로그인한 사용자가 만든 코스 보기, 로그아이디값을 param으로 주시면됩니당
	public int totalCourseCount(String searchKey, String searchWord);
	public List<CourseVO> courseAllSelect(int num1, int num2, String searchKey, String searchWord);
	public int checkCourse(CourseVO vo);
	public int insertCourse(CourseVO vo);
}
