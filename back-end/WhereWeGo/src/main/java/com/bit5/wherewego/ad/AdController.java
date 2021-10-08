package com.bit5.wherewego.ad;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;


@Controller
public class AdController {
	SqlSession sqlSession;
	 
	public SqlSession getSqlSession() {
		return sqlSession;
	}
	@Autowired
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	//광고 관리
	@RequestMapping("/advermanage")
	public ModelAndView list() {
		
		ModelAndView mav = new ModelAndView();
		AdDAOImp dao = sqlSession.getMapper(AdDAOImp.class);
		mav.addObject("list",dao.adAllSelect());
		mav.setViewName("ad/advermanage");
		
		return mav;
	}
}
