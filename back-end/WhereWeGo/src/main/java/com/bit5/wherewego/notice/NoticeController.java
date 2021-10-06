package com.bit5.wherewego.notice;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class NoticeController {
	SqlSession sqlSession;

	public SqlSession getSqlSession() {
		return sqlSession;
	}
	
	@Autowired
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	//공지사항 목록
	@RequestMapping("/noticeList")
	public ModelAndView list(PagingVO pVo) {

		ModelAndView mav = new ModelAndView();
		NoticeDAOImp dao = sqlSession.getMapper(NoticeDAOImp.class);
		NoticeDAOImp dao2 = sqlSession.getMapper(NoticeDAOImp.class);
		
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
		
		mav.addObject("list",dao.noticeAllSelect(num1,num2));
		mav.addObject("pVo",pVo);
		mav.setViewName("notice/noticeList");

		return mav;
	}
}
