package com.bit5.wherewego.notice;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
		int total= dao.totalNoticeCount(pVo.getSearchKey(), pVo.getSearchWord());		
		pVo.setTotalRecord(total);
		
		int num1 = pVo.getOnePageRecord() * pVo.getNowPage();
		int num2;
		
		int lastPageRecord = pVo.getTotalRecord() % pVo.getOnePageRecord();
		if (pVo.getTotalPage() == pVo.getNowPage() && lastPageRecord != 0) {
			num2 = lastPageRecord;
		} else {
			num2 = pVo.getOnePageRecord();
		}
		
		NoticeDAOImp dao2 = sqlSession.getMapper(NoticeDAOImp.class);
		mav.addObject("list",dao2.noticeAllSelect(num1,num2,pVo.getSearchKey(),pVo.getSearchWord()));
		mav.addObject("pVo",pVo);	
		mav.setViewName("notice/noticeList");
		
		return mav;
	}
	//글쓰기폼
	@RequestMapping("/noticewrite")
	public String write() {
		return "notice/noticewrite";
	}

	//글쓰기
		@RequestMapping(value="/noticeWriteOk", method=RequestMethod.POST)
		public ModelAndView writeOk(NoticeVO vo, HttpSession ses, HttpServletRequest req) {
			ModelAndView mav = new ModelAndView();
			NoticeDAOImp dao = sqlSession.getMapper(NoticeDAOImp.class);
			
			int cnt = dao.noticeWriteOk(vo);
			if(cnt>0) {//글등록
				mav.setViewName("redirect:noticeList");
			}else {//글등록 실패
				mav.addObject("msg","등록");
				mav.setViewName("notice/writeResult");
			}
			return mav;
		}
		//게시판 내용 뷰
		@RequestMapping("/noticeView")
		public ModelAndView noticeView(int n_num) {
			ModelAndView mav = new ModelAndView();
			NoticeDAOImp dao = sqlSession.getMapper(NoticeDAOImp.class);
			mav.addObject("vo", dao.noticeView(n_num));
			mav.setViewName("/notice/noticeView");
			
			return mav;
		
	}
		//글 삭제
		@RequestMapping("/noticeDel")
		public ModelAndView noticeDel(int n_num) {
			
			NoticeDAOImp dao = sqlSession.getMapper(NoticeDAOImp.class);
			int cnt = dao.noticeDelete(n_num);
			
			ModelAndView mav = new ModelAndView();
			if(cnt>0) {//글이 삭제 되면 리스트
				mav.setViewName("redirect:noticeList");
			}else {//글 내용 보기
				mav.addObject("n_num", n_num);
				mav.setViewName("redirect:noticeView");
			}
			return mav;
		}
}
