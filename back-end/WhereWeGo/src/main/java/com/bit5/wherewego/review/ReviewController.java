package com.bit5.wherewego.review;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ReviewController {
	SqlSession sqlSession;

	public SqlSession getSqlSession() {
		return sqlSession;
	}
	
	@Autowired
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	//목록
	@RequestMapping("/reviewList")
	public ModelAndView list(PagingVO pVo) {

		ModelAndView mav = new ModelAndView();
		ReviewDAOImp dao = sqlSession.getMapper(ReviewDAOImp.class);
		ReviewDAOImp dao2 = sqlSession.getMapper(ReviewDAOImp.class);
		
		int total = dao2.totalRecordCount();
		pVo.setTotalRecord(total);
		
		int num1 = pVo.getOnePageRecord() * pVo.getNowPage();
		int num2;
		
		int lastPageRecord = pVo.getTotalRecord() % pVo.getOnePageRecord();
		if (pVo.getTotalPage() == pVo.getNowPage() && lastPageRecord != 0) {
			num2 = lastPageRecord;
		} else {
			num2 = pVo.getOnePageRecord();
		}
		
		mav.addObject("list",dao.reviewAllSelect(num1,num2));
		mav.addObject("pVo",pVo);
		mav.setViewName("review/reviewList");

		return mav;
	}
}
