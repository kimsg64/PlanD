package com.bit5.wherewego.ad;

import java.util.List;

public interface AdDAOImp {
	public int insertAd(AdVO vo); //광고신청(폼)
	public int adRegisterOk(AdVO vo); //광고신청(전송)
	public int newAdCount(); //새로운 광고 카운트
	public int ingAdCount(String b_id); //진행중광고카운트
	public int yetAdCount(String b_id); //검토중광고카운트
	public int edAdCount(String b_id); //완료된광고카운트
	public int payAdCount(String b_id); //미결제광고카운트
	public String adMoneySelect(String startdate, String enddate); //광고가격측정
	public AdVO adView(int adnum);
	public int adDelete(int adnum);
	public int totalAdCount(String searchKey, String searchWord);
	public List<AdVO> adAllSelect(int num1, int num2, String searchKey, String searchWord);
	public int editOk(AdVO vo);

}
