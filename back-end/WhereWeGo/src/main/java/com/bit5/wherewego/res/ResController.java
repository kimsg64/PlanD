package com.bit5.wherewego.res;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.bit5.wherewego.course.CourseDAOImp;
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
		int total = dao.totalResCount(pVo.getSearchKey(), pVo.getSearchWord());
		pVo.setTotalRecord(total);
		
		int num1 = pVo.getOnePageRecord() * pVo.getNowPage();
		int num2;
		
		int lastPageRecord = pVo.getTotalRecord() % pVo.getOnePageRecord();
		if (pVo.getTotalPage() == pVo.getNowPage() && lastPageRecord != 0) {
			num2 = lastPageRecord;
		} else {
			num2 = pVo.getOnePageRecord();
		}
		
		ResDAOImp dao2 = sqlSession.getMapper(ResDAOImp.class);
		mav.addObject("list",dao2.resAllSelect(num1,num2,pVo.getSearchKey(),pVo.getSearchWord()));
		mav.addObject("pVo",pVo);
		mav.setViewName("res/resList");

		return mav;
	}
	
	//예약하기 (전송)
	@RequestMapping(value = "/insertRes", method = RequestMethod.POST)
	public ModelAndView insertRes(String userid, int c_num, String resdate) {
		ModelAndView mav = new ModelAndView();
		ResDAOImp dao = sqlSession.getMapper(ResDAOImp.class);
		int total = dao.insertRest(userid, c_num, resdate);
		
		return null;
	}
	//예약하기 뷰
	@RequestMapping("/resView")
	public ModelAndView resView(String res_num,PagingVO pVo) {
		ModelAndView mav = new ModelAndView();
		
		ResDAOImp dao = sqlSession.getMapper(ResDAOImp.class);
		ResVO rVo = dao.resView(res_num);
		mav.addObject("rVo", rVo);
		
		//System.out.println(rVo.getC_num());
		
		CourseDAOImp dao2 = sqlSession.getMapper(CourseDAOImp.class);
		ResultVO cVo = dao2.courseDetail(rVo.getC_num());
		if(cVo.getInfo()!=null) {
			String i = cVo.getInfo().substring(3,cVo.getInfo().length()-4);
			cVo.setInfo(i);
		}
		if(cVo.getInfo1()!=null) {
			String i1 = cVo.getInfo1().substring(3,cVo.getInfo1().length()-4);
			cVo.setInfo1(i1);
		}
		if(cVo.getInfo2()!=null) {
			String i2 = cVo.getInfo2().substring(3,cVo.getInfo2().length()-4);
			cVo.setInfo2(i2);
		}
		if(cVo.getInfo3()!=null) {
			String i3 = cVo.getInfo3().substring(3,cVo.getInfo3().length()-4);
			cVo.setInfo3(i3);
		}
		mav.addObject("vo",cVo);
		
		mav.addObject("pVo",pVo);
		mav.setViewName("res/resView");
		
		return mav;
	}

}
	
