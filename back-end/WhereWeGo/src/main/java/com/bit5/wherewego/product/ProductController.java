package com.bit5.wherewego.product;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;



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
	//광고 관리
	@RequestMapping("/pointshopList")

	public ModelAndView list(PdPagingVO pVo) {
			
			ModelAndView mav = new ModelAndView();
			ProductDAOImp dao = sqlSession.getMapper(ProductDAOImp.class);
			ProductDAOImp dao2 = sqlSession.getMapper(ProductDAOImp.class);
			
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
			
			mav.addObject("list",dao.pdAllSelect(num1,num2));
			mav.addObject("pVo",pVo);
			mav.setViewName("pointshop/pointshopList");
			
			return mav;
		}
}
