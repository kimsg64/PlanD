package com.bit5.wherewego.user;



import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class UserController {
	UserDAO dao = new UserDAO();
	
	// 회원가입
	@PostMapping(path = "/setUserData")
	public int getUserData(@RequestBody UserVO userData) {
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
		int result = dao.selectUser(userData);
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
		session.setAttribute("logid", loginId);
		System.out.println(session.getAttribute("loginId"));
		return true;
	}
	
	// 유저 데이터 받기
	@PostMapping(path = "/getUserData")
	public UserVO selectUserData(@RequestBody UserVO userData) {
		System.out.println(userData.getUserId());
		UserVO vo = dao.selectUser(userData.getUserId());
		System.out.println(vo.getName());
		System.out.println(vo.getPoint());
		System.out.println(vo.getStartdate());
		System.out.println(vo.getRegdate());
		System.out.println(vo.getZzim());
		
		return vo;
	}
}