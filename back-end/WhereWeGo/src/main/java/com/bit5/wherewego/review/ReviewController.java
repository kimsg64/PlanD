package com.bit5.wherewego.review;


import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.bit5.wherewego.notice.PagingVO;
import com.bit5.wherewego.user.UserVO;

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
		int total= dao.totalReviewCount(pVo.getSearchKey(), pVo.getSearchWord());		
		pVo.setTotalRecord(total);

		int num1 = pVo.getOnePageRecord() * pVo.getNowPage();
		int num2;

		int lastPageRecord = pVo.getTotalRecord() % pVo.getOnePageRecord();
		if (pVo.getTotalPage() == pVo.getNowPage() && lastPageRecord != 0) {
			num2 = lastPageRecord;
		} else {
			num2 = pVo.getOnePageRecord();
		}

		ReviewDAOImp dao2 = sqlSession.getMapper(ReviewDAOImp.class);
		mav.addObject("list",dao2.reviewAllSelect(num1,num2,pVo.getSearchKey(),pVo.getSearchWord()));
		mav.addObject("pVo",pVo);
		mav.setViewName("review/reviewList");

		return mav;
	}

	// 사용자 리뷰 목록 페이지 > sql문 변경해야 함
	@RequestMapping("/user/bestReviews")
	@ResponseBody
	public List<ReviewVO> showBestReviews() {
		ReviewDAOImp dao = sqlSession.getMapper(ReviewDAOImp.class);
		List<ReviewVO> list = dao.selectBestReviews();
		return list;
	}

	@RequestMapping("/reviewitem")
	public String showReviewItem() {
		return "/review/review";
	}

	//글 내용 보기
	@RequestMapping("/reviewView")
	public ModelAndView view(int r_num) {
		ModelAndView mav = new ModelAndView();
		ReviewDAOImp dao = sqlSession.getMapper(ReviewDAOImp.class);
		mav.addObject("vo", dao.reviewView(r_num));
		mav.setViewName("review/reviewView");

		return mav;
	}

	//뷰에서 공개비공개 전환
	@RequestMapping("/reViewgradech")
	public ModelAndView reViewgradech(int r_num, String grade) {
		ModelAndView mav = new ModelAndView();
		ReviewDAOImp dao = sqlSession.getMapper(ReviewDAOImp.class);

		int cnt = dao.reViewgradech(r_num, grade);
		mav.addObject("r_num", r_num);
		mav.setViewName("redirect:reviewView");
		return mav;
	}

	//글쓰기폼
		@RequestMapping("/reviewWrite")
		public String write() {
			return "review/reviewWrite";
		}
	
	// 로그인한 유저가 작성한 리뷰
	@RequestMapping(value = "/myReviewSelect", method = RequestMethod.POST)
	@ResponseBody
	public List<ReviewVO> myReviewSelect(@RequestBody UserVO vo) {
		List<ReviewVO> list = new ArrayList<ReviewVO>();
		ReviewDAOImp dao = sqlSession.getMapper(ReviewDAOImp.class);
		System.out.println("리뷰 보여줄때 쓸 아이디: " + vo.getUserId());
		list = dao.myReviewSelect(vo.getUserId());
		return list;
	}
	
	//글수정 폼
	@RequestMapping("/reviewEdit")
	public ModelAndView reviewEdit(int r_num) {
		ModelAndView mav = new ModelAndView();
		ReviewDAOImp dao = sqlSession.getMapper(ReviewDAOImp.class);
		mav.addObject("vo", dao.reviewView(r_num));
		mav.setViewName("review/reviewEdit");
		
		return mav;
	}
	//글수정
	@RequestMapping(value="/reviewEditOk", method=RequestMethod.POST)
	public ModelAndView reviewEditOk(ReviewVO vo, HttpSession session) {
		
		ModelAndView mav = new ModelAndView();
		ReviewDAOImp dao = sqlSession.getMapper(ReviewDAOImp.class);
		int cnt =  dao.reviewEditOk(vo);
		mav.addObject("r_num", vo.getR_num());
		
		if(cnt>0) {//글 수정이 되면 글 내용 보기
			mav.setViewName("redirect:reviewView");
		}else {//수정 안되면 글수정으로 이동
			mav.addObject("msg","수정");
			mav.setViewName("review/writeResult");
			
		}
		return mav;
	}

}
