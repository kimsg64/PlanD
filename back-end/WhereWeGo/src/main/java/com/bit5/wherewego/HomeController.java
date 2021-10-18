/*
package com.bit5.wherewego;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {
	

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ModelAndView home(Model model) {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("home");

		
		return mav;
	}

}

서버 가동되어야 작동 확인 될듯..*/
package com.bit5.wherewego;

import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.bit5.wherewego.ad.AdDAOImp;
import com.bit5.wherewego.buy.BuyDAOImp;
import com.bit5.wherewego.course.CourseDAOImp;
import com.bit5.wherewego.review.ReviewDAOImp;

@Controller
public class HomeController {
	SqlSession sqlSession;

	public SqlSession getSqlSession() {
		return sqlSession;
	}
	@Autowired
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ModelAndView home(HttpSession session) {
		ModelAndView mav = new ModelAndView();

		CourseDAOImp dao1 = sqlSession.getMapper(CourseDAOImp.class);
		int cnt1 = dao1.newCourseCount();
		
		AdDAOImp dao2 = sqlSession.getMapper(AdDAOImp.class);
		int cnt2 = dao2.newAdCount();
		
		ReviewDAOImp dao3 = sqlSession.getMapper(ReviewDAOImp.class);
		int cnt3 = dao3.newReviewCount();

		BuyDAOImp dao4 = sqlSession.getMapper(BuyDAOImp.class);
		int cnt4 = dao4.newBuyCount();
		
		mav.addObject("cnt1",cnt1);
		mav.addObject("cnt2",cnt2);
		mav.addObject("cnt3",cnt3);
		mav.addObject("cnt4",cnt4);
		
		String b_id = (String)session.getAttribute("logid");
		
		AdDAOImp dao5 = sqlSession.getMapper(AdDAOImp.class);
		int cnt5 = dao5.ingAdCount(b_id);
		AdDAOImp dao6 = sqlSession.getMapper(AdDAOImp.class);
		int cnt6 = dao6.yetAdCount(b_id);
		AdDAOImp dao7 = sqlSession.getMapper(AdDAOImp.class);
		int cnt7 = dao7.edAdCount(b_id);
		AdDAOImp dao8 = sqlSession.getMapper(AdDAOImp.class);
		int cnt8 = dao8.payAdCount(b_id);
		
		mav.addObject("cnt5",cnt1);
		mav.addObject("cnt6",cnt2);
		mav.addObject("cnt7",cnt3);
		mav.addObject("cnt8",cnt4);

		mav.setViewName("home");

		return mav;
	}

}
