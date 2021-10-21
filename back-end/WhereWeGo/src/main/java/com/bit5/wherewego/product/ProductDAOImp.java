package com.bit5.wherewego.product;

import java.util.List;

public interface ProductDAOImp {
	public ProductVO pointshopView(int p_num);
	public int totalProductCount(String searchKey, String searchWord);
	public List<ProductVO> productAllSelect(int num1, int num2, String searchKey, String searchWord);
	
	
}
