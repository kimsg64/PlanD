package com.bit5.wherewego.res;


import java.util.HashMap;

import org.apache.ibatis.session.SqlSession;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.bit5.wherewego.course.CourseDAOImp;
import com.bit5.wherewego.notice.PagingVO;
import com.bit5.wherewego.user.UserDAOImp;

import net.nurigo.java_sdk.api.Message;
import net.nurigo.java_sdk.exceptions.CoolsmsException;


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

	// 로그인한 유저의 이력/예약
	@RequestMapping(value = "/myReservationSelect", method = RequestMethod.POST)
	@ResponseBody
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
	 */

	//예약하기 (전송)
	@RequestMapping(value = "/insertRes", method = RequestMethod.POST)
	@ResponseBody
	public int insertRes(@RequestBody ResVO vo)  throws Exception{
		System.out.println(vo.getUserid());
		System.out.println(vo.getC_num());
		System.out.println(vo.getResdate());
		ResDAOImp dao = sqlSession.getMapper(ResDAOImp.class);
		int total = dao.insertRes(vo.getUserid(), vo.getC_num(), vo.getResdate());
		System.out.println(total);
		if(total > 0) {
			System.out.println("you did it~!");
			
			String api_key = "NCSYDAV6TEW7BM61";
		    String api_secret = "GRZG9MR5SCWPLWITSCTYRF056KXHNPOB";
		    Message coolsms = new Message(api_key, api_secret);
		    
		    String userid = vo.getUserid();
            UserDAOImp dao2 = sqlSession.getMapper(UserDAOImp.class);
            String tel = dao2.selectUser(userid).getTel();

		    // 4 params(to, from, type, text) are mandatory. must be filled
		    HashMap<String, String> params = new HashMap<String, String>();
		    params.put("to", tel); // 수신번호
		    params.put("from", "01087885202"); // 발신번호
		    params.put("type", "SMS"); // Message type ( SMS, LMS, MMS, ATA )
		    params.put("text", "[PlanD] "+vo.getUserid()+"님 "+vo.getResdate()+" 데이트 예약이 완료되었습니다. "); // 문자내용    
		    params.put("app_version", "JAVA SDK v1.2"); // application name and version
		    try {
		      JSONObject obj = coolsms.send(params);
		      System.out.println(obj.toString());
		    } catch (CoolsmsException e) {
		      System.out.println(e.getMessage());
		      System.out.println(e.getCode());
		    }
		} else {
			System.out.println("fail");
		}
		return total;
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

