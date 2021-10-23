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

		System.out.println(vo.getCoursesort());
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
	
	//신규코스등록 시, 코스 중복 확인후 등록
	@RequestMapping(value = "/checkCourse", method = RequestMethod.POST)
	public ModelAndView inserPlace(CourseVO vo) {
		ModelAndView mav = new ModelAndView();
		
		CourseDAOImp dao = sqlSession.getMapper(CourseDAOImp.class);
		int cnt = dao.checkCourse(vo); //중복여부 확인
		System.out.println("중복일까아닐깜"+cnt);
		
		if(cnt==0) { //중복없음. 신규
			String alltime = vo.getStarttime()+"~"+vo.getEndtime();
			vo.setTime(alltime);
			System.out.println("올타임:"+alltime);
			
			switch(vo.getSortstring()) {

				case "식당카페기타" : vo.setCoursesort(1); break;
				case "식당기타카페" : vo.setCoursesort(2); break;
				case "카페식당기타" : vo.setCoursesort(3); break;
				case "카페기타식당" : vo.setCoursesort(4); break;
				case "기타식당카페" : vo.setCoursesort(5); break;
				case "기타카페식당" : vo.setCoursesort(6); break;
			}
			System.out.println("케이스"+vo.getCoursesort());

			
			if(vo.getUserid().equals("admin")) {
				vo.setGrade("승인");
			} else {vo.setGrade("검토중");}
			
			System.out.println("grade=>"+vo.getGrade());
			
			CourseDAOImp dao2 = sqlSession.getMapper(CourseDAOImp.class);
			int result = dao2.insertCourse(vo); //추가
			System.out.println("추가추가추추가"+result);
		}

		mav.setViewName("maptest");
		
		return mav;
	}
}
