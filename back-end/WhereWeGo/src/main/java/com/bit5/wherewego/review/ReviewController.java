package com.bit5.wherewego.review;


import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.bit5.wherewego.notice.PagingVO;

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
		
		int total;
		
		if (pVo.getSearchWord() != null && !pVo.getSearchWord().equals("")) { //검색어있을때
			if(pVo.getSearchKey().equals("코스명")) {
				total = dao.totalSearchname(pVo.getSearchWord());
			}
			else {
				total = dao.totalSearchid(pVo.getSearchWord());	
			}
				
		}
		else { //검색어 없을때
			total = dao.totalRecordCount();
		}
		
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
		if (pVo.getSearchWord() != null && !pVo.getSearchWord().equals("")) { //검색어있을때
			if(pVo.getSearchKey().equals("코스명")) {
				mav.addObject("list",dao2.allSelectSearchname(num1,num2,pVo.getSearchWord()));
			}
			else {
				mav.addObject("list",dao2.allSelectSearchid(num1,num2,pVo.getSearchWord()));
			}		
		}
		else { //검색어 없을때
			mav.addObject("list",dao2.reviewAllSelect(num1,num2));
		}
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


}
