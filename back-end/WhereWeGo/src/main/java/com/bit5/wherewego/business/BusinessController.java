package com.bit5.wherewego.business;

import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

public class BusinessController {

	SqlSession sqlSession;

	public SqlSession getSqlSession() {
		return sqlSession;
	}

	@Autowired
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}

	// 로그인
	@RequestMapping(value="/business/businessLogin", method=RequestMethod.POST)
	public ModelAndView busienssLogin(BusinessVO vo, HttpSession ses) {

		BusinessDAOImp dao = sqlSession.getMapper(BusinessDAOImp.class);

		BusinessVO logVo = dao.loginCheck(vo.getB_id(), vo.getPwd());
		
		ModelAndView mav = new ModelAndView();

		//세션저장
		if(logVo!=null) { //로그인 성공
			ses.setAttribute("logname", logVo.getName());
			ses.setAttribute("logid", logVo.getB_id());	
			
			mav.setViewName("/");
			//홈으로 이동해서 session에 있는 logid값에 따라 홈화면 다르게 보임
		} else {
			mav.setViewName("/business/loginResult");
		}
		
		return mav;
	}
}
