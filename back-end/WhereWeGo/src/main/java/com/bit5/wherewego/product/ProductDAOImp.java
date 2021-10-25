package com.bit5.wherewego.product;

import java.util.List;

public interface ProductDAOImp {
	public ProductVO pointshopView(String p_num);
	public int totalProductCount(String searchKey, String searchWord);
	public List<ProductVO> productAllSelect(int num1, int num2, String searchKey, String searchWord);
	public int pdDelete(String p_num);
	public List<ProductVO> paymentPageOk(String p_num); //결제 페이지
	public int pointshopEditOk(ProductVO vo);
}
