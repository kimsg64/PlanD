package com.bit5.wherewego.course;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class CourseController {
	SqlSession sqlSession;

	public SqlSession getSqlSession() {
		return sqlSession;
	}
	
	@Autowired
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	//공지사항 목록
	@RequestMapping("/courseList")
	public ModelAndView list(PagingVO pVo) {

		ModelAndView mav = new ModelAndView();
		CourseDAOImp dao = sqlSession.getMapper(CourseDAOImp.class);
		CourseDAOImp dao2 = sqlSession.getMapper(CourseDAOImp.class);
		
		int total = dao2.totalRecordCount();
		pVo.setTotalRecord(total);
		
		int num1 = pVo.getOnePageRecord() * pVo.getNowPage();
		int num2;
		
		int lastPageRecord = pVo.getTotalRecord() % pVo.getOnePageRecord();
		if (pVo.getTotalPage() == pVo.getNowPage() && lastPageRecord != 0) {
			num2 = lastPageRecord;
		} else {
			num2 = pVo.getOnePageRecord();
		}
		
		mav.addObject("list",dao.courseAllSelect(num1,num2));
		mav.addObject("pVo",pVo);
		mav.setViewName("course/courseList");

		return mav;
	}
}
