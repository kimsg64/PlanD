package com.bit5.wherewego.user;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
	UserDAO dao = new UserDAO();
	
	// 회원가입
	@PostMapping(path = "/user/getUserData")
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
	@PostMapping(path = "")
	public int userLogin(@RequestBody UserVO userData) {
		int result = dao.selectUser(userData);
		if(result > 0) {
			System.out.println("you did it~!");
		} else {
			System.out.println("fail");
		}
		return result;
	}
}