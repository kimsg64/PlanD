package com.bit5.wherewego.business;

public interface BusinessDAOImp {
	public BusinessVO loginCheck(String id, String pwd); //로그인
	public BusinessVO allselect(String id); //비지니스 정보 다 가져오기
	public BusinessVO goHome(String id); // 홈으로 이동
	public int insertBusiness(BusinessVO vo); // 가입
}
