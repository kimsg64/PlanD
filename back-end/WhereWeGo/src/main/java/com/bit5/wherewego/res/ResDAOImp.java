package com.bit5.wherewego.res;

import java.util.List;


public interface ResDAOImp {
	public List<ResVO> resAllSelect(int num1, int num2, String string, String string2); //예약 리스트 (전체불러오기)
	public int totalResCount(String string, String string2); //페이징
	public int insertRes(String userid, int c_num, String resdate);
	public ResVO resView(String res_num);
	public String selectResnum(ResVO vo);
}



