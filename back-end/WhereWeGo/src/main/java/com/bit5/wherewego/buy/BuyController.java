package com.bit5.wherewego.buy;

import java.util.HashMap;

import org.apache.ibatis.session.SqlSession;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.bit5.wherewego.user.UserDAOImp;

import net.nurigo.java_sdk.api.Message;
import net.nurigo.java_sdk.exceptions.CoolsmsException;

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
		
		if(cnt2>0) {
			for(int i=0;i<vo.getCount();i++) {
			String api_key = "NCSYDAV6TEW7BM61";
		    String api_secret = "GRZG9MR5SCWPLWITSCTYRF056KXHNPOB";
		    Message coolsms = new Message(api_key, api_secret);
		    
		    String userid = vo.getUserid();
            UserDAOImp dao3 = sqlSession.getMapper(UserDAOImp.class);
            String tel = dao3.selectUser(userid).getTel();
            
            double ran = Math.random();
    		int ranInt = (int)(ran*(999999-100000+1)+100000);
    		System.out.println("쿠폰번호:"+String.valueOf(ranInt));

		    // 4 params(to, from, type, text) are mandatory. must be filled
		    HashMap<String, String> params = new HashMap<String, String>();
		    params.put("to", tel); // 수신번호
		    params.put("from", "01087885202"); // 발신번호
		    params.put("type", "SMS"); // Message type ( SMS, LMS, MMS, ATA )
		    params.put("text", "[PlanD] "+vo.getUserid()+"님 <"+vo.getBrand()+"> "+vo.getName()+" 구입이 완료되었습니다."
		    		+ "쿠폰번호 : "+String.valueOf(ranInt)); // 문자내용    
		    params.put("app_version", "JAVA SDK v1.2"); // application name and version
		    try {
		      JSONObject obj = coolsms.send(params);
		      System.out.println(obj.toString());
		    } catch (CoolsmsException e) {
		      System.out.println(e.getMessage());
		      System.out.println(e.getCode());
		    }
			}
		}
		
		
		mav.setViewName("/pointshop/productPayResult");
		return mav;

	}
}