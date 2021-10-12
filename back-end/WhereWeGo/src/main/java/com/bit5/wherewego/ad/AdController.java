package com.bit5.wherewego.ad;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.bit5.wherewego.business.BusinessDAOImp;
import com.bit5.wherewego.business.BusinessVO;


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
	
	//광고 신청
	@RequestMapping("/adRegister")
	public ModelAndView adRegister(BusinessVO vo) { //원래 세션값 아이디 받아야함 HttpSession session
		ModelAndView mav = new ModelAndView();
		
		BusinessDAOImp dao = sqlSession.getMapper(BusinessDAOImp.class);
		//원래 logid값 받아서 여기에 넣어여함
		//(String)session.getAttribute("logid");
		//하지만 임시로 b_id 값을 starbuck로 둠
		mav.addObject("bVo",dao.allselect("starbucks"));
		mav.setViewName("ad/adRegister");
		
		return mav;
	}
}
