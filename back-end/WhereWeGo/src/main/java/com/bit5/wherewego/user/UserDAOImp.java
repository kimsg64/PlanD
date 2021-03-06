package com.bit5.wherewego.user;

import com.bit5.wherewego.buy.BuyVO;

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

	public int usePoint(BuyVO vo); //포인트사용
	
	// 중복확인
	public int idDoubleCheck(UserVO vo);

	public int userPhotoChange(UserVO vo);

	public int plusPoint(String userid);
}
