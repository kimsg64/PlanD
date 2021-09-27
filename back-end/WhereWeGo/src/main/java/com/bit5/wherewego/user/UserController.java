package com.bit5.wherewego.user;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
	UserDAO dao = new UserDAO();
	
	@PostMapping(path = "/user/getUserData")
	public String getUserData(@RequestBody UserVO userData) {
		System.out.println(userData.getUserId());
		System.out.println(userData.getUserPwd());
		System.out.println(userData.getUserName());
		System.out.println(userData.getUserNum());
		System.out.println(userData.getUserTel());
		System.out.println(userData.getUserEmail());
		System.out.println(userData.getUserZipcode());
		System.out.println(userData.getUserAddr());
		System.out.println(userData.getUserAddrDetail());
		System.out.println(userData.getUserDate());
		System.out.println(userData.getUserOption());
		int result = dao.insertUser(userData);
		if(result > 0) {
			System.out.println("you did it~!");			
		} else {
			System.out.println("fail");			
		}
		return "/";
	}

}
