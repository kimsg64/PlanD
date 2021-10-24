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
import com.bit5.wherewego.res.ResultVO;
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
	
	//관심사 기반 코스 검색해서 추천해주는 부분
	@RequestMapping(value = "/coursePlanD", method = RequestMethod.POST)
	public ModelAndView coursePlanD(PlanningVO vo) {
		ModelAndView mav = new ModelAndView();
		
		//만약 첨부터 숫자로 넘어오면 필요없어용!!!!!!!!!!!!!!
		//coursesort 알아내기
		switch(vo.getSortstring()) {

			case "식당카페기타" : vo.setCoursesort(1); break;
			case "식당기타카페" : vo.setCoursesort(2); break;
			case "카페식당기타" : vo.setCoursesort(3); break;
			case "카페기타식당" : vo.setCoursesort(4); break;
			case "기타식당카페" : vo.setCoursesort(5); break;
			case "기타카페식당" : vo.setCoursesort(6); break;
		}
		
		//관심사 분석!!!!!!!!!!
		String fullOpt = vo.getOpt(); //중식#문화#야외#럭셔리#실외#컨셉			

		//먼저 식당 관심사 구분
		List<String> foodlist = new ArrayList<String>(); //batis에 매개변수로 보내서 반복문 돌릴것들
		String[] foodarr = {"한식","일식","중식","양식","그외"};
		for (int i=0; i<foodarr.length; i++) {	
			if(fullOpt.indexOf(foodarr[i]) != -1) { //관심사에 한식,일식,.. 이 있으면
				foodlist.add(foodarr[i]); //foodlist에 추가
			}
		}
		
		//카페 관심사 구분
		List<String> cafelist = new ArrayList<String>(); //batis에 매개변수로 보내서 반복문 돌릴것들
		String[] cafearr = {"분위기","컨셉","야외"};
		for (int i=0; i<cafearr.length; i++) {	
			if(fullOpt.indexOf(cafearr[i]) != -1) { //관심사에 분위기,컨셉,.. 이 있으면
				cafelist.add(cafearr[i]); //list에 추가
			}
		}
		
		//기타 관심사 구분
		List<String> etclist = new ArrayList<String>(); //batis에 매개변수로 보내서 반복문 돌릴것들
		String[] etcarr = {"체험","문화","익스트림","이색"};
		for (int i=0; i<etcarr.length; i++) {	
			if(fullOpt.indexOf(etcarr[i]) != -1) { //관심사에 있으면
				etclist.add(etcarr[i]); //etclist에 추가
			}
		}

		//날씨 분석도 해야되네!!!!
		String weather = vo.getWeather();
		
		//실내 실외 관심사 구분
		String inout=null; //매개변수 보낼 것
		if(fullOpt.indexOf("실외")!=-1 && fullOpt.indexOf("실내")==-1) { //만약 실외만 골랐으면
			inout="실외";
		}
		else if(fullOpt.indexOf("실내")!=-1 && fullOpt.indexOf("실외")==-1) { //실내만 골랐다면
			inout="실내";
		}
		//하지만 날씨가 안좋으면 무조건 실내
		if(weather.indexOf("09")!=-1 || weather.indexOf("10")!=-1 || weather.indexOf("11")!=-1 || weather.indexOf("13")!=-1 || weather.indexOf("50")!=-1){
			inout="실내";
		}
		
		//가성비 럭셔리 구분
		String money=null; //매개변수 보낼 것
		if(fullOpt.indexOf("가성비")!=-1 && fullOpt.indexOf("럭셔리")==-1) { //가성비만 골랐다면
			money="가성비";
		}
		else if(fullOpt.indexOf("럭셔리")!=-1 && fullOpt.indexOf("가성비")==-1) { //럭셔리만 골랐다면
			money="럭셔리";
		}
		
		//공통 관심사 구분
		List<String> alllist = new ArrayList<String>(); //batis에 매개변수로 보내서 반복문 돌릴것들
		String[] allarr = {"팝업","기념일","신상"};
		for (int i=0; i<allarr.length; i++) {	
			if(fullOpt.indexOf(allarr[i]) != -1) { //관심사에 있으면
				alllist.add(allarr[i]); //alllist에 추가
			}
		}
			
		CourseDAOImp dao = sqlSession.getMapper(CourseDAOImp.class);
		
		//조건에 맞는 코스정보들을 갖고옴
		List<ResultVO> r = dao.CoursePlanD(vo.getStcode(),vo.getCoursesort(),inout,money,foodlist,cafelist,etclist,alllist);
		
		mav.setViewName("/");
		
		return mav;
	}
	
}
