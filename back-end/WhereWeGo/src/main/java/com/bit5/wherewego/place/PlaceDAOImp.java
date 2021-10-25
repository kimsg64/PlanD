package com.bit5.wherewego.place;

import java.util.List;

public interface PlaceDAOImp {

	int totalPlaceCount(String searchKey, String searchWord);
	List<PlaceVO> placeAllSelect(int num1, int num2, String searchKey, String searchWord);
	int checkPlace(PlaceVO vo);
	int insertPlace(PlaceVO vo);
	int selectPlace(PlaceVO vo);
	PlaceVO placeView(int pcode);
}
