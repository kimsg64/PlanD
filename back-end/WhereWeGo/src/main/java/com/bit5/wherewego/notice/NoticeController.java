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
	public ModelAndView list() {

		ModelAndView mav = new ModelAndView();
		NoticeDAOImp dao = sqlSession.getMapper(NoticeDAOImp.class);
		mav.addObject("list",dao.noticeAllSelect());
		mav.setViewName("notice/noticeList");

		return mav;
	}
}
