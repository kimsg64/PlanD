package com.bit5.wherewego.user;

public interface UserDAOImp {
	// 유저 추가(회원가입)
	public int insertUser(UserVO userData);
	
	// 유저 선택(로그인)
	public int selectUserToLogin(UserVO userData);
	
	// 유저 선택(로그인된 유저 정보)
	public UserVO selectUser(String userId);

	public UserVO userForPay(String cookie);
	
	// 유저 개인정보 수정
	public int updateUser(UserVO vo);
}
