package com.bit5.wherewego.ad;

import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.bit5.wherewego.business.BusinessDAOImp;
import com.bit5.wherewego.business.BusinessVO;


@Controller
public class AdController {
	SqlSession sqlSession;
	 
	public SqlSession getSqlSession() {
		return sqlSession;
	}
	@Autowired
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	//광고 관리
	@RequestMapping("/advermanage")
	public ModelAndView list(PagingVO pVo) {
			
			ModelAndView mav = new ModelAndView();
			AdDAOImp dao = sqlSession.getMapper(AdDAOImp.class);
			AdDAOImp dao2 = sqlSession.getMapper(AdDAOImp.class);
			
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
			
			mav.addObject("list",dao.adAllSelect(num1,num2));
			mav.addObject("pVo",pVo);
			mav.setViewName("ad/advermanage");
			
			return mav;
		}
	//광고 신청
	@RequestMapping("/adRegister")
	public ModelAndView adRegister(BusinessVO vo,HttpSession session) {
		ModelAndView mav = new ModelAndView();
		
		BusinessDAOImp dao = sqlSession.getMapper(BusinessDAOImp.class);
		
		String b_id = (String)session.getAttribute("logid");

		mav.addObject("bVo",dao.allselect(b_id));
		mav.setViewName("ad/adRegister");
		
		return mav;
	}
}
