package com.bit5.wherewego.res;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ResController {
	SqlSession sqlSession;

	public SqlSession getSqlSession() {
		return sqlSession;
	}

	@Autowired
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}

	//예약 목록
	@RequestMapping("/resList")
	public ModelAndView list() {

		ModelAndView mav = new ModelAndView();
		ResDAOImp dao = sqlSession.getMapper(ResDAOImp.class);
		mav.addObject("list",dao.resAllSelect());
		mav.setViewName("res/resList");

		return mav;
	}
}
