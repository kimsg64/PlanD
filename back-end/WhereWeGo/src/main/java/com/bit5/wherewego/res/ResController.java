package com.bit5.wherewego.res;

import java.lang.System.Logger;
import java.util.List;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;


import com.bit5.wherewego.notice.PagingVO;

@Controller
public class ResController {
	SqlSession sqlSession;
	
	public SqlSession getSqlSession() {
		return sqlSession;
	}

	@Autowired
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}

	//예약 목록
	@RequestMapping("/resList")
	public ModelAndView list(PagingVO pVo) {

		ModelAndView mav = new ModelAndView();
		ResDAOImp dao = sqlSession.getMapper(ResDAOImp.class);
		ResDAOImp dao2 = sqlSession.getMapper(ResDAOImp.class);
		
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
		
		mav.addObject("list",dao.resAllSelect(num1,num2));
		mav.addObject("pVo",pVo);
		mav.setViewName("res/resList");

		return mav;
	}	

}
	
