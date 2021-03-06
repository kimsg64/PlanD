package com.bit5.wherewego.business;

import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
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
	public int busienssLogin(@RequestBody BusinessVO vo, HttpSession ses) {
		System.out.println(vo.getB_id());
		System.out.println(vo.getPwd());

		BusinessDAOImp dao = sqlSession.getMapper(BusinessDAOImp.class);

		BusinessVO logVo = dao.loginCheck(vo.getB_id(), vo.getPwd());
		
		System.out.println(logVo.getB_id());
		System.out.println(logVo.getName());

		int result = 0;
		//세션저장
		if(logVo!=null) { //로그인 성공
			System.out.println("you did it!!");
			ses.setAttribute("logid", logVo.getB_id());
			ses.setAttribute("logname", logVo.getName());
			ses.setAttribute("lognum", logVo.getNum());
			ses.setAttribute("logStatus","B");
			result = 1;
		}
		System.out.println("들어가있겠지? 제발" + ses.getAttribute("logid"));
		// 프론트로 로그인 성공 정보 보냄
		return result;
	}
	
/*
	@RequestMapping(value = "/business/checkSession")
	public boolean setBSession(@CookieValue(name = "b_id", defaultValue = "admin") String b_id, HttpSession session) {
		//홈으로 이동해서 session에 있는 logid값에 따라 홈화면 다르게 보임
		System.out.println("세션 체크" + b_id);
		session.setAttribute("logid", b_id);
		// 쿠키 및 세션 저장
		return true;
	}

	
	@RequestMapping(value = "/business/gohome")
	public ModelAndView goHome(HttpSession session) {
		System.out.println("홈이나 가라");
		BusinessDAOImp dao = sqlSession.getMapper(BusinessDAOImp.class);
		// 세션에 저장된 id 체크해서 다시 정보 받아옴
		String logid = (String)session.getAttribute("logid");
		System.out.println("안비었지? 제발" + logid);
		BusinessVO logVo = dao.goHome(logid);
		
		// VO정보 중 필요한거 저장
		System.out.println(logVo.getB_id());
		System.out.println(logVo.getName());
		ModelAndView mav = new ModelAndView();
		mav.addObject("vo", logVo);
		mav.setViewName("redirect:/");
		return mav;
	}
*/
	@RequestMapping(value = "/business/checkSession")
	public ModelAndView setBSession(@CookieValue(name = "b_id") String b_id, HttpSession session) {
		//홈으로 이동해서 session에 있는 logid값에 따라 홈화면 다르게 보임
		System.out.println("세션 체크" + b_id);
		session.setAttribute("logid", b_id);
		// 쿠키 및 세션 저장
		System.out.println("홈이나 가라");
		BusinessDAOImp dao = sqlSession.getMapper(BusinessDAOImp.class);
		// 세션에 저장된 id 체크해서 다시 정보 받아옴
		String logid = (String)session.getAttribute("logid");
		System.out.println("안비었지? 제발" + logid);
		BusinessVO logVo = dao.goHome(b_id);
		
		// VO정보 중 필요한거 저장
		System.out.println(logVo.getB_id());
		System.out.println(logVo.getName());
		ModelAndView mav = new ModelAndView();
		mav.addObject("vo", logVo);
		mav.setViewName("redirect:/");
		return mav;
	}
	
	@RequestMapping(value = "/business/gohome")
	public ModelAndView goHome(HttpSession session) {
		session.getAttribute("logid");
		ModelAndView mav = new ModelAndView();
		mav.setViewName("redirect:/");
		return mav;
	}
	
	
	
	//회원정보 가져오기
	@RequestMapping(value = "/MyInfo")
	public ModelAndView businessEdit(HttpSession session) {
		BusinessDAOImp dao = sqlSession.getMapper(BusinessDAOImp.class);
		String logid = (String)session.getAttribute("logid");
		BusinessVO logVo = dao.allbusinessSelect(logid);
		
		ModelAndView mav = new ModelAndView();
		mav.addObject("vo", logVo);
		mav.setViewName("business/businessEdit");
		return mav;
	}
	//회원정보 수정
	@RequestMapping(value = "/businessEditOk", method=RequestMethod.POST)
	public ModelAndView businessEditOk(BusinessVO vo) {
		ModelAndView mav = new ModelAndView();
		BusinessDAOImp dao = sqlSession.getMapper(BusinessDAOImp.class);
		int cnt = dao.businessEditOk(vo);
		mav.addObject("b_id", vo.getB_id());
		
		if(cnt>0) {
			mav.setViewName("redirect:/");
			
		}else {
			mav.addObject("msg","수정");
			mav.setViewName("business/businessEdit");
		}
		return mav;
		
	}
	
	// 로그아웃
	@RequestMapping("/logout")
	public ModelAndView logout(HttpSession session) {
		session.invalidate();
		ModelAndView mav = new ModelAndView();
		mav.setViewName("logoutOk");
		return mav;
	}
	
	// 회원가입
	@RequestMapping(value = "/businessRegister", method = RequestMethod.POST)
	public int setCompanyData(@RequestBody BusinessVO vo) {
		BusinessDAOImp dao = sqlSession.getMapper(BusinessDAOImp.class);
		System.out.println(vo.getB_id());
		int result = dao.insertBusiness(vo);
		return result;
	}
	
	
}
