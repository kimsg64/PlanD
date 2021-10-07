package com.bit5.wherewego.user;

public interface UserDAOImp {
	// 유저 추가(회원가입)
	public int insertUser(UserVO userData);
	
	// 유저 선택(로그인)
	public int selectUser(UserVO userData);
}
