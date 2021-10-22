package com.bit5.wherewego.course;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.bit5.wherewego.notice.PagingVO;
import com.bit5.wherewego.res.PlanningVO;
import com.bit5.wherewego.user.UserVO;

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
	
	//목록
	@RequestMapping("/courseList")
	public ModelAndView list(PagingVO pVo) {
		ModelAndView mav = new ModelAndView();
		
		CourseDAOImp dao = sqlSession.getMapper(CourseDAOImp.class);
		int total= dao.totalCourseCount(pVo.getSearchKey(), pVo.getSearchWord());		
		pVo.setTotalRecord(total);
		
		int num1 = pVo.getOnePageRecord() * pVo.getNowPage();
		int num2;
		
		int lastPageRecord = pVo.getTotalRecord() % pVo.getOnePageRecord();
		if (pVo.getTotalPage() == pVo.getNowPage() && lastPageRecord != 0) {
			num2 = lastPageRecord;
		} else {
			num2 = pVo.getOnePageRecord();
		}
		
		CourseDAOImp dao2 = sqlSession.getMapper(CourseDAOImp.class);
		mav.addObject("list",dao2.courseAllSelect(num1,num2,pVo.getSearchKey(),pVo.getSearchWord()));
		mav.addObject("pVo",pVo);	
		mav.setViewName("course/courseList");
		
		return mav;
	}
	
	
	// 유저 코스 검색
	@RequestMapping(value = "/searchCourse", method = RequestMethod.POST)
	@ResponseBody
	public List<ResultVO> searchCourse(@RequestBody PlanningVO vo) {
		List<ResultVO> list = new ArrayList<ResultVO>();
		CourseDAOImp dao = sqlSession.getMapper(CourseDAOImp.class);
		
		System.out.println(vo.getUserId());
		
		System.out.println(vo.getLine());
		System.out.println(vo.getStname());
		
		System.out.println(vo.getResdate());
		System.out.println(vo.getTime());
		System.out.println(vo.getSort());
		System.out.println(vo.getOpt());
		return null;
	}
	

	@RequestMapping("/maptest")
	public ModelAndView maptest() {
		ModelAndView mav = new ModelAndView();

		mav.setViewName("maptest");
		
		return mav;
	}

	// 로그인한 사용자 본인이 추천한 코스
	@RequestMapping(value = "/myCourseSelect", method = RequestMethod.POST)
	@ResponseBody
	public List<CourseVO> myCourseSelect(@RequestBody UserVO vo) {
		List<CourseVO> list = new ArrayList<CourseVO>();
		CourseDAOImp dao = sqlSession.getMapper(CourseDAOImp.class);
		System.out.println("들어온 유저!: " + vo.getUserId());
		list = dao.myCourseSelect(vo.getUserId());
		return list;

	}
}
