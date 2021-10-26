package com.bit5.wherewego.res;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.bit5.wherewego.notice.PagingVO;

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
	public ModelAndView list(PagingVO pVo) {

		ModelAndView mav = new ModelAndView();
		
		ResDAOImp dao = sqlSession.getMapper(ResDAOImp.class);
		int total = dao.totalResCount(pVo.getSearchKey(), pVo.getSearchWord());
		pVo.setTotalRecord(total);
		
		int num1 = pVo.getOnePageRecord() * pVo.getNowPage();
		int num2;
		
		int lastPageRecord = pVo.getTotalRecord() % pVo.getOnePageRecord();
		if (pVo.getTotalPage() == pVo.getNowPage() && lastPageRecord != 0) {
			num2 = lastPageRecord;
		} else {
			num2 = pVo.getOnePageRecord();
		}
		
		ResDAOImp dao2 = sqlSession.getMapper(ResDAOImp.class);
		mav.addObject("list",dao2.resAllSelect(num1,num2,pVo.getSearchKey(),pVo.getSearchWord()));
		mav.addObject("pVo",pVo);
		mav.setViewName("res/resList");

		return mav;
	}
	
	//예약하기 (전송)
	@RequestMapping(value = "/insertRes", method = RequestMethod.POST)
	public ModelAndView insertRes(String userid, int c_num, String resdate) {
		ModelAndView mav = new ModelAndView();
		ResDAOImp dao = sqlSession.getMapper(ResDAOImp.class);
		int total = dao.insertRest(userid, c_num, resdate);
		
		return null;
	}
	//예약하기 뷰
	@RequestMapping("/resView")
	public ModelAndView resView(String res_num, PagingVO pVo) {
		ModelAndView mav = new ModelAndView();
		ResDAOImp dao = sqlSession.getMapper(ResDAOImp.class);
		mav.addObject("vo", dao.resView(res_num));
		mav.addObject("pVo", pVo);
		mav.setViewName("res/resView");
		
		return mav;
	}

}
	
