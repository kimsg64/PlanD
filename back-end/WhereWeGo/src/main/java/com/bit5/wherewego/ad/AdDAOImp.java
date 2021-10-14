package com.bit5.wherewego.ad;

import java.util.List;

public interface AdDAOImp {
	public List<AdVO> adAllSelect(int num1, int num2);

	public int totalRecordCount();
}
