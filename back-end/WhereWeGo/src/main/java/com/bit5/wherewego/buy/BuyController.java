package com.bit5.wherewego.buy;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.bit5.wherewego.user.UserDAOImp;

@RestController
public class BuyController {

	SqlSession sqlSession;

	public SqlSession getSqlSession() {
		return sqlSession;
	}

	@Autowired
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	
	//Buy 테이블에 구매내역 추가
	@RequestMapping("/insertBuy")
	public ModelAndView insertBuy(BuyVO vo) {
		ModelAndView mav = new ModelAndView();
		BuyDAOImp dao = sqlSession.getMapper(BuyDAOImp.class);
		int cnt = dao.insertBuy(vo);
		UserDAOImp dao2 = sqlSession.getMapper(UserDAOImp.class);
		int cnt2 = dao2.usePoint(vo);
		mav.setViewName("/pointshop/productPayResult");
		return mav;

	}
}