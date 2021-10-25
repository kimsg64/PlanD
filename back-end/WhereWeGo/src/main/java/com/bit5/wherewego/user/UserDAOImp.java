package com.bit5.wherewego.user;

import java.util.List;

public interface UserDAOImp {
	// 유저 추가(회원가입)
	public int insertUser(UserVO userData);
	
	// 유저 선택(로그인)
	public int selectUserToLogin(UserVO userData);
	
	// 유저 선택(로그인된 유저 정보)
	public UserVO selectUser(String userId);
	
	//public List<UserVO> paymentPageOk(String p_num); //결제 페이지
}
