package com.bit5.wherewego.place;

import java.util.List;

import com.bit5.wherewego.notice.PagingVO;

public interface PlaceDAOImp {
	public List<PlaceVO> placeAllSelect(int num1, int num2);
	public int totalRecordCount(PagingVO pVo); //페이징
}
