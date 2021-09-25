package com.bit5.wherewego.user;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/user")
public class UserController {
	@PostMapping(value = "/getUserData")
	public void getUserData() {
		System.out.println("회원가입 데이터!");
	}
}
