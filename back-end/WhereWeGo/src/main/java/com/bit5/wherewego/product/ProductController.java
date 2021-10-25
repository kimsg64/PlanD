package com.bit5.wherewego.product;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.bit5.wherewego.user.UserDAOImp;
import com.bit5.wherewego.user.UserVO;



@Controller
public class ProductController {
	SqlSession sqlSession;

	public SqlSession getSqlSession() {
		return sqlSession;
	}
	@Autowired
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}

	//포인트샵 리스트
	@RequestMapping("/pointshopList")
	public ModelAndView list(PdPagingVO pVo) {
		ModelAndView mav = new ModelAndView();
		
		ProductDAOImp dao = sqlSession.getMapper(ProductDAOImp.class);
		int total= dao.totalProductCount(pVo.getSearchKey(), pVo.getSearchWord());		
		pVo.setTotalRecord(total);
		
		int num1 = pVo.getOnePageRecord() * pVo.getNowPage();
		int num2;
		
		int lastPageRecord = pVo.getTotalRecord() % pVo.getOnePageRecord();
		if (pVo.getTotalPage() == pVo.getNowPage() && lastPageRecord != 0) {
			num2 = lastPageRecord;
		} else {
			num2 = pVo.getOnePageRecord();
		}
		
		ProductDAOImp dao2 = sqlSession.getMapper(ProductDAOImp.class);
		mav.addObject("list",dao2.productAllSelect(num1,num2,pVo.getSearchKey(),pVo.getSearchWord()));
		mav.addObject("pVo",pVo);	
		mav.setViewName("pointshop/pointshopList");
		
		return mav;
	}
	//포인트샵 뷰
	@RequestMapping("/pointshopView")
	public ModelAndView pointshopView(String p_num, PdPagingVO pVo) {
		ModelAndView mav = new ModelAndView();
		ProductDAOImp dao = sqlSession.getMapper(ProductDAOImp.class);
		mav.addObject("vo", dao.pointshopView(p_num));
		mav.addObject("pVo", pVo);
		mav.setViewName("/pointshop/pointshopView");
		
		return mav;
	}
	// 샵 게시물 삭제
	@RequestMapping("/pdDel")
	public ModelAndView pdDel(String p_num) {
		ProductDAOImp dao = sqlSession.getMapper(ProductDAOImp.class);
		int cnt = dao.pdDelete(p_num);
		
		ModelAndView mav = new ModelAndView();
		if(cnt>0) {
			mav.setViewName("redirect:pointshopList");
		}else {
			mav.addObject("p_num", p_num);
			mav.setViewName("redirect:pointshopView");
		}
		return mav;
	}
	
	//포인트샵 결제 뷰
	@RequestMapping("/paymentPage")
	public ModelAndView paymentPage(String p_num, ProductVO ppVo, UserVO uVo) {
		ModelAndView mav = new ModelAndView();
		ProductDAOImp dao = sqlSession.getMapper(ProductDAOImp.class);
		UserDAOImp dao2 = sqlSession.getMapper(UserDAOImp.class);
		mav.addObject("vo", dao.paymentPageOk(p_num));
		mav.addObject("ppVo", ppVo);
		mav.addObject("uVo", uVo);
		mav.setViewName("/pointshop/paymentPage");
		
		return mav;
	}
}
