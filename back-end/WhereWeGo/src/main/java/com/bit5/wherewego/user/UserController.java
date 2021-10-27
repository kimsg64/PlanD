package com.bit5.wherewego.user;



import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import net.nurigo.java_sdk.api.Message;
import net.nurigo.java_sdk.exceptions.CoolsmsException;


@RestController
public class UserController {
	
	SqlSession sqlSession;

	public SqlSession getSqlSession() {
		return sqlSession;
	}

	@Autowired
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	// 회원가입
	@PostMapping(path = "/registerUser")
	public int getUserData(@RequestBody UserVO userData) {
		UserDAOImp dao = sqlSession.getMapper(UserDAOImp.class);
		int result = dao.insertUser(userData);
		if(result > 0) {
			System.out.println("you did it~!");			
		} else {
			System.out.println("fail");
		}
		return result;
	}
	
	// 로그인
	@PostMapping(path = "/user/userLogin")
	public int userLogin(@RequestBody UserVO userData) {
		UserDAOImp dao = sqlSession.getMapper(UserDAOImp.class);
		int result = dao.selectUserToLogin(userData);
		if(result > 0) {
			System.out.println("you did it!!");
		} else {
			System.out.println("fail");
		}
		return result;
	}
	
	// 로그인 성공 => 세션 설정
	@GetMapping(path = "/user/checkSession")
	public boolean setSession(@CookieValue(name = "userId") String loginId, HttpSession session) {
		// 어차피 로그인 성공한 애들이 들어올 곳이므로... 그냥 설정하면 된다.
		// front 쿠키에 저장된 userId = back 세션에 저장된 userId면 로그인된 것으로 간주하면 됨! 
		System.out.println(loginId);
		session.setAttribute("loginId", loginId);
		System.out.println(session.getAttribute("loginId"));
		return true;
	}
	
	// 유저 데이터 받기
	@PostMapping(path = "/getUserData")
	public UserVO selectUserData(@RequestBody UserVO userData) {
		System.out.println(userData.getUserId());
		UserDAOImp dao = sqlSession.getMapper(UserDAOImp.class);
		UserVO vo = dao.selectUser(userData.getUserId());
		System.out.println(vo.getName());
		System.out.println(vo.getPoint());
		System.out.println(vo.getStartdate());
		System.out.println(vo.getRegdate());
		System.out.println(vo.getZzim());
		
		return vo;
	}

	//문자 보내는 메소드
	@PostMapping(path = "/telcheck")
	public int telcheck(@RequestBody UserVO vo) {
		String tel = vo.getTel();
		System.out.println(tel);
		String api_key = "NCSYDAV6TEW7BM61";
	    String api_secret = "GRZG9MR5SCWPLWITSCTYRF056KXHNPOB";
	    Message coolsms = new Message(api_key, api_secret);
	    
	    //System.out.println(tel);
	    double ran = Math.random();
	    int ranInt = (int)(ran*(9999-1000+1)+1000);
	    System.out.println("인증문자:"+String.valueOf(ranInt));

	    // 4 params(to, from, type, text) are mandatory. must be filled
	    HashMap<String, String> params = new HashMap<String, String>();
	    params.put("to", tel); // 수신번호
	    params.put("from", "01087885202"); // 발신번호
	    params.put("type", "SMS"); // Message type ( SMS, LMS, MMS, ATA )
	    params.put("text", "[PlanD] 인증문자는 "+String.valueOf(ranInt)+" 입니다."); // 문자내용    
	    params.put("app_version", "JAVA SDK v1.2"); // application name and version
	    try {
	      JSONObject obj = coolsms.send(params);
	      System.out.println(obj.toString());
	    } catch (CoolsmsException e) {
	      System.out.println(e.getMessage());
	      System.out.println(e.getCode());
	    }
	    return ranInt;
	}
	
	// 회원정보 수정
	@RequestMapping(value = "/editUser", method = RequestMethod.POST)
	public int updateUser(@RequestBody UserVO vo) {
		UserDAOImp dao = sqlSession.getMapper(UserDAOImp.class);
		System.out.println(vo.getAddr());
		System.out.println(vo.getEmail());
		System.out.println(vo.getUserId());
		System.out.println(vo.getOpt());
		int result = dao.updateUser(vo);
		if(result > 0) {
			System.out.println("succeeded!");
		} else {
			System.out.println("T.T");			
		}
		return result;
	}
}