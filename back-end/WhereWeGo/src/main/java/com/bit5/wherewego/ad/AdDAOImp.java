package com.bit5.wherewego.ad;

import java.util.List;

public interface AdDAOImp {
	public List<AdVO> adAllSelect();

	public int totalRecordCount();
	public int insertAd(AdVO vo);
}
