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
		CourseDAOImp dao2 = sqlSession.getMapper(CourseDAOImp.class);
		
		int total = dao2.totalRecordCount(pVo);
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
}
